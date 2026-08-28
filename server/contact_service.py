#!/usr/bin/env python3
"""
Riceve il form di contatto di secreative.it e manda una mail a info@secreative.it.

Gira dietro nginx su 127.0.0.1:8010 (vedi contact.service e la location /api/
nel file nginx del sito). Usa solo la libreria standard: sul server non c'è
niente da installare, e non tocca nessuno degli altri siti.

La posta esce consegnandola direttamente al server MX del dominio: exim4, che è
sulla macchina, è configurato per la sola posta locale ed è condiviso con gli
altri siti, quindi è meglio non passare di lì.

Ogni richiesta viene anche scritta su file PRIMA di provare a spedirla: se la
mail non parte, il messaggio del cliente non è comunque perduto.
"""

from __future__ import annotations

import json
import logging
import os
import re
import smtplib
import socket
import threading
import time
from collections import deque
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import formatdate, make_msgid, parseaddr
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

DEST = os.environ.get("CONTACT_DEST", "info@secreative.it")
MAIL_HOST = os.environ.get("CONTACT_MX", "mail.register.it")
MAIL_PORT = int(os.environ.get("CONTACT_MX_PORT", "25"))
SENDER = os.environ.get("CONTACT_FROM", "noreply@secreative.it")
LOG_DIR = os.environ.get("CONTACT_LOG_DIR", "/var/lib/secreative")
PORT = int(os.environ.get("CONTACT_PORT", "8010"))

MAX_BODY = 16 * 1024
LIMITS = {"nome": 80, "cognome": 80, "email": 160, "provenienza": 120, "messaggio": 4000}
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s.]+\.[^@\s]{2,}$")

logging.basicConfig(format="%(asctime)s %(levelname)s %(message)s", level=logging.INFO)
log = logging.getLogger("contatti")

# quante richieste per IP, e in quanto tempo
RATE_MAX, RATE_WINDOW = 5, 600
_hits: dict[str, deque] = {}
_lock = threading.Lock()


def rate_ok(ip: str) -> bool:
    now = time.time()
    with _lock:
        q = _hits.setdefault(ip, deque())
        while q and now - q[0] > RATE_WINDOW:
            q.popleft()
        if len(q) >= RATE_MAX:
            return False
        q.append(now)
        # ogni tanto ripulisce gli IP fermi da un pezzo
        if len(_hits) > 2000:
            for k in [k for k, v in _hits.items() if not v or now - v[-1] > RATE_WINDOW]:
                _hits.pop(k, None)
        return True


def clean(value: object, limit: int) -> str:
    """Testo su una riga sola: niente a capo, niente caratteri di controllo."""
    s = str(value or "").strip()
    s = s.replace("\r", " ").replace("\n", " ")
    s = "".join(ch for ch in s if ch == "\t" or ord(ch) >= 32)
    return s[:limit].strip()


def save(record: dict) -> None:
    """Una riga JSON per richiesta, così nulla si perde."""
    try:
        os.makedirs(LOG_DIR, exist_ok=True)
        path = os.path.join(LOG_DIR, "richieste.jsonl")
        with open(path, "a", encoding="utf-8") as fh:
            fh.write(json.dumps(record, ensure_ascii=False) + "\n")
        os.chmod(path, 0o640)
    except Exception:
        log.exception("non riesco a salvare la richiesta su file")


def send_mail(d: dict) -> None:
    nome = f"{d['nome']} {d['cognome']}".strip()

    m = EmailMessage()
    m["From"] = f"Sito SE Creative <{SENDER}>"
    m["To"] = DEST
    m["Subject"] = f"Richiesta dal sito — {nome}"
    m["Date"] = formatdate(localtime=True)
    m["Message-ID"] = make_msgid(domain="secreative.it")
    # rispondendo alla mail si scrive direttamente al cliente
    m["Reply-To"] = f"{nome} <{d['email']}>" if nome else d["email"]

    m.set_content(
        f"""Nuova richiesta dal form di secreative.it

Nome e cognome : {nome}
Email          : {d['email']}
Ci ha trovati  : {d['provenienza'] or '—'}
Ricevuta il    : {d['ricevuta']}

Messaggio
---------
{d['messaggio']}

---
Per rispondere basta premere "Rispondi": la mail va al cliente.
"""
    )

    s = smtplib.SMTP(MAIL_HOST, MAIL_PORT, timeout=30)
    try:
        s.ehlo("secreative.it")
        s.send_message(m)
    finally:
        try:
            s.quit()
        except Exception:
            s.close()


class Handler(BaseHTTPRequestHandler):
    server_version = "secreative-contatti"
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):  # il rumore di default non serve
        pass

    def _json(self, code: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    @property
    def client_ip(self) -> str:
        fwd = self.headers.get("X-Real-IP") or self.headers.get("X-Forwarded-For", "")
        return (fwd.split(",")[0].strip() or self.client_address[0])[:64]

    def do_GET(self):
        if self.path.rstrip("/") in ("/api/contact", "/api/contact/salute"):
            return self._json(200, {"ok": True, "servizio": "contatti"})
        self._json(404, {"ok": False})

    def do_POST(self):
        if self.path.rstrip("/") != "/api/contact":
            return self._json(404, {"ok": False, "errore": "non trovato"})

        try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            return self._json(413, {"ok": False, "errore": "richiesta troppo grande"})

        try:
            raw = self.rfile.read(length)
            data = json.loads(raw.decode("utf-8"))
            if not isinstance(data, dict):
                raise ValueError
        except Exception:
            return self._json(400, {"ok": False, "errore": "dati non validi"})

        # campo invisibile: lo compilano solo i robot
        if clean(data.get("sito"), 50):
            log.info("scartata come spam da %s", self.client_ip)
            return self._json(200, {"ok": True})

        d = {k: clean(data.get(k), n) for k, n in LIMITS.items()}
        d["email"] = parseaddr(d["email"])[1]

        mancanti = [k for k in ("nome", "cognome", "email", "messaggio") if not d[k]]
        if mancanti:
            return self._json(422, {"ok": False, "errore": "campi mancanti", "campi": mancanti})
        if not EMAIL_RE.match(d["email"]):
            return self._json(422, {"ok": False, "errore": "email non valida", "campi": ["email"]})
        if len(d["messaggio"]) < 10:
            return self._json(422, {"ok": False, "errore": "messaggio troppo corto", "campi": ["messaggio"]})

        if not rate_ok(self.client_ip):
            return self._json(429, {"ok": False, "errore": "troppe richieste, riprova più tardi"})

        d["ricevuta"] = datetime.now(timezone.utc).astimezone().strftime("%d/%m/%Y %H:%M")
        save({**d, "ip": self.client_ip})

        try:
            send_mail(d)
            log.info("richiesta da %s <%s> inoltrata", d["nome"], d["email"])
            return self._json(200, {"ok": True})
        except Exception as e:
            # salvata comunque: la richiesta non va persa
            log.error("invio fallito (%s): %s", type(e).__name__, e)
            return self._json(502, {"ok": False, "errore": "invio non riuscito"})


def main() -> None:
    socket.setdefaulttimeout(40)
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    srv.daemon_threads = True
    log.info("in ascolto su 127.0.0.1:%s — destinatario %s", PORT, DEST)
    srv.serve_forever()


if __name__ == "__main__":
    main()

# secreative.it

Sito portfolio di **SE Creative** — Sofia Ercolani ed Elisa Zetti.
One-page, italiano e inglese, con animazioni allo scroll.

---

## Come è fatto

| Pezzo | Cosa fa |
|---|---|
| **Astro 7** | Genera HTML statico. Nessun processo gira sul server: nginx serve dei file, come per `spesax.it` |
| **GSAP + ScrollTrigger** | Animazioni allo scroll (rivelazioni, titoli riga per riga, parallasse) |
| **Lenis** | Scorrimento inerziale |
| **@fontsource** | Font *self-hosted* (Bodoni Moda + Manrope). Nessuna chiamata a Google Fonts: più veloce e senza problemi GDPR |

Il sito pesa **4,9 MB in tutto**, di cui 4,4 MB di immagini. L'HTML è 25 KB.

---

## Comandi

```bash
npm run dev      # anteprima locale su http://localhost:4321
npm run build    # genera dist/
./deploy.sh      # build + pubblicazione sul server
```

---

## Struttura

```
src/
  i18n/ui.ts            ← TUTTI i testi, italiano e inglese
  layouts/Base.astro    ← head, SEO, GSAP, Lenis
  components/
    Nav.astro           ← barra + selettore lingua + menu mobile
    Hero.astro          ← schermata iniziale
    Work.astro          ← i 6 progetti
    Services.astro      ← i 6 servizi
    About.astro         ← chi siamo
    Reels.astro         ← video verticali
    Contact.astro       ← contatti
  pages/
    index.astro         ← versione italiana  (/)
    en/index.astro      ← versione inglese   (/en/)
public/img/
  slides/   ← composizioni prese dal portfolio
  reels/    ← fotogrammi verticali
  brands/   ← loghi clienti (fondo reso trasparente)
  logo/     ← marchio SE Creative + favicon
```

### Cambiare un testo

Si tocca **solo** `src/i18n/ui.ts`: c'è la voce italiana e quella inglese
una accanto all'altra. Poi `./deploy.sh`.

---

## Le due lingue

Non ci sono didascalie doppie in pagina: sono **due pagine separate**,
generate dallo stesso dizionario.

- `/` italiano
- `/en/` inglese
- il selettore **IT / EN** in alto passa dall'una all'altra

Google le indicizza entrambe (`hreflang` già impostato).

---

## I video

Le card della sezione *Video Production* mostrano oggi il **fotogramma**
preso dal portfolio, con l'etichetta «video in arrivo».

**Non partono da soli**: si guardano solo premendo play — così è stato chiesto.

### Per attivarli

1. Mettere i file MP4 in `public/video/` (es. `borgobrufa.mp4`)
2. In `src/components/Reels.astro`, nell'elenco in cima, sostituire `video: null`
   con il percorso:

```js
{ key: 'reels.b23', poster: '...', logo: '...', video: '/video/borgobrufa.mp4' },
```

3. `./deploy.sh`

Comparirà il tasto play e il video si aprirà a schermo intero.
Consiglio: MP4 H.264, lato lungo max 1080px, sotto i 10 MB l'uno.

---

## Il server

```
Debian 13 · nginx · 57.131.42.4
config: /etc/nginx/sites-available/secreative
file:   /var/www/secreative
```

Convive con gli altri siti già presenti (spesax.it, altesiasuite.com,
wikideas.it, parlamento.wikideas.it) senza interferire: è un blocco
`server` a sé, selezionato per `server_name`.

### HTTPS

Il certificato si ottiene **dopo** che il dominio punta al server:

```bash
sudo certbot --nginx -d secreative.it -d www.secreative.it
```

Certbot riscrive da solo il file di configurazione aggiungendo il blocco
443 e il redirect da HTTP, come ha già fatto per gli altri domini.
Il rinnovo è automatico.

---

## Da fare

- [ ] DNS su Register.it: record **A** di `@` e `www` → `57.131.42.4`
- [ ] `certbot` per HTTPS (dopo il DNS)
- [ ] Caricare i video veri
- [ ] Far rileggere i testi dei progetti a Sofia ed Elisa
- [ ] Numeri della sezione «Studio» (30+ progetti, 5+ anni, 10+ settori): sono
      stime messe come segnaposto, vanno confermate

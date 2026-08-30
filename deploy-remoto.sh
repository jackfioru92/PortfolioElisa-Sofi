#!/usr/bin/env bash
#
# La parte che gira SUL SERVER: scompatta il pacchetto e scambia la cartella.
#
#   scp deploy-remoto.sh secreative-dist.tgz debian@IP:/tmp/
#   ssh -t debian@IP 'sudo bash /tmp/deploy-remoto.sh'
#
# Esiste come file perché da Windows non si riesce a passare lo stesso
# comando fra virgolette: PowerShell toglie quelle interne, `ssh` riunisce
# gli argomenti con degli spazi, e al server arriva `sudo bash -c set` con
# tutto il resto eseguito SENZA sudo. Con un file non c'è niente da citare.
#
# Non tocca nginx, non tocca gli altri siti: scrive solo dentro $DEST.

set -euo pipefail

DEST="${DEST:-/var/www/secreative}"
TGZ="${TGZ:-/tmp/secreative-dist.tgz}"

if [ "$(id -u)" -ne 0 ]; then
  echo "✗ Va lanciato con sudo:  sudo bash $0" >&2
  exit 1
fi

if [ ! -f "$TGZ" ]; then
  echo "✗ Manca $TGZ — ricarica il pacchetto:" >&2
  echo "    scp dist.tgz debian@IP:/tmp/secreative-dist.tgz" >&2
  exit 1
fi

echo "▸ Scompatto in ${DEST}.new"
rm -rf "${DEST}.new"
mkdir -p "${DEST}.new"
tar xzf "$TGZ" -C "${DEST}.new"
chown -R www-data:www-data "${DEST}.new"

nuovi=$(find "${DEST}.new" -type f | wc -l)
if [ "$nuovi" -lt 10 ]; then
  echo "✗ Solo $nuovi file nel pacchetto: sembra sbagliato, non scambio niente" >&2
  rm -rf "${DEST}.new"
  exit 1
fi

echo "▸ Scambio (il sito non resta mai a metà)"
rm -rf "${DEST}.old"
[ -d "$DEST" ] && mv "$DEST" "${DEST}.old"
mv "${DEST}.new" "$DEST"
rm -rf "${DEST}.old"
rm -f "$TGZ"

echo "✓ Pubblicati $(find "$DEST" -type f | wc -l) file in $DEST"

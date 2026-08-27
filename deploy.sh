#!/usr/bin/env bash
#
# Pubblica secreative.it sul server.
#
#   ./deploy.sh
#
# Costruisce il sito in locale e carica SOLO i file statici in /var/www/secreative.
# Non tocca nginx, non tocca gli altri siti, non installa niente sul server.
#
# La password del server viene chiesta due volte (una per l'invio, una per
# l'installazione). Per non digitarla più:
#   ssh-copy-id debian@57.131.42.4
#
set -euo pipefail

HOST="debian@57.131.42.4"
DEST="/var/www/secreative"
HERE="$(cd "$(dirname "$0")" && pwd)"

cd "$HERE"

echo "▸ Build"
npm run build

echo "▸ Pacchetto"
TGZ="$(mktemp -t secreative).tgz"
# --no-xattrs evita i file ._* dei metadati macOS
tar --no-xattrs -czf "$TGZ" -C dist .

echo "▸ Invio al server"
scp "$TGZ" "$HOST:/tmp/secreative-dist.tgz"

echo "▸ Installazione"
ssh "$HOST" "set -e
  sudo rm -rf ${DEST}.new
  sudo mkdir -p ${DEST}.new
  sudo tar xzf /tmp/secreative-dist.tgz -C ${DEST}.new
  sudo chown -R www-data:www-data ${DEST}.new
  # scambio quasi istantaneo: il sito non resta mai a metà
  sudo rm -rf ${DEST}.old
  [ -d ${DEST} ] && sudo mv ${DEST} ${DEST}.old
  sudo mv ${DEST}.new ${DEST}
  sudo rm -rf ${DEST}.old
  rm -f /tmp/secreative-dist.tgz
  echo '  file pubblicati:' \$(find ${DEST} -type f | wc -l)"

rm -f "$TGZ"

echo "▸ Verifica"
for p in / /en/; do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 20 "https://secreative.it$p" 2>/dev/null \
      || curl -s -o /dev/null -w "%{http_code}" --max-time 20 --resolve secreative.it:80:57.131.42.4 "http://secreative.it$p")
  printf "  %-8s HTTP %s\n" "$p" "$code"
done

echo "✓ Fatto"

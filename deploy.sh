#!/usr/bin/env bash
#
# Pubblica il sito sul server.
#
#   ./deploy.sh
#
# Costruisce il sito in locale e carica SOLO i file statici.
# Non tocca nginx, non tocca gli altri siti, non installa niente sul server.
#
# I dati del server stanno in `deploy.env`, che non viene pubblicato.
# Alla prima volta:  cp deploy.env.example deploy.env  e compilalo.
#
# Per non digitare più la password:  ssh-copy-id "$HOST"
#
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"

if [ ! -f deploy.env ]; then
  echo "✗ manca deploy.env — copialo da deploy.env.example e compilalo" >&2
  exit 1
fi
# shellcheck disable=SC1091
source ./deploy.env
: "${HOST:?manca HOST in deploy.env}"
: "${DEST:?manca DEST in deploy.env}"
: "${SITE:?manca SITE in deploy.env}"

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
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 25 "https://${SITE}${p}")
  printf "  %-8s HTTP %s\n" "$p" "$code"
done

echo "✓ Fatto — https://${SITE}"

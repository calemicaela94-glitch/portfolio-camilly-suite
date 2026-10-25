#!/usr/bin/env bash
# Publica o portefólio no link público PERMANENTE.
#
# Como funciona: compila o site para `dist/` (com caminhos relativos `./`),
# guarda essa pasta no GitHub e o CDN (raw.githack) serve esses ficheiros
# públicos. Não depende deste computador estar ligado, nem de túneis
# temporários que mudam de endereço a cada arranque.
#
# Uso:  ./scripts/publicar.sh
set -euo pipefail

PROJETO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJETO"

REPO="calemicaela94-glitch/portfolio-camilly-suite"
BRANCH="$(git branch --show-current)"
LINK="https://raw.githack.com/$REPO/$BRANCH/dist/index.html"

echo "→ A compilar o site (base relativa ./)…"
npm run build

echo "→ A guardar o build no GitHub…"
git add -A
if git diff --cached --quiet; then
  echo "  (nada mudou desde a última publicação)"
else
  git commit -q -m "Update published build ($(date '+%Y-%m-%d %H:%M'))"
  git push origin "$BRANCH"
fi

echo
echo "Link público fixo: $LINK"
printf "→ A confirmar que responde… "
CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 "$LINK" || true)"
if [ "$CODE" = "200" ]; then
  echo "✅ HTTP 200 — está no ar."
  echo "  (o CDN guarda em cache ~1 minuto; se ainda não vês as alterações, refresca daqui a pouco)"
else
  echo "⚠️ HTTP $CODE — tenta novamente daqui a um minuto."
fi

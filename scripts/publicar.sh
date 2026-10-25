#!/usr/bin/env bash
# Publica o portefólio num link público PERMANENTE.
#
# Faz três coisas:
#  1. compila o site para `dist/` (com caminhos relativos `./`);
#  2. guarda `dist/` no branch `main` do GitHub;
#  3. copia o mesmo build para o branch `gh-pages`, que é o que o
#     GitHub Pages serve em https://calemicaela94-glitch.github.io/portfolio-camilly-suite/
#
# Nada disto depende deste computador estar ligado.
#
# Uso:  ./scripts/publicar.sh
set -euo pipefail

PROJETO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJETO"

REPO="calemicaela94-glitch/portfolio-camilly-suite"
BRANCH="$(git branch --show-current)"
LINK="https://calemicaela94-glitch.github.io/portfolio-camilly-suite/"
ESPELHO="https://raw.githack.com/$REPO/$BRANCH/dist/index.html"

echo "→ A compilar o site (base relativa ./)…"
npm run build

echo "→ A guardar o build no branch $BRANCH…"
git add -A
if git diff --cached --quiet; then
  echo "  (nada mudou desde a última publicação)"
else
  git commit -q -m "Update published build ($(date '+%Y-%m-%d %H:%M'))"
  git push origin "$BRANCH"
fi

echo "→ A actualizar o GitHub Pages (branch gh-pages)…"
TMPW="$(mktemp -d)"
cleanup() {
  git worktree remove --force "$TMPW" 2>/dev/null || true
  rm -rf "$TMPW"
}
trap cleanup EXIT

git fetch -q origin gh-pages
git worktree add -q -B gh-pages "$TMPW" origin/gh-pages
find "$TMPW" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist/. "$TMPW"/
touch "$TMPW/.nojekyll"
(
  cd "$TMPW"
  git add -A
  if git diff --cached --quiet; then
    echo "  (Pages já estava actualizado)"
  else
    git commit -q -m "Publish build ($(date '+%Y-%m-%d %H:%M'))"
    git push -q origin gh-pages
    echo "  Pages actualizado ✅"
  fi
)
cleanup
trap - EXIT

echo
echo "Link público fixo:      $LINK"
echo "Espelho (CDN, backup): $ESPELHO"
printf "→ A confirmar o link… "
CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 "$LINK" || true)"
if [ "$CODE" = "200" ]; then
  echo "✅ HTTP 200 — está no ar."
  echo "  (o GitHub leva ~1 minuto a publicar; refresca com Ctrl+Shift+R se não vires a versão nova)"
else
  echo "⚠️ HTTP $CODE — o GitHub Pages pode ainda estar a construir; tenta daqui a um minuto."
fi

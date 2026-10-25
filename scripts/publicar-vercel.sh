#!/usr/bin/env bash
# Publica o portefólio na Vercel (link tipo https://portfolio-camilly.vercel.app).
#
# Precisa de um token da Vercel, que se cria em:
#   https://vercel.com/account/tokens  →  Create Token  →  copiar
#
# Depois guarda o token UMA vez (fora do git, no ambiente):
#   echo 'o-teu-token' > /config/.vercel-token && chmod 600 /config/.vercel-token
#
# Uso:  ./scripts/publicar-vercel.sh
set -euo pipefail

PROJETO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJETO"

TOKEN="${VERCEL_TOKEN:-}"
if [ -z "$TOKEN" ] && [ -f /config/.vercel-token ]; then
  TOKEN="$(tr -d '[:space:]' < /config/.vercel-token)"
fi
if [ -z "$TOKEN" ]; then
  echo "❌ Falta o token da Vercel."
  echo "   Cria em https://vercel.com/account/tokens e guarda com:"
  echo "   echo 'o-teu-token' > /config/.vercel-token && chmod 600 /config/.vercel-token"
  exit 1
fi

echo "→ A compilar…"
npm run build

echo "→ A publicar na Vercel (produção)…"
npx --yes vercel@latest deploy --prod --yes --token "$TOKEN" 2>&1 | tee /tmp/vercel-deploy.log | tail -8

LINK="$(grep -oE 'https://[a-z0-9.-]+\.vercel\.app' /tmp/vercel-deploy.log | tail -1 || true)"
echo
if [ -n "$LINK" ]; then
  echo "Link Vercel: $LINK"
else
  echo "Não consegui ler o link no output — vê /tmp/vercel-deploy.log"
fi

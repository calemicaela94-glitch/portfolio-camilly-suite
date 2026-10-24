#!/usr/bin/env bash
# Publica o portefólio com um link público temporário (Cloudflare quick tunnel).
# Uso: ./scripts/publicar.sh   → imprime o link no fim.
set -euo pipefail

PROJETO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJETO"

echo "→ A compilar o site…"
VITE_BASE=/ npm run build >/tmp/portfolio-build.log 2>&1 || { tail -n 20 /tmp/portfolio-build.log; exit 1; }

# 1) Servidor estático em 4173 (arranca só se não estiver vivo)
if ! curl -sf -o /dev/null "http://127.0.0.1:4173/"; then
  echo "→ A arrancar o servidor estático (porta 4173)…"
  nohup npx vite preview --port 4173 >/tmp/portfolio-preview.log 2>&1 </dev/null &
  sleep 4
fi

# 2) Túnel público
CLOUDFLARED="$(command -v cloudflared || echo /tmp/cloudflared)"
if ! pgrep -f "cloudflared tunnel --url http://127.0.0.1:4173" >/dev/null 2>&1; then
  echo "→ A abrir o túnel público…"
  nohup "$CLOUDFLARED" tunnel --url http://127.0.0.1:4173 --no-autoupdate \
    >/tmp/portfolio-tunel.log 2>&1 </dev/null &
  sleep 12
fi

LINK="$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' /tmp/portfolio-tunel.log | head -1 || true)"
if [ -z "$LINK" ]; then
  echo "Não consegui obter o link. Vê /tmp/portfolio-tunel.log"
  exit 1
fi

echo
echo "Link público: $LINK"
echo "(enquanto este computador estiver ligado e o túnel a correr)"

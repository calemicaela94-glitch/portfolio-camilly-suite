#!/usr/bin/env bash
# Guardião da prévia local do portefólio.
#
# Fica em ciclo a verificar se o servidor Vite da porta 5173 está vivo e,
# se tiver caído (por exemplo depois de um reinício do container), volta a
# arrancá-lo. Assim a prévia `/absproxy/5173/` deixa de dar "link morto".
#
# Arrancar em segundo plano:
#   nohup ./scripts/guardiao-previa.sh >/tmp/portfolio-guardiao.log 2>&1 &
set -uo pipefail

PROJETO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJETO"

PORTA=5173
URL_CHECK="http://127.0.0.1:${PORTA}/absproxy/${PORTA}/"
LOG_DEV="/tmp/portfolio-dev.log"
PIDFILE="/tmp/portfolio-guardiao.pid"

# Só pode haver um guardião: usa ficheiro de PID (pgrep apanhava o próprio
# comando que o arranca e impedia o guardião de iniciar).
if [ -f "$PIDFILE" ]; then
  PID_ANTIGO="$(cat "$PIDFILE" 2>/dev/null || true)"
  if [ -n "${PID_ANTIGO:-}" ] && kill -0 "$PID_ANTIGO" 2>/dev/null; then
    echo "Já existe um guardião a correr (PID $PID_ANTIGO). A sair."
    exit 0
  fi
fi
echo $$ >"$PIDFILE"
trap 'rm -f "$PIDFILE"' EXIT

echo "[$(date '+%Y-%m-%d %H:%M:%S')] guardião iniciado (prévia na porta ${PORTA})"

while true; do
  if ! curl -sf -o /dev/null --max-time 5 "$URL_CHECK"; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] prévia em baixo — a arrancar o Vite…"
    nohup npx vite --host --port "$PORTA" --base="/absproxy/${PORTA}/" \
      >>"$LOG_DEV" 2>&1 </dev/null &
    sleep 6
    if curl -sf -o /dev/null --max-time 5 "$URL_CHECK"; then
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] prévia de volta ✅"
    else
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] ainda não respondeu (ver $LOG_DEV)"
    fi
  fi
  sleep 30
done

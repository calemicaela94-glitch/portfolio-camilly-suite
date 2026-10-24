# Como dar um link público ao portefólio

## Atalho (o que está a ser usado agora)

```bash
./scripts/publicar.sh
```

Compila o site, arranca o servidor estático na porta 4173 e abre um túnel
Cloudflare. No fim imprime um link do tipo:

```
https://alguma-coisa-aleatoria.trycloudflare.com
```

Esse link é **público** — qualquer pessoa, em qualquer lado, abre o portefólio.
Mas é **temporário**: morre quando o computador desliga ou o processo para
(cada arranque dá um endereço novo). Serve para mostrar a alguém já.

Para parar: `pkill -f "cloudflared tunnel --url http://127.0.0.1:4173"`.

---

## Link fixo e permanente (recomendado a seguir)

O GitHub Pages está bloqueado nesta conta (`The job was not started because your
account is locked due to a billing issue`) e por isso o Actions não corre e o
Pages não publica. Duas saídas gratuitas:

### Opção A — Vercel (5 minutos, link tipo `portfolio-camilly.vercel.app`)
1. Entrar em [vercel.com](https://vercel.com) com a conta GitHub `calemicaela94-glitch`.
2. *Add New… → Project* → escolher `portfolio-camilly-suite` → **Deploy**.
3. Deteta Vite sozinho (`npm run build`, pasta `dist`). A partir daí, cada
   `git push` publica automaticamente.

### Opção B — Netlify (igual, link tipo `portfolio-camilly.netlify.app`)
1. [app.netlify.com](https://app.netlify.com) → *Add new site → Import an existing project*.
2. Escolher o repo → Build command `npm run build`, Publish directory `dist`.

Ambas são gratuitas e não pedem cartão. Assim que estiver criado, o link é fixo
e atualiza sozinho a cada alteração.

### Opção C — resolver a faturação do GitHub
Se o bloqueio da conta GitHub for regularizado (Settings → Billing), o
`.github/workflows/deploy-pages.yml` volta a funcionar e publica em
`https://calemicaela94-glitch.github.io/portfolio-camilly-suite/`.

---

## Notas técnicas

- `npm run build` gera `dist/` (ficheiros estáticos, sem backend).
- `VITE_BASE=/` para domínio próprio/túnel; `VITE_BASE=/portfolio-camilly-suite/`
  só se for para GitHub Pages de projeto.
- A prévia dentro do VS Code continua em `/absproxy/5173/` (`npm run dev:preview`).

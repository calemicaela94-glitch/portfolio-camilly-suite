# Link público do portefólio — agora é fixo

## O link (já não muda, já não morre)

```
https://raw.githack.com/calemicaela94-glitch/portfolio-camilly-suite/main/dist/index.html
```

Este link abre o portefólio a qualquer pessoa, em qualquer lado, **sem precisar
deste computador ligado**. Podes pôr no LinkedIn, no CV, no email.

## Porque é que o link antigo morria

O link anterior era um **túnel temporário** do Cloudflare
(`https://algo-aleatorio.trycloudflare.com`). Túneis destes:

- mudam de endereço **a cada arranque** (nunca é o mesmo link duas vezes);
- **morrem** quando o computador desliga, o processo para ou o container
  reinicia.

Ou seja: o link não estava "estragado" — tinha simplesmente deixado de existir.
Não havia como o manter.

## Como funciona o link novo

1. `npm run build` compila o site para a pasta `dist/`.
2. A pasta `dist/` está **versionada no GitHub** (foi tirada do `.gitignore` de
   propósito).
3. O CDN **raw.githack** serve esses ficheiros diretamente do repositório.

Assim o site fica alojado no GitHub (grátis, permanente) e o CDN trata de o
entregar ao browser. O `vite.config.ts` usa `base: "./"` para os assets
(`./assets/...`) funcionarem em qualquer caminho — era isto que fazia a página
ficar em branco noutros alojamentos.

## Publicar alterações novas

```bash
./scripts/publicar.sh
```

Faz tudo: compila, guarda o build no GitHub (commit + push) e confirma que o
link responde. O CDN guarda em cache ~1 minuto; se ainda não vires a versão
nova, refresca daí a pouco (Ctrl+Shift+R).

## Prévia dentro do VS Code (para trabalhar)

```
https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/
```

Há um **guardião** a correr ([`scripts/guardiao-previa.sh`](scripts/guardiao-previa.sh))
que verifica de 30 em 30 segundos se o servidor está vivo e volta a arrancá-lo
se ele cair. Arranca sozinho ao abrir um terminal (bloco no `~/.bashrc`).

Parar o guardião: `kill "$(cat /tmp/portfolio-guardiao.pid)"`

## Alternativas de link próprio (quando quiseres um domínio bonito)

O link do raw.githack é permanente mas feio. Quando quiseres
`portfolio-camilly.vercel.app` ou `micaelacale.com`:

- **Vercel** — vercel.com → *Add New Project* → escolher este repositório →
  Deploy (deteta Vite sozinho). Cada `git push` publica.
- **Netlify** — igual, build `npm run build`, publish `dist`.
- **GitHub Pages** — continua bloqueado por faturação na conta
  (`The job was not started because your account is locked due to a billing issue`).
  Se regularizares a faturação, o workflow `.github/workflows/deploy-pages.yml`
  volta a publicar em `https://calemicaela94-glitch.github.io/portfolio-camilly-suite/`.

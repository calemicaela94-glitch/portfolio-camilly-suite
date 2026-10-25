# Link público do portefólio

## O link (abre direto o portefólio, sem página nenhuma antes)

👉 **https://calemicaela94-glitch.github.io/**

Este é **o link principal**: é o *site de utilizador* do GitHub Pages, servido na
raiz do domínio, sem caminho nenhum atrás e sem intermediários. Verificado:
HTTP 200 e o `<title>` é o do portefólio.

Link alternativo (mesmo conteúdo, dentro do caminho do projecto):

```
https://calemicaela94-glitch.github.io/portfolio-camilly-suite/
```

**Espelho de segurança** (CDN, caso o GitHub esteja lento):

```
https://raw.githack.com/calemicaela94-glitch/portfolio-camilly-suite/main/dist/index.html
```

## Vercel (link `*.vercel.app`) — activo

👉 **https://portfolio-camilly-suite.vercel.app/**

O deploy foi reclamado e está em produção na conta Vercel da Micaela.
Verificado: HTTP 200, HTML do portefólio, JS e CSS a 200, HTTPS com HSTS.

Para que cada `git push` publique sozinho na Vercel, basta uma vez no painel:
*Project → Settings → Git → Connect Git Repository* → escolher
`calemicaela94-glitch/portfolio-camilly-suite`.

Para publicar por linha de comando (sem painel), criar um token em
<https://vercel.com/account/tokens> e guardá-lo uma vez:

```bash
echo 'o-teu-token' > /config/.vercel-token && chmod 600 /config/.vercel-token
./scripts/publicar-vercel.sh
```

Ficheiros já preparados: [`vercel.json`](vercel.json) (framework Vite, output
`dist`) e [`scripts/publicar-vercel.sh`](scripts/publicar-vercel.sh).

## Histórico: porque é que os links antigos morriam ou mostravam páginas à frente

| Link                                 | O que era                              | Porque falhava                                     |
| ------------------------------------ | -------------------------------------- | -------------------------------------------------- |
| `*.trycloudflare.com`                | túnel temporário do Cloudflare         | morria a cada reinício e mudava de endereço        |
| `cdn.jsdelivr.net/...`               | CDN a servir HTML do GitHub            | devolve `text/plain` → mostra código em vez do site |
| `raw.githack.com`                    | CDN a servir HTML do GitHub            | funciona, mas é um domínio técnico pouco fidedigno |

O **GitHub Pages** é o sítio "oficial" do GitHub para sites: serve o ficheiro
como página web normal, na raiz do caminho, sem intermediários.

## Como está montado

- **Repositório `calemicaela94-glitch.github.io`** (o "site de utilizador") —
  recebe o build na raiz e é servido em `https://calemicaela94-glitch.github.io/`.
- **Branch `gh-pages`** deste projecto — recebe o mesmo build e serve em
  `https://calemicaela94-glitch.github.io/portfolio-camilly-suite/`.
- O Pages está em modo **"Deploy from a branch"** (não usa Actions, por isso o
  bloqueio de faturação da conta não o afecta).
- O **`main`** guarda o código-fonte **e** também `dist/` (para o espelho no CDN).
- O `vite.config.ts` usa `base: "./"`, por isso os assets resolvem tanto em
  `/portfolio-camilly-suite/` como na raiz de um domínio próprio.

## Publicar alterações

```bash
./scripts/publicar.sh
```

Compila, guarda no `main`, espelha no `gh-pages` e confirma que o link responde.

## Domínio próprio (bonito, tipo `micaelacale.pt`)

### O que é grátis e o que não é

- **`.pt` (Amen.pt ou outro registador): NÃO é grátis.** O Amen.pt é uma loja de
  registo; um `.pt` custa cerca de 15–20 € por ano. Não existe forma legítima de
  obter um `.pt` a zero.
- **`is-a.dev`: grátis.** Subdomínios para programadores, aprovados por Pull
  Request no repositório público deles. Já foi pedido o
  **`micaelacale.is-a.dev`** → PR [#58405](https://github.com/is-a-dev/register/pull/58405)
  (apontado para `calemicaela94-glitch.github.io`). Quando for aprovado, diz-se
  aqui como ligar.
- **`.eu.org`: grátis**, mas a aprovação é manual e demora semanas.

### Passos para ligar um domínio próprio ao GitHub Pages (quando houver)

1. No DNS do domínio, criar `CNAME` → `calemicaela94-glitch.github.io`.
2. No repositório → *Settings → Pages → Custom domain* → escrever o domínio.
3. Marcar **Enforce HTTPS** (o certificado é emitido automaticamente).
4. No `vite.config.ts` **não é preciso mexer**: a base `./` já serve na raiz.

## Prévia local (para trabalhar)

```
https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/
```

Guardião: [`scripts/guardiao-previa.sh`](scripts/guardiao-previa.sh) — verifica a
cada 30 s se o servidor caiu e volta a arrancá-lo. Arranca sozinho ao abrir um
terminal. Parar: `kill "$(cat /tmp/portfolio-guardiao.pid)"`

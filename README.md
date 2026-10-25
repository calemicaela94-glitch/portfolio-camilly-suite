# Portefólio — Desenvolvedora de Software & Criadora da Camilly Suite

Site de portefólio (página única) em **React + Vite + TypeScript + Tailwind CSS**.
Tema escuro elegante, acentos em tons de pétala (rosa, lilás, verde-menta, âmbar, azul-céu).

---

## Link público (fixo, abre direto no site)

👉 **https://portfolio-camilly-suite.vercel.app/** (Vercel, HTTPS)

Também disponível em **https://calemicaela94-glitch.github.io/** (GitHub Pages,
na raiz do domínio) e em
`https://calemicaela94-glitch.github.io/portfolio-camilly-suite/`.

Espelho/CDN: `https://raw.githack.com/calemicaela94-glitch/portfolio-camilly-suite/main/dist/index.html`

Nenhum destes depende deste computador estar ligado.

Publicar alterações:

```bash
./scripts/publicar.sh   # compila e publica nos três destinos, depois confirma o link
```

Domínio próprio: ver [`PUBLICAR.md`](PUBLICAR.md) (o `.pt` é pago no Amen.pt;
`is-a.dev` é grátis e já está pedido).

## Como ver o site a trabalhar (prévia local)

```bash
npm install          # só a primeira vez
npm run dev          # http://localhost:5173
```

No VS Code / code-server (ambiente da Micaela) usar sempre a versão com proxy:

```bash
npm run dev:preview  # porta 5173 + base /absproxy/5173/
```

Link da prévia: `https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/`

Se a prévia cair, o guardião volta a arrancá-la sozinho:

```bash
nohup ./scripts/guardiao-previa.sh >/tmp/portfolio-guardiao.log 2>&1 &
```

Build de produção: `npm run build` (gera `dist/`, que está versionado no git de
propósito — é o que alimenta o link público).

---

## Estrutura

```
src/
├── App.tsx                     # junta as secções na ordem final
├── main.tsx                    # arranque do React
├── index.css                   # Tailwind + classes base (container-page, card-surface, badge…)
├── data/site.ts                # ⚙️ TODO O CONTEÚDO DO SITE (textos, módulos, serviços, contactos)
├── lib/cores.ts                # mapa de classes Tailwind por cor de pétala
└── components/
    ├── Navbar.tsx              # cabeçalho fixo + menu móvel
    ├── Hero.tsx                # secção 1 — título, subtítulo, botões, métricas
    ├── PhoneMock.tsx           # maquete de telemóvel (ecrã da Reading Tracker)
    ├── FeaturedProject.tsx     # secção 2 — Camilly Reading Tracker (prova social)
    ├── SuiteSection.tsx        # secção 3 — ecossistema Camilly Suite e módulos
    ├── Services.tsx            # secção 4 — serviços + processo em 4 passos
    ├── Contact.tsx             # secção 5 — chamada à ação / contacto
    ├── Footer.tsx              # rodapé
    └── ui/                     # componentes reutilizáveis
        ├── Button.tsx          # botão/link com variantes (primario, secundario, fantasma)
        ├── Badge.tsx           # etiqueta com ponto de cor
        ├── Section.tsx         # wrapper de secção (eyebrow + título + descrição)
        └── PetalGlow.tsx       # mancha de luz decorativa de fundo
```

---

## Como editar os conteúdos

Quase tudo vive num único ficheiro: [`src/data/site.ts`](src/data/site.ts).

| Quero mudar…                    | Onde                                                        |
| ------------------------------- | ----------------------------------------------------------- |
| Email, nome, localização        | `dadosPessoais`                                             |
| Título/subtítulo do topo        | `hero`                                                      |
| Botões do topo                  | `hero.acoes`                                                |
| Números (Play Store, 3 módulos) | `hero.metricas`                                             |
| App em destaque e link da loja  | `projetoDestaque` (campo `linkLoja`)                        |
| Módulos da suite                | `suite.modulos` (`destaque: true` marca o flagship)         |
| Serviços e passos do processo   | `servicos.itens` / `servicos.processo`                      |
| Contacto e garantias            | `contacto`                                                  |
| Menu de navegação               | `navegacao`                                                 |

Cada módulo/serviço aceita `icone` (qualquer ícone de `lucide-react`) e
`cor` (`rose`, `lilac`, `mint`, `amber`, `sky`). Para adicionar um módulo novo,
basta acrescentar um objeto ao array — o layout adapta-se.

---

## Formulário de orçamento

O botão **Pedir orçamento** (navbar, topo, serviços e contacto) abre um modal
([`FormularioOrcamento.tsx`](src/components/orcamento/FormularioOrcamento.tsx))
com Nome, Email, Tipo de projeto e Mensagem.

- Envia por `POST` para `dadosPessoais.endpointFormulario` em
  [`src/data/site.ts`](src/data/site.ts) — **FormSubmit**, que entrega o pedido
  por email em `calemicaela94@gmail.com`. Grátis, sem conta.
- A primeira submissão obriga a **ativar o formulário** através do link que o
  FormSubmit envia para esse email (só uma vez).
- Se o serviço falhar, o modal mostra o plano B: abrir no email do visitante com
  tudo preenchido (`mailto:`) ou copiar o endereço.
- Para voltar ao modo `mailto` puro, basta pôr `endpointFormulario: ""`.

---

## Detalhes técnicos

- **Sem dependências pesadas:** React, `lucide-react` (ícones) e Tailwind. Sem bibliotecas de animação.
- **Tema:** cores definidas em [`tailwind.config.js`](tailwind.config.js) (`ink.*` para fundo, `petal.*` para acentos). O nome do tema é a única coisa a mudar para reskin completo.
- **Responsivo:** mobile-first; grelhas passam de 1 → 2 → 3 colunas; menu hambúrguer abaixo de `md`.
- **Acessibilidade:** foco visível em todos os elementos interativos, `aria-label` na navegação, elementos decorativos com `aria-hidden`.
- **SEO básico:** `title`, `description` e Open Graph no [`index.html`](index.html).
- **Link da Play Store:** `https://play.google.com/store/apps/details?id=com.camillyreading.tracker`
  (verificado a 24/10/2026: HTTP 200, app publicada por "Micaela Calé", categoria "Livros e referências").
  ⚠️ O `applicationId` do build local em `camilly-readingtracker/android/app/build.gradle` é
  `com.camillyreading.app` — **não é** o id publicado. Usar sempre `com.camillyreading.tracker` em links públicos.

---

## Publicar

O `dist/` gerado por `npm run build` é estático: pode ir para Vercel, Netlify,
Cloudflare Pages ou GitHub Pages sem configuração extra (sem rotas, é uma página só).

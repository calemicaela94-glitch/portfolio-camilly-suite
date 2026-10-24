# Portefólio — Desenvolvedora de Software & Criadora da Camilly Suite

Site de portefólio (página única) em **React + Vite + TypeScript + Tailwind CSS**.
Tema escuro elegante, acentos em tons de pétala (rosa, lilás, verde-menta, âmbar, azul-céu).

---

## Como ver o site

```bash
npm install          # só a primeira vez
npm run dev          # http://localhost:5173
```

No VS Code / code-server (ambiente da Micaela) usar sempre a versão com proxy:

```bash
npm run dev:preview  # porta 5173 + base /absproxy/5173/
```

Link da prévia: `https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/`

Build de produção: `npm run build` (gera `dist/`).

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

## Detalhes técnicos

- **Sem dependências pesadas:** React, `lucide-react` (ícones) e Tailwind. Sem bibliotecas de animação.
- **Tema:** cores definidas em [`tailwind.config.js`](tailwind.config.js) (`ink.*` para fundo, `petal.*` para acentos). O nome do tema é a única coisa a mudar para reskin completo.
- **Responsivo:** mobile-first; grelhas passam de 1 → 2 → 3 colunas; menu hambúrguer abaixo de `md`.
- **Acessibilidade:** foco visível em todos os elementos interativos, `aria-label` na navegação, elementos decorativos com `aria-hidden`.
- **SEO básico:** `title`, `description` e Open Graph no [`index.html`](index.html).
- **Link da Play Store:** `https://play.google.com/store/apps/details?id=com.camillyreading.app`
  (só abre a ficha pública depois de a app estar publicada em produção na loja).

---

## Publicar

O `dist/` gerado por `npm run build` é estático: pode ir para Vercel, Netlify,
Cloudflare Pages ou GitHub Pages sem configuração extra (sem rotas, é uma página só).

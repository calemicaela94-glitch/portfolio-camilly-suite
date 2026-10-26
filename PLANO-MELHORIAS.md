# Plano de melhorias do portefólio — 25/10/2026

Objetivo: transformar o site de "portefólio bonito" em "portefólio que fecha clientes",
em fases pequenas e verificáveis. Ordem escolhida por impacto (o que convence mais primeiro).

Estado do site hoje (verificado no código):

- Conteúdo todo em [`src/data/site.ts`](src/data/site.ts:1) — é aqui que se muda texto.
- A "imagem" do projeto em destaque é uma maquete em código: [`src/components/PhoneMock.tsx`](src/components/PhoneMock.tsx:13). Não existe nenhum ficheiro de imagem no site.
- Não existe pasta `public/` — logo, ainda não há sítio para guardar capturas de ecrã.
- Só 1 dos 6 projetos está publicado; os outros 5 dizem "Em desenvolvimento".
- E-mail e endpoint do formulário em [`src/data/site.ts`](src/data/site.ts:68) (FormSubmit com o Gmail à vista).
- Sem preços, sem prazos concretos, sem números reais, sem testemunhos.

---

## Fase 0 — Dados que só tu tens (5 min, faz-se hoje)

Isto não bloqueia o resto, mas sem isto as fases 2 e 4 ficam a meio.

- [ ] Nº real de downloads do Reading Tracker (Play Console → Estatísticas).
- [ ] Nota média + nº de avaliações (Play Console → Avaliações).
- [ ] Data de publicação na loja.
- [ ] 2 a 3 capturas de ecrã do Reading Tracker (telemóvel, ecrã normal, sem dados pessoais).
- [ ] 1 a 2 capturas do Growth Petal e/ou Kids Fun Tracker (se ainda não houver, salta-se).
- [ ] Decidir: valores de referência de preço e prazos (ou aceitar a proposta da Fase 3).
- [ ] Decidir: comprar domínio `camilly.pt` (≈10–15 €/ano) ou ficar no Gmail por agora.

**Regra de ouro:** nada de números inventados. Se não houver dados, escreve-se
"primeiros utilizadores" / "em crescimento" — nunca "500 downloads" sem ser verdade.

---

## Fase 1 — Capturas de ecrã (a mais importante) ⏱️ ~60 min

Porque: um portefólio de software sem imagens não se vende. É a crítica nº1.

- [ ] Criar `public/ecras/` e guardar as imagens em `.webp` (largura ~900px, < 200 KB cada).
- [ ] Compor uma moldura de telemóvel bonita em CSS à volta das imagens (reaproveitar o estilo
      do [`PhoneMock`](src/components/PhoneMock.tsx:23)) — assim os prints ficam elegantes.
- [ ] Novo componente `GaleriaEcras.tsx`: grelha de 2–3 ecrãs + clique para ampliar (lightbox
      simples, sem bibliotecas novas).
- [ ] `site.ts`: novo campo `ecras: { src, alt }[]` em `projetoDestaque`.
- [ ] [`FeaturedProject.tsx`](src/components/FeaturedProject.tsx:81): usa a galeria quando
      existirem imagens; se `ecras` estiver vazio, mantém a maquete atual (nunca quebra o site).
- [ ] `alt` descritivo em todas as imagens (acessibilidade + SEO).
- [ ] Se não houver prints hoje: gero eu as imagens a partir da maquete com o browser
      (`chromium --headless --screenshot`), ficam em ficheiro real e prontas a substituir depois.

Ganho: o site passa a mostrar produto, não descrição de produto.

---

## Fase 2 — Separação honesta: "Publicado" vs "Em construção" ⏱️ ~40 min

Porque: 5 avisos de "em desenvolvimento" fazem pensar que nada está acabado.

- [ ] `site.ts`: acrescentar a cada projeto `fase: "publicado" | "beta" | "construcao"` e
      `progresso: number` (0–100) + `previsao: string` (ex.: "beta em janeiro").
- [ ] [`OutrosProjetos.tsx`](src/components/OutrosProjetos.tsx:1): agrupar em dois blocos —
      "Publicado e a funcionar" e "Em construção (com % real)" — com barra fina de progresso.
- [ ] Mudar o título da secção: "Outros projetos em desenvolvimento" → "Também em construção".
- [ ] Badges de estado com cores diferentes (verde = publicado, âmbar = beta, cinza = construção).

Ganho: em vez de "nunca acabou nada", lê-se "já entregou, e está a construir mais".

---

## Fase 3 — Preços e prazos de referência ⏱️ ~45 min

Porque: "proposta com prazo e preço" é vago — o cliente pequeno tem medo de perguntar.

- [ ] Novo bloco `TabelaReferencia.tsx` (ou dentro de [`Services.tsx`](src/components/Services.tsx:1))
      com 3 cartões: Landing page · MVP web · App móvel publicada.
- [ ] Cada cartão: "a partir de X €", "Y semanas", "o que inclui" (3 pontos) e botão de orçamento.
- [ ] Nota honesta por baixo: "Valores de referência. O orçamento final depende do âmbito."
- [ ] Ligar o botão dos cartões ao formulário existente ([`FormularioOrcamento.tsx`](src/components/orcamento/FormularioOrcamento.tsx:1))
      já com o pacote pré-selecionado.

Ganho: filtra curiosos, atrai clientes sérios, e reduz conversas de 20 mensagens.

---

## Fase 4 — Prova social com números verdadeiros ⏱️ ~30 min

- [ ] Faixa de métricas reais no topo do destaque (downloads · nota ★ · desde <mês/ano>).
- [ ] Substituir as métricas vagas atuais ("Ao vivo", "Android", "Suporte") pelos números reais.
- [ ] Secção de testemunhos só se existirem 1–2 reais (nome + área + 1 frase). Sem invenções.
- [ ] Guardar os textos das redes sociais em [`MARKETING-REDES.md`](MARKETING-REDES.md:1) para
      copiar/colar quando publicares.

---

## Fase 5 — Contacto à prova de falha ⏱️ ~40 min

- [x] **E-mail trocado a 25/10/2026:** `camillyhelp@outlook.pt` em
      [`site.ts`](src/data/site.ts:68) (contacto + endpoint do FormSubmit). Os componentes todos
      leem daí, por isso mudou-se num sítio só.
- [x] Formulário **ativado** para `portfolio-camilly-suite.vercel.app` — envio de teste
      respondeu `success: true`.
- [x] ⚠️ **Descoberta: a ativação do FormSubmit é POR DOMÍNIO.** O mesmo e-mail funciona no
      Vercel e pede ativação nova no `calemicaela94-glitch.github.io`. É clicar em
      "Activate Form" outra vez (já foi enviado o pedido de ativação desse domínio).
- [ ] Se um dia o site mudar de domínio (ex.: `camilly.pt`), repetir a ativação nesse domínio.
- [x] Fallback com mensagem para humanos: o erro técnico em inglês deixou de aparecer ao
      visitante (fica na consola para diagnóstico) e o ecrã passa a explicar em português
      que basta abrir o e-mail já preenchido.
- [ ] Quando o domínio `camilly.pt` existir, trocar por `ola@camilly.pt` (1 linha + ativação nova).

---

## Fase 6 — Fechar e guardar ⏱️ ~15 min

- [ ] `npx tsc --noEmit` sem erros.
- [ ] `npm run build` a passar.
- [ ] Ver no browser (prévia `/absproxy/5173/`) desktop + telemóvel.
- [ ] `git add -A && git commit && git push` (sem reescrever histórico — projeto Lovable).
- [ ] Deploy (Vercel/GitHub Pages, conforme [`PUBLICAR.md`](PUBLICAR.md:1)).

---

## Ordem de execução hoje

| # | Fase | Depende de ti? | Tempo |
|---|------|----------------|-------|
| 1 | Fase 5 (testar formulário) | não | 10 min |
| 2 | Fase 2 (estados honestos) | não | 40 min |
| 3 | Fase 1 (capturas) | sim (prints) | 60 min |
| 4 | Fase 3 (preços) | sim (valores) | 45 min |
| 5 | Fase 4 (números) | sim (dados Play) | 30 min |
| 6 | Fase 6 (build + push) | não | 15 min |

Se os prints e os números não chegarem hoje: fazem-se 1, 2, 3 e 6, e as fases 1/3/4 ficam
com a estrutura pronta (galeria e cartões a funcionar com placeholders honestos) para
serem preenchidas em 1 minuto quando os dados existirem.

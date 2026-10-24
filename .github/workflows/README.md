> **Portefólio online:** https://calemicaela94-glitch.github.io/portfolio-camilly-suite/

# Deploy automático para GitHub Pages

Cada `push` para `main` compila o site (`npm ci` + `npm run build`) e publica o
resultado no GitHub Pages. Não é preciso fazer nada à mão.

- URL público: `https://calemicaela94-glitch.github.io/portfolio-camilly-suite/`
- O `base` do Vite é injetado por `VITE_BASE` neste workflow.
- Fluxo manual: separador **Actions** → *Deploy para GitHub Pages* → **Run workflow**.

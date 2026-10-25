import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base`:
//  - prévia local: o proxy do code-server (--base=/absproxy/5173/)
//  - link público servido por qualquer sítio (CDN jsDelivr/raw.githack, Vercel,
//    Netlify, domínio próprio, túnel): relativo "./" — assim os assets
//    (`./assets/...`) resolvem tanto na raiz como dentro de subpastas, e o
//    link nunca fica em branco por causa do caminho.
//  - GitHub Pages de projeto: "/portfolio-camilly-suite/" (VITE_BASE explícito)
export default defineConfig({
  base: process.env.VITE_BASE ?? "./",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // A prévia dentro do VS Code não entra por "localhost": entra pelo proxy do
    // code-server (https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/).
    // Sem isto o Vite responde "Blocked request. This host is not allowed."
    allowedHosts: [".ts.net", "rog-vscode-micaela.tailc3809d.ts.net", "localhost", "127.0.0.1"],
  },
  // Servidor estático usado para o link público (túnel Cloudflare / qualquer domínio).
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
});

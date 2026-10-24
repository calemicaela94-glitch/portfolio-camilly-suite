import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// O `base` é injetado pelo script `dev:preview` (--base=/absproxy/5173/) para o
// code-server servir a app por proxy sem perder os caminhos dos assets.
// Em produção (Vercel/Netlify/Cloudflare Pages) fica sempre na raiz "/".
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // A prévia dentro do VS Code não entra por "localhost": entra pelo proxy do
    // code-server (https://rog-vscode-micaela.tailc3809d.ts.net/absproxy/5173/).
    // Sem isto o Vite responde "Blocked request. This host is not allowed."
    allowedHosts: [".ts.net", "rog-vscode-micaela.tailc3809d.ts.net", "localhost", "127.0.0.1"],
  },
});

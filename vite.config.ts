import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// O `base` é injetado pelo script `dev:preview` (--base=/absproxy/5173/) para o
// code-server servir a app por proxy sem perder os caminhos dos assets.
// Em produção (Lovable/Vercel/Netlify) fica sempre na raiz "/".
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});

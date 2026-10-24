import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base`:
//  - dev/preview local: "/" ou o proxy do code-server (--base=/absproxy/5173/)
//  - GitHub Pages (link público): "/portfolio-camilly-suite/" (ver .github/workflows/deploy-pages.yml)
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
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

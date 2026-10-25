import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento #root não encontrado no index.html");
}

createRoot(container).render(
  <StrictMode>
    <App />
    {/* Contador de visitas da Vercel (só conta quando o site corre na Vercel;
        noutros alojamentos não faz nada nem atrasa a página). */}
    <Analytics />
  </StrictMode>,
);

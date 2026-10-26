import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTextos } from "../i18n/idioma";

/**
 * Capturas de ecrã reais das apps.
 *
 * ─────────────────────────────────────────────────────────────
 *  COMO ADICIONAR IMAGENS (não é preciso mexer no código):
 *  arrastar os ficheiros .png / .jpg / .webp para a pasta
 *  `src/assets/ecras/`. Aparecem aqui automaticamente, pela
 *  ordem alfabética do nome do ficheiro.
 *
 *  Sugestão de nomes: `01-meta-anual.png`, `02-sequencia.png`,
 *  `03-estatisticas.png` — para controlares a ordem.
 *
 *  Se a pasta estiver vazia, o site mostra a maquete desenhada
 *  em código (`PhoneMock`), por isso nunca fica um buraco.
 * ─────────────────────────────────────────────────────────────
 */
const ficheiros = import.meta.glob<string>("../assets/ecras/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export interface Ecra {
  src: string;
  alt: string;
}

/** Transforma `01-meta-anual.png` em "meta anual" (texto para leitores de ecrã). */
function descrever(caminho: string): string {
  const nome = caminho.split("/").pop() ?? caminho;
  return nome.replace(/\.[^.]+$/, "").replace(/^[0-9]+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
}

/**
 * Lista as capturas disponíveis, já ordenadas.
 * `prefixoAlt` vem do idioma ativo (ver `galeria.altPrefixo` em `textos.ts`).
 */
export function obterEcras(prefixoAlt: string, limite = 3): Ecra[] {
  return Object.keys(ficheiros)
    .sort((a, b) => a.localeCompare(b, "pt"))
    .slice(0, limite)
    .map((caminho) => ({
      src: ficheiros[caminho],
      alt: `${prefixoAlt} ${descrever(caminho)}`,
    }));
}

/** Moldura de telemóvel à volta de uma captura real. */
function MolduraEcra({ ecra, onAbrir }: { ecra: Ecra; onAbrir: () => void }) {
  const { galeria } = useTextos();

  return (
    <button
      type="button"
      onClick={onAbrir}
      className="group relative w-full rounded-[2rem] border border-white/15 bg-ink-800 p-1.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] transition hover:border-petal-lilac/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-petal-lilac"
      aria-label={`${galeria.ampliar}: ${ecra.alt}`}
    >
      <span className="absolute left-1/2 top-3 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/25" />
      <img
        src={ecra.src}
        alt={ecra.alt}
        loading="lazy"
        decoding="async"
        className="w-full rounded-[1.6rem] object-cover"
      />
      <span className="pointer-events-none absolute inset-1.5 rounded-[1.6rem] ring-1 ring-inset ring-white/10 transition group-hover:ring-petal-lilac/40" />
    </button>
  );
}

/**
 * Grelha de capturas com ampliação ao clicar (sem bibliotecas externas).
 * Recebe a lista já preparada por `obterEcras()`.
 */
export function GaleriaEcras({ ecras }: { ecras: Ecra[] }) {
  const { galeria } = useTextos();
  const [aberto, setAberto] = useState<number | null>(null);

  // Escape fecha e, enquanto a imagem está ampliada, o fundo não faz scroll
  useEffect(() => {
    if (aberto === null) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
    };
    document.addEventListener("keydown", aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto]);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {ecras.map((ecra, i) => (
          <MolduraEcra key={ecra.src} ecra={ecra} onAbrir={() => setAberto(i)} />
        ))}
      </div>

      {aberto !== null && ecras[aberto] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={ecras[aberto].alt}
        >
          <button
            type="button"
            aria-label={galeria.fechar}
            onClick={() => setAberto(null)}
            className="absolute inset-0 cursor-zoom-out"
          />
          <button
            type="button"
            onClick={() => setAberto(null)}
            aria-label={galeria.fechar}
            className="absolute right-5 top-5 rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={ecras[aberto].src}
            alt={ecras[aberto].alt}
            className="relative max-h-[88vh] w-auto rounded-[2rem] border border-white/20 shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

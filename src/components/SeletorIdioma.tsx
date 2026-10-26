import { Languages } from "lucide-react";
import { useIdioma, type Idioma } from "../i18n/idioma";

interface Props {
  /** `compacto` é a versão da barra de topo; `largo` a do menu móvel. */
  variante?: "compacto" | "largo";
}

/**
 * Alternador PT / EN.
 *
 * Acessibilidade: cada opção é um botão com `aria-pressed`, dentro de um
 * `role="group"` rotulado — leitores de ecrã anunciam o idioma ativo.
 * Os nomes completos ("Português", "English") ficam no `title`/`aria-label`,
 * porque na barra só cabem as siglas.
 */
export function SeletorIdioma({ variante = "compacto" }: Props) {
  const { idioma, textos, mudarIdioma } = useIdioma();
  const opcoes: Idioma[] = ["pt", "en"];

  if (variante === "largo") {
    return (
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-2">
        <p className="mb-2 flex items-center gap-2 px-1 text-[11px] uppercase tracking-wider text-slate-500">
          <Languages className="h-3.5 w-3.5" />
          {textos.ui.idioma}
        </p>
        <div className="flex gap-2" role="group" aria-label={textos.ui.idioma}>
          {opcoes.map((opcao) => (
            <button
              key={opcao}
              type="button"
              onClick={() => mudarIdioma(opcao)}
              aria-pressed={idioma === opcao}
              lang={opcao}
              className={`flex-1 rounded-lg px-3 py-2 text-sm transition ${
                idioma === opcao
                  ? "bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky font-semibold text-ink-950"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {textos.ui.idiomas[opcao]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={textos.ui.idioma}
      className="flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5"
    >
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          type="button"
          onClick={() => mudarIdioma(opcao)}
          aria-pressed={idioma === opcao}
          aria-label={textos.ui.idiomas[opcao]}
          title={textos.ui.idiomas[opcao]}
          lang={opcao}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
            idioma === opcao
              ? "bg-white text-ink-950"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {opcao}
        </button>
      ))}
    </div>
  );
}

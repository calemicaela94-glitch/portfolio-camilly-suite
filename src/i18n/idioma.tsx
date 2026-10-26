import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { conteudoPt, type Conteudo } from "../data/textos";
import { conteudoEn } from "../data/textos.en";

/**
 * ─────────────────────────────────────────────────────────────
 *  IDIOMA DO SITE
 *
 *  Duas versões completas de conteúdo (`pt` e `en`). O componente
 *  que consome chama `useTextos()` e recebe o objeto já no idioma
 *  certo — não há `if (idioma === ...)` espalhado pelo código.
 *
 *  O idioma escolhido fica guardado em `localStorage`, por isso o
 *  visitante não tem de escolher outra vez a cada visita.
 * ─────────────────────────────────────────────────────────────
 */

export type Idioma = "pt" | "en";

const CHAVE_GUARDADA = "camilly-idioma";

const TEXTOS: Record<Idioma, Conteudo> = { pt: conteudoPt, en: conteudoEn };

interface ValorIdioma {
  idioma: Idioma;
  textos: Conteudo;
  mudarIdioma: (novo: Idioma) => void;
}

const ContextoIdioma = createContext<ValorIdioma | null>(null);

/** Idioma inicial: o que o visitante escolheu antes, senão o do browser, senão português. */
function idiomaInicial(): Idioma {
  if (typeof window === "undefined") return "pt";

  const guardado = window.localStorage.getItem(CHAVE_GUARDADA);
  if (guardado === "pt" || guardado === "en") return guardado;

  const doBrowser = window.navigator.language?.toLowerCase() ?? "";
  if (doBrowser.startsWith("pt")) return "pt";
  // Inglês é a lingua franca para quem não fala português.
  return doBrowser === "" ? "pt" : "en";
}

export function ProvedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial);

  // Mantém o <html lang> e o título da aba coerentes (leitores de ecrã e SEO).
  useEffect(() => {
    const textos = TEXTOS[idioma];
    document.documentElement.lang = textos.codigo;
    document.title = textos.seo.titulo;

    const descricao = document.querySelector('meta[name="description"]');
    if (descricao) descricao.setAttribute("content", textos.seo.descricao);
  }, [idioma]);

  const mudarIdioma = useCallback((novo: Idioma) => {
    setIdioma(novo);
    try {
      window.localStorage.setItem(CHAVE_GUARDADA, novo);
    } catch {
      // Modo privado ou storage bloqueado: o idioma vale só nesta visita.
    }
  }, []);

  const valor = useMemo<ValorIdioma>(
    () => ({ idioma, textos: TEXTOS[idioma], mudarIdioma }),
    [idioma, mudarIdioma],
  );

  return <ContextoIdioma.Provider value={valor}>{children}</ContextoIdioma.Provider>;
}

/** Textos já no idioma ativo (atalho para o caso mais comum). */
export function useTextos(): Conteudo {
  return useIdioma().textos;
}

/** Acesso completo: idioma atual, textos e forma de mudar. */
export function useIdioma(): ValorIdioma {
  const contexto = useContext(ContextoIdioma);
  if (!contexto) {
    throw new Error("useIdioma() tem de ser usado dentro de <ProvedorIdioma>.");
  }
  return contexto;
}

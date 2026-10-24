import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variante = "primario" | "secundario" | "fantasma";

const estilos: Record<Variante, string> = {
  primario:
    "bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky text-ink-950 font-semibold " +
    "shadow-[0_10px_30px_-12px_rgba(182,164,245,0.8)] hover:brightness-110 hover:shadow-glow",
  secundario:
    "border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/35",
  fantasma: "text-slate-300 font-medium hover:text-white hover:bg-white/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-[0.95rem] " +
  "transition duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

interface PropsComuns {
  variante?: Variante;
  children: ReactNode;
  className?: string;
}

type PropsLink = PropsComuns & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type PropsBotao = PropsComuns & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Botão que se comporta como link quando recebe `href` (caso mais comum no portefólio). */
export function Button({ variante = "primario", className = "", children, ...resto }: PropsLink | PropsBotao) {
  const classes = `${base} ${estilos[variante]} ${className}`;

  if (resto.href) {
    return (
      <a className={classes} {...(resto as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(resto as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

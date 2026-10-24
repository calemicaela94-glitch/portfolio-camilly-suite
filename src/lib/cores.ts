export type Cor = "rose" | "lilac" | "mint" | "amber" | "sky";

/**
 * Classes Tailwind por cor de pétala.
 * Escritas por extenso (e não interpoladas) para o Tailwind não as eliminar no build.
 */
export const acento: Record<Cor, { texto: string; borda: string; fundo: string }> = {
  rose: {
    texto: "text-petal-rose",
    borda: "border-petal-rose/30 hover:border-petal-rose/50",
    fundo: "bg-petal-rose/10",
  },
  lilac: {
    texto: "text-petal-lilac",
    borda: "border-petal-lilac/30 hover:border-petal-lilac/50",
    fundo: "bg-petal-lilac/10",
  },
  mint: {
    texto: "text-petal-mint",
    borda: "border-petal-mint/30 hover:border-petal-mint/50",
    fundo: "bg-petal-mint/10",
  },
  amber: {
    texto: "text-petal-amber",
    borda: "border-petal-amber/30 hover:border-petal-amber/50",
    fundo: "bg-petal-amber/10",
  },
  sky: {
    texto: "text-petal-sky",
    borda: "border-petal-sky/30 hover:border-petal-sky/50",
    fundo: "bg-petal-sky/10",
  },
};

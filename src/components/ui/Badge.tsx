import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  /** Cor do acento (pétala) do ponto luminoso. */
  cor?: "rose" | "lilac" | "mint" | "amber" | "sky";
  /** Mostra o ponto a pulsar (bom para "disponível" ou "em produção"). */
  pulsar?: boolean;
  className?: string;
}

const pontos: Record<NonNullable<BadgeProps["cor"]>, string> = {
  rose: "bg-petal-rose",
  lilac: "bg-petal-lilac",
  mint: "bg-petal-mint",
  amber: "bg-petal-amber",
  sky: "bg-petal-sky",
};

/** Etiqueta pequena e reutilizável (badges de estado, stack, destaques). */
export function Badge({ children, cor = "lilac", pulsar = false, className = "" }: BadgeProps) {
  return (
    <span className={`badge ${className}`}>
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${pontos[cor]} ${pulsar ? "animate-pulse-soft" : ""}`}
      />
      {children}
    </span>
  );
}

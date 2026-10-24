interface PetalGlowProps {
  /** Posição/cores do brilho decorativo. */
  className?: string;
}

/**
 * Mancha de luz decorativa (as "pétalas") usada como fundo.
 * Puramente visual: `aria-hidden` e `pointer-events-none`.
 */
export function PetalGlow({ className = "" }: PetalGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute blur-3xl ${className}`}
    />
  );
}

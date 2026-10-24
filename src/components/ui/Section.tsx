import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  /** Etiqueta pequena acima do título. */
  eyebrow?: string;
  titulo?: string;
  descricao?: string;
  children: ReactNode;
  className?: string;
  /** Alinhamento do cabeçalho da secção. */
  alinhamento?: "centro" | "esquerda";
}

/**
 * Bloco de secção padrão: espaçamento, cabeçalho (eyebrow + título + descrição)
 * e largura consistente. Todas as secções do site usam este componente.
 */
export function Section({
  id,
  eyebrow,
  titulo,
  descricao,
  children,
  className = "",
  alinhamento = "centro",
}: SectionProps) {
  const alinhar = alinhamento === "centro" ? "text-center items-center" : "text-left items-start";

  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || titulo || descricao) && (
          <div className={`mb-12 flex flex-col gap-4 sm:mb-16 ${alinhar}`}>
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-petal-lilac">
                {eyebrow}
              </span>
            )}
            {titulo && (
              <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.65rem]">
                {titulo}
              </h2>
            )}
            {descricao && (
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{descricao}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

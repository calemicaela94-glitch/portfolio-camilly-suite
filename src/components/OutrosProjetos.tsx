import { Hammer } from "lucide-react";
import { outrosProjetos } from "../data/site";
import { acento } from "../lib/cores";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

/**
 * Trabalho em curso, separado do que já está publicado.
 *
 * Antes cada cartão repetia "Em desenvolvimento" (três vezes seguidas), o que dava
 * a ideia de que nada acabava. Agora o estado é dito UMA vez, no cabeçalho da
 * secção, e o cartão mostra só o que o projeto vai ser. Quando a Micaela indicar
 * uma percentagem real, basta preencher `progresso` em `site.ts` e a barra aparece.
 */
export function OutrosProjetos() {
  return (
    <Section
      id="projetos-clientes"
      eyebrow={outrosProjetos.eyebrow}
      titulo={outrosProjetos.titulo}
      descricao={outrosProjetos.descricao}
    >
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] text-slate-400">
        <Hammer className="h-3.5 w-3.5 text-petal-amber" />
        {outrosProjetos.avisoEstado}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outrosProjetos.itens.map((projeto) => {
          const cor = acento[projeto.cor];
          return (
            <article key={projeto.nome} className={`card-surface card-surface-hover border p-5 ${cor.borda}`}>
              <Badge cor={projeto.cor}>{projeto.tipo}</Badge>
              <h3 className="mt-4 font-display text-base font-bold text-white">{projeto.nome}</h3>
              <p className="mt-1.5 text-[13px] leading-snug text-slate-400">{projeto.descricao}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {projeto.stack.map((t) => (
                  <li key={t} className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] text-slate-400">
                    {t}
                  </li>
                ))}
              </ul>

              {/* Barra de progresso: só aparece quando existe uma percentagem real */}
              {typeof projeto.progresso === "number" && (
                <div className="mt-4 border-t border-white/10 pt-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
                    <span>{projeto.estado}</span>
                    <span className="text-slate-400">{projeto.progresso}%</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky"
                      style={{ width: `${Math.min(100, Math.max(0, projeto.progresso))}%` }}
                    />
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import { outrosProjetos } from "../data/site";
import { acento } from "../lib/cores";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

/** Grelha compacta com trabalho feito para clientes (áreas diferentes). */
export function OutrosProjetos() {
  return (
    <Section
      id="projetos-clientes"
      eyebrow={outrosProjetos.eyebrow}
      titulo={outrosProjetos.titulo}
      descricao={outrosProjetos.descricao}
    >
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
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] uppercase tracking-wider text-slate-500">
                {projeto.estado}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

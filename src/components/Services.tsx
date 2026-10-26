import { ArrowUpRight } from "lucide-react";
import { useTextos } from "../i18n/idioma";
import { acento } from "../lib/cores";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { useOrcamento } from "./orcamento/contexto";

/** Secção comercial: o que a Camilly faz por um cliente, e como trabalha. */
export function Services() {
  const { abrir } = useOrcamento();
  const { servicos } = useTextos();

  return (
    <Section
      id="servicos"
      eyebrow={servicos.eyebrow}
      titulo={servicos.titulo}
      descricao={servicos.descricao}
    >
      {/* Serviços */}
      <div className="grid gap-6 lg:grid-cols-3">
        {servicos.itens.map((servico) => {
          const Icone = servico.icone;
          const cor = acento[servico.cor];

          return (
            <article key={servico.titulo} className={`card-surface card-surface-hover border ${cor.borda}`}>
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${cor.fundo}`}>
                <Icone className={`h-5 w-5 ${cor.texto}`} />
              </span>

              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">{servico.titulo}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-400">{servico.descricao}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {servico.entregaveis.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* Como trabalho */}
      <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-10">
        <h3 className="font-display text-lg font-bold text-white">{servicos.comoTrabalho.titulo}</h3>
        <p className="mt-1.5 text-sm text-slate-400">{servicos.comoTrabalho.descricao}</p>

        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.processo.map((etapa) => (
            <li key={etapa.passo} className="relative">
              <span className="font-display text-2xl font-extrabold text-petal-gradient">{etapa.passo}</span>
              <h4 className="mt-2 font-display text-sm font-semibold text-white">{etapa.titulo}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{etapa.descricao}</p>
            </li>
          ))}
        </ol>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">{servicos.comoTrabalho.nota}</p>
          <Button variante="primario" onClick={abrir}>
            {servicos.comoTrabalho.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

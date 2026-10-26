import { Check } from "lucide-react";
import { useTextos } from "../i18n/idioma";
import { acento } from "../lib/cores";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

/**
 * Apresentação do ecossistema Camilly Suite:
 * visão geral, pilares e os módulos que o compõem.
 */
export function SuiteSection() {
  const { suite } = useTextos();

  return (
    <Section id="suite" eyebrow={suite.eyebrow} titulo={suite.titulo} descricao={suite.descricao}>
      {/* Pilares do ecossistema */}
      <div className="grid gap-4 sm:grid-cols-3">
        {suite.pilares.map((pilar) => {
          const Icone = pilar.icone;
          return (
            <div
              key={pilar.titulo}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 hover:bg-white/[0.045]"
            >
              <Icone className="h-5 w-5 text-petal-lilac" />
              <h3 className="mt-3 font-display text-sm font-semibold text-white">{pilar.titulo}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{pilar.descricao}</p>
            </div>
          );
        })}
      </div>

      {/* Módulos */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {suite.modulos.map((modulo) => {
          const Icone = modulo.icone;
          const cor = acento[modulo.cor];

          return (
            <article
              key={modulo.nome}
              className={`card-surface card-surface-hover flex flex-col border ${cor.borda} ${
                modulo.destaque ? "md:col-span-2 lg:col-span-1 lg:row-span-1 ring-1 ring-inset ring-petal-rose/20" : ""
              }`}
            >
              {modulo.destaque && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-petal-rose/20 blur-3xl"
                />
              )}

              <div className="relative flex items-start justify-between gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${cor.fundo}`}>
                  <Icone className={`h-5 w-5 ${cor.texto}`} />
                </span>
                <Badge cor={modulo.cor}>{modulo.papel}</Badge>
              </div>

              <h3 className="relative mt-5 font-display text-lg font-bold text-white">{modulo.nome}</h3>
              <p className="relative mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-400">
                {modulo.descricao}
              </p>

              <ul className="relative mt-5 grid gap-2">
                {modulo.funcionalidades.map((funcionalidade) => (
                  <li key={funcionalidade} className="flex items-start gap-2 text-[13px] text-slate-300">
                    <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${cor.texto}`} />
                    <span>{funcionalidade}</span>
                  </li>
                ))}
              </ul>

              {/* O estado deixou de se repetir em cada cartão: é dito uma vez no
                  cabeçalho da secção (ver `suite.descricao` em textos.ts). */}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

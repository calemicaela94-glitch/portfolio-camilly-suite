import { ArrowRight, Mail } from "lucide-react";
import { hero } from "../data/site";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { PetalGlow } from "./ui/PetalGlow";
import { SuiteCard } from "./SuiteCard";

/** Secção de abertura: identidade, proposta de valor e chamadas à ação. */
export function Hero() {
  // Divide o título para aplicar o gradiente das pétalas só na marca "Camilly Suite".
  const [antes, depois] = hero.titulo.split(hero.tituloRealce);

  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-grid-soft bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <PetalGlow className="-left-40 -top-32 h-[26rem] w-[26rem] rounded-full bg-petal-lilac/20" />
      <PetalGlow className="-right-32 top-24 h-80 w-80 rounded-full bg-petal-rose/15" />
      <PetalGlow className="bottom-0 left-1/3 h-64 w-64 rounded-full bg-petal-mint/10" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Coluna de texto */}
          <div className="animate-fade-up">
            <Badge cor="mint" pulsar>
              {hero.badge}
            </Badge>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {antes}
              <span className="text-petal-gradient">{hero.tituloRealce}</span>
              {depois}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {hero.subtitulo}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={hero.acoes[0].href} variante="primario">
                {hero.acoes[0].rotulo}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={hero.acoes[1].href} variante="secundario">
                <Mail className="h-4 w-4" />
                {hero.acoes[1].rotulo}
              </Button>
            </div>

            {/* Tecnologias */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {hero.stack.map((tecnologia) => (
                <span
                  key={tecnologia}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-400"
                >
                  {tecnologia}
                </span>
              ))}
            </div>

            {/* Métricas rápidas */}
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4">
              {hero.metricas.map((metrica) => (
                <div key={metrica.legenda}>
                  <dt className="font-display text-lg font-bold text-white">{metrica.valor}</dt>
                  <dd className="mt-0.5 text-[11px] leading-snug text-slate-500">{metrica.legenda}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Coluna visual — prévia da suite (o telemóvel fica só no projeto em destaque) */}
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="animate-float">
              <SuiteCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

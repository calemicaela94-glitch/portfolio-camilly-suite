import { CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { projetoDestaque } from "../data/site";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { PhoneMock } from "./PhoneMock";

/**
 * Prova social principal: a app publicada na Google Play Store.
 * É a secção que convence um cliente de que o produto chega mesmo à produção.
 */
export function FeaturedProject() {
  return (
    <Section
      id="projetos"
      eyebrow={projetoDestaque.eyebrow}
      titulo="Uma app real, na loja e a funcionar"
      descricao="Software publicado, com utilizadores e manutenção. Não é maquete."
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 shadow-card sm:p-10">
        {/* Brilho de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-petal-rose/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-petal-lilac/20 blur-3xl"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge cor="mint" pulsar>
              <Sparkles className="h-3 w-3" />
              {projetoDestaque.badge}
            </Badge>

            <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
              {projetoDestaque.nome}
            </h3>
            <p className="mt-2 text-sm font-medium text-petal-rose">{projetoDestaque.tagline}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {projetoDestaque.descricao}
            </p>

            {/* O que a app faz */}
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {projetoDestaque.destaques.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-petal-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="mt-7 flex flex-wrap gap-2">
              {projetoDestaque.stack.map((tecnologia) => (
                <span
                  key={tecnologia}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-400"
                >
                  {tecnologia}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={projetoDestaque.linkLoja} variante="primario" target="_blank" rel="noopener noreferrer">
                Ver na Google Play Store
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button href="#suite" variante="secundario">
                Conhecer a suite
              </Button>
            </div>
          </div>

          {/* Ecrã da app + métricas */}
          <div>
            <PhoneMock />
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {projetoDestaque.metricas.map((metrica) => (
                <div key={metrica.legenda} className="text-center">
                  <dt className="font-display text-xs font-bold text-white sm:text-sm">{metrica.valor}</dt>
                  <dd className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">
                    {metrica.legenda}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

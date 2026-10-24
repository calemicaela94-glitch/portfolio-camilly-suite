import { Mail } from "lucide-react";
import { contacto, dadosPessoais } from "../data/site";
import { Button } from "./ui/Button";
import { PetalGlow } from "./ui/PetalGlow";
import { useOrcamento } from "./orcamento/contexto";

/** Última chamada à ação: contacto direto e garantias do processo. */
export function Contact() {
  const { abrir } = useOrcamento();
  return (
    <section id="contacto" className="relative overflow-hidden py-20 sm:py-28">
      <PetalGlow className="left-1/2 top-0 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-petal-lilac/15" />

      <div className="container-page relative">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 text-center shadow-card sm:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-petal-lilac">
            {contacto.eyebrow}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {contacto.titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            {contacto.descricao}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variante="primario" onClick={abrir}>
              <Mail className="h-4 w-4" />
              {contacto.acoes[0].rotulo}
            </Button>
            <Button
              href={contacto.acoes[1].href}
              variante="secundario"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contacto.acoes[1].rotulo}
            </Button>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Ou escreve diretamente para{" "}
            <a
              href={`mailto:${dadosPessoais.email}`}
              className="font-medium text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            >
              {dadosPessoais.email}
            </a>
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
            {contacto.garantias.map((garantia) => {
              const Icone = garantia.icone;
              return (
                <li
                  key={garantia.texto}
                  className="flex items-center justify-center gap-2 text-[12.5px] text-slate-400"
                >
                  <Icone className="h-4 w-4 shrink-0 text-petal-mint" />
                  <span>{garantia.texto}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

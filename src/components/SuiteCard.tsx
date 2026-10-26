import { ArrowUpRight } from "lucide-react";
import { useTextos } from "../i18n/idioma";
import { acento } from "../lib/cores";

/**
 * Cartão do topo: prévia dos 3 módulos da Camilly Suite.
 * Substitui a maquete de telemóvel (essa fica só no projeto em destaque, para não repetir).
 */
export function SuiteCard() {
  const { suite } = useTextos();

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-petal-lilac/20 via-petal-rose/10 to-transparent blur-2xl"
      />

      <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 shadow-card backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Camilly Suite
          </p>
          <span className="rounded-full bg-petal-mint/15 px-2 py-0.5 text-[10px] font-semibold text-petal-mint">
            {suite.cartao.total}
          </span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {suite.modulos.map((modulo) => {
            const Icone = modulo.icone;
            const cor = acento[modulo.cor];
            return (
              <li
                key={modulo.nome}
                className={`flex items-center gap-3 rounded-2xl border bg-white/[0.03] p-3 ${cor.borda}`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${cor.fundo}`}>
                  <Icone className={`h-4 w-4 ${cor.texto}`} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-white">
                    {modulo.nome.replace("Camilly ", "")}
                  </p>
                  <p className="text-[11px] text-slate-500">{modulo.papel}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <a
          href="#suite"
          className="mt-5 flex items-center justify-between rounded-xl px-1 py-1 text-[12px] font-medium text-slate-400 transition hover:text-white"
        >
          {suite.cartao.verEcossistema}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

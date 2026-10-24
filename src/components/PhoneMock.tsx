import { Flame, BookOpen, TrendingUp } from "lucide-react";

interface PhoneMockProps {
  /** Título curto mostrado no topo do ecrã do telemóvel. */
  titulo?: string;
  className?: string;
}

/**
 * Maquete decorativa de telemóvel com o ecrã da Reading Tracker.
 * Serve de "imagem" do projeto em destaque sem depender de screenshots.
 */
export function PhoneMock({ titulo = "Reading Tracker", className = "" }: PhoneMockProps) {
  const barras = [35, 52, 44, 68, 58, 82, 74];
  const dias = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <div aria-hidden="true" className={`relative mx-auto w-[264px] ${className}`}>
      {/* Brilho por trás do telemóvel */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-b from-petal-lilac/25 via-petal-rose/10 to-transparent blur-2xl" />

      {/* Corpo do telemóvel */}
      <div className="rounded-[2.6rem] border border-white/15 bg-ink-800 p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)]">
        <div className="rounded-[2.1rem] bg-gradient-to-b from-ink-850 to-ink-900 p-4">
          {/* Entalhe */}
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/15" />

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <BookOpen className="h-3.5 w-3.5 text-petal-rose" />
            <span className="font-medium text-slate-200">{titulo}</span>
          </div>

          {/* Meta principal */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Meta anual</p>
            <div className="mt-1 flex items-end justify-between">
              <p className="font-display text-2xl font-bold text-white">
                18<span className="text-sm font-medium text-slate-400"> / 24</span>
              </p>
              <span className="rounded-full bg-petal-mint/15 px-2 py-0.5 text-[10px] font-semibold text-petal-mint">
                75%
              </span>
            </div>
            <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-mint" />
            </div>
          </div>

          {/* Sequência + leitura de hoje */}
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <Flame className="h-3.5 w-3.5 text-petal-amber" />
              <p className="mt-1.5 font-display text-base font-bold text-white">12</p>
              <p className="text-[10px] text-slate-500">dias seguidos</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <TrendingUp className="h-3.5 w-3.5 text-petal-sky" />
              <p className="mt-1.5 font-display text-base font-bold text-white">34 min</p>
              <p className="text-[10px] text-slate-500">hoje</p>
            </div>
          </div>

          {/* Gráfico de barras */}
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Esta semana</p>
            <div className="mt-2.5 flex h-16 items-end gap-1.5">
              {barras.map((altura, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-[3px] bg-gradient-to-t from-petal-lilac/30 to-petal-lilac"
                    style={{ height: `${altura}%` }}
                  />
                  <span className="text-[8px] text-slate-600">{dias[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

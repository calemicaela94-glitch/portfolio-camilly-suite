import { useTextos } from "../i18n/idioma";
import { SeletorIdioma } from "./SeletorIdioma";

/** Rodapé minimalista com marca, navegação, idioma e crédito da autora. */
export function Footer() {
  const { dadosPessoais, navegacao, rodape, ui } = useTextos();

  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-petal-rose via-petal-lilac to-petal-sky font-display text-xs font-bold text-ink-950">
            C
          </span>
          <span className="text-sm text-slate-400">
            © {dadosPessoais.anoAtual} {dadosPessoais.nome} · {dadosPessoais.localizacao}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label={ui.navRodape}>
          {navegacao.map((item) => (
            <a key={item.href} href={item.href} className="text-xs text-slate-500 transition hover:text-white">
              {item.rotulo}
            </a>
          ))}
          <a
            href={`mailto:${dadosPessoais.email}`}
            className="text-xs text-slate-500 transition hover:text-white"
          >
            {ui.email}
          </a>
          <SeletorIdioma />
        </nav>
      </div>

      <div className="container-page mt-6 flex flex-col items-center gap-1 border-t border-white/5 pt-4 sm:flex-row sm:justify-between">
        <p className="text-[11px] text-slate-600">{rodape.nota}</p>
        <p className="text-[11px] font-medium text-slate-400">{rodape.credito}</p>
      </div>
    </footer>
  );
}

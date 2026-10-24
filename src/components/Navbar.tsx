import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { dadosPessoais, navegacao } from "../data/site";
import { Button } from "./ui/Button";
import { useOrcamento } from "./orcamento/contexto";

/** Cabeçalho fixo com navegação por âncoras e menu móvel. */
export function Navbar() {
  const { abrir } = useOrcamento();
  const [aberto, setAberto] = useState(false);
  const [comFundo, setComFundo] = useState(false);

  useEffect(() => {
    const aoFazerScroll = () => setComFundo(window.scrollY > 16);
    aoFazerScroll();
    window.addEventListener("scroll", aoFazerScroll, { passive: true });
    return () => window.removeEventListener("scroll", aoFazerScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        comFundo ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        {/* Marca */}
        <a href="#topo" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-petal-rose via-petal-lilac to-petal-sky font-display text-base font-bold text-ink-950">
            C
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-white">
            {dadosPessoais.nome}
            <span className="ml-1.5 text-slate-500 transition group-hover:text-petal-lilac">Suite</span>
          </span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variante="primario" onClick={abrir} className="px-5 py-2.5 text-sm">
            Pedir orçamento
          </Button>
        </div>

        {/* Botão do menu móvel */}
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="rounded-xl border border-white/15 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Painel do menu móvel */}
      {aberto && (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>
          <Button
            variante="primario"
            onClick={() => {
              setAberto(false);
              abrir();
            }}
            className="mt-4 w-full"
          >
            Pedir orçamento
          </Button>
        </div>
      )}
    </header>
  );
}

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail, Send, X } from "lucide-react";
import { dadosPessoais } from "../../data/site";

interface Props {
  aberto: boolean;
  fechar: () => void;
}

const TIPOS = [
  "MVP / protótipo",
  "App móvel (Android / iOS)",
  "Web app + IA",
  "Site / portefólio",
  "Outro",
];

/**
 * Caixa de mensagem para pedir orçamento.
 *
 * Sem backend: ao submeter, monta um email já preenchido (nome, email, tipo de
 * projeto e mensagem) e abre a app de email do visitante. Se um dia houver um
 * endpoint de formulário, basta preencher `endpointFormulario` em site.ts — o
 * código passa a enviar por POST em vez de abrir o email.
 */
export function FormularioOrcamento({ aberto, fechar }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState(TIPOS[0]);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [linkEmail, setLinkEmail] = useState("");
  const [copiado, setCopiado] = useState(false);
  const primeiroCampo = useRef<HTMLInputElement>(null);

  // Fecha com Escape e bloqueia o scroll do fundo enquanto está aberto
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
    };
    document.addEventListener("keydown", aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primeiroCampo.current?.focus();

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto, fechar]);

  // Reinicia o formulário quando fecha
  useEffect(() => {
    if (aberto) return;
    const t = setTimeout(() => {
      setErro(null);
      setEnviado(false);
      setCopiado(false);
    }, 200);
    return () => clearTimeout(t);
  }, [aberto]);

  if (!aberto) return null;

  const submeter = (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.trim().length < 2) return setErro("Escreve o teu nome.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setErro("Email inválido.");
    if (mensagem.trim().length < 10) return setErro("Conta-me um pouco mais (mínimo 10 caracteres).");

    setErro(null);

    const assunto = `Pedido de orçamento — ${tipo}`;
    const corpo = [
      `Nome: ${nome.trim()}`,
      `Email: ${email.trim()}`,
      `Tipo de projeto: ${tipo}`,
      "",
      mensagem.trim(),
    ].join("\n");

    const link = `mailto:${dadosPessoais.email}?subject=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;

    setLinkEmail(link);
    setEnviado(true);
    window.location.href = link;
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(dadosPessoais.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-orcamento"
    >
      {/* Fundo escurecido */}
      <button
        type="button"
        aria-label="Fechar"
        onClick={fechar}
        className="absolute inset-0 cursor-default bg-ink-950/80 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-white/12 bg-ink-850 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-petal-lilac/20 blur-3xl"
        />

        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {enviado ? (
          /* ── Confirmação ── */
          <div className="relative text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-petal-mint/15">
              <Check className="h-6 w-6 text-petal-mint" />
            </span>
            <h2 id="titulo-orcamento" className="mt-4 font-display text-xl font-bold text-white">
              Pedido pronto a enviar
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Abrimos a tua app de email com a mensagem já escrita. Só tens de carregar em
              <strong className="text-slate-200"> Enviar</strong>. Não abriu? Usa o link abaixo ou
              escreve para {dadosPessoais.email}.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={linkEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                Abrir email outra vez
              </a>
              <button
                type="button"
                onClick={copiar}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <Copy className="h-4 w-4" />
                {copiado ? "Email copiado!" : "Copiar o meu email"}
              </button>
              <button
                type="button"
                onClick={fechar}
                className="mt-1 text-xs text-slate-500 transition hover:text-white"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          /* ── Formulário ── */
          <form onSubmit={submeter} className="relative">
            <h2 id="titulo-orcamento" className="font-display text-xl font-bold text-white">
              Pedir orçamento
            </h2>
            <p className="mt-1.5 text-[13px] text-slate-400">
              Resposta em 24–48h. Sem compromisso.
            </p>

            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-slate-500">
                    Nome
                  </span>
                  <input
                    ref={primeiroCampo}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="O teu nome"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 transition focus:border-petal-lilac/60"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@email.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 transition focus:border-petal-lilac/60"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-slate-500">
                  Tipo de projeto
                </span>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white transition focus:border-petal-lilac/60"
                >
                  {TIPOS.map((t) => (
                    <option key={t} value={t} className="bg-ink-800 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-slate-500">
                  Mensagem
                </span>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                  placeholder="O que precisas? Para quando? Tens algo já feito?"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 transition focus:border-petal-lilac/60"
                />
              </label>
            </div>

            {erro && (
              <p role="alert" className="mt-3 rounded-lg bg-petal-rose/10 px-3 py-2 text-xs text-petal-rose">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              Enviar pedido
            </button>
            <p className="mt-3 text-center text-[11px] text-slate-600">
              Vai abrir a tua app de email com tudo preenchido.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

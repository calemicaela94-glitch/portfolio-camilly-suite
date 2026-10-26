import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Check, Copy, Mail, Send, X } from "lucide-react";
import { useTextos } from "../../i18n/idioma";

interface Props {
  aberto: boolean;
  fechar: () => void;
}

type Estado = "formulario" | "a-enviar" | "enviado" | "plano-b";

/**
 * Caixa de mensagem para pedir orçamento.
 *
 * Fluxo: valida → envia por POST para `dadosPessoais.endpointFormulario`
 * (FormSubmit, que entrega o pedido na caixa de email da Micaela) → mostra
 * confirmação. Se o serviço falhar (sem rede, serviço em baixo, domínio ainda
 * sem ativação), cai para o plano B: abre a app de email do visitante com tudo
 * preenchido (`mailto:`). O erro técnico do serviço fica só na consola.
 */
export function FormularioOrcamento({ aberto, fechar }: Props) {
  const { dadosPessoais, orcamento } = useTextos();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState(orcamento.tipos[0]);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [estado, setEstado] = useState<Estado>("formulario");
  const [nota, setNota] = useState("");
  const [linkEmail, setLinkEmail] = useState("");
  const [copiado, setCopiado] = useState(false);
  const primeiroCampo = useRef<HTMLInputElement>(null);

  // Se o idioma mudar com o formulário aberto, o tipo escolhido tem de continuar
  // a existir na lista nova (senão o <select> ficava em branco).
  useEffect(() => {
    if (!orcamento.tipos.includes(tipo)) setTipo(orcamento.tipos[0]);
  }, [orcamento.tipos, tipo]);

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

  // Ao fechar, volta ao início (com um pequeno atraso para não piscar)
  useEffect(() => {
    if (aberto) return;
    const t = setTimeout(() => {
      setErro(null);
      setNota("");
      setCopiado(false);
      setEstado("formulario");
    }, 250);
    return () => clearTimeout(t);
  }, [aberto]);

  if (!aberto) return null;

  const construirLinkEmail = () => {
    const assunto = orcamento.assunto(tipo);
    const corpo = [
      `${orcamento.nome}: ${nome.trim()}`,
      `${orcamento.email}: ${email.trim()}`,
      `${orcamento.tipo}: ${tipo}`,
      "",
      mensagem.trim(),
    ].join("\n");
    return `mailto:${dadosPessoais.email}?subject=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;
  };

  const submeter = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.trim().length < 2) return setErro(orcamento.erros.nome);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setErro(orcamento.erros.email);
    if (mensagem.trim().length < 10) return setErro(orcamento.erros.mensagem);

    setErro(null);
    setLinkEmail(construirLinkEmail());

    // Sem endpoint configurado: segue logo pelo email do visitante
    if (!dadosPessoais.endpointFormulario) {
      setEstado("plano-b");
      window.location.href = linkEmail;
      return;
    }

    setEstado("a-enviar");

    try {
      const resposta = await fetch(dadosPessoais.endpointFormulario, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          [orcamento.nome]: nome.trim(),
          email: email.trim(),
          [orcamento.tipo]: tipo,
          mensagem: mensagem.trim(),
          _subject: orcamento.assunto(tipo),
          _template: "table",
          _captcha: "false",
        }),
      });

      const json: unknown = await resposta.json().catch(() => null);
      const falhou =
        !resposta.ok ||
        (typeof json === "object" &&
          json !== null &&
          "success" in json &&
          String((json as { success?: unknown }).success) === "false");

      if (!falhou) {
        setEstado("enviado");
        return;
      }

      // O detalhe técnico do serviço vem em inglês e não diz nada a um cliente.
      // Fica só na consola (para diagnóstico) e o ecrã mostra uma frase simples.
      const detalhe =
        typeof json === "object" && json !== null && "message" in json
          ? String((json as { message?: unknown }).message)
          : "";
      if (detalhe) console.warn("[orcamento] o envio automático falhou:", detalhe);
      setNota(orcamento.avisos.envio);
      setEstado("plano-b");
    } catch {
      setNota(orcamento.avisos.semLigacao);
      setEstado("plano-b");
    }
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

  const campoClasse =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 transition focus:border-petal-lilac/60";
  const etiquetaClasse = "mb-1.5 block text-[11px] uppercase tracking-wider text-slate-500";

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
        aria-label={orcamento.planoB.fechar}
        onClick={fechar}
        className="absolute inset-0 cursor-default bg-ink-950/80 backdrop-blur-sm"
      />

      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/12 bg-ink-850 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-petal-lilac/20 blur-3xl"
        />

        <button
          type="button"
          onClick={fechar}
          aria-label={orcamento.planoB.fechar}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {estado === "enviado" && (
          /* ── Enviado com sucesso ── */
          <div className="relative text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-petal-mint/15">
              <Check className="h-6 w-6 text-petal-mint" />
            </span>
            <h2 id="titulo-orcamento" className="mt-4 font-display text-xl font-bold text-white">
              {orcamento.enviado.titulo}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {orcamento.enviado.texto} <strong className="text-slate-200">{email}</strong>{" "}
              {orcamento.enviado.prazo}
            </p>
            <button
              type="button"
              onClick={fechar}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110"
            >
              {orcamento.enviado.fechar}
            </button>
          </div>
        )}

        {estado === "plano-b" && (
          /* ── Serviço de envio falhou: email direto ── */
          <div className="relative text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-petal-amber/15">
              <AlertTriangle className="h-6 w-6 text-petal-amber" />
            </span>
            <h2 id="titulo-orcamento" className="mt-4 font-display text-xl font-bold text-white">
              {orcamento.planoB.titulo}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {orcamento.planoB.texto}
              {nota && <span className="mt-1 block text-xs text-slate-500">{nota}</span>}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={linkEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                {orcamento.planoB.abrirEmail}
              </a>
              <button
                type="button"
                onClick={copiar}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <Copy className="h-4 w-4" />
                {copiado ? orcamento.planoB.copiado : `${orcamento.planoB.copiar} ${dadosPessoais.email}`}
              </button>
              <button
                type="button"
                onClick={() => setEstado("formulario")}
                className="mt-1 text-xs text-slate-500 transition hover:text-white"
              >
                {orcamento.planoB.voltar}
              </button>
            </div>
          </div>
        )}

        {(estado === "formulario" || estado === "a-enviar") && (
          /* ── Formulário ── */
          <form onSubmit={submeter} className="relative">
            <h2 id="titulo-orcamento" className="font-display text-xl font-bold text-white">
              {orcamento.titulo}
            </h2>
            <p className="mt-1.5 text-[13px] text-slate-400">{orcamento.subtitulo}</p>

            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={etiquetaClasse}>{orcamento.nome}</span>
                  <input
                    ref={primeiroCampo}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder={orcamento.nomePlaceholder}
                    autoComplete="name"
                    required
                    className={campoClasse}
                  />
                </label>

                <label className="block">
                  <span className={etiquetaClasse}>{orcamento.email}</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={orcamento.emailPlaceholder}
                    autoComplete="email"
                    required
                    className={campoClasse}
                  />
                </label>
              </div>

              <label className="block">
                <span className={etiquetaClasse}>{orcamento.tipo}</span>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className={`${campoClasse} appearance-none`}
                >
                  {orcamento.tipos.map((opcao) => (
                    <option key={opcao} value={opcao} className="bg-ink-800 text-white">
                      {opcao}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className={etiquetaClasse}>{orcamento.mensagem}</span>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                  placeholder={orcamento.mensagemPlaceholder}
                  required
                  className={`${campoClasse} resize-none`}
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
              disabled={estado === "a-enviar"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-petal-rose via-petal-lilac to-petal-sky px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send className="h-4 w-4" />
              {estado === "a-enviar" ? orcamento.aEnviar : orcamento.enviar}
            </button>
            <p className="mt-3 text-center text-[11px] text-slate-600">{orcamento.privacidade}</p>
          </form>
        )}
      </div>
    </div>
  );
}

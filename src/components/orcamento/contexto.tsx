import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { FormularioOrcamento } from "./FormularioOrcamento";

interface ContextoOrcamento {
  /** Abre a caixa de mensagem de pedido de orçamento. */
  abrir: () => void;
}

const Contexto = createContext<ContextoOrcamento>({ abrir: () => {} });

/** Acesso ao modal de orçamento em qualquer componente: `const { abrir } = useOrcamento()`. */
export function useOrcamento() {
  return useContext(Contexto);
}

/** Envolve a app e renderiza o modal uma única vez. */
export function OrcamentoProvider({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);

  const abrir = useCallback(() => setAberto(true), []);
  const fechar = useCallback(() => setAberto(false), []);
  const valor = useMemo(() => ({ abrir }), [abrir]);

  return (
    <Contexto.Provider value={valor}>
      {children}
      <FormularioOrcamento aberto={aberto} fechar={fechar} />
    </Contexto.Provider>
  );
}

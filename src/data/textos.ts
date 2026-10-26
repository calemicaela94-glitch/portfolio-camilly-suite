import {
  Bot,
  BookOpenCheck,
  Code2,
  Layers,
  Rocket,
  Salad,
  Smartphone,
  Sparkles,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  TEXTOS DO SITE — PORTUGUÊS (idioma por omissão)
 *
 *  A versão inglesa está em `textos.en.ts` e TEM de ter a mesma
 *  estrutura. O TypeScript garante isso: `conteudoEn` é declarado
 *  como `Conteudo`, por isso esquecer um campo dá erro de compilação.
 *
 *  Regra: nenhum texto visível ao visitante fica nos componentes.
 *  Se aparecer texto novo, entra aqui e no ficheiro inglês.
 * ─────────────────────────────────────────────────────────────
 */

export interface Acao {
  rotulo: string;
  /** Link normal. Omitir quando a ação é abrir o formulário de orçamento. */
  href?: string;
  /** `orcamento` abre a caixa de mensagem em vez de navegar. */
  acao?: "orcamento";
  variante: "primario" | "secundario" | "fantasma";
  externo?: boolean;
}

export interface Metrica {
  valor: string;
  legenda: string;
}

export interface Modulo {
  nome: string;
  papel: string;
  descricao: string;
  icone: LucideIcon;
  funcionalidades: string[];
  destaque?: boolean;
  cor: "rose" | "lilac" | "mint" | "amber" | "sky";
}

export interface Servico {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  entregaveis: string[];
  cor: "rose" | "lilac" | "mint" | "amber" | "sky";
}

export interface Projeto {
  nome: string;
  tipo: string;
  /** Fase em que está. */
  estado: string;
  /** Percentagem real (0–100). Só preencher quando o número for verdadeiro. */
  progresso?: number;
  descricao: string;
  stack: string[];
  cor: "rose" | "lilac" | "mint" | "amber" | "sky";
}

export interface Conteudo {
  /** Código do idioma, usado no atributo `lang` do HTML. */
  codigo: "pt" | "en";
  seo: { titulo: string; descricao: string };
  dadosPessoais: {
    nome: string;
    autora: string;
    papel: string;
    email: string;
    endpointFormulario: string;
    localizacao: string;
    anoAtual: number;
  };
  navegacao: { rotulo: string; href: string }[];
  /** Textos de interface que não são conteúdo de marketing. */
  ui: {
    pedirOrcamento: string;
    abrirMenu: string;
    fecharMenu: string;
    navPrincipal: string;
    navMovel: string;
    navRodape: string;
    email: string;
    idioma: string;
    idiomas: { pt: string; en: string };
  };
  hero: {
    badge: string;
    titulo: string;
    tituloRealce: string;
    subtitulo: string;
    acoes: Acao[];
    metricas: Metrica[];
    stack: string[];
  };
  destaque: {
    eyebrow: string;
    titulo: string;
    descricao: string;
    projeto: {
      eyebrow: string;
      nome: string;
      badge: string;
      tagline: string;
      descricao: string;
      destaques: string[];
      linkLoja: string;
      stack: string[];
      metricas: Metrica[];
      ctaLoja: string;
      ctaSuite: string;
    };
  };
  suite: {
    eyebrow: string;
    titulo: string;
    descricao: string;
    pilares: { icone: LucideIcon; titulo: string; descricao: string }[];
    modulos: Modulo[];
    cartao: { total: string; verEcossistema: string };
  };
  outrosProjetos: {
    eyebrow: string;
    titulo: string;
    descricao: string;
    avisoEstado: string;
    itens: Projeto[];
  };
  servicos: {
    eyebrow: string;
    titulo: string;
    descricao: string;
    itens: Servico[];
    processo: { passo: string; titulo: string; descricao: string }[];
    comoTrabalho: { titulo: string; descricao: string; nota: string; cta: string };
  };
  contacto: {
    eyebrow: string;
    titulo: string;
    descricao: string;
    assuntoEmail: string;
    acoes: Acao[];
    garantias: { icone: LucideIcon; texto: string }[];
    escrevePara: string;
  };
  rodape: { nota: string; credito: string };
  galeria: { altPrefixo: string; ampliar: string; fechar: string };
  orcamento: {
    titulo: string;
    subtitulo: string;
    nome: string;
    nomePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    tipo: string;
    tipos: string[];
    mensagem: string;
    mensagemPlaceholder: string;
    enviar: string;
    aEnviar: string;
    privacidade: string;
    assunto: (tipo: string) => string;
    enviado: { titulo: string; texto: string; prazo: string; fechar: string };
    planoB: {
      titulo: string;
      texto: string;
      abrirEmail: string;
      copiar: string;
      copiado: string;
      voltar: string;
      fechar: string;
    };
    erros: { nome: string; email: string; mensagem: string };
    avisos: { envio: string; semLigacao: string };
  };
}

export const conteudoPt: Conteudo = {
  codigo: "pt",
  seo: {
    titulo: "Camilly Suite — Software Developer · Micaela Calé",
    descricao:
      "Portefólio de Micaela Calé: apps móveis e web, IA integrada e uma app publicada na Google Play Store. Do conceito à produção, sem intermediários.",
  },
  dadosPessoais: {
    nome: "Camilly",
    autora: "Micaela Calé",
    papel: "Software Developer",
    email: "camillyhelp@outlook.pt",
    endpointFormulario: "https://formsubmit.co/ajax/camillyhelp@outlook.pt",
    localizacao: "Portugal · remoto",
    anoAtual: new Date().getFullYear(),
  },
  navegacao: [
    { rotulo: "Projetos", href: "#projetos" },
    { rotulo: "Suite", href: "#suite" },
    { rotulo: "Serviços", href: "#servicos" },
    { rotulo: "Contacto", href: "#contacto" },
  ],
  ui: {
    pedirOrcamento: "Pedir orçamento",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    navPrincipal: "Navegação principal",
    navMovel: "Navegação móvel",
    navRodape: "Rodapé",
    email: "Email",
    idioma: "Idioma",
    idiomas: { pt: "Português", en: "English" },
  },
  hero: {
    badge: "Disponível para novos projetos",
    titulo: "Software Developer & Criadora da Camilly Suite",
    tituloRealce: "Camilly Suite",
    subtitulo:
      "Transformo ideias em aplicações móveis e web funcionais, escaláveis e com IA integrada. Do conceito à produção na Google Play Store.",
    acoes: [
      { rotulo: "Ver Projetos", href: "#projetos", variante: "primario" },
      { rotulo: "Contactar / Pedir Orçamento", acao: "orcamento", variante: "secundario" },
    ],
    metricas: [
      { valor: "Play Store", legenda: "app publicada" },
      { valor: "6", legenda: "projetos em construção" },
      { valor: "IA", legenda: "integrada" },
      { valor: "MVP", legenda: "em semanas" },
    ],
    stack: ["React", "React Native", "Expo", "TypeScript", "Tailwind", "Supabase", "IA"],
  },
  destaque: {
    eyebrow: "Em produção",
    titulo: "Uma app real, na loja e a funcionar",
    descricao: "Software publicado, com utilizadores e manutenção. Não é maquete.",
    projeto: {
      eyebrow: "Em produção",
      nome: "Camilly Reading Tracker",
      badge: "Disponível na Google Play Store",
      tagline: "Metas de leitura que se cumprem.",
      descricao:
        "App Android publicada e mantida: metas literárias, sequências diárias, lembretes e estatísticas de leitura.",
      destaques: ["Metas automáticas", "Sequências e lembretes", "Estatísticas de leitura"],
      linkLoja: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
      stack: ["React + TanStack", "Capacitor", "Supabase", "IA"],
      metricas: [
        { valor: "Play Store", legenda: "app publicada" },
        { valor: "Em crescimento", legenda: "primeiros utilizadores" },
        { valor: "Suporte", legenda: "manutenção contínua" },
      ],
      ctaLoja: "Ver na Google Play Store",
      ctaSuite: "Conhecer a suite",
    },
  },
  suite: {
    eyebrow: "Produto próprio",
    titulo: "Camilly Suite: um ecossistema, não apps soltas",
    descricao:
      "Bem-estar e desenvolvimento pessoal num só lugar. Módulos independentes, a mesma conta, os mesmos assistentes de IA. Os três módulos estão em construção — o Growth Petal é o mais adiantado.",
    pilares: [
      { icone: Bot, titulo: "IA que acompanha", descricao: "Buddys que ajustam o plano em tempo real." },
      { icone: Layers, titulo: "Modular", descricao: "Cada módulo vive sozinho e liga-se aos outros." },
      { icone: BookOpenCheck, titulo: "Progresso real", descricao: "Dados claros, sem pressão." },
    ],
    modulos: [
      {
        nome: "Camilly Growth Petal",
        papel: "Flagship",
        descricao:
          "Hub de desenvolvimento pessoal: rastreadores de hábitos, humor e foco, com IA Buddys a acompanhar em tempo real.",
        icone: Sparkles,
        funcionalidades: ["Rastreadores modulares", "IA Buddys", "Painel unificado"],
        destaque: true,
        cor: "rose",
      },
      {
        nome: "Camilly Kids Fun Tracker",
        papel: "Família",
        descricao: "Rotinas e gamificação familiar: tarefas, pontos e recompensas partilhados entre pais e filhos.",
        icone: Gamepad2,
        funcionalidades: ["Tarefas com pontos", "Recompensas", "Área escolar"],
        cor: "mint",
      },
      {
        nome: "Camilly Nourish Tracker",
        papel: "Saúde",
        descricao: "Nutrição sem complicações: refeições, planeamento semanal e hábitos alimentares.",
        icone: Salad,
        funcionalidades: ["Diário de refeições", "Planeamento", "Metas"],
        cor: "amber",
      },
    ],
    cartao: { total: "3 módulos", verEcossistema: "Ver o ecossistema" },
  },
  outrosProjetos: {
    eyebrow: "Outros projetos",
    titulo: "Em construção: o que vem a seguir",
    descricao:
      "A app publicada está aí em cima. Estes três ainda não estão na loja — são os próximos a chegar.",
    avisoEstado: "3 projetos em construção · nenhum publicado ainda",
    itens: [
      {
        nome: "Cat Lash Designer",
        tipo: "Cliente · estética",
        estado: "Em construção",
        descricao: "Marcações online com disponibilidade em tempo real e painel de gestão.",
        stack: ["React", "TypeScript"],
        cor: "rose",
      },
      {
        nome: "Mediject Training",
        tipo: "Cliente · formação",
        estado: "Em construção",
        descricao: "PWA de apresentação: eventos, serviços, equipa e reservas.",
        stack: ["Next.js", "PWA"],
        cor: "sky",
      },
      {
        nome: "My Daily Tracker",
        tipo: "Produto próprio",
        estado: "Em construção",
        descricao: "Painel de vida diária: rotinas, sono, finanças, família e IA.",
        stack: ["React", "TanStack"],
        cor: "lilac",
      },
    ],
  },
  servicos: {
    eyebrow: "Serviços",
    titulo: "Do conceito à produção, sem intermediários",
    descricao: "Falas sempre com quem desenha e com quem programa. O código fica do teu lado.",
    itens: [
      {
        titulo: "MVPs rápidos",
        descricao: "Do zero a produto apresentável em poucas semanas, focado em validar a ideia.",
        icone: Rocket,
        entregaveis: ["Protótipo", "Código teu", "Deploy"],
        cor: "rose",
      },
      {
        titulo: "Apps móveis",
        descricao: "Android e iOS com a mesma base React Native / Expo, prontas para a loja.",
        icone: Smartphone,
        entregaveis: ["Android + iOS", "Push", "Publicação"],
        cor: "lilac",
      },
      {
        titulo: "IA e web apps",
        descricao: "Assistentes e automações com a chave sempre no servidor. React + TypeScript.",
        icone: Code2,
        entregaveis: ["LLMs", "Backend seguro", "UI responsiva"],
        cor: "sky",
      },
    ],
    processo: [
      { passo: "01", titulo: "Conversa", descricao: "Problema e objetivo." },
      { passo: "02", titulo: "Protótipo", descricao: "Ecrãs essenciais." },
      { passo: "03", titulo: "Construção", descricao: "Entregas para testares." },
      { passo: "04", titulo: "Lançamento", descricao: "Publicar e melhorar." },
    ],
    comoTrabalho: {
      titulo: "Como trabalho",
      descricao: "Quatro passos simples, sem surpresas no caminho.",
      nota: "Só tens a ideia? Chega para começar.",
      cta: "Pedir orçamento",
    },
  },
  contacto: {
    eyebrow: "Contacto",
    titulo: "Tens uma ideia? Vamos pô-la a funcionar.",
    descricao: "Conta-me o que precisas e recebes proposta com prazo e preço.",
    assuntoEmail: "Pedido de orçamento — portefólio",
    acoes: [
      { rotulo: "Contactar / Pedir Orçamento", acao: "orcamento", variante: "primario" },
      {
        rotulo: "Ver na Play Store",
        href: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
        variante: "secundario",
        externo: true,
      },
    ],
    garantias: [
      { icone: BookOpenCheck, texto: "Resposta em 24–48h" },
      { icone: Layers, texto: "Preço fechado antes" },
      { icone: Sparkles, texto: "Código e contas tuas" },
    ],
    escrevePara: "Ou escreve diretamente para",
  },
  rodape: {
    nota: "Portefólio da Camilly · React + Vite + Tailwind",
    credito: "Desenvolvido por: Micaela Calé",
  },
  galeria: {
    altPrefixo: "Captura de ecrã da app Camilly:",
    ampliar: "Ampliar",
    fechar: "Fechar",
  },
  orcamento: {
    titulo: "Pedir orçamento",
    subtitulo: "Resposta em 24–48h. Sem compromisso.",
    nome: "Nome",
    nomePlaceholder: "O teu nome",
    email: "Email",
    emailPlaceholder: "nome@email.com",
    tipo: "Tipo de projeto",
    tipos: [
      "MVP / protótipo",
      "App móvel (Android / iOS)",
      "Web app + IA",
      "Site / portefólio",
      "Outro",
    ],
    mensagem: "Mensagem",
    mensagemPlaceholder: "O que precisas? Para quando? Tens algo já feito?",
    enviar: "Enviar pedido",
    aEnviar: "A enviar…",
    privacidade: "Só uso os teus dados para responder a este pedido.",
    assunto: (tipo) => `Pedido de orçamento — ${tipo}`,
    enviado: {
      titulo: "Mensagem enviada!",
      texto: "Recebi o teu pedido. Respondo a",
      prazo: "em 24–48h.",
      fechar: "Fechar",
    },
    planoB: {
      titulo: "Não deu para enviar daqui",
      texto:
        "Não percas o que escreveste: carrega no botão abaixo e abre o teu email com tudo já preenchido. Só tens de confirmar o envio.",
      abrirEmail: "Abrir no meu email",
      copiar: "Copiar",
      copiado: "Email copiado!",
      voltar: "Voltar ao formulário",
      fechar: "Fechar",
    },
    erros: {
      nome: "Escreve o teu nome.",
      email: "Email inválido.",
      mensagem: "Conta-me um pouco mais (mínimo 10 caracteres).",
    },
    avisos: {
      envio: "O envio automático não respondeu desta vez.",
      semLigacao: "Parece que estás sem ligação à internet.",
    },
  },
};

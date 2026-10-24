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
 *  CONTEÚDO DO SITE — é aqui que se edita tudo.
 *  Texto curto de propósito: uma linha por ideia.
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
  estado: string;
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
  estado: string;
  descricao: string;
  stack: string[];
  cor: "rose" | "lilac" | "mint" | "amber" | "sky";
}

export const dadosPessoais = {
  nome: "Camilly",
  autora: "Micaela Calé",
  papel: "Software Developer",
  email: "calemicaela94@gmail.com",
  /**
   * Endpoint que recebe os pedidos de orçamento e os entrega por email
   * (FormSubmit — grátis, sem conta; a primeira submissão exige ativação por email).
   * Deixar vazio ("") para voltar ao modo `mailto:` simples.
   */
  endpointFormulario: "https://formsubmit.co/ajax/calemicaela94@gmail.com",
  localizacao: "Portugal · remoto",
  anoAtual: new Date().getFullYear(),
};

export const navegacao: { rotulo: string; href: string }[] = [
  { rotulo: "Projetos", href: "#projetos" },
  { rotulo: "Suite", href: "#suite" },
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Contacto", href: "#contacto" },
];

export const hero = {
  badge: "Disponível para novos projetos",
  titulo: "Software Developer & Criadora da Camilly Suite",
  tituloRealce: "Camilly Suite",
  subtitulo:
    "Transformo ideias em aplicações móveis e web funcionais, escaláveis e com IA integrada. Do conceito à produção na Google Play Store.",
  acoes: [
    { rotulo: "Ver Projetos", href: "#projetos", variante: "primario" },
    { rotulo: "Contactar / Pedir Orçamento", acao: "orcamento", variante: "secundario" },
  ] as Acao[],
  metricas: [
    { valor: "Play Store", legenda: "app publicada" },
    { valor: "7+", legenda: "apps entregues" },
    { valor: "IA", legenda: "integrada" },
    { valor: "MVP", legenda: "em semanas" },
  ] as Metrica[],
  stack: ["React", "React Native", "Expo", "TypeScript", "Tailwind", "Supabase", "IA"],
};

export const projetoDestaque = {
  eyebrow: "Em produção",
  nome: "Camilly Reading Tracker",
  badge: "Disponível na Google Play Store",
  tagline: "Metas de leitura que se cumprem.",
  descricao:
    "App Android publicada e mantida: metas literárias, sequências diárias, lembretes e estatísticas de leitura.",
  destaques: [
    "Metas automáticas",
    "Sequências e lembretes",
    "Estatísticas de leitura",
  ],
  linkLoja: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
  stack: ["React + TanStack", "Capacitor", "Supabase", "IA"],
  metricas: [
    { valor: "Ao vivo", legenda: "na Play Store" },
    { valor: "Android", legenda: "build assinado" },
    { valor: "Suporte", legenda: "em contínuo" },
  ] as Metrica[],
};

export const suite = {
  eyebrow: "Produto próprio",
  titulo: "Camilly Suite: um ecossistema, não apps soltas",
  descricao:
    "Bem-estar e desenvolvimento pessoal num só lugar. Módulos independentes, a mesma conta, os mesmos assistentes de IA.",
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
      estado: "Em desenvolvimento ativo",
      funcionalidades: ["Rastreadores modulares", "IA Buddys", "Painel unificado"],
      destaque: true,
      cor: "rose",
    },
    {
      nome: "Camilly Kids Fun Tracker",
      papel: "Família",
      descricao: "Rotinas e gamificação familiar: tarefas, pontos e recompensas partilhados entre pais e filhos.",
      icone: Gamepad2,
      estado: "Em desenvolvimento",
      funcionalidades: ["Tarefas com pontos", "Recompensas", "Área escolar"],
      cor: "mint",
    },
    {
      nome: "Camilly Nourish Tracker",
      papel: "Saúde",
      descricao: "Nutrição sem complicações: refeições, planeamento semanal e hábitos alimentares.",
      icone: Salad,
      estado: "Em desenvolvimento",
      funcionalidades: ["Diário de refeições", "Planeamento", "Metas"],
      cor: "amber",
    },
  ] as Modulo[],
};

/** Trabalho para clientes — áreas diferentes, o mesmo rigor. */
export const outrosProjetos = {
  eyebrow: "Outros projetos",
  titulo: "Outros projetos em desenvolvimento",
  descricao: "Estética, formação médica e produtividade — áreas bem diferentes, o mesmo rigor.",
  itens: [
    {
      nome: "Cat Lash Designer",
      tipo: "Cliente · estética",
      estado: "Em desenvolvimento",
      descricao: "Marcações online com disponibilidade em tempo real e painel de gestão.",
      stack: ["React", "TypeScript"],
      cor: "rose",
    },
    {
      nome: "Mediject Training",
      tipo: "Cliente · formação",
      estado: "Em desenvolvimento",
      descricao: "PWA de apresentação: eventos, serviços, equipa e reservas.",
      stack: ["Next.js", "PWA"],
      cor: "sky",
    },
    {
      nome: "My Daily Tracker",
      tipo: "Produto próprio",
      estado: "Em desenvolvimento",
      descricao: "Painel de vida diária: rotinas, sono, finanças, família e IA.",
      stack: ["React", "TanStack"],
      cor: "lilac",
    },
  ] as Projeto[],
};

export const servicos = {
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
  ] as Servico[],
  processo: [
    { passo: "01", titulo: "Conversa", descricao: "Problema e objetivo." },
    { passo: "02", titulo: "Protótipo", descricao: "Ecrãs essenciais." },
    { passo: "03", titulo: "Construção", descricao: "Entregas para testares." },
    { passo: "04", titulo: "Lançamento", descricao: "Publicar e melhorar." },
  ],
};

export const contacto = {
  eyebrow: "Contacto",
  titulo: "Tens uma ideia? Vamos pô-la a funcionar.",
  descricao: "Conta-me o que precisas e recebes proposta com prazo e preço.",
  assuntoEmail: "Pedido de orçamento — portefólio",
  acoes: [
    {
      rotulo: "Contactar / Pedir Orçamento",
      acao: "orcamento",
      variante: "primario",
    },
    {
      rotulo: "Ver na Play Store",
      href: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
      variante: "secundario",
      externo: true,
    },
  ] as Acao[],
  garantias: [
    { icone: BookOpenCheck, texto: "Resposta em 24–48h" },
    { icone: Layers, texto: "Preço fechado antes" },
    { icone: Sparkles, texto: "Código e contas tuas" },
  ],
};

export const rodape = {
  nota: "Portefólio da Camilly · React + Vite + Tailwind",
  credito: "Desenvolvido por: Micaela Calé",
};

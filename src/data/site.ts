import {
  Bot,
  BookOpenCheck,
  Code2,
  Gamepad2,
  HeartPulse,
  Layers,
  Rocket,
  Salad,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DO SITE — é aqui que se edita tudo.
 *  Nenhum componente tem texto "hardcoded": para mudar uma frase,
 *  um módulo ou um serviço, basta alterar este ficheiro.
 * ─────────────────────────────────────────────────────────────
 */

export interface Acao {
  rotulo: string;
  href: string;
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

export const dadosPessoais = {
  nome: "Camilly",
  papel: "Desenvolvedora de Software",
  email: "calemicaela94@gmail.com",
  localizacao: "Portugal · a trabalhar em remoto",
  anoAtual: new Date().getFullYear(),
};

export const navegacao: { rotulo: string; href: string }[] = [
  { rotulo: "Projeto", href: "#projetos" },
  { rotulo: "Suite", href: "#suite" },
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Contacto", href: "#contacto" },
];

export const hero = {
  badge: "Disponível para novos projetos",
  titulo: "Desenvolvedora de Software & Criadora da Camilly Suite",
  tituloRealce: "Camilly Suite",
  subtitulo:
    "Transformo ideias em aplicações móveis e web funcionais, escaláveis e com IA integrada. Do conceito à produção na Google Play Store.",
  acoes: [
    { rotulo: "Ver Projetos", href: "#projetos", variante: "primario" },
    { rotulo: "Contactar / Pedir Orçamento", href: "#contacto", variante: "secundario" },
  ] as Acao[],
  metricas: [
    { valor: "Play Store", legenda: "app publicada em produção" },
    { valor: "3", legenda: "módulos no ecossistema" },
    { valor: "IA", legenda: "integrada no produto" },
    { valor: "MVP", legenda: "em semanas, não em meses" },
  ] as Metrica[],
  stack: ["React", "React Native", "Expo", "TypeScript", "Tailwind", "Supabase", "IA"],
};

export const projetoDestaque = {
  eyebrow: "Projeto em destaque",
  nome: "Camilly Reading Tracker",
  badge: "Disponível na Google Play Store",
  tagline: "Hábitos de leitura que se mantêm, com metas que se cumprem.",
  descricao:
    "Aplicação móvel que transforma leitura em rotina: define metas literárias, registra páginas e minutos lidos, acompanha sequências diárias e vê a evolução em gráficos simples de ler. É a prova de que levo um produto do conceito até ao telemóvel do utilizador final — publicado, mantido e a receber atualizações.",
  destaques: [
    "Metas literárias anuais e mensais com progresso automático",
    "Registo rápido de páginas e minutos lidos",
    "Sequências diárias e lembretes que mantêm o hábito vivo",
    "Biblioteca pessoal, estatísticas e histórico de leitura",
    "Sincronização entre dispositivos e conta segura",
    "Publicação e manutenção na Google Play Store",
  ],
  linkLoja: "https://play.google.com/store/apps/details?id=com.camillyreading.app",
  stack: ["React Native", "Expo", "TypeScript", "Supabase", "Notificações push"],
  metricas: [
    { valor: "Em produção", legenda: "publicada na loja" },
    { valor: "Android", legenda: "com build assinado" },
    { valor: "Contínuo", legenda: "atualizações e correções" },
  ] as Metrica[],
};

export const suite = {
  eyebrow: "O ecossistema",
  titulo: "Camilly Suite: um sistema, não apps soltas",
  descricao:
    "A visão é juntar desenvolvimento pessoal e bem-estar num só lugar. Em vez de aplicações isoladas, um ecossistema inteligente onde cada módulo cuida de uma área da vida — crescimento, família, nutrição — e todos partilham a mesma conta, a mesma linguagem visual e os mesmos assistentes de IA.",
  pilares: [
    {
      icone: Bot,
      titulo: "IA que acompanha",
      descricao: "Assistentes (Buddys) personalizados que leem o que registas e ajustam o plano em tempo real.",
    },
    {
      icone: Layers,
      titulo: "Modular por design",
      descricao: "Cada módulo funciona sozinho e ganha valor quando se liga aos outros.",
    },
    {
      icone: HeartPulse,
      titulo: "Bem-estar em primeiro",
      descricao: "Interface calma, dados claros e nada de pressão: o objetivo é progresso sustentável.",
    },
  ],
  modulos: [
    {
      nome: "Camilly Growth Petal",
      papel: "Flagship",
      descricao:
        "Hub central de desenvolvimento pessoal. Reúne vários rastreadores — hábitos, humor, foco, gratidão — e IA Buddys personalizados que acompanham o utilizador em tempo real, ajustando metas e planos com base no que está registado.",
      icone: Sparkles,
      estado: "Em desenvolvimento ativo",
      funcionalidades: [
        "Rastreadores modulares",
        "IA Buddys em tempo real",
        "Painel de progresso unificado",
        "Planos personalizados",
      ],
      destaque: true,
      cor: "rose",
    },
    {
      nome: "Camilly Kids Fun Tracker",
      papel: "Família",
      descricao:
        "Gestão de rotinas e gamificação familiar: tarefas, pontos, recompensas e escola partilhados entre pais e filhos, com progresso visível para toda a família.",
      icone: Gamepad2,
      estado: "Em desenvolvimento",
      funcionalidades: [
        "Rotinas e tarefas com pontos",
        "Recompensas e metas familiares",
        "Área escolar e trabalhos de casa",
        "Vários perfis de criança",
      ],
      cor: "mint",
    },
    {
      nome: "Camilly Nourish Tracker",
      papel: "Saúde",
      descricao:
        "Nutrição, refeições e saúde no mesmo sítio: registo de refeições, planeamento semanal e acompanhamento de hábitos alimentares sem complicações.",
      icone: Salad,
      estado: "Em desenvolvimento",
      funcionalidades: [
        "Diário de refeições",
        "Planeamento semanal",
        "Metas nutricionais",
        "Resumo de hábitos",
      ],
      cor: "amber",
    },
  ] as Modulo[],
};

export const servicos = {
  eyebrow: "Serviços",
  titulo: "Do conceito à produção, sem intermediários",
  descricao:
    "Trabalho diretamente contigo: falas com quem desenha e com quem programa. O resultado é produto a funcionar, código teu e uma base pronta para crescer.",
  itens: [
    {
      titulo: "Desenvolvimento de MVPs rápidos",
      descricao:
        "Do zero a um produto que já se pode mostrar a clientes ou investidores em poucas semanas. Âmbito fechado, foco no que valida a ideia e código pronto para evoluir.",
      icone: Rocket,
      entregaveis: ["Protótipo navegável", "Código-fonte teu", "Deploy em produção", "Base para iterar"],
      cor: "rose",
    },
    {
      titulo: "Aplicações móveis (React Native / Expo)",
      descricao:
        "Android e iOS a partir da mesma base de código. Inclui build assinado, testes internos e publicação na Google Play Store (e App Store).",
      icone: Smartphone,
      entregaveis: ["Android + iOS", "Notificações push", "Publicação na loja", "Atualizações contínuas"],
      cor: "lilac",
    },
    {
      titulo: "Integração de IA e web apps modernas",
      descricao:
        "Assistentes, geração de conteúdo e automações ligados ao produto — com a chave da IA sempre no servidor, nunca no browser. Web apps em React + TypeScript rápidas e responsivas.",
      icone: Code2,
      entregaveis: ["Integração com LLMs", "Backend seguro", "Base de dados (Supabase)", "UI responsiva"],
      cor: "sky",
    },
  ] as Servico[],
  processo: [
    { passo: "01", titulo: "Conversa", descricao: "Percebo o problema, o utilizador e o que conta como sucesso." },
    { passo: "02", titulo: "Protótipo", descricao: "Ecrãs e fluxo essencial para validar antes de escrever código." },
    { passo: "03", titulo: "Construção", descricao: "Desenvolvimento em ciclos curtos, com entregas para testares." },
    { passo: "04", titulo: "Lançamento", descricao: "Publicação, medição e as primeiras melhorias com dados reais." },
  ],
};

export const contacto = {
  eyebrow: "Contacto",
  titulo: "Tens uma ideia? Vamos transformá-la em produto.",
  descricao:
    "Seja um MVP para validar um negócio, uma app móvel para a loja ou uma funcionalidade de IA a entrar no teu produto — conta-me o que precisas e recebes uma proposta clara, com prazo e preço.",
  assuntoEmail: "Pedido de orçamento — portefólio Camilly Suite",
  acoes: [
    {
      rotulo: "Contactar / Pedir Orçamento",
      href: `mailto:calemicaela94@gmail.com?subject=${encodeURIComponent("Pedido de orçamento — portefólio Camilly Suite")}`,
      variante: "primario",
      externo: true,
    },
    {
      rotulo: "Ver a Reading Tracker na Play Store",
      href: "https://play.google.com/store/apps/details?id=com.camillyreading.app",
      variante: "secundario",
      externo: true,
    },
  ] as Acao[],
  garantias: [
    { icone: BookOpenCheck, texto: "Resposta em 24–48h úteis" },
    { icone: Layers, texto: "Âmbito e preço fechados antes de começar" },
    { icone: Sparkles, texto: "Código e contas ficam sempre do teu lado" },
  ],
};

export const rodape = {
  nota: "Portefólio da Camilly — Camilly Suite. Construído com React, Vite e Tailwind CSS.",
};

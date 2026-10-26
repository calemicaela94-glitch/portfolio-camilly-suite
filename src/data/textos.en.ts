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
} from "lucide-react";
import type { Conteudo } from "./textos";

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE COPY — ENGLISH
 *
 *  Mirrors `textos.ts` key for key. Typed as `Conteudo`, so the
 *  compiler fails if a field is missing or renamed.
 * ─────────────────────────────────────────────────────────────
 */
export const conteudoEn: Conteudo = {
  codigo: "en",
  seo: {
    titulo: "Camilly Suite — Software Developer · Micaela Calé",
    descricao:
      "Portfolio of Micaela Calé: mobile and web apps, embedded AI, and an app live on the Google Play Store. From concept to production, no middlemen.",
  },
  dadosPessoais: {
    nome: "Camilly",
    autora: "Micaela Calé",
    papel: "Software Developer",
    email: "camillyhelp@outlook.pt",
    endpointFormulario: "https://formsubmit.co/ajax/camillyhelp@outlook.pt",
    localizacao: "Portugal · remote",
    anoAtual: new Date().getFullYear(),
  },
  navegacao: [
    { rotulo: "Work", href: "#projetos" },
    { rotulo: "Suite", href: "#suite" },
    { rotulo: "Services", href: "#servicos" },
    { rotulo: "Contact", href: "#contacto" },
  ],
  ui: {
    pedirOrcamento: "Request a quote",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    navPrincipal: "Main navigation",
    navMovel: "Mobile navigation",
    navRodape: "Footer",
    email: "Email",
    idioma: "Language",
    idiomas: { pt: "Português", en: "English" },
  },
  hero: {
    badge: "Available for new projects",
    titulo: "Software Developer & Creator of Camilly Suite",
    tituloRealce: "Camilly Suite",
    subtitulo:
      "I turn ideas into working, scalable mobile and web applications with AI built in. From concept to production on the Google Play Store.",
    acoes: [
      { rotulo: "See my work", href: "#projetos", variante: "primario" },
      { rotulo: "Get in touch / Request a quote", acao: "orcamento", variante: "secundario" },
    ],
    metricas: [
      { valor: "Play Store", legenda: "app published" },
      { valor: "6", legenda: "projects in progress" },
      { valor: "AI", legenda: "built in" },
      { valor: "MVP", legenda: "in weeks" },
    ],
    stack: ["React", "React Native", "Expo", "TypeScript", "Tailwind", "Supabase", "AI"],
  },
  destaque: {
    eyebrow: "In production",
    titulo: "A real app, live in the store",
    descricao: "Shipped software with real users and ongoing maintenance. Not a mock-up.",
    projeto: {
      eyebrow: "In production",
      nome: "Camilly Reading Tracker",
      badge: "Available on the Google Play Store",
      tagline: "Reading goals that actually get met.",
      descricao:
        "A published and maintained Android app: reading goals, daily streaks, reminders and reading statistics.",
      destaques: ["Automatic goals", "Streaks and reminders", "Reading statistics"],
      linkLoja: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
      stack: ["React + TanStack", "Capacitor", "Supabase", "AI"],
      metricas: [
        { valor: "Play Store", legenda: "app published" },
        { valor: "Growing", legenda: "first users on board" },
        { valor: "Support", legenda: "ongoing maintenance" },
      ],
      ctaLoja: "View on Google Play",
      ctaSuite: "Explore the suite",
    },
  },
  suite: {
    eyebrow: "My own product",
    titulo: "Camilly Suite: an ecosystem, not scattered apps",
    descricao:
      "Wellbeing and personal growth in one place. Independent modules, one account, the same AI assistants. All three modules are in progress — Growth Petal is the most advanced.",
    pilares: [
      { icone: Bot, titulo: "AI that adapts", descricao: "Buddies that adjust your plan in real time." },
      { icone: Layers, titulo: "Modular", descricao: "Each module stands alone and connects to the rest." },
      { icone: BookOpenCheck, titulo: "Real progress", descricao: "Clear data, no pressure." },
    ],
    modulos: [
      {
        nome: "Camilly Growth Petal",
        papel: "Flagship",
        descricao:
          "A personal growth hub: habit, mood and focus trackers, with AI Buddies following along in real time.",
        icone: Sparkles,
        funcionalidades: ["Modular trackers", "AI Buddies", "Unified dashboard"],
        destaque: true,
        cor: "rose",
      },
      {
        nome: "Camilly Kids Fun Tracker",
        papel: "Family",
        descricao: "Family routines and gamification: tasks, points and rewards shared between parents and children.",
        icone: Gamepad2,
        funcionalidades: ["Tasks with points", "Rewards", "School area"],
        cor: "mint",
      },
      {
        nome: "Camilly Nourish Tracker",
        papel: "Health",
        descricao: "Nutrition without the fuss: meals, weekly planning and eating habits.",
        icone: Salad,
        funcionalidades: ["Meal diary", "Weekly planning", "Goals"],
        cor: "amber",
      },
    ],
    cartao: { total: "3 modules", verEcossistema: "See the ecosystem" },
  },
  outrosProjetos: {
    eyebrow: "Other projects",
    titulo: "In the workshop: what comes next",
    descricao:
      "The published app is up above. These three are not in a store yet — they are next in line.",
    avisoEstado: "3 projects in progress · none published yet",
    itens: [
      {
        nome: "Cat Lash Designer",
        tipo: "Client · beauty",
        estado: "In progress",
        descricao: "Online bookings with live availability and a management dashboard.",
        stack: ["React", "TypeScript"],
        cor: "rose",
      },
      {
        nome: "Mediject Training",
        tipo: "Client · training",
        estado: "In progress",
        descricao: "Showcase PWA: events, services, team and bookings.",
        stack: ["Next.js", "PWA"],
        cor: "sky",
      },
      {
        nome: "My Daily Tracker",
        tipo: "Own product",
        estado: "In progress",
        descricao: "Daily life dashboard: routines, sleep, finances, family and AI.",
        stack: ["React", "TanStack"],
        cor: "lilac",
      },
    ],
  },
  servicos: {
    eyebrow: "Services",
    titulo: "From concept to production, no middlemen",
    descricao: "You always talk to the person who designs and the person who codes. The code stays yours.",
    itens: [
      {
        titulo: "Fast MVPs",
        descricao: "From zero to a presentable product in a few weeks, focused on validating the idea.",
        icone: Rocket,
        entregaveis: ["Prototype", "Your code", "Deploy"],
        cor: "rose",
      },
      {
        titulo: "Mobile apps",
        descricao: "Android and iOS from the same React Native / Expo codebase, ready for the store.",
        icone: Smartphone,
        entregaveis: ["Android + iOS", "Push", "Store release"],
        cor: "lilac",
      },
      {
        titulo: "AI and web apps",
        descricao: "Assistants and automations with the key always on the server. React + TypeScript.",
        icone: Code2,
        entregaveis: ["LLMs", "Secure backend", "Responsive UI"],
        cor: "sky",
      },
    ],
    processo: [
      { passo: "01", titulo: "Conversation", descricao: "The problem and the goal." },
      { passo: "02", titulo: "Prototype", descricao: "The essential screens." },
      { passo: "03", titulo: "Build", descricao: "Deliveries you can test." },
      { passo: "04", titulo: "Launch", descricao: "Ship it, then improve." },
    ],
    comoTrabalho: {
      titulo: "How I work",
      descricao: "Four simple steps, no surprises along the way.",
      nota: "Only have the idea? That is enough to start.",
      cta: "Request a quote",
    },
  },
  contacto: {
    eyebrow: "Contact",
    titulo: "Got an idea? Let's get it working.",
    descricao: "Tell me what you need and you'll get a proposal with a timeline and a price.",
    assuntoEmail: "Quote request — portfolio",
    acoes: [
      { rotulo: "Get in touch / Request a quote", acao: "orcamento", variante: "primario" },
      {
        rotulo: "View on the Play Store",
        href: "https://play.google.com/store/apps/details?id=com.camillyreading.tracker",
        variante: "secundario",
        externo: true,
      },
    ],
    garantias: [
      { icone: BookOpenCheck, texto: "Reply within 24–48h" },
      { icone: Layers, texto: "Price agreed upfront" },
      { icone: Sparkles, texto: "Code and accounts are yours" },
    ],
    escrevePara: "Or write directly to",
  },
  rodape: {
    nota: "Camilly's portfolio · React + Vite + Tailwind",
    credito: "Built by: Micaela Calé",
  },
  galeria: {
    altPrefixo: "Camilly app screenshot:",
    ampliar: "Enlarge",
    fechar: "Close",
  },
  orcamento: {
    titulo: "Request a quote",
    subtitulo: "Reply within 24–48h. No strings attached.",
    nome: "Name",
    nomePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    tipo: "Project type",
    tipos: ["MVP / prototype", "Mobile app (Android / iOS)", "Web app + AI", "Website / portfolio", "Other"],
    mensagem: "Message",
    mensagemPlaceholder: "What do you need? By when? Is anything already built?",
    enviar: "Send request",
    aEnviar: "Sending…",
    privacidade: "I only use your details to reply to this request.",
    assunto: (tipo) => `Quote request — ${tipo}`,
    enviado: {
      titulo: "Message sent!",
      texto: "I've got your request. I'll reply to",
      prazo: "within 24–48h.",
      fechar: "Close",
    },
    planoB: {
      titulo: "Couldn't send it from here",
      texto:
        "Don't lose what you wrote: hit the button below and your email app opens with everything filled in. You just need to confirm the send.",
      abrirEmail: "Open in my email",
      copiar: "Copy",
      copiado: "Email copied!",
      voltar: "Back to the form",
      fechar: "Close",
    },
    erros: {
      nome: "Please write your name.",
      email: "Invalid email.",
      mensagem: "Tell me a bit more (at least 10 characters).",
    },
    avisos: {
      envio: "The automatic send didn't go through this time.",
      semLigacao: "Looks like you're offline.",
    },
  },
};

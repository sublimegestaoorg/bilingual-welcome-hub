import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const dict = {
  pt: {
    nav: {
      modules: "Módulos",
      tools: "Ferramentas",
      plans: "Planos",
      start: "Começar grátis",
      environments: "Ambientes",
      dashboard: "Usuário",
      ai: "IA Técnica",
      enterprise: "Empresarial",
      admin: "Admin",
    },
    brand: {
      name: "NEXVOLT",
      sub: "INTELLIGENCE & ENGINEERING",
      slogan: "Conhecimento técnico. Inteligência. Soluções.",
      ecosystem: "Um ecossistema de conhecimento técnico",
      domains: ["Elétrica", "Automação", "Comandos", "Manutenção", "Inteligência Artificial"],
      provisionalNote:
        "Nome comercial provisório: NexVolt — sujeito a pesquisa de marca, domínio e disponibilidade jurídica.",
    },
    pillars: [
      {
        tag: "BIBLIOTECA TÉCNICA",
        title: "Manuais e equipamentos",
        desc: "Catálogo técnico com fabricantes, modelos, esquemas elétricos, datasheets e códigos de falha.",
        href: "/dashboard",
      },
      {
        tag: "INTELIGÊNCIA ARTIFICIAL",
        title: "Diagnóstico técnico",
        desc: "Assistente especializado com leitura de manuais, interpretação de diagramas e causa-raiz.",
        href: "/ai",
      },
      {
        tag: "AUTOMAÇÃO",
        title: "CLPs e comandos",
        desc: "Partidas de motores, intertravamentos, lógica Ladder, blocos funcionais, IHM e redes industriais.",
        href: "/dashboard",
      },
      {
        tag: "FERRAMENTAS",
        title: "Cálculos e projetos",
        desc: "Dimensionamento elétrico, Lei de Ohm, queda de tensão, listas de materiais e diagramas.",
        href: "/tools",
      },
    ],
    hero: {
      tag: "Elétrica · Automação · IA",
      title: "Todo o conhecimento técnico de elétrica em um só lugar.",
      sub: "Manuais, códigos de falha, diagramas, calculadoras e um assistente de IA que cita a fonte de cada resposta.",
      cta: "Explorar Ambientes",
      cta2: "Abrir Calculadoras",
    },
    vision: {
      sectionTag: "01 · VISÃO E POSICIONAMENTO",
      title: "Conectar equipamentos, documentação, ferramentas e diagnóstico inteligente",
      missionLabel: "Missão",
      mission:
        "Centralizar o conhecimento técnico de elétrica e automação em um único ambiente, facilitando o aprendizado, a consulta de documentação, o diagnóstico de falhas e a execução de projetos.",
      differentialLabel: "Diferencial competitivo",
      differential:
        "Em vez de ser somente um portal de cursos ou uma biblioteca de PDFs, a NexVolt é uma plataforma que conecta equipamentos, documentação, conhecimento, ferramentas e diagnóstico inteligente.",
      valuePropsTitle: "Proposta de valor",
      valueProps: [
        "Encontrar rapidamente informações de qualquer equipamento cadastrado.",
        "Consultar manuais e diagramas técnicos.",
        "Identificar erros e encontrar procedimentos de diagnóstico.",
        "Aprender comandos elétricos e programação.",
        "Realizar cálculos e dimensionamentos.",
        "Utilizar inteligência artificial especializada.",
        "Organizar manutenções e equipamentos.",
      ],
    },
    branding: {
      sectionTag: "02 · NOME E IDENTIDADE DA MARCA",
      title: "Avaliação de naming e posicionamento",
      rationale:
        "Primeira escolha: NexVolt, por ser curto, tecnológico e permitir expansão para diferentes segmentos. Antes do registro definitivo, inclui verificação de domínio, busca no INPI e análise de conflitos de marca.",
      columns: ["Nome", "Posicionamento", "Status"],
      candidates: [
        ["NexVolt", "Tecnologia e energia", "1ª Escolha · Recomendado"],
        ["EletroNexo", "Conexão entre elétrica e conhecimento", "Alternativa"],
        ["Voltora", "Moderno e tecnológico", "Alternativa"],
        ["EletriHub", "Central de conhecimento elétrico", "Alternativa"],
        ["ComandoX", "Foco em comandos e automação", "Nicho"],
        ["TecnoVolt", "Tecnologia e engenharia", "Alternativa"],
      ],
      checklist: [
        "Pesquisa de disponibilidade de domínio (.com.br / .io / .tech)",
        "Busca prévia de anterioridade no INPI (Classes NCL 9, 35, 41 e 42)",
        "Verificação de conflitos jurídicos e presença digital",
      ],
    },
    environmentsSection: {
      sectionTag: "03 · ESTRUTURA GERAL DO SISTEMA",
      title: "Quatro grandes ambientes integrados",
      sub: "Acesse cada ambiente abaixo para navegar pelas funcionalidades interativas da plataforma.",
      openBtn: "Acessar ambiente",
      items: [
        {
          id: "01",
          title: "Ambiente do usuário",
          route: "/dashboard" as const,
          summary: "Dashboard, biblioteca, manuais, ferramentas, cursos, favoritos e histórico.",
          bullets: [
            "Busca rápida de equipamentos, manuais e datasheets",
            "Consulta de códigos de falha e comandos elétricos",
            "Trilhas de aprendizagem, favoritos e histórico técnico",
          ],
        },
        {
          id: "02",
          title: "Inteligência artificial",
          route: "/ai" as const,
          summary: "Assistente técnico, diagnóstico, leitura de documentos, interpretação de imagens e diagramas.",
          bullets: [
            "Diagnóstico passo a passo guiado por sintomas e alarmes",
            "Leitura contextual de manuais PDF com citação da página",
            "Interpretação técnica de fotos de painéis e esquemas elétricos",
          ],
        },
        {
          id: "03",
          title: "Ambiente empresarial",
          route: "/enterprise" as const,
          summary: "Gestão de equipes, ativos, manutenções, planos e permissões.",
          bullets: [
            "Cadastro de ativos industriais por planta e setor",
            "Ordens de manutenção preventiva, preditiva e corretiva",
            "Controle de equipes, turnos e níveis de permissão (RBAC)",
          ],
        },
        {
          id: "04",
          title: "Painel administrativo",
          route: "/admin" as const,
          summary: "Gestão de usuários, produtos, fabricantes, documentação, conteúdo, IA, assinaturas e indicadores.",
          bullets: [
            "Curadoria de fabricantes, equipamentos, manuais e cursos",
            "Monitoramento de consumo de IA, acurácia e prompts",
            "Métricas de assinaturas (MRR), usuários ativos e auditoria",
          ],
        },
      ],
    },
    modulesTitle: "Módulos funcionais — 16 módulos conectados",
    modulesSub:
      "A plataforma será dividida em 16 módulos, organizados para permitir desenvolvimento independente e integração entre eles.",
    modules: [
      ["Dashboard", "Resumo de atividades, pesquisas recentes, favoritos, atualizações técnicas, ferramentas e acesso rápido à IA."],
      ["Biblioteca de equipamentos", "Fabricantes, categorias, modelos, códigos, características, acessórios e equipamentos compatíveis."],
      ["Manuais e documentação", "PDFs, datasheets, catálogos, tabelas, esquemas, versões e fontes oficiais."],
      ["Erros e soluções", "Banco de códigos de falhas, sintomas, causas, testes, procedimentos e soluções verificadas."],
      ["Comandos elétricos", "Diagramas de força e comando, partidas de motores, reversão, intertravamentos e temporizações."],
      ["Automação e CLP", "Ladder, blocos funcionais, programação, IHM, redes industriais e exemplos de aplicações."],
      ["Manutenção elétrica", "Preventiva, corretiva, preditiva, inspeções, checklists e histórico de intervenções."],
      ["Energia solar", "Módulos fotovoltaicos, inversores, proteções, strings, dimensionamento e diagnóstico."],
      ["Elétrica residencial", "Circuitos, instalações, quadros, proteção, dimensionamento e interpretação de projetos."],
      ["Eletrônica", "Componentes, circuitos, fontes, placas, medições e diagnóstico eletrônico."],
      ["Instrumentação", "Sensores, transmissores, pressão, temperatura, vazão, calibração e sinais 4–20 mA."],
      ["Ferramentas e calculadoras", "Lei de Ohm, potência, corrente, queda de tensão, dimensionamento e conversões."],
      ["Projetos e diagramas", "Projetos comentados, listas de materiais, esquemas e desenhos técnicos."],
      ["Cursos e aprendizagem", "Trilhas, aulas, exercícios, avaliações e certificados de conclusão."],
      ["Comunidade técnica", "Perguntas, respostas, publicações, compartilhamentos e reputação."],
      ["Assistente técnico IA", "Diagnóstico inteligente, consulta de manuais, imagens, diagramas e suporte técnico."],
    ],
    plansTitle: "Planos",
    perMonth: "/mês",
    from: "a partir de",
    plans: [
      ["Gratuito", "R$ 0", ["Estudantes e iniciantes", "Catálogo e biblioteca básica", "Calculadoras básicas", "IA para experimentação"]],
      ["Profissional", "R$ 39,90", ["Eletricistas e técnicos", "Manuais e diagnósticos completos", "Todas as calculadoras", "Cota mensal de IA + Comandos"]],
      ["Especialista", "R$ 79,90", ["Engenheiros e avançados", "Cota ampliada de IA + Visão", "Simulador CLP/Ladder e Projetos", "Histórico e exportação"]],
      ["Empresas", "R$ 249", ["Equipes e organizações", "Multi-tenant com isolamento RLS", "Gestão de ativos e manutenção", "Quotas corporativas de IA"]],
    ] as [string, string, string[]][],
    tools: {
      title: "Ferramentas — Cálculos e Projetos",
      sub: "Calculadora da Lei de Ohm e utilitários de dimensionamento elétrico.",
      v: "Tensão (V)",
      i: "Corrente (A)",
      r: "Resistência (Ω)",
      p: "Potência (W)",
      clear: "Limpar",
      need: "Informe exatamente dois valores.",
    },
    footer: "Conteúdo técnico para profissionais qualificados.",
  },
  en: {
    nav: {
      modules: "Modules",
      tools: "Tools",
      plans: "Plans",
      start: "Start free",
      environments: "Environments",
      dashboard: "User Hub",
      ai: "Technical AI",
      enterprise: "Enterprise",
      admin: "Admin",
    },
    brand: {
      name: "NEXVOLT",
      sub: "INTELLIGENCE & ENGINEERING",
      slogan: "Technical knowledge. Intelligence. Solutions.",
      ecosystem: "A technical knowledge ecosystem",
      domains: ["Electrical", "Automation", "Controls", "Maintenance", "Artificial Intelligence"],
      provisionalNote:
        "Provisional trade name: NexVolt — subject to trademark search, domain availability, and legal clearance.",
    },
    pillars: [
      {
        tag: "TECHNICAL LIBRARY",
        title: "Manuals & equipment",
        desc: "Technical catalog with manufacturers, models, wiring diagrams, datasheets and fault codes.",
        href: "/dashboard",
      },
      {
        tag: "ARTIFICIAL INTELLIGENCE",
        title: "Technical diagnostics",
        desc: "Specialized assistant with manual reading, diagram interpretation and root-cause analysis.",
        href: "/ai",
      },
      {
        tag: "AUTOMATION",
        title: "PLCs & controls",
        desc: "Motor starters, interlocks, Ladder logic, function blocks, HMI and industrial networks.",
        href: "/dashboard",
      },
      {
        tag: "TOOLS",
        title: "Calculations & projects",
        desc: "Electrical sizing, Ohm's Law, voltage drop, bills of materials and wiring diagrams.",
        href: "/tools",
      },
    ],
    hero: {
      tag: "Electrical · Automation · AI",
      title: "All electrical technical knowledge in one place.",
      sub: "Manuals, fault codes, diagrams, calculators and an AI assistant that cites the source of every answer.",
      cta: "Explore Environments",
      cta2: "Open Calculators",
    },
    vision: {
      sectionTag: "01 · VISION & POSITIONING",
      title: "Connecting equipment, documentation, tools and intelligent diagnostics",
      missionLabel: "Mission",
      mission:
        "Centralize electrical and automation technical knowledge in a single environment, streamlining learning, documentation lookup, fault diagnosis, and project execution.",
      differentialLabel: "Competitive advantage",
      differential:
        "Rather than being just a course portal or a PDF library, NexVolt connects equipment, documentation, knowledge, tools, and intelligent diagnostics.",
      valuePropsTitle: "Value proposition",
      valueProps: [
        "Quickly find information for any registered equipment.",
        "Consult technical manuals and wiring diagrams.",
        "Identify fault codes and follow diagnostic procedures.",
        "Learn electrical controls and PLC programming.",
        "Perform electrical calculations and sizing.",
        "Use specialized artificial intelligence.",
        "Organize maintenance schedules and assets.",
      ],
    },
    branding: {
      sectionTag: "02 · BRAND NAME & IDENTITY",
      title: "Naming evaluation & positioning",
      rationale:
        "First choice: NexVolt — short, tech-forward, and scalable across segments. Prior to registration, verify domain availability, trademark registry (INPI), and potential brand conflicts.",
      columns: ["Name", "Positioning", "Status"],
      candidates: [
        ["NexVolt", "Technology and energy", "1st Choice · Recommended"],
        ["EletroNexo", "Connection between electrical and knowledge", "Alternative"],
        ["Voltora", "Modern and technological", "Alternative"],
        ["EletriHub", "Electrical knowledge hub", "Alternative"],
        ["ComandoX", "Focus on controls and automation", "Niche"],
        ["TecnoVolt", "Technology and engineering", "Alternative"],
      ],
      checklist: [
        "Domain availability check (.com.br / .io / .tech)",
        "Trademark registry search at INPI (NCL Classes 9, 35, 41, and 42)",
        "Legal conflict verification and digital footprint audit",
      ],
    },
    environmentsSection: {
      sectionTag: "03 · SYSTEM ARCHITECTURE",
      title: "Four integrated core environments",
      sub: "Open each environment below to explore the interactive platform capabilities.",
      openBtn: "Open environment",
      items: [
        {
          id: "01",
          title: "User environment",
          route: "/dashboard" as const,
          summary: "Dashboard, library, manuals, tools, courses, favorites, and history.",
          bullets: [
            "Fast lookup for equipment, manuals, and datasheets",
            "Fault code dictionary and electrical control schematics",
            "Learning tracks, saved bookmarks, and consultation history",
          ],
        },
        {
          id: "02",
          title: "Artificial intelligence",
          route: "/ai" as const,
          summary: "Technical assistant, diagnostics, document reading, image and diagram interpretation.",
          bullets: [
            "Step-by-step troubleshooting guided by alarms and symptoms",
            "Contextual PDF manual reading with exact page citations",
            "Visual analysis of electrical panels and schematic diagrams",
          ],
        },
        {
          id: "03",
          title: "Enterprise environment",
          route: "/enterprise" as const,
          summary: "Team management, assets, maintenance workflows, plans, and permissions.",
          bullets: [
            "Industrial asset registry organized by plant and sector",
            "Preventive, predictive, and corrective maintenance orders",
            "Team rosters, shifts, and role-based access control (RBAC)",
          ],
        },
        {
          id: "04",
          title: "Admin panel",
          route: "/admin" as const,
          summary: "Management of users, products, manufacturers, documentation, content, AI, subscriptions, and KPIs.",
          bullets: [
            "Curation of manufacturers, equipment, manuals, and courses",
            "AI token consumption, accuracy metrics, and prompt governance",
            "Subscription metrics (MRR), active users, and system KPIs",
          ],
        },
      ],
    },
    modulesTitle: "Functional modules — 16 connected modules",
    modulesSub:
      "The platform is divided into 16 modules, organized to allow independent development and seamless integration.",
    modules: [
      ["Dashboard", "Activity summary, recent searches, favorites, technical updates, tools, and quick AI access."],
      ["Equipment library", "Manufacturers, categories, models, part numbers, specifications, accessories, and compatible equipment."],
      ["Manuals & documentation", "PDFs, datasheets, catalogs, tables, wiring diagrams, revisions, and official sources."],
      ["Errors & solutions", "Database of fault codes, symptoms, root causes, tests, procedures, and verified fixes."],
      ["Electrical controls", "Power and control schematics, motor starters, reversing circuits, interlocks, and timers."],
      ["Automation & PLC", "Ladder logic, function blocks, PLC programming, HMI, industrial networks, and application examples."],
      ["Electrical maintenance", "Preventive, corrective, predictive maintenance, inspections, checklists, and intervention history."],
      ["Solar energy", "PV modules, solar inverters, string boxes, protections, sizing, and diagnostics."],
      ["Residential wiring", "Circuits, wiring installations, distribution boards, protection, sizing, and blueprint reading."],
      ["Electronics", "Components, circuits, switched-mode power supplies, PCBs, measurements, and board-level diagnostics."],
      ["Instrumentation", "Sensors, transmitters, pressure, temperature, flow, calibration, and 4–20 mA loops."],
      ["Tools & calculators", "Ohm's Law, active/reactive power, motor current, voltage drop, cable sizing, and unit conversions."],
      ["Projects & diagrams", "Annotated engineering projects, bills of materials (BOM), wiring schematics, and technical drawings."],
      ["Courses & learning", "Learning tracks, video lessons, practical exercises, assessments, and completion certificates."],
      ["Tech community", "Questions, verified answers, field posts, knowledge sharing, and technical reputation."],
      ["AI technical assistant", "Intelligent diagnostics, manual lookup, image and schematic analysis, and technical support."],
    ],
    plansTitle: "Plans",
    perMonth: "/mo",
    from: "from",
    plans: [
      ["Free", "R$ 0", ["Students & beginners", "Catalog & basic library", "Basic calculators", "AI trial quota"]],
      ["Professional", "R$ 39.90", ["Electricians & technicians", "Full manuals & fault diagnostics", "All calculators", "Monthly AI quota + Controls"]],
      ["Specialist", "R$ 79.90", ["Engineers & advanced pros", "Extended AI + Vision analysis", "PLC/Ladder Simulator & Projects", "Full history & export"]],
      ["Enterprise", "R$ 249", ["Teams & organizations", "Multi-tenant RLS isolation", "Asset & maintenance management", "Corporate AI & simulation quotas"]],
    ] as [string, string, string[]][],
    tools: {
      title: "Tools — Calculations & Projects",
      sub: "Ohm's Law calculator and electrical sizing utilities.",
      v: "Voltage (V)",
      i: "Current (A)",
      r: "Resistance (Ω)",
      p: "Power (W)",
      clear: "Clear",
      need: "Enter exactly two values.",
    },
    footer: "Technical content for qualified professionals.",
  },
};

export type Dict = (typeof dict)["pt"];

export function detectLang(saved: string | null, browser: string | undefined): Lang {
  if (saved === "pt" || saved === "en") return saved;
  return browser?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "pt",
  t: dict.pt,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    setLangState(detectLang(localStorage.getItem("lang"), navigator.language));
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };
  return <Ctx.Provider value={{ lang, t: dict[lang] as Dict, setLang }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);

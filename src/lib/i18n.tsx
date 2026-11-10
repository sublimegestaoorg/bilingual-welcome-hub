import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const dict = {
  pt: {
    nav: { modules: "Módulos", tools: "Ferramentas", plans: "Planos", start: "Começar grátis" },
    hero: {
      tag: "Elétrica · Automação · IA",
      title: "Todo o conhecimento técnico de elétrica em um só lugar.",
      sub: "Manuais, códigos de falha, diagramas, calculadoras e um assistente de IA que cita a fonte de cada resposta.",
      cta: "Abrir calculadoras",
      cta2: "Ver planos",
    },
    modulesTitle: "16 módulos conectados",
    modules: [
      ["Dashboard", "Atividades, favoritos e acesso rápido à IA."],
      ["Biblioteca de equipamentos", "Fabricantes, modelos, códigos e compatíveis."],
      ["Manuais e documentação", "PDFs, datasheets, catálogos e versões oficiais."],
      ["Erros e soluções", "Códigos de falha, causas, testes e soluções."],
      ["Comandos elétricos", "Partidas de motores, reversão e intertravamentos."],
      ["Automação e CLP", "Ladder, blocos funcionais, IHM e redes."],
      ["Manutenção elétrica", "Preventiva, corretiva, preditiva e checklists."],
      ["Energia solar", "Módulos, inversores, strings e dimensionamento."],
      ["Elétrica residencial", "Circuitos, quadros, proteção e projetos."],
      ["Eletrônica", "Componentes, fontes, placas e medições."],
      ["Instrumentação", "Sensores, transmissores e sinais 4–20 mA."],
      ["Ferramentas e calculadoras", "Ohm, potência, queda de tensão e conversões."],
      ["Projetos e diagramas", "Projetos comentados e listas de materiais."],
      ["Cursos e aprendizagem", "Trilhas, aulas, avaliações e certificados."],
      ["Comunidade técnica", "Perguntas, respostas e reputação."],
      ["Assistente técnico IA", "Diagnóstico com manuais, imagens e diagramas."],
    ],
    plansTitle: "Planos",
    perMonth: "/mês",
    from: "a partir de",
    plans: [
      ["Free", "R$ 0", ["Biblioteca básica", "Manuais limitados", "Calculadoras básicas", "IA para experimentar"]],
      ["Pro", "R$ 29,90", ["Manuais completos", "Erros e soluções completos", "Todas as calculadoras", "Cota mensal de IA"]],
      ["Premium", "R$ 59,90", ["Tudo do Pro", "Cota ampliada de IA", "Análise de imagens", "Histórico completo"]],
      ["Empresas", "R$ 199", ["Equipes e permissões", "Gestão de ativos", "Ordens de serviço", "IA por contrato"]],
    ] as [string, string, string[]][],
    tools: {
      title: "Calculadora — Lei de Ohm",
      sub: "Preencha dois valores e o restante é calculado.",
      v: "Tensão (V)", i: "Corrente (A)", r: "Resistência (Ω)", p: "Potência (W)",
      clear: "Limpar", need: "Informe exatamente dois valores.",
    },
    footer: "Conteúdo técnico para profissionais qualificados.",
  },
  en: {
    nav: { modules: "Modules", tools: "Tools", plans: "Plans", start: "Start free" },
    hero: {
      tag: "Electrical · Automation · AI",
      title: "All electrical technical knowledge in one place.",
      sub: "Manuals, fault codes, diagrams, calculators and an AI assistant that cites the source of every answer.",
      cta: "Open calculators",
      cta2: "See plans",
    },
    modulesTitle: "16 connected modules",
    modules: [
      ["Dashboard", "Activity, favorites and quick AI access."],
      ["Equipment library", "Manufacturers, models, codes and compatibles."],
      ["Manuals & documentation", "PDFs, datasheets, catalogs and official versions."],
      ["Errors & solutions", "Fault codes, causes, tests and fixes."],
      ["Electrical controls", "Motor starters, reversing and interlocks."],
      ["Automation & PLC", "Ladder, function blocks, HMI and networks."],
      ["Electrical maintenance", "Preventive, corrective, predictive and checklists."],
      ["Solar energy", "Modules, inverters, strings and sizing."],
      ["Residential wiring", "Circuits, panels, protection and projects."],
      ["Electronics", "Components, power supplies, boards and measurements."],
      ["Instrumentation", "Sensors, transmitters and 4–20 mA signals."],
      ["Tools & calculators", "Ohm, power, voltage drop and conversions."],
      ["Projects & diagrams", "Annotated projects and bills of materials."],
      ["Courses & learning", "Tracks, lessons, assessments and certificates."],
      ["Tech community", "Questions, answers and reputation."],
      ["AI technical assistant", "Diagnosis using manuals, images and diagrams."],
    ],
    plansTitle: "Plans",
    perMonth: "/mo",
    from: "from",
    plans: [
      ["Free", "R$ 0", ["Basic library", "Limited manuals", "Basic calculators", "AI to try out"]],
      ["Pro", "R$ 29.90", ["Full manuals", "Full errors & solutions", "All calculators", "Monthly AI quota"]],
      ["Premium", "R$ 59.90", ["Everything in Pro", "Extended AI quota", "Image analysis", "Full history"]],
      ["Business", "R$ 199", ["Teams & permissions", "Asset management", "Work orders", "AI by contract"]],
    ] as [string, string, string[]][],
    tools: {
      title: "Calculator — Ohm's Law",
      sub: "Fill in two values and the rest is calculated.",
      v: "Voltage (V)", i: "Current (A)", r: "Resistance (Ω)", p: "Power (W)",
      clear: "Clear", need: "Enter exactly two values.",
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

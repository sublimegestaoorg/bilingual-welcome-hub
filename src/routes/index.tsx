import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SAAS_COMPARISON_MATRIX_7 } from "@/lib/ai-architecture-data";
import {
  BookOpen,
  Cpu,
  Sliders,
  Wrench,
  ArrowRight,
  Sparkles,
  Play,
  GraduationCap,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexVolt — Intelligence & Engineering | Elétrica, Automação e IA" },
      {
        name: "description",
        content:
          "Conhecimento técnico. Inteligência. Soluções. Biblioteca técnica, diagnóstico por IA com fontes, simulador de instalações e calculadoras de engenharia.",
      },
      { property: "og:title", content: "NexVolt — Intelligence & Engineering" },
      {
        property: "og:description",
        content:
          "Plataforma técnica de elétrica, automação, comandos, manutenção e inteligência artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillarIcons = [BookOpen, Cpu, Sliders, Wrench];

const SIX_CORES = [
  {
    num: "01",
    icon: Cpu,
    titlePt: "IA Especialista",
    titleEn: "Specialist AI",
    subPt: "Perguntas, diagnóstico e projetos",
    subEn: "Questions, diagnostics & projects",
    descPt:
      "Orquestrador central com 8 especialistas (Elétrica, Comandos, Automação, CLP, Eletrônica, Instrumentação, Manutenção e Solar) e citação obrigatória da página do manual.",
    descEn:
      "Central orchestrator with 8 domain specialists and mandatory manual page citations.",
    to: "/ai" as const,
  },
  {
    num: "02",
    icon: BookOpen,
    titlePt: "Conhecimento Técnico",
    titleEn: "Technical Knowledge",
    subPt: "Fabricantes, manuais e falhas",
    subEn: "Manufacturers, manuals & faults",
    descPt:
      "Catálogo estruturado de equipamentos (WEG, Siemens, Schneider, ABB, Danfoss, Omron), datasheets versionados e códigos de erro por modelo.",
    descEn:
      "Structured equipment catalog, versioned datasheets, and fault codes indexed by exact model.",
    to: "/dashboard" as const,
  },
  {
    num: "03",
    icon: Play,
    titlePt: "Simulação Digital",
    titleEn: "Digital Simulation",
    subPt: "Circuitos, comandos, CLP e instalações",
    subEn: "Circuits, controls, PLC & installations",
    descPt:
      "Bancada interativa com 5 motores validáveis para montar partidas de motores, testar intertravamentos e desenvolver lógicas Ladder antes da execução física.",
    descEn:
      "Interactive workbench with 5 validated engines to assemble motor starters, test interlocks, and simulate PLC logic.",
    to: "/simulator" as const,
  },
  {
    num: "04",
    icon: Wrench,
    titlePt: "Ferramentas de Engenharia",
    titleEn: "Engineering Tools",
    subPt: "Cálculos e dimensionamento",
    subEn: "Calculations & sizing",
    descPt:
      "Calculadoras independentes para Lei de Ohm, potência trifásica, queda de tensão, condutores, fator de potência e malhas 4–20 mA.",
    descEn:
      "Standalone calculators for Ohm's Law, three-phase power, voltage drop, cable sizing, and 4–20 mA loops.",
    to: "/tools" as const,
  },
  {
    num: "05",
    icon: GraduationCap,
    titlePt: "Aprendizado & Módulos",
    titleEn: "Learning & Modules",
    subPt: "Cursos, trilhas e 16 módulos",
    subEn: "Courses, tracks & 16 modules",
    descPt:
      "Trilhas estruturadas do básico ao avançado, projetos comentados, listas de materiais e comunidade técnica revisada.",
    descEn:
      "Structured tracks from fundamentals to advanced automation, annotated projects, and verified community.",
    to: "/modules" as const,
  },
  {
    num: "06",
    icon: Building2,
    titlePt: "Ambiente Empresas",
    titleEn: "Enterprise Hub",
    subPt: "Equipes, ativos e manutenção",
    subEn: "Teams, assets & maintenance",
    descPt:
      "Gestão multi-tenant com isolamento RLS para plantas industriais, ordens de manutenção preventiva/corretiva e controle de permissões por função.",
    descEn:
      "Multi-tenant management with RLS isolation for plant assets, maintenance work orders, and role permissions.",
    to: "/enterprise" as const,
  },
];

function Index() {
  const { t, lang } = useI18n();
  const isPt = lang === "pt";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* 1. HERO & 4 PILLARS */}
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            ⚡ {t.brand.name} · {t.brand.sub}
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
            {t.brand.slogan}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.hero.sub}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
            {t.brand.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-md border border-border bg-card/85 px-2.5 py-1 text-foreground"
              >
                {domain}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              {isPt ? "Acessar Plataforma" : "Open Platform"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              {isPt ? "Assistente Técnico IA" : "AI Technical Assistant"}
            </Link>
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <Play className="h-4 w-4 text-primary" />
              {isPt ? "Simulador de Instalações" : "Installation Simulator"}
            </Link>
          </div>

          {/* 4 Main Pillars */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? BookOpen;
              return (
                <Link
                  key={pillar.tag}
                  to={pillar.href}
                  className="group flex flex-col justify-between rounded-lg border border-border bg-card/90 p-5 transition-all hover:border-primary/60 hover:bg-secondary/60"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-primary">
                        {pillar.tag}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <h2 className="mt-2 font-display text-lg font-bold">{pillar.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pillar.desc}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary">
                    {t.environmentsSection.openBtn}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. OS 6 GRANDES NÚCLEOS CONECTADOS */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {isPt ? "ECOSSISTEMA INTEGRADO" : "INTEGRATED ECOSYSTEM"}
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">
                {isPt
                  ? "Seis grandes núcleos conectados à mesma base técnica"
                  : "Six connected cores sharing a unified technical knowledge base"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {isPt
                  ? "Encontre um equipamento no catálogo, consulte o manual oficial, investigue uma falha com a IA e utilize o mesmo componente no simulador."
                  : "Find an equipment model in the catalog, read its official manual, diagnose a fault with AI, and test it in the simulator."}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SIX_CORES.map((core) => {
              const Icon = core.icon;
              return (
                <Link
                  key={core.num}
                  to={core.to}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:bg-secondary/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-primary/15 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                        NÚCLEO {core.num}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold group-hover:text-primary">
                      {isPt ? core.titlePt : core.titleEn}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-primary">
                      {isPt ? core.subPt : core.subEn}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {isPt ? core.descPt : core.descEn}
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-foreground group-hover:text-primary">
                    {isPt ? "Acessar núcleo" : "Open core"}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PROPOSTA DE VALOR & DIFERENCIAL */}
      <section className="border-b border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {t.vision.sectionTag}
              </span>
              <h2 className="font-display text-3xl font-bold">{t.vision.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.vision.mission}
              </p>
              <div className="rounded-lg border border-primary/40 bg-primary/10 p-4 text-sm text-foreground">
                <strong className="block font-mono text-xs uppercase text-primary">
                  {t.vision.differentialLabel}
                </strong>
                <span className="mt-1 block">{t.vision.differential}</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {t.vision.valueProps.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 16 MÓDULOS CONECTADOS (CLEAN COMPACT GRID) */}
      <section id="modules" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {isPt ? "ARQUITETURA FUNCIONAL" : "FUNCTIONAL ARCHITECTURE"}
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold">{t.modulesTitle}</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{t.modulesSub}</p>
          </div>
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/20"
          >
            {isPt ? "Explorar os 16 Módulos" : "Explore All 16 Modules"}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.map(([name, desc], i) => (
            <Link
              key={name}
              to="/modules"
              className="group flex flex-col justify-between bg-card p-5 transition-colors hover:bg-secondary/70"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-primary" />
                </div>
                <h3 className="mt-2 font-display text-base font-semibold group-hover:text-primary">
                  {name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. PLANOS E ASSINATURAS */}
      <section id="plans" className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt ? "ASSINATURAS E PLANOS SAAS" : "SAAS PLANS & PRICING"}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold">{t.plansTitle}</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {t.plans.map(([name, price, feats], i) => (
              <div
                key={name}
                className={`flex flex-col justify-between rounded-xl border p-6 ${
                  i === 2 ? "border-primary bg-primary/5 shadow-glow" : "border-border bg-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{name}</h3>
                    {i === 2 && (
                      <span className="rounded bg-primary px-2 py-0.5 font-mono text-[10px] font-bold text-primary-foreground">
                        {isPt ? "RECOMENDADO" : "POPULAR"}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold">
                    {i === 3 && (
                      <span className="mr-1 text-xs font-normal text-muted-foreground">
                        {t.from}
                      </span>
                    )}
                    {price}
                    <span className="text-xs font-normal text-muted-foreground">{t.perMonth}</span>
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
                    {feats.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-secondary/60 font-mono uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">{isPt ? "Recurso" : "Feature"}</th>
                  <th className="px-4 py-3">{isPt ? "Gratuito" : "Free"}</th>
                  <th className="px-4 py-3">{isPt ? "Profissional" : "Professional"}</th>
                  <th className="px-4 py-3 text-primary">{isPt ? "Especialista" : "Specialist"}</th>
                  <th className="px-4 py-3">{isPt ? "Empresas" : "Enterprise"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SAAS_COMPARISON_MATRIX_7.map((row) => (
                  <tr key={row.featurePt} className="hover:bg-secondary/30">
                    <td className="px-4 py-2.5 font-medium">
                      {isPt ? row.featurePt : row.featureEn}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.free}</td>
                    <td className="px-4 py-2.5 text-foreground">{row.pro}</td>
                    <td className="px-4 py-2.5 font-semibold text-primary">{row.premium}</td>
                    <td className="px-4 py-2.5 text-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-border py-8 text-center text-xs text-muted-foreground">
        © NexVolt ({t.brand.sub}) · {t.footer}
      </footer>
    </div>
  );
}

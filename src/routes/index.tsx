import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { FUNCTIONAL_MODULES } from "@/lib/modules-data";
import {
  AI_CAPABILITIES_5_1,
  RAG_PIPELINE_STEPS_5_4,
  TECH_STACK_6_0,
  DATABASE_GROUPS_6_2,
  SAAS_COMPARISON_MATRIX_7,
  SECURITY_CONTROLS_9,
  ANTIGRAVITY_ROADMAP_10,
  MVP_SCOPE_12,
  SIX_STRATEGIC_PILLARS,
  EQUIPMENT_12_FIELDS_SAMPLE,
  FOUR_MACRO_STAGES,
} from "@/lib/ai-architecture-data";
import { MonolithTreeExplorer } from "@/components/technical/MonolithTreeExplorer";
import {
  BookOpen,
  Cpu,
  Sliders,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  Layers,
  Database,
  Server,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexVolt — Intelligence & Engineering | Ecossistema de Conhecimento Técnico" },
      {
        name: "description",
        content:
          "Conhecimento técnico. Inteligência. Soluções. Biblioteca técnica, inteligência artificial, automação e ferramentas para elétrica e engenharia.",
      },
      { property: "og:title", content: "NexVolt — Intelligence & Engineering" },
      {
        property: "og:description",
        content:
          "Ecossistema técnico de elétrica, automação, comandos, manutenção e inteligência artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillarIcons = [BookOpen, Cpu, Sliders, Wrench];

function Index() {
  const { t, lang } = useI18n();
  const isPt = lang === "pt";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO & 4 PILLARS */}
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            ⚡ {t.brand.name} · {t.brand.sub}
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
            {t.brand.slogan}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.hero.sub}</p>

          {/* Ecosystem domains */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground uppercase tracking-wider">
              {t.brand.ecosystem}:
            </span>
            {t.brand.domains.map((domain) => (
              <span
                key={domain}
                className="rounded border border-border bg-card/80 px-2.5 py-1 text-foreground"
              >
                {domain}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#environments"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/tools"
              className="rounded-md border border-border bg-card/60 px-5 py-3 font-medium hover:bg-secondary"
            >
              {t.hero.cta2}
            </Link>
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 font-medium text-primary hover:bg-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              {t.nav.ai}
            </Link>
          </div>

          {/* 4 Main Pillars from specification header */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? BookOpen;
              return (
                <Link
                  key={pillar.tag}
                  to={pillar.href}
                  className="group relative flex flex-col justify-between rounded-lg border border-border bg-card/90 p-5 transition-all hover:border-primary/60 hover:bg-secondary/70"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-primary">
                        {pillar.tag}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <h2 className="mt-2 font-display text-lg font-bold">{pillar.title}</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">{pillar.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary">
                    {t.environmentsSection.openBtn}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">{t.brand.provisionalNote}</p>
        </div>
      </section>

      {/* ESTRUTURA DE 6 PILARES PRINCIPAIS + SIMULADOR & FICHA TÉCNICA DE 12 CAMPOS */}
      <section className="border-b border-border bg-card/20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {isPt ? "ESTRUTURA ESTRATÉGICA DA PLATAFORMA" : "STRATEGIC PLATFORM STRUCTURE"}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">
                {isPt
                  ? "6 Núcleos Tecnológicos: IA, Diagnóstico, Simulador, Biblioteca e Laboratórios"
                  : "6 Core Technological Pillars: AI, Diagnostics, Simulator, Library & Labs"}
              </h2>
            </div>
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
            >
              {isPt ? "Abrir Simulador & Projetos IA" : "Open Simulator & AI Projects"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SIX_STRATEGIC_PILLARS.map((pillar) => (
              <Link
                key={pillar.num}
                to={pillar.route}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/60 hover:bg-secondary/40"
              >
                <div className="relative h-44 w-full overflow-hidden bg-secondary">
                  <img
                    src={pillar.image}
                    alt={isPt ? pillar.titlePt : pillar.titleEn}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded bg-background/90 px-2.5 py-0.5 font-mono text-xs font-bold text-primary">
                    {pillar.num} · {isPt ? pillar.badgePt : pillar.badgeEn}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold group-hover:text-primary">
                      {isPt ? pillar.titlePt : pillar.titleEn}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {isPt ? pillar.descPt : pillar.descEn}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary">
                    {pillar.route}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Ficha Estruturada de 12 Campos por Equipamento + 4 Macro Etapas */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
              <span className="font-mono text-xs uppercase text-primary">
                {isPt
                  ? "BANCO DE DADOS TÉCNICO · 12 CAMPOS ESTRUTURADOS POR EQUIPAMENTO"
                  : "TECHNICAL DATABASE · 12 STRUCTURED FIELDS PER EQUIPMENT"}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold">
                {isPt
                  ? "Documentos transformados em dados relacionais (WEG, Siemens, Schneider, ABB, Danfoss, Allen-Bradley, Mitsubishi, Omron)"
                  : "Documents transformed into structured relational records"}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {EQUIPMENT_12_FIELDS_SAMPLE.map((item) => (
                  <div
                    key={item.fieldPt}
                    className="rounded border border-border/70 bg-background/50 p-2.5 text-xs"
                  >
                    <span className="block font-mono text-[10px] uppercase text-primary">
                      {isPt ? item.fieldPt : item.fieldEn}
                    </span>
                    <span className="font-medium text-foreground">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-5">
              <span className="font-mono text-xs uppercase text-primary">
                {isPt
                  ? "RECOMENDAÇÃO DE EXECUÇÃO · 4 GRANDES ETAPAS"
                  : "EXECUTION RECOMMENDATION · 4 MACRO STAGES"}
              </span>
              <div className="mt-3 space-y-3">
                {FOUR_MACRO_STAGES.map((st) => (
                  <div
                    key={st.stage}
                    className="rounded border border-border/70 bg-background/50 p-3 text-xs"
                  >
                    <span className="font-mono font-bold text-primary">{st.stage} — </span>
                    <strong className="text-foreground">
                      {isPt ? st.titlePt : st.titleEn}
                    </strong>
                    <p className="mt-1 text-muted-foreground">
                      {isPt ? st.descPt : st.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. VISÃO E POSICIONAMENTO */}
      <section id="vision" className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.vision.sectionTag}
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold">{t.vision.title}</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-lg border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {t.vision.missionLabel}
                </span>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  {t.vision.mission}
                </p>
              </div>

              <div className="rounded-lg border border-primary/40 bg-primary/5 p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {t.vision.differentialLabel}
                </span>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  {t.vision.differential}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
              <h3 className="font-display text-lg font-semibold">{t.vision.valuePropsTitle}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.vision.valueProps.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-md border border-border/60 bg-background/50 p-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOME E IDENTIDADE DA MARCA */}
      <section id="brand" className="border-b border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Scale className="h-3.5 w-3.5" />
            {t.branding.sectionTag}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold">{t.branding.title}</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">{t.branding.rationale}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="overflow-hidden rounded-lg border border-border bg-card lg:col-span-8">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/60 font-mono text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">{t.branding.columns[0]}</th>
                    <th className="px-4 py-3">{t.branding.columns[1]}</th>
                    <th className="px-4 py-3">{t.branding.columns[2]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {t.branding.candidates.map(([name, pos, status], idx) => (
                    <tr
                      key={name}
                      className={idx === 0 ? "bg-primary/10 font-medium" : "hover:bg-secondary/40"}
                    >
                      <td className="px-4 py-3 font-display">
                        {name}
                        {idx === 0 && (
                          <span className="ml-2 rounded bg-primary px-1.5 py-0.5 font-mono text-[10px] text-primary-foreground">
                            ★
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{pos}</td>
                      <td className="px-4 py-3 font-mono text-xs">
                        <span
                          className={
                            idx === 0
                              ? "rounded-full border border-primary/50 bg-primary/20 px-2.5 py-0.5 text-primary"
                              : "text-muted-foreground"
                          }
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
                INPI & Due Diligence
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {t.branding.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESTRUTURA GERAL DO SISTEMA (OS 4 GRANDES AMBIENTES) */}
      <section id="environments" className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Layers className="h-3.5 w-3.5" />
            {t.environmentsSection.sectionTag}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold">{t.environmentsSection.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.environmentsSection.sub}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.environmentsSection.items.map((env) => (
              <div
                key={env.id}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                      AMBIENTE {env.id}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{env.route}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold">{env.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{env.summary}</p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-sm">
                    {env.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to={env.route}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {t.environmentsSection.openBtn}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 CONNECTED MODULES */}
      <section id="modules" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              04 · ARQUITETURA MODULAR (01–16)
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold">{t.modulesTitle}</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t.modulesSub}</p>
          </div>
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
          >
            {t.nav.modules} (01–16)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FUNCTIONAL_MODULES.map((mod, i) => {
            const [name, desc] = t.modules[i] ?? [mod.titlePt, mod.descPt];
            return (
              <Link
                key={mod.num}
                to="/modules"
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/60 hover:bg-secondary/50"
              >
                <div className="relative h-36 w-full overflow-hidden bg-secondary">
                  <img
                    src={mod.image}
                    alt={mod.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-0.5 font-mono text-xs font-bold text-primary">
                    {mod.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-display text-base font-semibold group-hover:text-primary">
                      {name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-primary">
                    {mod.environmentRoute}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. O CORAÇÃO DA PLATAFORMA: ASSISTENTE TÉCNICO IA & RAG */}
      <section id="ai-architecture" className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                <Database className="h-3.5 w-3.5" />
                {isPt
                  ? "05 · O CORAÇÃO DA PLATAFORMA: ASSISTENTE TÉCNICO IA"
                  : "05 · THE HEART OF THE PLATFORM: AI TECHNICAL ASSISTANT"}
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold">
                {isPt
                  ? "Sistema de IA Especializado com Base Documental Controlada (RAG)"
                  : "Specialized AI System with Controlled Documentary RAG"}
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                {isPt
                  ? "Não é apenas um chatbot conectado a uma API: combina orquestrador de intenção, esteira RAG de 10 etapas, busca híbrida (textual + vetorial pgvector) e citação obrigatória de página, versão e data."
                  : "More than a raw chatbot API: combines an intent orchestrator, a 10-stage RAG pipeline, hybrid search (full-text + pgvector), and mandatory page, version, and date citations."}
              </p>
            </div>
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
            >
              {isPt ? "Testar Diagnóstico em 8 Etapas" : "Try 8-Step Diagnostic"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 5.1 8 Capabilities Table/Cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {AI_CAPABILITIES_5_1.map((cap) => (
              <div
                key={cap.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="font-display text-sm font-bold text-primary">
                  {isPt ? cap.namePt : cap.nameEn}
                </p>
                <p className="mt-1 text-xs font-medium text-foreground">
                  {isPt ? cap.funcPt : cap.funcEn}
                </p>
                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  {isPt ? cap.demoPt : cap.demoEn}
                </p>
              </div>
            ))}
          </div>

          {/* 5.4 10-Stage RAG Pipeline */}
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
              {isPt
                ? "5.4 Esteira de Processamento RAG (10 Etapas) + Regra Anti-Alucinação"
                : "5.4 10-Stage RAG Processing Pipeline + Anti-Hallucination Rule"}
            </h3>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
              {RAG_PIPELINE_STEPS_5_4.map((s) => (
                <div
                  key={s.step}
                  className="rounded border border-border/70 bg-background/50 p-3 text-xs"
                >
                  <span className="font-mono font-bold text-primary">{s.step}.</span>{" "}
                  <span className="font-medium">{isPt ? s.pt : s.en}</span>
                  <span className="mt-1 block font-mono text-[10px] text-muted-foreground">
                    {s.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARQUITETURA TECNOLÓGICA COMPLETA & 6.1 MONÓLITO MODULAR */}
      <section id="tech-stack" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Server className="h-3.5 w-3.5" />
            {isPt
              ? "06 · ARQUITETURA TECNOLÓGICA COMPLETA (MONÓLITO MODULAR)"
              : "06 · COMPLETE TECHNOLOGY ARCHITECTURE (MODULAR MONOLITH)"}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold">
            {isPt
              ? "Stack moderna integrada ao Google Antigravity, sem complexidade desnecessária"
              : "Modern stack integrated with Google Antigravity, without unnecessary complexity"}
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            {isPt
              ? "6.1 Arquitetura de aplicação: iniciamos com um monólito modular bem estruturado (16 módulos desacoplados), evitando a sobrecarga operacional de dezenas de microsserviços."
              : "6.1 Application architecture: starting with a clean modular monolith (16 decoupled modules), avoiding the operational overhead of dozens of microservices."}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-secondary/60 font-mono text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">{isPt ? "Camada" : "Layer"}</th>
                  <th className="px-4 py-3">
                    {isPt ? "Tecnologia recomendada" : "Recommended technology"}
                  </th>
                  <th className="hidden px-4 py-3 md:table-cell">
                    {isPt ? "Papel na arquitetura" : "Architectural role"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TECH_STACK_6_0.map((row) => (
                  <tr key={row.layerPt} className="hover:bg-secondary/30">
                    <td className="px-4 py-2.5 font-medium">
                      {isPt ? row.layerPt : row.layerEn}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-primary">
                      {row.tech}
                    </td>
                    <td className="hidden px-4 py-2.5 text-xs text-muted-foreground md:table-cell">
                      {isPt ? row.detailPt : row.detailEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 font-display text-2xl font-bold">
              {isPt
                ? "Referência Arquitetural do Monólito Modular (NEXVOLT/)"
                : "Modular Monolith Architectural Reference (NEXVOLT/)"}
            </h3>
            <MonolithTreeExplorer />
          </div>

          {/* 6.2 BANCO DE DADOS */}
          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <span className="font-mono text-xs uppercase text-primary">
              {isPt
                ? "6.2 BANCO DE DADOS POSTGRESQL (12 GRUPOS + RLS)"
                : "6.2 POSTGRESQL DATABASE (12 GROUPS + RLS)"}
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold">
              {isPt
                ? "Modelagem para usuários individuais e empresas com isolamento rigoroso"
                : "Schema designed for individuals and enterprises with strict tenant isolation"}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {DATABASE_GROUPS_6_2.map((g) => (
                <div
                  key={g.groupPt}
                  className="rounded border border-border/70 bg-background/50 p-3"
                >
                  <span className="font-display text-xs font-bold text-primary">
                    {isPt ? g.groupPt : g.groupEn}
                  </span>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{g.tables}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SISTEMA SAAS E MONETIZAÇÃO (PLANS + MATRIX) */}
      <section id="plans" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt ? "07 · SISTEMA SAAS E MONETIZAÇÃO" : "07 · SAAS SYSTEM & MONETIZATION"}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold">{t.plansTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {t.plans.map(([name, price, feats], i) => (
              <div
                key={name}
                className={`rounded-lg border p-6 ${
                  i === 2 ? "border-primary shadow-glow" : "border-border"
                } bg-card`}
              >
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-3 font-display text-3xl font-bold">
                  {i === 3 && (
                    <span className="mr-1 text-sm font-normal text-muted-foreground">
                      {t.from}
                    </span>
                  )}
                  {price}
                  <span className="text-sm font-normal text-muted-foreground">{t.perMonth}</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {feats.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Matriz comparativa 7.0 */}
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-secondary/60 font-mono text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">{isPt ? "Recurso" : "Feature"}</th>
                  <th className="px-4 py-3">Free</th>
                  <th className="px-4 py-3">Pro</th>
                  <th className="px-4 py-3 text-primary">Premium</th>
                  <th className="px-4 py-3">{isPt ? "Empresas" : "Enterprise"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
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

      {/* 9, 10, 11 & 12 — SEGURANÇA, PLANEJAMENTO EM 10 ETAPAS E MVP */}
      <section id="roadmap" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* 10. Planejamento de desenvolvimento em 10 etapas */}
            <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                {isPt
                  ? "10 · PLANEJAMENTO EM 10 ETAPAS NO GOOGLE ANTIGRAVITY"
                  : "10 · 10-STAGE GOOGLE ANTIGRAVITY DEVELOPMENT PLAN"}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold">
                {isPt
                  ? "Entregas incrementais validadas etapa por etapa"
                  : "Incremental deliveries validated stage by stage"}
              </h2>
              <div className="mt-4 divide-y divide-border text-sm">
                {ANTIGRAVITY_ROADMAP_10.map((r) => (
                  <div
                    key={r.step}
                    className="flex items-center justify-between py-2.5"
                  >
                    <div>
                      <span className="mr-2.5 font-mono text-xs font-bold text-primary">
                        {r.step}
                      </span>
                      <span className="font-medium">
                        {isPt ? r.devPt : r.devEn}
                      </span>
                    </div>
                    <span className="rounded bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {isPt ? r.outPt : r.outEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 12. Escopo do MVP + 9. Segurança */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-lg border border-primary/40 bg-primary/5 p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {isPt ? "12 · PRIMEIRA VERSÃO COMERCIAL (MVP)" : "12 · FIRST COMMERCIAL VERSION (MVP)"}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold">
                  {isPt ? "12 Entregas Essenciais de Lançamento" : "12 Core Launch Deliverables"}
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2">
                  {(isPt ? MVP_SCOPE_12.pt : MVP_SCOPE_12.en).map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {isPt
                    ? "09 · SEGURANÇA, LGPD & ISENÇÃO DE RESPONSABILIDADE TÉCNICA"
                    : "09 · SECURITY, LGPD & TECHNICAL LIABILITY DISCLAIMER"}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {isPt ? SECURITY_CONTROLS_9.disclaimerPt : SECURITY_CONTROLS_9.disclaimerEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © NexVolt ({t.brand.sub}) · {t.footer}
      </footer>
    </div>
  );
}

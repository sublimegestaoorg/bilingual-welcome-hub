import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import {
  DATABASE_GROUPS_6_2,
  DATABASE_ESSENTIAL_RULES_6_2,
  SECURITY_CONTROLS_9,
} from "@/lib/ai-architecture-data";
import {
  Users,
  Database,
  Cpu,
  TrendingUp,
  Factory,
  FileCheck,
  Plus,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Administrativo — Operação, Conteúdo, IA, Comercial e Banco | NexVolt" },
      {
        name: "description",
        content:
          "Dashboard administrativo (10 indicadores), Gestão de Conteúdo, Gestão da IA, Gestão Comercial, Schema PostgreSQL e Segurança/LGPD.",
      },
      { property: "og:title", content: "Painel Administrativo Completo — NexVolt" },
      {
        property: "og:description",
        content:
          "Controle integral da operação: usuários, catálogo técnico, documentos RAG, IA, assinaturas e conformidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminEnvironment,
});

interface ManufacturerEntry {
  name: string;
  products: number;
  manuals: number;
  status: "Indexed" | "Review";
}

const INITIAL_MANUFACTURERS: ManufacturerEntry[] = [
  { name: "WEG", products: 420, manuals: 610, status: "Indexed" },
  { name: "Siemens", products: 380, manuals: 540, status: "Indexed" },
  { name: "Schneider Electric", products: 310, manuals: 455, status: "Indexed" },
  { name: "ABB", products: 245, manuals: 330, status: "Indexed" },
  { name: "Rockwell Automation / Allen-Bradley", products: 190, manuals: 270, status: "Review" },
];

const ADMIN_TEN_KPIS = [
  { labelPt: "01. Total de usuários", labelEn: "01. Total users", value: "12.450", subPt: "Base histórica", subEn: "All-time registered" },
  { labelPt: "02. Usuários ativos (MAU)", labelEn: "02. Active users (MAU)", value: "4.820", subPt: "+14% em 30 dias", subEn: "+14% in 30 days" },
  { labelPt: "03. Novos cadastros", labelEn: "03. New sign-ups", value: "640/mês", subPt: "Conversão paga: 18,4%", subEn: "Paid conversion: 18.4%" },
  { labelPt: "04. Assinantes por plano", labelEn: "04. Subscribers by plan", value: "1.700 pagos", subPt: "1.040 Pro · 485 Prem · 175 Emp", subEn: "1,040 Pro · 485 Prem · 175 Ent" },
  { labelPt: "05. Receita recorrente (MRR)", labelEn: "05. Monthly recurring revenue", value: "R$ 128,4k", subPt: "Ticket médio R$ 75,50", subEn: "ARPU R$ 75.50" },
  { labelPt: "06. Cancelamentos (Churn)", labelEn: "06. Cancellations (Churn)", value: "1,8%", subPt: "Abaixo da meta (< 3%)", subEn: "Below threshold (< 3%)" },
  { labelPt: "07. Consumo de IA", labelEn: "07. AI consumption", value: "84,2k reqs", subPt: "Texto 71% · PDF 21% · Visão 8%", subEn: "Text 71% · PDF 21% · Vision 8%" },
  { labelPt: "08. Documentos cadastrados", labelEn: "08. Indexed documents", value: "2.205 PDFs", subPt: "418.900 páginas pgvector", subEn: "418,900 pgvector pages" },
  { labelPt: "09. Produtos mais pesquisados", labelEn: "09. Most searched products", value: "CFW500 / S7-1200", subPt: "Seguido por ATV320 e SSW07", subEn: "Followed by ATV320 & SSW07" },
  { labelPt: "10. Consultas sem resposta", labelEn: "10. Unanswered AI queries", value: "0,8% (67)", subPt: "Fila prioritária de curadoria", subEn: "Priority curation queue" },
];

const CONTENT_ENTITIES = [
  "Fabricantes",
  "Categorias",
  "Equipamentos",
  "Modelos",
  "Manuais",
  "Erros e soluções",
  "Artigos",
  "Cursos",
  "Diagramas",
  "Revisões técnicas",
];

function AdminEnvironment() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [manufacturers, setManufacturers] = useState<ManufacturerEntry[]>(INITIAL_MANUFACTURERS);
  const [newBrand, setNewBrand] = useState("");
  const [activeEntity, setActiveEntity] = useState(CONTENT_ENTITIES[0]);

  const addManufacturer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrand.trim()) return;
    setManufacturers((prev) => [
      { name: newBrand.trim(), products: 1, manuals: 1, status: "Review" },
      ...prev,
    ]);
    setNewBrand("");
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt
              ? "PAINEL ADMINISTRATIVO & GOVERNANÇA"
              : "ADMINISTRATIVE PANEL & GOVERNANCE"}
          </span>
          <h1 className="mt-1 font-display text-3xl font-bold">
            {isPt
              ? "Controle Integral da Operação: Dashboard, Conteúdo, IA, Comercial e Segurança"
              : "Full Operations Control: Dashboard, Content, AI, Commercial & Security"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPt
              ? "Monitoramento dos 10 indicadores executivos, curadoria técnica, controle de consumo/cotas de IA, faturamento SaaS e estrutura de banco PostgreSQL."
              : "Monitoring of all 10 executive KPIs, technical curation, AI quota governance, SaaS billing, and PostgreSQL schema."}
          </p>
        </div>

        {/* DASHBOARD ADMINISTRATIVO (10 INDICADORES) */}
        <section className="mt-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
            <TrendingUp className="h-4 w-4" />
            {isPt
              ? "INDICADORES EXECUTIVOS DE OPERAÇÃO"
              : "EXECUTIVE OPERATIONAL INDICATORS"}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ADMIN_TEN_KPIS.map((kpi) => (
              <div key={kpi.labelPt} className="rounded-lg border border-border bg-card p-3.5">
                <span className="block font-mono text-[11px] text-muted-foreground">
                  {isPt ? kpi.labelPt : kpi.labelEn}
                </span>
                <p className="mt-1.5 font-display text-xl font-bold text-foreground">
                  {kpi.value}
                </p>
                <p className="mt-0.5 text-[11px] text-primary">
                  {isPt ? kpi.subPt : kpi.subEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8.2 GESTÃO DE CONTEÚDO + 8.3 GESTÃO DA IA + 8.4 GESTÃO COMERCIAL */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* 8.2 Gestão de Conteúdo */}
          <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Factory className="h-4 w-4" />
                  {isPt ? "GESTÃO DE CONTEÚDO TÉCNICO" : "TECHNICAL CONTENT MANAGEMENT"}
                </div>
                <h2 className="mt-1 font-display text-xl font-bold">
                  {isPt ? "Curadoria Técnica e Revisões" : "Technical Curation & Reviews"}
                </h2>
              </div>
              <form onSubmit={addManufacturer} className="flex gap-2">
                <input
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value)}
                  placeholder={isPt ? "Novo fabricante (ex: Danfoss)" : "New brand (e.g. Danfoss)"}
                  className="rounded-md border border-input bg-background px-3 py-1.5 text-xs outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                >
                  <Plus className="h-3.5 w-3.5" />
                  {isPt ? "Cadastrar" : "Add"}
                </button>
              </form>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {CONTENT_ENTITIES.map((ent) => (
                <button
                  key={ent}
                  type="button"
                  onClick={() => setActiveEntity(ent)}
                  className={`rounded px-2.5 py-1 font-mono text-xs transition-colors ${
                    activeEntity === ent
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {ent}
                </button>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-md border border-border">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/60 font-mono text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2.5">{isPt ? "Fabricante" : "Manufacturer"}</th>
                    <th className="px-4 py-2.5">{isPt ? "Produtos" : "Products"}</th>
                    <th className="px-4 py-2.5">{isPt ? "Manuais" : "Manuals"}</th>
                    <th className="px-4 py-2.5">{isPt ? "Revisão Técnica" : "Tech Review"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {manufacturers.map((m) => (
                    <tr key={m.name}>
                      <td className="px-4 py-2.5 font-medium">{m.name}</td>
                      <td className="px-4 py-2.5 font-mono text-xs">{m.products}</td>
                      <td className="px-4 py-2.5 font-mono text-xs">{m.manuals}</td>
                      <td className="px-4 py-2.5 font-mono text-xs">
                        <span
                          className={`rounded-full px-2 py-0.5 ${
                            m.status === "Indexed"
                              ? "bg-primary/15 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {m.status === "Indexed"
                            ? isPt
                              ? "Homologado"
                              : "Verified"
                            : isPt
                              ? "Em Revisão"
                              : "In Review"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gestão da IA & Gestão Comercial */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <Cpu className="h-4 w-4" />
                {isPt ? "GOVERNANÇA DA IA" : "AI GOVERNANCE"}
              </div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Configuração dos modelos" : "Model configuration"}</span>
                  <span className="font-mono text-primary">Multimodal + RAG Strict</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Controle de consumo (custo real)" : "Real-cost token & vision metering"}</span>
                  <span className="font-mono text-primary">{isPt ? "Ativo por plano" : "Per-plan active"}</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Avaliação das respostas (Feedback)" : "Response quality rating"}</span>
                  <span className="font-mono text-foreground">98,6% positivo</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Falhas de processamento OCR/PDF" : "OCR/PDF pipeline errors"}</span>
                  <span className="font-mono text-foreground">0,12% (fila retry)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{isPt ? "Limites por assinatura & anti-abuso" : "Plan quotas & rate limiting"}</span>
                  <span className="font-mono text-primary">Rate-limiter ON</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <CreditCard className="h-4 w-4" />
                {isPt ? "GESTÃO COMERCIAL & ASSINATURAS" : "COMMERCIAL & SUBSCRIPTION MANAGEMENT"}
              </div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Planos ativos" : "Active tiers"}</span>
                  <span className="font-mono text-foreground">Free · Pro · Premium · Empresas</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Cupons promocionais" : "Promotional coupons"}</span>
                  <span className="font-mono text-primary">ENGENHARIA20 · TURMA-SENAI</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span>{isPt ? "Inadimplência (Dunning)" : "Past-due / Dunning"}</span>
                  <span className="font-mono text-foreground">1,4% (retentativa automática)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{isPt ? "Relatórios financeiros (DRE / NFs)" : "Financial reports"}</span>
                  <span className="font-mono text-primary">{isPt ? "Exportação CSV/PDF" : "CSV/PDF Export"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BANCO DE DADOS POSTGRESQL */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Database className="h-4 w-4" />
            {isPt
              ? "ARQUITETURA DE DADOS · POSTGRESQL + SUPABASE RLS + PGVECTOR"
              : "DATA ARCHITECTURE · POSTGRESQL + SUPABASE RLS + PGVECTOR"}
          </div>
          <h2 className="mt-1 font-display text-2xl font-bold">
            {isPt
              ? "12 Grupos de Tabelas para Usuários Individuais e Empresas"
              : "12 Core Table Groups for Individual Users & Enterprises"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPt
              ? "Conteúdo técnico público é compartilhado; históricos, conversas privadas, ativos e dados empresariais possuem isolamento rigoroso via Row Level Security (RLS)."
              : "Public technical content is shared; private history, conversations, plant assets, and enterprise records enforce strict Row Level Security (RLS) isolation."}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DATABASE_GROUPS_6_2.map((g) => (
              <div
                key={g.groupPt}
                className="rounded-md border border-border/80 bg-background/60 p-3"
              >
                <span className="font-display text-xs font-bold text-primary">
                  {isPt ? g.groupPt : g.groupEn}
                </span>
                <p className="mt-1 font-mono text-xs text-foreground">{g.tables}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <h3 className="font-mono text-xs uppercase text-primary">
              {isPt ? "Regras Essenciais do Banco" : "Essential Database Rules"}
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs text-muted-foreground">
              {(isPt ? DATABASE_ESSENTIAL_RULES_6_2.pt : DATABASE_ESSENTIAL_RULES_6_2.en).map(
                (rule) => (
                  <li key={rule} className="flex items-start gap-1.5">
                    <FileCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{rule}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* SEGURANÇA, CONFIABILIDADE E CONFORMIDADE */}
        <section className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <ShieldCheck className="h-4 w-4" />
            {isPt
              ? "SEGURANÇA, CONFIABILIDADE E CONFORMIDADE TÉCNICA"
              : "SECURITY, RELIABILITY & TECHNICAL COMPLIANCE"}
          </div>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs text-muted-foreground">
            {(isPt ? SECURITY_CONTROLS_9.pt : SECURITY_CONTROLS_9.en).map((ctrl) => (
              <li
                key={ctrl}
                className="rounded border border-border/60 bg-background/50 p-2.5 text-foreground"
              >
                • {ctrl}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-primary/40 bg-primary/10 p-4 text-xs text-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>{isPt ? SECURITY_CONTROLS_9.disclaimerPt : SECURITY_CONTROLS_9.disclaimerEn}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

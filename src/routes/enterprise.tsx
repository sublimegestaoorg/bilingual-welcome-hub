import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Building2,
  Users,
  ClipboardCheck,
  Shield,
  Wrench,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Ambiente Empresarial — Equipes, Ativos e Manutenção | NexVolt" },
      {
        name: "description",
        content:
          "Gestão de equipes técnicas, ativos industriais, ordens de manutenção preventiva e corretiva, planos e permissões.",
      },
      { property: "og:title", content: "Ambiente Empresarial — NexVolt" },
      {
        property: "og:description",
        content: "Gestão de equipes, ativos, manutenções, planos e permissões.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EnterpriseEnvironment,
});

const INITIAL_ASSETS = [
  {
    tag: "INV-BOMB-01",
    name: "Inversor WEG CFW500 — Bomba Recalque 01",
    sector: "Utilidades / Casa de Bombas",
    status: "operational",
    nextMaint: "15/12/2026",
  },
  {
    tag: "QGBT-PROD-02",
    name: "Quadro Geral de Baixa Tensão 800A",
    sector: "Linha de Envase 02",
    status: "inspection",
    nextMaint: "12/11/2026",
  },
  {
    tag: "CLP-LINHA-04",
    name: "Painel Automação SIMATIC S7-1200 + IHM KTP700",
    sector: "Paletização Automática",
    status: "operational",
    nextMaint: "20/01/2027",
  },
  {
    tag: "MOT-EXAUST-03",
    name: "Motor Trifásico WEG W22 30 cv 4 Polos",
    sector: "Sistema de Exaustão Central",
    status: "alert",
    nextMaint: "Urgente · Termografia",
  },
];

const WORK_ORDERS = [
  {
    os: "OS-2026-0841",
    typePt: "Preventiva · Termografia e Reaperto",
    typeEn: "Preventive · Thermography & Re-torque",
    asset: "QGBT-PROD-02",
    assigned: "Carlos Mendes (Eletrotécnico Sênior)",
    done: false,
  },
  {
    os: "OS-2026-0842",
    typePt: "Corretiva · Diagnóstico Alarme F0021",
    typeEn: "Corrective · Fault F0021 Diagnosis",
    asset: "INV-BOMB-01",
    assigned: "Mariana Costa (Eng. Automação)",
    done: true,
  },
  {
    os: "OS-2026-0845",
    typePt: "Preditiva · Análise de Vibração e Isolação",
    typeEn: "Predictive · Vibration & Megger Test",
    asset: "MOT-EXAUST-03",
    assigned: "Rafael Rocha (Técnico de Manutenção)",
    done: false,
  },
];

const TEAM_PERMISSIONS = [
  {
    rolePt: "Engenheiro / Gestor da Planta",
    roleEn: "Plant Engineer / Manager",
    members: 3,
    permsPt: "Aprovar OS, editar ativos, gerenciar permissões, relatórios e IA ilimitada",
    permsEn: "Approve work orders, edit assets, manage RBAC, reports & unlimited AI",
  },
  {
    rolePt: "Eletrotécnico / Automação",
    roleEn: "Automation & Electrical Technician",
    members: 12,
    permsPt: "Executar OS, cadastrar leituras, consultar esquemas elétricos e diagnóstico IA",
    permsEn: "Execute work orders, log readings, view schematics & AI diagnostics",
  },
  {
    rolePt: "Operador / Inspetor de Rota",
    roleEn: "Operator / Route Inspector",
    members: 18,
    permsPt: "Abrir solicitações de manutenção, checklists NR-10 e leitura de manuais",
    permsEn: "Open maintenance tickets, safety checklists & manual lookup",
  },
];

function EnterpriseEnvironment() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [orders, setOrders] = useState(WORK_ORDERS);

  const toggleOrder = (osCode: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.os === osCode ? { ...o, done: !o.done } : o)),
    );
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt ? "AMBIENTE 03 · AMBIENTE EMPRESARIAL" : "ENVIRONMENT 03 · ENTERPRISE ENVIRONMENT"}
          </span>
          <h1 className="mt-1 font-display text-3xl font-bold">
            {isPt
              ? "Gestão de Equipes, Ativos, Manutenções, Planos e Permissões"
              : "Team, Asset, Maintenance, Plan & Permission Management"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPt
              ? "Centralize os equipamentos da planta, ordens de serviço preventivas/corretivas e permissões da equipe técnica."
              : "Centralize plant assets, preventive/corrective work orders, and technical team permissions."}
          </p>
        </div>

        {/* Summary KPIs */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "ATIVOS MONITORADOS" : "MONITORED ASSETS"}</span>
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">142</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "97,8% disponibilidade operacional" : "97.8% operational uptime"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "EQUIPE TÉCNICA" : "TECHNICAL TEAM"}</span>
              <Users className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">33</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "3 turnos · NR-10 em dia" : "3 shifts · Safety certified"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "MANUTENÇÕES NO MÊS" : "MONTHLY MAINTENANCE"}</span>
              <ClipboardCheck className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">64</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "82% preventivas / 18% corretivas" : "82% preventive / 18% corrective"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "PLANO CORPORATIVO" : "CORPORATE PLAN"}</span>
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">Enterprise</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Multi-planta + IA dedicada" : "Multi-plant + dedicated AI"}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Industrial Assets */}
          <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
            <h2 className="font-display text-xl font-bold">
              {isPt ? "Ativos e Equipamentos da Planta" : "Plant Assets & Equipment"}
            </h2>
            <div className="mt-4 space-y-3">
              {INITIAL_ASSETS.map((asset) => (
                <div
                  key={asset.tag}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border/70 bg-background/50 p-3.5"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary">
                        {asset.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">· {asset.sector}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium">{asset.name}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 ${
                        asset.status === "operational"
                          ? "bg-primary/15 text-primary"
                          : asset.status === "inspection"
                            ? "bg-secondary text-foreground"
                            : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {asset.nextMaint}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Work Orders */}
          <div className="rounded-lg border border-border bg-card p-6 lg:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
              <Wrench className="h-4 w-4" />
              {isPt ? "ORDENS DE MANUTENÇÃO" : "MAINTENANCE WORK ORDERS"}
            </div>
            <h2 className="mt-1 font-display text-xl font-bold">
              {isPt ? "Agenda de Campo" : "Field Schedule"}
            </h2>
            <div className="mt-4 space-y-3">
              {orders.map((o) => (
                <div
                  key={o.os}
                  className="rounded-md border border-border/70 bg-background/50 p-3.5 text-sm"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-primary">{o.os}</span>
                    <span>{o.asset}</span>
                  </div>
                  <p className="mt-1 font-medium">{isPt ? o.typePt : o.typeEn}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{o.assigned}</p>
                  <button
                    type="button"
                    onClick={() => toggleOrder(o.os)}
                    className={`mt-3 inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-mono text-xs transition-colors ${
                      o.done
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {o.done ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {isPt ? "Concluída" : "Completed"}
                      </>
                    ) : (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        {isPt ? "Marcar como concluída" : "Mark as completed"}
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Permissions & Teams Matrix */}
        <section className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold">
            {isPt ? "Matriz de Equipes e Permissões (RBAC)" : "Teams & Permissions Matrix (RBAC)"}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {TEAM_PERMISSIONS.map((perm) => (
              <div
                key={perm.rolePt}
                className="rounded-md border border-border/70 bg-background/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">
                    {isPt ? perm.rolePt : perm.roleEn}
                  </h3>
                  <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-xs text-primary">
                    {perm.members} {isPt ? "membros" : "members"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {isPt ? perm.permsPt : perm.permsEn}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { MotorControlDiagram } from "@/components/diagrams/MotorControlDiagram";
import {
  BookOpen,
  Search,
  Star,
  History,
  GraduationCap,
  Cpu,
  Wrench,
  FileText,
  AlertTriangle,
  Sliders,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Ambiente do Usuário — Biblioteca, Manuais e Automação | NexVolt" },
      {
        name: "description",
        content:
          "Dashboard do usuário, biblioteca técnica de equipamentos, manuais, comandos elétricos, CLPs, cursos, favoritos e histórico.",
      },
      { property: "og:title", content: "Ambiente do Usuário — NexVolt" },
      {
        property: "og:description",
        content: "Dashboard, biblioteca técnica, manuais, ferramentas, cursos, favoritos e histórico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UserEnvironment,
});

interface EquipmentItem {
  id: string;
  brand: string;
  model: string;
  categoryPt: string;
  categoryEn: string;
  manualPages: number;
  faultCodeSample: string;
  specs: string;
}

const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: "cfw500",
    brand: "WEG",
    model: "CFW500",
    categoryPt: "Inversor de Frequência",
    categoryEn: "Variable Frequency Drive",
    manualPages: 248,
    faultCodeSample: "F0021 (Subtensão no Link CC) · F0070 (Sobrecorrente)",
    specs: "200–240 V / 380–480 V · 0.25 a 75 cv · Vetorial VVW / Sensorless",
  },
  {
    id: "s7-1200",
    brand: "Siemens",
    model: "SIMATIC S7-1200 (CPU 1214C)",
    categoryPt: "CLP / Automação",
    categoryEn: "PLC / Automation",
    manualPages: 912,
    faultCodeSample: "PROFINET IO Fault · Watchdog Cycle Overflow",
    specs: "24 VCC · 14 DI / 10 DO / 2 AI · PROFINET Integrado · TIA Portal",
  },
  {
    id: "atv320",
    brand: "Schneider Electric",
    model: "Altivar Machine ATV320",
    categoryPt: "Inversor de Frequência",
    categoryEn: "Variable Frequency Drive",
    manualPages: 340,
    faultCodeSample: "OCF (Overcurrent) · ObF (Overbraking) · OPF2 (Motor Phase Loss)",
    specs: "0.18 a 15 kW · Modbus / CANopen integrado · Segurança STO SIL3",
  },
  {
    id: "ssw07",
    brand: "WEG",
    model: "SSW07",
    categoryPt: "Soft-Starter / Comandos",
    categoryEn: "Soft-Starter / Controls",
    manualPages: 136,
    faultCodeSample: "E03 (Falta de Fase) · E05 (Sobrecarga no Motor)",
    specs: "17 a 412 A · 220 a 575 VCA · Bypass incorporado",
  },
];

const AUTOMATION_SCHEMATICS = [
  {
    code: "CMD-01",
    titlePt: "Partida Estrela-Triângulo com Intertravamento",
    titleEn: "Star-Delta Motor Starter with Interlock",
    norm: "NBR 5410 / IEC 60947-4-1",
    components: "K1 (Linha), K2 (Triângulo), K3 (Estrela), KT1 (Temporizador), FT1 (Relé Térmico)",
  },
  {
    code: "CMD-02",
    titlePt: "Partida Direta com Reversão de Giro e Fim de Curso",
    titleEn: "Reversing Direct-On-Line Starter with Limit Switches",
    norm: "IEC 60204-1 / NR-12",
    components: "K1 (Avanço), K2 (Recuo), Intertravamento elétrico NF + mecânico, S0/S1/S2",
  },
  {
    code: "CLP-01",
    titlePt: "Bloco Funcional PID para Controle de Pressão (4–20 mA)",
    titleEn: "PID Function Block for Pressure Control (4–20 mA)",
    norm: "IEC 61131-3 (Ladder / FBD)",
    components: "Transmissor 4–20 mA (0–10 bar), Entrada Analógica 0–27648, Saída AO 0–10 V para Inversor",
  },
];

function UserEnvironment() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>(["cfw500", "s7-1200"]);

  const filtered = EQUIPMENT_CATALOG.filter((item) =>
    `${item.brand} ${item.model} ${item.categoryPt} ${item.categoryEn} ${item.faultCodeSample}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  const toggleFav = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {isPt ? "PAINEL TÉCNICO · NEXVOLT" : "TECHNICAL DASHBOARD · NEXVOLT"}
            </span>
            <h1 className="mt-1 font-display text-3xl font-bold">
              {isPt
                ? "Painel Técnico, Biblioteca, Automação e Cursos"
                : "Technical Dashboard, Library, Automation & Courses"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {isPt
                ? "Consulte manuais, equipamentos, códigos de falha, comandos elétricos, favoritos e histórico."
                : "Browse manuals, equipment, fault codes, electrical controls, favorites, and history."}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow"
            >
              <Cpu className="h-4 w-4" />
              {isPt ? "Diagnóstico com IA" : "AI Diagnostics"}
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <Wrench className="h-4 w-4" />
              {isPt ? "Calculadoras" : "Calculators"}
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "EQUIPAMENTOS & MANUAIS" : "EQUIPMENT & MANUALS"}</span>
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">1.480+</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Datasheets, manuais e esquemas" : "Datasheets, manuals & schematics"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "CÓDIGOS DE FALHA" : "FAULT CODES"}</span>
              <AlertTriangle className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">6.200+</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Causas, testes e procedimentos" : "Causes, tests & procedures"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "FAVORITOS SALVOS" : "SAVED FAVORITES"}</span>
              <Star className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">{favorites.length}</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Acesso rápido em campo" : "Quick field access"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{isPt ? "TRILHAS E CURSOS" : "LEARNING TRACKS"}</span>
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold">18</p>
            <p className="text-xs text-muted-foreground">
              {isPt ? "Comandos, CLP, NR-10 e Solar" : "Controls, PLC, Safety & Solar"}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <MotorControlDiagram />
        </div>

        {/* Technical Library Search */}
        <section className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold">
                {isPt ? "Biblioteca Técnica — Manuais e Equipamentos" : "Technical Library — Manuals & Equipment"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isPt
                  ? "Pesquise por fabricante, modelo ou código de falha."
                  : "Search by manufacturer, model, or fault code."}
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isPt ? "Buscar WEG, S7-1200, F0021..." : "Search WEG, S7-1200, F0021..."}
                className="w-full rounded-md border border-input bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {filtered.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-lg border border-border bg-card p-5"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-xs text-primary">
                          {item.brand}
                        </span>
                        <span className="ml-2 font-mono text-xs text-muted-foreground">
                          {isPt ? item.categoryPt : item.categoryEn}
                        </span>
                        <h3 className="mt-1.5 font-display text-lg font-bold">{item.model}</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleFav(item.id)}
                        aria-label="Favorite"
                        className={`rounded-md border p-1.5 transition-colors ${
                          isFav
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Star className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">{item.specs}</p>
                    <div className="mt-3 rounded border border-border/70 bg-background/60 p-2.5 font-mono text-xs">
                      <span className="text-primary">{isPt ? "Falhas frequentes:" : "Common faults:"}</span>{" "}
                      {item.faultCodeSample}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      {item.manualPages} {isPt ? "páginas indexadas" : "indexed pages"}
                    </span>
                    <Link
                      to="/ai"
                      className="font-mono text-primary hover:underline"
                    >
                      {isPt ? "Diagnosticar na IA →" : "Diagnose with AI →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Automation, PLCs and Controls + History & Courses */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
              <Sliders className="h-4 w-4" />
              {isPt ? "AUTOMAÇÃO · CLPS E COMANDOS ELÉTRICOS" : "AUTOMATION · PLCS & ELECTRICAL CONTROLS"}
            </div>
            <h3 className="mt-2 font-display text-xl font-bold">
              {isPt ? "Diagramas e Blocos Padrão" : "Standard Schematics & Function Blocks"}
            </h3>
            <div className="mt-4 space-y-3">
              {AUTOMATION_SCHEMATICS.map((sch) => (
                <div
                  key={sch.code}
                  className="rounded-md border border-border/70 bg-background/50 p-3.5"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-primary">{sch.code}</span>
                    <span className="text-muted-foreground">{sch.norm}</span>
                  </div>
                  <p className="mt-1 font-medium">
                    {isPt ? sch.titlePt : sch.titleEn}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{sch.components}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <History className="h-4 w-4" />
                {isPt ? "HISTÓRICO RECENTE" : "RECENT HISTORY"}
              </div>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span>Manual WEG CFW500 — Falha F0021</span>
                  <span className="font-mono text-xs text-muted-foreground">p. 142</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/50 pb-2">
                  <span>Dimensionamento Queda de Tensão 380V</span>
                  <span className="font-mono text-xs text-muted-foreground">NBR 5410</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Esquema Partida Estrela-Triângulo 15 cv</span>
                  <span className="font-mono text-xs text-muted-foreground">CMD-01</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <GraduationCap className="h-4 w-4" />
                {isPt ? "CURSOS EM ANDAMENTO" : "ACTIVE COURSES"}
              </div>
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <div className="flex justify-between">
                    <span>{isPt ? "Comandos Elétricos Industriais" : "Industrial Electrical Controls"}</span>
                    <span className="font-mono text-xs text-primary">75%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-3/4 bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>{isPt ? "Programação CLP Ladder & PROFINET" : "PLC Ladder & PROFINET"}</span>
                    <span className="font-mono text-xs text-primary">40%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-2/5 bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


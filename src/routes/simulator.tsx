import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { FIVE_SIMULATION_ENGINES_2_6 } from "@/lib/ai-architecture-data";
import {
  Play,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  Wrench,
  FileSpreadsheet,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/simulator")({
  head: () => ({
    meta: [
      { title: "Simulador de Instalações & Projetos Guiados com IA | NexVolt" },
      {
        name: "description",
        content:
          "Laboratório digital para montar instalações elétricas, partidas estrela-triângulo, comandos, CLPs e construir projetos guiados com IA.",
      },
      { property: "og:title", content: "Simulador de Instalações & Projetos com IA — NexVolt" },
      {
        property: "og:description",
        content:
          "Monte circuitos, selecione componentes, valide conexões com IA e gere listas de materiais e memória de cálculo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SimulatorPage,
});

const SIMULATOR_SUBAREAS = [
  { id: "controls", areaPt: "Comandos elétricos", areaEn: "Electrical controls", descPt: "Montar partidas e circuitos de comando", descEn: "Build motor starters and control circuits", phase: "Fase 1 · Ativo" },
  { id: "plc", areaPt: "CLP", areaEn: "PLC", descPt: "Desenvolver e testar programas Ladder", descEn: "Develop and test Ladder programs", phase: "Fase 2 · Ativo" },
  { id: "automation", areaPt: "Automação", areaEn: "Automation", descPt: "Criar lógicas de funcionamento", descEn: "Create operating logic & interlocks", phase: "Fase 2 · Ativo" },
  { id: "industrial", areaPt: "Elétrica industrial", areaEn: "Industrial electrical", descPt: "Dimensionar e organizar circuitos", descEn: "Size and organize power circuits", phase: "Fase 2" },
  { id: "residential", areaPt: "Elétrica residencial", areaEn: "Residential electrical", descPt: "Montar circuitos de iluminação e tomadas", descEn: "Build lighting and outlet circuits", phase: "Fase 3" },
  { id: "electronics", areaPt: "Eletrônica", areaEn: "Electronics", descPt: "Montar circuitos com componentes", descEn: "Assemble component-level circuits", phase: "Fase 3" },
  { id: "solar", areaPt: "Energia solar", areaEn: "Solar energy", descPt: "Simular sistemas fotovoltaicos", descEn: "Simulate PV strings and protection", phase: "Fase 3" },
];

interface BenchComponent {
  id: string;
  tag: string;
  namePt: string;
  nameEn: string;
  spec: string;
  requiredForStarDelta: boolean;
}

const COMPONENT_LIBRARY: BenchComponent[] = [
  { id: "q1", tag: "Q1", namePt: "Disjuntor-Motor MPW40", nameEn: "Motor Circuit Breaker MPW40", spec: "25–32 A · Curva Magnética 13×In", requiredForStarDelta: true },
  { id: "k1", tag: "K1", namePt: "Contator de Linha CWB18", nameEn: "Line Contactor CWB18", spec: "18 A · Bobina 220 VCA · 1NA+1NF", requiredForStarDelta: true },
  { id: "k2", tag: "K2", namePt: "Contator Triângulo CWB18", nameEn: "Delta Contactor CWB18", spec: "18 A · Intertravado com K3", requiredForStarDelta: true },
  { id: "k3", tag: "K3", namePt: "Contator Estrela CWB12", nameEn: "Star Contactor CWB12", spec: "12 A · Fechamento Y na partida", requiredForStarDelta: true },
  { id: "kt1", tag: "KT1", namePt: "Relé Temporizador RTW-ET", nameEn: "Star-Delta Timer Relay RTW-ET", spec: "3–30 s · Pausa de comutação 50 ms", requiredForStarDelta: true },
  { id: "interlock", tag: "INT-K2/K3", namePt: "Intertravamento Cruzado NF (21-22)", nameEn: "Cross NC Interlock (21-22)", spec: "Impede acionamento simultâneo K2 + K3", requiredForStarDelta: true },
];

const GUIDED_PROJECT_STEPS = [
  {
    step: "01",
    titlePt: "Identificação dos requisitos",
    titleEn: "Requirements identification",
    contentPt: "Acionamento de velocidade variável para bomba centrífuga industrial com controle automático de pressão via CLP e operação local/remota na porta do painel.",
    contentEn: "Variable-speed drive system for an industrial centrifugal pump with closed-loop PLC pressure control and local/remote selector on enclosure door.",
  },
  {
    step: "02",
    titlePt: "Coleta das características do motor",
    titleEn: "Motor characteristics collection",
    contentPt: "Motor Trifásico WEG W22 IR3 Premium · 15 cv (11 kW) · 380 V / 60 Hz · 4 Polos (1760 rpm) · In = 22,1 A · FP = 0,84 · IP55.",
    contentEn: "WEG W22 IE3 Three-Phase Motor · 15 HP (11 kW) · 380 V / 60 Hz · 4-Pole (1760 rpm) · In = 22.1 A · PF = 0.84 · IP55.",
  },
  {
    step: "03",
    titlePt: "Seleção dos componentes compatíveis",
    titleEn: "Compatible component selection",
    contentPt: "Disjuntor-motor MPW40-3-U025 (20–25 A) + Inversor WEG CFW500-C24P0T4DB20 (24 A / 380 V) + CLP Siemens S7-1200 CPU 1214C + Transmissor 4–20 mA (0–10 bar).",
    contentEn: "MPW40-3-U025 Motor Breaker (20–25 A) + WEG CFW500-C24P0T4DB20 Drive (24 A / 380 V) + Siemens S7-1200 CPU 1214C + 4–20 mA Pressure Transmitter (0–10 bar).",
  },
  {
    step: "04",
    titlePt: "Consulta de catálogos e fabricantes",
    titleEn: "Catalog & OEM verification",
    contentPt: "Coordenação Tipo 2 confirmada no catálogo WEG Automação (Fusível/Disjuntor + Inversor Frame C) e manual S7-1200 (A5E02486680).",
    contentEn: "Type 2 coordination verified in WEG Automation catalog (Breaker + Frame C VFD) and Siemens S7-1200 System Manual.",
  },
  {
    step: "05",
    titlePt: "Elaboração de diagramas preliminares",
    titleEn: "Preliminary wiring diagrams",
    contentPt: "Folha 01 (Força): L1/L2/L3 → Q1 → Bornes R/S/T CFW500 → U/V/W + Cabo Blindado PE → Motor W22. Folha 02 (Controle): DI1 (Gira/Para), AI1 (Referência 0–10 V / 4–20 mA do CLP), DO1 (Relé Falha).",
    contentEn: "Sheet 01 (Power): L1/L2/L3 → Q1 → CFW500 R/S/T → U/V/W + Shielded PE → Motor. Sheet 02 (Control): DI1 (Run/Stop), AI1 (PLC 0–10 V / 4–20 mA speed ref), DO1 (Fault relay).",
  },
  {
    step: "06",
    titlePt: "Desenvolvimento da lógica de automação",
    titleEn: "Automation logic development",
    contentPt: "Bloco OB1 / Cyclic Interrupt OB30 (100 ms): Leitura IW64 (4–20 mA) → NORM_X / SCALE_X (0,0 a 10,0 bar) → Bloco PID_Compact → Saída QW80 para referência de velocidade do CFW500.",
    contentEn: "OB1 / Cyclic Interrupt OB30 (100 ms): Read IW64 (4–20 mA) → NORM_X / SCALE_X (0.0 to 10.0 bar) → PID_Compact block → Output QW80 speed reference to CFW500.",
  },
  {
    step: "07",
    titlePt: "Lista de materiais (BOM)",
    titleEn: "Bill of Materials (BOM)",
    contentPt: "1x MPW40-3-U025 · 1x CFW500 24A 380V · 1x CPU 1214C DC/DC/DC · 1x Fonte 24VCC 5A · 1x Botoeira Emergência Duplo Canal · Cabo 3x4,0 mm² + PE (EPR 90 °C).",
    contentEn: "1x MPW40-3-U025 · 1x CFW500 24A 380V · 1x CPU 1214C DC/DC/DC · 1x 24VDC 5A PSU · 1x Dual-Channel E-Stop · 3x4.0 mm² + PE EPR 90 °C Cable.",
  },
  {
    step: "08",
    titlePt: "Memória de cálculo",
    titleEn: "Calculation memory",
    contentPt: "Corrente de projeto Ib = 22,1 A · Condutor 4,0 mm² (Iz = 36 A em eletroduto aparente, Método B1 NBR 5410) · Queda de tensão em 35 m = 1,42% (< 4% permitido).",
    contentEn: "Design current Ib = 22.1 A · 4.0 mm² conductor (Iz = 36 A in conduit, Method B1 IEC 60364 / NBR 5410) · Voltage drop at 35 m = 1.42% (< 4% limit).",
  },
  {
    step: "09",
    titlePt: "Documentação técnica e validação profissional",
    titleEn: "Technical documentation & professional sign-off",
    contentPt: "Relatório preliminar gerado com referências normativas NBR 5410 e NR-12, pronto para revisão, ART e aprovação por engenheiro eletricista habilitado.",
    contentEn: "Preliminary dossier generated with IEC 60364 / NBR 5410 references, ready for review and sign-off by a licensed electrical engineer.",
  },
];

function SimulatorPage() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [selectedSubarea, setSelectedSubarea] = useState(SIMULATOR_SUBAREAS[0].id);
  const [placedIds, setPlacedIds] = useState<string[]>(["q1", "k1", "k2", "k3", "kt1", "interlock"]);
  const [simRunning, setSimRunning] = useState(false);

  const toggleComponent = (id: string) => {
    setPlacedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    setSimRunning(false);
  };

  const hasInterlock = placedIds.includes("interlock");
  const hasTimer = placedIds.includes("kt1");
  const hasBreaker = placedIds.includes("q1");
  const hasAllContactors =
    placedIds.includes("k1") && placedIds.includes("k2") && placedIds.includes("k3");

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt
              ? "MÓDULOS DIFERENCIAIS · SIMULADOR DE INSTALAÇÕES & CO-PILOTO DE PROJETOS IA"
              : "CORE DIFFERENTIATORS · INSTALLATION SIMULATOR & AI PROJECT CO-PILOT"}
          </span>
          <h1 className="mt-1 font-display text-3xl font-bold">
            {isPt
              ? "Laboratório Digital de Simulação e Engenharia Assistida por IA"
              : "Digital Simulation Lab & AI-Assisted Engineering Workbench"}
          </h1>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            {isPt
              ? "Monte circuitos, conecte componentes, valide o intertravamento com IA antes da execução física e gere projetos preliminares completos."
              : "Assemble circuits, connect components, validate interlocks with AI prior to physical wiring, and generate complete preliminary projects."}
          </p>
        </div>

        {/* 5 Motores Especializados do Simulador Avançado (Seção 2.6) */}
        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-primary">
                {isPt
                  ? "2.6 ARQUITETURA DE SIMULAÇÃO · 5 MOTORES ESPECIALIZADOS VALIDÁVEIS"
                  : "2.6 SIMULATION ARCHITECTURE · 5 VALIDATED SPECIALIZED ENGINES"}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold">
                {isPt
                  ? "Interface visual compartilhada com motores matemáticos independentes"
                  : "Shared visual workbench with independent mathematical simulation engines"}
              </h2>
            </div>
            <span className="rounded border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {isPt
                ? "Regra: Motor valida cálculos · IA apoia e interpreta"
                : "Rule: Engine validates math · AI assists & interprets"}
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FIVE_SIMULATION_ENGINES_2_6.map((eng) => (
              <div
                key={eng.id}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative h-32 w-full overflow-hidden bg-secondary">
                  <img
                    src={eng.image}
                    alt={isPt ? eng.namePt : eng.nameEn}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  <span className="absolute bottom-2 left-2.5 font-mono text-[10px] text-primary">
                    {eng.pkg}
                  </span>
                </div>
                <div className="p-3.5">
                  <h3 className="font-display text-sm font-bold">
                    {isPt ? eng.namePt : eng.nameEn}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {isPt ? eng.descPt : eng.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7 Subáreas do Simulador */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">
              {isPt ? "7 Subáreas do Simulador Digital" : "7 Digital Simulator Subareas"}
            </h2>
            <span className="font-mono text-xs text-primary">
              {isPt ? "Evolução em Etapas (Comandos → CLP → Elétrica)" : "Phased Rollout (Controls → PLC → Power)"}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SIMULATOR_SUBAREAS.map((sub) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => setSelectedSubarea(sub.id)}
                className={`rounded-lg border p-3.5 text-left transition-all ${
                  selectedSubarea === sub.id
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border bg-card hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-primary">{sub.phase}</span>
                </div>
                <p className="mt-1 font-display text-sm font-bold">
                  {isPt ? sub.areaPt : sub.areaEn}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {isPt ? sub.descPt : sub.descEn}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* BANCADA INTERATIVA: PARTIDA ESTRELA-TRIÂNGULO + ANÁLISE IA */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="font-mono text-xs uppercase text-primary">
                {isPt
                  ? "BANCADA DE SIMULAÇÃO · PARTIDA ESTRELA-TRIÂNGULO (15 CV / 380 V)"
                  : "SIMULATION WORKBENCH · STAR-DELTA MOTOR STARTER (15 HP / 380 V)"}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold">
                {isPt
                  ? "Selecione os componentes na bancada e solicite a verificação da IA"
                  : "Toggle components on the workbench and run AI circuit verification"}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setSimRunning(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <Play className="h-4 w-4" />
              {isPt ? "Simular e Analisar com IA" : "Simulate & Analyze with AI"}
            </button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            {/* Biblioteca de componentes */}
            <div className="space-y-2.5 lg:col-span-6">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                {isPt
                  ? "Clique para adicionar/remover componentes e testar alertas de erro:"
                  : "Click to add/remove components and test AI consistency alerts:"}
              </p>
              {COMPONENT_LIBRARY.map((comp) => {
                const active = placedIds.includes(comp.id);
                return (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => toggleComponent(comp.id)}
                    className={`flex w-full items-center justify-between rounded-md border p-3 text-left transition-colors ${
                      active
                        ? "border-primary/60 bg-primary/10"
                        : "border-border bg-background/40 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-primary">
                        [{comp.tag}]
                      </span>{" "}
                      <span className="text-sm font-medium">
                        {isPt ? comp.namePt : comp.nameEn}
                      </span>
                      <p className="font-mono text-[11px] text-muted-foreground">{comp.spec}</p>
                    </div>
                    <span className="font-mono text-xs">
                      {active ? (isPt ? "CONECTADO" : "CONNECTED") : isPt ? "REMOVIDO" : "REMOVED"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Resultado da Análise IA e Simulação */}
            <div className="rounded-lg border border-border bg-background/70 p-5 lg:col-span-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-primary">
                <Cpu className="h-4 w-4" />
                {isPt
                  ? "Diagnóstico da IA sobre o Circuito Montado"
                  : "AI Circuit & Interlock Verification"}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                {!hasInterlock && (
                  <div className="flex items-start gap-2.5 rounded-md border border-destructive bg-destructive/15 p-3 text-xs">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div>
                      <strong className="text-destructive">
                        {isPt
                          ? "CRÍTICO: Falta de Intertravamento entre K2 (Triângulo) e K3 (Estrela)!"
                          : "CRITICAL: Missing Cross-Interlock between K2 (Delta) and K3 (Star)!"}
                      </strong>
                      <p className="mt-1 text-foreground">
                        {isPt
                          ? "Se K2 e K3 fecharem simultaneamente, ocorrerá curto-circuito trifásico franco nos barramentos. Insira o contato NF (21-22) cruzado."
                          : "If K2 and K3 close simultaneously, a direct three-phase short-circuit will occur. Add cross-wired NC (21-22) auxiliary contacts."}
                      </p>
                    </div>
                  </div>
                )}

                {!hasTimer && (
                  <div className="flex items-start gap-2.5 rounded-md border border-destructive/70 bg-destructive/10 p-3 text-xs">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div>
                      <strong className="text-destructive">
                        {isPt
                          ? "ALERTA: Ausência do Temporizador Estrela-Triângulo (KT1)"
                          : "ALERT: Missing Star-Delta Timer Relay (KT1)"}
                      </strong>
                      <p className="mt-1 text-foreground">
                        {isPt
                          ? "O motor permanecerá em fechamento Estrela (1/3 do conjugado nominal) sem comutar para Triângulo após a aceleração."
                          : "The motor will remain in Star connection (1/3 rated torque) without transitioning to Delta after acceleration."}
                      </p>
                    </div>
                  </div>
                )}

                {!hasBreaker && (
                  <div className="flex items-start gap-2.5 rounded-md border border-destructive/70 bg-destructive/10 p-3 text-xs">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div>
                      <strong className="text-destructive">
                        {isPt
                          ? "ALERTA NBR 5410: Sem proteção contra curto-circuito e sobrecarga (Q1)!"
                          : "IEC 60364 ALERT: Missing short-circuit & overload protection (Q1)!"}
                      </strong>
                    </div>
                  </div>
                )}

                {hasInterlock && hasTimer && hasBreaker && hasAllContactors && (
                  <div className="rounded-md border border-primary/50 bg-primary/10 p-4 text-xs">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      {isPt
                        ? "Circuito Validado pela IA — Pronto para Simulação!"
                        : "Circuit Validated by AI — Ready for Simulation!"}
                    </div>
                    <p className="mt-2 leading-relaxed text-foreground">
                      {isPt
                        ? "1) Partida em Estrela (K1 + K3 fechados): tensão nas bobinas reduzida para V_L/√3 (220 V), corrente de partida reduzida a ~33%. 2) Após temporização KT1 (8 s) + pausa morta de 50 ms: abre K3 e fecha K2 (Triângulo, 380 V nominal)."
                        : "1) Star Start (K1 + K3 closed): winding voltage reduced to V_L/√3 (220 V), starting current reduced to ~33%. 2) After KT1 delay (8 s) + 50 ms dead-time: K3 opens and K2 closes (Delta, 380 V rated)."}
                    </p>
                  </div>
                )}

                {simRunning && (
                  <div className="rounded border border-border bg-card p-3 font-mono text-xs">
                    <span className="text-primary">STATUS DA SIMULAÇÃO:</span>{" "}
                    {hasInterlock && hasTimer && hasBreaker && hasAllContactors
                      ? isPt
                        ? "t=0..8s [ESTRELA: K1+K3 ON, Ip=42A] → Δt=50ms → t>8s [TRIÂNGULO: K1+K2 ON, In=22,1A]"
                        : "t=0..8s [STAR: K1+K3 ON, Ip=42A] → Δt=50ms → t>8s [DELTA: K1+K2 ON, In=22.1A]"
                      : isPt
                        ? "SIMULAÇÃO BLOQUEADA POR INCONSISTÊNCIA DE SEGURANÇA NO ESQUEMA"
                        : "SIMULATION BLOCKED DUE TO SAFETY INCONSISTENCY IN SCHEMATIC"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: CO-PILOTO PARA A IA CONSTRUIR PROJETOS JUNTO COM O USUÁRIO */}
        <section className="mt-12 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {isPt
                  ? "PROJETOS ASSISTIDOS POR IA · ENGENHARIA PASSO A PASSO"
                  : "AI-ASSISTED ENGINEERING PROJECTS · STEP-BY-STEP CO-PILOT"}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold">
                “
                {isPt
                  ? "Quero desenvolver um sistema de acionamento de motor trifásico com inversor, proteção e controle por CLP."
                  : "I want to design a three-phase motor drive system with VFD, protection, and PLC control."}
                ”
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              <FileSpreadsheet className="h-3.5 w-3.5 text-primary" />
              {isPt ? "9 Entregáveis Preliminares" : "9 Preliminary Deliverables"}
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {GUIDED_PROJECT_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border/80 bg-background/60 p-4"
              >
                <span className="font-mono text-xs font-bold text-primary">
                  ETAPA {item.step}
                </span>
                <h3 className="mt-1 font-display text-sm font-bold">
                  {isPt ? item.titlePt : item.titleEn}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {isPt ? item.contentPt : item.contentEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-primary/40 bg-primary/10 p-4 text-xs text-foreground">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              {isPt
                ? "Nota de Responsabilidade Técnica: Este dossiê constitui um estudo e anteprojeto preliminar de apoio à engenharia. Dimensionamentos finais, seletividade de proteção, adequação NR-10/NR-12 e execução em campo exigem validação e Anotação de Responsabilidade Técnica (ART/TRT) por profissional legalmente habilitado."
                : "Engineering Liability Notice: This dossier is a preliminary engineering study. Final cable sizing, protection selectivity, machinery safety compliance, and field commissioning require verification and sign-off by a licensed professional engineer."}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import {
  AI_CAPABILITIES_5_1,
  EIGHT_STEP_PROTOCOL_5_2,
  RAG_PIPELINE_STEPS_5_4,
} from "@/lib/ai-architecture-data";
import {
  Cpu,
  Send,
  CheckCircle2,
  AlertOctagon,
  BookMarked,
  Sparkles,
  ShieldAlert,
  Layers,
  Database,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "Assistente Técnico IA — Arquitetura RAG e Diagnóstico | NexVolt" },
      {
        name: "description",
        content:
          "Sistema de IA especializado com base documental controlada (RAG): chat técnico, leitura de manuais, diagnóstico em 8 etapas, visão computacional, diagramas, comparação, parametrização e aprendizado.",
      },
      { property: "og:title", content: "Assistente Técnico IA — NexVolt" },
      {
        property: "og:description",
        content:
          "O coração da plataforma NexVolt: orquestrador de IA com esteira RAG controlada, busca híbrida e citação de página, versão e data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiEnvironment,
});

interface DiagnosticCase {
  id: string;
  labelPt: string;
  labelEn: string;
  equipment: string;
  code: string;
  summaryPt: string;
  summaryEn: string;
  causesPt: string[];
  causesEn: string[];
  stepsPt: string[];
  stepsEn: string[];
  citation: string;
  versionDate: string;
  documented: boolean;
}

const CASES: DiagnosticCase[] = [
  {
    id: "cfw500-f0070",
    labelPt: "WEG CFW500 — Falha F0070 (Sobrecorrente / Curto na Saída)",
    labelEn: "WEG CFW500 — Fault F0070 (Output Overcurrent / Short-Circuit)",
    equipment: "WEG CFW500 · Firmware V2.8x",
    code: "F0070",
    summaryPt:
      "Sobrecorrente ou curto-circuito nos bornes de saída (U, V, W), no cabo de potência ou no bobinado do motor.",
    summaryEn:
      "Overcurrent or short-circuit at the output terminals (U, V, W), motor power cable, or motor windings.",
    causesPt: [
      "Curto-circuito entre duas fases do motor ou fuga para o terra (PE).",
      "Rampa de aceleração (P0100) ajustada muito curta para a inércia da carga.",
      "Módulo IGBT de potência danificado na saída do inversor.",
      "Travamento mecânico no eixo do motor ou redutor acoplado.",
    ],
    causesEn: [
      "Phase-to-phase short or ground fault (PE) in motor or cable.",
      "Acceleration ramp (P0100) set too short for load inertia.",
      "Damaged output IGBT power module inside the drive.",
      "Mechanical jam on motor shaft or coupled gearbox.",
    ],
    stepsPt: [
      "1) Desconecte os cabos U, V, W do inversor e comande partida a vazio para isolar inversor vs. motor/cabo.",
      "2) Com bloqueio LOTO (NR-10), meça o equilíbrio ôhmico entre bobinas e a isolação com megômetro (500/1000 VCC > 5 MΩ).",
      "3) Verifique e amplie o parâmetro P0100 (Tempo de Aceleração) caso ocorra apenas durante a partida sob carga.",
    ],
    stepsEn: [
      "1) Disconnect U, V, W leads at the drive and command an unloaded start to isolate drive vs. motor/cable.",
      "2) Under LOTO, measure phase winding resistance balance and Megger insulation (500/1000 VDC > 5 MΩ).",
      "3) Check and increase parameter P0100 (Acceleration Time) if fault trips only during loaded ramp-up.",
    ],
    citation: "Manual de Programação WEG CFW500 · Cap. 11 · p. 144",
    versionDate: "Versão V2.8x · Fonte: 04/2025",
    documented: true,
  },
  {
    id: "cfw500-f0021",
    labelPt: "WEG CFW500 — Falha F0021 (Subtensão no Link CC)",
    labelEn: "WEG CFW500 — Fault F0021 (DC Link Undervoltage)",
    equipment: "WEG CFW500 · Firmware V2.8x",
    code: "F0021",
    summaryPt:
      "A tensão do barramento CC caiu abaixo do limite mínimo permitido durante a operação ou habilitação do inversor.",
    summaryEn:
      "The DC bus voltage dropped below the minimum threshold during drive operation or enablement.",
    causesPt: [
      "Queda de fase na alimentação de entrada (R/S/T ou L1/L2/L3).",
      "Tensão de rede abaixo do configurado no parâmetro P0296.",
      "Contator de entrada ou bornes de potência com mau contato/oxidação.",
      "Circuito de pré-carga do barramento CC aberto.",
    ],
    causesEn: [
      "Input phase loss (R/S/T or L1/L2/L3).",
      "Mains voltage lower than the rated setting in parameter P0296.",
      "Input contactor or power terminals loose/oxidized.",
      "DC link pre-charge circuit open.",
    ],
    stepsPt: [
      "1) Meça a tensão CA entre L1-L2, L2-L3 e L1-L3 na entrada do inversor com multímetro True-RMS.",
      "2) Consulte o parâmetro P0004 (Tensão do Barramento CC) no display HMI (nominal em 380 VCA ≈ 537 VCC).",
      "3) Verifique o parâmetro P0296 e reaperte os bornes de potência com o torque especificado no manual.",
    ],
    stepsEn: [
      "1) Measure AC voltage across L1-L2, L2-L3, and L1-L3 at the drive input using a True-RMS multimeter.",
      "2) Read parameter P0004 (DC Link Voltage) on the HMI display (nominal at 380 VAC ≈ 537 VDC).",
      "3) Verify parameter P0296 and re-torque power terminals to the manual specification.",
    ],
    citation: "Manual de Programação WEG CFW500 · Cap. 11 · p. 142",
    versionDate: "Versão V2.8x · Fonte: 04/2025",
    documented: true,
  },
  {
    id: "undocumented-guardrail",
    labelPt: "Prototipo Customizado X99 — Código E999 (Sem Manual na Base)",
    labelEn: "Custom Prototype X99 — Code E999 (No Manual in RAG Base)",
    equipment: "Equipamento Não Homologado / Sem PDF Indexado",
    code: "E999",
    summaryPt:
      "⚠️ LIMITAÇÃO DOCUMENTAL DECLARADA: Não há manual oficial indexado para o modelo 'Protótipo Customizado X99' (Código E999) na base de conhecimento controlada da NexVolt. Por política de segurança técnica, o assistente NÃO inventa procedimentos ou parâmetros não documentados.",
    summaryEn:
      "⚠️ DECLARED DOCUMENTATION LIMITATION: No official manual is indexed for 'Custom Prototype X99' (Code E999) in NexVolt's controlled RAG database. By technical safety policy, the assistant NEVER fabricates undocumented parameters or procedures.",
    causesPt: [
      "Documentação oficial do fabricante ainda não vinculada ao repositório vetorial.",
    ],
    causesEn: [
      "Official manufacturer documentation not yet bound to the vector repository.",
    ],
    stepsPt: [
      "1) Envie o manual PDF ou datasheet oficial para a Esteira RAG (Seção 5.4) ou solicite indexação ao administrador.",
      "2) Enquanto a fonte oficial não estiver disponível, consulte diretamente o fabricante do equipamento.",
    ],
    stepsEn: [
      "1) Upload the official PDF manual or datasheet to the RAG Pipeline (Section 5.4) or request admin indexing.",
      "2) Until the official source is indexed, consult the equipment OEM directly.",
    ],
    citation: "Bloqueio Anti-Alucinação Ativo · Base RAG Controlada",
    versionDate: "Política Seção 5.4 · Verificação Estrita",
    documented: false,
  },
];

function AiEnvironment() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [selectedCapability, setSelectedCapability] = useState(AI_CAPABILITIES_5_1[2]);
  const [userLevel, setUserLevel] = useState<"beginner" | "tech" | "engineer">("tech");
  const [selectedId, setSelectedId] = useState<string>(CASES[0].id);
  const [step8Outcome, setStep8Outcome] = useState<"cleared" | "persists" | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const [customHistory, setCustomHistory] = useState<{ q: string; a: string }[]>([]);

  const activeCase = CASES.find((c) => c.id === selectedId) ?? CASES[0];

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    const question = customPrompt.trim();
    const reply = isPt
      ? `[Orquestrador NexVolt IA · Nível ${
          userLevel === "beginner" ? "Iniciante" : userLevel === "tech" ? "Técnico" : "Engenheiro"
        }] Para diagnosticar "${question}": 1) Informe fabricante, modelo exato e código de alarme no display; 2) Aplicando bloqueio LOTO (NR-10), confira tensão de alimentação e integridade de conexões; 3) Caso o manual do modelo específico não conste na base vetorial, declararei a limitação documental sem inventar parâmetros.`
      : `[NexVolt AI Orchestrator · ${userLevel.toUpperCase()} Level] To diagnose "${question}": 1) Provide the exact manufacturer, model, and alarm code; 2) Under LOTO safety, verify supply voltage and terminal integrity; 3) If the exact manual is not in the controlled RAG index, I will explicitly state that limitation rather than guessing parameters.`;
    setCustomHistory((prev) => [{ q: question, a: reply }, ...prev]);
    setCustomPrompt("");
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {isPt
              ? "NÚCLEO CENTRAL · ASSISTENTE TÉCNICO IA"
              : "CORE ENGINE · AI TECHNICAL ASSISTANT"}
          </span>
          <h1 className="mt-1 font-display text-3xl font-bold">
            {isPt
              ? "Sistema de IA Especializado com Base Documental Controlada (RAG)"
              : "Specialized AI System with Controlled Documentary Knowledge Base (RAG)"}
          </h1>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            {isPt
              ? "Em vez de um chatbot genérico, o Assistente NexVolt opera com orquestração técnica, busca híbrida (textual + vetorial), citação obrigatória de página/versão/data e bloqueio contra alucinações."
              : "Instead of a generic chatbot, the NexVolt Assistant runs on a technical orchestrator, hybrid search (text + vector), mandatory page/version/date citations, and anti-hallucination guardrails."}
          </p>
        </div>

        {/* AS 8 FUNCIONALIDADES DA IA */}
        <section className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-primary">
                {isPt ? "ESPECIALISTAS & RECURSOS" : "SPECIALISTS & CAPABILITIES"}
              </span>
              <h2 className="font-display text-xl font-bold">
                {isPt ? "8 Capacidades Especializadas" : "8 Specialized Capabilities"}
              </h2>
            </div>

            {/* Adaptive Learning User Level Selector */}
            <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {isPt ? "Nível da explicação:" : "Explanation level:"}
              </span>
              {(
                [
                  ["beginner", isPt ? "Iniciante" : "Beginner"],
                  ["tech", isPt ? "Técnico" : "Technician"],
                  ["engineer", isPt ? "Engenheiro" : "Engineer"],
                ] as const
              ).map(([lvl, label]) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setUserLevel(lvl)}
                  className={`rounded px-2 py-0.5 font-mono transition-colors ${
                    userLevel === lvl
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {AI_CAPABILITIES_5_1.map((cap) => {
              const active = cap.id === selectedCapability.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setSelectedCapability(cap)}
                  className={`rounded-lg border p-4 text-left transition-all ${
                    active
                      ? "border-primary bg-primary/10 shadow-glow"
                      : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50"
                  }`}
                >
                  <p className="font-display text-sm font-bold text-foreground">
                    {isPt ? cap.namePt : cap.nameEn}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {isPt ? cap.funcPt : cap.funcEn}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-3 rounded-lg border border-primary/40 bg-card p-4 text-sm">
            <span className="font-mono text-xs uppercase text-primary">
              {isPt ? "Exemplo ativo — " : "Active demo — "}
              {isPt ? selectedCapability.namePt : selectedCapability.nameEn}:
            </span>
            <p className="mt-1 text-foreground">
              {isPt ? selectedCapability.demoPt : selectedCapability.demoEn}
            </p>
          </div>
        </section>

        {/* EXEMPLO DE UTILIZAÇÃO — FLUXO EM 8 ETAPAS */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="font-mono text-xs uppercase text-primary">
                {isPt ? "PROTOCOLO DE DIAGNÓSTICO · ROTEIRO DE 8 ETAPAS" : "DIAGNOSTIC PROTOCOL · 8-STEP WORKFLOW"}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold">
                “{isPt ? EIGHT_STEP_PROTOCOL_5_2.userQuestionPt : EIGHT_STEP_PROTOCOL_5_2.userQuestionEn}”
              </h2>
            </div>
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {isPt ? "Diagnóstico Guiado Interativo" : "Interactive Guided Diagnosis"}
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {EIGHT_STEP_PROTOCOL_5_2.steps.map((s) => (
              <div
                key={s.num}
                className="flex flex-col justify-between rounded-lg border border-border/80 bg-background/60 p-4"
              >
                <div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                    {s.num}
                  </span>
                  <h3 className="mt-2.5 font-display text-sm font-bold">
                    {isPt ? s.titlePt : s.titleEn}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {isPt ? s.detailPt : s.detailEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive continuation of Step 8 */}
          <div className="mt-6 rounded-lg border border-primary/40 bg-primary/5 p-4">
            <p className="font-mono text-xs uppercase text-primary">
              {isPt
                ? "Simular Etapa 8 — Informe o resultado da medição em campo para continuar:"
                : "Simulate Step 8 — Report field verification result to continue:"}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setStep8Outcome("cleared")}
                className={`rounded-md border px-3.5 py-2 text-xs font-medium transition-colors ${
                  step8Outcome === "cleared"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {isPt
                  ? "A) Cabos U/V/W desconectados → Inversor partiu sem falha F0070"
                  : "A) U/V/W leads disconnected → Drive started without F0070"}
              </button>
              <button
                type="button"
                onClick={() => setStep8Outcome("persists")}
                className={`rounded-md border px-3.5 py-2 text-xs font-medium transition-colors ${
                  step8Outcome === "persists"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {isPt
                  ? "B) Cabos U/V/W desconectados → Falha F0070 persiste imediatamente"
                  : "B) U/V/W leads disconnected → Fault F0070 still trips immediately"}
              </button>
            </div>

            {step8Outcome && (
              <div className="mt-3 rounded border border-border bg-card p-3 text-xs leading-relaxed">
                {step8Outcome === "cleared" ? (
                  <p>
                    <strong className="text-primary">
                      {isPt ? "Conclusão da Etapa 8:" : "Step 8 Conclusion:"}
                    </strong>{" "}
                    {isPt
                      ? "O módulo de potência do inversor WEG CFW500 está íntegro. O defeito está no cabo de alimentação do motor ou no bobinado do motor. Realize o ensaio de megômetro (500/1000 VCC) entre U-PE, V-PE, W-PE e entre fases (Manual CFW500, p. 144)."
                      : "The WEG CFW500 power stage is healthy. The fault lies in the motor feeder cable or motor stator windings. Perform a Megger insulation test (500/1000 VDC) across U-PE, V-PE, W-PE and phase-to-phase (CFW500 Manual, p. 144)."}
                  </p>
                ) : (
                  <p>
                    <strong className="text-primary">
                      {isPt ? "Conclusão da Etapa 8:" : "Step 8 Conclusion:"}
                    </strong>{" "}
                    {isPt
                      ? "Como a falha F0070 ocorre mesmo com os bornes U/V/W abertos, há falha interna no estágio IGBT ou nos sensores Hall de corrente do inversor. Encaminhe o módulo CFW500 para assistência técnica autorizada WEG (Manual CFW500, p. 144)."
                      : "Since fault F0070 trips even with U/V/W open, there is an internal IGBT bridge short or Hall current sensor fault inside the drive. Send the CFW500 unit to an authorized WEG service center (CFW500 Manual, p. 144)."}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* BANCADA INTERATIVA DE CONSULTA + TESTE ANTI-ALUCINAÇÃO */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {isPt ? "Testar Casos & Limitação Documental" : "Test Cases & Guardrails"}
            </h2>
            <div className="space-y-2.5">
              {CASES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedId(c.id)}
                  className={`w-full rounded-lg border p-3.5 text-left transition-all ${
                    selectedId === c.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className={c.documented ? "text-primary" : "text-destructive"}>
                      {c.code}
                    </span>
                    <span className="text-muted-foreground">{c.equipment}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium">{isPt ? c.labelPt : c.labelEn}</p>
                </button>
              ))}
            </div>

            <form onSubmit={handleAsk} className="rounded-lg border border-border bg-card p-4">
              <label className="block font-mono text-xs uppercase text-primary">
                <Sparkles className="mr-1 inline h-3.5 w-3.5" />
                {isPt ? "Consultar Orquestrador IA" : "Query AI Orchestrator"}
              </label>
              <textarea
                rows={3}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder={
                  isPt
                    ? "Ex.: Meu inversor WEG está apresentando falha de sobrecorrente. Como resolver?"
                    : "E.g., My WEG inverter is showing an overcurrent fault. How do I solve it?"
                }
                className="mt-2 w-full rounded-md border border-input bg-background p-2.5 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <Send className="h-3.5 w-3.5" />
                {isPt ? "Enviar ao Orquestrador" : "Send to Orchestrator"}
              </button>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
                <div>
                  <span
                    className={`rounded px-2.5 py-1 font-mono text-xs font-bold ${
                      activeCase.documented
                        ? "bg-primary/15 text-primary"
                        : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {activeCase.code}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold">
                    {isPt ? activeCase.labelPt : activeCase.labelEn}
                  </h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 text-foreground">
                    <BookMarked className="h-3.5 w-3.5 text-primary" />
                    {activeCase.citation}
                  </span>
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {activeCase.versionDate}
                  </span>
                </div>
              </div>

              <div
                className={`mt-4 rounded-md border p-3.5 text-sm leading-relaxed ${
                  activeCase.documented
                    ? "border-border/60 bg-background/40 text-muted-foreground"
                    : "border-destructive/50 bg-destructive/10 text-foreground"
                }`}
              >
                {!activeCase.documented && (
                  <ShieldAlert className="mr-2 inline h-4 w-4 text-destructive" />
                )}
                {isPt ? activeCase.summaryPt : activeCase.summaryEn}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    <AlertOctagon className="h-4 w-4" />
                    {isPt ? "Causas Documentadas" : "Documented Causes"}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {(isPt ? activeCase.causesPt : activeCase.causesEn).map((cause) => (
                      <li
                        key={cause}
                        className="rounded border border-border/60 bg-background/50 p-2.5 text-muted-foreground"
                      >
                        • {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    {isPt ? "Verificações em Ordem de Diagnóstico" : "Ordered Diagnostic Checks"}
                  </h3>
                  <ol className="mt-3 space-y-2 text-sm">
                    {(isPt ? activeCase.stepsPt : activeCase.stepsEn).map((step) => (
                      <li
                        key={step}
                        className="rounded border border-border/60 bg-background/50 p-2.5"
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {customHistory.length > 0 && (
              <div className="space-y-3">
                {customHistory.map((item, i) => (
                  <div key={i} className="rounded-lg border border-primary/40 bg-card p-4 text-sm">
                    <p className="font-mono text-xs text-primary">Q: {item.q}</p>
                    <p className="mt-2 text-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ARQUITETURA DA INTELIGÊNCIA ARTIFICIAL */}
        <section className="mt-12 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Layers className="h-4 w-4" />
            {isPt ? "ARQUITETURA DA INTELIGÊNCIA ARTIFICIAL" : "ARTIFICIAL INTELLIGENCE ARCHITECTURE"}
          </div>
          <h2 className="mt-1 font-display text-2xl font-bold">
            {isPt
              ? "Fluxo do Orquestrador de IA até a Resposta Técnica Fundamentada"
              : "AI Orchestrator Flow to Grounded Technical Response"}
          </h2>

          <div className="mt-6 grid items-center gap-4 lg:grid-cols-11">
            {/* Entrada do Usuário */}
            <div className="rounded-lg border border-border bg-background p-4 text-center lg:col-span-2">
              <span className="font-mono text-[11px] uppercase text-primary">
                {isPt ? "1. Entrada" : "1. Input"}
              </span>
              <h3 className="mt-1 font-display font-bold">
                {isPt ? "Usuário" : "User"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {isPt ? "Texto, foto, PDF ou diagrama" : "Text, photo, PDF, or diagram"}
              </p>
            </div>

            <div className="hidden justify-center lg:flex lg:col-span-1">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>

            {/* Orquestrador */}
            <div className="rounded-lg border border-primary bg-primary/10 p-4 text-center shadow-glow lg:col-span-2">
              <Cpu className="mx-auto h-5 w-5 text-primary" />
              <h3 className="mt-1 font-display font-bold">
                {isPt ? "Orquestrador de IA" : "AI Orchestrator"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {isPt
                  ? "Identificação da intenção e do tipo de consulta"
                  : "Intent & query classification"}
              </p>
            </div>

            <div className="hidden justify-center lg:flex lg:col-span-1">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>

            {/* 4 Motores Especializados */}
            <div className="grid grid-cols-2 gap-2.5 lg:col-span-3">
              <div className="rounded border border-border bg-background p-3">
                <p className="font-mono text-xs font-bold text-primary">
                  {isPt ? "Documentos" : "Documents"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {isPt ? "Manuais e normas" : "Manuals & standards"}
                </p>
              </div>
              <div className="rounded border border-border bg-background p-3">
                <p className="font-mono text-xs font-bold text-primary">
                  {isPt ? "Base técnica" : "Tech Database"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {isPt ? "Produtos e falhas" : "Products & faults"}
                </p>
              </div>
              <div className="rounded border border-border bg-background p-3">
                <p className="font-mono text-xs font-bold text-primary">
                  {isPt ? "Visão" : "Vision"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {isPt ? "Fotos e diagramas" : "Photos & diagrams"}
                </p>
              </div>
              <div className="rounded border border-border bg-background p-3">
                <p className="font-mono text-xs font-bold text-primary">
                  {isPt ? "Ferramentas" : "Tools"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {isPt ? "Cálculos e regras" : "Calculations & rules"}
                </p>
              </div>
            </div>

            {/* Saída Fundamentada */}
            <div className="rounded-lg border border-primary/50 bg-primary/5 p-4 text-center lg:col-span-2">
              <span className="font-mono text-[11px] uppercase text-primary">
                {isPt ? "Saída Verificada" : "Verified Output"}
              </span>
              <h3 className="mt-1 font-display text-sm font-bold">
                {isPt ? "Resposta técnica fundamentada" : "Grounded technical response"}
              </h3>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {isPt
                  ? "Explicação, referências, alertas e próximos passos"
                  : "Explanation, citations, safety alerts & next steps"}
              </p>
            </div>
          </div>
        </section>

        {/* BANCO DE CONHECIMENTO RAG — ESTEIRA DE 10 ETAPAS */}
        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <Database className="h-4 w-4" />
            {isPt
              ? "BANCO DE CONHECIMENTO RAG (BUSCA TEXTUAL + VETORIAL PGVECTOR)"
              : "RAG KNOWLEDGE BASE (FULL-TEXT + PGVECTOR SEARCH)"}
          </div>
          <h2 className="mt-1 font-display text-2xl font-bold">
            {isPt
              ? "Esteira de Processamento Documental em 10 Etapas"
              : "10-Stage Documentary RAG Processing Pipeline"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPt
              ? "Combina pesquisa textual e vetorial priorizando fabricante, modelo, versão e código exato. Guarda referência documental, página, versão e data da fonte."
              : "Combines full-text and vector search prioritizing manufacturer, model, version, and exact fault code, preserving page, version, and source date."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {RAG_PIPELINE_STEPS_5_4.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border/80 bg-background/60 p-3.5"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-primary">ETAPA {item.step}</span>
                  <span className="text-[10px] text-muted-foreground">{item.tech}</span>
                </div>
                <p className="mt-2 text-xs font-semibold">
                  {isPt ? item.pt : item.en}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

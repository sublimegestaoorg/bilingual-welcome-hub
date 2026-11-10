import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { FolderTree, Folder, ArrowRight } from "lucide-react";

export interface DirectoryGroup {
  id: string;
  folder: string;
  descPt: string;
  descEn: string;
  children: {
    name: string;
    rolePt: string;
    roleEn: string;
    route?: "/dashboard" | "/ai" | "/enterprise" | "/admin" | "/tools" | "/modules";
  }[];
}

export const NEXVOLT_DIRECTORY_GROUPS: DirectoryGroup[] = [
  {
    id: "apps-web",
    folder: "apps/web/",
    descPt: "Rotas e módulos visuais da aplicação web principal",
    descEn: "Routes and visual modules of the main web application",
    children: [
      { name: "dashboard/", rolePt: "Resumo de atividades, favoritos e acesso rápido", roleEn: "Activity summary, favorites & quick access", route: "/dashboard" },
      { name: "biblioteca/", rolePt: "Catálogo técnico unificado por categoria", roleEn: "Unified technical catalog by category", route: "/dashboard" },
      { name: "equipamentos/", rolePt: "Fabricantes, modelos, SKUs e compatíveis", roleEn: "Manufacturers, models, SKUs & compatibles", route: "/dashboard" },
      { name: "manuais/", rolePt: "PDFs, datasheets, tabelas e versões oficiais", roleEn: "PDFs, datasheets, tables & official revisions", route: "/dashboard" },
      { name: "diagnosticos/", rolePt: "Códigos de falha, causas e procedimentos", roleEn: "Fault codes, root causes & test procedures", route: "/ai" },
      { name: "comandos/", rolePt: "Diagramas de força e comando, partidas e intertravamentos", roleEn: "Power & control schematics, starters & interlocks", route: "/modules" },
      { name: "automacao/", rolePt: "Ladder, blocos funcionais, CLP, IHM e redes", roleEn: "Ladder, function blocks, PLC, HMI & networks", route: "/modules" },
      { name: "ferramentas/", rolePt: "Calculadoras elétricas, Lei de Ohm e dimensionamento", roleEn: "Electrical calculators, Ohm's Law & sizing", route: "/tools" },
      { name: "projetos/", rolePt: "Projetos comentados, esquemas e listas de materiais", roleEn: "Annotated projects, schematics & BOMs", route: "/modules" },
      { name: "cursos/", rolePt: "Trilhas de aprendizagem, avaliações e certificados", roleEn: "Learning tracks, assessments & certificates", route: "/dashboard" },
      { name: "comunidade/", rolePt: "Perguntas, respostas verificadas e reputação", roleEn: "Questions, verified answers & reputation", route: "/modules" },
      { name: "assistente-ia/", rolePt: "Orquestrador técnico, diagnóstico em 8 etapas e visão", roleEn: "Technical orchestrator, 8-step diagnostics & vision", route: "/ai" },
      { name: "assinatura/", rolePt: "Planos Free, Pro, Premium e Empresas", roleEn: "Free, Pro, Premium & Enterprise plans", route: "/" },
      { name: "admin/", rolePt: "Curadoria, governança de IA, usuários e KPIs", roleEn: "Curation, AI governance, users & KPIs", route: "/admin" },
    ],
  },
  {
    id: "components",
    folder: "components/",
    descPt: "Biblioteca de componentes reutilizáveis e visuais técnicos",
    descEn: "Reusable UI and technical visual component library",
    children: [
      { name: "ui/", rolePt: "Primitivos shadcn/ui + Tailwind CSS de alto contraste", roleEn: "High-contrast shadcn/ui + Tailwind CSS primitives" },
      { name: "navigation/", rolePt: "Cabeçalho, seletores de ambiente e barras de atalho", roleEn: "Header, environment switchers & shortcut bars" },
      { name: "diagrams/", rolePt: "Renderizadores de diagramas de comando, unifilares e blocos", roleEn: "Control schematic, single-line & block diagram renderers" },
      { name: "technical/", rolePt: "Badges de citação de manual, alertas NR-10 e tabelas de parâmetros", roleEn: "Manual citation badges, safety alerts & parameter tables" },
    ],
  },
  {
    id: "modules",
    folder: "modules/",
    descPt: "Domínios de negócio desacoplados do monólito modular",
    descEn: "Decoupled business domains of the modular monolith",
    children: [
      { name: "users/", rolePt: "Perfis técnicos, nível de experiência e favoritos", roleEn: "Technical profiles, expertise level & bookmarks", route: "/dashboard" },
      { name: "organizations/", rolePt: "Empresas, plantas industriais, equipes e RBAC", roleEn: "Companies, industrial plants, teams & RBAC", route: "/enterprise" },
      { name: "products/", rolePt: "Cadastro de fabricantes, linhas, modelos e compatibilidade", roleEn: "Manufacturers, series, models & compatibility", route: "/admin" },
      { name: "documents/", rolePt: "Versionamento de manuais PDF, datasheets e normas", roleEn: "PDF manual versioning, datasheets & standards", route: "/dashboard" },
      { name: "troubleshooting/", rolePt: "Árvores de falhas, sintomas, causas e testes verificados", roleEn: "Fault trees, symptoms, causes & verified tests", route: "/ai" },
      { name: "ai/", rolePt: "Regras de prompt, sessões de diagnóstico e citação obrigatória", roleEn: "Prompt governance, diagnostic sessions & citations", route: "/ai" },
      { name: "maintenance/", rolePt: "Ativos, ordens preventivas/corretivas e checklists LOTO", roleEn: "Assets, preventive/corrective orders & LOTO checklists", route: "/enterprise" },
      { name: "billing/", rolePt: "Controle de cotas de IA, planos e faturamento recorrente", roleEn: "AI quota tracking, plans & recurring billing", route: "/admin" },
      { name: "notifications/", rolePt: "Alertas de manutenção, boletins técnicos e revisões", roleEn: "Maintenance alerts, technical bulletins & revisions", route: "/dashboard" },
    ],
  },
  {
    id: "services",
    folder: "services/",
    descPt: "Integrações externas, motores de busca e processamento assíncrono",
    descEn: "External integrations, search engines, and async processing",
    children: [
      { name: "ai/", rolePt: "Orquestrador multimodal (texto, PDF, visão e diagramas)", roleEn: "Multimodal orchestrator (text, PDF, vision & diagrams)", route: "/ai" },
      { name: "search/", rolePt: "Busca híbrida combinando texto exato + pgvector", roleEn: "Hybrid search combining exact text + pgvector", route: "/dashboard" },
      { name: "document-processing/", rolePt: "Esteira RAG de 10 etapas: OCR, tabelas, chunks e embeddings", roleEn: "10-stage RAG pipeline: OCR, tables, chunks & embeddings", route: "/ai" },
      { name: "payments/", rolePt: "Webhooks e checkout Asaas / Mercado Pago (PIX, boleto, cartão)", roleEn: "Asaas / Mercado Pago webhooks & checkout", route: "/admin" },
    ],
  },
  {
    id: "database",
    folder: "database/",
    descPt: "Camada de persistência PostgreSQL + Supabase + pgvector",
    descEn: "PostgreSQL + Supabase + pgvector persistence layer",
    children: [
      { name: "migrations/", rolePt: "Evolução versionada do schema relacional e índices vetoriais", roleEn: "Versioned relational schema & vector index migrations" },
      { name: "policies/", rolePt: "Políticas Row Level Security (RLS) por usuário e organização", roleEn: "Row Level Security (RLS) policies per user & tenant" },
      { name: "seeds/", rolePt: "Carga inicial de fabricantes, códigos de falha e grandezas", roleEn: "Initial seed of manufacturers, fault codes & units" },
    ],
  },
];

export const RAW_TREE_TEXT = `NEXVOLT/
│
├── apps/
│   └── web/
│       ├── dashboard/
│       ├── biblioteca/
│       ├── equipamentos/
│       ├── manuais/
│       ├── diagnosticos/
│       ├── comandos/
│       ├── automacao/
│       ├── ferramentas/
│       ├── projetos/
│       ├── cursos/
│       ├── comunidade/
│       ├── assistente-ia/
│       ├── assinatura/
│       └── admin/
│
├── components/
│   ├── ui/
│   ├── navigation/
│   ├── diagrams/
│   └── technical/
│
├── modules/
│   ├── users/
│   ├── organizations/
│   ├── products/
│   ├── documents/
│   ├── troubleshooting/
│   ├── ai/
│   ├── maintenance/
│   ├── billing/
│   └── notifications/
│
├── services/
│   ├── ai/
│   ├── search/
│   ├── document-processing/
│   └── payments/
│
└── database/
    ├── migrations/
    ├── policies/
    └── seeds/`;

export function MonolithTreeExplorer() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  const [activeGroup, setActiveGroup] = useState<DirectoryGroup>(NEXVOLT_DIRECTORY_GROUPS[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Left: Raw ASCII Tree + Layer Selector */}
      <div className="rounded-lg border border-border bg-card p-5 lg:col-span-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary">
            <FolderTree className="h-4 w-4" />
            NEXVOLT/ (Monólito Modular)
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            5 {isPt ? "camadas" : "layers"}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {NEXVOLT_DIRECTORY_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGroup(g)}
              className={`rounded px-2.5 py-1 font-mono text-xs transition-colors ${
                activeGroup.id === g.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {g.folder}
            </button>
          ))}
        </div>

        <pre className="mt-4 max-h-96 overflow-auto rounded-md border border-border/70 bg-background/80 p-3.5 font-mono text-xs leading-relaxed text-muted-foreground">
          {RAW_TREE_TEXT}
        </pre>
      </div>

      {/* Right: Interactive Layer Inspector */}
      <div className="rounded-lg border border-border bg-card p-6 lg:col-span-7">
        <div className="border-b border-border pb-4">
          <span className="font-mono text-xs uppercase text-primary">
            {isPt ? "Inspeção de Diretório" : "Directory Inspector"}
          </span>
          <h3 className="mt-1 font-mono text-2xl font-bold text-foreground">
            NEXVOLT/{activeGroup.folder}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {isPt ? activeGroup.descPt : activeGroup.descEn}
          </p>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {activeGroup.children.map((sub) => (
            <div
              key={sub.name}
              className="flex flex-col justify-between rounded-md border border-border/70 bg-background/50 p-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary">
                    <Folder className="h-3.5 w-3.5" />
                    {sub.name}
                  </span>
                  {sub.route && (
                    <Link
                      to={sub.route}
                      className="inline-flex items-center gap-0.5 font-mono text-[11px] text-muted-foreground hover:text-primary"
                    >
                      {sub.route}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {isPt ? sub.rolePt : sub.roleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


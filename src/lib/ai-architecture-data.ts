export interface AiCapability {
  id: string;
  namePt: string;
  nameEn: string;
  funcPt: string;
  funcEn: string;
  demoPt: string;
  demoEn: string;
}

export const AI_CAPABILITIES_5_1: AiCapability[] = [
  {
    id: "chat",
    namePt: "Chat técnico",
    nameEn: "Technical chat",
    funcPt: "Perguntas sobre elétrica e automação",
    funcEn: "Questions about electrical engineering and automation",
    demoPt: "Consulta sobre coordenação Tipo 2 entre disjuntor-motor MPW40 e contator CWB32 conforme IEC 60947-4-1.",
    demoEn: "Query on Type 2 coordination between MPW40 motor circuit breaker and CWB32 contactor per IEC 60947-4-1.",
  },
  {
    id: "manuals",
    namePt: "Leitura de manuais",
    nameEn: "Manual reading",
    funcPt: "Consulta de PDFs e documentação",
    funcEn: "Lookup across PDFs and official documentation",
    demoPt: "Extração direta da tabela de bornes de controle do manual WEG CFW500 (Seção 3.2.3, pág. 38, Rev. 2025-04).",
    demoEn: "Direct extraction of control terminal table from WEG CFW500 manual (Section 3.2.3, p. 38, Rev. 2025-04).",
  },
  {
    id: "diagnostics",
    namePt: "Diagnóstico",
    nameEn: "Diagnostics",
    funcPt: "Identificação de causas de falhas",
    funcEn: "Identification of fault root causes",
    demoPt: "Roteiro estruturado em 8 etapas para falha F0070 (Sobrecorrente/Curto-circuito na saída).",
    demoEn: "Structured 8-step workflow for fault F0070 (Output Overcurrent / Short-Circuit).",
  },
  {
    id: "vision",
    namePt: "Visão computacional",
    nameEn: "Computer vision",
    funcPt: "Análise de fotos e etiquetas",
    funcEn: "Analysis of photos and equipment nameplates",
    demoPt: "Leitura de plaqueta de motor WEG W22 (220/380/440 V, 15 cv, FS 1.15, IP55) e sugestão de fechamento Δ/Y.",
    demoEn: "OCR of WEG W22 motor nameplate (220/380/440 V, 15 HP, SF 1.15, IP55) and Δ/Y wiring recommendation.",
  },
  {
    id: "diagrams",
    namePt: "Diagramas",
    nameEn: "Diagrams",
    funcPt: "Interpretação de circuitos",
    funcEn: "Circuit and schematic interpretation",
    demoPt: "Análise de folha multifilar: identificação de circuito de selo K1 (13-14), intertravamento NF (21-22) e relé térmico FT1 (95-96).",
    demoEn: "Multi-line schematic analysis: K1 holding contact (13-14), NC interlock (21-22), and FT1 thermal overload (95-96).",
  },
  {
    id: "comparison",
    namePt: "Comparação",
    nameEn: "Comparison",
    funcPt: "Comparar dois equipamentos",
    funcEn: "Compare two pieces of equipment side by side",
    demoPt: "Comparativo técnico WEG CFW500 vs. Schneider Altivar ATV320 (malha vetorial, protocolos nativos, STO e dimensões).",
    demoEn: "Side-by-side comparison: WEG CFW500 vs. Schneider Altivar ATV320 (vector control, native fieldbus, STO, footprint).",
  },
  {
    id: "parameterization",
    namePt: "Parametrização",
    nameEn: "Parameterization",
    funcPt: "Consultar parâmetros documentados",
    funcEn: "Look up documented drive & PLC parameters",
    demoPt: "CFW500: P0100 (Aceleração = 5,0 s), P0101 (Desaceleração = 8,0 s), P0133 (Freq. Mín = 5,0 Hz), P0134 (Freq. Máx = 60,0 Hz), P0401 (Corrente Nom. Motor).",
    demoEn: "CFW500: P0100 (Accel = 5.0 s), P0101 (Decel = 8.0 s), P0133 (Min Freq = 5.0 Hz), P0134 (Max Freq = 60.0 Hz), P0401 (Motor Rated Current).",
  },
  {
    id: "learning",
    namePt: "Aprendizado",
    nameEn: "Adaptive learning",
    funcPt: "Explicações adaptadas ao nível do usuário",
    funcEn: "Explanations tailored to the user's expertise level",
    demoPt: "Adapta a resposta entre Iniciante (conceito didático), Técnico de Campo (medição prática e bornes) e Engenheiro (modelagem e normas).",
    demoEn: "Adapts explanations across Beginner (core concept), Field Technician (practical wiring & testing), and Engineer (standards & modeling).",
  },
];

export const EIGHT_STEP_PROTOCOL_5_2 = {
  userQuestionPt: "Meu inversor WEG está apresentando falha de sobrecorrente. Como resolver?",
  userQuestionEn: "My WEG frequency inverter is showing an overcurrent fault. How do I fix it?",
  steps: [
    {
      num: 1,
      titlePt: "Perguntar o modelo exato",
      titleEn: "Ask for the exact model",
      detailPt:
        "Qual é a linha e o modelo exato do inversor WEG (ex.: CFW500, CFW300, CFW11) e a tensão nominal da rede (220 V ou 380/440 V)?",
      detailEn:
        "What is the exact WEG drive series/model (e.g., CFW500, CFW300, CFW11) and rated mains voltage (220 V or 380/440 V)?",
    },
    {
      num: 2,
      titlePt: "Identificar o código de falha",
      titleEn: "Identify the exact fault code",
      detailPt:
        "No CFW500, o alarme de sobrecorrente/curto-circuito na saída é registrado como F0070 (Sobrecorrente/Curto-circuito nos bornes U, V, W).",
      detailEn:
        "On the CFW500, output overcurrent/short-circuit is logged as F0070 (Overcurrent/Short-circuit across U, V, W terminals).",
    },
    {
      num: 3,
      titlePt: "Consultar o manual correspondente",
      titleEn: "Consult the matching official manual",
      detailPt:
        "Busca híbrida (vetorial + código exato) localiza o Manual de Programação WEG CFW500 — Firmware V2.8x (Documento 10001278006).",
      detailEn:
        "Hybrid search (vector + exact code) retrieves the WEG CFW500 Programming Manual — Firmware V2.8x (Doc 10001278006).",
    },
    {
      num: 4,
      titlePt: "Identificar as causas descritas pelo fabricante",
      titleEn: "Identify manufacturer-documented root causes",
      detailPt:
        "1) Curto-circuito entre duas fases do motor ou para o terra; 2) Rampa de aceleração (P0100) muito curta para a inércia da carga; 3) Módulo de potência IGBT em curto; 4) Eixo do motor ou transmissão mecânica travada.",
      detailEn:
        "1) Phase-to-phase or phase-to-ground short in motor/cable; 2) Acceleration ramp (P0100) too short for load inertia; 3) Shorted IGBT power module; 4) Mechanically jammed motor shaft or load.",
    },
    {
      num: 5,
      titlePt: "Apresentar verificações em ordem de diagnóstico",
      titleEn: "Present checks in diagnostic priority order",
      detailPt:
        "Passo A: Desconectar os cabos U, V, W e tentar partir o inversor a vazio. Passo B: Inspecionar giro livre do eixo mecânico. Passo C: Revisar parâmetros P0100 (rampa) e P0169 (limite de corrente).",
      detailEn:
        "Step A: Disconnect U, V, W motor leads and run drive unloaded. Step B: Verify free mechanical rotation of shaft. Step C: Review parameters P0100 (ramp) and P0169 (current limit).",
    },
    {
      num: 6,
      titlePt: "Indicar medições por profissional qualificado",
      titleEn: "Specify measurements for a qualified professional",
      detailPt:
        "⚠️ NR-10 / LOTO: Com o inversor desenergizado e banco CC descarregado (< 24 VCC), medir resistência entre fases do motor (equilíbrio ôhmico) e resistência de isolamento com megômetro (500/1000 VCC > 5 MΩ) entre bobinas e carcaça (PE).",
      detailEn:
        "⚠️ LOTO Safety: With drive de-energized and DC bus discharged (< 24 VDC), measure winding phase balance with an ohmmeter and insulation resistance with a Megger (500/1000 VDC > 5 MΩ) to frame ground (PE).",
    },
    {
      num: 7,
      titlePt: "Apresentar página e fonte da documentação",
      titleEn: "Cite exact manual page, version, and date",
      detailPt:
        "Fonte: Manual de Programação WEG CFW500 · Capítulo 11 (Falhas e Alarmes) · Página 144 · Versão V2.8x · Data da fonte: 04/2025.",
      detailEn:
        "Source: WEG CFW500 Programming Manual · Chapter 11 (Faults and Alarms) · Page 144 · Version V2.8x · Source Date: 2025-04.",
    },
    {
      num: 8,
      titlePt: "Perguntar o resultado da verificação para continuar",
      titleEn: "Ask for verification results to continue diagnosis",
      detailPt:
        "Ao desconectar os cabos U/V/W e comandar a partida a vazio, a falha F0070 desapareceu ou continua ocorrendo imediatamente?",
      detailEn:
        "After disconnecting U/V/W motor leads and commanding an unloaded start, did fault F0070 clear or does it still trip immediately?",
    },
  ],
};

export const RAG_PIPELINE_STEPS_5_4 = [
  {
    step: "01",
    pt: "Recebimento do arquivo",
    en: "File ingestion",
    tech: "Supabase Storage Bucket",
  },
  {
    step: "02",
    pt: "Verificação de formato e segurança",
    en: "Format & security validation",
    tech: "MIME + SHA-256 + Antivirus",
  },
  {
    step: "03",
    pt: "Extração de texto",
    en: "Native text extraction",
    tech: "PDF Parser Estruturado",
  },
  {
    step: "04",
    pt: "OCR para documentos digitalizados",
    en: "OCR for scanned schematics & manuals",
    tech: "Vision OCR Técnico",
  },
  {
    step: "05",
    pt: "Extração de tabelas e metadados",
    en: "Table & parameter metadata extraction",
    tech: "Parâmetros, Bornes e Falhas",
  },
  {
    step: "06",
    pt: "Separação por páginas e seções",
    en: "Page-aware & section chunking",
    tech: "Preserva número da página",
  },
  {
    step: "07",
    pt: "Criação de embeddings",
    en: "Vector embedding generation",
    tech: "Embeddings Multimodais",
  },
  {
    step: "08",
    pt: "Indexação vetorial",
    en: "Vector + full-text indexing",
    tech: "PostgreSQL pgvector + tsvector",
  },
  {
    step: "09",
    pt: "Vinculação ao fabricante e modelo",
    en: "Manufacturer, model & version binding",
    tech: "FK: brand_id, model_id, rev",
  },
  {
    step: "10",
    pt: "Disponibilização para consultas da IA",
    en: "Live availability for AI hybrid retrieval",
    tech: "Busca Híbrida + Citação",
  },
];

export const TECH_STACK_6_0: { layerPt: string; layerEn: string; tech: string; detailPt: string; detailEn: string }[] = [
  {
    layerPt: "IDE e desenvolvimento",
    layerEn: "IDE & development",
    tech: "Google Antigravity",
    detailPt: "Desenvolvimento assistido por agentes e automação de engenharia",
    detailEn: "Agentic development and engineering workflow automation",
  },
  {
    layerPt: "Frontend",
    layerEn: "Frontend",
    tech: "Next.js / TanStack Start + React",
    detailPt: "SSR, rotas tipadas e alta performance para documentação técnica",
    detailEn: "SSR, type-safe routing, and fast technical documentation rendering",
  },
  {
    layerPt: "Linguagem",
    layerEn: "Language",
    tech: "TypeScript",
    detailPt: "Tipagem estrita ponta a ponta (schemas, cálculos e contratos de IA)",
    detailEn: "Strict end-to-end typing (schemas, engineering math, and AI contracts)",
  },
  {
    layerPt: "Interface",
    layerEn: "UI Framework",
    tech: "Tailwind CSS + shadcn/ui",
    detailPt: "Design system industrial escuro de alto contraste para uso em campo",
    detailEn: "High-contrast dark industrial design system built for field readability",
  },
  {
    layerPt: "Banco de dados",
    layerEn: "Database",
    tech: "PostgreSQL",
    detailPt: "Relacional robusto para equipamentos, manuais, códigos de erro e OS",
    detailEn: "Relational storage for equipment, manuals, fault codes, and work orders",
  },
  {
    layerPt: "Backend",
    layerEn: "Backend",
    tech: "Supabase",
    detailPt: "APIs gerenciadas, triggers, funções edge e realtime",
    detailEn: "Managed APIs, database triggers, edge functions, and realtime",
  },
  {
    layerPt: "Autenticação",
    layerEn: "Authentication",
    tech: "Supabase Auth",
    detailPt: "Login individual e SSO/equipes para planos corporativos",
    detailEn: "Individual login and team access for enterprise accounts",
  },
  {
    layerPt: "Segurança",
    layerEn: "Security",
    tech: "Row Level Security (RLS)",
    detailPt: "Isolamento por tenant empresarial, perfil de usuário e plano",
    detailEn: "Multi-tenant enterprise isolation, user roles, and plan gating",
  },
  {
    layerPt: "Arquivos",
    layerEn: "File Storage",
    tech: "Supabase Storage",
    detailPt: "Armazenamento seguro de manuais PDF, datasheets, fotos e esquemas",
    detailEn: "Secure storage for PDF manuals, datasheets, panel photos, and diagrams",
  },
  {
    layerPt: "Busca vetorial",
    layerEn: "Vector Search",
    tech: "pgvector",
    detailPt: "Busca híbrida (semântica vetorial + filtro exato por fabricante/modelo/código)",
    detailEn: "Hybrid retrieval (semantic vector + exact brand/model/fault code filter)",
  },
  {
    layerPt: "IA",
    layerEn: "Artificial Intelligence",
    tech: "API de modelos multimodais",
    detailPt: "Orquestrador para texto, leitura de PDFs, visão computacional e diagramas",
    detailEn: "Orchestrator for text, PDF grounding, computer vision, and schematics",
  },
  {
    layerPt: "Processamento",
    layerEn: "Async Processing",
    tech: "Workers / funções assíncronas",
    detailPt: "Fila de ingestão RAG: OCR, extração de tabelas e geração de embeddings",
    detailEn: "RAG ingestion queue: OCR, table parsing, and embedding generation",
  },
  {
    layerPt: "Pagamentos",
    layerEn: "Payments",
    tech: "Asaas ou Mercado Pago",
    detailPt: "Assinaturas recorrentes PIX, boleto e cartão para planos Pro, Premium e Empresas",
    detailEn: "Recurring PIX, invoice, and card billing for Pro, Premium, and Enterprise plans",
  },
  {
    layerPt: "Hospedagem",
    layerEn: "Hosting",
    tech: "Cloud",
    detailPt: "Deploy escalável de baixa latência com CDN global",
    detailEn: "Low-latency scalable cloud deployment with edge CDN",
  },
  {
    layerPt: "Monitoramento",
    layerEn: "Monitoring",
    tech: "Sentry e logs estruturados",
    detailPt: "Rastreamento de erros, latência do orquestrador IA e auditoria técnica",
    detailEn: "Error tracking, AI orchestrator latency telemetry, and audit logs",
  },
];


export const DATABASE_GROUPS_6_2 = [
  { groupPt: "Usuários", groupEn: "Users", tables: "profiles, user_preferences" },
  { groupPt: "Empresas", groupEn: "Organizations", tables: "organizations, organization_members" },
  { groupPt: "Assinaturas", groupEn: "Subscriptions", tables: "plans, subscriptions, payments" },
  { groupPt: "Catálogo", groupEn: "Catalog", tables: "manufacturers, categories, products, models" },
  { groupPt: "Documentação", groupEn: "Documentation", tables: "documents, document_versions, document_pages" },
  { groupPt: "Falhas", groupEn: "Faults", tables: "error_codes, symptoms, causes, solutions" },
  { groupPt: "Diagramas", groupEn: "Diagrams", tables: "diagrams, diagram_components" },
  { groupPt: "Conhecimento", groupEn: "Knowledge", tables: "articles, tutorials, courses" },
  { groupPt: "IA", groupEn: "AI & Vector RAG", tables: "conversations, messages, ai_sources, embeddings" },
  { groupPt: "Manutenção", groupEn: "Maintenance", tables: "assets, maintenance_plans, work_orders" },
  { groupPt: "Comunidade", groupEn: "Community", tables: "questions, answers, comments, votes" },
  { groupPt: "Administração", groupEn: "Administration", tables: "audit_logs, moderation, content_reviews" },
];

export const DATABASE_ESSENTIAL_RULES_6_2 = {
  pt: [
    "IDs UUID em todas as entidades.",
    "Relacionamentos com integridade referencial.",
    "Controle de versão de documentos (document_versions).",
    "Registro de origem das informações (fontes oficiais).",
    "Separação de dados por organização (tenant isolation).",
    "RLS (Row Level Security) em todas as tabelas com dados privados.",
    "Logs de auditoria imutáveis (audit_logs).",
    "Backup e recuperação testados regularmente.",
  ],
  en: [
    "UUID primary keys across all entities.",
    "Relationships with strict referential integrity.",
    "Document version control (document_versions).",
    "Provenance tracking for all technical information.",
    "Organization-level data partitioning (tenant isolation).",
    "Row Level Security (RLS) on every table with private data.",
    "Immutable audit logs (audit_logs).",
    "Regularly tested backup and disaster recovery.",
  ],
};

export const SAAS_COMPARISON_MATRIX_7 = [
  {
    featurePt: "Biblioteca básica",
    featureEn: "Basic library",
    free: "Sim",
    pro: "Sim",
    premium: "Sim",
    enterprise: "Sim",
  },
  {
    featurePt: "Manuais",
    featureEn: "Manuals",
    free: "Limitado",
    pro: "Completo",
    premium: "Completo",
    enterprise: "Completo",
  },
  {
    featurePt: "Erros e soluções",
    featureEn: "Errors & solutions",
    free: "Limitado",
    pro: "Completo",
    premium: "Completo",
    enterprise: "Completo",
  },
  {
    featurePt: "Calculadoras",
    featureEn: "Calculators",
    free: "Básicas",
    pro: "Todas",
    premium: "Todas",
    enterprise: "Todas",
  },
  {
    featurePt: "IA",
    featureEn: "AI Assistant",
    free: "Experimentação",
    pro: "Cota mensal",
    premium: "Cota ampliada",
    enterprise: "Por contrato",
  },
  {
    featurePt: "Análise de imagens",
    featureEn: "Image analysis",
    free: "Não",
    pro: "Limitada",
    premium: "Sim",
    enterprise: "Sim",
  },
  {
    featurePt: "Histórico",
    featureEn: "History",
    free: "Básico",
    pro: "Completo",
    premium: "Completo",
    enterprise: "Completo",
  },
  {
    featurePt: "Equipes",
    featureEn: "Teams",
    free: "Não",
    pro: "Não",
    premium: "Não",
    enterprise: "Sim",
  },
  {
    featurePt: "Gestão de ativos",
    featureEn: "Asset management",
    free: "Não",
    pro: "Não",
    premium: "Não",
    enterprise: "Sim",
  },
];

export const SECURITY_CONTROLS_9 = {
  pt: [
    "LGPD e política de privacidade transparente.",
    "Controle de acesso por função (RBAC).",
    "Proteção e isolamento de dados empresariais.",
    "Autenticação segura (Supabase Auth / MFA).",
    "Rate limiting por usuário, IP e rota de IA.",
    "Proteção de uploads e validação de MIME/tamanho.",
    "Verificação de arquivos maliciosos antes da esteira RAG.",
    "Logs estruturados e trilha de auditoria.",
    "Backup automatizado com teste de restauração.",
    "Gestão estrita de segredos no servidor (fora do navegador).",
    "Prevenção contra instruções maliciosas (Prompt Injection indireto) inseridas em PDFs.",
  ],
  en: [
    "LGPD compliance and transparent privacy policy.",
    "Role-Based Access Control (RBAC).",
    "Enterprise data protection and tenant isolation.",
    "Secure authentication (Supabase Auth / MFA).",
    "Rate limiting per user, IP, and AI endpoint.",
    "Upload protection with strict MIME/size validation.",
    "Malware scanning prior to RAG ingestion.",
    "Structured logging and audit trails.",
    "Automated backups with verified restore drills.",
    "Server-side secret management (never exposed in browser).",
    "Indirect prompt-injection sanitization for uploaded PDFs.",
  ],
  disclaimerPt:
    "Aviso Técnico Obrigatório: Toda orientação deve identificar riscos elétricos, exigir condições seguras de trabalho (NR-10 / LOTO) e indicar os limites de competência profissional. A IA atua como ferramenta de consulta e apoio ao diagnóstico, não substituindo o responsável técnico habilitado por instalações ou intervenções.",
  disclaimerEn:
    "Mandatory Technical Disclaimer: Every guidance must identify electrical hazards, require safe working conditions (LOTO), and respect professional licensing boundaries. The AI serves as a reference and diagnostic support tool, never replacing a licensed engineer or technician.",
};

export const ANTIGRAVITY_ROADMAP_10 = [
  { step: "01", devPt: "Fundação e identidade visual", devEn: "Foundation & brand identity", outPt: "Projeto estruturado", outEn: "Structured project" },
  { step: "02", devPt: "Banco e autenticação", devEn: "Database & authentication", outPt: "Usuários e permissões", outEn: "Users & permissions" },
  { step: "03", devPt: "Dashboard e navegação", devEn: "Dashboard & navigation", outPt: "Interface funcional", outEn: "Functional UI" },
  { step: "04", devPt: "Fabricantes e produtos", devEn: "Manufacturers & products", outPt: "Catálogo técnico", outEn: "Technical catalog" },
  { step: "05", devPt: "Manuais e documentos", devEn: "Manuals & documents", outPt: "Biblioteca pesquisável", outEn: "Searchable library" },
  { step: "06", devPt: "Erros e soluções", devEn: "Errors & solutions", outPt: "Diagnóstico estruturado", outEn: "Structured diagnostics" },
  { step: "07", devPt: "Comandos e automação", devEn: "Controls & automation", outPt: "Conteúdo especializado", outEn: "Specialized content" },
  { step: "08", devPt: "Assistente IA completo", devEn: "Full AI assistant", outPt: "Consultoria técnica", outEn: "Technical advisory" },
  { step: "09", devPt: "Planos e pagamentos", devEn: "Plans & payments", outPt: "SaaS comercial", outEn: "Commercial SaaS" },
  { step: "10", devPt: "Testes e lançamento", devEn: "Testing & launch", outPt: "Produto pronto para usuários", outEn: "Production-ready release" },
];

export const MVP_SCOPE_12 = {
  pt: [
    "01. Cadastro e autenticação",
    "02. Dashboard",
    "03. Biblioteca de fabricantes",
    "04. Catálogo de equipamentos",
    "05. Manuais e datasheets",
    "06. Banco de erros e soluções",
    "07. Conteúdo de comandos elétricos",
    "08. Conteúdo básico de automação e CLP",
    "09. Calculadoras elétricas",
    "10. Assistente IA com consulta documental",
    "11. Assinaturas e controle de acesso",
    "12. Painel administrativo",
  ],
  en: [
    "01. Registration & authentication",
    "02. Dashboard",
    "03. Manufacturers library",
    "04. Equipment catalog",
    "05. Manuals & datasheets",
    "06. Fault codes & solutions database",
    "07. Electrical controls content",
    "08. Core PLC & automation content",
    "09. Electrical calculators",
    "10. Documentary RAG AI Assistant",
    "11. Subscriptions & access control",
    "12. Administrative panel",
  ],
};

export const SIX_STRATEGIC_PILLARS = [
  {
    num: "01",
    badgePt: "Módulo principal",
    badgeEn: "Core module",
    titlePt: "Assistente técnico com IA",
    titleEn: "AI Technical Assistant",
    descPt:
      "O usuário descreve um problema, envia uma foto, vídeo, manual ou código de erro. A IA investiga e orienta o diagnóstico.",
    descEn:
      "The user describes an issue or uploads a photo, video, manual, or fault code. The AI investigates and guides the diagnosis.",
    image:
      "https://images.openai.com/static-rsc-4/cZ8cSa7dnndBGYeGbRYq65zgQP3fUWAlM2i-sgBYRCsdarDwipTTFo9kR1bfOdLREgdbajjXCxGPrj6PKfK6APVGSNeyAZ4XaPXueIf-5Rm4trRBI8e1J6Gcpg7tlqKW0dGkC0nDsziN8fsMQ0PmmFsqNS26dfvl6f4TAHTpSVE?purpose=inline",
    route: "/ai" as const,
  },
  {
    num: "02",
    badgePt: "Diagnóstico",
    badgeEn: "Diagnostics",
    titlePt: "Diagnóstico de falhas e códigos de erro",
    titleEn: "Fault & Error Code Diagnostics",
    descPt:
      "Consulta de erros por fabricante, equipamento e modelo. Possíveis causas, testes recomendados e soluções documentadas.",
    descEn:
      "Error lookup by manufacturer, equipment, and model. Probable causes, recommended tests, and documented solutions.",
    image:
      "https://images.openai.com/static-rsc-4/LQktHZEod0qSsDpF-k8F6RBySNVxpa-kKRzGpc078TvADmatsDCumUljCxGKGFlU0pLZL0HUNAAYO6kEKpTihPnRVgpSwtaq2g-gQY9oXMnjmxJsdESXrvr-5PL-INA5uWc2G1BcksNOb5RUu9CkEk_pVjlZzkxpGsCptORSWwM?purpose=inline",
    route: "/ai" as const,
  },
  {
    num: "03",
    badgePt: "Diferencial comercial",
    badgeEn: "Key differentiator",
    titlePt: "Simulador de instalações",
    titleEn: "Electrical Installation Simulator",
    descPt:
      "Ambiente para montar instalações elétricas, selecionar componentes, conectar circuitos e testar cenários antes da execução física.",
    descEn:
      "Digital workbench to assemble electrical installations, select components, wire circuits, and test scenarios before physical execution.",
    image:
      "https://images.openai.com/static-rsc-4/NBp6gLnFPT40T1spjQkaNq5HY83MLXt3nvdwQhcWzYNXqNK6EoT_Caw4hPOaXw4GgwTKg7wuZ7ByGCbAe8sVAw-nxYBvYS-vddgiY6pGANzXekGRgq1Qo2cYQQJ6ZJEQRJz5hf9Oe5qjZe75JdSAmDZkjV4ByACNXSv--crmhKw?purpose=inline",
    route: "/simulator" as const,
  },
  {
    num: "04",
    badgePt: "Base estruturada",
    badgeEn: "Structured base",
    titlePt: "Biblioteca técnica inteligente",
    titleEn: "Intelligent Technical Library",
    descPt:
      "Catálogo de fabricantes, equipamentos, modelos, fichas técnicas, manuais, diagramas, parâmetros e especificações.",
    descEn:
      "Catalog of manufacturers, equipment, models, datasheets, manuals, diagrams, parameters, and specifications.",
    image:
      "https://images.openai.com/static-rsc-4/b5_84BgeZ1w13uPeeqY2zqW5yyUqVf4D6aG8Y2DI8-jwnDyHWda2pldtPBh3Cpm_IA-90Sa4ZjkckAdePEOwNWO-mTzZfuAapp2ZuzQdfYpO5amX1wm6y99xd1c9QnJrruzdQgxfV8gso0oTPIuxdiB4u0GEzpeY42amxVu0lY8?purpose=inline",
    route: "/dashboard" as const,
  },
  {
    num: "05",
    badgePt: "Automação",
    badgeEn: "Automation",
    titlePt: "Laboratório de automação e CLPs",
    titleEn: "Automation & PLC Lab",
    descPt:
      "Programação, lógica Ladder, sensores, inversores, IHMs, protocolos industriais e exemplos práticos.",
    descEn:
      "Programming, Ladder logic, sensors, VFDs, HMIs, industrial protocols, and practical examples.",
    image:
      "https://images.openai.com/static-rsc-4/kONwvMt1DztrmIbd14aQFP5TM469FvU4JSWSWthY2uyo77Kc_35M5IfOv9U_aUI7OxLl_hTOh6-_ecsxjfGywEjTBk0ZiU78AoIKoX7qSlmWNYeSXNJMGM_GzCXbgzPhEcX3uvbNDyeSKBEzX3_HFhz73LAJQuyaLN4N8hG37iI?purpose=inline",
    route: "/simulator" as const,
  },
  {
    num: "06",
    badgePt: "Eletrônica",
    badgeEn: "Electronics",
    titlePt: "Laboratório de eletrônica",
    titleEn: "Electronics Lab",
    descPt:
      "Componentes, circuitos, identificação de defeitos, cálculos, medições e simulações eletrônicas.",
    descEn:
      "Components, circuits, fault finding, calculations, measurements, and electronic simulations.",
    image:
      "https://images.openai.com/static-rsc-4/28AFV7DHpt7u1w4ws0zqXOV1__dhXk94mg-IdHtoKp6xmeqKKf7Q-Uipg2y61aUSlVkyOeFSTjt5ScrK2UAFpFtRtA5E-keFUICkJD2QF8dKtHb6fgOGtkQVtw0eWBlDDCPzpb6jn7MknGo9LGnyEA9OA4SieMJNSQ7qG6RDLuw?purpose=inline",
    route: "/modules" as const,
  },
];

export const EQUIPMENT_12_FIELDS_SAMPLE = [
  { fieldPt: "Fabricante", fieldEn: "Manufacturer", example: "WEG" },
  { fieldPt: "Categoria", fieldEn: "Category", example: "Inversor de frequência" },
  { fieldPt: "Família", fieldEn: "Family", example: "CFW500" },
  { fieldPt: "Modelo", fieldEn: "Model", example: "CFW500-C24P0T4DB20" },
  { fieldPt: "Tensão", fieldEn: "Voltage", example: "380–480 VCA Trifásico" },
  { fieldPt: "Potência", fieldEn: "Power", example: "15 cv (11 kW)" },
  { fieldPt: "Corrente nominal", fieldEn: "Rated current", example: "24,0 A (Conforme datasheet)" },
  { fieldPt: "Firmware", fieldEn: "Firmware", example: "V2.8x (Versão aplicável)" },
  { fieldPt: "Manual", fieldEn: "Manual", example: "PDF Oficial 10001278006" },
  { fieldPt: "Diagramas", fieldEn: "Diagrams", example: "Esquemas de potência e controle" },
  { fieldPt: "Códigos de erro", fieldEn: "Error codes", example: "F0021, F0070, F0051, A0046" },
  { fieldPt: "Aplicações", fieldEn: "Applications", example: "Motores, bombas, ventiladores e acionamentos" },
];

export const FOUR_MACRO_STAGES = [
  {
    stage: "Etapa 1",
    titlePt: "Conhecimento técnico (Ingestão Estruturada)",
    titleEn: "Technical Knowledge (Structured Ingestion)",
    descPt:
      "Fabricantes, produtos, modelos, manuais, fichas técnicas, códigos de erro e pesquisa inteligente — priorizando pipeline de ingestão e validação técnica em vez de cadastro manual em massa.",
    descEn:
      "Manufacturers, products, models, manuals, datasheets, fault codes, and smart search — prioritizing an automated ingestion & validation pipeline over manual bulk entry.",
  },
  {
    stage: "Etapa 2",
    titlePt: "Inteligência artificial",
    titleEn: "Artificial Intelligence",
    descPt:
      "Assistente técnico, análise de imagens, investigação de falhas em 4/8 etapas e respostas fundamentadas em documentação (separando dados confirmados de hipóteses).",
    descEn:
      "Technical assistant, image analysis, multi-step fault investigation, and grounded responses (strictly separating OEM-confirmed facts from diagnostic hypotheses).",
  },
  {
    stage: "Etapa 3",
    titlePt: "Laboratórios e simuladores",
    titleEn: "Labs & Simulators",
    descPt:
      "Diagramas, comandos elétricos, CLPs, eletrônica, simulação de instalações por fases e co-piloto para construir projetos junto com o usuário.",
    descEn:
      "Schematics, electrical controls, PLCs, electronics, phased installation simulation, and AI project co-pilot.",
  },
  {
    stage: "Etapa 4",
    titlePt: "Ecossistema SaaS",
    titleEn: "SaaS Ecosystem",
    descPt:
      "Assinaturas, limites de utilização da IA, projetos salvos, empresas, equipes, cursos e comunidade técnica.",
    descEn:
      "Subscriptions, AI usage quotas, saved projects, enterprise accounts, teams, courses, and technical community.",
  },
];

export const EIGHT_AI_SPECIALISTS_2_2 = [
  { domainPt: "Elétrica", domainEn: "Electrical", rolePt: "Instalações, circuitos e dimensionamento", roleEn: "Installations, circuits & sizing" },
  { domainPt: "Comandos", domainEn: "Controls", rolePt: "Partidas, proteções e diagramas", roleEn: "Starters, protections & schematics" },
  { domainPt: "Automação", domainEn: "Automation", rolePt: "Sistemas industriais e integração", roleEn: "Industrial systems & integration" },
  { domainPt: "CLP", domainEn: "PLC", rolePt: "Ladder, programação e diagnóstico", roleEn: "Ladder, programming & diagnostics" },
  { domainPt: "Eletrônica", domainEn: "Electronics", rolePt: "Componentes e análise de circuitos", roleEn: "Components & circuit analysis" },
  { domainPt: "Instrumentação", domainEn: "Instrumentation", rolePt: "Sensores, transmissores e medições", roleEn: "Sensors, transmitters & measurements" },
  { domainPt: "Manutenção", domainEn: "Maintenance", rolePt: "Falhas, inspeções e análise de causa", roleEn: "Faults, inspections & root-cause analysis" },
  { domainPt: "Energia solar", domainEn: "Solar energy", rolePt: "Sistemas fotovoltaicos e dimensionamento", roleEn: "PV systems & string sizing" },
];

export const FIVE_SIMULATION_ENGINES_2_6 = [
  {
    id: "engine-1",
    namePt: "Motor 1 — Instalações elétricas",
    nameEn: "Engine 1 — Electrical Installations",
    pkg: "packages/electrical-engine",
    descPt: "Circuitos residenciais e industriais, diagrama unifilar, dimensionamento, cargas, proteções e análise de circuitos.",
    descEn: "Residential and industrial circuits, single-line diagrams, sizing, loads, protections, and circuit analysis.",
    image:
      "https://images.openai.com/static-rsc-4/hPCgxAT_8WZaBRwjded-jbHOEcOjYvBNGETuc6AVM89DgZd99isrUsIT9YVsL4__QR2-97eIoOmLr9I1hCl-e2iay9YHNi-GXU5O6Ys57SFy7W07SQnzWhd1bXIjHGg5pAqn9bg12_JbrY_3F9U24nGUp58v8K-U0UToWW76xuI?purpose=inline",
  },
  {
    id: "engine-2",
    namePt: "Motor 2 — Comandos elétricos",
    nameEn: "Engine 2 — Electrical Controls",
    pkg: "packages/simulation-core (controls)",
    descPt: "Contatores, relés, temporizadores, partidas direta, reversora e estrela-triângulo, intertravamentos e sequências.",
    descEn: "Contactors, relays, timers, DOL, reversing and star-delta starters, interlocks, and sequences.",
    image:
      "https://images.openai.com/static-rsc-4/XOk-CVbeO48CnR5BReRZBx-WFKKKQ5rOUZBSwMwzCFX2JBBTc3HDd1kwsyCvEX4Cvw5ckDYp_rdKXpsfcuJ0CJ95bi52EsmUSMbulQxq5mkB-C8cbh24HeRWwF3YBVD-cV9vqm3s8Y7WiEq3z2GqvqdHqcNHYFm-264j281XxUM?purpose=inline",
  },
  {
    id: "engine-3",
    namePt: "Motor 3 — CLP e automação",
    nameEn: "Engine 3 — PLC & Automation",
    pkg: "packages/plc-engine",
    descPt: "Ladder, entradas e saídas digitais, temporizadores, contadores, estados, lógica sequencial e simulação de processo.",
    descEn: "Ladder logic, digital I/O, timers, counters, state machines, sequential logic, and process simulation.",
    image:
      "https://images.openai.com/static-rsc-4/voX7DXX3AyW711f3I99tCZ7SeGi7xhsZ-B9Vd_WHaLhCK-1dMikVcJ-Ii68i14Ok75yoD80RckLchmt8i-LELWWRbvo5RvBjoPbYdG35Tn8oemwe0PHWMe4C9O0MzhSRSAu6p5SgJ2noBGqXu4rTnv-XUWpjdOtDFDYzyVVFm4Y?purpose=inline",
  },
  {
    id: "engine-4",
    namePt: "Motor 4 — Eletrônica",
    nameEn: "Engine 4 — Electronics",
    pkg: "packages/electronics-engine",
    descPt: "Componentes, circuitos analógicos e digitais, medições, fontes e análise de sinais.",
    descEn: "Components, analog and digital circuits, measurements, power supplies, and signal analysis.",
    image:
      "https://images.openai.com/static-rsc-4/DB2W9TtTSkn_89kOKlBipNS8FV9e9R7i9SQiPbwm_ownioDX1_Bya7PfU3Tb3GvYoJ05kJbqBJlMWLQeLB4xZQ-1veb-PZl7cMP45tNHGZ58AhgYNMoCiCtgQakK42CPaNswDVs070uWSEUuFDHxQZMzmWXaDH9NCsstP-xQ2Tc?purpose=inline",
  },
  {
    id: "engine-5",
    namePt: "Motor 5 — Energia e sistemas",
    nameEn: "Engine 5 — Energy & PV Systems",
    pkg: "packages/energy-engine",
    descPt: "Geração solar, cargas, conversores, armazenamento e análise energética.",
    descEn: "Solar PV generation, loads, inverters, storage, and energy analysis.",
    image:
      "https://images.openai.com/static-rsc-4/1_l96jvqr6IAqfNy-JkYtqmSWL5JTsn-arqtw4gIls3sUZ1ouT0CtI6Azt_C35JJJX9MNAvRdgq7X6ilFtglB5uvEPDmbvEFl3s-lEf5RPQHIrDQxBp--2-CIEvsMW7laaF3WT8XplAE57l30bBXX3ChBw4mRaMg7iars_LlPAA?purpose=inline",
  },
];

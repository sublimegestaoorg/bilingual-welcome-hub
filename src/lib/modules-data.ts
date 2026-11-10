export interface FunctionalModule {
  num: string;
  id: string;
  titlePt: string;
  titleEn: string;
  descPt: string;
  descEn: string;
  image: string;
  imageAlt: string;
  environmentRoute: "/dashboard" | "/ai" | "/enterprise" | "/admin" | "/tools";
  highlightsPt: string[];
  highlightsEn: string[];
  sampleDataPt: { label: string; value: string }[];
  sampleDataEn: { label: string; value: string }[];
}

export const FUNCTIONAL_MODULES: FunctionalModule[] = [
  {
    num: "01",
    id: "dashboard",
    titlePt: "Dashboard",
    titleEn: "Dashboard",
    descPt:
      "Resumo de atividades, pesquisas recentes, favoritos, atualizações técnicas, ferramentas e acesso rápido à IA.",
    descEn:
      "Activity summary, recent searches, favorites, technical updates, tools, and quick AI access.",
    image:
      "https://images.openai.com/static-rsc-4/Xyg0_nLtBdu2SM2S5PNtivlFIC7uGLtT5wxrU35SUlxOtiYPs0gl7JJ5D3ygvLA36jt5ySv4qP1oSBmXIbLtY266zrTQ881BPq2oAL7a1b7xPV2546HE1NcdSVoVk5lks66_9XsN2zYCs9uGiK6maB1TdD48CPf3dfGLsiFTa0c?purpose=inline",
    imageAlt: "zenon Substation HMI Application Set – COPA-DATA zenon Engineering Store",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Painel consolidado de pesquisas recentes e manuais salvos",
      "Atalhos rápidos para calculadoras e diagnóstico por IA",
      "Feed de atualizações técnicas de fabricantes e normas",
    ],
    highlightsEn: [
      "Consolidated panel of recent searches and saved manuals",
      "Quick shortcuts to calculators and AI diagnostics",
      "Technical updates feed from manufacturers and standards",
    ],
    sampleDataPt: [
      { label: "Última consulta", value: "WEG CFW500 — Falha F0021 (p. 142)" },
      { label: "Ferramenta ativa", value: "Dimensionamento de Queda de Tensão 380 V" },
      { label: "Atualização técnica", value: "Revisão NBR 5410 / IEC 60364 — Seção Proteção" },
    ],
    sampleDataEn: [
      { label: "Last lookup", value: "WEG CFW500 — Fault F0021 (p. 142)" },
      { label: "Active tool", value: "380 V Voltage Drop Sizing" },
      { label: "Tech update", value: "IEC 60364 / NBR 5410 — Protection Section" },
    ],
  },
  {
    num: "02",
    id: "biblioteca-equipamentos",
    titlePt: "Biblioteca de equipamentos",
    titleEn: "Equipment library",
    descPt:
      "Fabricantes, categorias, modelos, códigos, características, acessórios e equipamentos compatíveis.",
    descEn:
      "Manufacturers, categories, models, part numbers, specifications, accessories, and compatible equipment.",
    image:
      "https://images.openai.com/static-rsc-4/pFyMao4b7qknSmXQv9BIVDY-l7l9fTNXvMJoXFKKPfa3G0LngbAInOSSYkHrUnioPbX-VOABplnv28pmNimK3tHMdzvy6meHsu5JykL_lCy1hFfpxc0jSRNf0dLU7F7aUwHt7f8duaxTv9KSGRShGJmiOFeZG46HsSSErVXmyvw?purpose=inline",
    imageAlt: "Power And Control Components — Industrial Electricals",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Ficha técnica completa por código de catálogo (SKU / Part Number)",
      "Tabela de equivalência e substituição entre fabricantes",
      "Lista de acessórios compatíveis (blocos de contato, bobinas, IOs)",
    ],
    highlightsEn: [
      "Complete technical sheet by catalog SKU / Part Number",
      "Cross-reference and replacement matrix across manufacturers",
      "Compatible accessories list (contact blocks, coils, IOs)",
    ],
    sampleDataPt: [
      { label: "Contator WEG CWB32-11-30D23", value: "32 A (AC-3) · Bobina 220 VCA · 1NA+1NF" },
      { label: "Compatível direto", value: "Schneider TeSys Deca LC1D32M7 / Siemens 3RT2027" },
      { label: "Acessório lateral", value: "Bloco Auxiliar Frontal BFCA-20 (2NA)" },
    ],
    sampleDataEn: [
      { label: "WEG Contactor CWB32-11-30D23", value: "32 A (AC-3) · 220 VAC Coil · 1NO+1NC" },
      { label: "Direct equivalent", value: "Schneider TeSys Deca LC1D32M7 / Siemens 3RT2027" },
      { label: "Side accessory", value: "Front Auxiliary Block BFCA-20 (2NO)" },
    ],
  },
  {
    num: "03",
    id: "manuais-documentacao",
    titlePt: "Manuais e documentação",
    titleEn: "Manuals & documentation",
    descPt:
      "PDFs, datasheets, catálogos, tabelas, esquemas, versões e fontes oficiais.",
    descEn:
      "PDFs, datasheets, catalogs, tables, wiring diagrams, revisions, and official sources.",
    image:
      "https://images.openai.com/static-rsc-4/_aaG--ivSn3a6ctzOwX332jabs_uj-0Eyo4aLXcPk_aeMkpdGtfJj0pwaViBDISY_R9pqWSo5wk6JOPXshc_jpIzytEq3Ub4ObcaOVH6Bbs64Bf0SgB278CeTp_tdvWpWzCqO4ZWMH5SbIN3GT_srXDquP_IDqOxWsHqSJjg_7A?purpose=inline",
    imageAlt: "Controlador TeSys T LTMR08EFM | PDF | Ethernet | Rede elétrica",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Controle de versões de firmware e revisões de manual",
      "Busca indexada por parâmetro, borne ou tabela de configuração",
      "Links verificados para fontes oficiais dos fabricantes",
    ],
    highlightsEn: [
      "Firmware version control and manual revision tracking",
      "Indexed search by parameter, terminal, or configuration table",
      "Verified links to official manufacturer documentation",
    ],
    sampleDataPt: [
      { label: "TeSys T LTMR08EFM", value: "Manual de Controle de Motores · Ethernet Modbus TCP" },
      { label: "WEG CFW500", value: "Manual de Programação Firmware v2.8x (248 págs.)" },
      { label: "Siemens S7-1200", value: "System Manual V4.6 · Doc ID A5E02486680" },
    ],
    sampleDataEn: [
      { label: "TeSys T LTMR08EFM", value: "Motor Management Controller Manual · Modbus TCP" },
      { label: "WEG CFW500", value: "Programming Manual Firmware v2.8x (248 pp.)" },
      { label: "Siemens S7-1200", value: "System Manual V4.6 · Doc ID A5E02486680" },
    ],
  },
  {
    num: "04",
    id: "erros-solucoes",
    titlePt: "Erros e soluções",
    titleEn: "Errors & solutions",
    descPt:
      "Banco de códigos de falhas, sintomas, causas, testes, procedimentos e soluções verificadas.",
    descEn:
      "Database of fault codes, symptoms, root causes, tests, procedures, and verified fixes.",
    image:
      "https://images.openai.com/static-rsc-4/DyA6f56WtpoiKAx5vvX2QYOIfDPFTbZL-AfQP5XbTIx8dUVCCvNtpcT6R0_6edbc4Y27kZUzUlzj5J5mp1sV-CP5SF10n_7LOPhLF0EKlEOzNd9sgNV_9xPn61r9j8gTF9r_Jx1AcZX96-bfXmHNHDkV5FvrcnzBhVeoPiufaaY?purpose=inline",
    imageAlt: "Delta VFD Fault Codes and Alarms – OC, OV, OH, GF Diagnostics",
    environmentRoute: "/ai",
    highlightsPt: [
      "Dicionário de alarmes (OC, OV, OH, GF, F0021, F0070, OCF)",
      "Árvore de diagnóstico com medições de multímetro e megômetro",
      "Soluções validadas em campo por engenheiros e técnicos",
    ],
    highlightsEn: [
      "Alarm dictionary (OC, OV, OH, GF, F0021, F0070, OCF)",
      "Diagnostic tree with multimeter and insulation resistance checks",
      "Field-validated fixes verified by engineers and technicians",
    ],
    sampleDataPt: [
      { label: "OC / F0070 (Sobrecorrente)", value: "Testar isolação U-V-W-Terra e rampa de aceleração" },
      { label: "OV / F0022 (Sobretensão CC)", value: "Aumentar rampa de desaceleração ou ativar frenagem reostática" },
      { label: "GF (Fuga à Terra)", value: "Medir resistência de isolamento do cabo e bobinado (> 5 MΩ)" },
    ],
    sampleDataEn: [
      { label: "OC / F0070 (Overcurrent)", value: "Check U-V-W-Ground insulation & acceleration ramp" },
      { label: "OV / F0022 (DC Bus Overvoltage)", value: "Extend deceleration ramp or enable braking resistor" },
      { label: "GF (Ground Fault)", value: "Measure cable and winding insulation resistance (> 5 MΩ)" },
    ],
  },
  {
    num: "05",
    id: "comandos-eletricos",
    titlePt: "Comandos elétricos",
    titleEn: "Electrical controls",
    descPt:
      "Diagramas de força e comando, partidas de motores, reversão, intertravamentos e temporizações.",
    descEn:
      "Power and control schematics, motor starters, reversing circuits, interlocks, and timers.",
    image:
      "https://images.openai.com/static-rsc-4/rN4LA3AqZLJvBAhFFZvCaCSMEj-SoIxmDbnpLZ9-eWs_vRyvPF3DXMDP0FjyboQb3pRDnwG_Wp8CbjBtONjZbsh2rD-2rRUpcZ9R3DcdeDnQLsTf8sPqGTD4BXx6aR0BuqHuo25242XEifGQIiGQQbKh88NDvF82Pi5kn_Dd05A?purpose=inline",
    imageAlt: "Schematic Diagram Of A Simple Start Stop Motor Control Circuit",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Diagramas multifilares e funcionais de força e comando",
      "Selo elétrico (13-14), intertravamento cruzado (21-22) e proteção térmica (95-96)",
      "Partida direta, estrela-triângulo, compensadora e reversora",
    ],
    highlightsEn: [
      "Power and control wiring schematics",
      "Holding contact (13-14), cross interlock (21-22), and thermal trip (95-96)",
      "Direct-on-line, star-delta, autotransformer, and reversing starters",
    ],
    sampleDataPt: [
      { label: "Contato de Selo", value: "Borne 13-14 (NA) de K1 em paralelo com botoeira S1 (Liga)" },
      { label: "Proteção Térmica", value: "Contato 95-96 (NF) do relé FT1 em série com emergência S0" },
      { label: "Intertravamento Reversora", value: "Contato 21-22 (NF) de K1 na linha da bobina A1-A2 de K2" },
    ],
    sampleDataEn: [
      { label: "Latching Contact", value: "K1 terminal 13-14 (NO) in parallel with Start pushbutton S1" },
      { label: "Overload Protection", value: "FT1 contact 95-96 (NC) wired in series with E-Stop S0" },
      { label: "Reversing Interlock", value: "K1 NC contact (21-22) wired upstream of K2 coil A1-A2" },
    ],
  },
  {
    num: "06",
    id: "automacao-clp",
    titlePt: "Automação e CLP",
    titleEn: "Automation & PLC",
    descPt:
      "Ladder, blocos funcionais, programação, IHM, redes industriais e exemplos de aplicações.",
    descEn:
      "Ladder logic, function blocks, PLC programming, HMI, industrial networks, and application examples.",
    image:
      "https://images.openai.com/static-rsc-4/h3UZRNBZHVQGUC7zoPTN98NaVJNxhxWV8Ku2zqJm8AnTOFJnW9U2kCYm9i0oC0gAFHKnknoP8tSaD5mdSip5A2JDaEGMD7CBztRzjEkp3m4Wf6WMg_aiAR1YjZ497aJ5IPNaRMbXrHFRA3HeN7BQJEDgJdpKYBBM_wbYlOC7x9A?purpose=inline",
    imageAlt: "Understanding I/O Terminal Types And When To Use Them",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Tipos de terminais I/O (Sinking NPN vs. Sourcing PNP, 0–10 V, 4–20 mA)",
      "Exemplos práticos em IEC 61131-3 (Ladder, FBD, Texto Estruturado)",
      "Arquiteturas Modbus RTU/TCP, PROFINET, EtherNet/IP e CANopen",
    ],
    highlightsEn: [
      "I/O terminal wiring (Sinking NPN vs. Sourcing PNP, 0–10 V, 4–20 mA)",
      "Practical examples in IEC 61131-3 (Ladder, FBD, Structured Text)",
      "Modbus RTU/TCP, PROFINET, EtherNet/IP, and CANopen architectures",
    ],
    sampleDataPt: [
      { label: "Entrada Digital PNP (Sourcing)", value: "Sensor fornece +24 VCC ao borne DI; comum 0 VCC no borne M" },
      { label: "Escalonamento Analógico", value: "NORM_X / SCALE_X: 4–20 mA (5530..27648) → 0.0..10.0 bar" },
      { label: "Rede Industrial", value: "PROFINET RT · Ciclo de atualização 2 ms · Topologia Estrela/Anel" },
    ],
    sampleDataEn: [
      { label: "PNP Digital Input (Sourcing)", value: "Sensor switches +24 VDC into DI terminal; 0 VDC common on M" },
      { label: "Analog Scaling", value: "NORM_X / SCALE_X: 4–20 mA (5530..27648) → 0.0..10.0 bar" },
      { label: "Industrial Network", value: "PROFINET RT · 2 ms update cycle · Star/Ring MRP topology" },
    ],
  },
  {
    num: "07",
    id: "manutencao-eletrica",
    titlePt: "Manutenção elétrica",
    titleEn: "Electrical maintenance",
    descPt:
      "Preventiva, corretiva, preditiva, inspeções, checklists e histórico de intervenções.",
    descEn:
      "Preventive, corrective, predictive maintenance, inspections, checklists, and intervention history.",
    image:
      "https://images.openai.com/static-rsc-4/Xfkr1QYBAgQU6-hOxMiLHAI-A8yvLc-mdSlm3Ql-2qZ2sClGDfB2pajGvctW4Xd92gfXlaNXdDqbwWUKerkgdJyU6cDHt0kOpUWBQs5AmxqWDirfxRooIx-RU5IK4cRJCMbYO14DaAEjE5ZQmZX24CAnhmKxIKiapH8ayjVDxcI?purpose=inline",
    imageAlt: "Personal Electromecánico | AETEC SRL",
    environmentRoute: "/enterprise",
    highlightsPt: [
      "Checklists de inspeção termográfica, reaperto de barramentos e limpeza",
      "Procedimentos de bloqueio e etiquetagem (LOTO / NR-10)",
      "Histórico de falhas, MTBF, MTTR e laudos de megômetro",
    ],
    highlightsEn: [
      "Thermographic inspection, busbar re-torquing, and cleaning checklists",
      "Lockout / Tagout (LOTO) safety procedures",
      "Failure logs, MTBF, MTTR, and insulation test reports",
    ],
    sampleDataPt: [
      { label: "Preditiva · Termografia", value: "Delta T > 15 °C entre fases exige intervenção programada" },
      { label: "Preventiva · Motores", value: "Índice de Polarização (IP) e resistência de isolamento a 500/1000 V" },
      { label: "Segurança NR-10", value: "Desenergização → Bloqueio → Teste de Ausência de Tensão → Aterramento" },
    ],
    sampleDataEn: [
      { label: "Predictive · Thermography", value: "Delta T > 15 °C across phases requires scheduled repair" },
      { label: "Preventive · Motors", value: "Polarization Index (PI) & insulation test at 500/1000 V" },
      { label: "LOTO Safety", value: "De-energize → Lockout → Verify Zero Voltage → Temporary Ground" },
    ],
  },
  {
    num: "08",
    id: "energia-solar",
    titlePt: "Energia solar",
    titleEn: "Solar energy",
    descPt:
      "Módulos fotovoltaicos, inversores, proteções, strings, dimensionamento e diagnóstico.",
    descEn:
      "PV modules, solar inverters, string boxes, protections, sizing, and diagnostics.",
    image:
      "https://images.openai.com/static-rsc-4/Vv3GpMO7sNqJg8PEV1KqkXfQ9MhajhN9DUru5ttaUtYq8Oh-VVxNhlncoxjbXtzyMIpVTZnDykFQlcB5mLrfRwb5xmoEqD--hdbkmkCU-7TuwoZk6HEUpIly6CauoGn6GO2YGLBgFTznIBQL-HvNd7U_T8Li8elDKV59sBG635c?purpose=inline",
    imageAlt: "SolaX X3-AELIO-60K Multi-MPPT Industrial Photovoltaic Inverter",
    environmentRoute: "/tools",
    highlightsPt: [
      "Dimensionamento de strings (Voc corrigido por temperatura mínima e faixa MPPT)",
      "Proteção CC/CA (DPS Classe II fotovoltaico, fusíveis gPV e seccionadora)",
      "Diagnóstico de baixa isolação Riso, falha de rede e sombreamento parcial",
    ],
    highlightsEn: [
      "String sizing (temperature-corrected Voc and MPPT operating window)",
      "DC/AC protection (PV Type II SPD, gPV fuses, and DC disconnect switch)",
      "Low Riso insulation fault, grid trip, and partial shading diagnostics",
    ],
    sampleDataPt: [
      { label: "Tensão Máxima da String", value: "N_max = V_max_inversor / (Voc_STC × [1 + β_Voc × (T_min - 25)])" },
      { label: "Normas Aplicáveis", value: "ABNT NBR 16690 (Arranjos FV) e NBR 5410" },
      { label: "Alarme Riso Baixo", value: "Inspecionar conectores MC4 úmidos ou cabo solar danificado à estrutura" },
    ],
    sampleDataEn: [
      { label: "Max String Voltage", value: "N_max = V_max_inv / (Voc_STC × [1 + β_Voc × (T_min - 25)])" },
      { label: "Applicable Standards", value: "IEC 62548 / ABNT NBR 16690 (PV Arrays)" },
      { label: "Low Riso Alarm", value: "Inspect moisture in MC4 connectors or abraded PV cable to frame" },
    ],
  },
  {
    num: "09",
    id: "eletrica-residencial",
    titlePt: "Elétrica residencial",
    titleEn: "Residential wiring",
    descPt:
      "Circuitos, instalações, quadros, proteção, dimensionamento e interpretação de projetos.",
    descEn:
      "Circuits, wiring installations, distribution boards, protection, sizing, and blueprint reading.",
    image:
      "https://images.openai.com/static-rsc-4/aZtUzBOsIPgGdOAAbymSreQAuJGbAdGukNn4gUImWJJC5GUm77bo7Zs1NxYNrBEgGJaDqK586q50l1Td5iL2OV7GIolc9dJV-0cvjOULwGBOKurQxG9HUctzV3J7apxgIbI-WoqGuocGqYSUdjpOAekrkUyQzxSGHUcKtOwT3NI?purpose=inline",
    imageAlt: "Residential Distribution Panel & Professional Electrical Services",
    environmentRoute: "/tools",
    highlightsPt: [
      "Divisão de circuitos terminais (iluminação, TUGs, TUEs) conforme NBR 5410",
      "Coordenação de disjuntores termomagnéticos (DTM), IDR (30 mA) e DPS",
      "Esquemas de aterramento TN-S, TN-C-S e TT e balanceamento de fases",
    ],
    highlightsEn: [
      "Branch circuit division (lighting, general receptacles, dedicated loads)",
      "Coordination of MCBs, RCDs (30 mA), and SPDs in distribution boards",
      "TN-S, TN-C-S, and TT earthing schemes and phase load balancing",
    ],
    sampleDataPt: [
      { label: "Seções Mínimas NBR 5410", value: "1,5 mm² (Iluminação) · 2,5 mm² (Força/TUG) · 4,0 mm²+ (TUEs)" },
      { label: "Proteção Diferencial Residual", value: "IDR ≤ 30 mA obrigatório em áreas molhadas e tomadas externas" },
      { label: "Queda de Tensão Máxima", value: "4% nos circuitos terminais (ou 7% desde o transformador)" },
    ],
    sampleDataEn: [
      { label: "Minimum Conductor Gauge", value: "1.5 mm² (Lighting) · 2.5 mm² (Outlets) · 4.0 mm²+ (Appliances)" },
      { label: "Residual Current Device", value: "30 mA RCD mandatory for wet areas and outdoor sockets" },
      { label: "Max Voltage Drop", value: "4% on branch circuits (7% total from utility transformer)" },
    ],
  },
  {
    num: "10",
    id: "eletronica",
    titlePt: "Eletrônica",
    titleEn: "Electronics",
    descPt:
      "Componentes, circuitos, fontes, placas, medições e diagnóstico eletrônico.",
    descEn:
      "Components, circuits, switched-mode power supplies, PCBs, measurements, and board-level diagnostics.",
    image:
      "https://images.openai.com/static-rsc-4/R4MRbieRrWyTzOdlRit-SGra00YZXZj1nrpSYhWIVFW2wMvsbXB9wAHT49ovy41owS3NqG2YkMTV0GhCDKr1S5vaYIeh5FCwtyTxiwFgjRWTG09_j3fuNc70Daq9Kpim-xzeYbQn0j2rgpd-Flh2JE4iyYUXXoftGl6-eGDpL49gyg6t6LvGd8jgyu6zPjvr?purpose=inline",
    imageAlt: "Testing an electronic circuit board",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Teste a frio e a quente de IGBTs, MOSFETs, pontes retificadoras e optoacopladores",
      "Reparo de fontes chaveadas industriais 24 VCC e placas de controle de inversores",
      "Medição de ESR em capacitores eletrolíticos e análise de sinais PWM no osciloscópio",
    ],
    highlightsEn: [
      "In-circuit and out-of-circuit testing of IGBTs, MOSFETs, rectifiers, and optocouplers",
      "24 VDC industrial SMPS repair and VFD control board troubleshooting",
      "Capacitor ESR testing and PWM gate-drive waveform analysis",
    ],
    sampleDataPt: [
      { label: "Módulo IGBT de Inversor", value: "Queda nos diodos antiparalelos U/V/W em relação ao +UD e -UD ≈ 0,45 V" },
      { label: "Fonte Chaveada 24 VCC", value: "Verificar fusível de entrada, varistor, NTC, MOSFET chaveador e TL431/PC817" },
      { label: "Optoacoplador de Gate", value: "Conferir alimentação VCC/VEE isolada nos drivers (ex: A3120 / HCPL-316J)" },
    ],
    sampleDataEn: [
      { label: "VFD IGBT Module Test", value: "Freewheeling diode drop across U/V/W to +DC and -DC bus ≈ 0.45 V" },
      { label: "24 VDC SMPS Repair", value: "Check input fuse, MOV, NTC, primary MOSFET, and TL431/PC817 feedback" },
      { label: "Gate Drive Optocoupler", value: "Verify isolated +15V/-8V supply rails on gate drivers (A3120 / HCPL-316J)" },
    ],
  },
  {
    num: "11",
    id: "instrumentacao",
    titlePt: "Instrumentação",
    titleEn: "Instrumentation",
    descPt:
      "Sensores, transmissores, pressão, temperatura, vazão, calibração e sinais 4–20 mA.",
    descEn:
      "Sensors, transmitters, pressure, temperature, flow, calibration, and 4–20 mA loops.",
    image:
      "https://images.openai.com/static-rsc-4/naTdLnZVBQqKKKEqlF3tmC7DfXVpWolgtWloarffiDb1eajLKrBXyqu7Z5JOt3L2tG8KB96T6nVhhYIgeqSHzOPLk-t7JuN7hr46Woov4EL0oJnWyscD2QbtQaKeuRP9_IhWRicdcF6ApiCM8xumiIGiZWswpfNeeh4pqWlz4xQ?purpose=inline",
    imageAlt: "Industrial Process Sensors",
    environmentRoute: "/tools",
    highlightsPt: [
      "Cálculo e simulação de malha de corrente 4–20 mA (2 fios e 4 fios) e protocolo HART",
      "Tabelas de termorresistências (Pt100 a 2, 3 e 4 fios) e termopares (Tipo J, K, S)",
      "Calibração de transmissores de pressão, nível hidrostático/radar e vazão eletromagnética",
    ],
    highlightsEn: [
      "4–20 mA current loop calculation (2-wire loop-powered & 4-wire) and HART protocol",
      "RTD (2, 3, and 4-wire Pt100) and thermocouple (Type J, K, S) reference tables",
      "Calibration of pressure, hydrostatic/radar level, and electromagnetic flow transmitters",
    ],
    sampleDataPt: [
      { label: "Equação Linear 4–20 mA", value: "I(mA) = 4 + 16 × [(PV - LRV) / (URV - LRV)]" },
      { label: "Pt100 (IEC 60751)", value: "100,00 Ω a 0 °C · 138,51 Ω a 100 °C (α ≈ 0,385 Ω/°C)" },
      { label: "Resistor de Shunt 250 Ω", value: "Converte 4–20 mA em 1,00–5,00 VCC para entradas analógicas em tensão" },
    ],
    sampleDataEn: [
      { label: "4–20 mA Linear Formula", value: "I(mA) = 4 + 16 × [(PV - LRV) / (URV - LRV)]" },
      { label: "Pt100 (IEC 60751)", value: "100.00 Ω at 0 °C · 138.51 Ω at 100 °C (α ≈ 0.385 Ω/°C)" },
      { label: "250 Ω Shunt Resistor", value: "Converts 4–20 mA into 1.00–5.00 VDC for voltage analog inputs" },
    ],
  },
  {
    num: "12",
    id: "ferramentas-calculadoras",
    titlePt: "Ferramentas e calculadoras",
    titleEn: "Tools & calculators",
    descPt:
      "Lei de Ohm, potência, corrente, queda de tensão, dimensionamento e conversões.",
    descEn:
      "Ohm's Law, active/reactive power, motor current, voltage drop, cable sizing, and unit conversions.",
    image:
      "https://images.openai.com/static-rsc-4/pjByXtS4j4iM1WbyPWYtkeMdfCS6caCmY8STvmNiJp92yEKlyvYfAQ24SJcrseOAbafMetxB171GchBktcHnqjfAJL5BD9GS0PtCjd3T55WO0akHnXQLNBlQ6jhEuITDmPlVaiJ8cZpNMMYgZmyAJeU1_PhIv94nvFmevdbo2zA?purpose=inline",
    imageAlt: "Engineering Calculator",
    environmentRoute: "/tools",
    highlightsPt: [
      "Calculadora interativa da Lei de Ohm (V, I, R, P)",
      "Cálculo de corrente nominal trifásica e ajuste de relé térmico / disjuntor motor",
      "Cálculo de queda de tensão por comprimento, seção do cabo e fator de potência",
    ],
    highlightsEn: [
      "Interactive Ohm's Law calculator (V, I, R, P)",
      "Three-phase full-load current & motor overload relay sizing",
      "Voltage drop calculation by run length, conductor section, and power factor",
    ],
    sampleDataPt: [
      { label: "Potência Trifásica Ativa", value: "P (W) = √3 × V_L × I_L × cos(φ) × η" },
      { label: "Queda de Tensão Trifásica", value: "ΔV (%) = (√3 × I × L × ρ_cobre) / (S_mm² × V_L) × 100" },
      { label: "Conversão cv / HP → kW", value: "1 cv = 735,5 W · 1 HP = 745,7 W" },
    ],
    sampleDataEn: [
      { label: "Three-Phase Active Power", value: "P (W) = √3 × V_L × I_L × cos(φ) × η" },
      { label: "Three-Phase Voltage Drop", value: "ΔV (%) = (√3 × I × L × ρ_cu) / (S_mm² × V_L) × 100" },
      { label: "cv / HP → kW Conversion", value: "1 metric hp (cv) = 735.5 W · 1 mechanical HP = 745.7 W" },
    ],
  },
  {
    num: "13",
    id: "projetos-diagramas",
    titlePt: "Projetos e diagramas",
    titleEn: "Projects & diagrams",
    descPt:
      "Projetos comentados, listas de materiais, esquemas e desenhos técnicos.",
    descEn:
      "Annotated engineering projects, bills of materials (BOM), wiring schematics, and technical drawings.",
    image:
      "https://images.openai.com/static-rsc-4/WYoDmH316K1Nmvwu07mAvq5Hftx8oarnB9TZH3DyaBgC_9gU2l3aCEWrWYEQPRbmUoniafqrQi2X2MzJOYI-qcHH_2-O_-QI74WFqKdQbGhRRvr0H51Y59VidQtkOgD0EPb9Hu59nyYDXKykLCTOjsANJdIAQ4Yf3dPgUd3K9-E?purpose=inline",
    imageAlt: "Industrial Design — The Backbone of Industrial Automation",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Diagramas unifilares, multifilares e layout de montagem de painéis em trilho DIN",
      "Listas de materiais (BOM) completas com referências, bornes, anilhas e canaletas",
      "Padrões de anilhamento e simbologia IEC 60617 / ABNT",
    ],
    highlightsEn: [
      "Single-line, multi-line diagrams, and DIN-rail enclosure layout drawings",
      "Complete Bills of Materials (BOM) with terminals, wire markers, and cable ducts",
      "Wire numbering standards and IEC 60617 schematic symbols",
    ],
    sampleDataPt: [
      { label: "Projeto PRJ-01", value: "Quadro de Comando para 2 Bombas de Recalque com Revezamento Automático" },
      { label: "Projeto PRJ-02", value: "Painel QGBT 400 A com Medição Multimedidor RS-485 e DPS Classe I+II" },
      { label: "Projeto PRJ-03", value: "Adequação de Segurança NR-12 com Relé de Segurança Duplo Canal e Cortina de Luz" },
    ],
    sampleDataEn: [
      { label: "Project PRJ-01", value: "Duplex Booster Pump Control Panel with Automatic Lead-Lag Alternation" },
      { label: "Project PRJ-02", value: "400 A Main Switchboard with RS-485 Power Meter & Type I+II SPD" },
      { label: "Project PRJ-03", value: "Machinery Safety Panel with Dual-Channel Safety Relay & Light Curtain" },
    ],
  },
  {
    num: "14",
    id: "cursos-aprendizagem",
    titlePt: "Cursos e aprendizagem",
    titleEn: "Courses & learning",
    descPt:
      "Trilhas, aulas, exercícios, avaliações e certificados de conclusão.",
    descEn:
      "Learning tracks, video lessons, practical exercises, assessments, and completion certificates.",
    image:
      "https://images.openai.com/static-rsc-4/n28H-g5k_HyJorLn68GNSVHjfb7y-s5hP1vHnKYdgJOCF3F-igyH895OTOSvPyoErZDJzxclhzk36aaq9U7ptO3WBZbJGT1LVj8W0wXQRmRACwo4jFxqe6Cey7dY6tSNFVjmiXsG-ToFYKU20rtnCNeUr4T534XdeO_oLinTe_w?purpose=inline",
    imageAlt: "Online Electrical & Automation Courses",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Trilhas progressivas do básico de eletricidade até redes industriais e inversores",
      "Simulados práticos de leitura de diagramas e identificação de defeitos",
      "Emissão de certificado com carga horária e validação por código QR",
    ],
    highlightsEn: [
      "Progressive tracks from electrical fundamentals to VFDs and industrial networks",
      "Hands-on schematic reading and fault-finding assessments",
      "Certificate issuance with verified hours and QR validation",
    ],
    sampleDataPt: [
      { label: "Trilha 01 · Comandos e Motores", value: "24 aulas · Leitura de esquemas, contatores e partidas (Certificado 40h)" },
      { label: "Trilha 02 · Inversores e Soft-Starters", value: "18 aulas · Parametrização, rampa, PID e diagnóstico de falhas (30h)" },
      { label: "Trilha 03 · CLP e Redes Industriais", value: "32 aulas · Ladder, entradas 4–20 mA, Modbus e PROFINET (60h)" },
    ],
    sampleDataEn: [
      { label: "Track 01 · Controls & Motors", value: "24 lessons · Schematic reading, contactors & starters (40h Certificate)" },
      { label: "Track 02 · VFDs & Soft-Starters", value: "18 lessons · Parameterization, ramps, PID & fault finding (30h)" },
      { label: "Track 03 · PLC & Industrial Networks", value: "32 lessons · Ladder, 4–20 mA analog I/O, Modbus & PROFINET (60h)" },
    ],
  },
  {
    num: "15",
    id: "comunidade-tecnica",
    titlePt: "Comunidade técnica",
    titleEn: "Tech community",
    descPt:
      "Perguntas, respostas, publicações, compartilhamentos e reputação.",
    descEn:
      "Questions, verified answers, field posts, knowledge sharing, and technical reputation.",
    image:
      "https://images.openai.com/static-rsc-4/n1TKGElWva8ZR7FibzahUqtFNs29AOe2TtAecwE0okEn8u8OnE322-zOBqjB0ldU7xZ7PfsOhuIf123fTw16qa8eAVxU6SCcTbd9abSpPiD8PI8_3Zumbxyy-ahBvSmvtcq8JJBF4gReP3b22BmV5coHpHb37_C8268S9PXVd2aJ6ALbozCDTlVmXZDx0uNu?purpose=inline",
    imageAlt: "Industrial Maintenance Technicians Collaborating on Shopfloor",
    environmentRoute: "/dashboard",
    highlightsPt: [
      "Fórum técnico organizado por fabricante, modelo de equipamento e código de falha",
      "Selo de 'Solução Verificada em Campo' com pontuação de reputação técnica",
      "Compartilhamento de casos reais de manutenção, retrofit e parametrização",
    ],
    highlightsEn: [
      "Technical forum indexed by manufacturer, equipment model, and fault code",
      "'Field-Verified Solution' badge with technical reputation scoring",
      "Real-world maintenance, retrofit, and parameterization case studies",
    ],
    sampleDataPt: [
      { label: "Caso resolvido #412", value: "Substituição de SSW05 por SSW07 em compressor parafuso 75 cv (18 votos)" },
      { label: "Caso resolvido #398", value: "Ruído EMI em sinal 4–20 mA próximo a cabo de motor VFD — blindagem 360°" },
      { label: "Especialistas ativos", value: "Engenheiros eletricistas, técnicos de automação e instrumentistas" },
    ],
    sampleDataEn: [
      { label: "Solved Case #412", value: "Retrofitting SSW05 to SSW07 on 75 HP screw compressor (18 upvotes)" },
      { label: "Solved Case #398", value: "EMI noise on 4–20 mA loop near VFD motor cable — 360° shield grounding" },
      { label: "Active Experts", value: "Electrical engineers, automation technicians & instrumentists" },
    ],
  },
  {
    num: "16",
    id: "assistente-ia",
    titlePt: "Assistente técnico IA",
    titleEn: "AI technical assistant",
    descPt:
      "Diagnóstico inteligente, consulta de manuais, imagens, diagramas e suporte técnico.",
    descEn:
      "Intelligent diagnostics, manual lookup, image and schematic analysis, and technical support.",
    image:
      "https://images.openai.com/static-rsc-4/o4hWk9jTWbVQ1p_oesPVBi0J0y9jM9U-1crj4uQh24-HFJ6xGk_kXv_J-g9vABOyhEKBgtD-7zX_3LjgdrL2spbGdIwsPEigucF1SRPYqyDIFPdNsDtV39yqTMX5Q_cOP16uGIIezaLh2FJjgbXkN-XHOZytzv1igIiZ8VDc9xk?purpose=inline",
    imageAlt: "Generative AI-powered Automation on the Industrial Shopfloor",
    environmentRoute: "/ai",
    highlightsPt: [
      "Respostas fundamentadas em manuais oficiais com citação exata de página",
      "Interpretação de fotos de placas de identificação, bornes e diagramas elétricos",
      "Geração guiada de checklists de teste com alerta de segurança NR-10",
    ],
    highlightsEn: [
      "Answers grounded in official manuals with exact page citations",
      "Visual analysis of motor nameplates, terminal blocks, and wiring diagrams",
      "Guided troubleshooting checklists with safety warnings",
    ],
    sampleDataPt: [
      { label: "Modo Diagnóstico", value: "Informe fabricante, modelo e código de erro para roteiro passo a passo" },
      { label: "Modo Leitura RAG", value: "Extrai parâmetros, torques de aperto e esquemas direto do PDF oficial" },
      { label: "Modo Visão Técnica", value: "Identifica componentes, ligações e anomalias térmicas/visuais em painéis" },
    ],
    sampleDataEn: [
      { label: "Diagnostic Mode", value: "Enter brand, model, and fault code for a step-by-step test procedure" },
      { label: "RAG Manual Mode", value: "Extracts parameters, terminal torques, and wiring from official PDFs" },
      { label: "Technical Vision Mode", value: "Identifies components, wiring, and visual anomalies in panels" },
    ],
  },
];


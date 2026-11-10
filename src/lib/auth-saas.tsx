import { createContext, useContext, useState, type ReactNode } from "react";

export type SaasPlanId = "gratuito" | "profissional" | "especialista" | "empresas";

export type OrgRole = "org_admin" | "engineer" | "technician" | "viewer";

export type RbacAction =
  | "manage_members"
  | "approve_project"
  | "edit_assets"
  | "run_advanced_simulation"
  | "execute_work_order"
  | "view_manuals";

export interface PlanQuotaLimits {
  planId: SaasPlanId;
  namePt: string;
  nameEn: string;
  priceBrl: string;
  targetPt: string;
  targetEn: string;
  aiQueriesPerMonth: number;
  pdfUploadsPerMonth: number;
  imageVisionPerMonth: number;
  simulationMinutesPerMonth: number;
  multiTenantEnabled: boolean;
}

export const SAAS_PLANS: Record<SaasPlanId, PlanQuotaLimits> = {
  gratuito: {
    planId: "gratuito",
    namePt: "Gratuito",
    nameEn: "Free",
    priceBrl: "R$ 0",
    targetPt: "Estudantes e iniciantes",
    targetEn: "Students & beginners",
    aiQueriesPerMonth: 15,
    pdfUploadsPerMonth: 2,
    imageVisionPerMonth: 0,
    simulationMinutesPerMonth: 30,
    multiTenantEnabled: false,
  },
  profissional: {
    planId: "profissional",
    namePt: "Profissional",
    nameEn: "Professional",
    priceBrl: "R$ 39,90/mês",
    targetPt: "Eletricistas e técnicos",
    targetEn: "Electricians & technicians",
    aiQueriesPerMonth: 150,
    pdfUploadsPerMonth: 25,
    imageVisionPerMonth: 20,
    simulationMinutesPerMonth: 300,
    multiTenantEnabled: false,
  },
  especialista: {
    planId: "especialista",
    namePt: "Especialista",
    nameEn: "Specialist",
    priceBrl: "R$ 79,90/mês",
    targetPt: "Engenheiros e profissionais avançados",
    targetEn: "Engineers & advanced professionals",
    aiQueriesPerMonth: 500,
    pdfUploadsPerMonth: 100,
    imageVisionPerMonth: 120,
    simulationMinutesPerMonth: 1200,
    multiTenantEnabled: false,
  },
  empresas: {
    planId: "empresas",
    namePt: "Empresas",
    nameEn: "Enterprise",
    priceBrl: "A partir de R$ 249/mês",
    targetPt: "Equipes e organizações",
    targetEn: "Teams & organizations",
    aiQueriesPerMonth: 2500,
    pdfUploadsPerMonth: 500,
    imageVisionPerMonth: 600,
    simulationMinutesPerMonth: 6000,
    multiTenantEnabled: true,
  },
};

export interface UserSessionProfile {
  id: string;
  fullName: string;
  email: string;
  planId: SaasPlanId;
  organizationId: string | null;
  organizationName: string | null;
  orgRole: OrgRole;
  usage: {
    aiQueries: number;
    pdfUploads: number;
    imageVision: number;
    simulationMinutes: number;
  };
}

export interface TenantResource {
  id: string;
  type: "public_manual" | "private_document" | "conversation" | "project" | "asset";
  title: string;
  visibility: "public" | "private";
  validationStatus: "verified" | "pending_review" | "draft";
  ownerId: string;
  organizationId: string | null;
}

/**
 * Simulates PostgreSQL Row Level Security (RLS) policy evaluation.
 * - Public resources are readable only when validationStatus === "verified".
 * - Private resources require matching organizationId (if corporate) or ownerId (if personal).
 */
export function canAccessTenantResource(
  user: Pick<UserSessionProfile, "id" | "organizationId">,
  resource: TenantResource,
): boolean {
  if (resource.visibility === "public") {
    return resource.validationStatus === "verified";
  }
  if (resource.organizationId !== null) {
    return user.organizationId !== null && user.organizationId === resource.organizationId;
  }
  return resource.ownerId === user.id;
}

const ROLE_PERMISSIONS: Record<OrgRole, RbacAction[]> = {
  org_admin: [
    "manage_members",
    "approve_project",
    "edit_assets",
    "run_advanced_simulation",
    "execute_work_order",
    "view_manuals",
  ],
  engineer: [
    "approve_project",
    "edit_assets",
    "run_advanced_simulation",
    "execute_work_order",
    "view_manuals",
  ],
  technician: ["execute_work_order", "view_manuals"],
  viewer: ["view_manuals"],
};

export function hasRolePermission(role: OrgRole, action: RbacAction): boolean {
  return ROLE_PERMISSIONS[role].includes(action);
}

export type QuotaMetricKey = "aiQueries" | "pdfUploads" | "imageVision" | "simulationMinutes";

export function checkPlanQuota(
  planId: SaasPlanId,
  metric: QuotaMetricKey,
  currentUsed: number,
): { allowed: boolean; limit: number; remaining: number } {
  const plan = SAAS_PLANS[planId];
  const limitMap: Record<QuotaMetricKey, number> = {
    aiQueries: plan.aiQueriesPerMonth,
    pdfUploads: plan.pdfUploadsPerMonth,
    imageVision: plan.imageVisionPerMonth,
    simulationMinutes: plan.simulationMinutesPerMonth,
  };
  const limit = limitMap[metric];
  const remaining = Math.max(0, limit - currentUsed);
  return {
    allowed: currentUsed < limit,
    limit,
    remaining,
  };
}

export const DEMO_PROFILES: UserSessionProfile[] = [
  {
    id: "usr-eng-01",
    fullName: "Eng. Roberto Almeida (Planta Alfa)",
    email: "roberto.almeida@alfa-automacao.com.br",
    planId: "empresas",
    organizationId: "org-alfa-01",
    organizationName: "Alfa Automação Industrial Ltda.",
    orgRole: "engineer",
    usage: {
      aiQueries: 310,
      pdfUploads: 42,
      imageVision: 55,
      simulationMinutes: 480,
    },
  },
  {
    id: "usr-tech-02",
    fullName: "Carlos Mendes (Técnico Independente)",
    email: "carlos.mendes@eletrica.tec.br",
    planId: "profissional",
    organizationId: null,
    organizationName: null,
    orgRole: "technician",
    usage: {
      aiQueries: 68,
      pdfUploads: 9,
      imageVision: 7,
      simulationMinutes: 115,
    },
  },
  {
    id: "usr-student-03",
    fullName: "Lucas Ferreira (Estudante Eletrotécnica)",
    email: "lucas.ferreira@estudante.edu.br",
    planId: "gratuito",
    organizationId: null,
    organizationName: null,
    orgRole: "viewer",
    usage: {
      aiQueries: 12,
      pdfUploads: 2,
      imageVision: 0,
      simulationMinutes: 25,
    },
  },
];

const AuthSaasCtx = createContext<{
  profile: UserSessionProfile;
  setProfileById: (id: string) => void;
}>({
  profile: DEMO_PROFILES[0],
  setProfileById: () => {},
});

export function AuthSaasProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserSessionProfile>(DEMO_PROFILES[0]);
  const setProfileById = (id: string) => {
    const found = DEMO_PROFILES.find((p) => p.id === id);
    if (found) setProfile(found);
  };
  return (
    <AuthSaasCtx.Provider value={{ profile, setProfileById }}>{children}</AuthSaasCtx.Provider>
  );
}

export const useAuthSaas = () => useContext(AuthSaasCtx);

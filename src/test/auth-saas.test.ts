import { describe, expect, it } from "vitest";
import {
  canAccessTenantResource,
  checkPlanQuota,
  hasRolePermission,
  type TenantResource,
} from "@/lib/auth-saas";

describe("Multi-tenant RLS & SaaS Quotas (Fase 02)", () => {
  it("prevents cross-organization access to private documents and projects", () => {
    const userOrgA = { id: "user-1", organizationId: "org-alfa" };
    const privateDocOrgB: TenantResource = {
      id: "doc-99",
      type: "private_document",
      title: "Esquema QGBT confidencial",
      visibility: "private",
      validationStatus: "verified",
      ownerId: "user-2",
      organizationId: "org-beta",
    };

    expect(canAccessTenantResource(userOrgA, privateDocOrgB)).toBe(false);
  });

  it("allows access to verified public manuals and same-organization resources", () => {
    const userOrgA = { id: "user-1", organizationId: "org-alfa" };
    const publicManual: TenantResource = {
      id: "doc-1",
      type: "public_manual",
      title: "Manual WEG CFW500",
      visibility: "public",
      validationStatus: "verified",
      ownerId: "admin",
      organizationId: null,
    };
    const sameOrgProject: TenantResource = {
      id: "prj-1",
      type: "project",
      title: "Acionamento Bomba 15cv",
      visibility: "private",
      validationStatus: "verified",
      ownerId: "user-2",
      organizationId: "org-alfa",
    };

    expect(canAccessTenantResource(userOrgA, publicManual)).toBe(true);
    expect(canAccessTenantResource(userOrgA, sameOrgProject)).toBe(true);
  });

  it("enforces RBAC role permissions and plan quotas", () => {
    expect(hasRolePermission("engineer", "approve_project")).toBe(true);
    expect(hasRolePermission("viewer", "approve_project")).toBe(false);

    const freeVision = checkPlanQuota("gratuito", "imageVision", 0);
    expect(freeVision.allowed).toBe(false);

    const proAi = checkPlanQuota("profissional", "aiQueries", 50);
    expect(proAi.allowed).toBe(true);
    expect(proAi.remaining).toBe(100);
  });
});

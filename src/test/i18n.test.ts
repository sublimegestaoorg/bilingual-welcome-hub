import { describe, expect, it } from "vitest";
import { detectLang } from "@/lib/i18n";

describe("detectLang", () => {
  it("uses Portuguese for pt browsers", () => expect(detectLang(null, "pt-BR")).toBe("pt"));
  it("uses English for other browsers", () => expect(detectLang(null, "fr-FR")).toBe("en"));
  it("respects saved choice", () => expect(detectLang("en", "pt-BR")).toBe("en"));
});

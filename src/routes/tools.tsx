import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { solveOhm, type OhmKey } from "@/lib/ohm";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Calculadora Lei de Ohm | Ohm's Law Calculator — NexVolt" },
      { name: "description", content: "Calcule tensão, corrente, resistência e potência. Calculate voltage, current, resistance and power." },
      { property: "og:title", content: "Ohm's Law Calculator — NexVolt" },
      { property: "og:description", content: "Voltage, current, resistance and power calculator in Portuguese and English." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Tools,
});

function Tools() {
  const { t } = useI18n();
  const [vals, setVals] = useState<Record<OhmKey, string>>({ v: "", i: "", r: "", p: "" });
  const filled = (Object.keys(vals) as OhmKey[]).filter((k) => vals[k] !== "");
  const result = filled.length === 2
    ? solveOhm(Object.fromEntries(filled.map((k) => [k, parseFloat(vals[k].replace(",", "."))])))
    : null;
  const fmt = (n: number) => (Number.isFinite(n) ? +n.toPrecision(6) + "" : "—");

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-xl px-5 py-16">
        <h1 className="font-display text-3xl font-bold">{t.tools.title}</h1>
        <p className="mt-2 text-muted-foreground">{t.tools.sub}</p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {(["v", "i", "r", "p"] as OhmKey[]).map((k) => (
            <label key={k} className="block">
              <span className="text-sm text-muted-foreground">{t.tools[k]}</span>
              <input
                inputMode="decimal"
                value={vals[k] !== "" ? vals[k] : result ? fmt(result[k]) : ""}
                readOnly={!!result && vals[k] === ""}
                onChange={(e) => setVals({ ...vals, [k]: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2.5 font-mono outline-none focus:border-primary read-only:text-primary"
              />
            </label>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{filled.length > 2 ? t.tools.need : ""}</span>
          <button onClick={() => setVals({ v: "", i: "", r: "", p: "" })} className="rounded-md border border-border px-4 py-2 hover:bg-secondary">
            {t.tools.clear}
          </button>
        </div>
      </main>
    </div>
  );
}

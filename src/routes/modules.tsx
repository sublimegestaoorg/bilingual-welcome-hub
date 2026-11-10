import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { FUNCTIONAL_MODULES, type FunctionalModule } from "@/lib/modules-data";
import { ArrowRight, CheckCircle2, Grid, Search } from "lucide-react";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "16 Módulos Funcionais — Ecossistema Integrado | NexVolt" },
      {
        name: "description",
        content:
          "Conheça os 16 módulos funcionais da NexVolt: Dashboard, Biblioteca, Manuais, Erros, Comandos, CLP, Manutenção, Solar, Residencial, Eletrônica, Instrumentação, Calculadoras, Projetos, Cursos, Comunidade e IA.",
      },
      { property: "og:title", content: "16 Módulos Funcionais — NexVolt" },
      {
        property: "og:description",
        content:
          "A plataforma é dividida em 16 módulos, organizados para permitir desenvolvimento independente e integração entre eles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ModulesPage,
});

function ModulesPage() {
  const { t, lang } = useI18n();
  const isPt = lang === "pt";
  const [selected, setSelected] = useState<FunctionalModule>(FUNCTIONAL_MODULES[0]);
  const [filter, setFilter] = useState("");

  const filteredModules = FUNCTIONAL_MODULES.filter((m) =>
    `${m.num} ${m.titlePt} ${m.titleEn} ${m.descPt} ${m.descEn}`
      .toLowerCase()
      .includes(filter.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <Grid className="h-3.5 w-3.5" />
              {isPt ? "ARQUITETURA MODULAR · 01 A 16" : "MODULAR ARCHITECTURE · 01 TO 16"}
            </span>
            <h1 className="mt-1 font-display text-3xl font-bold">{t.modulesTitle}</h1>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t.modulesSub}</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={isPt ? "Filtrar módulos (01..16)..." : "Filter modules (01..16)..."}
              className="w-full rounded-md border border-input bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Active Module Deep-Dive Inspector */}
        <section className="mt-8 overflow-hidden rounded-xl border border-primary/50 bg-card shadow-glow">
          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-64 bg-secondary lg:col-span-5">
              <img
                src={selected.image}
                alt={selected.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="rounded bg-primary px-2.5 py-1 font-mono text-xs font-bold text-primary-foreground">
                  {isPt ? `MÓDULO ${selected.num}` : `MODULE ${selected.num}`}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {isPt ? selected.titlePt : selected.titleEn}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                  {selected.imageAlt}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 lg:col-span-7">
              <div>
                <p className="text-base text-foreground">
                  {isPt ? selected.descPt : selected.descEn}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
                      {isPt ? "Funcionalidades-Chave" : "Key Capabilities"}
                    </h3>
                    <ul className="mt-2.5 space-y-2 text-xs text-muted-foreground">
                      {(isPt ? selected.highlightsPt : selected.highlightsEn).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
                      {isPt ? "Amostra Técnica Integrada" : "Integrated Technical Sample"}
                    </h3>
                    <div className="mt-2.5 space-y-2">
                      {(isPt ? selected.sampleDataPt : selected.sampleDataEn).map((item) => (
                        <div
                          key={item.label}
                          className="rounded border border-border/70 bg-background/60 p-2 text-xs"
                        >
                          <span className="block font-mono text-[11px] font-semibold text-primary">
                            {item.label}
                          </span>
                          <span className="text-muted-foreground">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {isPt ? "Integrado ao ambiente:" : "Integrated with environment:"}{" "}
                  <strong className="text-foreground">{selected.environmentRoute}</strong>
                </span>
                <Link
                  to={selected.environmentRoute}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  {isPt ? "Abrir Ambiente Conectado" : "Open Connected Environment"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grid of all 16 Functional Modules with images */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredModules.map((mod) => {
            const isSelected = mod.id === selected.id;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => {
                  setSelected(mod);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`group flex flex-col overflow-hidden rounded-lg border text-left transition-all ${
                  isSelected
                    ? "border-primary bg-secondary/70 shadow-glow"
                    : "border-border bg-card hover:border-primary/60 hover:bg-secondary/40"
                }`}
              >
                <div className="relative h-36 w-full overflow-hidden bg-secondary">
                  <img
                    src={mod.image}
                    alt={mod.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-0.5 font-mono text-xs font-bold text-primary">
                    {mod.num}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-display text-base font-bold group-hover:text-primary">
                      {isPt ? mod.titlePt : mod.titleEn}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {isPt ? mod.descPt : mod.descEn}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-2.5 font-mono text-[11px] text-primary">
                    <span>{isPt ? "Inspecionar módulo" : "Inspect module"}</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </section>
      </main>
    </div>
  );
}


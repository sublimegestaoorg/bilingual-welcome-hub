import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexVolt — Elétrica e automação | Electrical & automation" },
      { name: "description", content: "Manuais, falhas, diagramas, calculadoras e IA técnica em português e inglês." },
      { property: "og:title", content: "NexVolt — Electrical & automation knowledge" },
      { property: "og:description", content: "Manuals, fault codes, diagrams, calculators and technical AI in Portuguese and English." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">⚡ {t.hero.tag}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/tools" className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground shadow-glow transition hover:brightness-110">
              {t.hero.cta}
            </Link>
            <a href="#plans" className="rounded-md border border-border px-5 py-3 font-medium hover:bg-secondary">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold">{t.modulesTitle}</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.modules.map(([name, desc], i) => (
            <div key={name} className="bg-card p-5 transition-colors hover:bg-secondary">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold">{t.plansTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {t.plans.map(([name, price, feats], i) => (
              <div key={name} className={`rounded-lg border p-6 ${i === 2 ? "border-primary shadow-glow" : "border-border"} bg-card`}>
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-3 font-display text-3xl font-bold">
                  {i === 3 && <span className="mr-1 text-sm font-normal text-muted-foreground">{t.from}</span>}
                  {price}
                  <span className="text-sm font-normal text-muted-foreground">{t.perMonth}</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {feats.map((f) => <li key={f}>— {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">© NexVolt · {t.footer}</footer>
    </div>
  );
}

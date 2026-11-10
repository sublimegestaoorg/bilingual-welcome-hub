import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Cpu, LayoutDashboard, Building2, ShieldCheck, Wrench, Grid, Play } from "lucide-react";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary shadow-glow">
            NV
          </div>
          <div className="leading-none">
            <span className="font-display text-lg font-bold tracking-tight">
              NEX<span className="text-primary">VOLT</span>
            </span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
              {t.brand.sub}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Link
            to="/modules"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <Grid className="h-3.5 w-3.5" />
            {t.nav.modules} (16)
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            {t.nav.dashboard}
          </Link>
          <Link
            to="/ai"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <Cpu className="h-3.5 w-3.5" />
            {t.nav.ai}
          </Link>
          <Link
            to="/simulator"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <Play className="h-3.5 w-3.5" />
            {lang === "pt" ? "Simulador" : "Simulator"}
          </Link>
          <Link
            to="/enterprise"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <Building2 className="h-3.5 w-3.5" />
            {t.nav.enterprise}
          </Link>
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {t.nav.admin}
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
          >
            <Wrench className="h-3.5 w-3.5" />
            {t.nav.tools}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-border p-0.5 font-mono text-xs" role="group" aria-label="Language">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded px-2.5 py-1 uppercase transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile environment bar */}
      <div className="flex overflow-x-auto border-t border-border/60 px-4 py-2 text-xs md:hidden">
        <div className="flex items-center gap-2">
          <Link to="/modules" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            {t.nav.modules} (16)
          </Link>
          <Link to="/dashboard" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            1. {t.nav.dashboard}
          </Link>
          <Link to="/ai" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            2. {t.nav.ai}
          </Link>
          <Link to="/simulator" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            {lang === "pt" ? "Simulador" : "Simulator"}
          </Link>
          <Link to="/enterprise" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            3. {t.nav.enterprise}
          </Link>
          <Link to="/admin" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            4. {t.nav.admin}
          </Link>
          <Link to="/tools" className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary">
            {t.nav.tools}
          </Link>
        </div>
      </div>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import {
  Cpu,
  LayoutDashboard,
  Building2,
  ShieldCheck,
  Wrench,
  Grid,
  Play,
} from "lucide-react";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const isPt = lang === "pt";

  const navItems = [
    { to: "/dashboard" as const, label: isPt ? "Painel" : "Dashboard", icon: LayoutDashboard },
    { to: "/ai" as const, label: isPt ? "Assistente IA" : "AI Assistant", icon: Cpu },
    { to: "/simulator" as const, label: isPt ? "Simulador" : "Simulator", icon: Play },
    { to: "/modules" as const, label: t.nav.modules, icon: Grid },
    { to: "/tools" as const, label: t.nav.tools, icon: Wrench },
    { to: "/enterprise" as const, label: isPt ? "Empresas" : "Enterprise", icon: Building2 },
    { to: "/admin" as const, label: "Admin", icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/15 font-mono text-xs font-bold text-primary">
            NV
          </div>
          <div className="leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">
              NEX<span className="text-primary">VOLT</span>
            </span>
            <span className="hidden font-mono text-[9px] tracking-[0.18em] text-muted-foreground sm:block">
              INTELLIGENCE & ENGINEERING
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-primary/15 [&.active]:text-primary"
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className="flex rounded-md border border-border p-0.5 font-mono text-xs"
          role="group"
          aria-label="Language"
        >
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded px-2.5 py-1 uppercase transition-colors ${
                lang === l
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Compact mobile navigation */}
      <div className="flex overflow-x-auto border-t border-border/50 px-4 py-1.5 text-xs lg:hidden">
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded px-2.5 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-primary/15 [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

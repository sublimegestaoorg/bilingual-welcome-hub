import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const QUICK_ROUTES = [
  { to: "/dashboard" as const, folder: "apps/web/dashboard" },
  { to: "/modules" as const, folder: "apps/web/comandos & automacao" },
  { to: "/ai" as const, folder: "apps/web/assistente-ia" },
  { to: "/tools" as const, folder: "apps/web/ferramentas" },
  { to: "/enterprise" as const, folder: "modules/maintenance" },
  { to: "/admin" as const, folder: "apps/web/admin" },
];

export function EnvironmentQuickBar() {
  const { lang } = useI18n();
  const isPt = lang === "pt";
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 font-mono text-xs">
      <span className="text-muted-foreground">
        {isPt ? "Atalhos NEXVOLT/:" : "NEXVOLT/ Shortcuts:"}
      </span>
      {QUICK_ROUTES.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="rounded border border-border/70 bg-background px-2.5 py-1 text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {item.folder}
        </Link>
      ))}
    </div>
  );
}


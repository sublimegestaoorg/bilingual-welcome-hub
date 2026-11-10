import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Nex<span className="text-primary">Volt</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="/#modules" className="hover:text-foreground">{t.nav.modules}</a>
          <Link to="/tools" className="hover:text-foreground">{t.nav.tools}</Link>
          <a href="/#plans" className="hover:text-foreground">{t.nav.plans}</a>
        </nav>
        <div className="flex rounded-md border border-border p-0.5 font-mono text-xs" role="group" aria-label="Language">
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded px-2.5 py-1 uppercase transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

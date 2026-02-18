import { Link, useInRouterContext } from "react-router-dom";

export default function SLBFooter() {
  const inRouter = useInRouterContext();

  const linkClass =
    "hover:text-[var(--sl-accent-main)] transition-colors";

  return (
    <footer
      className="border-t py-10 px-6 text-sm text-white/70"
      style={{
        background:
          "linear-gradient(180deg, var(--sl-olive-dark), var(--sl-bg-deep))",
        borderColor: "var(--sl-border)",
      }}
    >
      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* COMPANY */}
        <div className="text-center md:text-left leading-relaxed">
          <div className="font-semibold text-white">
            SL BauTec GmbH
          </div>

          <div className="text-white/60">
            Barsbüttel · Hamburg & Schleswig-Holstein
          </div>

          <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-white/85">
            <span className="text-white/45 tracking-wide">Tel.</span>

            <a
              href="tel:+494050091310"
              className="font-semibold tracking-[0.02em] text-white/90 hover:text-[var(--sl-accent-main)] transition-colors"
            >
              040&nbsp;/&nbsp;50091310
            </a>
          </div>
        </div>

        {/* LEGAL LINKS */}
        <div className="flex gap-8">

          {inRouter ? (
            <>
              <Link to="/slb/impressum" className={linkClass}>
                Impressum
              </Link>
              <Link to="/slb/datenschutz" className={linkClass}>
                Datenschutz
              </Link>
              <Link to="/slb/rechtliche-hinweise" className={linkClass}>
                Rechtliche Hinweise
              </Link>
            </>
          ) : (
            <>
              <a href="/slb/impressum" className={linkClass}>
                Impressum
              </a>
              <a href="/slb/datenschutz" className={linkClass}>
                Datenschutz
              </a>
              <a href="/slb/rechtliche-hinweise" className={linkClass}>
                Rechtliche Hinweise
              </a>
            </>
          )}

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} SL BauTec GmbH · Alle Rechte vorbehalten
      </div>
    </footer>
  );
}

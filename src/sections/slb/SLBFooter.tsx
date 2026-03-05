import { Link, useInRouterContext } from "react-router-dom";

export default function SLBFooter() {
  const inRouter = useInRouterContext();

  const linkClass = "hover:text-[var(--sl-accent-main)] transition-colors";

  return (
    <footer
      className="border-t py-12 px-6 text-sm text-white/70"
      style={{
        background:
          "linear-gradient(180deg, var(--sl-olive-dark), var(--sl-bg-deep))",
        borderColor: "var(--sl-border)",
      }}
    >
      {/* CONTENT */}
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-start">

        {/* COMPANY */}
        <div className="leading-relaxed text-center md:text-left">

          <div className="font-semibold text-white">
            SL BauTec GmbH
          </div>

          <div className="text-white/60">
            Barsbüttel · Hamburg & Schleswig-Holstein
          </div>

          <div className="mt-1 text-xs text-white/45 tracking-wide">
            Tiefbau · Infrastruktur · Glasfaser
          </div>

          <div className="mt-4 space-y-1 text-white/85">

            <div>
              <span className="text-white/45">Tel.</span>{" "}
              <a
                href="tel:+494050091310"
                className="font-semibold text-white/90 hover:text-[var(--sl-accent-main)] transition-colors"
              >
                +49 40 50091310
              </a>
            </div>

            <div>
              <span className="text-white/45">Mail</span>{" "}
              <a
                href="mailto:dispo@slbautec.de"
                className="font-semibold text-white/90 hover:text-[var(--sl-accent-main)] transition-colors"
              >
                dispo@slbautec.de
              </a>
            </div>

            <div>
              <span className="text-white/45">Web</span>{" "}
              <a
                href="https://slbautec.de"
                className="font-semibold text-white/90 hover:text-[var(--sl-accent-main)] transition-colors"
              >
                slbautec.de
              </a>
            </div>

          </div>

          <div className="mt-4 text-xs text-white/50">
            USt-IdNr.: DE450175807
          </div>

        </div>


        {/* LEGAL */}
        <div className="flex flex-col gap-3 items-center md:items-end">

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

      {/* BOTTOM */}
      <div className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} SL BauTec GmbH · Alle Rechte vorbehalten
      </div>

    </footer>
  );
}
import { useEffect, useState } from "react";
import SLLogo from "../../assets/slb-logo-header.png";

export default function HeaderSLB() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(42,51,38,0.96), rgba(42,51,38,0.90))"
          : "linear-gradient(180deg, rgba(42,51,38,0.35), rgba(42,51,38,0.08))",

        backdropFilter: scrolled ? "blur(12px) saturate(130%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(130%)" : "none",

        borderBottom: scrolled
          ? "1px solid rgba(212,122,42,0.25)"
          : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-[92px] md:h-[102px]" : "h-[120px] md:h-[130px]"
          }`}
        >
          {/* LOGO */}
          <a href="#top" className="flex items-center">
            <img
              src={SLLogo}
              alt="SL BauTec"
              className="h-20 md:h-26 lg:h-28 w-auto object-contain select-none"
              draggable={false}
            />
          </a>

          {/* CTA */}
          <a
            href="#slb-kontakt"
            className="sl-btn h-11 px-6 text-sm rounded-lg transition-all"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}

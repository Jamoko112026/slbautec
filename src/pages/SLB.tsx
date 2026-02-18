import { useEffect } from "react";

import HeaderSLB from "../sections/slb/HeaderSLB";
import SLBFooter from "../sections/slb/SLBFooter";

import SLBHero from "../sections/slb/SLBHero";
import SLBServices from "../sections/slb/SLBServices";
import SLBTrust from "../sections/slb/SLBTrust";
import SLBTrustExtended from "../sections/slb/SLBTrustExtended";
import SLBProcess from "../sections/slb/SLBProcess";
import SLBMidCTA from "../sections/slb/SLBMidCTA";
import SLBCTA from "../sections/slb/SLBCTA";
import SLBContact from "../sections/slb/SLBContact";

export default function SLB() {

  /* ===============================
     SLB THEME – GLOBAL ACTIVATION
  =============================== */
  useEffect(() => {
    const root = document.documentElement;

    // Nur hinzufügen wenn noch nicht aktiv
    if (!root.classList.contains("brand-slb")) {
      root.classList.add("brand-slb");
    }

    return () => {
      root.classList.remove("brand-slb");
    };
  }, []);

  return (
    <div className="theme-sl min-h-screen flex flex-col">

      {/* ================= HEADER ================= */}
      <HeaderSLB />

      {/* ================= MAIN ================= */}
      <main className="flex-1">

        {/* HERO */}
        <SLBHero />
        <div id="slb-after-hero" />

        {/* CONTENT BLOCKS */}
        <SLBServices />
        <SLBTrust />
        <SLBTrustExtended />
        <SLBProcess />
        <SLBMidCTA />
        <SLBCTA />

        {/* CONTACT (ANCHOR TARGET) */}
        <section id="slb-kontakt">
          <SLBContact />
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <SLBFooter />

    </div>
  );
}

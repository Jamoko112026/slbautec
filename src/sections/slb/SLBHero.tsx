import HeroImage from "../../assets/slb/hero/slb_hero_main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[190px] md:pt-[230px] pb-60"
    >
      {/* ================= Background Image ================= */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-[1.04]
          brightness-[1.02]
          contrast-[1.08]
          saturate-[1.02]
        "
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

{/* Dark Depth Layer */}
<div className="absolute inset-0 bg-black/34" />

      {/* ================= Olive Atmosphere ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[rgba(30,38,28,0.70)]
          via-[rgba(30,38,28,0.38)]
          to-transparent
        "
      />

      {/* ================= Content ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <p className="text-sm tracking-[0.28em] uppercase sl-text-muted mb-6">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          Zuverlässiger Partner für <br />
          Tiefbau & Infrastrukturprojekte
        </h1>

        <p className="text-lg sl-text-muted max-w-2xl mx-auto">
          Glasfaserausbau, Straßenbau, Betonarbeiten und Entwässerung.
          Strukturierte Projektabwicklung für öffentliche Auftraggeber,
          Versorger und gewerbliche Bauprojekte im Norden.
        </p>

       <button
  className="sl-btn mt-10"
  onClick={() =>
    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
>
  Unverbindliche Projektanfrage
</button>


      </div>
    </section>
  );
}

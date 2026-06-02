export default function SLBTrustExtended() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-14">
          Qualifikation & Referenzen
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT – QUALIFIKATION */}
          <div className="space-y-5 text-white/80 leading-relaxed max-w-xl">
            <p>
              Die SL BauTec GmbH steht für zuverlässige Bauausführung,
              strukturierte Projektabwicklung und hohe Qualitätsstandards
              im Bereich Tiefbau und Glasfaserinfrastruktur.
            </p>

            <ul className="space-y-2 list-disc list-inside text-white/70">
              <li>Erfahrung in großvolumigen Infrastrukturprojekten</li>
              <li>Qualifiziertes Fachpersonal und eingespielte Abläufe</li>
              <li>Arbeiten nach aktuellen technischen Standards</li>
              <li>Sicherheits- und Qualitätsbewusstsein im Baustellenbetrieb</li>
            </ul>
          </div>

          {/* RIGHT – REFERENZ */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">

            <div className="flex justify-center mb-6">
              <img
                src="/slb/logos/telekom-logo.png"
                alt="Telekom Deutschland"
                className="h-14 w-auto object-contain opacity-90"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Telekom Deutschland
              </h3>

              <p className="text-white/70 leading-relaxed">
                Durchführung von Tiefbau-, Trassen- und Anschlussarbeiten
                im Rahmen des Glasfaserausbaus der Telekom in Hamburg.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
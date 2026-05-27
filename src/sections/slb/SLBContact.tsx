export default function SLBContact() {
  return (
    <section
      id="kontakt"
      className="sl-section py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT – TEXT SIDE */}
        <div>

          <p className="uppercase tracking-widest text-sm sl-accent mb-4">
            Projektanfrage
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Sprechen wir über Ihr Projekt
          </h2>

          <p className="sl-text-muted leading-relaxed mb-8">
            Beschreiben Sie uns kurz Ihr Vorhaben.
            Wir melden uns persönlich bei Ihnen zurück und besprechen
            die nächsten Schritte.
          </p>

          <ul className="space-y-3 text-sm sl-text-muted">
            <li>✔ Antwort in der Regel innerhalb von 24 Stunden</li>
            <li>✔ Persönlicher Ansprechpartner</li>
            <li>✔ Unverbindliche Ersteinschätzung</li>
          </ul>

        </div>

        {/* RIGHT – FORM */}
        <div className="sl-card">

          <form
            name="kontakt"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5"
          >

            {/* Netlify Hidden Fields */}
            <input
              type="hidden"
              name="form-name"
              value="kontakt"
            />

            {/* Spam Protection */}
            <p hidden>
              <input name="bot-field" />
            </p>

            {/* Firma */}
            <input
              type="text"
              name="firma"
              placeholder="Firmenname / Ansprechpartner"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--sl-accent-main)]"
            />

            {/* Mail */}
            <input
              type="email"
              name="email"
              placeholder="E-Mail Adresse"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--sl-accent-main)]"
            />

            {/* Nachricht */}
            <textarea
              rows={4}
              name="nachricht"
              placeholder="Kurzbeschreibung Ihres Projekts"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--sl-accent-main)] resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="sl-btn w-full py-4 rounded-lg"
            >
              Anfrage absenden
            </button>

          </form>

          <p className="mt-4 text-xs sl-text-muted text-center">
            Ihre Daten werden ausschließlich zur Kontaktaufnahme verwendet.
          </p>

        </div>

      </div>
    </section>
  );
}
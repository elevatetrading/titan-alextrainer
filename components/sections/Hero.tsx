import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "var(--bg-base)" }}
    >
      {/* Foto reale di Alessandro */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/alex-hero.jpg"
          alt="Alessandro Giua — personal trainer a Olbia"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="100vw"
        />
      </div>

      {/* Gradiente bottom — garantisce leggibilità del testo */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "80%",
          background:
            "linear-gradient(to top, var(--bg-base) 0%, var(--bg-base) 18%, rgba(10,12,11,0.88) 55%, rgba(10,12,11,0.3) 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gradiente top — sfuma il cielo verso scuro */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "30%",
          background:
            "linear-gradient(to bottom, rgba(10,12,11,0.55) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenuto */}
      <div className="relative z-10 max-w-2xl mx-auto w-full px-5 pb-24 pt-28 md:pb-36">
        {/* Kicker */}
        <p
          className="text-xs uppercase tracking-widest mb-5"
          style={{
            color: "var(--green-cta)",
            fontFamily: "var(--font-hanken)",
            fontWeight: 600,
          }}
        >
          Personal trainer a Olbia — per imprenditori e imprenditrici
        </p>

        {/* Headline H1 */}
        <h1
          className="font-headline mb-5 leading-[1.05]"
          style={{
            fontSize: "clamp(2.25rem, 7.5vw, 4.25rem)",
            color: "var(--text)",
          }}
        >
          Il corpo è il tuo primo asset.{" "}
          <span style={{ color: "var(--green-cta)" }}>
            Allenalo come gestisci l&apos;azienda.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mb-9 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-hanken)",
            maxWidth: "38rem",
          }}
        >
          Allenamenti brevi e mirati per chi ha poco tempo e molte
          responsabilità. Non è motivazione, è azione.
        </p>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contatti" className="btn-cta w-full sm:w-auto">
            Prenota la sessione gratuita
          </a>
          <a
            href="#metodo"
            className="flex items-center justify-center gap-2 py-2 text-sm"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-hanken)",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Scopri il Metodo Titan
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

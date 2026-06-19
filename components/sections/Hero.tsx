import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "var(--bg-base)" }}
    >
      {/* Foto di Alessandro */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/alex-hero.jpg"
          alt="Alessandro Giua — personal trainer a Olbia"
          fill
          priority
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: "55% 25%",
            filter: "blur(1px)",
            transform: "scale(1.04)",
          }}
          sizes="100vw"
        />
      </div>

      {/* Gradiente bottom */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "65%",
          background:
            "linear-gradient(to top, rgba(10,12,11,0.98) 0%, rgba(10,12,11,0.8) 45%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenuto */}
      <div className="relative z-10 max-w-2xl mx-auto w-full px-5 pb-20 pt-28 md:pb-32">

        {/* Headline H1 */}
        <h1
          className="font-headline mb-8 leading-[1.05]"
          style={{
            fontSize: "clamp(2.25rem, 7.5vw, 4.25rem)",
            color: "var(--text)",
            textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          Testa libera. Corpo forte.{" "}
          <span style={{ color: "var(--green-cta)" }}>
            Allenati come gestisci l&apos;azienda.
          </span>
        </h1>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contatti"
            className="w-full sm:w-auto flex items-center justify-center"
            style={{
              height: "56px",
              borderRadius: "6px",
              padding: "0 2rem",
              fontFamily: "var(--font-archivo)",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "rgba(255,255,255,0.92)",
              backgroundColor: "rgba(200,145,58,0.38)",
              border: "1px solid rgba(200,145,58,0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 20px rgba(0,0,0,0.3)",
              whiteSpace: "nowrap",
              transition: "background-color 200ms ease",
            }}
          >
            Prenota la tua sessione gratuita
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

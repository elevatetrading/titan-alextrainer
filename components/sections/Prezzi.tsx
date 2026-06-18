import FadeUp from "@/components/ui/FadeUp";

const inclusi = [
  "Abbonamento Olbia Sporting Club",
  "Assistenza WhatsApp 24/7",
  "Scheda settimanale per gli allenamenti extra",
  "Kit di benvenuto",
  "Valutazione fisica iniziale",
];

const pacchetti = [
  {
    id: "titan8",
    nome: "Titan8",
    prezzo: "350",
    lezioni: "8 lezioni personalizzate al mese",
    highlighted: false,
    badge: null,
    cta: "Richiedi Titan8",
  },
  {
    id: "titan12",
    nome: "Titan12",
    prezzo: "450",
    lezioni: "12 lezioni personalizzate al mese",
    highlighted: true,
    badge: "Più scelto",
    cta: "Richiedi Titan12",
  },
];

export default function Prezzi() {
  return (
    <section
      id="prezzi"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Intro */}
        <FadeUp delay={0}>
        <div className="max-w-xl mb-12">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              color: "var(--green-cta)",
              fontFamily: "var(--font-hanken)",
              fontWeight: 600,
            }}
          >
            Scegli il tuo Titan
          </p>
          <h2
            className="font-archivo leading-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              color: "var(--text)",
            }}
          >
            Due percorsi, stesso metodo.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-hanken)",
            }}
          >
            Cambia solo quanto ci entri dentro. Ogni pacchetto include
            l&apos;abbonamento all&apos;Olbia Sporting Club.
          </p>
        </div>
        </FadeUp>

        {/* Card prezzi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {pacchetti.map((p, i) => (
            <FadeUp key={p.id} delay={0.1 + i * 0.1}>
            <div
              className={`relative flex flex-col rounded-[20px] p-7 ${p.highlighted ? "card-featured" : ""}`}
              style={{
                backgroundColor: p.highlighted
                  ? "var(--surface-2)"
                  : "var(--surface)",
                border: p.highlighted
                  ? "1px solid var(--green-cta)"
                  : "1px solid var(--hairline)",
                boxShadow: p.highlighted
                  ? "0 20px 48px rgba(31,122,82,0.14)"
                  : undefined,
              }}
            >
              {/* Badge */}
              {p.badge && (
                <span
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                  style={{
                    backgroundColor: "var(--green-cta)",
                    color: "var(--on-cta)",
                    fontFamily: "var(--font-hanken)",
                    fontWeight: 700,
                  }}
                >
                  {p.badge}
                </span>
              )}

              <h3
                className="font-archivo text-2xl mb-1"
                style={{ color: "var(--text)" }}
              >
                {p.nome}
              </h3>

              {/* Prezzo */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="font-headline leading-none"
                  style={{ fontSize: "2.625rem", color: "var(--text)" }}
                >
                  {p.prezzo}€
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-hanken)",
                  }}
                >
                  /mese
                </span>
              </div>

              <p
                className="text-sm mb-6"
                style={{
                  color: "var(--green-cta)",
                  fontFamily: "var(--font-hanken)",
                  fontWeight: 600,
                }}
              >
                {p.lezioni}
              </p>

              {/* Lista */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {inclusi.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-snug"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-hanken)",
                    }}
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="var(--green-cta)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contatti"
                className="btn-cta w-full"
                style={
                  !p.highlighted
                    ? {
                        backgroundColor: "transparent",
                        color: "var(--text)",
                        border: "1px solid var(--hairline)",
                      }
                    : undefined
                }
              >
                {p.cta}
              </a>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

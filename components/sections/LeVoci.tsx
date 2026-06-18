const recensioni = [
  {
    testo:
      "Pensavo di non avere tempo. Invece mi alleno tre volte a settimana senza saltare un impegno. Arrivo a sera con un'altra energia.",
    nome: "Marco R.",
    ruolo: "Imprenditore, Olbia",
    iniziale: "M",
  },
  {
    testo:
      "Allenamenti corti e intensi che entrano davvero nella mia giornata. Dopo qualche mese dormo meglio e sono più lucida sul lavoro.",
    nome: "Giulia M.",
    ruolo: "Imprenditrice, Sassari",
    iniziale: "G",
  },
  {
    testo:
      "Capisce i ritmi di chi viaggia e ha mille riunioni. Niente prediche, solo un metodo che funziona.",
    nome: "Luca T.",
    ruolo: "Manager, Cagliari",
    iniziale: "L",
  },
];

export default function LeVoci() {
  return (
    <section
      style={{ backgroundColor: "var(--bg-base)" }}
      className="section-pad overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 mb-10">
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{
            color: "var(--green-cta)",
            fontFamily: "var(--font-hanken)",
            fontWeight: 600,
          }}
        >
          Le voci
        </p>
        <h2
          className="font-archivo leading-tight"
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
            color: "var(--text)",
          }}
        >
          Cosa dicono i clienti
        </h2>
      </div>

      {/* Carosello swipe — CSS scroll snap puro */}
      <div
        className="flex gap-5 overflow-x-auto px-5 pb-4 hide-scrollbar"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {recensioni.map((r, i) => (
          <article
            key={i}
            className="flex-shrink-0 rounded-2xl p-6 flex flex-col gap-5"
            style={{
              width: "min(82vw, 340px)",
              scrollSnapAlign: "start",
              backgroundColor: "rgba(10,12,11,0.55)",
              border: "1px solid var(--hairline)",
            }}
          >
            <p
              className="text-base leading-relaxed flex-1"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              &ldquo;{r.testo}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-archivo text-sm font-bold"
                style={{
                  backgroundColor: "var(--green-cta)",
                  color: "var(--on-cta)",
                }}
              >
                {r.iniziale}
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-hanken)",
                  }}
                >
                  {r.nome}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-hanken)",
                  }}
                >
                  {r.ruolo}
                </p>
              </div>
            </div>
          </article>
        ))}

        {/* Spacer per evitare che l'ultima card tocchi il bordo */}
        <div className="flex-shrink-0 w-1" aria-hidden="true" />
      </div>

      {/* Nota provvisorio */}
      <div className="max-w-6xl mx-auto px-5 mt-4">
        <p
          className="text-xs"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-hanken)",
            opacity: 0.6,
          }}
        >
          * Contenuto provvisorio — le recensioni reali Google verranno
          inserite prima del go-live.
        </p>
      </div>
    </section>
  );
}

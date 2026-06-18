const blocchi = [
  {
    numero: "01",
    titolo: "Perché Titan",
    testo:
      "Il nome viene da lì: solidità. Quando il fisico tiene, la testa è più lucida. Il percorso è costruito su questo equilibrio, non sull'estetica fine a se stessa.",
  },
  {
    numero: "02",
    titolo: "Come funziona",
    testo:
      "Allenamenti brevi, mirati, per chi ha poco tempo ma vuole risultati reali. Ogni percorso parte dal tuo livello e dai tuoi obiettivi. Niente schede infinite, niente diete impossibili: metodo, costanza e una guida che c'è.",
  },
  {
    numero: "03",
    titolo: "Cosa ottieni",
    lista: [
      "Più energia per arrivare a fine giornata",
      "Meno stress, più lucidità nelle decisioni",
      "Tono fisico e postura migliori",
      "Una routine che regge nel tempo",
    ],
  },
  {
    numero: "04",
    titolo: "Per chi è",
    lista: [
      "Imprenditori e imprenditrici con l'agenda piena che non vogliono trascurare la salute",
      "Chi vuole rimettersi in forma senza perdere tempo",
      "Chi cerca un percorso serio, concreto, su misura",
    ],
  },
];

export default function Metodo() {
  return (
    <section
      id="metodo"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Intro */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{
              color: "var(--green-cta)",
              fontFamily: "var(--font-hanken)",
              fontWeight: 600,
            }}
          >
            Il Metodo Titan
          </p>
          <h2
            className="font-archivo leading-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              color: "var(--text)",
            }}
          >
            Un solo principio: essere solidi.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-hanken)",
            }}
          >
            Un corpo forte regge tutto il resto — lavoro, stress, decisioni,
            famiglia.
          </p>
        </div>

        {/* Blocchi narrativi asimmetrici */}
        <div className="flex flex-col gap-16 md:gap-24">
          {blocchi.map((b, i) => (
            <div
              key={b.numero}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-20"
            >
              {/* Numero grande — alterna lato su desktop */}
              <div
                className={`flex-shrink-0 md:w-28 ${i % 2 === 1 ? "md:order-2 md:text-right" : ""}`}
              >
                <span
                  className="font-headline leading-none"
                  style={{
                    fontSize: "clamp(4rem, 10vw, 7rem)",
                    color: "var(--green-cta)",
                    opacity: 0.2,
                    display: "block",
                  }}
                >
                  {b.numero}
                </span>
              </div>

              {/* Testo */}
              <div
                className={`flex-1 ${i % 2 === 1 ? "md:order-1" : ""}`}
                style={{
                  borderTop: "1px solid var(--hairline)",
                  paddingTop: "1.5rem",
                }}
              >
                <h3
                  className="font-archivo mb-5"
                  style={{
                    fontSize: "clamp(1.375rem, 4vw, 2rem)",
                    color: "var(--text)",
                  }}
                >
                  {b.titolo}
                </h3>

                {b.testo && (
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-hanken)",
                    }}
                  >
                    {b.testo}
                  </p>
                )}

                {b.lista && (
                  <ul className="flex flex-col gap-3.5">
                    {b.lista.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base leading-relaxed"
                        style={{
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-hanken)",
                        }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 rounded-full"
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--green-cta)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

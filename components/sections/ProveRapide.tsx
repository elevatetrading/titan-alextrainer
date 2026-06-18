const prove = [
  {
    num: "01",
    title: "Solo 1-to-1",
    body: "Sessioni private, mai di gruppo. Tutta l'ora è tua.",
    bg: "var(--green-deep)",
  },
  {
    num: "02",
    title: "Posti limitati",
    body: "Seguo pochi atleti per volta. Attenzione totale, zero percorsi fotocopia.",
    bg: "var(--bg-base)",
  },
  {
    num: "03",
    title: "All'Olbia Sporting Club",
    body: "Struttura completa, abbonamento incluso.",
    bg: "var(--green-deep)",
  },
];

export default function ProveRapide() {
  return (
    <section>
      {prove.map((p) => (
        <div
          key={p.num}
          style={{ backgroundColor: p.bg }}
        >
          <div
            className="max-w-6xl mx-auto px-5"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
              <span
                className="font-headline leading-none flex-shrink-0"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "var(--green-cta)",
                  opacity: p.bg === "var(--bg-base)" ? 0.25 : 0.35,
                }}
              >
                {p.num}
              </span>
              <div>
                <h3
                  className="font-archivo text-xl leading-snug mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-hanken)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

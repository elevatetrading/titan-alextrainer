const prove = [
  {
    num: "01",
    title: "Solo 1-to-1",
    body: "Sessioni private, mai di gruppo. Tutta l'ora è tua.",
  },
  {
    num: "02",
    title: "Posti limitati",
    body: "Seguo pochi atleti per volta. Attenzione totale, zero percorsi fotocopia.",
  },
  {
    num: "03",
    title: "All'Olbia Sporting Club",
    body: "Struttura completa, abbonamento incluso.",
  },
];

export default function ProveRapide() {
  return (
    <section style={{ backgroundColor: "var(--green-deep)" }} className="section-pad">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {prove.map((p) => (
            <div key={p.num} className="flex flex-col gap-3">
              <span
                className="font-headline leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  color: "var(--green-cta)",
                  opacity: 0.3,
                }}
              >
                {p.num}
              </span>
              <h3
                className="font-archivo text-xl leading-snug"
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
          ))}
        </div>
      </div>
    </section>
  );
}

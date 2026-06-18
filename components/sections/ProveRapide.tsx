import FadeUp from "@/components/ui/FadeUp";

const prove = [
  {
    num: "01",
    title: "Solo",
    titleGreen: "1-to-1",
    body: "L'ora è tua. Nessun gruppo, nessuna attesa, nessuna distrazione.",
    bg: "var(--green-deep)",
  },
  {
    num: "02",
    title: "Posti",
    titleGreen: "limitati",
    body: "Seguo pochi atleti per volta. Così ogni percorso è davvero su misura.",
    bg: "var(--bg-base)",
  },
  {
    num: "03",
    title: "Olbia",
    titleGreen: "Sporting Club",
    body: "Struttura completa. L'abbonamento è già incluso nel pacchetto.",
    bg: "var(--green-deep)",
  },
];

export default function ProveRapide() {
  return (
    <section>
      {prove.map((p, i) => (
        <div
          key={p.num}
          style={{ backgroundColor: p.bg }}
        >
          <div
            className="max-w-6xl mx-auto px-5"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <FadeUp delay={i * 0.08}>
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
                  {p.title}{" "}
                  <span style={{ color: "var(--green-cta)" }}>{p.titleGreen}</span>
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
            </FadeUp>
          </div>
        </div>
      ))}
    </section>
  );
}

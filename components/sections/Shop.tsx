import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const prodotti = [
  {
    id: "addome",
    titolo: "Circuito Addome",
    tag: "Uomo & Donna",
    prezzo: "29",
    tagline: "Allena. Potenzia. Trasforma.",
    descrizione:
      "Il circuito addominale del Metodo Titan. Non solo plance — un attacco completo al core da angolazioni diverse, con progressione reale.",
    immagine:
      "https://metodo-titan.myshopify.com/cdn/shop/files/copertina-circuito-addome.png?v=1781692409",
    url: "https://metodo-titan.myshopify.com/products/circuito-addome-uomo-donna",
  },
  {
    id: "glutei",
    titolo: "Circuito Cosce e Glutei",
    tag: "Donna",
    prezzo: "29",
    tagline: "Forza. Tono. Femminilità.",
    descrizione:
      "Un circuito progressivo pensato per costruire glutei e cosce con intensità vera. Senza attrezzi complessi, con risultati che si vedono.",
    immagine:
      "https://metodo-titan.myshopify.com/cdn/shop/files/copertina-circuito-glutei.png?v=1781692386",
    url: "https://metodo-titan.myshopify.com/products/circuito-cosce-e-glutei-donna",
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="section-pad"
      style={{ backgroundColor: "var(--surface)" }}
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
              Shop
            </p>
            <h2
              className="font-archivo leading-tight mb-4"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
                color: "var(--text)",
              }}
            >
              Allenati da solo,{" "}
              <span style={{ color: "var(--green-cta)" }}>con metodo.</span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              Circuiti digitali pronti all&apos;uso. Scarica, seguili, senti la differenza.
            </p>
          </div>
        </FadeUp>

        {/* Griglia prodotti */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {prodotti.map((p, i) => (
            <FadeUp key={p.id} delay={0.1 + i * 0.1}>
              <article
                className="flex flex-col rounded-[20px] overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-base)",
                  border: "1px solid var(--hairline)",
                }}
              >
                {/* Immagine prodotto */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={p.immagine}
                    alt={p.titolo}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Contenuto */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  {/* Tag */}
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{
                      color: "var(--green-cta)",
                      fontFamily: "var(--font-hanken)",
                      fontWeight: 600,
                    }}
                  >
                    {p.tag}
                  </span>

                  {/* Titolo */}
                  <h3
                    className="font-archivo text-xl leading-snug"
                    style={{ color: "var(--text)" }}
                  >
                    {p.titolo}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--green-cta)",
                      fontFamily: "var(--font-hanken)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.tagline}
                  </p>

                  {/* Descrizione */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-hanken)",
                    }}
                  >
                    {p.descrizione}
                  </p>

                  {/* Prezzo + CTA */}
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className="font-headline"
                      style={{
                        fontSize: "1.75rem",
                        color: "var(--text)",
                        lineHeight: 1,
                      }}
                    >
                      {p.prezzo}€
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta"
                      style={{ height: "42px", fontSize: "0.78rem", padding: "0 1.25rem" }}
                    >
                      Acquista
                    </a>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

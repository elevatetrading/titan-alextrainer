"use client";

import { useRef, useState, useEffect } from "react";
import FadeUp from "@/components/ui/FadeUp";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>("[data-card]");
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - container.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(i: number) {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelectorAll<HTMLElement>("[data-card]")[i];
    if (card) container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }

  return (
    <section
      id="metodo"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Intro */}
      <div className="max-w-6xl mx-auto px-5">
        {/* Brand name — grande e centrato */}
        <FadeUp delay={0}>
        <p
          className="font-headline text-center mb-10"
          style={{
            fontSize: "clamp(2.75rem, 10vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Il Metodo{" "}
          <span style={{ color: "var(--green-cta)" }}>Titan</span>
        </p>
        </FadeUp>

        <FadeUp delay={0.1}>
        <div className="max-w-2xl mb-12">
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
        </FadeUp>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="hide-scrollbar"
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          gap: "1rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
        }}
      >
        {blocchi.map((b) => (
          <div
            key={b.numero}
            data-card
            style={{
              flexShrink: 0,
              width: "min(calc(100vw - 3rem), 520px)",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--hairline)",
              borderRadius: "16px",
              padding: "2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Numero */}
            <span
              className="font-headline leading-none"
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                color: "var(--green-cta)",
                opacity: 0.2,
              }}
            >
              {b.numero}
            </span>

            {/* Divisore */}
            <div style={{ height: "1px", backgroundColor: "var(--hairline)" }} />

            {/* Titolo */}
            <h3
              className="font-archivo"
              style={{
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                color: "var(--text)",
              }}
            >
              {b.titolo}
            </h3>

            {/* Testo */}
            {b.testo && (
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-hanken)",
                }}
              >
                {b.testo}
              </p>
            )}

            {/* Lista */}
            {b.lista && (
              <ul className="flex flex-col gap-3">
                {b.lista.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-hanken)",
                    }}
                  >
                    <span
                      className="mt-[7px] flex-shrink-0 rounded-full"
                      style={{
                        width: "5px",
                        height: "5px",
                        backgroundColor: "var(--green-cta)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Dot indicator */}
      <div
        className="flex items-center justify-center gap-2 mt-8"
        aria-label="Navigazione sezioni"
      >
        {blocchi.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Vai a ${blocchi[i].titolo}`}
            style={{
              width: active === i ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor:
                active === i ? "var(--green-cta)" : "var(--hairline)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 300ms ease, background-color 300ms ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

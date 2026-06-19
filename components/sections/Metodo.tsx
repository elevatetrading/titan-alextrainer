"use client";

import { useRef, useState, useEffect } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const bronzoPalette = {
  primary: '#261808',
  secondary: '#C8913A',
  accent: '#F0C860',
};

const blocchi = [
  {
    numero: "01",
    titolo: "Perché Titan",
    testo:
      "Il nome non è casuale. Titan è solidità — fisica e mentale. Il percorso che costruiamo insieme non punta all'estetica: punta a farti reggere, qualunque cosa ti aspetti fuori dalla palestra.",
  },
  {
    numero: "02",
    titolo: "Come funziona",
    testo:
      "Sessioni brevi, intense, costruite sui tuoi orari. Nessuna scheda generica: ogni settimana si adatta a dove sei e a dove vuoi arrivare. Guida concreta, zero prediche.",
  },
  {
    numero: "03",
    titolo: "Cosa cambia",
    lista: [
      "Energia reale a fine giornata",
      "Testa più lucida sotto pressione",
      "Postura e tono che si vedono",
      "Una routine che non rompi dopo due settimane",
    ],
  },
  {
    numero: "04",
    titolo: "È per te se",
    lista: [
      "Hai l'agenda piena e non vuoi che la salute sia l'ultima voce",
      "Vuoi risultati senza perdere ore in palestra",
      "Cerchi un metodo serio, non un personal trainer qualunque",
    ],
  },
];

export default function Metodo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isDesktop) return;
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>(".metodo-card-wrapper");
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
  }, [isDesktop]);

  function goTo(i: number) {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelectorAll<HTMLElement>(".metodo-card-wrapper")[i];
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
        <h2
          className="font-headline text-center mb-5"
          style={{
            fontSize: "clamp(2.75rem, 10vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Il Metodo{" "}
          <span style={{ color: "var(--green-cta)" }}>Titan</span>
        </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
        <p
          className="mb-12"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-hanken)",
            fontSize: "1.0625rem",
            lineHeight: "1.65",
            maxWidth: "560px",
            marginBottom: "3rem",
          }}
        >
          Quando il corpo regge, reggono le decisioni, lo stress e le giornate
          che non finiscono mai.
        </p>
        </FadeUp>
      </div>

      {/* Carousel su mobile, blocchi verticali su desktop */}
      <div
        ref={scrollRef}
        className="hide-scrollbar"
        style={{
          display: "flex",
          flexDirection: isDesktop ? "column" : "row",
          overflowX: isDesktop ? "visible" : "auto",
          scrollSnapType: isDesktop ? "none" : "x mandatory",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          gap: "1rem",
          paddingLeft: isDesktop ? 0 : "1.25rem",
          paddingRight: isDesktop ? 0 : "1.25rem",
          maxWidth: isDesktop ? "72rem" : "none",
          margin: isDesktop ? "0 auto" : undefined,
          paddingTop: isDesktop ? "0.5rem" : undefined,
        }}
      >
        {blocchi.map((b, i) => (
          <BorderRotate
            key={b.numero}
            className="metodo-card-wrapper"
            borderWidth={1}
            borderRadius={16}
            backgroundColor="var(--surface)"
            animationMode="rotate-on-hover"
            animationSpeed={6}
            gradientColors={bronzoPalette}
            style={{
              flexShrink: isDesktop ? 1 : 0,
              width: isDesktop ? "100%" : "min(calc(100vw - 3rem), 520px)",
              scrollSnapAlign: isDesktop ? "none" : "start",
              scrollSnapStop: isDesktop ? undefined : "always",
            }}
          >
          <div
            style={{
              padding: "2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              minHeight: "260px",
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

            {/* Indicatore scorri — solo slide 1-3, solo mobile */}
            {i < blocchi.length - 1 && !isDesktop && (
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: 0.45,
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-hanken)",
                    fontWeight: 600,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  Scorri
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="var(--text-muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          </BorderRotate>
        ))}
      </div>

      {/* Dot indicator — solo mobile */}
      {!isDesktop && <div
        className="flex items-center justify-center gap-2 mt-8"
        aria-label="Navigazione sezioni"
      >
        {blocchi.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Vai a ${blocchi[i].titolo}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: active === i ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  active === i ? "var(--green-cta)" : "var(--hairline)",
                transition: "width 300ms ease, background-color 300ms ease",
              }}
            />
          </button>
        ))}
      </div>}
    </section>
  );
}

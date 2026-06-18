"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);
  // Ref per evitare stale closure nell'observer
  const state = useRef({ pastHero: false, nearFooter: false });

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.getElementById("site-footer");
    if (!hero || !footer) return;

    function sync() {
      setVisible(state.current.pastHero && !state.current.nearFooter);
    }

    // Hero — scroll event (più affidabile dell'observer al top su iOS rubber-band)
    function onScroll() {
      state.current.pastHero = hero.getBoundingClientRect().bottom < 0;
      sync();

      // Compact: si rimpicciolisce scrollando verso su
      const y = window.scrollY;
      if (y < lastScrollY.current - 8) setCompact(true);
      else if (y > lastScrollY.current + 8) setCompact(false);
      lastScrollY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Footer — IntersectionObserver con 500px di anticipo
    // rootMargin "0px 0px 500px 0px" espande il viewport di 500px in basso:
    // il footer risulta "intersecting" già 500px prima di entrare nello schermo.
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        state.current.nearFooter = entry.isIntersecting;
        sync();
      },
      { rootMargin: "0px 0px 500px 0px", threshold: 0 }
    );
    footerObserver.observe(footer);

    return () => {
      window.removeEventListener("scroll", onScroll);
      footerObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="md:hidden fixed left-0 right-0"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
        transform: visible ? "translateY(0)" : "translateY(calc(100% + 4rem))",
        transition: visible
          ? "transform 520ms cubic-bezier(0.34, 1.4, 0.64, 1)"
          : "transform 300ms ease-in",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#contatti"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--green-cta)",
          color: "var(--on-cta)",
          textDecoration: "none",
          fontFamily: "var(--font-archivo)",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          width: compact ? "130px" : "100%",
          height: "56px",
          borderRadius: "10px",
          fontSize: compact ? "0.75rem" : "0.875rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          boxShadow: "0 6px 28px rgba(0,0,0,0.45)",
          transition: "width 350ms cubic-bezier(0.4, 0, 0.2, 1), font-size 200ms ease",
        }}
      >
        {compact ? "PRENOTA" : "Richiedi la tua lezione gratuita"}
      </a>
    </div>
  );
}

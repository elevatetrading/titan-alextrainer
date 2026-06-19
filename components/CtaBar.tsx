"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);
  const contattiY = useRef<number>(Infinity);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contatti = document.getElementById("contatti");
    if (!hero || !contatti) return;

    function refreshContattiY() {
      contattiY.current =
        contatti!.getBoundingClientRect().top + window.scrollY;
    }
    refreshContattiY();

    function update() {
      const pastHero = hero!.getBoundingClientRect().bottom < 0;
      const vh = document.documentElement.clientHeight;
      const atContact = window.scrollY >= contattiY.current - vh - 120;
      const cookieBanner = document.querySelector(
        '[role="dialog"][aria-label="Cookie policy"]'
      );
      setVisible(pastHero && !atContact && !cookieBanner);
    }

    function onScroll() {
      update();
      const y = window.scrollY;
      if (y < lastScrollY.current - 8) setCompact(true);
      else if (y > lastScrollY.current + 8) setCompact(false);
      lastScrollY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refreshContattiY, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refreshContattiY);
    };
  }, []);

  // Nessun container: solo il bottone fixed centrato.
  // left:50% + translateX(-50%) = centrato senza nessun wrapper.
  // Quando nascosto scende di 100%+safe-area — completamente fuori schermo.
  return (
    <a
      href="#contatti"
      className="md:hidden fixed"
      style={{
        zIndex: 50,
        left: "50%",
        bottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(175deg, #FFF0A0 0%, #F0C040 8%, #D09020 22%, #A06810 45%, #C08828 68%, #E8B840 85%, #FDE898 100%)",
        boxShadow: "0 0 0 1px rgba(255,210,80,0.3), 0 3px 24px rgba(170,100,10,0.6), 0 8px 48px rgba(140,80,0,0.35), inset 0 2px 0 rgba(255,248,160,0.7), inset 0 -1.5px 0 rgba(70,35,0,0.5)",
        color: "var(--on-cta)",
        textDecoration: "none",
        fontFamily: "var(--font-archivo)",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        height: "52px",
        borderRadius: "8px",
        fontSize: "0.75rem",
        overflow: "hidden",
        width: compact ? "130px" : "min(calc(100vw - 3rem), 310px)",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(calc(100% + 2.5rem + env(safe-area-inset-bottom, 0px)))",
        transition: visible
          ? "transform 480ms cubic-bezier(0.34, 1.4, 0.64, 1), width 380ms cubic-bezier(0.4, 0, 0.2, 1)"
          : "transform 280ms ease-in, width 380ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: visible ? "auto" : "none",
        position: "fixed",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          letterSpacing: "0.06em",
          opacity: compact ? 0 : 1,
          transition: "opacity 220ms ease",
          pointerEvents: "none",
        }}
      >
        Richiedi la tua lezione gratuita
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          letterSpacing: "0.1em",
          opacity: compact ? 1 : 0,
          transition: "opacity 220ms ease",
          pointerEvents: "none",
        }}
      >
        PRENOTA
      </span>
    </a>
  );
}

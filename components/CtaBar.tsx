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
        backgroundColor: "var(--green-cta)",
        color: "var(--on-cta)",
        textDecoration: "none",
        fontFamily: "var(--font-archivo)",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "0 1rem",
        height: "52px",
        borderRadius: "8px",
        fontSize: "0.75rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(calc(100% + 2.5rem + env(safe-area-inset-bottom, 0px)))",
        transition: visible
          ? "transform 480ms cubic-bezier(0.34, 1.4, 0.64, 1)"
          : "transform 280ms ease-in",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {compact ? "PRENOTA" : "Richiedi la tua lezione gratuita"}
    </a>
  );
}

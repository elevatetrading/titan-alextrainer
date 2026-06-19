"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);
  // Absolute Y of #contatti top in the document (computed once, refreshed on resize)
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

      // clientHeight is stable on iOS Safari (doesn't fluctuate with address bar).
      // Buffer: hide the bar 120px BEFORE contatti enters viewport — prevents
      // the iOS address-bar-resize causing a momentary re-appearance.
      const vh = document.documentElement.clientHeight;
      const atContact = window.scrollY >= contattiY.current - vh - 120;

      setVisible(pastHero && !atContact);
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
          transition:
            "width 350ms cubic-bezier(0.4, 0, 0.2, 1), font-size 200ms ease",
        }}
      >
        {compact ? "PRENOTA" : "Richiedi la tua lezione gratuita"}
      </a>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const footer = document.getElementById("site-footer");
      if (!hero || !footer) return;

      const vh = window.innerHeight;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;

      // Visibile solo dopo la hero E quando il footer è ancora lontano 160px
      const afterHero = heroBottom < 0;
      const beforeFooter = footerTop > vh + 160;

      setVisible(afterHero && beforeFooter);

      // Compact: scrollando su
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current - 8) setCompact(true);
      else if (currentY > lastScrollY.current + 8) setCompact(false);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // check iniziale
    return () => window.removeEventListener("scroll", update);
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
        {compact ? "PRENOTA" : "Richiedi la tua lezione"}
      </a>
    </div>
  );
}

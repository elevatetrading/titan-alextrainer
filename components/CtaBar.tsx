"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    // Mostra dopo la hero
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);

    // Compatta mentre scendi, piena mentre risali
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 8) {
        setCompact(true);
      } else if (currentY < lastScrollY.current - 8) {
        setCompact(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 300ms ease",
        paddingBottom: compact
          ? "calc(0.75rem + env(safe-area-inset-bottom, 0px))"
          : "env(safe-area-inset-bottom, 0px)",
        paddingLeft: compact ? "1.25rem" : "0",
        paddingRight: compact ? "1.25rem" : "0",
        paddingTop: compact ? "0.5rem" : "0",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#contatti"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "var(--green-cta)",
          color: "var(--on-cta)",
          fontFamily: "var(--font-archivo)",
          fontWeight: 700,
          fontSize: compact ? "0.75rem" : "0.875rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          height: compact ? "44px" : "56px",
          borderRadius: compact ? "10px" : "0px",
          boxShadow: compact ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
          transition:
            "height 250ms ease, border-radius 250ms ease, font-size 200ms ease, box-shadow 250ms ease",
        }}
      >
        Richiedi la tua lezione
      </a>
    </div>
  );
}

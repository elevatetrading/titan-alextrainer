"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 8) setCompact(true);
      else if (currentY < lastScrollY.current - 8) setCompact(false);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    /* Wrapper: gestisce lo slide-up dal basso con spring */
    <div
      className="md:hidden fixed left-0 right-0"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
        /* slide-up con overshoot leggero: parte da sotto lo schermo */
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
        {compact ? "PRENOTA" : "Richiedi la tua lezione"}
      </a>
    </div>
  );
}

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
    /* Wrapper trasparente — non tocca mai i bordi dello schermo */
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 300ms ease",
        padding: compact
          ? "0.5rem 1.25rem calc(0.75rem + env(safe-area-inset-bottom, 0px))"
          : "0.5rem 1rem calc(0.625rem + env(safe-area-inset-bottom, 0px))",
        backgroundColor: "transparent",
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
          fontSize: compact ? "0.75rem" : "0.9rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          height: compact ? "42px" : "54px",
          borderRadius: "10px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          transition: "height 250ms ease, font-size 200ms ease",
        }}
      >
        Richiedi la tua lezione
      </a>
    </div>
  );
}

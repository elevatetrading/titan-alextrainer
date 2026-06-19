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

  return (
    <div
      className="md:hidden fixed left-0 right-0 bottom-0"
      style={{
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0.75rem 1rem",
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: visible
          ? "transform 480ms cubic-bezier(0.34, 1.4, 0.64, 1)"
          : "transform 280ms ease-in",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href="#contatti"
        style={{
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
          padding: "0 0.875rem",
          height: "52px",
          borderRadius: "8px",
          fontSize: compact ? "0.75rem" : "0.875rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
          transition: "font-size 200ms ease",
        }}
      >
        {compact ? "PRENOTA" : "Richiedi la tua lezione gratuita"}
      </a>
    </div>
  );
}

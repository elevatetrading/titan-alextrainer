"use client";

import { useEffect, useState } from "react";

export default function CtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "var(--green-cta)",
      }}
      aria-hidden={!visible}
    >
      <a
        href="#contatti"
        className="flex items-center justify-center w-full"
        style={{
          height: "56px",
          color: "var(--on-cta)",
          fontFamily: "var(--font-archivo)",
          fontWeight: 700,
          fontSize: "0.875rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Richiedi la tua lezione
      </a>
    </div>
  );
}

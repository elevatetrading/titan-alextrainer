"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#metodo", label: "Metodo" },
  { href: "#chi-ti-allena", label: "Chi ti allena" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#shop", label: "Shop" },
  { href: "#contatti", label: "Contatti" },
];

function Lines({ open }: { open: boolean }) {
  return (
    <>
      <span
        style={{
          display: "block",
          width: "24px",
          height: "1.5px",
          backgroundColor: "var(--text)",
          transformOrigin: "center",
          transform: open ? "rotate(45deg) translateY(6.5px)" : "none",
          transition: "transform 200ms ease",
        }}
      />
      <span
        style={{
          display: "block",
          width: "24px",
          height: "1.5px",
          backgroundColor: "var(--text)",
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "none",
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      />
      <span
        style={{
          display: "block",
          width: "24px",
          height: "1.5px",
          backgroundColor: "var(--text)",
          transformOrigin: "center",
          transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none",
          transition: "transform 200ms ease",
        }}
      />
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop header ── */}
      <header
        className="hidden md:block fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(10,12,11,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "none",
          transition: "background-color 280ms ease, border-color 280ms ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-ag.svg" alt="Titan — Alessandro Giua" height={36} style={{ filter: "brightness(0) invert(1)", display: "block" }} />
          </a>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-hanken)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="btn-cta"
              style={{ height: "44px", fontSize: "0.75rem", padding: "0 1.25rem" }}
            >
              Richiedi la tua lezione gratuita
            </a>
          </nav>
        </div>
      </header>

      {/* ── Mobile: logo AG — galleggia sull'hero, sparisce dopo scroll ── */}
      <a
        href="/"
        className="md:hidden fixed z-[60]"
        style={{
          top: "0.375rem",
          left: "0.5rem",
          textDecoration: "none",
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
          transition: "opacity 250ms ease",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-ag.svg" alt="Titan — Alessandro Giua" style={{ filter: "brightness(0) invert(1)", display: "block", height: "16px", width: "auto" }} />
      </a>

      {/* ── Mobile: hamburger — sempre visibile, nessuno sfondo ── */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed z-[60] flex flex-col justify-center gap-[5px]"
        style={{
          top: "0.875rem",
          right: "1rem",
          padding: "8px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
      >
        <Lines open={open} />
      </button>

      {/* ── Mobile: pannello menu ── */}
      <div
        className="md:hidden fixed left-0 right-0 z-[55] overflow-hidden"
        style={{
          top: 0,
          maxHeight: open ? "420px" : "0",
          backgroundColor: "var(--surface)",
          borderBottom: open ? "1px solid var(--hairline)" : "none",
          paddingTop: open ? "52px" : "0",
          transition: "max-height 300ms cubic-bezier(0.4,0,0.2,1), padding-top 300ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <nav className="flex flex-col py-4 px-5 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base border-b"
              style={{
                color: "var(--text)",
                borderColor: "var(--hairline)",
                fontFamily: "var(--font-hanken)",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setOpen(false)}
            className="btn-cta w-full mt-4"
          >
            Richiedi la tua lezione gratuita
          </a>
        </nav>
      </div>
    </>
  );
}

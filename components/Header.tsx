"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#metodo", label: "Metodo" },
  { href: "#chi-ti-allena", label: "Chi ti allena" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#contatti", label: "Contatti" },
];

function Lines({ open }: { open: boolean }) {
  return (
    <>
      <span
        className="block w-6 h-[1.5px] transition-all duration-200 origin-center"
        style={{
          backgroundColor: "var(--text)",
          transform: open ? "rotate(45deg) translateY(6.5px)" : "none",
        }}
      />
      <span
        className="block w-6 h-[1.5px] transition-all duration-200"
        style={{
          backgroundColor: "var(--text)",
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "none",
        }}
      />
      <span
        className="block w-6 h-[1.5px] transition-all duration-200 origin-center"
        style={{
          backgroundColor: "var(--text)",
          transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none",
        }}
      />
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Barra header — trasparente in cima, sparisce allo scroll ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(10,12,11,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "none",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition:
            "transform 380ms cubic-bezier(0.4,0,0.2,1), background-color 280ms ease, border-color 280ms ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="/"
            className="font-headline text-xl tracking-widest"
            style={{ color: "var(--text)", textDecoration: "none" }}
          >
            TITAN
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
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
              style={{ height: "38px", fontSize: "0.75rem", padding: "0 1.25rem" }}
            >
              Richiedi la tua lezione gratuita
            </a>
          </nav>

          {/* Hamburger dentro la barra (mobile) — sparisce con la barra */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            style={{
              opacity: hidden ? 0 : 1,
              pointerEvents: hidden ? "none" : "auto",
              transition: "opacity 150ms ease",
            }}
          >
            <Lines open={open} />
          </button>
        </div>
      </header>

      {/* ── Hamburger flottante — appare solo quando la barra è nascosta ── */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed flex flex-col justify-center gap-[5px] z-[60]"
        style={{
          top: "0.75rem",
          right: "1rem",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "rgba(10,12,11,0.72)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.07)",
          opacity: hidden ? 1 : 0,
          pointerEvents: hidden ? "auto" : "none",
          transition: "opacity 200ms ease",
        }}
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
      >
        <Lines open={open} />
      </button>

      {/* ── Pannello menu mobile ── */}
      <div
        className="md:hidden fixed left-0 right-0 z-[55] overflow-hidden"
        style={{
          top: 0,
          maxHeight: open ? "420px" : "0",
          backgroundColor: "var(--surface)",
          borderBottom: open ? "1px solid var(--hairline)" : "none",
          paddingTop: "56px",
          transition: "max-height 300ms cubic-bezier(0.4,0,0.2,1)",
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

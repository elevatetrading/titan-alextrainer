"use client";

import { useState } from "react";

const navLinks = [
  { href: "#metodo", label: "Metodo" },
  { href: "#chi-ti-allena", label: "Chi ti allena" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(10,12,11,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--hairline)",
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
              className="text-sm font-medium transition-colors"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
                textDecoration: "none",
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
            Prenota
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          <span
            className="block w-6 h-[1.5px] transition-all duration-200 origin-center"
            style={{
              backgroundColor: "var(--text)",
              transform: open
                ? "rotate(45deg) translateY(6.5px)"
                : "none",
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
              transform: open
                ? "rotate(-45deg) translateY(-6.5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          backgroundColor: "var(--surface)",
          borderBottom: open ? "1px solid var(--hairline)" : "none",
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
            Prenota
          </a>
        </nav>
      </div>
    </header>
  );
}

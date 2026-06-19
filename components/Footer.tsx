const navLinks = [
  { href: "#metodo", label: "Metodo" },
  { href: "#chi-ti-allena", label: "Chi ti allena" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#shop", label: "Shop" },
  { href: "#contatti", label: "Contatti" },
];

const legalLinks = [
  { href: "/privacy-policy.html", label: "Privacy Policy", external: false },
  { href: "/cookie-policy.html", label: "Cookie Policy", external: false },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16" style={{ paddingBottom: "calc(48px + env(safe-area-inset-bottom, 0px))" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand + NAP */}
          <div className="md:col-span-1">
            <p
              className="font-headline text-2xl tracking-widest mb-3"
              style={{ color: "var(--text)" }}
            >
              TITAN
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              Personal trainer a Olbia per chi guida un&apos;azienda.
            </p>
            <address
              className="not-italic flex flex-col gap-1.5 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              <span>Titan di Alessandro Giua</span>
              <span>Via Chieti 8 — 07026 Olbia (SS)</span>
              <span>P.IVA 03076840903</span>
              <a
                href="tel:+393445734327"
                className="underline underline-offset-2 transition-opacity hover:opacity-100"
                style={{ color: "var(--text-muted)", opacity: 0.8 }}
              >
                +39 344 573 4327
              </a>
            </address>
          </div>

          {/* Navigazione */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
                fontWeight: 600,
              }}
            >
              Navigazione
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-hanken)",
                    opacity: 0.8,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legale */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
                fontWeight: 600,
              }}
            >
              Legale
            </p>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-hanken)",
                    opacity: 0.8,
                    textDecoration: "none",
                  }}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-10 pt-6 border-t text-xs"
          style={{
            borderColor: "var(--hairline)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-hanken)",
            opacity: 0.6,
          }}
        >
          © 2026 Alessandro Giua — Personal trainer per imprenditori e imprenditrici
        </div>
      </div>
    </footer>
  );
}

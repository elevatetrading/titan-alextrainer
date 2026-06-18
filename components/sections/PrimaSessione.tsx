"use client";

import { useState } from "react";

const opzioni = ["Titan8", "Titan12", "Non so ancora"];

export default function PrimaSessione() {
  const [form, setForm] = useState({ nome: "", telefono: "", pacchetto: "" });
  const [gdpr, setGdpr] = useState(false);
  const [sent, setSent] = useState(false);

  const canSubmit = gdpr && form.nome.trim() !== "" && form.telefono.trim() !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const msg = [
      `Ciao Alessandro! Sono ${form.nome.trim()}, ti contatto dal sito alextrainer.it per richiedere la sessione gratuita.`,
      `Pacchetto di interesse: ${form.pacchetto || "Non specificato"}`,
      `Il mio telefono: ${form.telefono.trim()}`,
    ].join("\n");
    window.open(
      `https://wa.me/393445734327?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    height: "52px",
    backgroundColor: "rgba(10,12,11,0.5)",
    border: "1px solid var(--hairline)",
    color: "var(--text)",
    fontFamily: "var(--font-hanken)",
    borderRadius: "6px",
    padding: "0 1rem",
    fontSize: "1rem",
    outline: "none",
    width: "100%",
    transition: "border-color 150ms ease",
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--text-muted)",
    fontFamily: "var(--font-hanken)",
    fontWeight: 600,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  };

  return (
    <section
      id="contatti"
      className="section-pad"
      style={{
        background:
          "linear-gradient(160deg, var(--green-deep) 0%, var(--green-deep-2) 100%)",
      }}
    >
      <div className="max-w-lg mx-auto px-5">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{
            color: "var(--green-cta)",
            fontFamily: "var(--font-hanken)",
            fontWeight: 600,
          }}
        >
          Prima sessione gratuita
        </p>
        <h2
          className="font-archivo leading-tight mb-4"
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
            color: "var(--text)",
          }}
        >
          La prima sessione è gratis
        </h2>
        <p
          className="text-base leading-relaxed mb-10"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-hanken)",
          }}
        >
          Una sessione introduttiva, senza impegno. Vediamo da dove parti, cosa
          ti serve e se il metodo fa per te. Poi decidi tu.
        </p>

        {sent ? (
          <div
            className="rounded-xl p-7 text-center"
            style={{
              backgroundColor: "rgba(10,12,11,0.4)",
              border: "1px solid var(--hairline)",
            }}
          >
            <p
              className="font-archivo text-xl mb-2"
              style={{ color: "var(--text)" }}
            >
              Richiesta inviata.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              Ti rispondo a breve su WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" style={labelStyle}>
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                placeholder="Il tuo nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                style={inputStyle}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--green-cta)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--hairline)")
                }
              />
            </div>

            {/* Telefono */}
            <div className="flex flex-col gap-2">
              <label htmlFor="telefono" style={labelStyle}>
                Telefono
              </label>
              <input
                id="telefono"
                type="tel"
                required
                placeholder="+39 344 ..."
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                style={inputStyle}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--green-cta)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--hairline)")
                }
              />
            </div>

            {/* Pacchetto — pill selector */}
            <div className="flex flex-col gap-2">
              <span style={labelStyle}>Cosa ti interessa</span>
              <div className="flex flex-wrap gap-2">
                {opzioni.map((opt) => {
                  const selected = form.pacchetto === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          pacchetto: selected ? "" : opt,
                        })
                      }
                      className="px-4 py-2 rounded-md text-sm transition-all"
                      style={{
                        backgroundColor: selected
                          ? "var(--green-cta)"
                          : "rgba(10,12,11,0.5)",
                        color: selected ? "var(--on-cta)" : "var(--text-muted)",
                        border: `1px solid ${selected ? "var(--green-cta)" : "var(--hairline)"}`,
                        fontFamily: "var(--font-hanken)",
                        fontWeight: selected ? 600 : 400,
                        cursor: "pointer",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GDPR */}
            <div className="flex items-start gap-3">
              <input
                id="gdpr"
                type="checkbox"
                checked={gdpr}
                onChange={(e) => setGdpr(e.target.checked)}
                style={{
                  accentColor: "var(--green-cta)",
                  width: "16px",
                  height: "16px",
                  flexShrink: 0,
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor="gdpr"
                className="text-xs leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-hanken)",
                  cursor: "pointer",
                }}
              >
                Acconsento al trattamento dei dati personali ai sensi del Reg.
                UE 2016/679 (GDPR).{" "}
                <a
                  href="/privacy-policy.html"
                  className="underline underline-offset-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!canSubmit}
              className="btn-cta w-full mt-1"
              style={!canSubmit ? { opacity: 0.45, cursor: "not-allowed", transform: "none" } : undefined}
            >
              Richiedi su WhatsApp
            </button>
          </form>
        )}

        {/* Contatti diretti */}
        <div className="flex flex-col sm:flex-row gap-3 mt-7">
          <a
            href="tel:+393445734327"
            className="flex items-center justify-center gap-2 rounded-md text-sm flex-1 transition-opacity hover:opacity-80"
            style={{
              height: "52px",
              backgroundColor: "rgba(10,12,11,0.4)",
              border: "1px solid var(--hairline)",
              color: "var(--text)",
              fontFamily: "var(--font-hanken)",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2.5 3C2.5 2.448 2.948 2 3.5 2h1.818c.296 0 .556.194.637.477l.833 2.916a.667.667 0 0 1-.193.673L5.333 7.2c.913 1.855 2.463 3.373 4.334 4.267l1.24-1.323a.667.667 0 0 1 .677-.188l2.917.833A.667.667 0 0 1 15 11.5v1.5c0 .552-.448 1-1 1C6.834 14 2 9.166 2 3.5c0-.318.127-.622.293-.844L2.5 3Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chiama ora
          </a>
          <a
            href="https://wa.me/393445734327"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md text-sm flex-1 transition-opacity hover:opacity-80"
            style={{
              height: "52px",
              backgroundColor: "rgba(31,122,82,0.18)",
              border: "1px solid var(--green-cta)",
              color: "var(--text)",
              fontFamily: "var(--font-hanken)",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1C4.134 1 1 4.134 1 8c0 1.155.296 2.242.814 3.186L1 15l3.873-1.014A6.966 6.966 0 0 0 8 15c3.866 0 7-2.686 7-6s-3.134-6-7-6Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 7.5c.333-1.333 2.167-1.833 3-1 .5.5.5 1.333-.5 1.833C7 8.833 8 10 9.5 9.333"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
            Scrivi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "titan_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie policy"
      className="fixed bottom-0 left-0 right-0 z-[60] px-5 py-4 md:px-8"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--hairline)",
        paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-hanken)" }}
        >
          Questo sito non utilizza cookie di profilazione. Usa cookie tecnici
          necessari al funzionamento.{" "}
          <a
            href="/cookie-policy.html"
            className="underline underline-offset-2"
            style={{ color: "var(--text-muted)" }}
          >
            Cookie Policy
          </a>
        </p>
        <button
          onClick={accept}
          className="btn-cta flex-shrink-0"
          style={{ height: "44px", fontSize: "0.8125rem", padding: "0 1.5rem" }}
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}

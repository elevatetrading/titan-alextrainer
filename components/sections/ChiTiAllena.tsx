import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function ChiTiAllena() {
  return (
    <section
      id="chi-ti-allena"
      className="section-pad"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Foto ritratto Alessandro */}
          <FadeUp delay={0}>
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "3 / 4", maxHeight: "520px" }}
          >
            <Image
              src="/alex-ritratto.jpg"
              alt="Alessandro Giua — personal trainer a Olbia"
              fill
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          </FadeUp>

          {/* Bio */}
          <FadeUp delay={0.12}>
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--green-cta)",
                fontFamily: "var(--font-hanken)",
                fontWeight: 600,
              }}
            >
              Chi ti allena
            </p>
            <h2
              className="font-archivo leading-tight mb-7"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
                color: "var(--text)",
              }}
            >
              Alessandro Giua
            </h2>
            <div
              className="flex flex-col gap-4 text-base leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-hanken)",
              }}
            >
              <p>
                Mi chiamo Alessandro Giua, vivo a Olbia e alleno imprenditori e
                imprenditrici.
              </p>
              <p>
                Dopo anni tra sala pesi, studio sul campo e centinaia di ore al
                fianco delle persone, ho capito una cosa: chi guida
                un&apos;azienda ha bisogno di un metodo diverso. Diretto,
                concreto, senza fronzoli. Niente prediche, niente tempo
                sprecato.
              </p>
              <p>
                Lavoro fianco a fianco con founder, dirigenti e liberi
                professionisti: sessioni rapide ma intense, una routine
                sostenibile, strumenti per restare lucidi anche nelle giornate
                più dure.
              </p>
              <p>
                Mi trovi all&apos;Olbia Sporting Club e in sessioni private.
                Pochi clienti per volta, seguiti davvero.
              </p>
            </div>
          </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Trainer Olbia per Imprenditori | Alessandro Giua",
  description:
    "Personal trainer a Olbia per imprenditori e imprenditrici: allenamenti brevi e mirati, risultati concreti, prima sessione gratuita. Prenota su WhatsApp.",
  metadataBase: new URL("https://alextrainer.it"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Personal Trainer Olbia per Imprenditori | Alessandro Giua",
    description:
      "Personal trainer a Olbia per imprenditori e imprenditrici: allenamenti brevi e mirati, risultati concreti, prima sessione gratuita. Prenota su WhatsApp.",
    url: "https://alextrainer.it/",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Olbia per Imprenditori | Alessandro Giua",
    description:
      "Personal trainer a Olbia per imprenditori e imprenditrici: allenamenti brevi e mirati, risultati concreti, prima sessione gratuita. Prenota su WhatsApp.",
  },
  robots: { index: true, follow: true },
};

const schemaProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Titan di Alessandro Giua — Personal Trainer per Imprenditori",
  image: "https://alextrainer.it/img/alessandro-giua-trainer.jpg",
  url: "https://alextrainer.it/",
  telephone: "+393445734327",
  priceRange: "EEE",
  founder: {
    "@type": "Person",
    name: "Alessandro Giua",
    jobTitle: "Personal Trainer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Chieti 8",
    addressLocality: "Olbia",
    addressRegion: "SS",
    postalCode: "07026",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 40.9236, longitude: 9.4986 },
  areaServed: [
    { "@type": "City", name: "Olbia" },
    { "@type": "AdministrativeArea", name: "Gallura" },
    { "@type": "City", name: "Golfo Aranci" },
    { "@type": "City", name: "Arzachena" },
    { "@type": "City", name: "San Teodoro" },
  ],
  sameAs: [],
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Percorso di allenamento personalizzato per imprenditori",
  provider: { "@type": "Person", name: "Alessandro Giua" },
  offers: [
    { "@type": "Offer", name: "Titan8", price: "350", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Titan12", price: "450", priceCurrency: "EUR" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${archivo.variable} ${hanken.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaProfessionalService),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}

# SEO.md — Alessandro Giua / Titan

## Dominio e canonical
- Dominio ufficiale: alextrainer.it
- alessandrogitrainer.it -> 301 redirect verso alextrainer.it (stesso percorso).
- canonical di ogni pagina punta a https://alextrainer.it/...

## Strategia keyword (due livelli)
Le keyword gia posizionate ("personal trainer Olbia imprenditori") DEVONO rientrare nel nuovo copy (H1, title, primi 100 caratteri di body).
Livello 1 — Nicchia (arma principale, zero concorrenza locale): nessun competitor a Olbia presidia il segmento imprenditori.
Livello 2 — Generico locale (concorrenza reale: Limitless, Rebirth, marketplace): ci entriamo con l'angolo differenziante.

### Keyword primarie
- personal trainer Olbia
- personal trainer per imprenditori
- personal trainer imprenditrici
- allenamento per imprenditori Olbia
- personal trainer professionisti Olbia
- personal trainer privato Olbia

### Long-tail
- personal trainer per chi ha poco tempo Olbia
- allenamenti brevi ed efficaci per imprenditori
- percorso di allenamento personalizzato Olbia
- quanto costa un personal trainer a Olbia
- personal trainer Olbia Sporting Club
- fitness per dirigenti e manager Sardegna
- personal trainer Gallura
- sessione introduttiva gratuita personal trainer Olbia

### Keyword brand
- Alessandro Giua
- Alessandro Giua personal trainer
- Metodo Titan
- alextrainer

## Schema.org (JSON-LD)
Tipo: ProfessionalService. NO aggregateRating finche non ci sono recensioni reali. Collegare il Google Business Profile via sameAs (prioritario).

{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Titan di Alessandro Giua — Personal Trainer per Imprenditori",
  "image": "https://alextrainer.it/img/alessandro-giua-trainer.jpg",
  "url": "https://alextrainer.it/",
  "telephone": "+393445734327",
  "priceRange": "EEE",
  "founder": { "@type": "Person", "name": "Alessandro Giua", "jobTitle": "Personal Trainer" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Chieti 8",
    "addressLocality": "Olbia",
    "addressRegion": "SS",
    "postalCode": "07026",
    "addressCountry": "IT"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 40.9236, "longitude": 9.4986 },
  "areaServed": [
    {"@type": "City", "name": "Olbia"},
    {"@type": "AdministrativeArea", "name": "Gallura"},
    {"@type": "City", "name": "Golfo Aranci"},
    {"@type": "City", "name": "Arzachena"},
    {"@type": "City", "name": "San Teodoro"}
  ],
  "sameAs": ["GOOGLE_BUSINESS_PROFILE_URL", "INSTAGRAM_URL", "FACEBOOK_URL"]
}

Offer per i due percorsi:
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Percorso di allenamento personalizzato per imprenditori",
  "provider": {"@type": "Person", "name": "Alessandro Giua"},
  "offers": [
    {"@type": "Offer", "name": "Titan8", "price": "350", "priceCurrency": "EUR"},
    {"@type": "Offer", "name": "Titan12", "price": "450", "priceCurrency": "EUR"}
  ]
}

Da recuperare: URL Google Business Profile, Instagram, Facebook. Verificare coordinate geo esatte.

## Meta tag

### Home (/)
- title: Personal Trainer Olbia per Imprenditori | Alessandro Giua
- meta description: Personal trainer a Olbia per imprenditori e imprenditrici: allenamenti brevi e mirati, risultati concreti, prima sessione gratuita. Prenota su WhatsApp.
- Open Graph + Twitter Card: stessi valori, og:url = https://alextrainer.it/, og:locale = it_IT

### Privacy Policy (/privacy-policy.html)
- title: Privacy Policy | Alessandro Giua — index, follow

### Cookie Policy (/cookie-policy.html)
- title: Cookie Policy | Alessandro Giua — index, follow

## sitemap.xml
- https://alextrainer.it/                     priority 1.0
- https://alextrainer.it/privacy-policy.html   priority 0.3
- https://alextrainer.it/cookie-policy.html    priority 0.3
Inviare la sitemap a Google Search Console al go-live.

## robots.txt
Consentire tutto. Nessun Disallow o noindex in produzione. Riga: Sitemap: https://alextrainer.it/sitemap.xml

## Strategia content
Niente blog. Leva principale: Google Business Profile (post, foto, recensioni vere). Aggiungere aggregateRating allo schema solo con recensioni reali.

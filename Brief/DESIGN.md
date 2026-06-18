# DESIGN.md (ASTRATTO) — Alessandro Giua / Titan

> File ASTRATTO. Le scelte concrete (hex esatti, font specifici, componenti) vivono nell'Intermezzo Design su Claude Code (/nexus-design). La sezione "Scelte concrete approvate" va lasciata vuota qui e compilata dopo.

## Pattern progetto
- Pattern A — rifacimento da zero (copy, design, layout, immagini tutti nuovi).
- Si preservano solo: fatti, numeri, prezzi, metodo, valori del sito esistente (alextrainer.it).
- Nota SEO: il sito attuale posiziona su "personal trainer Olbia (imprenditori)". Le keyword rientrano nel copy nuovo — vedi SEO.md (Chat 2). Nessuna perdita di posizionamento voluta.

## Purpose primario
- Categoria: A — Conversion
- Motivazione: tutto spinge a un'unica azione (richiedere la lezione / contatto WhatsApp). Servizio premium 350-450 euro/mese: l'obiettivo e il lead qualificato.

## Target principale
- Chi: imprenditori e imprenditrici, ~35-55 anni
- Geografia: Olbia e Gallura (Sardegna)
- Dispositivo prevalente: MOBILE (focus dichiarato 80-90%). Desktop derivato, mai il contrario.
- Urgenza: valutativo-deciso (non impulsivo, ma con poco tempo)
- Lingua/cultura: italiano nativo

## Concept scelto
- Nome: Titan — Solido
- Mood (3 parole): forte, essenziale, diretto
- Tono di voce: deciso e concreto — metodo, non motivazione. Parla da pari a un imprenditore.

## Direzione estetica (astratta, da raffinare con /nexus-design)
- Approccio hero: informativo con forte presenza fisica (foto della persona dominante) + tocco atmosferico cinematico
- Approccio servizi (Il Metodo): narrativo a blocchi verticali — NO griglia di card
- Approccio testimonianze: dinamico (carosello swipe su mobile) — contenuti provvisori, da sostituire con recensioni reali
- Approccio fotografico: realistico fotografico, ambientato (palestra / Olbia Sporting Club), luce curata, contrasto deciso. Deve trasmettere solidita e serieta, non sforzo/sudore da bodybuilding.
- Atmosfera tipografica: carattere con personalita e peso per i titoli (forti, leggibili, "solidi"); corpo neutro e pulito. NO font da template generico. NO monospace (regola globale Nexus).
- Atmosfera cromatica: base NERA + accento VERDE profondo e desaturato (verde bottiglia / militare / smeraldo scuro). VINCOLO CLIENTE: Ale ha scelto nero e verde. Sfumature/hex esatti -> /nexus-design.
- Energia CTA: DOMINANTE (purpose = Conversion). Niente CTA sussurrate o decorative.

## Archetipo animazione
- Dominante: A — Diretto e Pulito (hero statica, CTA forte, landing pulita)
- Mix 70/30: 30% B — Cinematico Minimal nel trattamento (foto curata, ritmo calmo, spazio). Motivo: A puro rischia l'effetto "sito da idraulico"; il tocco cinematico porta al livello premium che il target merita. Resta foto ferma — niente video, niente scroll narrativo complesso.
- Tipo hero direzionale: atmosferico/informativo con foto persona dominante (componente specifico -> Claude Code)

## Mobile-first (vincolo forte)
- Progettazione mobile-first reale: sezioni verticali, foto hero verticale, tap target ampi.
- Barra CTA fissa in basso su mobile (compare dopo la hero): azione sempre a portata di pollice.
- Fluido e ordinato: sezioni nette una sotto l'altra, scroll che respira, transizioni morbide.

## Note asset / foto
- Foto reale di Ale NON ancora disponibile -> hero con placeholder in attesa.
- Da chiedere ad Ale: 1 foto HERO verticale, alta risoluzione (lato lungo >= 2000px), JPEG, braccia incrociate + sorriso, ambientata; 1 foto RITRATTO diversa per "Chi ti allena".
- Niente illustrazioni, niente stock photo, niente AI sul volto reale del cliente.

## Banlist specifica del progetto
- Cromatica: NO verde fluo/acido/lime (cliche integratori-palestra-energy drink). NO viola.
- Cliche di settore: NO bilancieri/manubri come decorazione, NO foto di sudore/sforzo da bodybuilding, NO stock photo fitness, NO before/after da palestra.
- Copy/contenuti: NO claim numerici inventati (es. +30% di fatturato), NO recensioni finte spacciate per reali in produzione. NO eccellenza/passione/qualita.
- Layout: NO griglie 2x2 di card, NO hero centrato generico con bottone blu.

## Direzione per Claude Code
- Tono generale del codice: minimal solido + tocco cinematico (scuro, essenziale, premium).
- Filtri obbligatori: Purpose = Conversion -> CTA dominante; mobile-first reale; rispetta banlist globale (no monospace, no font generici) + banlist progetto; colori vincolati a nero + verde, non introdurre altri colori.
- Cosa Claude Code DEVE proporre nell'Intermezzo (/nexus-design): 3 direzioni palette nero+verde, 3 direzioni tipografia, 3 direzioni energia/stile CTA (tutte dominanti), 3 direzioni macro-layout sezioni.

## Scelte concrete approvate
> Compilata via Intermezzo Design (eseguito a mano, /nexus-design non installato) — 18 giugno 2026. Approvata da Ale tramite Nexus.

### a. Palette — Verde Bottiglia / British Racing (nero + verde, sobrio/premium freddo)
Solo nero + verde profondo desaturato + neutri di supporto. Nessun altro colore. Near-black (non nero puro) per resa su OLED mobile.

| Ruolo | Hex | Uso |
|---|---|---|
| `--bg-base` | `#0A0C0B` | Sfondo principale (near-black caldo-cool) |
| `--surface` | `#0F1311` | Fasce/sezioni surface, header |
| `--surface-2` | `#141815` | Card a elevazione leggera |
| `--green-cta` | `#1F7A52` | CTA primaria — **accento dominante** |
| `--green-cta-hover` | `#248C5E` | Hover/active CTA (lieve schiarire) |
| `--green-deep` | `#0E3B2A` | Atmosfera, gradienti, fasce full-bleed |
| `--green-deep-2` | `#0A2C20` | Estremo scuro dei gradienti verde |
| `--text` | `#F2F4F1` | Testo primario (bianco freddo) |
| `--text-muted` | `#97A29B` | Sottotitoli / label |
| `--hairline` | `#202622` | Bordi sottili / divisori |
| `--on-cta` | `#06120D` | Testo near-black sopra il verde CTA |

Vincoli rispettati: NO verde fluo/acido/lime, NO viola, NO blu #3B82F6, nessun colore oltre nero+verde+neutri.

### b. Tipografia — Archivo (titoli) + Hanken Grotesk (corpo)
Titoli con peso e personalità ("solidi/monumentali"); corpo neutro pulitissimo, ottimo su mobile. No monospace. Nessun font da banlist. Entrambi via `next/font/google`.

| Elemento | Font | Peso / trattamento |
|---|---|---|
| Logo + H1 hero ("TITAN", headline) | **Archivo Expanded** (`next/font/google` → `Archivo_Expanded`) | 800–900, MAIUSCOLO, tracking leggermente negativo |
| H2 / H3 sezioni | **Archivo** (`Archivo`) | 700–800 |
| Numeri "Prove rapide" (count-up) | **Archivo Expanded** | 800, colore `--green-cta` |
| Corpo / paragrafi | **Hanken Grotesk** (`Hanken_Grotesk`) | 400 (body), 500 (lead/label) |
| Enfasi inline / micro-label | **Hanken Grotesk** | 600 |

Nota tecnica: usare `Archivo_Expanded` come famiglia separata per le headline monumentali; se un peso manca, ripiegare su `Archivo` width normale 800 — non introdurre font alternativi senza tornare all'Intermezzo.

### c. Energia / stile CTA — Massa solida
Dominante, coerente con il purpose Conversion. Il premium arriva da foto/atmosfera, non da effetti.

- **Primaria**: blocco verde pieno `--green-cta`, testo `--on-cta` in **Archivo 700 maiuscolo**, radius `6px`, altezza ~56–58px mobile, padding generoso, **full-width su mobile**. Hover/active: bg `--green-cta-hover` + `translateY(-2px)`, transizione ~150ms. Nessun glow, nessun gradiente sul bottone.
- **Secondaria**: testuale (no fill), testo `--text`/verde con freccia `↓`, fa scroll al Metodo (come da WIREFRAME hero).
- **Barra CTA fissa in basso (solo mobile)**: compare dopo la hero, blocco verde pieno full-width, rispetta `safe-area-inset-bottom`. Azione sempre a portata di pollice.

### d. Macro-layout sezioni — Fasce alternate full-bleed
Sezioni edge-to-edge che alternano nero base e fasce verde-profondo/surface, separazioni nette, "scroll che respira". Transizioni solo fade/reveal soft (no parallax, no scroll narrativo complesso — Archetipo A 70%). Il 30% cinematico vive nel trattamento foto.

Sequenza fondali (8 sezioni del SITEMAP/WIREFRAME):
1. **Hero** — `--bg-base`, foto verticale dominante + sfumatura nera in basso, headline Archivo Expanded sovrapposta.
2. **Prove rapide** — fascia `--green-deep`, numeri grandi verde + label, count-up (salta se numeri reali assenti).
3. **Il Metodo Titan** — `--bg-base`, blocchi verticali **asimmetrici** (numero grande Archivo Expanded + testo offset). NO griglia di card.
4. **Chi ti allena** — `--surface`, foto ritratto sopra + testo sotto (mobile).
5. **Scegli il tuo Titan** — `--bg-base`, **2 card prezzi morbide** (radius ~16–20px), Titan12 sollevata + badge "Più vantaggioso".
6. **Le voci** — fascia `--green-deep`, **carosello swipe** orizzontale (un dito), card recensione morbide.
7. **La prima sessione è gratis** — **full-bleed verde** (`--green-deep`→`--green-deep-2`), form max 4 campi + bottoni `tel:` e `wa.me` grandi.
8. **Footer** — `--surface`, colonne impilate su mobile, NAP + schema LocalBusiness.

Scala radius: elementi solidi/CTA `6px`; card prezzi e recensioni morbide `16–20px`. Spaziatura: padding verticale generoso (mobile ~64–80px, desktop ~120–160px).

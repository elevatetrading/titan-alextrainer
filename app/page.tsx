import Header from "@/components/Header";
import CtaBar from "@/components/CtaBar";
import CookieBanner from "@/components/CookieBanner";
import Hero from "@/components/sections/Hero";
import ProveRapide from "@/components/sections/ProveRapide";
import Metodo from "@/components/sections/Metodo";
import ChiTiAllena from "@/components/sections/ChiTiAllena";
import Prezzi from "@/components/sections/Prezzi";
import LeVoci from "@/components/sections/LeVoci";
import PrimaSessione from "@/components/sections/PrimaSessione";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* pb-16 su mobile lascia spazio alla barra CTA fissa in basso */}
      <main className="pb-16 md:pb-0">
        <Hero />
        <ProveRapide />
        <Metodo />
        <ChiTiAllena />
        <Prezzi />
        <LeVoci />
        <PrimaSessione />
      </main>
      <Footer />
      <CtaBar />
      <CookieBanner />
    </>
  );
}

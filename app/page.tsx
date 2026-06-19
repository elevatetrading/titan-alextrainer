import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Hero from "@/components/sections/Hero";
import ProveRapide from "@/components/sections/ProveRapide";
import Metodo from "@/components/sections/Metodo";
import ChiTiAllena from "@/components/sections/ChiTiAllena";
import Prezzi from "@/components/sections/Prezzi";
import LeVoci from "@/components/sections/LeVoci";
import Shop from "@/components/sections/Shop";
import PrimaSessione from "@/components/sections/PrimaSessione";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProveRapide />
        <Metodo />
        <ChiTiAllena />
        <Prezzi />
        <Shop />
        <LeVoci />
        <PrimaSessione />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

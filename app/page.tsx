import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Stats } from "@/components/componente";
import { Services } from "@/components/componente";
import { OperationalBase } from "@/components/componente";
import { Destination } from "@/components/componente";
import { CadenaSuministro } from "@/components/componente";
import { CanalesDirectos } from "@/components/componente";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Stats />
      <Services />
      <OperationalBase />
      <Destination />
      <CadenaSuministro />
      <CanalesDirectos />
      <Footer />
    </main>
  );
}

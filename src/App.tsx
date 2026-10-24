import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedProject } from "./components/FeaturedProject";
import { OutrosProjetos } from "./components/OutrosProjetos";
import { SuiteSection } from "./components/SuiteSection";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/**
 * Página única do portefólio.
 * A ordem das secções define o percurso de leitura:
 * quem é → prova (app publicada) → visão (suite) → serviços → contacto.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <OutrosProjetos />
        <SuiteSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

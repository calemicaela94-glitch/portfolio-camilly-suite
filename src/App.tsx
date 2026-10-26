import { Navbar } from "./components/Navbar";
import { OrcamentoProvider } from "./components/orcamento/contexto";
import { Hero } from "./components/Hero";
import { FeaturedProject } from "./components/FeaturedProject";
import { OutrosProjetos } from "./components/OutrosProjetos";
import { SuiteSection } from "./components/SuiteSection";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProvedorIdioma } from "./i18n/idioma";

/**
 * Página única do portefólio.
 * A ordem das secções define o percurso de leitura:
 * quem é → prova (app publicada) → visão (suite) → serviços → contacto.
 *
 * `ProvedorIdioma` envolve tudo: qualquer componente pode pedir os textos
 * no idioma ativo com `useTextos()`.
 */
export default function App() {
  return (
    <ProvedorIdioma>
      <OrcamentoProvider>
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
      </OrcamentoProvider>
    </ProvedorIdioma>
  );
}

import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <div className="App" data-testid="app-container">
        <Header />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Catalog />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;

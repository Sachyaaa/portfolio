import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 pt-24 sm:pt-28">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Metrics />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

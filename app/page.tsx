import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-primary">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

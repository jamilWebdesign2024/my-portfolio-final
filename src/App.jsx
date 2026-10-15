
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main
      className={`portfolio-shell relative min-h-screen overflow-x-clip ${
        isDark ? "theme-dark" : "theme-light"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.07),transparent_55%)]" />

      {/* Animated particles */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((current) => !current)}
      />

      {/* Portfolio sections */}
      
<div className="relative z-10">
  <Hero />
  <About />
  <Experience />
  <Skills />
  <Projects />
  <Contact />
</div>

<Footer />

    </main>
  );
}


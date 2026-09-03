import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar />

      <Hero
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
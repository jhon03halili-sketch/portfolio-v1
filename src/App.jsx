import {
  useState,
  useEffect,
} from "react";

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function Home({
  darkMode,
  setDarkMode,
}) {

  const location = useLocation();


  useEffect(() => {

    const sectionId =
      location.state?.scrollTo;

    if (!sectionId) {
      return;
    }


    // Wait for the Home page to render
    const timer = setTimeout(() => {

      const section =
        document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 100);


    return () => clearTimeout(timer);

  }, [location.state]);


  return (
    <>
      <Hero
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <About />

      <Skills />

      <Experience />
    </>
  );
}


function App() {

  const [darkMode, setDarkMode] =
    useState(true);


  useEffect(() => {

    document.body.classList.toggle(
      "light-mode",
      !darkMode
    );

  }, [darkMode]);


  return (
    <HashRouter>

      <div className="app">

        <Navbar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />


          {/* PROJECTS */}
          <Route
            path="/projects"
            element={<Projects />}
          />


          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>


        <Footer />

      </div>

    </HashRouter>
  );
}


export default App;
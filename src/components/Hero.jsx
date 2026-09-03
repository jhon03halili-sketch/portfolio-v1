import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Hero({ darkMode, setDarkMode }) {
  return (
    <section id="home" className="hero">

      {/* Animated cyan background */}
      <div className="hero-aurora" aria-hidden="true">
        <div className="aurora aurora-one"></div>
        <div className="aurora aurora-two"></div>
        <div className="aurora aurora-three"></div>
      </div>

      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label={
          darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>

      {/* Main hero content */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          HELLO, I'M
        </p>

        <h1 className="hero-name">
          Jhon Carlo Halili
        </h1>

        {/* Interactive titles */}
        <div className="hero-titles">

          <span className="hero-title">
            Frontend Developer
          </span>

          <span className="hero-title">
            Graphic Designer
          </span>

          <span className="hero-title">
            Digital Marketing VA
          </span>

        </div>

      </div>

      {/* View CV */}
      <a
        href="/jhon-carlo-halili-cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="hero-cv"
      >
        View CV
      </a>

      {/* Social links */}
      <div className="hero-socials">

        {/* GitHub */}
        <a
          href="https://github.com/jhon03halili-sketch"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="social-button"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jhon-carlo-halili-863375261/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="social-button"
        >
          <FaLinkedinIn />
        </a>

        {/* Email */}
        <a
          href="mailto:jhon03halili@gmail.com"
          aria-label="Email"
          className="social-button"
        >
          <FaEnvelope />
        </a>

      </div>

    </section>
  );
}

export default Hero;
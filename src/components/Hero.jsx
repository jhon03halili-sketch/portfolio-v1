import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Hero({ darkMode, setDarkMode }) {
  const roles = [
    "Frontend Developer",
    "Graphic Designer",
    "Digital Marketing VA",
  ];

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
        type="button"
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label={
          darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        aria-pressed={darkMode}
      >
        {darkMode ? (
          <FaMoon aria-hidden="true" />
        ) : (
          <FaSun aria-hidden="true" />
        )}
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
          {roles.map((role) => (
            <span
              className="hero-title"
              key={role}
            >
              {role}
            </span>
          ))}
        </div>

      </div>

      {/* View CV */}
      <a
        href="/jhon-carlo-halili-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-button"
        >
          <FaGithub aria-hidden="true" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jhon-carlo-halili-863375261/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-button"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>

{/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jhon03halili@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Send me an email using Gmail"
  title="Email me through Gmail"
  className="social-button"
>
  <FaEnvelope aria-hidden="true" />
</a>

      </div>

    </section>
  );
}

export default Hero;
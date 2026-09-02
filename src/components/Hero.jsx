function Hero() {
  return (
    <section id="home" className="hero">

      {/* Animated cyan background */}
      <div className="hero-aurora" aria-hidden="true">
        <div className="aurora aurora-one"></div>
        <div className="aurora aurora-two"></div>
        <div className="aurora aurora-three"></div>
      </div>

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
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>

            Frontend Developer

            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
          </span>

          <span className="hero-title">
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>

            Graphic Designer

            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
          </span>

          <span className="hero-title">
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>

            Digital Marketing VA

            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
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
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.1c.97 0 1.94.13 2.85.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="social-button"
        >
          <span className="linkedin-icon">
            in
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:jhon03halili@gmail.com"
          aria-label="Email"
          className="social-button"
        >
          <span className="email-icon">
            @
          </span>
        </a>

      </div>

    </section>
  );
}

export default Hero;
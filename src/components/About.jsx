function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Section label */}
        <div className="about-label">
          ABOUT ME
        </div>

        {/* Main content */}
        <div className="about-grid">

          {/* Left - Portrait */}
          <div className="about-photo">

            <div className="about-photo-frame">

              {/* Dark Mode Image */}
              <img
                src="/images/about-dark.png"
                alt="Jhon Carlo Halili"
                className="about-photo-dark"
              />

              {/* Light Mode Image */}
              <img
                src="/images/about-light.png"
                alt="Jhon Carlo Halili"
                className="about-photo-light"
              />

            </div>

          </div>

          {/* Right - About Content */}
          <div className="about-content">

            <p className="about-intro">
              I'm Jhon Carlo Halili, a creative and
              tech-focused professional who enjoys
              turning ideas into meaningful digital
              experiences.
            </p>

            <p>
              My work sits at the intersection of
              web development, social media management,
              and digital marketing. I enjoy building
              websites, creating visual content, and
              helping brands communicate their ideas
              clearly online.
            </p>

            <p>
              I'm continuously learning, experimenting,
              and improving my skills with a focus on
              creating work that is both functional and
              visually engaging.
            </p>

          </div>

        </div>

        {/* Focus areas */}
        <div className="about-focus">

          {/* Web Development */}
          <div className="focus-card">
            <span className="focus-number">
              01
            </span>

            <h3>
              Web Development
            </h3>

            <p>
              Building responsive and interactive
              websites through personal projects,
              experimentation, and continuous learning.
            </p>
          </div>

          {/* Social Media Management */}
          <div className="focus-card">
            <span className="focus-number">
              02
            </span>

            <h3>
              Social Media Management
            </h3>

            <p>
              Creating visual content, managing social
              platforms, and helping brands communicate
              consistently online.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="focus-card">
            <span className="focus-number">
              03
            </span>

            <h3>
              Digital Marketing
            </h3>

            <p>
              Supporting brands through content, email
              marketing, funnels, SEO, and other digital
              strategies.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
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

          {/* Left */}
          <div className="about-heading">

            <h2>
              Building.
              <br />
              Designing.
              <br />
              Creating.
            </h2>

          </div>

          {/* Right */}
          <div className="about-content">

            <p className="about-intro">
              I'm Jhon Carlo Halili, a creative and
              tech-focused professional who enjoys
              turning ideas into meaningful digital
              experiences.
            </p>

            <p>
              My work sits at the intersection of
              frontend development, graphic design,
              and digital marketing. I enjoy building
              websites, creating visual content, and
              helping brands communicate their ideas
              clearly online.
            </p>

            <p>
              I'm continuously learning, experimenting,
              and improving my skills — with a focus on
              creating work that is both functional and
              visually engaging.
            </p>

          </div>

        </div>


        {/* Focus areas */}
        <div className="about-focus">

          <div className="focus-card">
            <span className="focus-number">
              01
            </span>

            <h3>
              Frontend Development
            </h3>

            <p>
              Building responsive and interactive
              websites with modern web technologies.
            </p>
          </div>


          <div className="focus-card">
            <span className="focus-number">
              02
            </span>

            <h3>
              Graphic Design
            </h3>

            <p>
              Creating visual content and digital
              experiences that communicate clearly.
            </p>
          </div>


          <div className="focus-card">
            <span className="focus-number">
              03
            </span>

            <h3>
              Digital Marketing
            </h3>

            <p>
              Supporting brands through content,
              social media, email, funnels, and SEO.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
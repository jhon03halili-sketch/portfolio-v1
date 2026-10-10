
import {
  FaArrowRight,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info-panel">
          <span className="contact-label">CONTACT</span>

          <h1>
            Get in
            <br />
            touch.
          </h1>

          <p className="contact-intro">
            Have a project in mind, an opportunity, or just
            want to say hello? I'd love to hear from you.
          </p>

          <div className="contact-links">
            {/* Email */}
            <a
              href="mailto:jhon03halili@gmail.com"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaEnvelope aria-hidden="true" />
              </span>

              <span className="contact-link-content">
                <small>EMAIL</small>
                <strong>jhon03halili@gmail.com</strong>
              </span>

              <FaArrowRight
                className="contact-link-arrow"
                aria-hidden="true"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/carlohalili_/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaInstagram aria-hidden="true" />
              </span>

              <span className="contact-link-content">
                <small>INSTAGRAM</small>
                <strong>@carlohalili_</strong>
              </span>

              <FaArrowRight
                className="contact-link-arrow"
                aria-hidden="true"
              />
            </a>

            {/* Messenger */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaFacebookMessenger aria-hidden="true" />
              </span>

              <span className="contact-link-content">
                <small>MESSENGER</small>
                <strong>Message Me</strong>
              </span>

              <FaArrowRight
                className="contact-link-arrow"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE / CLIENT INTAKE */}
        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span>HAVE A PROJECT?</span>

            <h2>
              Let's create
              <br />
              something great.
            </h2>
          </div>

          <div className="contact-intake">
            <p>
              Tell me about your project, your goals, and
              how I can help bring your ideas to life.
              Complete the intake form to get started.
            </p>

            <a
              href="https://forms.gle/2AHgar7aAXKWYUmi9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-submit"
            >
              <span>START YOUR PROJECT</span>
              <FaArrowRight aria-hidden="true" />
            </a>

            <span className="contact-intake-note">
              Opens the client intake form in a new tab.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

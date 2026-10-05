import {
  FaArrowRight,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info-panel">

          <span className="contact-label">
            CONTACT
          </span>

          <h1>
            Get in
            <br />
            touch.
          </h1>

          <p className="contact-intro">
            Have a project in mind, an opportunity,
            or just want to say hello? I'd love to
            hear from you.
          </p>

          <div className="contact-links">

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaEnvelope />
              </span>

              <span className="contact-link-content">
                <small>EMAIL</small>
                <strong>your@email.com</strong>
              </span>

              <FaArrowRight className="contact-link-arrow" />
            </a>


            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaLinkedinIn />
              </span>

              <span className="contact-link-content">
                <small>LINKEDIN</small>
                <strong>LinkedIn Profile</strong>
              </span>

              <FaArrowRight className="contact-link-arrow" />
            </a>


            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaInstagram />
              </span>

              <span className="contact-link-content">
                <small>INSTAGRAM</small>
                <strong>@yourusername</strong>
              </span>

              <FaArrowRight className="contact-link-arrow" />
            </a>


            {/* Messenger */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaFacebookMessenger />
              </span>

              <span className="contact-link-content">
                <small>MESSENGER</small>
                <strong>Message Me</strong>
              </span>

              <FaArrowRight className="contact-link-arrow" />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-form-panel">

          <div className="contact-form-heading">

            <span>HAVE A PROJECT?</span>

            <h2>
              Let's create
              <br />
              something great.
            </h2>

          </div>


          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>


              <div className="contact-field">
                <label htmlFor="email">
                  YOUR EMAIL
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>

            </div>


            <div className="contact-field">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                rows="7"
                placeholder="Tell me a little about your project..."
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND MESSAGE</span>

              <FaArrowRight />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
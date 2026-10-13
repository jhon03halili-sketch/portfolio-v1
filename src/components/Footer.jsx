
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#/" className="footer-logo">
              JC
            </a>

            <p>
              Frontend Developer · Digital Marketing VA
            </p>
          </div>

          <a href="#/contact" className="footer-cta">
            <span>LET'S WORK TOGETHER</span>

            <span
              className="footer-cta-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Jhon Carlo Halili
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jhon-carlo-halili-863375261/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Visit my LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/carlohalili_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Visit my Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/sh1ftty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Visit my Facebook"
            >
              <FaFacebook aria-hidden="true" />
            </a>

            {/* Email - Opens Gmail in a new tab */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jhon03halili@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              title="Send me an email"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

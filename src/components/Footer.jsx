import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookMessenger,
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

            <a
              href="#/"
              className="footer-logo"
            >
              JC
            </a>

            <p>
              Frontend Developer · Digital Marketing VA
            </p>

          </div>


          <a
            href="#/contact"
            className="footer-cta"
          >
            <span>LET'S WORK TOGETHER</span>

            <span className="footer-cta-arrow">
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


          <div className="footer-socials">

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Messenger"
            >
              <FaFacebookMessenger />
            </a>

            <a
              href="mailto:your@email.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>


          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
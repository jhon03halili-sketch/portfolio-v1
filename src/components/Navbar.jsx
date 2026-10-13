
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (sectionId) => {
    closeMenu();

    // If already on the homepage, scroll to the section
    if (location.pathname === "/") {
      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Navigate home first, then let the homepage handle scrolling
    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  const goHome = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: {
          scrollTo: "home",
        },
      });
    }
  };

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
          aria-label="Go to homepage"
        >
          JC
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          <button type="button" onClick={() => goToSection("home")}>
            Home
          </button>

          <button type="button" onClick={() => goToSection("about")}>
            About
          </button>

          <button type="button" onClick={() => goToSection("skills")}>
            Skills
          </button>

          <button type="button" onClick={() => goToSection("experience")}>
            Experience
          </button>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        <button type="button" onClick={goHome}>
          Home
        </button>

        <button type="button" onClick={() => goToSection("about")}>
          About
        </button>

        <button type="button" onClick={() => goToSection("skills")}>
          Skills
        </button>

        <button type="button" onClick={() => goToSection("experience")}>
          Experience
        </button>

        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

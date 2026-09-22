import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Chicken Things",
    category: "E-Commerce Website",

    description:
      "A mock e-commerce website built from scratch to showcase front-end development, interactive functionality, and responsive web design.",

    image: "/images/chicken-things.jpg",

    technologies: [
      {
        name: "HTML",
        icon: "/icons/html.png",
      },
      {
        name: "CSS",
        icon: "/icons/css.png",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.png",
      },
      {
        name: "GitHub",
        icon: "/icons/github.png",
      },
    ],

    link: "https://jhon03halili-sketch.github.io/boneless-chicken-mock-website-/",

    reverse: false,
  },

  {
    number: "02",
    title: "Beyond Sea Cabo",
    category: "Social Media Marketing",

    description:
      "Created and managed visual content for a luxury vacation rental brand, including social posts, carousels, reels, captions, and SEO-focused alt text.",

    image: "/images/beyondsea.png",

    technologies: [
      {
        name: "Instagram",
        icon: "/icons/instagram.png",
      },
      {
        name: "Canva",
        icon: "/icons/canva.png",
      },
      {
        name: "CapCut",
        icon: "/icons/capcut.png",
      },
      {
        name: "Google",
        icon: "/icons/google.png",
      },
    ],

    reverse: true,
  },

  {
    number: "03",
    title: "Gallo Pinto",
    category: "Social Media Management",

    description:
      "Created visual content and supported the brand's online presence through social media management, captions, and content development.",

    image: "/projects/gallo-pinto.png",

    technologies: [
      {
        name: "Instagram",
        icon: "/icons/instagram.png",
      },
      {
        name: "Facebook",
        icon: "/icons/facebook.png",
      },
      {
        name: "Canva",
        icon: "/icons/canva.png",
      },
    ],

    reverse: false,
  },

  {
    number: "04",
    title: "Aura Longevity",
    category: "E-Commerce & Marketing",

    description:
      "Supported e-commerce and marketing initiatives through landing pages, funnel development, email marketing, content, and digital strategy.",

    image: "/projects/aura-longevity.png",

    technologies: [
      {
        name: "Shopify",
        icon: "/icons/shopify.png",
      },
      {
        name: "Mailchimp",
        icon: "/icons/mailchimp.png",
      },
      {
        name: "GoHighLevel",
        icon: "/icons/gohighlevel.png",
      },
    ],

    reverse: true,
  },

  {
    number: "05",
    title: "Lead From Within Advisory",
    category: "Website Redesign",

    description:
      "Redesigned a coaching and advisory website in Squarespace with a focus on brand alignment, user experience, and SEO.",

    image: "/projects/lead-from-within.png",

    technologies: [
      {
        name: "Squarespace",
        icon: "/icons/squarespace.png",
      },
      {
        name: "SEO",
        icon: "/icons/google.png",
      },
      {
        name: "Web Design",
        icon: "/icons/wordpress.png",
      },
    ],

    reverse: false,
  },

  {
    number: "06",
    title: "Technical Portfolio",
    category: "Web Development",

    description:
      "A personal portfolio built from scratch to showcase technical development, digital marketing, design, and virtual assistance experience.",

    image: "/projects/portfolio.png",

    technologies: [
      {
        name: "React",
        icon: "/icons/react.png",
      },
      {
        name: "Vite",
        icon: "/icons/vscode.png",
      },
      {
        name: "CSS",
        icon: "/icons/css.png",
      },
    ],

    reverse: true,
  },
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const project = projects[currentProject];

  const goToPrevious = () => {
    setCurrentProject((current) =>
      current === 0
        ? projects.length - 1
        : current - 1
    );
  };

  const goToNext = () => {
    setCurrentProject((current) =>
      current === projects.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="projects-header">

          <div className="projects-label">
            PROJECTS
          </div>

          <h2>
            Selected work
          </h2>

          <p>
            A collection of digital experiences,
            websites, content, and marketing projects
            I've worked on.
          </p>

        </div>


        {/* =========================
            PROJECT NAVIGATION
        ========================= */}

        <div className="projects-navigation">

          <span className="projects-page">
            {project.number} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>


          <div className="projects-arrows">

            <button
              type="button"
              className="projects-arrow"
              onClick={goToPrevious}
              aria-label="Previous project"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              className="projects-arrow"
              onClick={goToNext}
              aria-label="Next project"
            >
              <FiArrowRight />
            </button>

          </div>

        </div>


        {/* =========================
            PROJECT SLIDE
        ========================= */}

        <article
          className={`project-slide ${
            project.reverse
              ? "project-slide-reverse"
              : ""
          }`}
        >

          {/* =========================
              PROJECT IMAGE
          ========================= */}

          <div className="project-slide-image">

            <img
              src={project.image}
              alt={project.title}
            />

          </div>


          {/* =========================
              PROJECT INFORMATION
          ========================= */}

          <div className="project-slide-content">

            <span className="project-slide-number">
              {project.number}
            </span>

            <h3>
              {project.title}
            </h3>

            <span className="project-slide-category">
              {project.category}
            </span>

            <p>
              {project.description}
            </p>


            {/* =========================
                TECHNOLOGY LOGOS
            ========================= */}

            <div className="project-slide-technologies">

              {project.technologies.map(
                (technology) => (

                  <div
                    key={technology.name}
                    className="project-slide-technology"
                    title={technology.name}
                  >

                    <img
                      src={technology.icon}
                      alt={technology.name}
                    />

                  </div>

                )
              )}

            </div>


            {/* =========================
                PROJECT LINK
            ========================= */}

            {project.link && (

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-slide-link"
              >
                Visit Project
                <FiArrowRight />
              </a>

            )}

          </div>

        </article>

      </div>
    </section>
  );
}

export default Projects;
import { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
} from "react-icons/fi";

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
        icon: "/icons/project-html.png",
      },
      {
        name: "CSS",
        icon: "/icons/project-css.png",
      },
      {
        name: "JS",
        icon: "/icons/js.png",
      },
      {
        name: "GitHub",
        icon: "/icons/github.png",
      },
    ],

    link:
      "https://jhon03halili-sketch.github.io/boneless-chicken-mock-website-/",

    reverse: false,
  },

  /* =========================
     BEYOND SEA CABO
  ========================= */

  {
    number: "02",
    title: "Beyond Sea Cabo",
    category: "Social Media Marketing",

    description:
      "Created and managed visual content for a luxury vacation rental brand, including social posts, carousels, reels, captions, and SEO-focused alt text.",

    technologies: [
      {
        name: "Instagram",
        icon: "/icons/ig.png",
      },
      {
        name: "Canva",
        icon: "/icons/canva1.png",
      },
      {
        name: "CapCut",
        icon: "/icons/capcut1.png",
      },
      {
        name: "Later",
        icon: "/icons/later2.png",
      },
    ],

    reverse: true,

    gallery: [
      {
        title: "CAROUSEL1",
        cover: "/beyondsea/159.png",
        images: [
          "/beyondsea/159.png",
          "/beyondsea/160.png",
          "/beyondsea/161.png",
          "/beyondsea/162.png",
          "/beyondsea/163.png",
          "/beyondsea/164.png",
          "/beyondsea/165.png"
        ],
      },

      {
        title: "STATIC POST",
        cover: "/beyondsea/static-post1.png",
        images: [
          "/beyondsea/static-post1.png",
        ],
      },

      {
        title: "CAROUSEL 2",
        cover: "/beyondsea/27.png",
        images: [
          "/beyondsea/27.png",
          "/beyondsea/28.png",
          "/beyondsea/29.png",
          "/beyondsea/30.png",
          "/beyondsea/31.png",
          "/beyondsea/32.png",
          "/beyondsea/33.png",
        ],
      },

      {
        title: "Sample 3",
        cover: "/beyondsea/129.png",
        images: [
          "/beyondsea/129.png",
          "/beyondsea/130.png",
          "/beyondsea/131.png",
          "/beyondsea/132.png",
          "/beyondsea/133.png",
          "/beyondsea/134.png",
          "/beyondsea/135.png",
        ],
      },

      {
        title: "TESTIMONIALS",
        cover: "/beyondsea/hailey.png",
        images: [
          "/beyondsea/hailey.png",
          "/beyondsea/michael.png",
          "/beyondsea/max.png",
          "/beyondsea/yuri.png",
          "/beyondsea/javier.png",
          "/beyondsea/mark.png",
          "/beyondsea/tosha.png",
        ],
      },

      {
        title: "Sample 4",
        cover: "/beyondsea/1.png",
        images: [
          "/beyondsea/1.png",
          "/beyondsea/2.png",
          "/beyondsea/3.png",
          "/beyondsea/4.png",
          "/beyondsea/5.png",
          "/beyondsea/6.png",
        ],
      },

      {
        title: "Sample 5",
        cover: "/beyondsea/168.png",
        images: [
          "/beyondsea/168.png",
          "/beyondsea/169.png",
          "/beyondsea/170.png",
          "/beyondsea/171.png",
        ],
      },

      {
        title: "STATIC POST 2",
        cover: "/beyondsea/static.png",
        images: [
          "/beyondsea/static.png",
        ],
      },

      /* =========================
         SPACE FOR SAMPLE 9
      ========================= */

      {
        title: "SAMPLE 6",
        cover: "/beyondsea/172.png",
        images: [
          "/beyondsea/172.png",
          "/beyondsea/173.png",
          "/beyondsea/174.png",
          "/beyondsea/175.png",
          "/beyondsea/176.png",
          "/beyondsea/177.png",
        ],
      },
    ],
  },

  /* =========================
     GALLO PINTO
  ========================= */

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

  /* =========================
     AURA LONGEVITY
  ========================= */

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

  /* =========================
     LEAD FROM WITHIN
  ========================= */

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

  /* =========================
     TECHNICAL PORTFOLIO
  ========================= */

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

  const [selectedGallery, setSelectedGallery] =
    useState(null);

  const [currentGallerySlide, setCurrentGallerySlide] =
    useState(0);

  const project = projects[currentProject];

  /* =========================
     PROJECT NAVIGATION
  ========================= */

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

  /* =========================
     OPEN GALLERY
  ========================= */

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentGallerySlide(0);
  };

  /* =========================
     CLOSE GALLERY
  ========================= */

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentGallerySlide(0);
  };

  /* =========================
     GALLERY NAVIGATION
  ========================= */

  const goToPreviousGallerySlide = () => {
    setCurrentGallerySlide((current) =>
      current === 0
        ? selectedGallery.images.length - 1
        : current - 1
    );
  };

  const goToNextGallerySlide = () => {
    setCurrentGallerySlide((current) =>
      current ===
      selectedGallery.images.length - 1
        ? 0
        : current + 1
    );
  };

  /* =========================
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }
    };

    if (selectedGallery) {
      document.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [selectedGallery]);

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
              PROJECT VISUAL
          ========================= */}

          <div
            className={`project-slide-visual ${
              project.gallery
                ? "project-slide-gallery"
                : ""
            }`}
          >

            {project.gallery ? (

              /* =========================
                 BEYOND SEA 3x3 GRID
              ========================= */

              <div className="project-gallery-grid">

                {project.gallery.map(
                  (gallery, index) => (

                    <button
                      type="button"
                      key={gallery.title}
                      className="project-gallery-thumbnail"
                      onClick={() =>
                        openGallery(gallery)
                      }
                      aria-label={`Open ${gallery.title}`}
                    >

                      <img
                        src={gallery.cover}
                        alt={gallery.title}
                      />

                      <span className="project-gallery-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                    </button>

                  )
                )}

              </div>

            ) : (

              <div className="project-slide-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

            )}

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


        {/* =========================
            GALLERY MODAL
        ========================= */}

        {selectedGallery && (

          <div
            className="project-gallery-modal-overlay"
            onClick={closeGallery}
          >

            <div
              className="project-gallery-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* CLOSE */}

              <button
                type="button"
                className="project-gallery-modal-close"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <FiX />
              </button>


              {/* TITLE */}

              <div className="project-gallery-modal-header">

                <span>
                  BEYOND SEA CABO
                </span>

                <h3>
                  {selectedGallery.title}
                </h3>

              </div>


              {/* IMAGE */}

              <div className="project-gallery-modal-image">

                <img
                  src={
                    selectedGallery.images[
                      currentGallerySlide
                    ]
                  }
                  alt={`${selectedGallery.title} slide ${
                    currentGallerySlide + 1
                  }`}
                />

              </div>


              {/* NAVIGATION */}

              <div className="project-gallery-modal-navigation">

                <button
                  type="button"
                  className="project-gallery-modal-arrow"
                  onClick={
                    goToPreviousGallerySlide
                  }
                  aria-label="Previous slide"
                >
                  <FiArrowLeft />
                </button>


                <span>
                  {String(
                    currentGallerySlide + 1
                  ).padStart(2, "0")}{" "}
                  /{" "}
                  {String(
                    selectedGallery.images.length
                  ).padStart(2, "0")}
                </span>


                <button
                  type="button"
                  className="project-gallery-modal-arrow"
                  onClick={
                    goToNextGallerySlide
                  }
                  aria-label="Next slide"
                >
                  <FiArrowRight />
                </button>

              </div>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}

export default Projects;
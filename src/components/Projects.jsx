import { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Chicken Things",
    category: "E-commerce Website",
    description:
      "A mock e-commerce website built from scratch to showcase front-end development, interactive functionality, and responsive web design.",
    image: "/images/chicken-things.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://jhon03halili-sketch.github.io/boneless-chicken-mock-website-/",
  },

  {
    number: "02",
    title: "Beyond Sea Cabo",
    category: "Social Media Marketing",
    description:
      "Created and managed visual content for a luxury vacation rental brand, including social posts, carousels, reels, captions, and SEO-focused alt text.",
    image: "/images/beyondsea.png",
    tags: ["Social Media", "Canva", "Capcut", "SEO"],

    gallery: {
      carousels: [
        {
          title: "Sample 1",
          images: [
            "/beyondsea/145.png",
            "/beyondsea/146.png",
            "/beyondsea/147.png",
            "/beyondsea/148.png",
            "/beyondsea/149.png",
            "/beyondsea/150.png",
          ],
        },

        {
          title: "Sample 2",
          images: [
            "/beyondsea/172.png",
            "/beyondsea/173.png",
            "/beyondsea/174.png",
            "/beyondsea/175.png",
            "/beyondsea/176.png",
            "/beyondsea/177.png",
          ],
        },

        {
          title: "Sample 3",
          images: [
            "/beyondsea/179.png",
            "/beyondsea/180.png",
            "/beyondsea/182.png",
            "/beyondsea/183.png"
          ],
        },
      ],

      static: [
        "/projects/beyond-sea/static-01.jpg",
        "/projects/beyond-sea/static-02.jpg",
        "/projects/beyond-sea/static-03.jpg",
      ],

      clips: [
        "/projects/beyond-sea/clip-01.mp4",
        "/projects/beyond-sea/clip-02.mp4",
      ],
    },
  },

  {
    number: "03",
    title: "Lead From Within Advisory",
    category: "Website Redesign",
    description:
      "Redesigned a coaching and advisory website in Squarespace with a focus on brand alignment, user experience, and SEO.",
    image: "/projects/lead-from-within.png",
    tags: ["Squarespace", "SEO", "Web Design"],
    link: "#",
  },

  {
    number: "04",
    title: "Aura Longevity",
    category: "E-commerce & Marketing",
    description:
      "Supported e-commerce and marketing initiatives through landing pages, funnel development, email marketing, content, and digital strategy.",
    image: "/projects/aura-longevity.png",
    tags: ["Shopify", "Funnels", "Email Marketing"],
    link: "#",
  },

  {
    number: "05",
    title: "Gallo Pinto",
    category: "Social Media Management",
    description:
      "Created visual content and supported the brand's online presence through social media management, captions, and content development.",
    image: "/projects/gallo-pinto.png",
    tags: ["Social Media", "Canva", "Content"],
    link: "#",
  },

  {
    number: "06",
    title: "Technical Portfolio",
    category: "Web Development",
    description:
      "A personal portfolio built from scratch to showcase technical development, digital marketing, design, and virtual assistance experience.",
    image: "/projects/portfolio.png",
    tags: ["React", "Vite", "CSS"],
    link: "#",
  },

  {
    number: "07",
    title: "Project Seven",
    category: "Digital Marketing",
    description:
      "Digital marketing project showcasing content, strategy, and creative execution.",
    image: "/projects/project-07.png",
    tags: ["Marketing", "Content", "Canva"],
    link: "#",
  },

  {
    number: "08",
    title: "Project Eight",
    category: "Website Design",
    description:
      "Website design project focused on creating a clean and engaging digital experience.",
    image: "/projects/project-08.png",
    tags: ["Web Design", "SEO"],
    link: "#",
  },
];

const projectsPerPage = 6;

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("static");
  const [activeSample, setActiveSample] = useState(0);

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  /* =========================
     PROJECT PAGINATION
  ========================= */

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  const goToNext = () => {
    setCurrentPage((page) =>
      Math.min(page + 1, totalPages - 1)
    );
  };


  /* =========================
     PROJECT MODAL
  ========================= */

  const openProject = (project) => {
    if (project.gallery) {
      setSelectedProject(project);
      setActiveCategory("carousels");
      setActiveSample(0);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
  };


  /* =========================
     CAROUSEL SAMPLE NAVIGATION
  ========================= */

  const goToPreviousSample = () => {
    setActiveSample((sample) =>
      Math.max(sample - 1, 0)
    );
  };

  const goToNextSample = () => {
    setActiveSample((sample) => {
      const samples =
        selectedProject?.gallery?.carousels || [];

      return Math.min(
        sample + 1,
        samples.length - 1
      );
    });
  };


  /* =========================
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    if (selectedProject) {
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
  }, [selectedProject]);


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
            {String(currentPage + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </span>

          <div className="projects-arrows">

            <button
              type="button"
              className="projects-arrow"
              onClick={goToPrevious}
              disabled={currentPage === 0}
              aria-label="Previous projects"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              className="projects-arrow"
              onClick={goToNext}
              disabled={
                currentPage === totalPages - 1
              }
              aria-label="Next projects"
            >
              <FiArrowRight />
            </button>

          </div>

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="projects-grid">

          {visibleProjects.map((project) => (

            <article
              key={project.number}
              className={`project-card ${
                project.gallery
                  ? "project-card-clickable"
                  : ""
              }`}
              onClick={() => openProject(project)}
            >

              {/* =========================
                  PROJECT IMAGE
              ========================= */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                {project.gallery ? (

                  <button
                    type="button"
                    className="project-view"
                    aria-label={`View ${project.title} projects`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(project);
                    }}
                  >
                    <FiExternalLink />
                  </button>

                ) : (

                  <a
                    href={project.link}
                    className="project-view"
                    aria-label={`View ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                  >
                    <FiExternalLink />
                  </a>

                )}

              </div>


              {/* =========================
                  PROJECT INFORMATION
              ========================= */}

              <div className="project-content">

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* =========================
                    PROJECT TAGS
                ========================= */}

                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            PROJECT MODAL
        ========================= */}

        {selectedProject && (

          <div
            className="project-modal-overlay"
            onClick={closeProject}
          >

            <div
              className="project-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* =========================
                  MODAL HEADER
              ========================= */}

              <div className="project-modal-header">

                <div>

                  <span className="project-modal-number">
                    {selectedProject.number}
                  </span>

                  <h3>
                    {selectedProject.title}
                  </h3>

                  <p>
                    {selectedProject.category}
                  </p>

                </div>


                <button
                  type="button"
                  className="project-modal-close"
                  onClick={closeProject}
                  aria-label="Close project"
                >
                  <FiX />
                </button>

              </div>


              {/* =========================
                  MODAL DESCRIPTION
              ========================= */}

              <div className="project-modal-description">
                {selectedProject.description}
              </div>


              {/* =========================
                  CATEGORY TABS
              ========================= */}

              <div className="project-modal-tabs">

                <button
                  type="button"
                  className={
                    activeCategory === "carousels"
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    setActiveCategory("carousels");
                    setActiveSample(0);
                  }}
                >
                  Carousels
                </button>

                <button
                  type="button"
                  className={
                    activeCategory === "static"
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    setActiveCategory("static");
                    setActiveSample(0);
                  }}
                >
                  Static Posts
                </button>

                <button
                  type="button"
                  className={
                    activeCategory === "clips"
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    setActiveCategory("clips");
                    setActiveSample(0);
                  }}
                >
                  Short Clips
                </button>

              </div>


              {/* =========================
                  CAROUSEL GALLERY
              ========================= */}

              {activeCategory === "carousels" ? (

                <>
                  <div className="project-gallery-heading">
                    {
                      selectedProject.gallery
                        .carousels[activeSample]
                        .title
                    }
                  </div>


                  <div className="project-gallery-wrapper">

                    {/* PREVIOUS SAMPLE */}

                    <button
                      type="button"
                      className="project-gallery-arrow project-gallery-arrow-left"
                      onClick={
                        goToPreviousSample
                      }
                      disabled={
                        activeSample === 0
                      }
                      aria-label="Previous sample"
                    >
                      <FiArrowLeft />
                    </button>


                    {/* CAROUSEL IMAGES */}

                    <div className="project-modal-gallery">

                      {
                        selectedProject.gallery
                          .carousels[activeSample]
                          .images
                          .map(
                            (item, index) => (

                              <div
                                className="project-gallery-item"
                                key={item}
                              >

                                <img
                                  src={item}
                                  alt={`${selectedProject.title} carousel ${
                                    index + 1
                                  }`}
                                />

                              </div>

                            )
                          )
                      }

                    </div>


                    {/* NEXT SAMPLE */}

                    <button
                      type="button"
                      className="project-gallery-arrow project-gallery-arrow-right"
                      onClick={
                        goToNextSample
                      }
                      disabled={
                        activeSample ===
                        selectedProject
                          .gallery
                          .carousels
                          .length - 1
                      }
                      aria-label="Next sample"
                    >
                      <FiArrowRight />
                    </button>

                  </div>
                </>

              ) : (

                /* =========================
                   STATIC POSTS / SHORT CLIPS
                ========================= */

                <>

                  <div className="project-gallery-heading">
                    {activeCategory === "static"
                      ? "Static Posts"
                      : "Short Clips"}
                  </div>


                  <div className="project-modal-gallery">

                    {
                      selectedProject.gallery?.[
                        activeCategory
                      ]?.map(
                        (item, index) => (

                          <div
                            className="project-gallery-item"
                            key={item}
                          >

                            {activeCategory ===
                            "clips" ? (

                              <video
                                src={item}
                                controls
                                playsInline
                                preload="metadata"
                              />

                            ) : (

                              <img
                                src={item}
                                alt={`${selectedProject.title} ${activeCategory} ${
                                  index + 1
                                }`}
                              />

                            )}

                          </div>

                        )
                      )
                    }

                  </div>

                </>

              )}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Projects;
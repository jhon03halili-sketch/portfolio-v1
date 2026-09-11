import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    number: "01",
    date: "MARCH 2024",
    company: "ALPHA: Alliance of Leading Programmers through Heuristic Adaptation",
    role: "School Organization - Technical Support",
    logo: "/icons/alpha.png",
    description:
      "Provided technical support and assistance in resolving technical issues while helping users navigate systems and services.",
  },

  {
    number: "02",
    date: "AUGUST 2024 – FEBRUARY 2025",
    company: "Quantrics Enterprise",
    role: "Customer Service Representative – Quadcare",
    logo: "/icons/quantrics.png",
    description:
      "Handled customer concerns, provided support, and assisted customers with residential and mobility services.",
  },

  {
    number: "03",
    date: "OCTOBER 2025",
    company: "Doneverse",
    role: "Digital Marketing Virtual Assistant",
    logo: "/icons/doneverse.png",
    description:
      "Supported digital marketing activities through content creation, social media management, email marketing, funnels, website support, and other digital tasks.",
  },

  {
    number: "04",
    date: "NOVEMBER 2025",
    company: "Beyond Sea Cabo",
    role: "Social Media Manager",
    logo: "/icons/beyond-sea.png",
    description:
      "Created and scheduled social media content for a vacation rental brand, including static posts, carousels, reels, captions, content calendars, and SEO-focused alt text.",
  },

  {
    number: "05",
    date: "DECEMBER 2025",
    company: "Gallo Pinto",
    role: "Social Media Manager",
    logo: "/icons/gallo-pinto.png",
    description:
      "Created social media content and supported the brand's online presence through visual content, captions, and social media management.",
  },

  {
    number: "06",
    date: "JANUARY 2026",
    company: "Aura Longevity",
    role: "E-commerce & Marketing Assistant",
    logo: "/icons/aura-longevity.png",
    description:
      "Supported e-commerce and marketing initiatives through content creation, funnel development, landing pages, email marketing, and digital marketing tasks.",
  },

  {
    number: "07",
    date: "AUGUST 2026",
    company: "Lead From Within Advisory",
    role: "Digital Marketing & Website Assistant",
    logo: "/icons/lead-from-within.png",
    description:
      "Supported digital marketing initiatives through social media content creation and scheduling, email sequence development, and Squarespace website redesign.",
  },
];


/* =========================
   EXPERIENCE ITEM
========================= */

function ExperienceItem({ experience, index, onActive }) {
  const itemRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);

        if (entry.isIntersecting) {
          onActive(index);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index, onActive]);

  return (
    <div
      ref={itemRef}
      className={`experience-item ${
        index % 2 === 0
          ? "experience-left"
          : "experience-right"
      } ${isActive ? "active" : ""}`}
    >

      {/* LEFT SIDE */}

      <div className="experience-left-side">
        {index % 2 === 0 ? (
          <ExperienceContent experience={experience} />
        ) : (
          <ExperienceDate experience={experience} />
        )}
      </div>


      {/* CENTER */}

      <div className="experience-center">
        <span className="experience-center-node"></span>
      </div>


      {/* RIGHT SIDE */}

      <div className="experience-right-side">
        {index % 2 !== 0 ? (
          <ExperienceContent experience={experience} />
        ) : (
          <ExperienceDate experience={experience} />
        )}
      </div>

    </div>
  );
}


/* =========================
   DATE
========================= */

function ExperienceDate({ experience }) {
  return (
    <div className="experience-date-wrapper">
      <span className="experience-date">
        {experience.date}
      </span>
    </div>
  );
}


/* =========================
   EXPERIENCE CONTENT
========================= */

function ExperienceContent({ experience }) {
  return (
    <div className="experience-content">

      <h3 className="experience-company">
        {experience.company}
      </h3>

      <h4 className="experience-role">
        {experience.role}
      </h4>

      <p className="experience-description">
        {experience.description}
      </p>

      <div className="experience-logo">
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
        />
      </div>

    </div>
  );
}

/* =========================
   EXPERIENCE SECTION
========================= */

function Experience() {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="experience-section"
    >

      <div className="experience-container">

        {/* =========================
            INTRO
        ========================= */}

        <div className="experience-label">
          EXPERIENCE
        </div>

        <div className="experience-intro">

          <h2>
            A journey of learning,
            creating, and growing.
          </h2>

          <p>
            From technical support to digital marketing,
            I've continued expanding my skills across
            technology, design, and digital experiences.
          </p>

        </div>


        {/* =========================
            TIMELINE
            STARTS AFTER INTRO
        ========================= */}

        <div
          ref={timelineRef}
          className="experience-timeline"
        >

          {/* =========================
              STICKY NODE
          ========================= */}

          <div className="experience-sticky-marker">

            <div className="experience-marker-dot"></div>

          </div>


          {/* =========================
              EXPERIENCES
          ========================= */}

          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.number}
              experience={experience}
              index={index}
              onActive={setActiveIndex}
            />
          ))}

        </div>

  <div className="experience-history">
    and the rest is history
  </div>

      </div>

    </section>
  );
}

export default Experience;
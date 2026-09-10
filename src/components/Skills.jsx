function SkillIcon({ name, alt }) {
  return (
    <span className="skill-icon">
      <img
        src={`/icons/${name}.png`}
        alt={alt}
        className="skill-icon-default"
      />

      <img
        src={`/icons/${name}-hover.png`}
        alt=""
        className="skill-icon-hover"
      />
    </span>
  );
}


function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* Section label */}
        <div className="skills-label">
          SKILLS
        </div>


        {/* Section intro */}
        <div className="skills-intro">
          <h2>
            Tools, technologies, and skills
            I use to bring ideas to life.
          </h2>
        </div>


        {/* Skills list */}
        <div className="skills-list">


          {/* =========================
              WEB DEVELOPMENT
          ========================= */}

          <div className="skill-group">

            <div className="skill-group-number">
              01
            </div>

            <div className="skill-group-content">

              <h3>
                Web Development
              </h3>

              <div className="skill-items">

                <div className="skill-item">
                  <SkillIcon name="html" alt="HTML" />
                  <span>HTML</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="css" alt="CSS" />
                  <span>CSS</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="javascript" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="react" alt="React" />
                  <span>React</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="csharp" alt="C#" />
                  <span>C#</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="sql" alt="SQL" />
                  <span>SQL</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="aspnet" alt="ASP.NET Core" />
                  <span>ASP.NET Core</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="vscode" alt="VS Code" />
                  <span>VS Code</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="git" alt="Git" />
                  <span>Git</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="github" alt="GitHub" />
                  <span>GitHub</span>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              SOCIAL MEDIA MANAGEMENT
          ========================= */}

          <div className="skill-group">

            <div className="skill-group-number">
              02
            </div>

            <div className="skill-group-content">

              <h3>
                Social Media Management
              </h3>

              <div className="skill-items">

                <div className="skill-item">
                  <SkillIcon name="canva" alt="Canva" />
                  <span>Canva</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="capcut" alt="CapCut" />
                  <span>CapCut</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="instagram" alt="Instagram" />
                  <span>Instagram</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="facebook" alt="Facebook" />
                  <span>Facebook</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="linkedin" alt="LinkedIn" />
                  <span>LinkedIn</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="youtube" alt="YouTube" />
                  <span>YouTube</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="meta" alt="Meta Business Suite" />
                  <span>Meta Business Suite</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="later" alt="Later" />
                  <span>Later</span>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              DIGITAL MARKETING
          ========================= */}

          <div className="skill-group">

            <div className="skill-group-number">
              03
            </div>

            <div className="skill-group-content">

              <h3>
                Digital Marketing
              </h3>

              <div className="skill-items">

                <div className="skill-item">
                  <SkillIcon name="mailchimp" alt="Mailchimp" />
                  <span>Mailchimp</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="kajabi" alt="Kajabi" />
                  <span>Kajabi</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="gohighlevel" alt="GoHighLevel" />
                  <span>GoHighLevel</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="wordpress" alt="WordPress" />
                  <span>WordPress</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="squarespace" alt="Squarespace" />
                  <span>Squarespace</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="shopify" alt="Shopify" />
                  <span>Shopify</span>
                </div>

                <div className="skill-item">
                  <SkillIcon name="klaviyo" alt="Klaviyo" />
                  <span>Klaviyo</span>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            ADDITIONAL TOOLS
        ========================= */}

        <div className="additional-tools">

          <div className="additional-tools-label">
            ADDITIONAL TOOLS
          </div>

          <div className="additional-tools-list">

            <div className="additional-tool">
              <SkillIcon name="google" alt="Google Workspace" />
              <span>Google Workspace</span>
            </div>

            <div className="additional-tool">
              <SkillIcon name="notion" alt="Notion" />
              <span>Notion</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
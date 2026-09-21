import React from 'react';
import { Download, GraduationCap, BookOpen, Code, Palette, ArrowUpRight, Database, Settings, Phone, Mail, MapPin, ShieldCheck, Zap, Users, Brain, Boxes } from 'lucide-react';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill={color}>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill={color}>
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const featuredProjects = [
  {
    title: 'E-commerce Dashboard',
    subtitle: 'PHP / MySQL',
    tags: ['PHP/MySQL'],
    image: publicAsset('ecommerce-dashboard.svg?v=2')
  },
  {
    title: 'Mobile Store App',
    subtitle: 'Illustrator UI Mockup',
    tags: ['Illustrator'],
    image: publicAsset('mobile-store-mockup.svg?v=5')
  },
  {
    title: '3D Spaceship Module',
    subtitle: 'Blender 3D Modeling',
    tags: ['Blender'],
    image: publicAsset('nave-espacial-blender.png')
  }
];

const experiences = [
  {
    company: "McDonald's - Torres Vedras",
    role: 'Crew Member. Customer service and problem-solving under pressure. Prompt response to critical situations and complaints, maintaining high service quality and strict protocol compliance. Teamwork and coordination: working directly with the team to optimize delivery times.',
    date: 'Sep 2025 - Present',
    logo: 'M',
    type: 'Team / Operations'
  },
  {
    company: 'Modular Studio',
    role: 'Intern. Created websites and templates in WordPress with SquidFlex, designed templates for social media, and tested sites to identify and resolve bugs.',
    date: 'Apr 2026 - Jul 2026',
    logo: 'MODULAR',
    type: 'WordPress / Web Dev'
  },
  {
    company: 'Xplor Solutions',
    role: 'Intern. Contributed actively to warehouse inventory organization and optimization. Assembled and configured electronic equipment, and diagnosed and resolved technical faults on corporate computers.',
    date: 'Jan 2023 - Mar 2023',
    logo: 'X',
    type: 'Hardware / Support'
  },
  {
    company: 'Xplor Solutions',
    role: 'Intern. Developed and implemented a functional, custom website tailored to company requirements to optimize internal processes and streamline access to information.',
    date: 'Sep 2022 - Nov 2022',
    logo: 'X',
    type: 'Web Development'
  }
];

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="/">TIAGO DUARTE</a>
        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO BENTO GRID */}
        <section className="bento-grid-hero">
          <div className="bento-item hero-card">
            <span className="eyebrow">MULTIMEDIA ENGINEER</span>
            <h1>Multimedia Engineer with the drive to learn, solve, and build.</h1>
            <p className="hero-text">
              Dynamic and proactive Multimedia Engineering graduate with experience in web development, digital design, website testing, and customer service. Developed strong problem-solving, teamwork, and communication skills through roles at McDonald's and internships at Modular Studio and Xplor Solutions. Quick to learn new systems, comfortable in fast-paced environments, and committed to producing accurate, effective work.
            </p>

            <div className="hero-tech-section">
              <span className="tech-title">TECHNOLOGIES &amp; TOOLS</span>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">HTML5 &amp; CSS3</span>
                <span className="tech-tag">Blender</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Illustrator</span>
                <span className="tech-tag">Git</span>
              </div>
            </div>

            <div className="hero-disciplines">
              <div className="discipline-card">
                <span className="discipline-icon"><Code size={18} /></span>
                <div>
                  <strong>Web Engineering</strong>
                  <p>Building responsive platforms with React, PHP, MySQL, and modern standards.</p>
                </div>
              </div>
              <div className="discipline-card">
                <span className="discipline-icon"><Palette size={18} /></span>
                <div>
                  <strong>UI/UX &amp; Design</strong>
                  <p>Crafting intuitive interfaces, vector systems, and prototypes in Figma &amp; Illustrator.</p>
                </div>
              </div>
              <div className="discipline-card">
                <span className="discipline-icon"><Boxes size={18} /></span>
                <div>
                  <strong>3D Modeling</strong>
                  <p>Creating modular environments, isometric scenes, and digital assets in Blender.</p>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-val">2</span>
                <span className="stat-lbl">Internships Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">10+</span>
                <span className="stat-lbl">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">100%</span>
                <span className="stat-lbl">Solution-Focused</span>
              </div>
            </div>

            <div className="hero-actions">
              <a className="button button-white" href="#experience">View Experience</a>
              <a className="button button-outline" href={publicAsset('Curriculo_Tiago_Duarte.pdf')} download>
                <Download size={18} /> Download CV (Portuguese)
              </a>
              <a className="button button-outline" href={publicAsset('Curriculo_Tiago_Duarte_EN.pdf')} download>
                <Download size={18} /> Download CV (English)
              </a>
            </div>
          </div>

          <div className="bento-col-right">
            <div className="bento-item perfil-card">
              <span className="card-label">PERSONAL SKILLS</span>
              <div className="personal-skills-grid">
                <div className="personal-skill-item">
                  <span className="ps-icon"><ShieldCheck size={20} /></span>
                  <div>
                    <strong>Responsible &amp; Punctual</strong>
                    <p>Dedication to deadlines, schedules, and professional standards.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Zap size={20} /></span>
                  <div>
                    <strong>Fast Learner &amp; Adaptable</strong>
                    <p>Quick to assimilate new systems, workflows, and methodologies.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Users size={20} /></span>
                  <div>
                    <strong>Teamwork</strong>
                    <p>Active collaboration focused on mutual support and shared goals.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Brain size={20} /></span>
                  <div>
                    <strong>Problem Solving</strong>
                    <p>Ability to troubleshoot, prioritize, and resolve challenges under pressure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-item available-card">
              <h2>Available to collaborate and build.</h2>

              <p className="available-bio-text">
                Based in Portugal | Available for on-site, hybrid, and remote roles across Europe. Seeking dynamic teams where I can apply my skills, embrace new technologies, and contribute to innovative, high-impact projects.
              </p>

              <div className="available-skills-list">
                <div className="avail-skill">
                  <div className="skill-icon-sm web-icon"><Code size={20} /></div>
                  <p><strong>Web Development:</strong> HTML, CSS, PHP, and JavaScript fundamentals.</p>
                </div>
                <div className="avail-skill">
                  <div className="skill-icon-sm design-icon"><Palette size={20} /></div>
                  <p><strong>Digital Design &amp; 3D:</strong> Blender, Adobe Illustrator, Figma, Canva, SquidFlex, Affinity Designer.</p>
                </div>
                <div className="avail-skill">
                  <div className="skill-icon-sm db-icon"><Database size={20} /></div>
                  <p><strong>Databases:</strong> MySQL.</p>
                </div>
              </div>

              <div className="learning-section">
                <span className="learning-label">CURRENTLY LEARNING:</span>
                <div className="learning-badges">
                  <span className="learning-badge">Docker</span>
                  <span className="learning-badge">WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((proj, idx) => (
              <div className="bento-item project-card" key={idx}>
                <div className="project-image">
                  <img src={proj.image} alt={proj.title} />
                </div>
                <div className="project-info">
                  <div className="p-text">
                    <h3>{proj.title}</h3>
                    <p>{proj.subtitle}</p>
                  </div>
                  <div className="p-tag">{proj.tags[0]}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bottom-layout">
          {/* LEFT COL: EXPERIENCE */}
          <div className="bottom-left">
            <section className="section" id="experience">
              <h2 className="section-title">Work Experience</h2>
              <div className="exp-grid">
                {experiences.map((exp, idx) => (
                  <div className="bento-item exp-card" key={idx}>
                    <div className="exp-header">
                      <div className={`exp-logo ${exp.logo === 'M' ? 'mcd-logo' : ''} ${exp.logo === 'MODULAR' ? 'modular-logo' : ''}`}>
                        {exp.logo === 'M' ? (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" alt="McDonald's" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        ) : exp.logo === 'MODULAR' ? (
                          <img src={publicAsset('modular-logo.png')} alt="Modular Studio" className="exp-logo-image modular-logo-image" />
                        ) : exp.logo === 'X' ? (
                          <img src={publicAsset('xplor-logo.png')} alt="Xplor" className="exp-logo-image xplor-logo-image" />
                        ) : (
                          exp.logo
                        )}
                      </div>
                      <div className="exp-link-icon"><ArrowUpRight size={20} /></div>
                    </div>
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                    <div className="exp-footer">
                      <span>{exp.date}</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COL: WEB DEV, TIMELINE, CONTACT */}
          <div className="bottom-right">

            <section className="bento-item skills-list-card" id="skills">
              <h2 className="skills-card-title">Technical Skills</h2>

              <div className="skills-category">
                <span className="skills-category-label">WEB DEVELOPMENT</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small html-icon">5</div>
                  <div className="skill-progress-content">
                    <p><strong>HTML</strong> | Semantic structure and accessibility standards.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '85%', background: '#e34f26' }}></div></div>
                  </div>
                  <span className="progress-percent">85%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small css-icon">3</div>
                  <div className="skill-progress-content">
                    <p><strong>CSS</strong> | Responsive styling and modern layouts with Flexbox/Grid.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '80%', background: '#1572b6' }}></div></div>
                  </div>
                  <span className="progress-percent">80%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small js-icon">JS</div>
                  <div className="skill-progress-content">
                    <p><strong>JavaScript</strong> | Programming logic and DOM manipulation. <span className="text-fade">(fundamentals)</span></p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '55%', background: '#f7df1e' }}></div></div>
                  </div>
                  <span className="progress-percent">55%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small php-icon">PHP</div>
                  <div className="skill-progress-content">
                    <p><strong>PHP</strong> | Server-side development and database integration.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '75%', background: '#777bb4' }}></div></div>
                  </div>
                  <span className="progress-percent">75%</span>
                </div>
              </div>

              <div className="skills-category">
                <span className="skills-category-label">DIGITAL DESIGN &amp; 3D</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small figma-small-icon">Fg</div>
                  <div className="skill-progress-content">
                    <p><strong>Figma</strong> | UI design and interactive prototyping.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '75%', background: '#a259ff' }}></div></div>
                  </div>
                  <span className="progress-percent">75%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small ai-small-icon">Ai</div>
                  <div className="skill-progress-content">
                    <p><strong>Adobe Illustrator</strong> | Vector graphics, logos, and illustrations.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '60%', background: '#ff3333' }}></div></div>
                  </div>
                  <span className="progress-percent">60%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small" style={{ background: '#ea580c', color: '#fff', fontWeight: 'bold', fontSize: '0.75rem' }}>3D</div>
                  <div className="skill-progress-content">
                    <p><strong>Blender</strong> | 3D modeling, asset creation, and scene composition.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '70%', background: '#ea580c' }}></div></div>
                  </div>
                  <span className="progress-percent">70%</span>
                </div>
              </div>

              <div className="skills-category" style={{ marginBottom: 0 }}>
                <span className="skills-category-label">DATABASES</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small mysql-small-icon">SQL</div>
                  <div className="skill-progress-content">
                    <p><strong>MySQL</strong> | SQL queries, schema design, and database management.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '65%', background: '#00618a' }}></div></div>
                  </div>
                  <span className="progress-percent">65%</span>
                </div>
              </div>

            </section>



            <section className="bento-item timeline-card" id="education">
              <h2 className="skills-card-title">Education &amp; Languages</h2>

              <div className="timeline-item-minimal">
                <div className="timeline-date-minimal">Oct 2023 - Present</div>
                <div className="timeline-icon-container">
                  <a href="https://istec.pt/" target="_blank" rel="noreferrer" className="edu-logo-minimal istec-logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <GraduationCap size={14} color="#fff" />
                  </a>
                  <svg className="timeline-curved-line" viewBox="0 0 20 80" preserveAspectRatio="none">
                    <path d="M10,0 C10,40 -5,40 10,80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="timeline-content-minimal">
                  <h3>ISTEC - Lisbon</h3>
                  <p className="edu-course">Bachelor's Degree in Multimedia Engineering</p>
                  <p className="edu-desc">Web Dev, Design, 3D, Motion Graphics</p>
                </div>
              </div>

              <div className="timeline-item-minimal">
                <div className="timeline-date-minimal">Sep 2020 - Jul 2023</div>
                <div className="timeline-icon-container">
                  <a href="https://www.sefo.pt/" target="_blank" rel="noreferrer" className="edu-logo-minimal esco-logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <BookOpen size={14} color="#fff" />
                  </a>
                </div>
                <div className="timeline-content-minimal">
                  <h3>ESCO - Torres Vedras</h3>
                  <p className="edu-course">Vocational Diploma in Computer Systems Management and Programming</p>
                  <p className="edu-desc">HTML5, CSS3, JavaScript, SQL, Networking</p>
                </div>
              </div>

              <div className="languages-section-minimal">
                <h3>Languages</h3>
                <div className="lang-badges">
                  <div className="lang-badge-group">
                    <span className="lang-badge">Portuguese</span>
                    <span className="lang-level-text">Native</span>
                  </div>
                  <div className="lang-badge-group">
                    <span className="lang-badge">English</span>
                    <span className="lang-level-text">Intermediate (B1)</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="footer-section" id="contact">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Let's work together!</h2>
            <p>I am always open to new challenges, projects, and learning opportunities. If you have a project in mind or just want to connect, feel free to reach out!</p>
            <div className="footer-contact-details">
              <div className="contact-detail-item">
                <Phone size={18} />
                <span>+351 918 079 750</span>
              </div>
              <div className="contact-detail-item">
                <Mail size={18} />
                <span>t.claudino.duarte@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <MapPin size={18} />
                <span>Pereiro, Portugal</span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <form className="footer-contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Get in Touch</button>
              </div>
            </form>
            <div className="social-links footer-socials">
              <a href="https://www.linkedin.com/in/tiago-duarte-777031276/" target="_blank" rel="noreferrer"><LinkedinIcon size={22} /></a>
              <a href="https://github.com/uauauTiagO" target="_blank" rel="noreferrer"><GithubIcon size={22} /></a>
              <a href="https://www.instagram.com/tiagoo.d10/" target="_blank" rel="noreferrer"><InstagramIcon size={22} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

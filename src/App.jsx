import React from 'react';
import { Download, GraduationCap, BookOpen, Code, Palette, ArrowUpRight, Database, Settings, Phone, Mail, MapPin, ShieldCheck, Zap, Users, Brain } from 'lucide-react';

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
    title: 'E-commerce Xplor Solutions',
    subtitle: 'PHP / MySQL',
    tags: ['PHP/MySQL'],
    image: 'https://placehold.co/600x400/222/fff?text=E-commerce+UI'
  },
  {
    title: 'App UX Design',
    subtitle: 'Exemplo',
    tags: ['Illustrator'],
    image: 'https://placehold.co/400x600/222/fff?text=App+Mockup'
  },
  {
    title: 'Data Visualization',
    subtitle: 'Infographic',
    tags: ['MySQL'],
    image: 'https://placehold.co/600x400/222/fff?text=Data+Viz'
  }
];

const experiences = [
  {
    company: "McDonald's - Torres Vedras",
    role: 'Funcionário. Resolução de Problemas sob Pressão: Capacidade de resposta imediata a situações críticas e reclamações, mantendo o foco na qualidade do serviço e no cumprimento de protocolos rigorosos. Trabalho em Equipa e Coordenação: Colaboração direta com a equipa para otimizar os tempos de entrega.',
    date: 'Set 2025 - Atual',
    logo: 'M',
    type: 'Equipa'
  },
  {
    company: 'Modular Digital Agency',
    role: 'Estagiário. Desenvolvimento de sites em WordPress com Squid Flex, criação de templates para redes sociais e apoio na gestão de conteúdos e tarefas digitais.',
    date: 'Abr 2026 - Jul 2026',
    logo: 'MODULAR',
    type: 'WordPress / Gestão'
  },
  {
    company: 'Xplor Solutions',
    role: 'Estagiário. Contribuí ativamente para a organização e otimização do armazém. Participei na montagem e configuração de equipamentos eletrónicos, bem como no diagnóstico e resolução de falhas técnicas em computadores corporativos.',
    date: 'Jan 2023 - Mar 2023',
    logo: 'X',
    type: 'Hardware / Suporte'
  },
  {
    company: 'Xplor Solutions',
    role: 'Estagiário. Desenvolvimento e implementação de um website funcional, personalizado para as necessidades da empresa, visando otimizar processos internos e facilitar o acesso às informações.',
    date: 'Set 2022 - Nov 2022',
    logo: 'X',
    type: 'Website'
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
          <a href="#experiencia">Experiência</a>
          <a href="#competencias">Competências</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        {/* HERO BENTO GRID */}
        <section className="bento-grid-hero">
          <div className="bento-item hero-card">
            <span className="eyebrow">ENGENHEIRO MULTIMÉDIA</span>
            <h1>Engenheiro Multimédia com energia para aprender, resolver e construir.</h1>
            <p className="hero-text">
              Jovem dinâmico e proativo, com grande vontade de aprender e trabalhar em equipa. Através da minha experiência no McDonald's e estágios na Xplor Solutions e na Modular Digital Agency, desenvolvi uma forte capacidade na resolução de problemas sob pressão e agilidade na aprendizagem de novos sistemas, habituado a ambientes dinâmicos e focado em contribuir para a eficiência operacional da equipa através do rigor técnico e da boa comunicação.
            </p>
            <div className="hero-actions">
              <a className="button button-white" href="#experiencia">Ver experiências</a>
              <a className="button button-outline" href="/Curriculo_Tiago_Duarte.pdf" download>
                <Download size={18} /> Download CV (PDF)
              </a>
            </div>
          </div>

          <div className="bento-col-right">
            <div className="bento-item perfil-card">
              <span className="card-label">COMPETÊNCIAS PESSOAIS</span>
              <div className="personal-skills-grid">
                <div className="personal-skill-item">
                  <span className="ps-icon"><ShieldCheck size={20} /></span>
                  <div>
                    <strong>Responsabilidade e Pontualidade</strong>
                    <p>Compromisso com prazos, horários e rigor profissional.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Zap size={20} /></span>
                  <div>
                    <strong>Adaptação Rápida</strong>
                    <p>Facilidade na aprendizagem de novos sistemas e metodologias.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Users size={20} /></span>
                  <div>
                    <strong>Trabalho em Equipa</strong>
                    <p>Colaboração ativa, focada no suporte mútuo e objetivos comuns.</p>
                  </div>
                </div>
                <div className="personal-skill-item">
                  <span className="ps-icon"><Brain size={20} /></span>
                  <div>
                    <strong>Resolução de Problemas</strong>
                    <p>Capacidade de atuar e resolver desafios sob pressão.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-item available-card">
              <h2>Disponível para crescer e colaborar.</h2>

              <p className="available-bio-text">
                Procuro integrar equipas dinâmicas onde possa aplicar as minhas competências e absorver novas tecnologias, contribuindo para projetos desafiadores com foco na inovação.
              </p>

              <div className="available-skills-list">
                <div className="avail-skill">
                  <div className="skill-icon-sm web-icon"><Code size={20} /></div>
                  <p><strong>Desenvolvimento Web:</strong> HTML, CSS, PHP e JS.</p>
                </div>
                <div className="avail-skill">
                  <div className="skill-icon-sm design-icon"><Palette size={20} /></div>
                  <p><strong>Design Digital:</strong> Adobe Illustrator e Figma.</p>
                </div>
                <div className="avail-skill">
                  <div className="skill-icon-sm db-icon"><Database size={20} /></div>
                  <p><strong>Bases de Dados:</strong> MySQL.</p>
                </div>
              </div>

              <div className="learning-section">
                <span className="learning-label">ATUALMENTE A APRENDER:</span>
                <div className="learning-badges">
                  <span className="learning-badge">Docker</span>
                  <span className="learning-badge">WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section" id="projetos">
          <h2 className="section-title">Projetos em Destaque</h2>
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
          {/* LEFT COL: EXPERIENCIA */}
          <div className="bottom-left">
            <section className="section" id="experiencia">
              <h2 className="section-title">Experiência</h2>
              <div className="exp-grid">
                {experiences.map((exp, idx) => (
                  <div className="bento-item exp-card" key={idx}>
                    <div className="exp-header">
                      <div className={`exp-logo ${exp.logo === 'M' ? 'mcd-logo' : ''} ${exp.logo === 'MODULAR' ? 'modular-logo' : ''}`}>
                        {exp.logo === 'M' ? (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" alt="McDonald's" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        ) : exp.logo === 'MODULAR' ? (
                          <img src={publicAsset('modular-logo.png')} alt="Modular Digital Agency" className="exp-logo-image modular-logo-image" />
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

            <section className="bento-item skills-list-card" id="competencias">
              <h2 className="skills-card-title">Competências Técnicas</h2>

              <div className="skills-category">
                <span className="skills-category-label">DESENVOLVIMENTO WEB</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small html-icon">5</div>
                  <div className="skill-progress-content">
                    <p><strong>HTML</strong> | Estruturação de conteúdo e acessibilidade.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '85%', background: '#e34f26' }}></div></div>
                  </div>
                  <span className="progress-percent">85%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small css-icon">3</div>
                  <div className="skill-progress-content">
                    <p><strong>CSS</strong> | Estilização responsiva e layouts com Flexbox/Grid.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '80%', background: '#1572b6' }}></div></div>
                  </div>
                  <span className="progress-percent">80%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small js-icon">JS</div>
                  <div className="skill-progress-content">
                    <p><strong>JavaScript</strong> | Lógica de programação e manipulação do DOM. <span className="text-fade">(conceitos básicos)</span></p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '55%', background: '#f7df1e' }}></div></div>
                  </div>
                  <span className="progress-percent">55%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small php-icon">PHP</div>
                  <div className="skill-progress-content">
                    <p><strong>PHP</strong> | Desenvolvimento do lado do servidor e interação com bases.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '75%', background: '#777bb4' }}></div></div>
                  </div>
                  <span className="progress-percent">75%</span>
                </div>
              </div>

              <div className="skills-category">
                <span className="skills-category-label">DESIGN DIGITAL</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small figma-small-icon">Fg</div>
                  <div className="skill-progress-content">
                    <p><strong>Figma</strong> | Criação de interfaces e protótipos interativos.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '75%', background: '#a259ff' }}></div></div>
                  </div>
                  <span className="progress-percent">75%</span>
                </div>

                <div className="skill-progress-item">
                  <div className="tech-icon-small ai-small-icon">Ai</div>
                  <div className="skill-progress-content">
                    <p><strong>Adobe Illustrator</strong> | Design vetorial, logótipos e ilustrações.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '60%', background: '#ff3333' }}></div></div>
                  </div>
                  <span className="progress-percent">60%</span>
                </div>
              </div>

              <div className="skills-category" style={{ marginBottom: 0 }}>
                <span className="skills-category-label">BASES DE DADOS</span>

                <div className="skill-progress-item">
                  <div className="tech-icon-small mysql-small-icon">SQL</div>
                  <div className="skill-progress-content">
                    <p><strong>MySQL</strong> | Consultas SQL e gerenciamento de base de dados.</p>
                    <div className="progress-bar-container"><div className="progress-bar" style={{ width: '65%', background: '#00618a' }}></div></div>
                  </div>
                  <span className="progress-percent">65%</span>
                </div>
              </div>

            </section>



            <section className="bento-item timeline-card" id="educacao">
              <h2 className="skills-card-title">Educação e Línguas</h2>

              <div className="timeline-item-minimal">
                <div className="timeline-date-minimal">Out 2023 - Atual</div>
                <div className="timeline-icon-container">
                  <a href="https://istec.pt/" target="_blank" rel="noreferrer" className="edu-logo-minimal istec-logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <GraduationCap size={14} color="#fff" />
                  </a>
                  <svg className="timeline-curved-line" viewBox="0 0 20 80" preserveAspectRatio="none">
                    <path d="M10,0 C10,40 -5,40 10,80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="timeline-content-minimal">
                  <h3>ISTEC - Lisboa</h3>
                  <p className="edu-course">Engenharia Multimédia</p>
                  <p className="edu-desc">Web Dev, Design, Motion Graphics</p>
                </div>
              </div>

              <div className="timeline-item-minimal">
                <div className="timeline-date-minimal">Set 2020 - Jul 2023</div>
                <div className="timeline-icon-container">
                  <a href="https://www.sefo.pt/" target="_blank" rel="noreferrer" className="edu-logo-minimal esco-logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <BookOpen size={14} color="#fff" />
                  </a>
                </div>
                <div className="timeline-content-minimal">
                  <h3>ESCO</h3>
                  <p className="edu-course">Gestão e Programação de Sistemas Informáticos</p>
                  <p className="edu-desc">HTML 5, CSS 3, JavaScript, SQL, Redes</p>
                </div>
              </div>

              <div className="languages-section-minimal">
                <h3>Línguas</h3>
                <div className="lang-badges">
                  <div className="lang-badge-group">
                    <span className="lang-badge">Português</span>
                    <span className="lang-level-text">Nativo</span>
                  </div>
                  <div className="lang-badge-group">
                    <span className="lang-badge">Inglês</span>
                    <span className="lang-level-text">Intermédio (B1)</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="footer-section" id="contacto">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Vamos trabalhar juntos?</h2>
            <p>Estou sempre aberto a novos desafios e oportunidades de aprendizagem. Se tens um projeto em mente ou apenas queres dizer olá, entra em contacto!</p>
            <div className="footer-contact-details">
              <div className="contact-detail-item">
                <Phone size={18} />
                <span>+351 918 079 750</span>
              </div>
              <div className="contact-detail-item">
                <Mail size={18} />
                <span>tiagoclaudinoduarte2005@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <MapPin size={18} />
                <span>Rua Principal, 36, 2550-072, Pereiro</span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <form className="footer-contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="email" placeholder="O teu email" required />
                <button type="submit">Contactar</button>
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

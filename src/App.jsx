const featuredPosts = [
  {
    category: 'Experiencia',
    title: 'Xplor Solutions',
    excerpt:
      'Desenvolvimento e implementacao de um website funcional, personalizado para as necessidades da empresa, com foco na otimizacao de processos internos e no acesso rapido a informacao.',
    date: 'Set 2022 - Nov 2022',
    readTime: 'Website',
  },
  {
    category: 'Suporte Tecnico',
    title: 'Xplor Solutions',
    excerpt:
      'Participacao na organizacao do armazem, montagem e configuracao de equipamentos eletronicos e diagnostico de falhas tecnicas em computadores corporativos.',
    date: 'Jan 2023 - Mar 2023',
    readTime: 'Hardware',
  },
  {
    category: 'Operacoes',
    title: "McDonald's - Torres Vedras",
    excerpt:
      'Experiencia num ambiente dinamico, com resposta a situacoes de pressao, colaboracao com a equipa e foco constante na qualidade do servico e na eficiencia operacional.',
    date: 'Set 2025 - Atual',
    readTime: 'Equipa',
  },
];

const latestPosts = [
  {
    number: '01',
    title: 'Engenharia Multimedia - ISTEC Lisboa',
    summary:
      'Percurso atual focado em conteudos multimédia, desenvolvimento digital e construcao de bases tecnicas para projetos criativos e funcionais.',
  },
  {
    number: '02',
    title: 'Gestao e Programacao de Sistemas Informaticos - ESCO',
    summary:
      'Formacao entre Set 2020 e Jul 2023 com base em programacao, logica de sistemas e preparacao para contextos tecnicos multidisciplinares.',
  },
  {
    number: '03',
    title: 'Contacto profissional e presenca digital',
    summary:
      'Email, telefone, morada em Pereiro e presenca no LinkedIn reunidos num perfil claro, acessivel e pronto para novas oportunidades.',
  },
];

const manifestoPoints = [
  'Desenvolvimento Web: HTML, CSS, PHP e bases de JavaScript.',
  'Design Digital com Adobe Illustrator e bases de dados em MySQL.',
  'Responsavel, pontual, com rapida adaptacao e facilidade na aprendizagem.',
];

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/">
          Tiago Duarte
        </a>

        <nav className="nav">
          <a href="#featured">Experiencia</a>
          <a href="#manifesto">Competencias</a>
          <a href="#newsletter">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Multimedia, desenvolvimento web e aprendizagem continua.</p>
            <h1>
              Engenheiro Multimedia com energia para aprender, resolver e construir.
            </h1>
            <p className="hero-text">
              Jovem dinamico e proativo, com experiencia em trabalho de equipa,
              suporte tecnico, desenvolvimento web e resposta eficaz sob pressao.
              Foco-me em contribuir para a eficiencia operacional com rigor,
              adaptabilidade e boa comunicacao.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#featured">
                Ver experiencias
              </a>
              <a className="button button-secondary" href="#newsletter">
                Ver contactos
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <span className="panel-label">Perfil</span>
            <h2>Disponivel para crescer e colaborar.</h2>
            <p>
              Atualmente a estudar Engenharia Multimedia no ISTEC, com vontade de
              aplicar conhecimentos tecnicos em contextos reais e evoluir em
              projetos digitais.
            </p>
            <div className="panel-meta">
              <span>ISTEC - Lisboa</span>
              <span>2023 - Atual</span>
            </div>
          </aside>
        </section>

        <section className="section" id="featured">
          <div className="section-heading">
            <p className="section-label">Experiencia</p>
            <h2>Tres momentos que definem o meu percurso.</h2>
          </div>

          <div className="post-grid">
            {featuredPosts.map((post) => (
              <article className="post-card" key={post.title}>
                <p className="post-category">{post.category}</p>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="spotlight" id="manifesto">
          <div className="spotlight-copy">
            <p className="section-label">Competencias</p>
            <h2>Base tecnica com atitude pratica e forte capacidade de adaptacao.</h2>
            <p>
              O meu perfil combina desenvolvimento web, design digital, bases de
              dados e uma postura profissional marcada por responsabilidade,
              pontualidade, aprendizagem rapida e facilidade em integrar novos
              contextos de trabalho.
            </p>
          </div>

          <div className="manifesto-list">
            {manifestoPoints.map((point) => (
              <div className="manifesto-item" key={point}>
                <span className="manifesto-mark" aria-hidden="true">
                  /
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section latest" id="latest">
          <div className="section-heading">
            <p className="section-label">Formacao e Perfil</p>
            <h2>Academia, percurso tecnico e presenca profissional.</h2>
          </div>

          <div className="latest-list">
            {latestPosts.map((post) => (
              <article className="latest-item" key={post.number}>
                <span className="latest-number">{post.number}</span>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="contact-copy">
            <p className="section-label">Contacto</p>
            <h2>Vamos falar sobre oportunidades, projetos ou colaboracoes.</h2>
            <p>
              tiagoclaudinoduarte2005@gmail.com · Rua Principal, 36, 2550-072,
              Pereiro · LinkedIn
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" placeholder="O teu email" />
            <button type="submit">Entrar em contacto</button>
          </form>
        </section>
      </main>
    </div>
  );
}

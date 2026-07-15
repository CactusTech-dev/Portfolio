import { Link } from 'react-router-dom';
import projetosDoJson from '../assets/projetos.json';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
}

const FEATURED_PROJECTS: Project[] = projetosDoJson as Project[];

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-geometric-icon">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="25" x2="95" y2="75" />
            <line x1="95" y1="25" x2="5" y2="75" />
          </svg>
        </div>
        <h1 className="hero-title">
          CONSTRUINDO O FUTURO <br />
          <span className="hero-title-gradient">ATRAVÉS DO CÓDIGO.</span>
        </h1>
        <p className="hero-description">
          Desenvolvimento de software sob medida e soluções digitais de alto impacto.
        </p>
        <div className="hero-cta-container">
          <a href="#projects" className="hero-cta-button">CONHEÇA NOSSO TRABALHO</a>
        </div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="portfolio-section" style={{ scrollMarginTop: '80px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Portfolio</span>
            <h2 className="portfolio-title">PROJETOS EM DESTAQUE</h2>
          </div>
          <Link to="/projetos" className="portfolio-view-all">
            Ver todos os projetos <span>&rarr;</span>
          </Link>
        </div>
        <div className="projects-grid">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="portfolio-section" style={{ scrollMarginTop: '80px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">O que fazemos</span>
            <h2 className="portfolio-title">NOSSOS SERVIÇOS</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Desenvolvimento Web</h3>
            <p>Aplicações e sites modernos, responsivos e otimizados para mecanismos de busca.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Sistemas Customizados</h3>
            <p>Sistemas internos, APIs e soluções robustas de back-end para o seu negócio.</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Design de Interfaces (UI/UX)</h3>
            <p>Criação de protótipos e layouts modernos, intuitivos e totalmente focados no usuário.</p>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="portfolio-section" style={{ scrollMarginTop: '80px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Quem somos</span>
            <h2 className="portfolio-title">SOBRE A TZEU</h2>
          </div>
        </div>
        <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px', lineHeight: '1.6' }}>
          <p>
            A <strong>TZEU</strong> nasceu da vontade de criar soluções tecnológicas simples, de alto impacto e perfeitamente adaptadas para a necessidade de cada parceiro. Nós respiramos desenvolvimento de software e infraestrutura, trazendo para a realidade produtos funcionais com layouts modernos e focados em ótima usabilidade.
          </p>
        </div>
      </section>

      {/* 5. MEMBERS SECTION */}
      <section id="members" className="portfolio-section" style={{ scrollMarginTop: '80px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Nosso Time</span>
            <h2 className="portfolio-title">INTEGRANTES</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 4px 0' }}>Victor Valentim</h3>
            <p style={{ fontSize: '14px', color: 'var(--text)' }}>Design, UI/UX & Conteúdo</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 4px 0' }}>Integrante 2</h3>
            <p style={{ fontSize: '14px', color: 'var(--text)' }}>Infraestrutura & Back-End</p>
          </div>
          <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '6px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 4px 0' }}>Integrante 3</h3>
            <p style={{ fontSize: '14px', color: 'var(--text)' }}>Front-End Developer</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
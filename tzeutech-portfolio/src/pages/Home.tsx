import { Link } from 'react-router-dom';
import './Home.css'; // Importando o novo arquivo de estilos estilizado com Tailwind
import logoImg from '../assets/hero.png';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project: NEXUS AI',
    description: 'Plataforma integrada de inteligência artificial com dashboards analíticos em tempo real.',
    image: '/assets/projects/nexus-ai.png',
    tag: 'AI & Analytics',
  },
  {
    id: '2',
    title: 'Project: Supply Chain App',
    description: 'Sistema descentralizado para rastreamento e otimização logística de ponta a ponta.',
    image: '/assets/projects/supply-chain.png',
    tag: 'Logistics',
  },
  {
    id: '3',
    title: 'Project: Progressing',
    description: 'Ferramenta de monitoramento de performance e deploy automatizado para nuvem.',
    image: '/assets/projects/progressing.png',
    tag: 'DevOps',
  },
];

export default function Home() {
  return (
    <div className="home-container">
      
      {/* 1. HEADER / NAVBAR */}
      <header className="home-header">
          <div className="home-header-wrapper">
            <header className="home-header">
        <div className="home-header-wrapper">
          
          {/* Substitua a logo-container por isso: */}
          <div className="logo-container">
            <img 
              src={logoImg} 
              alt="Logo Techne" 
              className="logo-img-header" 
            />
            <span className="logo-text">
              TECHNE <span className="text-slate-500 font-light">| Software Solutions</span>
            </span>
          </div>

          {/* ... restante da nav ... */}
        </div>
      </header>

          <nav className="nav-links">
            <Link to="/projetos" className="nav-link-active">Projects</Link>
            <a href="#services" className="nav-link-standard">Services</a>
            <a href="#about" className="nav-link-standard">About</a>
            <Link to="/contato" className="nav-link-standard">Contact</Link>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-glow-effect" />

        <div className="hero-geometric-icon">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="25" x2="95" y2="75" />
            <line x1="95" y1="25" x2="5" y2="75" />
          </svg>
        </div>

        <h1 className="hero-title">
          BUILDING TOMORROW'S <br />
          <span className="hero-title-gradient">INFRASTRUCTURE.</span>
        </h1>
        
        <p className="hero-description">
          A portfolio of high-impact digital products.
        </p>

        <div className="mt-10">
          <Link to="/projetos" className="hero-cta-button">
            <span className="hero-cta-border-glow" />
            EXPLORE OUR WORK
          </Link>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="portfolio-section">
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Portfolio</span>
            <h2 className="portfolio-title">FEATURED PROJECTS</h2>
          </div>
          <Link to="/projetos" className="portfolio-view-all">
            View all projects <span>&rarr;</span>
          </Link>
        </div>

        <div className="projects-grid">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-glow" />

              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                <div className="project-image-fallback">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="stroke-slate-900/50" strokeWidth="0.5">
                    <line x1="0" y1="0" x2="100" y2="100" />
                    <line x1="100" y1="0" x2="0" y2="100" />
                  </svg>
                  <span className="project-fallback-tag">{project.tag}</span>
                </div>
              </div>

              <div className="project-card-body">
                <span className="project-tag">
                  {project.tag}
                </span>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <div className="footer-logo">T</div>
            <span>&copy; {new Date().getFullYear()} Techne Software Solutions.</span>
          </div>
          <div className="footer-contacts">
            <span className="footer-contact-link">info@technedesign.com</span>
            <span className="footer-contact-link">+91 123 456 789</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
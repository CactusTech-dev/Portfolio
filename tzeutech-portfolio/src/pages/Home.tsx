import { Link } from 'react-router-dom';
import projetosDoJson from '../assets/projetos.json';
import Header from '../components/Header';
import Hero from '../components/Hero';
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

      {/* 1. HERO SECTION (Modularized) */}
      <Hero />

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="portfolio-section" style={{ scrollMarginTop: '100px' }}>
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
              links={project.links}
            />
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="portfolio-section" style={{ scrollMarginTop: '100px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">O que fazemos</span>
            <h2 className="portfolio-title">NOSSOS SERVIÇOS</h2>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Desenvolvimento Web</h3>
            <p>Aplicações e sites modernos, responsivos, rápidos e otimizados para mecanismos de busca (SEO).</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3>Sistemas Customizados & APIs</h3>
            <p>Sistemas corporativos internos, APIs RESTful escaláveis e integrações robustas de back-end.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Infraestrutura & Nuvem</h3>
            <p>Modelagem de banco de dados, deploy automatizado e provisionamento de servidores escaláveis na nuvem.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Design de Interfaces (UI/UX)</h3>
            <p>Criação de protótipos de alta fidelidade e layouts modernos focados na usabilidade e retenção de usuários.</p>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="portfolio-section" style={{ scrollMarginTop: '100px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Quem somos</span>
            <h2 className="portfolio-title">SOBRE A TZEU</h2>
          </div>
        </div>
        <div className="about-card">
          <p>
            A <strong>TZEU</strong> nasceu da vontade de criar soluções tecnológicas simples, de alto impacto e perfeitamente adaptadas para a necessidade de cada parceiro. Nós respiramos desenvolvimento de software e infraestrutura, trazendo para a realidade produtos funcionais com layouts modernos e focados em ótima usabilidade.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projetos Entregues</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Especialistas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Foco no Cliente</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEMBERS SECTION */}
      <section id="members" className="portfolio-section" style={{ scrollMarginTop: '100px' }}>
        <div className="portfolio-header">
          <div>
            <span className="portfolio-subtitle">Nosso Time</span>
            <h2 className="portfolio-title">INTEGRANTES</h2>
          </div>
        </div>
        <div className="members-grid">
          <div className="member-card">
            <div className="member-avatar">VV</div>
            <h3 className="member-name">Victor Valentim</h3>
            <p className="member-role">Desenvolvedor Full-Stack & UI/UX</p>
          </div>
          
          <div className="member-card">
            <div className="member-avatar">Y</div>
            <h3 className="member-name">Yuri (@gelagua)</h3>
            <p className="member-role">Desenvolvedor Front-End & Integrações</p>
          </div>

          <div className="member-card">
            <div className="member-avatar">M</div>
            <h3 className="member-name">Misael</h3>
            <p className="member-role">Especialista em Banco de Dados & Back-End</p>
          </div>

          <div className="member-card">
            <div className="member-avatar">L</div>
            <h3 className="member-name">Lucas</h3>
            <p className="member-role">Desenvolvedor Back-End</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
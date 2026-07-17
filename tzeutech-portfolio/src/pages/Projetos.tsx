import { useState, useMemo } from 'react';
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

const ALL_PROJECTS: Project[] = projetosDoJson as Project[];

export default function Projetos() {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  // Extrai todas as tags únicas dos projetos
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('Todos');
    ALL_PROJECTS.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filtra os projetos com base na tag selecionada
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'Todos') {
      return ALL_PROJECTS;
    }
    return ALL_PROJECTS.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="home-container">
      <Header />

      <section className="portfolio-section" style={{ scrollMarginTop: '100px', padding: '60px 0', minHeight: '70vh' }}>
        <div className="portfolio-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
          <div>
            <span className="portfolio-subtitle">Nosso Portfolio</span>
            <h2 className="portfolio-title">TODOS OS PROJETOS</h2>
          </div>
          <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px', maxWidth: '600px' }}>
            Explore a galeria completa de soluções e produtos digitais que desenvolvemos. Use os filtros abaixo para buscar por tecnologias específicas.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="filter-container" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '32px 0 40px 0' }}>
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: selectedTag === tag ? 'var(--text-h)' : 'var(--code-bg)',
                color: selectedTag === tag ? 'var(--bg)' : 'var(--text)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text)' }}>
            Nenhum projeto encontrado com a tecnologia selecionada.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

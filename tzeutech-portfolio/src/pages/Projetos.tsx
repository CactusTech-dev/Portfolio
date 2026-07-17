import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

export default function Projetos() {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  // Extrai todas as tags únicas dos projetos
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('Todos');
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filtra os projetos com base na tag selecionada
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'Todos') {
      return projects;
    }
    return projects.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="home-container">
      <Header />

      <section className="portfolio-section projects-section">
        <div className="portfolio-header projects-header">
          <div>
            <span className="portfolio-subtitle">Nosso Portfolio</span>
            <h2 className="portfolio-title">TODOS OS PROJETOS</h2>
          </div>
          <p className="projects-introduction">
            Explore a galeria completa de soluções e produtos digitais que desenvolvemos. Use os filtros abaixo para buscar por tecnologias específicas.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="filter-container">
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`filter-button ${selectedTag === tag ? 'is-active' : ''}`}
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
          <div className="no-projects-message">
            Nenhum projeto encontrado com a tecnologia selecionada.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

import type { Project } from '../types/project';

type ProjectCardProps = Pick<Project, 'title' | 'description' | 'image' | 'tags' | 'links'>;

export default function ProjectCard({ title, description, image, tags, links }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img 
          src={image} 
          alt={title}
          className="project-image" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            // Show fallback wrapper on error
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="project-image-fallback" style={{ display: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <span className="project-fallback-tag">{tags[0]}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-tags-container">
          {tags.map((tech, index) => (
            <span key={index} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="project-title">
          {title}
        </h3>
        <p className="project-description">{description}</p>
        
        {links && (links.live || links.github) && (
          <div className="project-links-container">
            {links.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn live"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
            )}
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn github"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Código
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

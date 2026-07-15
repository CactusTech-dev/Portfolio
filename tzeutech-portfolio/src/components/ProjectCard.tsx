interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img 
          src={image} 
          alt={title}
          className="project-image" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="project-image-fallback">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" strokeWidth="0.5">
            <line x1="0" y1="0" x2="100" y2="100" />
            <line x1="100" y1="0" x2="0" y2="100" />
          </svg>
          <span className="project-fallback-tag">{tags[0]}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-tags-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((tech, index) => (
            <span key={index} className="project-tag" style={{ background: 'var(--code-bg)', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>
              {tech}
            </span>
          ))}
        </div>
        <h3 className="project-title" style={{ marginTop: '8px' }}>
          {title}
        </h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
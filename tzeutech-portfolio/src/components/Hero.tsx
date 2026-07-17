export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-grid-bg"></div>
      
      <div className="hero-geometric-container">
        <div className="hero-geometric-icon animated-geometric">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" className="geo-poly" />
            <line x1="50" y1="5" x2="50" y2="95" className="geo-line" />
            <line x1="5" y1="25" x2="95" y2="75" className="geo-line" />
            <line x1="95" y1="25" x2="5" y2="75" className="geo-line" />
            <circle cx="50" cy="50" r="15" className="geo-circle" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      
      <div className="hero-badge">
        <span className="hero-badge-dot"></span>
        Disponível para novos projetos
      </div>

      <h1 className="hero-title">
        CONSTRUINDO O FUTURO <br />
        <span className="hero-title-gradient">ATRAVÉS DO CÓDIGO.</span>
      </h1>
      
      <p className="hero-description">
        Criamos softwares sob medida, APIs escaláveis e interfaces de alta performance que transformam ideias em resultados digitais reais.
      </p>
      
      <div className="hero-cta-container">
        <a href="#projects" onClick={handleScrollToProjects} className="hero-cta-button">
          CONHEÇA NOSSO TRABALHO
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}

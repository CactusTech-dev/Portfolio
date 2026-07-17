import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contato() {
  return (
    <div className="home-container">
      <Header />

      <section className="portfolio-section contact-section">
        <div className="portfolio-header contact-header">
          <div className="contact-header-content">
            <span className="portfolio-subtitle">Vamos conversar</span>
            <h2 className="portfolio-title contact-title">REDES & CONTATOS</h2>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-info-card">
            <h3 className="contact-card-title">
              Canais de Comunicação
            </h3>
            <p className="contact-card-description">
              Tem alguma ideia de projeto, precisa de uma consultoria ou quer acelerar a transformação digital da sua empresa? Entre em contato diretamente através de nossos canais oficiais.
            </p>

            <div className="contact-methods">
              <a 
                href="mailto:tzeutechdesenvolvimento@gmail.com" 
                className="contact-item-link" 
              >
                <div className="contact-item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">E-mail Oficial</span>
                  <span className="contact-item-value">tzeutechdesenvolvimento@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/CactusTech-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-link" 
              >
                <div className="contact-item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-item-label">GitHub Corporativo</span>
                  <span className="contact-item-value">github.com/CactusTech-dev</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

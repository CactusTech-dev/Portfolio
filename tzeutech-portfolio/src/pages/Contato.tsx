import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contato() {
  return (
    <div className="home-container">
      <Header />

      <section className="portfolio-section" style={{ scrollMarginTop: '100px', padding: '60px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="portfolio-header" style={{ marginBottom: '40px', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ width: '100%' }}>
            <span className="portfolio-subtitle">Vamos conversar</span>
            <h2 className="portfolio-title" style={{ marginTop: '8px' }}>REDES & CONTATOS</h2>
          </div>
        </div>

        <div className="contact-container" style={{ width: '100%', maxWidth: '600px' }}>
          {/* Contact Info Card */}
          <div className="contact-info-card" style={{ padding: '40px 32px', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '28px', backgroundColor: 'var(--code-bg)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-h)', textAlign: 'center' }}>
              Canais de Comunicação
            </h3>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', textAlign: 'center', color: 'var(--text)' }}>
              Tem alguma ideia de projeto, precisa de uma consultoria ou quer acelerar a transformação digital da sua empresa? Entre em contato diretamente através de nossos canais oficiais.
            </p>

            <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email */}
              <a 
                href="mailto:tzeutechdesenvolvimento@gmail.com" 
                className="contact-item-link" 
                style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'var(--text)', transition: 'all 0.2s ease', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: 'var(--text-h)', backgroundColor: 'var(--accent-bg)', width: 44, height: 44, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.5px' }}>E-mail Oficial</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-h)', fontSize: '15px' }}>tzeutechdesenvolvimento@gmail.com</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/CactusTech-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-link" 
                style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'var(--text)', transition: 'all 0.2s ease', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: 'var(--text-h)', backgroundColor: 'var(--accent-bg)', width: 44, height: 44, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.5px' }}>GitHub Corporativo</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-h)', fontSize: '15px' }}>github.com/CactusTech-dev</span>
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

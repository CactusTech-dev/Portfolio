import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contato() {
  return (
    <div className="home-container">
      <Header />

      <section className="portfolio-section" style={{ scrollMarginTop: '100px', padding: '60px 0', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="portfolio-header" style={{ marginBottom: '24px' }}>
          <div>
            <span className="portfolio-subtitle">Vamos conversar</span>
            <h2 className="portfolio-title">REDES & CONTATOS</h2>
          </div>
        </div>

        <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Contact Info Card */}
          <div className="contact-info-card" style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-h)' }}>
              Entre em Contato
            </h3>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>
              Tem alguma ideia de projeto, precisa de uma consultoria ou quer acelerar a transformação digital da sua empresa? Nosso time está pronto para ajudar.
            </p>

            <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Email */}
              <a 
                href="mailto:tzeutechdesenvolvimento@gmail.com" 
                className="contact-item-link" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text)', transition: 'color 0.2s' }}
              >
                <div style={{ color: 'var(--text-h)', backgroundColor: 'var(--accent-bg)', width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 500 }}>E-mail</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-h)', fontSize: '14.5px' }}>tzeutechdesenvolvimento@gmail.com</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/CactusTech-dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-link" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text)', transition: 'color 0.2s' }}
              >
                <div style={{ color: 'var(--text-h)', backgroundColor: 'var(--accent-bg)', width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 500 }}>GitHub</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-h)', fontSize: '14.5px' }}>github.com/CactusTech-dev</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card" style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--code-bg)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontFamily: 'var(--heading)', fontSize: '20px', fontWeight: 700, color: 'var(--text-h)' }}>
              Envie uma Mensagem
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso! Entraremos em contato em breve.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="name" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-h)' }}>Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Seu nome ou empresa"
                  style={{ padding: '12px', border: '1px solid var(--border)', borderRadius: '6px', backgroundColor: 'var(--bg)', color: 'var(--text-h)', outline: 'none', transition: 'border-color 0.2s' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="email" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-h)' }}>E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Seu e-mail de contato"
                  style={{ padding: '12px', border: '1px solid var(--border)', borderRadius: '6px', backgroundColor: 'var(--bg)', color: 'var(--text-h)', outline: 'none', transition: 'border-color 0.2s' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="message" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-h)' }}>Mensagem</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  placeholder="Descreva brevemente o seu projeto ou dúvida..."
                  style={{ padding: '12px', border: '1px solid var(--border)', borderRadius: '6px', backgroundColor: 'var(--bg)', color: 'var(--text-h)', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="hero-cta-button" 
                style={{ padding: '12px 24px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

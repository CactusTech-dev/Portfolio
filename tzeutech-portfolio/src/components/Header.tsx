import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logoTZEU.png';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Inicializa o tema baseado nas classes atuais da tag html
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="home-header">
      <div className="home-header-wrapper">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
          <img src={logoImg} alt="Logo TZEU" className="logo-img-header" />
          <div className="logo-text-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="logo-text">TZEU</span>
            <span className="logo-subtext">Software House</span>
          </div>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/#projects" onClick={(e) => handleScroll(e, 'projects')} className="nav-link-standard">Projetos</a>
          <a href="/#services" onClick={(e) => handleScroll(e, 'services')} className="nav-link-standard">Serviços</a>
          <a href="/#about" onClick={(e) => handleScroll(e, 'about')} className="nav-link-standard">Sobre</a>
          <a href="/#members" onClick={(e) => handleScroll(e, 'members')} className="nav-link-standard">Integrantes</a>
          <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="nav-link-standard nav-link-special">Contatos</Link>

          {/* Theme Switcher Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-button"
            aria-label="Alternar Tema"
            title={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
          >
            {theme === 'light' ? (
              // Moon Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Sun Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import logoImg from '../assets/logoTZEU.png';

export default function Header() {
  return (
    <header className="home-header">
      <div className="home-header-wrapper">
        <div className="logo-container">
          <img src={logoImg} alt="Logo TZEU" className="logo-img-header" />
          <span className="logo-text">
            TZEU <span className="logo-subtext">| Software House</span>
          </span>
        </div>

        <nav className="nav-links">
          <a href="#projects" className="nav-link-standard">Projetos</a>
          <a href="#services" className="nav-link-standard">Serviços</a>
          <a href="#about" className="nav-link-standard">Sobre</a>
          <a href="#members" className="nav-link-standard">Integrantes</a>
          <Link to="/contato" className="nav-link-standard">Redes & Contatos</Link>
        </nav>
      </div>
    </header>
  );
}

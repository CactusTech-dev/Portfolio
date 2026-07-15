export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-brand">
          <div className="footer-logo">T</div>
          <span>&copy; {new Date().getFullYear()} TZEU Software House.</span>
        </div>
        <div className="footer-contacts">
          <span className="footer-contact-link">contato@tzeu.tech</span>
        </div>
      </div>
    </footer>
  );
}
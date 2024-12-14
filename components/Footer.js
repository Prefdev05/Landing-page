export default function Footer() {
    return (
      <footer>
        <div id='contacto' className="contact-info">
          <h3>Contáctame</h3>
          <p>Email: Juancabrera051975@gmail.com</p>
          <p>Teléfono: +57 3058952705</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <b>
                //
            </b>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Juan Esteban Cabrera. Todos los derechos reservados.</p>
      </footer>
    );
  }
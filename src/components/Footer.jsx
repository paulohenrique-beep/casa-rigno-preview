import { Instagram, MapPin, ExternalLink } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">CASA RIGNO</span>
            <p className="footer__tagline">
              Mais que um café, uma experiência.
            </p>
          </div>

          <div className="footer__links">
            <a
              href="https://www.instagram.com/cafeteriarigno/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <Instagram size={18} strokeWidth={1.5} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.hubt.com.br/casarigno/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
              <span>Menu</span>
            </a>
            <a
              href="https://www.google.com/maps/place/Casa+Rigno/@-14.8490428,-40.8359501"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <MapPin size={18} strokeWidth={1.5} />
              <span>Como chegar</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">Prévia conceitual de website.</p>
        </div>
      </div>
    </footer>
  )
}

import { MapPin } from 'lucide-react'
import './Localizacao.css'

export default function Localizacao() {
  return (
    <section id="localizacao" className="section localizacao">
      <div className="container">
        <div className="localizacao__content reveal">
          <span className="localizacao__overline">Localização</span>
          <h2 className="localizacao__title">
            Venha para<br />
            <em>a Casa.</em>
          </h2>

          <div className="localizacao__info">
            <div className="localizacao__address">
              <MapPin size={20} strokeWidth={1.5} className="localizacao__icon" />
              <div>
                <p className="localizacao__text">
                  Praça João Gonçalves, 138<br />
                  Centro<br />
                  Vitória da Conquista — BA
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Casa+Rigno/@-14.8490428,-40.8359501"
              target="_blank"
              rel="noopener noreferrer"
              className="localizacao__cta"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import './Atmosfera.css'
import mesaCompleta from '../assets/rigno/05-mesa-brunch-completa.jpg'
import brunch from '../assets/rigno/03-brunch-mesa-casa-rigno.jpg'
import cafeManha from '../assets/rigno/01-cafe-da-manha-presunto-omelete.jpg'

export default function Atmosfera() {
  return (
    <section id="experiencia" className="section atmosfera">
      <div className="container">
        <div className="atmosfera__header reveal">
          <span className="atmosfera__overline">Experiência</span>
          <h2 className="atmosfera__title">
            Entre, sente<br />
            <em>e fique um pouco.</em>
          </h2>
        </div>

        <div className="atmosfera__grid">
          <div className="atmosfera__item atmosfera__item--large reveal">
            <img
              src={mesaCompleta}
              alt="Mesa completa de brunch"
              className="atmosfera__img"
            />
          </div>
          <div className="atmosfera__item reveal reveal-delay-1">
            <img
              src={brunch}
              alt="Mesa de brunch"
              className="atmosfera__img"
            />
          </div>
          <div className="atmosfera__item reveal reveal-delay-2">
            <img
              src={cafeManha}
              alt="Café da manhã com presunto e omelete"
              className="atmosfera__img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

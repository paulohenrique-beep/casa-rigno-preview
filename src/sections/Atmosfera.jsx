import './Atmosfera.css'
import ambienteExterno from '../assets/rigno/imgi_41_670787089_18065291048691917_4950686231222092709_n.jpg'
import mesaCafe from '../assets/rigno/imgi_42_670170794_18064709594691917_284318161864360120_n.jpg'
import fachada from '../assets/rigno/imgi_51_549408568_1084539610495533_5530965006932230515_n.jpg'

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
              src={ambienteExterno}
              alt="Ambiente externo da Casa Rigno com mesas e plantas"
              className="atmosfera__img"
            />
          </div>
          <div className="atmosfera__item reveal reveal-delay-1">
            <img
              src={mesaCafe}
              alt="Mesa com café e acompanhamentos"
              className="atmosfera__img"
            />
          </div>
          <div className="atmosfera__item reveal reveal-delay-2">
            <img
              src={fachada}
              alt="Fachada da Casa Rigno"
              className="atmosfera__img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import './ACasa.css'
import ambiente from '../assets/rigno/imgi_61_629622924_18057166913691917_7687581344029541434_n.jpg'

export default function ACasa() {
  return (
    <section id="a-casa" className="section a-casa">
      <div className="container">
        <div className="a-casa__grid">
          <div className="a-casa__content reveal">
            <span className="a-casa__overline">A Casa</span>
            <h2 className="a-casa__title">
              Uma casa feita<br />
              <em>para ficar.</em>
            </h2>
            <p className="a-casa__text">
              A Casa Rigno é mais que uma cafeteria. É um espaço onde o tempo
              desacelera, onde conversas ganham corpo e onde cada detalhe —
              do grão à xícara — foi pensado para criar momentos que ficam.
            </p>
            <p className="a-casa__text">
              Aqui, café especial, padaria artesanal e gastronomia se encontram
              em um ambiente que celebra encontros, histórias e a cultura do café.
            </p>
          </div>
          <div className="a-casa__image-wrapper reveal reveal-delay-1">
            <img
              src={ambiente}
              alt="Ambiente interno da Casa Rigno com arcos, plantas e mesas"
              className="a-casa__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

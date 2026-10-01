import './Cafe.css'
import cafe from '../assets/rigno/imgi_42_670170794_18064709594691917_284318161864360120_n.jpg'
import croissant from '../assets/rigno/imgi_35_590427571_18050667818691917_4840122016071281683_n.jpg'
import doces from '../assets/rigno/imgi_18_716550580_18596146474029537_2205228871764035072_n.jpg'

export default function Cafe() {
  return (
    <section id="cafe" className="section cafe">
      <div className="container">
        <div className="cafe__header reveal">
          <span className="cafe__overline">Café Especial</span>
          <h2 className="cafe__title">
            Antes da xícara,<br />
            <em>existe uma história.</em>
          </h2>
        </div>

        <div className="cafe__grid">
          <div className="cafe__item reveal">
            <div className="cafe__item-image">
              <img
                src={cafe}
                alt="Café com latte art e acompanhamentos na Casa Rigno"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Café</h3>
            <p className="cafe__item-text">
              Espresso, filtrados e métodos especiais preparados com cuidado.
            </p>
          </div>

          <div className="cafe__item reveal reveal-delay-1">
            <div className="cafe__item-image">
              <img
                src={croissant}
                alt="Croissant artesanal com mussarela e tomate"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Padaria</h3>
            <p className="cafe__item-text">
              Croissants e pães artesanais, frescos todos os dias.
            </p>
          </div>

          <div className="cafe__item reveal reveal-delay-2">
            <div className="cafe__item-image">
              <img
                src={doces}
                alt="Doces e confeitaria artesanal da Casa Rigno"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Confeitaria</h3>
            <p className="cafe__item-text">
              Doces finos e sobremesas autorais para acompanhar o café.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

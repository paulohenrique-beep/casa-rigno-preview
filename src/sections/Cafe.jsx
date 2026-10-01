import './Cafe.css'
import icedLatte from '../assets/rigno/02-iced-latte-casa-rigno.jpg'
import paes from '../assets/rigno/06-paes-artesanais.jpg'
import waffle from '../assets/rigno/07-cafe-waffle-brunch.jpg'

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
                src={icedLatte}
                alt="Iced latte da Casa Rigno"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Origem</h3>
            <p className="cafe__item-text">
              Grãos selecionados de produtores que compartilham nossa paixão
              por qualidade e sustentabilidade.
            </p>
          </div>

          <div className="cafe__item reveal reveal-delay-1">
            <div className="cafe__item-image">
              <img
                src={paes}
                alt="Pães artesanais da Casa Rigno"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Torra</h3>
            <p className="cafe__item-text">
              Torra cuidadosa que respeita as características únicas de cada
              origem, revelando sabores autênticos.
            </p>
          </div>

          <div className="cafe__item reveal reveal-delay-2">
            <div className="cafe__item-image">
              <img
                src={waffle}
                alt="Mesa de brunch com waffle e café"
                className="cafe__item-img"
              />
            </div>
            <h3 className="cafe__item-title">Preparo</h3>
            <p className="cafe__item-text">
              Métodos precisos e extração equilibrada para uma xícara que
              conta a história do grão.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

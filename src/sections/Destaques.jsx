import './Destaques.css'
import sanduiche from '../assets/rigno/imgi_17_720417642_18072695504691917_4274961719977558904_n.jpg'
import panetone from '../assets/rigno/imgi_18_600081021_18051172025691917_1904922961473131227_n.jpg'

const destaques = [
  {
    nome: 'Sanduíche de Brioche',
    descricao: 'Brioche artesanal com ovos e queijo',
    tag: 'Brunch',
    imagem: sanduiche,
  },
  {
    nome: 'Panetone',
    descricao: 'Panetone artesanal com chocolate',
    tag: 'Confeitaria',
    imagem: panetone,
  },
]

export default function Destaques() {
  return (
    <section className="section destaques">
      <div className="container">
        <div className="destaques__header reveal">
          <span className="destaques__overline">Destaques</span>
          <h2 className="destaques__title">
            Clássicos da<br />
            <em>nossa casa.</em>
          </h2>
        </div>

        <div className="destaques__grid">
          {destaques.map((item, i) => (
            <div
              key={item.nome}
              className={`destaques__item reveal reveal-delay-${i + 1}`}
            >
              <div className="destaques__item-image">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="destaques__item-img"
                />
                <span className="destaques__tag">{item.tag}</span>
              </div>
              <div className="destaques__item-content">
                <h3 className="destaques__item-title">{item.nome}</h3>
                <p className="destaques__item-desc">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import './Experiencias.css'
import brunch from '../assets/rigno/05-mesa-brunch-completa.jpg'
import cafeManha from '../assets/rigno/01-cafe-da-manha-presunto-omelete.jpg'

const categorias = [
  {
    nome: 'Brunch',
    descricao: 'Combinações para começar bem o dia',
    imagem: brunch,
  },
  {
    nome: 'Café da Manhã',
    descricao: 'Clássicos para uma manhã perfeita',
    imagem: cafeManha,
  },
]

export default function Experiencias() {
  return (
    <section id="menu" className="section experiencias">
      <div className="container">
        <div className="experiencias__header reveal">
          <span className="experiencias__overline">Experiências</span>
          <h2 className="experiencias__title">
            Sabores que<br />
            <em>contam histórias.</em>
          </h2>
        </div>

        <div className="experiencias__grid">
          {categorias.map((cat, i) => (
            <div
              key={cat.nome}
              className={`experiencias__card reveal reveal-delay-${i + 1}`}
            >
              <div className="experiencias__card-image">
                <img
                  src={cat.imagem}
                  alt={cat.nome}
                  className="experiencias__card-img"
                />
                <div className="experiencias__card-overlay" />
                <div className="experiencias__card-content">
                  <h3 className="experiencias__card-title">{cat.nome}</h3>
                  <p className="experiencias__card-desc">{cat.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experiencias__cta reveal">
          <a
            href="https://www.hubt.com.br/casarigno/"
            target="_blank"
            rel="noopener noreferrer"
            className="experiencias__cta-btn"
          >
            Explorar o menu
          </a>
        </div>
      </div>
    </section>
  )
}

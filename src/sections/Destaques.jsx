import './Destaques.css'
import sucos from '../assets/rigno/09-cafe-da-manha-sucos.jpg'
import avocadoToast from '../assets/rigno/04-avocado-toast.jpg'

const destaques = [
  {
    nome: 'Sucos Naturais',
    descricao: 'Freshly squeezed com frutas da estação',
    tag: 'Bebidas',
    imagem: sucos,
  },
  {
    nome: 'Avocado Toast',
    descricao: 'Pão artesanal com abacate e temperos especiais',
    tag: 'Saudável',
    imagem: avocadoToast,
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

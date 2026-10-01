import { Instagram as InstagramIcon } from 'lucide-react'
import './Instagram.css'
import img1 from '../assets/rigno/imgi_17_720417642_18072695504691917_4274961719977558904_n.jpg'
import img2 from '../assets/rigno/imgi_42_670170794_18064709594691917_284318161864360120_n.jpg'
import img3 from '../assets/rigno/imgi_35_590427571_18050667818691917_4840122016071281683_n.jpg'
import img4 from '../assets/rigno/imgi_18_716550580_18596146474029537_2205228871764035072_n.jpg'
import img5 from '../assets/rigno/imgi_41_670787089_18065291048691917_4950686231222092709_n.jpg'
import img6 from '../assets/rigno/imgi_61_629622924_18057166913691917_7687581344029541434_n.jpg'

const images = [
  { src: img1, alt: 'Sanduíche de brioche com ovos e queijo' },
  { src: img2, alt: 'Café com latte art e acompanhamentos' },
  { src: img3, alt: 'Croissant artesanal com mussarela e tomate' },
  { src: img4, alt: 'Doces e confeitaria artesanal' },
  { src: img5, alt: 'Ambiente externo com mesas e plantas' },
  { src: img6, alt: 'Ambiente interno com arcos e plantas' },
]

export default function Instagram() {
  return (
    <section className="section instagram">
      <div className="container">
        <div className="instagram__header reveal">
          <span className="instagram__overline">Instagram</span>
          <h2 className="instagram__title">
            Da Casa para<br />
            <em>o seu feed.</em>
          </h2>
        </div>

        <div className="instagram__grid">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/cafeteriarigno/"
              target="_blank"
              rel="noopener noreferrer"
              className={`instagram__item reveal reveal-delay-${(i % 3) + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="instagram__img"
              />
              <div className="instagram__overlay">
                <InstagramIcon size={28} strokeWidth={1.5} className="instagram__icon" />
              </div>
            </a>
          ))}
        </div>

        <div className="instagram__cta reveal">
          <a
            href="https://www.instagram.com/cafeteriarigno/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram__handle"
          >
            @cafeteriarigno
          </a>
        </div>
      </div>
    </section>
  )
}

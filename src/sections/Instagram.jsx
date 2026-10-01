import { Instagram as InstagramIcon } from 'lucide-react'
import './Instagram.css'
import img1 from '../assets/rigno/01-cafe-da-manha-presunto-omelete.jpg'
import img2 from '../assets/rigno/02-iced-latte-casa-rigno.jpg'
import img3 from '../assets/rigno/03-brunch-mesa-casa-rigno.jpg'
import img4 from '../assets/rigno/04-avocado-toast.jpg'
import img5 from '../assets/rigno/05-mesa-brunch-completa.jpg'
import img6 from '../assets/rigno/06-paes-artesanais.jpg'

const images = [
  { src: img1, alt: 'Café da manhã com presunto e omelete' },
  { src: img2, alt: 'Iced latte da Casa Rigno' },
  { src: img3, alt: 'Mesa de brunch' },
  { src: img4, alt: 'Avocado toast' },
  { src: img5, alt: 'Mesa completa de brunch' },
  { src: img6, alt: 'Pães artesanais' },
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

import { useReveal } from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import ACasa from './sections/ACasa.jsx'
import Cafe from './sections/Cafe.jsx'
import Experiencias from './sections/Experiencias.jsx'
import Destaques from './sections/Destaques.jsx'
import Atmosfera from './sections/Atmosfera.jsx'
import Origem from './sections/Origem.jsx'
import Instagram from './sections/Instagram.jsx'
import Localizacao from './sections/Localizacao.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useReveal()

  return (
    <main>
      <Header />
      <Hero />
      <ACasa />
      <Cafe />
      <Experiencias />
      <Destaques />
      <Atmosfera />
      <Origem />
      <Instagram />
      <Localizacao />
      <Footer />
    </main>
  )
}

export default App

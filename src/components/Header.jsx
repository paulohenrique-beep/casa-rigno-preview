import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Casa', href: '#a-casa' },
  { label: 'Café', href: '#cafe' },
  { label: 'Cardápio', href: '#menu' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const openMenu = () => {
    setMobileOpen(true)
    setTimeout(() => {
      const firstLink = menuRef.current?.querySelector('a')
      firstLink?.focus()
    }, 100)
  }

  const closeMenu = () => {
    setMobileOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <a href="#inicio" className="header__logo">
            <span className="header__logo-text">CASA RIGNO</span>
          </a>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              href="https://www.hubt.com.br/casarigno/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              Ver cardápio
            </a>
            <button
              ref={buttonRef}
              className="header__burger"
              onClick={openMenu}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
      >
        <div className="mobile-menu__header">
          <span className="mobile-menu__logo">CASA RIGNO</span>
          <button
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              style={{ transitionDelay: `${i * 0.05}s` }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.hubt.com.br/casarigno/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__cta"
            onClick={closeMenu}
          >
            Ver cardápio
          </a>
        </nav>
      </div>
    </>
  )
}

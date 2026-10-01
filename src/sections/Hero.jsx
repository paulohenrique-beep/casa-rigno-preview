import { useRef, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './Hero.css'
import poster from '../assets/rigno/imgi_42_670170794_18064709594691917_284318161864360120_n.jpg'

export default function Hero() {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setPlayback = () => {
      video.playbackRate = 0.65
      setVideoReady(true)
    }

    const handleError = () => {
      setVideoError(true)
    }

    if (video.readyState >= 1) {
      setPlayback()
    } else {
      video.addEventListener('loadedmetadata', setPlayback, { once: true })
    }

    video.addEventListener('canplay', setPlayback)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadedmetadata', setPlayback)
      video.removeEventListener('canplay', setPlayback)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <section id="inicio" className="hero">
      {/* Video Background */}
      <div className="hero__video-wrapper">
        {!videoError && (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src="/video/hero-rigno.mp4" type="video/mp4" />
          </video>
        )}
        {videoError && (
          <img
            src={poster}
            alt="Casa Rigno"
            className="hero__video hero__video--poster"
          />
        )}

        {/* Overlay sofisticado */}
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__content-inner">
          <span className="hero__overline">Cafés Especiais · Padaria Artesanal</span>
          <h1 className="hero__title">
            Uma casa.<br />
            Muitas histórias.<br />
            <em>Um café extraordinário.</em>
          </h1>
          <p className="hero__subtitle">
            Onde cada xícara conta uma origem e cada encontro vira memória.
          </p>
          <div className="hero__ctas">
            <a
              href="https://www.hubt.com.br/casarigno/"
              className="hero__cta hero__cta--primary"
            >
              Ver cardápio
            </a>
            <a href="#localizacao" className="hero__cta hero__cta--secondary">
              Como chegar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`hero__scroll ${videoReady ? 'hero__scroll--visible' : ''}`}>
        <span className="hero__scroll-text">Descubra a Casa</span>
        <ChevronDown size={18} strokeWidth={1.5} className="hero__scroll-icon" />
      </div>
    </section>
  )
}

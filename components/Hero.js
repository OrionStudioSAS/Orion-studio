'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const DURATION = 4000

const slides = [
  {
    photo: '/images/VincentChopine.webp',
    initials: 'VC',
    name: 'Vincent Chopine',
    text: '"Nous avons fait appel à Orion Studio pour la création de notre site internet et l\'expérience a été excellente du début à la fin. L\'équipe a su parfaitement comprendre nos besoins."',
    role: '— Membre de l\'association AEV',
  },
  {
    photo: '/images/VirginieLelong.webp',
    initials: 'VL',
    name: 'Virginie Lelong',
    text: '"Absolument ravie du résultat\u00a0! Design soigné, navigation fluide et accompagnement très professionnel du début à la fin. À l\'écoute, réactif et force de proposition."',
    role: '— Diététicienne nutritionniste',
  },
  {
    photo: '/images/ThierryCordier.webp',
    initials: 'TC',
    name: 'Thierry Cordier',
    text: '"Leur expertise sur le développement sur-mesure est impressionnante et ils ont également mis en place plusieurs automatisations qui nous font gagner un temps précieux au quotidien."',
    role: '— Membre de l\'association AEV',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const progressRef = useRef(null)
  const timerRef = useRef(null)
  const currentRef = useRef(0)
  const startProgressFn = useRef(null)

  startProgressFn.current = (idx) => {
    clearTimeout(timerRef.current)
    const bar = progressRef.current
    if (!bar) return
    bar.style.transition = 'none'
    bar.style.width = '0%'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${DURATION}ms linear`
        bar.style.width = '100%'
      })
    })
    timerRef.current = setTimeout(() => {
      const next = (idx + 1) % slides.length
      currentRef.current = next
      setCurrent(next)
      startProgressFn.current(next)
    }, DURATION)
  }

  const goToSlide = (index) => {
    const next = ((index % slides.length) + slides.length) % slides.length
    currentRef.current = next
    setCurrent(next)
    startProgressFn.current(next)
  }

  useEffect(() => {
    startProgressFn.current(0)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <section className="hero" id="home">

      {/* LEFT COLUMN */}
      <div className="hero__left">

        {/* Nav links — top right */}
        <nav className="hero__nav-links">
          <Link href="/le-studio">Le studio</Link>
          <Link href="/projets">Nos projets</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/site-vitrine">Site vitrine</Link>
          <Link href="/site-e-commerce">E-commerce</Link>
          <Link href="/automatisation">Automatisation</Link>
        </nav>

        <div className="hero__left-content">

          <div className="hero__google">
            <span className="hero__google-star">★</span>
            <span>5/5 - 6 avis sur</span>
            <span className="hero__google-logo">
              <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
            </span>
          </div>

          <h1 className="hero__title">
            AGENCE <span className="gradient-text">WEB</span> &amp;<br />
            <span className="gradient-text">AUTOMATISATIONS</span>.
          </h1>

          <p className="hero__subtitle">
            Que vous soyez entrepreneur, dirigeant de PME ou marque en développement, nous concevons des sites vitrines et boutiques en ligne sur-mesure qui renforcent votre visibilité, votre crédibilité et transforment votre présence en ligne en véritable levier de croissance.
          </p>

          <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
            <span className="text-cta">Parlez-nous de votre projet</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
          </Link>

        </div>

        {/* Testimonial slider */}
        <div className="hero__slider">
          <div className="hero__slides">
            {slides.map((slide, i) => (
              <div key={i} className={`hero__slide${current === i ? ' active' : ''}`}>
                <div className="hero__slide-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.photo} alt={slide.name} width="80" height="80" />
                </div>
                <div className="hero__slide-body">
                  <strong>{slide.name}</strong>
                  <p>{slide.text}</p>
                  <em>{slide.role}</em>
                </div>
              </div>
            ))}
          </div>
          <div className="hero__slide-footer">
            <div className="hero__slide-progress">
              <div className="hero__slide-bar" ref={progressRef}></div>
            </div>
            <button
              className="hero__slide-next"
              aria-label="Avis suivant"
              onClick={() => goToSlide(current + 1)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="hero__right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/banner.webp" alt="Équipe Orion Studio" className="hero__photo" width="1024" height="1536" />
        <div className="hero__float-bar">
          <span className="hero__float-location">Paris &amp; Cannes 🇫🇷</span>
          <Link href="#contact" className="hero__float-cta">
            Refaire mon site web
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
          </Link>
        </div>
      </div>

    </section>
  )
}

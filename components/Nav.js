'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const services = [
  {
    tag: 'Sur-mesure',
    title: 'Site Vitrine',
    desc: 'Un site 100% propriétaire, livré en 2–4 semaines, sans abonnement plateforme.',
    href: '/site-vitrine',
  },
  {
    tag: 'Shopify',
    title: 'E-commerce',
    desc: "Transformez votre trafic en chiffre d'affaires avec une boutique performante.",
    href: '/site-e-commerce',
  },
  {
    tag: 'Make · N8N',
    title: 'Automatisation',
    desc: 'Connectez vos outils, éliminez les tâches répétitives, gagnez du temps.',
    href: '/automatisation',
  },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    if (!isHome) return // Sur les sous-pages, nav toujours visible
    const handleScroll = () => {
      const heroEl = document.getElementById('home')
      const threshold = heroEl ? heroEl.offsetHeight : window.innerHeight
      setScrolled(window.scrollY >= threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const openDropdown = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__bg" />
      <div className="nav__inner">
        <Link href="/" className="nav__logo">ORION STUDIO.</Link>

        <nav className="nav__menu">
          <span className="nav__brand">Agence web 🇫🇷</span>
          <span className="nav__sep">|</span>
          <Link href="/le-studio" className="nav__link">Le studio</Link>
          <Link href="/projets" className="nav__link">Nos projets</Link>

          {/* Trigger — hover géré en JS, pas en CSS */}
          <span
            className={`nav__link nav__link--services${servicesOpen ? ' active' : ''}`}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            Services <span className="nav__plus">+</span>
          </span>

          <Link href="/blog" className="nav__link">Blog</Link>
        </nav>

        <Link href="#contact" className="nav__cta">
          Parlez-nous de votre projet
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/starwhite.png" alt="" className="star" />
        </Link>

        <button
          className={`nav__toggle${mobileOpen ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Dropdown — enfant direct de <header> pour éviter le stacking context de nav__menu */}
      <div
        className={`nav__dropdown${servicesOpen ? ' open' : ''}`}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <div className="nav__dropdown-inner">
          <div className="nav__dropdown-grid">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="nav__service-card"
                onClick={() => setServicesOpen(false)}
              >
                <span className="nav__service-tag">{s.tag}</span>
                <span className="nav__service-title">{s.title}</span>
                <p className="nav__service-desc">{s.desc}</p>
                <span className="nav__service-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={`nav__mobile${mobileOpen ? ' open' : ''}`}>
        <Link href="/le-studio" onClick={closeMobile}>Le studio</Link>
        <Link href="/projets" onClick={closeMobile}>Nos projets</Link>
        <span className="nav__mobile-label">Services</span>
        <Link href="/site-vitrine" onClick={closeMobile}>Site Vitrine</Link>
        <Link href="/site-e-commerce" onClick={closeMobile}>Site E-commerce</Link>
        <Link href="/automatisation" onClick={closeMobile}>Automatisation</Link>
        <Link href="/blog" onClick={closeMobile}>Blog</Link>
        <Link href="#contact" onClick={closeMobile}>Parlez-nous de votre projet</Link>
      </div>
    </header>
  )
}

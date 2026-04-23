'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const services = [
  {
    tag: 'Sur-mesure',
    title: 'Site internet',
    desc: 'Un site simple et beau, livré en 1 à 2 semaines. À vous, à 100%.',
    href: '/site-internet',
  },
  {
    tag: 'Shopify',
    title: 'E-commerce',
    desc: "Une boutique en ligne pensée pour vendre, simple à gérer.",
    href: '/site-e-commerce',
  },
  {
    tag: 'Make · n8n',
    title: 'Automatisation',
    desc: 'Vos outils communiquent, vos tâches répétitives disparaissent.',
    href: '/automatisation',
  },
  {
    tag: 'Application web',
    title: 'SaaS',
    desc: "Votre application sur-mesure, du concept au lancement.",
    href: '/saas',
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
          <Link href="/orion-admin" className="nav__link">Orion Admin</Link>

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
          <img src="/images/starwhite.png" alt="" className="star" width="14" height="14" />
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
        <Link href="/orion-admin" onClick={closeMobile}>Orion Admin</Link>
        <span className="nav__mobile-label">Services</span>
        <Link href="/site-internet" onClick={closeMobile}>Site internet</Link>
        <Link href="/site-e-commerce" onClick={closeMobile}>E-commerce</Link>
        <Link href="/automatisation" onClick={closeMobile}>Automatisation</Link>
        <Link href="/saas" onClick={closeMobile}>SaaS</Link>
        <Link href="/blog" onClick={closeMobile}>Blog</Link>
        <Link href="#contact" onClick={closeMobile}>Parlez-nous de votre projet</Link>
      </div>
    </header>
  )
}

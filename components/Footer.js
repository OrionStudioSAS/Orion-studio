'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

function formatTime(date) {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Paris',
  })
}

export default function Footer() {
  const [time, setTime] = useState('--:--:--')
  const logoRef    = useRef(null)
  const stageRef   = useRef(null)

  /* Horloge */
  useEffect(() => {
    setTime(formatTime(new Date()))
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  /* Logo parallax — monte depuis le bas de la page */
  useEffect(() => {
    const logo  = logoRef.current
    const stage = stageRef.current
    if (!logo || !stage) return

    const onScroll = () => {
      const wh      = window.innerHeight
      const scrollY = window.scrollY
      const rect    = stage.getBoundingClientRect()

      // Position absolue dans le document
      const absTop    = scrollY + rect.top
      const absBottom = absTop + stage.offsetHeight

      // start : viewport bottom touche le haut du stage (logo hors vue)
      // end   : viewport bottom touche le bas du stage = bas de la page (logo pleinement visible)
      const start = absTop - wh
      const end   = absBottom - wh        // = document.scrollHeight - wh = scroll max

      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)))
      logo.style.transform = `translateY(${(1 - progress) * 105}%)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      <div className="container">

        {/* ─── 5 colonnes ─────────────────────────────────────── */}
        <div className="footer__grid">

          {/* 1 — Brand + socials */}
          <div className="footer__col">
            <Link href="/" className="footer__col-brand">ORION STUDIO.</Link>
            <p className="footer__col-desc">
              Agence web 100&nbsp;% française spécialisée en création de sites sur-mesure et automatisations pour entrepreneurs et PME ambitieuses.
            </p>
            <div className="footer__socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://instagram.com/orionstudio.io"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* 2 — Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <nav className="footer__col-links">
              <Link href="/site-vitrine">Site Vitrine</Link>
              <Link href="/site-e-commerce">Site E-commerce</Link>
              <Link href="/automatisation">Automatisation</Link>
            </nav>
          </div>

          {/* 3 — L'agence */}
          <div className="footer__col">
            <h4 className="footer__col-title">L&apos;Agence</h4>
            <nav className="footer__col-links">
              <Link href="/le-studio">Le Studio</Link>
              <Link href="/projets">Nos Projets</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>

          {/* 4 — Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <nav className="footer__col-links">
              <a href="mailto:julien@orion-studio.io">julien@orion-studio.io</a>
              <Link href="#contact">Démarrer un projet</Link>
            </nav>
          </div>

          {/* 5 — Adresses */}
          <div className="footer__col">
            <h4 className="footer__col-title">Adresses</h4>
            <div className="footer__locations">
              <div className="footer__location">
                <div className="footer__location-top">
                  <span className="footer__city">Paris</span>
                  <span className="footer__time">{time}</span>
                </div>
                <address>60 Rue François 1er<br />75008 Paris</address>
              </div>
              <div className="footer__location">
                <div className="footer__location-top">
                  <span className="footer__city">Cannes</span>
                  <span className="footer__time">{time}</span>
                </div>
                <address>6 Rue Merle<br />06400 Cannes</address>
              </div>
            </div>
          </div>

        </div>

        {/* ─── Bas de page ─────────────────────────────────────── */}
        <div className="footer__bottom">
          <span>© 2025 Orion Studio. Tous droits réservés.</span>
          <div className="footer__legal">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>

      </div>

      {/* ─── Grand logo animé ────────────────────────────────────
           Overflow hidden = masque le logo avant qu'il monte      */}
      <div className="footer__logo-stage" ref={stageRef}>
        <div className="footer__logo-big" ref={logoRef}>
          ORION STUDIO.
        </div>
      </div>

    </footer>
  )
}

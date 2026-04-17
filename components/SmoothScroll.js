'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    // Expose globalement pour permettre des scrollTo programmés (ex. ancres #contact)
    window.lenis = lenis

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercepter les ancres (#contact, etc.) pour un scroll fluide
    const handleAnchor = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -20 })
    }
    document.addEventListener('click', handleAnchor)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchor)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return null
}

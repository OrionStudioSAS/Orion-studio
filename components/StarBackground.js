'use client'
import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    // ── Génération des étoiles ──────────────────────────────
    let stars = []

    const buildStars = (w, h) => {
      // ~1 étoile / 6 000 px² — adaptatif à la taille d'écran
      const count = Math.round((w * h) / 6000)
      stars = Array.from({ length: count }, () => ({
        x:     Math.random() * w,
        y:     Math.random() * h,
        r:     Math.random() * 0.7 + 0.2,          // 0.2 – 0.9 px
        alpha: Math.random() * 0.35 + 0.15,         // 0.15 – 0.5 (base)
        amp:   Math.random() * 0.12 + 0.03,         // amplitude scintillement
        speed: Math.random() * 0.0006 + 0.0002,     // très lent
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      buildStars(canvas.width, canvas.height)
    }

    resize()

    // ── Boucle de rendu ─────────────────────────────────────
    const draw = (t) => {
      // Fond noir du site — le canvas sert de background global
      ctx.fillStyle = '#080808'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const s of stars) {
        const a = s.alpha + Math.sin(t * s.speed + s.phase) * s.amp
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, a))})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  )
}

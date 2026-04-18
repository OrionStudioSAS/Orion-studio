'use client'
import { useEffect } from 'react'

/**
 * Mouse-tracking spotlight pour les cartes services.
 * Met à jour --mx et --my en fonction de la position du curseur dans la carte.
 * Sélecteur configurable, défaut : .sv-service-card
 */
export default function SpotlightCards({ selector = '.sv-service-card' }) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector)
    if (!cards.length) return

    const handlers = []

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mx', `${x}px`)
        card.style.setProperty('--my', `${y}px`)
      }
      card.addEventListener('mousemove', onMove)
      handlers.push([card, onMove])
    })

    return () => {
      handlers.forEach(([card, fn]) => card.removeEventListener('mousemove', fn))
    }
  }, [selector])

  return null
}

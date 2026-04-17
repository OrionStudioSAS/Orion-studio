'use client'
import { useEffect } from 'react'

export default function LeStudioAnimations() {
  useEffect(() => {
    const observe = (selector, threshold = 0.12, margin = '-5% 0px 0px 0px') => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold, rootMargin: margin }
      )
      document.querySelectorAll(selector).forEach(el => obs.observe(el))
      return obs
    }

    const observers = [
      // Hero
      observe('.ls-hero__tag',   0.3),
      observe('.ls-hero__title', 0.3),
      observe('.ls-hero__desc',  0.2),
      observe('.ls-hero__stats', 0.2),
      observe('.ls-stat',        0.2),

      // Mission
      observe('.ls-mission',       0.1, '-3% 0px 0px 0px'),
      observe('.ls-mission__left > *',  0.2),
      observe('.ls-mission__right > *', 0.15),

      // Valeurs
      observe('.ls-values',            0.08, '-3% 0px 0px 0px'),
      observe('.ls-values__header > *', 0.2),
      observe('.ls-value-card',        0.12),

      // Bureaux
      observe('.ls-offices',           0.1, '-3% 0px 0px 0px'),
      observe('.ls-offices__left > *', 0.2),
      observe('.ls-location',          0.15),

      // Contact (partagé)
      observe('.contact__header', 0.15),
      observe('.contact__panels', 0.1),
    ]

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return null
}

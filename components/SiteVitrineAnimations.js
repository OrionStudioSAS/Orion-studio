'use client'
import { useEffect } from 'react'

export default function SiteVitrineAnimations() {
  useEffect(() => {
    // ── Observer générique pour les sections ──────────────────
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            sectionObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '-6% 0px 0px 0px' }
    )

    // ── Observer avec stagger pour les enfants ────────────────
    const childObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            childObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-4% 0px 0px 0px' }
    )

    // Sections entières
    document.querySelectorAll('.sv-why, .sv-services').forEach(el => {
      sectionObs.observe(el)
    })

    // Éléments individuels avec stagger
    document.querySelectorAll(
      '.sv-why__item, .sv-service-card, .sv-why__left > *, .sv-why__right,' +
      '.project-card,' +
      '.faq__left > *, .faq__right,' +
      '.contact__header, .contact__panels'
    ).forEach(el => childObs.observe(el))

    // Sections pour illuminate border
    document.querySelectorAll('.projects, .testimonials').forEach(el => {
      sectionObs.observe(el)
    })

    return () => {
      sectionObs.disconnect()
      childObs.disconnect()
    }
  }, [])

  return null
}

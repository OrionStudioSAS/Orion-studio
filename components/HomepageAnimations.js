'use client'
import { useEffect } from 'react'

export default function HomepageAnimations() {
  useEffect(() => {
    const make = (threshold = 0.12, rootMargin = '-5% 0px 0px 0px') =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              obs.unobserve(entry.target)
            }
          })
          // trick : rebind named ref below
        },
        { threshold, rootMargin }
      )

    // On crée les observers séparément avec un helper propre
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
      // Hero — éléments gauche sur chargement (CSS animation directe, pas d'observer)

      // Studio
      observe('.studio__left > *', 0.2),
      observe('.studio__right',    0.15),

      // Expertises (les lignes ont déjà leur propre observer)
      observe('.expertise-content', 0.15),
      observe('.expertises__heading', 0.3),

      // Projects
      observe('.projects',     0.1, '-3% 0px 0px 0px'),
      observe('.project-card', 0.1),

      // Stack
      observe('.stack__left > *', 0.2),
      observe('.stack__item',     0.15),

      // Testimonials
      observe('.testimonials',    0.08, '-3% 0px 0px 0px'),
      observe('.testimonial-card', 0.1),

      // FAQ
      observe('.faq__left > *', 0.15),
      observe('.faq__right',    0.1),

      // Contact
      observe('.contact__header', 0.15),
      observe('.contact__panels', 0.1),
    ]

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return null
}

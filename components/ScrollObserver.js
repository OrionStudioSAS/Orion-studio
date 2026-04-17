'use client'
import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const selectors = [
      '.service-card',
      '.project-card',
      '.testimonial-card',
      '.process-step',
      '.stack-item',
      '.faq-item',
      '.section-header',
    ]

    document.querySelectorAll(selectors.join(', ')).forEach((el) => {
      el.classList.add('fade-up')
      const siblings = el.parentElement.querySelectorAll(':scope > *')
      const siblingIndex = Array.from(siblings).indexOf(el)
      if (siblingIndex > 0) {
        el.style.transitionDelay = `${Math.min(siblingIndex * 0.08, 0.32)}s`
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

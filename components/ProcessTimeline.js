'use client'
import { useEffect, useRef } from 'react'

export default function ProcessTimeline({ tag = 'COMMENT ÇA SE PASSE', title, steps }) {
  const stepsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )

    stepsRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="process">
      <div className="container">

        <div className="process__header">
          <span className="section-tag">{tag}</span>
          <h2 className="process__title">{title}</h2>
        </div>

        <ol className="process__list">
          {steps.map((s, i) => (
            <li
              key={s.num}
              ref={(el) => { stepsRef.current[i] = el }}
              className="process__step"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="process__step-aside">
                <span className="process__step-num">{s.num}</span>
                <span className="process__step-bar" aria-hidden="true" />
              </div>
              <div className="process__step-body">
                <h3 className="process__step-title">{s.title}</h3>
                <p className="process__step-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

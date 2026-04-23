'use client'
import { useRef, useEffect } from 'react'

const tools = [
  {
    icon: '/images/logo-shopify.svg',
    name: 'Shopify',
    desc: 'La référence mondiale du e-commerce',
  },
  {
    icon: '/images/logo-make.svg',
    name: 'n8n',
    desc: 'Connectez, automatisez, accélérez',
  },
  {
    icon: '/images/logo-figma.svg',
    name: 'Figma',
    desc: "De l'idée au prototype, sans friction",
  },
  {
    icon: '/images/logo-clickup.svg',
    name: 'ClickUp',
    desc: 'Une seule plateforme pour tout piloter',
  },
]

export default function Stack() {
  const dividerRef = useRef(null)

  useEffect(() => {
    const el = dividerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.5, rootMargin: '-10% 0px 0px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stack">
      <div className="container">

        {/* LEFT */}
        <div className="stack__left">
          <h2 className="stack__title">
            NOTRE <span className="gradient-text">STACK</span>{' '}
            <span className="gradient-text">TECHNIQUE</span>
          </h2>
          <p className="stack__desc">
            Ensemble, nous créons des expériences digitales solides, innovantes et ambitieuses, soutenues par des technologies de référence.
          </p>
        </div>

        {/* DIVIDER */}
        <div ref={dividerRef} className="stack__divider" />

        {/* RIGHT */}
        <ul className="stack__list">
          {tools.map((tool) => (
            <li key={tool.name} className="stack__item">
              <div className="stack__item-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.icon} alt={tool.name} />
              </div>
              <span className="stack__item-name">{tool.name}</span>
              <span className="stack__item-desc">{tool.desc}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

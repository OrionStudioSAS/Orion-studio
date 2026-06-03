'use client'
import { useRef } from 'react'

const testimonials = [
  {
    initials: 'VL',
    name: 'Virginie Lelong',
    role: 'Diététicienne nutritionniste',
    text: '"Absolument ravie du résultat ! Mon site internet correspond parfaitement à mes attentes : design soigné, navigation fluide et accompagnement très professionnel du début à la fin. À l\'écoute, réactif et force de proposition. Je recommande sans hésitation !"',
  },
  {
    initials: 'VC',
    name: 'Vincent Chopine',
    role: 'Association AEV',
    text: '"Nous avons fait appel à Orion Studio pour la création de notre site internet et l\'expérience a été excellente du début à la fin. L\'équipe a su parfaitement comprendre nos besoins et nous proposer un site moderne, rapide et surtout très facile à administrer."',
  },
  {
    initials: 'TC',
    name: 'Thierry Cordier',
    role: 'Association AEV',
    text: '"Orion Studio nous a accompagnés sur la refonte complète de notre présence en ligne. Leur expertise sur le développement sur-mesure et Shopify est impressionnante. Une équipe à l\'écoute, professionnelle, et qui livre dans les temps."',
  },
]

export default function Testimonials() {
  const gridRef = useRef(null)
  const scrollBy = (dir) => {
    const el = gridRef.current
    if (!el) return
    const card = el.querySelector('.testimonial-card')
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.9
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TÉMOIGNAGES</span>
          <h2>Ce que disent nos clients</h2>
        </div>

        <div className="carousel-wrap">
          <div className="testimonials__grid carousel-track" ref={gridRef}>
            {testimonials.map((t) => (
              <div key={t.initials} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p>{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-nav">
            <button type="button" className="carousel-btn" aria-label="Précédent" onClick={() => scrollBy(-1)}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="carousel-btn" aria-label="Suivant" onClick={() => scrollBy(1)}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

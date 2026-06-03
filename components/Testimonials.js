'use client'
import { useRef } from 'react'

const testimonials = [
  {
    photo: '/images/VirginieLelong.webp',
    name: 'Virginie Lelong',
    role: '— Diététicienne nutritionniste',
    text: '"Absolument ravie du résultat ! Design soigné, navigation fluide et accompagnement très professionnel du début à la fin. À l\'écoute, réactif et force de proposition."',
  },
  {
    photo: '/images/VincentChopine.webp',
    name: 'Vincent Chopine',
    role: "— Membre de l'association AEV",
    text: '"Nous avons fait appel à Orion Studio pour la création de notre site internet et l\'expérience a été excellente du début à la fin. L\'équipe a su parfaitement comprendre nos besoins."',
  },
  {
    photo: '/images/ThierryCordier.webp',
    name: 'Thierry Cordier',
    role: "— Membre de l'association AEV",
    text: '"Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l\'écoute, professionnelle, et qui livre dans les temps. Nous recommandons vivement Orion Studio."',
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
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt={t.name} width="120" height="120" loading="lazy" />
                </div>
                <div className="testimonial-card__body">
                  <strong>{t.name}</strong>
                  <p>{t.text}</p>
                  <em>{t.role}</em>
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

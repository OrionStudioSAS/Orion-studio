'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  const featured = projects.slice(0, 3)
  const gridRef = useRef(null)

  const scrollBy = (dir) => {
    const el = gridRef.current
    if (!el) return
    const card = el.querySelector('.project-card')
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.9
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="projects" id="realisations">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">NOS RÉALISATIONS</span>
          <h2>Des réalisations qui parlent d&apos;elles-mêmes</h2>
        </div>

        <div className="carousel-wrap">
          <div className="projects__grid carousel-track" ref={gridRef}>
            {featured.map((project) => (
              <Link key={project.slug} href={`/realisations/${project.slug}`} className="project-card">
                <div
                  className="project-card__image"
                  style={project.cover ? {} : { background: project.gradient }}
                >
                  {project.cover && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={project.cover} alt={project.title} className="project-card__cover" width="464" height="619" loading="lazy" />
                  )}
                  <div className="project-card__gradient" />
                  <div className="project-card__content">
                    <span className="project-card__category">{project.category}</span>
                    <div className="project-card__bottom">
                      <h3>{project.title}</h3>
                      <span className="project-card__arrow">↗</span>
                    </div>
                  </div>
                </div>
              </Link>
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

        <div className="projects__cta">
          <Link href="/realisations" className="cta">
            <span className="text-cta">Voir toutes nos réalisations</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
          </Link>
        </div>
      </div>
    </section>
  )
}

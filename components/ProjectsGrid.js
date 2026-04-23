'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const filters = ['Tous', 'Site Vitrine', 'E-commerce', 'Design', 'Automatisation']

export default function ProjectsGrid() {
  const [active, setActive] = useState('Tous')
  const filtered = active === 'Tous' ? projects : projects.filter(p => p.category === active)

  return (
    <section className="pg-grid-section">
      <div className="container">
        <div className="pg-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`pg-filter${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="pg-grid">
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/realisations/${project.slug}`}
              className="project-card"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div
                className="project-card__image"
                style={project.cover ? {} : { background: project.gradient }}
              >
                {project.cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.cover} alt={project.title} className="project-card__cover" width="464" height="619" />
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
      </div>
    </section>
  )
}

import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="projects" id="projets">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">NOS PROJETS</span>
          <h2>Des réalisations qui parlent d&apos;elles-mêmes</h2>
        </div>
        <div className="projects__grid">
          {featured.map((project, i) => (
            <Link key={project.slug} href={`/projets/${project.slug}`} className="project-card">
              {/* Image plein format */}
              <div
                className="project-card__image"
                style={project.cover ? {} : { background: project.gradient }}
              >
                {project.cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.cover} alt={project.title} className="project-card__cover" width="464" height="619" />
                )}
                {/* Overlay gradient bas */}
                <div className="project-card__gradient" />
                {/* Contenu en overlay */}
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
        <div className="projects__cta">
          <Link href="/projets" className="cta">
            <span className="text-cta">Voir tous nos projets</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import HomepageAnimations from '@/components/HomepageAnimations'
import JsonLd from '@/components/JsonLd'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  const url = `/realisations/${project.slug}`
  return {
    title: project.title,
    description: project.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Orion Studio`,
      description: project.excerpt,
      url,
      type: 'article',
      images: project.cover ? [{ url: project.cover, alt: project.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.excerpt,
      images: project.cover ? [project.cover] : undefined,
    },
  }
}

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.excerpt,
    creator: { '@type': 'Organization', name: 'Orion Studio', url: 'https://orion-studio.io' },
    image: project.cover ? `https://orion-studio.io${project.cover}` : undefined,
    url: project.url,
    inLanguage: 'fr-FR',
    keywords: project.tags?.join(', '),
    datePublished: project.year,
  }

  return (
    <>
      <JsonLd data={projectSchema} />
      <Cursor />
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="pd-hero">
          <div className="container">
            <Link href="/realisations" className="pd-back">← Toutes les réalisations</Link>
            <div className="pd-hero__meta">
              <span className="project-tag">{project.category}</span>
              <span className="pd-hero__year">{project.year}</span>
            </div>
            <h1 className="pd-hero__title">{project.title}</h1>
            <p className="pd-hero__excerpt">{project.excerpt}</p>
            <div className="pd-hero__bottom">
              <div className="pd-hero__tags">
                {project.tags.map(t => (
                  <span key={t} className="pd-tag">{t}</span>
                ))}
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta">
                  <span className="text-cta">Voir le site</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ─── Image bannière ─── */}
        <div className="pd-banner">
          <div className="container">
            <div className="pd-banner__image" style={project.cover ? {} : { background: project.gradient }}>
              {project.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.cover} alt={project.title} className="pd-banner__cover" width="464" height="619" fetchPriority="high" />
              )}
            </div>
          </div>
        </div>

        {/* ─── Étapes de création ─── */}
        <section className="pd-steps">
          <div className="container">
            <div className="pd-steps__header">
              <span className="section-tag">PROCESSUS DE CRÉATION</span>
              <h2>Les étapes du projet</h2>
            </div>
            <div className="pd-steps__list">
              {project.steps.map((step, i) => (
                <div key={step.num} className="pd-step">
                  <div className="pd-step__left">
                    <span className="pd-step__num">{step.num}</span>
                    <div className="pd-step__line" />
                  </div>
                  <div className="pd-step__body">
                    <div className="pd-step__header">
                      <div>
                        <span className="pd-step__phase">{step.phase}</span>
                        <h3 className="pd-step__title">{step.title}</h3>
                      </div>
                      <span className="pd-step__duration">⏱ {step.duration}</span>
                    </div>
                    <p className="pd-step__desc">{step.desc}</p>
                    <div className="pd-step__deliverables">
                      {step.deliverables.map((d, j) => (
                        <span key={j} className="pd-deliverable">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Navigation entre projets ─── */}
        <section className="pd-nav-projects">
          <div className="container">
            <Link href="/realisations" className="pd-all-projects">
              Voir toutes nos réalisations →
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
      <HomepageAnimations />
    </>
  )
}

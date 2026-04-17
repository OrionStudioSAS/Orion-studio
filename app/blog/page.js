import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'
import HomepageAnimations from '@/components/HomepageAnimations'
import Link from 'next/link'
import { articles } from '@/data/blog'

export const metadata = {
  title: 'Blog — Orion Studio',
  description: "Conseils, guides et analyses sur le web, le design, le SEO et l'automatisation par l'équipe Orion Studio.",
}

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
  const [featured, ...rest] = sorted

  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="blog-hero">
          <div className="container">
            <span className="section-tag">LE BLOG</span>
            <h1 className="blog-hero__title">
              Expertise, <span className="gradient-text">partagée.</span>
            </h1>
            <p className="blog-hero__desc">
              Web, design, SEO, automatisation — notre équipe partage ses apprentissages terrain pour vous aider à prendre de meilleures décisions digitales.
            </p>
          </div>
        </section>

        {/* ─── ARTICLE FEATURED ─── */}
        <section className="blog-featured-section">
          <div className="container">
            <Link href={`/blog/${featured.slug}`} className="blog-featured">
              <div className="blog-featured__image">
                {featured.cover
                  ? <img src={featured.cover} alt={featured.title} /> // eslint-disable-line @next/next/no-img-element
                  : <div style={{ background: featured.coverGradient, width: '100%', height: '100%' }} />
                }
              </div>
              <div className="blog-featured__content">
                <div className="blog-featured__meta">
                  <span className="blog-featured__category">{featured.category}</span>
                  <span className="blog-featured__read">{featured.readTime}</span>
                </div>
                <h2 className="blog-featured__title">{featured.title}</h2>
                <p className="blog-featured__excerpt">{featured.excerpt}</p>
                <div className="blog-featured__foot">
                  <span className="blog-featured__date">{formatDate(featured.date)}</span>
                  <span className="blog-featured__cta">Lire l&apos;article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ─── LISTING ─── */}
        <section className="blog-listing">
          <div className="container">
            <div className="blog-grid">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="blog-row"
                  style={article.cover ? { '--cover': `url(${article.cover})` } : {}}
                >
                  <span className="blog-row__cat">{article.category}</span>
                  <h3 className="blog-row__title">{article.title}</h3>
                  <div className="blog-row__meta">
                    <span className="blog-row__date">{formatDate(article.date)}</span>
                    <span className="blog-row__read">{article.readTime}</span>
                  </div>
                  <span className="blog-row__arrow">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollObserver />
      <HomepageAnimations />
    </>
  )
}

import { articles } from '@/data/blog'
import { notFound } from 'next/navigation'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'
import Link from 'next/link'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — Orion Studio`,
    description: article.excerpt,
  }
}

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) notFound()

  const others = articles.filter(a => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── Hero article ─── */}
        <section className="article-hero">
          <div className="container">
            <Link href="/blog" className="pd-back">← Tous les articles</Link>
            <div className="article-hero__meta">
              <span className="blog-card__category">{article.category}</span>
              <span className="article-hero__read">{article.readTime} de lecture</span>
            </div>
            <h1 className="article-hero__title">{article.title}</h1>
            <div className="article-hero__byline">
              <span>Par {article.author}</span>
              <span>·</span>
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
        </section>

        {/* ─── Cover ─── */}
        <div className="article-cover">
          <div className="container">
            <div className="article-cover__image" style={article.cover ? {} : { background: article.coverGradient }}>
              {article.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={article.cover} alt={article.title} width="900" height="600" />
              )}
            </div>
          </div>
        </div>

        {/* ─── Contenu ─── */}
        <article className="article-body">
          <div className="container">
            <div className="article-content">
              {article.content.map((block, i) => {
                if (block.type === 'intro') return <p key={i} className="article-intro">{block.text}</p>
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
                if (block.type === 'p') return <p key={i}>{block.text}</p>
                return null
              })}
            </div>
          </div>
        </article>

        {/* ─── Autres articles ─── */}
        <section className="article-related">
          <div className="container">
            <div className="article-related__header">
              <span className="section-tag">POUR ALLER PLUS LOIN</span>
              <h2>D&apos;autres articles</h2>
            </div>
            <div className="blog-grid">
              {others.map(a => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="blog-row"
                  style={a.cover ? { '--cover': `url(${a.cover})` } : {}}
                >
                  <span className="blog-row__cat">{a.category}</span>
                  <h3 className="blog-row__title">{a.title}</h3>
                  <div className="blog-row__meta">
                    <span className="blog-row__date">{formatDate(a.date)}</span>
                    <span className="blog-row__read">{a.readTime}</span>
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
    </>
  )
}

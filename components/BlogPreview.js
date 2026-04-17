import Link from 'next/link'
import { articles } from '@/data/blog'

export default function BlogPreview() {
  const latest = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('fr-FR', {
      month: 'short', year: 'numeric',
    })

  return (
    <section className="blog-preview" id="blog">
      <div className="container">

        <div className="blog-preview__header">
          <div>
            <span className="section-tag">LE BLOG</span>
            <h2>Nos derniers articles</h2>
          </div>
          <Link href="/blog" className="cta">
            <span className="text-cta">Voir tous les articles</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" />
          </Link>
        </div>

        <div className="blog-preview__cards">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bp-card"
            >
              <div className="bp-card__image">
                {article.cover
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={article.cover} alt={article.title} />
                  : <div style={{ background: article.coverGradient, width: '100%', height: '100%' }} />
                }
              </div>
              <div className="bp-card__overlay" />
              <div className="bp-card__body">
                <span className="bp-card__cat">{article.category}</span>
                <h3 className="bp-card__title">{article.title}</h3>
                <div className="bp-card__foot">
                  <span className="bp-card__date">{formatDate(article.date)}</span>
                  <span className="bp-card__read">{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

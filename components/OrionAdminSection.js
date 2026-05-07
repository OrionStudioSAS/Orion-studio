import Link from 'next/link'

const features = [
  "Suivi de projet",
  "Centre de documents",
  "Chat avec notre équipe",
  "Gestion de votre site",
]

export default function OrionAdminSection() {
  return (
    <section className="oa-home">
      <div className="container">
        <div className="oa-home__grid">

          <div className="oa-home__left">
            <span className="section-tag">ORION ADMIN</span>
            <h2>
              Votre espace personnel,{' '}
              <span className="gradient-text">inclus dans tous nos projets</span>.
            </h2>
            <p>
              Nous avons développé une solution interne pensée pour vous simplifier la vie et centraliser tous vos besoins en un seul endroit.
            </p>
            <p>
              Suivre votre projet, retrouver une facture, échanger avec notre équipe ou modifier votre site : tout se passe au même endroit. Simple, clair, fait pour vous.
            </p>
            <ul className="oa-home__features">
              {features.map((title, i) => (
                <li key={i} className="oa-home__feature">
                  <span>{title}</span>
                </li>
              ))}
            </ul>
            <Link href="/orion-admin" className="cta" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              <span className="text-cta">Découvrir Orion Admin</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
            </Link>
          </div>

          <div className="oa-home__right">
            <div className="oa-mockup">
              <div className="oa-mockup__bar">
                <span /><span /><span />
              </div>
              <div className="oa-mockup__body">
                <div className="oa-mockup__sidebar">
                  <div className="oa-mockup__nav-item is-active">Mon projet</div>
                  <div className="oa-mockup__nav-item">Documents</div>
                  <div className="oa-mockup__nav-item">Messages</div>
                  <div className="oa-mockup__nav-item">Mon site</div>
                </div>
                <div className="oa-mockup__main">
                  <div className="oa-mockup__title" />
                  <div className="oa-mockup__cards">
                    <div className="oa-mockup__card oa-mockup__card--accent" />
                    <div className="oa-mockup__card" />
                    <div className="oa-mockup__card" />
                  </div>
                  <div className="oa-mockup__row" />
                  <div className="oa-mockup__row oa-mockup__row--short" />
                  <div className="oa-mockup__row" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

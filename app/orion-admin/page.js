import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import SiteVitrineAnimations from '@/components/SiteVitrineAnimations'
import HomepageAnimations from '@/components/HomepageAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Orion Admin — Votre espace client tout-en-un',
  description: "Suivez votre projet, gérez votre site, échangez avec notre équipe et retrouvez tous vos documents au même endroit. Orion Admin, c'est votre espace personnel chez Orion Studio.",
}

const points = [
  {
    num: '01',
    title: 'Suivez votre projet en direct',
    desc: "De la première maquette à la mise en ligne : vous voyez où on en est, ce qui arrive, et ce qu'il vous reste à valider. Plus besoin de demander \"où ça en est ?\".",
  },
  {
    num: '02',
    title: 'Tous vos documents au même endroit',
    desc: "Devis, factures, contrats, maquettes, captures d'écran, accès : tout est centralisé. Fini les emails à fouiller pour retrouver une facture.",
  },
  {
    num: '03',
    title: 'Échangez avec notre équipe',
    desc: "Un chat intégré pour nous parler, sans email, sans WhatsApp, sans appel à programmer. Vous écrivez, on répond. Tout l'historique reste accessible.",
  },
  {
    num: '04',
    title: 'Gérez votre site et vos automatisations',
    desc: "Modifiez vos textes, ajoutez un article de blog, voyez vos automatisations tourner. Tout depuis une interface simple, sans toucher au code.",
  },
]

const fonctionnalites = [
  {
    icon: '✦',
    title: 'Suivi de projet',
    desc: "Étapes, livrables, dates, validations. Vous voyez tout en un coup d'œil.",
  },
  {
    icon: '✦',
    title: 'Centre de documents',
    desc: "Devis, factures, contrats, maquettes : tout est rangé, tout est trouvable.",
  },
  {
    icon: '✦',
    title: 'Chat en direct',
    desc: "Une conversation continue avec notre équipe, accessible quand vous voulez.",
  },
  {
    icon: '✦',
    title: 'Gestion de contenu',
    desc: "Modifiez vos textes, photos, articles de blog sans toucher au code.",
  },
  {
    icon: '✦',
    title: 'Suivi des automatisations',
    desc: "Voyez ce qui tourne, combien d'actions effectuées, combien de temps gagné.",
  },
  {
    icon: '✦',
    title: 'Évolutions futures',
    desc: "Demandez de nouvelles fonctionnalités directement, on les ajoute à votre roadmap.",
  },
]

export default function OrionAdmin() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="sv-hero" id="home">
          <div className="container">

            <div className="sv-hero__top">
              <h1 className="sv-hero__title">
                Tout votre projet,{' '}
                <span className="gradient-text">au même endroit</span>.
              </h1>

              <div className="sv-hero__side">
                <p className="sv-hero__desc">
                  Orion Admin, c&apos;est votre espace personnel chez Orion Studio. Suivez votre projet, retrouvez vos documents, échangez avec notre équipe et gérez votre site, tout depuis une seule interface, simple et claire.
                </p>
                <p className="sv-hero__desc sv-hero__desc--bold">
                  Inclus dans tous nos projets, sans frais supplémentaires.
                </p>
                <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                  <span className="text-cta">Démarrer un projet</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
                </Link>
              </div>
            </div>

            {/* Mockup */}
            <div className="sv-hero__image">
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
                    <div className="oa-mockup__nav-item">Automatisations</div>
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
        </section>

        {/* ─── 4 GRANDS USAGES ─── */}
        <section className="sv-services">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">À QUOI ÇA SERT</span>
              <h2>Tout ce dont vous avez besoin, en un seul endroit.</h2>
            </div>
            <div className="sv-services__grid">
              {points.map((p) => (
                <div key={p.num} className="sv-service-card">
                  <span className="sv-service-card__num">{p.num}</span>
                  <h3 className="sv-service-card__title">{p.title}</h3>
                  <p className="sv-service-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DÉTAIL DES FONCTIONNALITÉS ─── */}
        <section className="svt-admin">
          <div className="container">
            <div className="svt-admin__grid">

              <div className="svt-admin__visual">
                <div className="svt-admin__screen">
                  <div className="svt-admin__screen-bar">
                    <span /><span /><span />
                  </div>
                  <div className="svt-admin__screen-body">
                    <div className="svt-admin__row svt-admin__row--header" />
                    <div className="svt-admin__row" style={{ width: '90%' }} />
                    <div className="svt-admin__row svt-admin__row--short" />
                    <div className="svt-admin__row" />
                    <div className="svt-admin__row svt-admin__row--short" />
                    <div className="svt-admin__row svt-admin__row--btn" />
                  </div>
                </div>
              </div>

              <div className="svt-admin__content">
                <span className="section-tag">DANS LE DÉTAIL</span>
                <h2>Une plateforme pensée pour vous, pas pour les développeurs.</h2>
                <p>
                  Pas besoin d&apos;être à l&apos;aise avec l&apos;informatique. On a conçu Orion Admin pour que vous puissiez l&apos;utiliser dès la première minute, sans formation.
                </p>
                <div className="svt-admin__features">
                  {fonctionnalites.map((f, i) => (
                    <div key={i} className="svt-admin__feature">
                      <span className="svt-admin__feature-icon">{f.icon}</span>
                      <div>
                        <strong>{f.title}</strong>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── INCLUS PARTOUT ─── */}
        <section className="sv-why">
          <div className="container">
            <div className="sv-why__grid">

              <div className="sv-why__left">
                <span className="section-tag">INCLUS DANS TOUS NOS PROJETS</span>
                <h2>Pas un produit à part. Une promesse.</h2>
                <p>
                  Que vous fassiez appel à nous pour un site internet, une boutique en ligne, des automatisations ou une application web : Orion Admin est inclus, dès le premier jour.
                </p>
                <p>
                  Pas d&apos;abonnement, pas de surprise. C&apos;est notre façon de vous dire que votre projet ne s&apos;arrête pas à la livraison. C&apos;est là qu&apos;il commence vraiment.
                </p>
                <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                  <span className="text-cta">Démarrer un projet</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
                </Link>
              </div>

              <div className="sv-why__right">
                <ul className="sv-why__list">
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>Inclus avec votre site internet</li>
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>Inclus avec votre boutique e-commerce</li>
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>Inclus avec vos automatisations</li>
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>Inclus avec votre application SaaS</li>
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>0€ supplémentaire, à vie</li>
                  <li className="sv-why__item"><span className="sv-why__check">✓</span>Mises à jour régulières et nouvelles fonctionnalités</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQ defaultTab={0} />

        {/* ─── CONTACT ─── */}
        <Contact />

      </main>
      <Footer />
      <ScrollObserver />
      <SiteVitrineAnimations />
      <HomepageAnimations />
    </>
  )
}

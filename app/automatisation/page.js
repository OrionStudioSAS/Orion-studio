import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import SiteVitrineAnimations from '@/components/SiteVitrineAnimations'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Automatisation — Orion Studio',
  description: "On automatise les tâches répétitives qui vous font perdre du temps. Vos outils communiquent entre eux, vous gagnez des heures chaque semaine.",
}

const chiffres = [
  { value: '60h', unit: 'par an', label: 'Économisées par tâche automatisée' },
  { value: '1 000+', unit: 'outils', label: 'Que l\'on peut connecter ensemble' },
  { value: '0', unit: 'copier-coller', label: 'À refaire chaque matin' },
]

const etapes = [
  {
    num: '01',
    title: 'On regarde vos journées',
    desc: "Un appel gratuit pour identifier ce qui vous fait perdre du temps : emails, devis, factures, suivi clients, stocks. On liste ensemble tout ce qui peut tourner tout seul.",
  },
  {
    num: '02',
    title: 'On vous propose un plan',
    desc: "Devis clair en moins de 48h avec ce qu'on automatise, le temps gagné chaque semaine et le prix. Pas de jargon, pas de surprise.",
  },
  {
    num: '03',
    title: 'On construit et on teste',
    desc: "On met en place les automatisations avec vos outils existants. On teste tout avec vous, on ajuste, jusqu'à ce que tout tourne sans accroc.",
  },
  {
    num: '04',
    title: 'On vous forme et on suit',
    desc: "Vous savez voir ce qui se passe et reprendre la main si besoin. On reste joignables pour les ajustements et les nouvelles idées.",
  },
]

export default function Automatisation() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">AUTOMATISATION</span>
              <h1 className="ls-hero__title">
                On{' '}
                <span className="gradient-text">automatise</span>{' '}
                ce qui vous fait{' '}
                <span className="gradient-text">perdre du temps</span>.
              </h1>
              <p className="ls-hero__desc">
                Tout ce que vous faites à la main et qui se répète peut tourner tout seul : envoyer des emails, créer des factures, mettre à jour des tableaux, suivre des commandes. On vous libère du temps pour ce qui compte vraiment. Vous gardez la main, on fait tourner la machine.
              </p>
              <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                <span className="text-cta">Parlez-nous de votre projet</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
              </Link>
            </div>

            <div className="ls-hero__stats-bar">
              <div className="svt-stats__grid">
                {chiffres.map((c, i) => (
                  <div key={i} className="svt-stat">
                    <div className="svt-stat__value">
                      <span className="gradient-text">{c.value}</span>
                      {c.unit && <span className="svt-stat__unit">{c.unit}</span>}
                    </div>
                    <p className="svt-stat__label">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMMENT ÇA SE PASSE ─── */}
        <section className="ls-values">
          <div className="container">
            <div className="ls-values__header">
              <div className="ls-values__heading">
                <span className="section-tag">COMMENT ÇA SE PASSE</span>
                <h2>
                  De vos vraies journées aux automatisations qui tournent,{' '}
                  <span className="gradient-text">4 étapes simples.</span>
                </h2>
              </div>
              <p className="ls-values__intro">
                On part de votre quotidien, pas d&apos;une solution toute faite. Et vous suivez tout ce qui tourne en direct depuis Orion Admin.
              </p>
            </div>

            <ol className="ls-values__list">
              {etapes.map((e) => (
                <li key={e.num} className="ls-value-row">
                  <span className="ls-value-row__num" aria-hidden="true">{e.num}</span>
                  <div className="ls-value-row__body">
                    <h3 className="ls-value-row__title">{e.title}</h3>
                    <p className="ls-value-row__desc">{e.desc}</p>
                  </div>
                  <span className="ls-value-row__total" aria-hidden="true">
                    / 0{etapes.length}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── ORION ADMIN ─── */}
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
                    <div className="svt-admin__row" />
                    <div className="svt-admin__row svt-admin__row--short" />
                    <div className="svt-admin__row" />
                    <div className="svt-admin__row svt-admin__row--short" />
                    <div className="svt-admin__row svt-admin__row--btn" />
                  </div>
                </div>
              </div>

              <div className="svt-admin__content">
                <span className="section-tag">ORION ADMIN INCLUS</span>
                <h2>Voir tout ce qui tourne, en un coup d&apos;œil.</h2>
                <p>
                  Depuis Orion Admin, vous voyez en direct ce que font vos automatisations. Combien de factures envoyées, combien d&apos;emails partis, combien d&apos;heures gagnées cette semaine. Tout est clair.
                </p>
                <p>
                  Vous suivez aussi votre projet, vos factures, vos devis et vos échanges avec notre équipe au même endroit.
                </p>
                <Link href="/orion-admin" className="cta" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                  <span className="text-cta">En savoir plus sur Orion Admin</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ─── PROJETS ─── */}
        <Projects />

        {/* ─── FAQ ─── */}
        <FAQ defaultTab={3} />

        {/* ─── CONTACT ─── */}
        <Contact />

      </main>
      <Footer />
      <ScrollObserver />
      <SiteVitrineAnimations />
      <LeStudioAnimations />
    </>
  )
}

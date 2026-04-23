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
  title: 'Création de SAAS — Orion Studio',
  description: "On crée votre application web sur-mesure, du concept au lancement. Pensée pour vos utilisateurs, prête à grandir avec vous.",
}

const chiffres = [
  { value: '4 à 8', unit: 'semaines', label: 'Pour la première version utilisable' },
  { value: '100%', unit: '', label: 'À vous, propriétaire du code' },
  { value: '10k+', unit: 'utilisateurs', label: 'Votre appli tient la charge' },
]

const etapes = [
  {
    num: '01',
    title: 'On comprend votre idée',
    desc: "Un appel pour parler de votre projet, de vos futurs utilisateurs et de votre modèle économique. On vous dit honnêtement si c'est faisable et combien ça coûte.",
  },
  {
    num: '02',
    title: 'On dessine votre application',
    desc: "On vous envoie les maquettes des écrans clés, le parcours utilisateur et les fonctionnalités principales. Vous voyez précisément ce qu'on va construire.",
  },
  {
    num: '03',
    title: 'On développe par étapes',
    desc: "On livre une première version utilisable rapidement, puis on enrichit au fur et à mesure. Vous suivez tout depuis Orion Admin et vous testez à chaque étape.",
  },
  {
    num: '04',
    title: 'On lance et on fait grandir',
    desc: "Mise en ligne, suivi technique, ajout de nouvelles fonctionnalités. On reste votre partenaire technique sur la durée.",
  },
]

export default function SaaS() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">SAAS</span>
              <h1 className="ls-hero__title">
                Votre{' '}
                <span className="gradient-text">application web</span>{' '}
                sur-mesure, du concept au{' '}
                <span className="gradient-text">lancement</span>.
              </h1>
              <p className="ls-hero__desc">
                Vous avez une idée d&apos;application ou de logiciel pour vos clients ou vos équipes ? On la transforme en produit fini, simple à utiliser, et prêt à se faire utiliser au quotidien. De l&apos;idée à votre premier utilisateur, on s&apos;occupe de tout.
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
                  De votre idée à votre application en ligne,{' '}
                  <span className="gradient-text">4 étapes simples.</span>
                </h2>
              </div>
              <p className="ls-values__intro">
                On livre vite une première version utilisable, puis on enrichit avec vous. Vous suivez chaque étape en direct depuis Orion Admin.
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
                <h2>Suivez le développement de votre appli en direct.</h2>
                <p>
                  Construire une application, c&apos;est plusieurs semaines de travail. Avec Orion Admin, vous suivez l&apos;avancement à tout moment : ce qui est fait, ce qui arrive, où on en est.
                </p>
                <p>
                  Vos maquettes, factures, devis et vos échanges avec notre équipe sont au même endroit. Vous gardez le contrôle de bout en bout.
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
        <FAQ defaultTab={1} />

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

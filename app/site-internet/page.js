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
  title: 'Site internet sur-mesure — Orion Studio',
  description: "Un site internet pensé pour vous, livré en 1 à 2 semaines. Vous êtes propriétaire à 100%, sans abonnement, et vous le gérez vous-même grâce à Orion Admin.",
}

const chiffres = [
  { value: '1 à 2', unit: 'semaines', label: 'Pour livrer votre site' },
  { value: '100%', unit: '', label: 'À vous, propriétaire du code' },
  { value: '0€', unit: 'par mois', label: "D'abonnement à payer" },
]

const etapes = [
  {
    num: '01',
    title: 'On discute de votre projet',
    desc: "Un appel gratuit pour comprendre votre activité, ce que vous voulez faire et ce dont vous avez besoin. On vous fait un devis clair en moins de 48h, sans baratin.",
  },
  {
    num: '02',
    title: 'On dessine votre site',
    desc: "On vous envoie une maquette de votre futur site. Vous la regardez, vous nous dites ce qui va et ce qui ne va pas, on ajuste jusqu'à ce que ça vous plaise vraiment.",
  },
  {
    num: '03',
    title: 'On le construit',
    desc: "Notre équipe développe votre site sur-mesure en quelques jours. Vous suivez l'avancement en direct depuis votre espace Orion Admin, sans avoir à nous relancer.",
  },
  {
    num: '04',
    title: 'On le met en ligne',
    desc: "Votre site est en ligne, vous récupérez tout (code, accès, formation à Orion Admin). Et si vous avez une question, on reste joignables, sans frais cachés.",
  },
]

export default function SiteInternet() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">SITE INTERNET</span>
              <h1 className="ls-hero__title">
                Un site internet{' '}
                <span className="gradient-text">sur-mesure</span>, livré en{' '}
                <span className="gradient-text">1 à 2 semaines</span>.
              </h1>
              <p className="ls-hero__desc">
                On crée des sites simples à utiliser, beaux à regarder et faits pour vous appartenir vraiment. Pas d&apos;abonnement, pas de dépendance, pas de surprise. Vous payez une fois, votre site est à vous pour de bon.
              </p>
              <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                <span className="text-cta">Parlez-nous de votre projet</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
              </Link>
            </div>

            {/* Bandeau stats intégré dans le hero */}
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

        {/* ─── COMMENT ÇA SE PASSE (liste éditoriale) ─── */}
        <section className="ls-values">
          <div className="container">
            <div className="ls-values__header">
              <div className="ls-values__heading">
                <span className="section-tag">COMMENT ÇA SE PASSE</span>
                <h2>
                  De l&apos;idée à votre site en ligne,{' '}
                  <span className="gradient-text">4 étapes simples.</span>
                </h2>
              </div>
              <p className="ls-values__intro">
                Pas de jargon, pas de surprise. Vous voyez tout, vous validez chaque étape, et vous suivez l&apos;avancement en direct depuis Orion Admin.
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
                <h2>Gérez votre site sans toucher au code.</h2>
                <p>
                  Une interface simple, faite pour vous. Vous changez un texte, une photo, vous ajoutez un article de blog : c&apos;est aussi facile que d&apos;envoyer un email. Pas besoin d&apos;être à l&apos;aise avec l&apos;informatique.
                </p>
                <p>
                  Et vous suivez aussi tout votre projet en direct. Vos maquettes, factures, devis, échanges avec notre équipe : tout est centralisé au même endroit.
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

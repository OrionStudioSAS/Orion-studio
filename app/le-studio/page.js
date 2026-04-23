import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Le Studio — Orion Studio',
  description: "Découvrez Orion Studio, agence web française spécialisée en sites sur-mesure, e-commerce Shopify, automatisations n8n et applications SaaS. Une équipe à taille humaine, une méthodologie claire, des résultats mesurables.",
}

const valeurs = [
  {
    num: '01',
    title: 'Du sur-mesure, pas du template',
    desc: "Chaque projet est conçu spécifiquement pour vous. On ne pose pas un thème acheté en ligne sur votre marque : on développe ce qui correspond à votre activité, vos clients et vos objectifs.",
  },
  {
    num: '02',
    title: 'Vous êtes propriétaire à 100%',
    desc: "Le code, les contenus, les données : tout vous appartient. Pas d'abonnement obligatoire, pas de plateforme qui peut changer ses règles du jour au lendemain. Vous payez une fois, c'est à vous pour de bon.",
  },
  {
    num: '03',
    title: 'Une livraison rapide',
    desc: "Un site internet en 1 à 2 semaines, une boutique e-commerce en 3 à 6 semaines, une première version d'application en 4 à 8 semaines. On va vite parce qu'on est concentrés et bien organisés.",
  },
  {
    num: '04',
    title: 'Tout votre projet sur Orion Admin',
    desc: "Suivi de projet, maquettes, factures, devis, échanges avec notre équipe : tout est centralisé sur votre espace personnel. Pas besoin de fouiller dans vos emails ou de relancer pour savoir où on en est.",
  },
  {
    num: '05',
    title: 'Une équipe joignable, jamais sous-traitée',
    desc: "Vous parlez directement avec Julien et Théo, les deux cofondateurs. Pas de chef de projet intermédiaire, pas de prestataire à l'autre bout du monde. La même équipe du devis à l'évolution du site, deux ans plus tard.",
  },
  {
    num: '06',
    title: 'On reste là après la livraison',
    desc: "Le projet ne s'arrête pas à la mise en ligne. Formation à Orion Admin, accompagnement, évolutions : on construit une relation sur la durée, pas une prestation one-shot.",
  },
]

const stats = [
  { value: '50+', unit: '', label: 'Projets livrés' },
  { value: '3', unit: 'ans', label: "D'expérience" },
  { value: '2', unit: '', label: 'Bureaux en France' },
  { value: '98%', unit: '', label: 'Clients satisfaits' },
]

const offices = [
  {
    city: 'Paris',
    address: '60 Rue François Ier',
    zip: '75008',
    coords: '48.8698° N · 2.3078° E',
  },
  {
    city: 'Cannes',
    address: '6 Rue Merle',
    zip: '06400',
    coords: '43.5516° N · 7.0177° E',
  },
]

export default function LeStudio() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO (texte + stats intégrés, plein écran) ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">LE STUDIO</span>
              <h1 className="ls-hero__title">
                Chaque projet{' '}
                <span className="gradient-text">est une mission.</span>
              </h1>
              <p className="ls-hero__desc">
                Nous concevons des sites qui ne se contentent pas d&apos;être beaux : ils convertissent, fidélisent et propulsent votre marque vers la croissance. Chaque projet est pensé comme une mission sur mesure, avec une méthodologie claire et des objectifs mesurables. Notre rôle est de simplifier votre trajectoire digitale, de vous faire gagner du temps et d&apos;augmenter vos résultats de manière durable et efficace.
              </p>
              <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                <span className="text-cta">Parlez-nous de votre projet</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
              </Link>
            </div>

            <div className="ls-hero__stats-bar">
              <div className="svt-stats__grid">
                {stats.map((s, i) => (
                  <div key={i} className="svt-stat">
                    <div className="svt-stat__value">
                      <span className="gradient-text">{s.value}</span>
                      {s.unit && <span className="svt-stat__unit">{s.unit}</span>}
                    </div>
                    <p className="svt-stat__label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MISSION ─── */}
        <section className="ls-mission">
          <div className="container">
            <div className="ls-mission__grid">
              <div className="ls-mission__left">
                <span className="section-tag">NOTRE MISSION</span>
                <h2>
                  Nous ne fabriquons pas des sites.{' '}
                  <span className="gradient-text">Nous construisons des outils de croissance.</span>
                </h2>
              </div>
              <div className="ls-mission__right">
                <p>
                  Orion Studio est une agence web française fondée avec une conviction simple : un site web doit travailler pour vous, pas l&apos;inverse. Trop d&apos;entreprises investissent dans des sites qui ne convertissent pas, qui sont lents à maintenir, ou qui ne reflètent pas leur valeur réelle.
                </p>
                <p>
                  Notre approche est différente. Nous associons design de haut niveau, performance technique et stratégie éditoriale pour créer des expériences digitales qui génèrent des résultats concrets — plus de leads, plus de confiance, plus de croissance.
                </p>
                <p>
                  Basés à Paris et Cannes, nous travaillons avec des marques ambitieuses qui refusent la médiocrité digitale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── POURQUOI NOUS — liste éditoriale ─── */}
        <section className="ls-values">
          <div className="container">
            <div className="ls-values__header">
              <div className="ls-values__heading">
                <span className="section-tag">POURQUOI ORION STUDIO&nbsp;?</span>
                <h2>
                  Six raisons,{' '}
                  <span className="gradient-text">une seule conviction.</span>
                </h2>
              </div>
              <p className="ls-values__intro">
                Un site n&apos;est pas une dépense, c&apos;est un actif. Voici comment nous le concevons pour qu&apos;il travaille pour vous, chaque jour.
              </p>
            </div>

            <ol className="ls-values__list">
              {valeurs.map((v, i) => (
                <li key={v.num} className="ls-value-row">
                  <span className="ls-value-row__num" aria-hidden="true">{v.num}</span>
                  <div className="ls-value-row__body">
                    <h3 className="ls-value-row__title">{v.title}</h3>
                    <p className="ls-value-row__desc">{v.desc}</p>
                  </div>
                  <span className="ls-value-row__total" aria-hidden="true">
                    / 0{valeurs.length}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── BUREAUX ─── */}
        <section className="ls-offices">
          <div className="container">
            <div className="ls-offices__grid">

              <div className="ls-offices__left">
                <span className="section-tag">OÙ NOUS TROUVER</span>
                <h2>
                  Une agence française,{' '}
                  <span className="gradient-text">présente sur deux fronts.</span>
                </h2>
                <p>
                  Paris pour la dynamique business, Cannes pour la créativité méditerranéenne. Nous intervenons partout en France et à l&apos;international.
                </p>
                <div className="ls-offices__emails">
                  <a href="mailto:julien@orion-studio.io" className="ls-email">
                    <span className="ls-email__name">Julien</span>
                    <span className="ls-email__addr">julien@orion-studio.io</span>
                  </a>
                  <a href="mailto:theo@orion-studio.io" className="ls-email">
                    <span className="ls-email__name">Théo</span>
                    <span className="ls-email__addr">theo@orion-studio.io</span>
                  </a>
                </div>
              </div>

              <div className="ls-offices__right">
                {offices.map((o, i) => (
                  <div key={i} className="ls-location">
                    <div className="ls-location__head">
                      <span className="ls-location__index">0{i + 1}</span>
                      <span className="ls-location__coords">{o.coords}</span>
                    </div>
                    <h3 className="ls-location__city">{o.city}</h3>
                    <div className="ls-location__address">
                      <span>{o.address}</span>
                      <span>{o.zip} {o.city}, France</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <Contact />

      </main>
      <Footer />
      <ScrollObserver />
      <LeStudioAnimations />
    </>
  )
}

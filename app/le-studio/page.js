import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Le Studio',
  description: "Découvrez Orion Studio, agence web française spécialisée en sites sur-mesure, e-commerce Shopify et applications SaaS. Une équipe à taille humaine, une méthodologie claire, des résultats mesurables.",
  alternates: { canonical: '/le-studio' },
  openGraph: {
    title: 'Le Studio — Orion Studio',
    description: "Agence web française. Paris & Cannes. Une équipe à taille humaine, des résultats mesurables.",
    url: '/le-studio',
    type: 'website',
  },
}

const stats = [
  { value: '50+', unit: '', label: 'Projets livrés' },
  { value: '3', unit: 'ans', label: "D'expérience" },
  { value: '2', unit: '', label: 'Bureaux en France' },
  { value: '98%', unit: '', label: 'Clients satisfaits' },
]

const partners = [
  {
    name: 'Shopify',
    role: 'Partner officiel',
    logo: '/images/logo-shopify.svg',
    desc: "Référencés au programme Shopify Partners, nous concevons et déployons des boutiques performantes en bénéficiant d'un accès direct à la roadmap et au support de la plateforme.",
  },
  {
    name: 'Stripe',
    role: 'Partenaire intégrations',
    logo: '/images/logo-figma.svg',
    desc: "Intégrations Stripe natives sur l'ensemble de nos boutiques et SaaS : paiements, abonnements, facturation. Une expérience de paiement fluide pour vos clients, une comptabilité claire pour vous.",
  },
]

const photos = [
  { src: '/images/studio/team.webp', alt: "Julien et Théo, cofondateurs d'Orion Studio", className: 'ls-photos__item--main' },
  { src: '/images/studio/team-event.webp', alt: "L'équipe Orion Studio en événement" },
  { src: '/images/studio/cannes.webp', alt: 'Cannes, bureau Sud' },
  { src: '/images/studio/paris.webp', alt: 'Paris, bureau Nord' },
  { src: '/images/studio/dog.webp', alt: 'La mascotte du studio' },
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

        {/* ─── NOTRE HISTOIRE ─── */}
        <section className="ls-story">
          <div className="container">
            <div className="ls-story__grid">
              <div className="ls-story__left">
                <span className="section-tag">NOTRE HISTOIRE</span>
                <h2>
                  Deux amis,{' '}
                  <span className="gradient-text">une obsession commune.</span>
                </h2>
              </div>
              <div className="ls-story__right">
                <p>
                  Orion Studio est née d&apos;un constat partagé entre Julien et Théo : trop d&apos;entreprises payaient cher pour des sites qui ne leur ressemblaient pas, livrés en retard et impossibles à modifier sans appeler un développeur.
                </p>
                <p>
                  En 2023, on décide de monter notre propre structure pour faire les choses autrement : du sur-mesure rapide, des clients propriétaires de leur site à 100%, et un espace personnel — Orion Admin — pour que chaque projet reste clair du brief à la mise en ligne.
                </p>
                <p>
                  Trois ans plus tard, nous avons accompagné plus de 50 marques depuis nos bureaux de Paris et Cannes. La structure est restée volontairement à taille humaine : c&apos;est ce qui nous permet de rester proches, réactifs et exigeants sur chaque livraison.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COLLAGE PHOTOS ─── */}
        <section className="ls-photos">
          <div className="container">
            <div className="ls-photos__header">
              <span className="section-tag">DANS LES COULISSES</span>
              <h2>
                Une équipe,{' '}
                <span className="gradient-text">deux villes, mille moments.</span>
              </h2>
            </div>
            <div className="ls-photos__grid">
              {photos.map((p, i) => (
                <div key={i} className={`ls-photos__item ${p.className || ''}`.trim()}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTENAIRES ─── */}
        <section className="ls-partners">
          <div className="container">
            <div className="ls-partners__header">
              <span className="section-tag">NOS PARTENAIRES</span>
              <h2>
                Les plateformes{' '}
                <span className="gradient-text">avec qui nous construisons.</span>
              </h2>
            </div>
            <div className="ls-partners__grid">
              {partners.map((p, i) => (
                <div key={i} className="ls-partner">
                  <div className="ls-partner__head">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.name} className="ls-partner__logo" />
                    <div className="ls-partner__meta">
                      <span className="ls-partner__name">{p.name}</span>
                      <span className="ls-partner__role">{p.role}</span>
                    </div>
                  </div>
                  <p className="ls-partner__desc">{p.desc}</p>
                </div>
              ))}
            </div>
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

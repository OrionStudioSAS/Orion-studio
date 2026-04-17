import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Le Studio — Orion Studio',
  description: 'Découvrez Orion Studio, agence web française spécialisée Webflow & Shopify. Chaque projet est une mission sur mesure, avec une méthodologie claire et des résultats mesurables.',
}

const valeurs = [
  {
    num: '01',
    title: 'Gagnez en performance',
    desc: "Webflow offre une architecture propre et rapide qui améliore le référencement naturel. Son code optimisé et son hébergement ultra-rapide garantissent fluidité, sécurité et bon positionnement sur Google.",
  },
  {
    num: '02',
    title: 'Réduisez vos coûts d\'acquisition',
    desc: "Grâce à ses performances SEO natives, Webflow permet de générer des leads organiques sans dépendre en permanence de la publicité payante. Vous investissez pour un trafic qualifié et durable.",
  },
  {
    num: '03',
    title: 'Renforcez votre image de marque',
    desc: "Webflow combine design sur-mesure et stabilité technique. Vous bénéficiez d'un outil professionnel, élégant et cohérent, fidèle à votre identité et pensé pour convertir vos visiteurs en clients.",
  },
  {
    num: '04',
    title: 'Accélérez votre mise en ligne',
    desc: "Webflow réunit design, développement et hébergement dans une seule plateforme. Vous réduisez les allers-retours et lancez votre site plus vite, sans compromettre la qualité ni le référencement.",
  },
  {
    num: '05',
    title: 'Gagnez en autonomie',
    desc: "L'éditeur visuel de Webflow simplifie la gestion quotidienne. Modifiez vos pages, publiez du contenu et ajustez votre stratégie sans dépendre d'un développeur, grâce à notre formation incluse.",
  },
  {
    num: '06',
    title: 'Bâtissez un site durable',
    desc: "Webflow repose sur une base technique évolutive et maintenable. Vous profitez d'un outil stable, facilement scalable et compatible avec les standards du web moderne, sans refonte à moyen terme.",
  },
]

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '3 ans', label: "D'expérience" },
  { value: '2', label: 'Bureaux en France' },
  { value: '98%', label: 'Clients satisfaits' },
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

        {/* ─── HERO ─── */}
        <section className="ls-hero">
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
                <img src="/images/starblack.png" alt="" className="star" />
              </Link>
            </div>

            {/* ─── Barre de stats ─── */}
            <div className="ls-hero__stats">
              {stats.map((s, i) => (
                <div key={i} className="ls-stat">
                  <span className="ls-stat__value">{s.value}</span>
                  <span className="ls-stat__label">{s.label}</span>
                </div>
              ))}
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

        {/* ─── POURQUOI NOUS ─── */}
        <section className="ls-values">
          <div className="container">
            <div className="section-header ls-values__header">
              <span className="section-tag">POURQUOI ORION STUDIO ?</span>
              <h2>Six raisons de nous choisir</h2>
            </div>
            <div className="ls-values__grid">
              {valeurs.map((v) => (
                <div key={v.num} className="ls-value-card">
                  <span className="ls-value-card__num">{v.num}</span>
                  <h3 className="ls-value-card__title">{v.title}</h3>
                  <p className="ls-value-card__desc">{v.desc}</p>
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
                <a href="mailto:julien@orion-studio.io" className="cta" style={{ alignSelf: 'flex-start' }}>
                  <span className="text-cta">julien@orion-studio.io</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" />
                </a>
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

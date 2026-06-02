import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import SiteVitrineAnimations from '@/components/SiteVitrineAnimations'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import JsonLd from '@/components/JsonLd'
import Link from 'next/link'

export const metadata = {
  title: 'Boutique en ligne Shopify',
  description: "Une boutique en ligne sur-mesure avec Shopify. Pensée pour vendre, simple à gérer, et livrée en quelques semaines.",
  alternates: { canonical: '/site-e-commerce' },
  openGraph: {
    title: 'Boutique en ligne Shopify — Orion Studio',
    description: "Une boutique en ligne sur-mesure avec Shopify. Pensée pour vendre, simple à gérer.",
    url: '/site-e-commerce',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: "Création de boutique e-commerce Shopify",
  name: "Boutique e-commerce Shopify sur-mesure",
  description: "Boutique en ligne Shopify sur-mesure, optimisée pour la conversion, livrée en 3 à 6 semaines.",
  provider: { '@type': 'Organization', name: 'Orion Studio', url: 'https://orion-studio.io' },
  areaServed: { '@type': 'Country', name: 'France' },
  offers: {
    '@type': 'Offer',
    price: '3000',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '3000',
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false,
      description: 'À partir de 3 000 € HT',
    },
  },
}

const chiffres = [
  { value: '3 à 6', unit: 'semaines', label: 'Pour livrer votre boutique' },
  { value: '100%', unit: 'sur-mesure', label: 'Pas un thème acheté en ligne' },
  { value: '24/7', unit: '', label: 'Votre boutique vend même la nuit' },
]

const etapes = [
  {
    num: '01',
    title: 'On parle de vos produits',
    desc: "Un appel pour comprendre ce que vous vendez, à qui, et comment vous voulez le vendre. On vous fait un devis clair en moins de 48h, sans baratin.",
  },
  {
    num: '02',
    title: 'On dessine votre boutique',
    desc: "On vous envoie une maquette de votre page d'accueil, d'une fiche produit et du tunnel de paiement. Vous nous dites ce qui va, on ajuste jusqu'à ce que ça vous plaise.",
  },
  {
    num: '03',
    title: 'On construit et on connecte',
    desc: "On crée votre boutique sur Shopify et on branche tout : paiement, livraison, emails, comptabilité. Vous suivez l'avancement en direct depuis Orion Admin.",
  },
  {
    num: '04',
    title: 'On la met en ligne',
    desc: "Votre boutique est ouverte, vous savez la gérer. On vous forme, on vous accompagne, et on reste là quand vous avez besoin de nous.",
  },
]

export default function SiteEcommerce() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">E-COMMERCE</span>
              <h1 className="ls-hero__title">
                Une{' '}
                <span className="gradient-text">boutique en ligne</span>{' '}
                pensée pour{' '}
                <span className="gradient-text">vendre</span>.
              </h1>
              <p className="ls-hero__desc">
                On crée votre boutique sur Shopify, la plateforme la plus simple et la plus fiable pour vendre en ligne. Pas de prise de tête technique, vous vous concentrez sur vos produits et on s&apos;occupe du reste. Une boutique simple à utiliser, prête à vendre dès le lancement.
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
                  De votre idée à votre première vente,{' '}
                  <span className="gradient-text">4 étapes simples.</span>
                </h2>
              </div>
              <p className="ls-values__intro">
                Vous suivez chaque étape depuis Orion Admin. Vous validez les maquettes, vous voyez la boutique se construire, et vous savez la gérer le jour du lancement.
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
                <h2>Votre projet et votre boutique, au même endroit.</h2>
                <p>
                  Vos produits se gèrent sur Shopify, qui est très simple. Tout le reste se passe sur Orion Admin : suivi du projet, maquettes, factures, devis, échanges avec notre équipe.
                </p>
                <p>
                  Pas besoin d&apos;ouvrir 5 applications différentes ou de fouiller dans vos emails. Tout est au même endroit, tout est clair.
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

        {/* ─── TARIFS ─── */}
        <section className="ls-pricing">
          <div className="container">
            <div className="ls-pricing__card">
              <span className="section-tag">TARIFS</span>
              <div className="ls-pricing__price">
                <span className="ls-pricing__label">À partir de</span>
                <span className="ls-pricing__amount">
                  <span className="gradient-text">3&nbsp;000&nbsp;€</span>
                  <span className="ls-pricing__unit">HT</span>
                </span>
              </div>
              <p className="ls-pricing__desc">
                Le tarif final dépend du catalogue, des intégrations (paiements, livraison, ERP) et du design. On vous fait un devis clair et détaillé en moins de 48h après notre premier appel.
              </p>
              <Link href="#contact" className="cta">
                <span className="text-cta">Demander un devis gratuit</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PROJETS ─── */}
        <Projects />

        {/* ─── FAQ ─── */}
        <FAQ defaultTab={2} />

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

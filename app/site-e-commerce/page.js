import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import SiteVitrineAnimations from '@/components/SiteVitrineAnimations'
import HomepageAnimations from '@/components/HomepageAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Site E-commerce Shopify — Orion Studio',
  description: 'Nous concevons des boutiques Shopify sur mesure, performantes et optimisées pour convertir vos visiteurs en acheteurs fidèles.',
}

const services = [
  {
    num: '01',
    title: 'Création de boutique Shopify',
    desc: "Nous concevons et développons votre boutique Shopify de A à Z : design sur mesure sous Figma, développement du thème, configuration du catalogue, des variantes, des moyens de paiement et des options de livraison.",
  },
  {
    num: '02',
    title: 'Refonte & migration vers Shopify',
    desc: "Vous vendez sur WooCommerce, PrestaShop ou une autre plateforme ? Nous gérons l'intégralité de la transition : récupération des produits, commandes, clients et redirections SEO — sans perte de données ni de positions Google.",
  },
  {
    num: '03',
    title: 'Optimisation des taux de conversion (CRO)',
    desc: "Votre boutique génère du trafic mais pas assez de ventes ? Nous analysons les parcours d'achat et intervenons sur les points de friction : fiches produits, tunnel de commande, relances panier, upsells et cross-sells.",
  },
  {
    num: '04',
    title: 'Intégrations & automatisations',
    desc: "Connectez votre boutique à vos outils marketing, logistiques et analytiques. Nous configurons les apps les plus adaptées à votre modèle et branchons Make ou n8n pour automatiser vos opérations post-achat.",
  },
  {
    num: '05',
    title: 'SEO e-commerce',
    desc: "Le référencement naturel est l'un des leviers les plus rentables pour une boutique en ligne. Nous optimisons la structure technique, les fiches produits, les collections et le contenu éditorial pour capter un trafic qualifié durablement.",
  },
  {
    num: '06',
    title: 'Support & maintenance',
    desc: "Une boutique en ligne ne s'arrête jamais. Nous assurons la maintenance technique, les ajouts de fonctionnalités et la résolution rapide des incidents — pour que vous puissiez vous concentrer sur votre croissance.",
  },
]

const avantages = [
  { label: 'Design 100% sur-mesure, sans thème générique' },
  { label: "Tunnel d'achat optimisé pour la conversion" },
  { label: 'Paiements sécurisés (PCI DSS niveau 1)' },
  { label: 'Gestion intuitive produits & commandes' },
  { label: 'Scalable : de 10 à 100 000 références' },
  { label: 'Automatisations post-achat incluses' },
]

const chiffres = [
  { value: '3–6', unit: 'semaines', label: 'Délai de livraison moyen' },
  { value: '+35%', unit: '', label: 'De conversion vs thème générique' },
  { value: '99,9%', unit: '', label: 'Disponibilité garantie Shopify' },
]

const fonctionnalites = [
  { icon: '✦', title: 'Fiche produit haute conversion', desc: "Photos, variantes, avis, upsell — tout pensé pour déclencher l'achat" },
  { icon: '✦', title: 'Checkout optimisé', desc: "Tunnel d'achat simplifié, relances panier, multi-devises et multi-langues" },
  { icon: '✦', title: 'Automatisations post-achat', desc: "Emails, notifications, gestion stocks — branché sur Make ou n8n" },
]

export default function SiteEcommerce() {
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
                Une boutique{' '}
                <span className="gradient-text">Shopify</span>{' '}
                pensée pour{' '}
                <span className="gradient-text">vendre.</span>
              </h1>

              <div className="sv-hero__side">
                <p className="sv-hero__desc">
                  Créer une boutique ne suffit pas. Nous concevons des expériences e-commerce sur Shopify qui convertissent les visiteurs en acheteurs, et les acheteurs en clients fidèles. Design sur mesure, performance, SEO et automatisations — tout est pensé pour faire croître votre chiffre d&apos;affaires.
                </p>
                <p className="sv-hero__desc sv-hero__desc--bold">
                  Votre boutique, conçue pour performer dès le premier jour.
                </p>
                <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                  <span className="text-cta">Parlez-nous de votre projet</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" />
                </Link>
              </div>
            </div>

            <div className="sv-hero__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bannerSiteEcommerce.png" alt="Site e-commerce Shopify par Orion Studio" />
            </div>

          </div>
        </section>

        {/* ─── CHIFFRES ─── */}
        <section className="svt-stats">
          <div className="container">
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
        </section>

        {/* ─── POURQUOI SHOPIFY ─── */}
        <section className="sv-why">
          <div className="container">
            <div className="sv-why__grid">

              <div className="sv-why__left">
                <span className="section-tag">POURQUOI SHOPIFY ?</span>
                <h2>La plateforme e-commerce la plus fiable du marché.</h2>
                <p>
                  Shopify gère l&apos;infrastructure pour vous : hébergement, sécurité, mises à jour, PCI DSS. Vous vous concentrez sur la vente, pas sur la technique.
                </p>
                <p>
                  Nous y apportons ce que Shopify ne fait pas seul : un design sur-mesure qui vous différencie, un tunnel d&apos;achat optimisé pour la conversion, et des automatisations qui font tourner votre boutique pendant que vous dormez.
                </p>
                <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                  <span className="text-cta">Démarrer un projet</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" />
                </Link>
              </div>

              <div className="sv-why__right">
                <ul className="sv-why__list">
                  {avantages.map((a, i) => (
                    <li key={i} className="sv-why__item">
                      <span className="sv-why__check">✓</span>
                      {a.label}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ─── CE QU'ON LIVRE ─── */}
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
                <span className="section-tag">CE QU&apos;ON LIVRE</span>
                <h2>Une boutique clé en main, prête à vendre dès le lancement.</h2>
                <p>
                  Pas juste un thème Shopify paramétré. Une boutique conçue depuis une maquette Figma unique, développée sur mesure, avec chaque détail pensé pour la conversion : typographie, couleurs, animations, interactions.
                </p>
                <p>
                  Et parce qu&apos;une boutique ne s&apos;arrête pas à la mise en ligne, on branche vos automatisations post-achat pour que tout tourne en autonomie.
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

        {/* ─── SERVICES ─── */}
        <section className="sv-services">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">NOS PRESTATIONS</span>
              <h2>Tout ce qu&apos;il faut pour vendre en ligne</h2>
            </div>
            <div className="sv-services__grid">
              {services.map((s) => (
                <div key={s.num} className="sv-service-card">
                  <span className="sv-service-card__num">{s.num}</span>
                  <h3 className="sv-service-card__title">{s.title}</h3>
                  <p className="sv-service-card__desc">{s.desc}</p>
                </div>
              ))}
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
      <HomepageAnimations />
    </>
  )
}

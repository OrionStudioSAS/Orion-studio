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
  title: 'Site Vitrine Sur-Mesure — Orion Studio',
  description: 'Des sites web sur-mesure, conçus et livrés rapidement, sans dépendance à une plateforme. Votre site, vos règles.',
}

const services = [
  {
    num: '01',
    title: 'Design sur-mesure',
    desc: "Chaque site est conçu de A à Z par notre équipe sous Figma, à partir de votre identité et de vos objectifs. Pas de thème, pas de template — un design unique qui vous ressemble et vous distingue de la concurrence.",
  },
  {
    num: '02',
    title: 'Développement rapide',
    desc: "Grâce à notre process de développement optimisé, nous livrons des sites performants en quelques semaines. Code propre, optimisé pour le SEO et les Core Web Vitals, sans dépendance à des plugins instables.",
  },
  {
    num: '03',
    title: 'Orion Admin — votre CMS',
    desc: "Modifiez vos textes, images et articles de blog en totale autonomie depuis Orion Admin, notre back-office sur mesure. Simple, intuitif, sans abonnement supplémentaire — vous gérez votre contenu comme vous voulez.",
  },
  {
    num: '04',
    title: 'Espace membre intégré',
    desc: "Authentification, rôles, contenus privés, tableau de bord membres — tout est géré nativement avec Supabase. Pas de Memberstack à 50$/mois, pas de dépendance externe : votre espace membre est propriété de votre code.",
  },
  {
    num: '05',
    title: 'Intégrations & automatisations',
    desc: "CRM, outils marketing, webhooks, Make, n8n — votre site se connecte à votre écosystème d'outils. On automatise les tâches répétitives pour que vous puissiez vous concentrer sur votre métier.",
  },
  {
    num: '06',
    title: 'SEO & performance',
    desc: "Structure sémantique, balisage schema, Core Web Vitals, métadonnées — les bonnes pratiques SEO sont intégrées dès la conception, pas en option. Votre site est fait pour être trouvé.",
  },
]

const avantages = [
  { label: 'Votre site vous appartient à 100%' },
  { label: 'Aucun abonnement plateforme (Webflow, Memberstack…)' },
  { label: 'Modifiez vos contenus via Orion Admin' },
  { label: 'Livraison en 2 à 4 semaines' },
  { label: 'Espace membre sans coût supplémentaire' },
  { label: 'Code propre, performant, évolutif' },
]

const chiffres = [
  { value: '2–4', unit: 'semaines', label: 'Délai de livraison moyen' },
  { value: '0', unit: '€/mois', label: "D'abonnement plateforme" },
  { value: '100%', unit: '', label: 'Propriété du code' },
]

export default function SiteVitrine() {
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
                Un site web{' '}
                <span className="gradient-text">sur-mesure</span>,
                livré vite,{' '}
                <span className="gradient-text">sans abonnement</span>{' '}
                plateforme.
              </h1>

              <div className="sv-hero__side">
                <p className="sv-hero__desc">
                  On conçoit votre site de A à Z — design, développement, SEO et back-office — sans vous enfermer dans une plateforme tierce. Votre site vous appartient entièrement, et vous le gérez en autonomie via Orion Admin.
                </p>
                <p className="sv-hero__desc sv-hero__desc--bold">
                  Plus rapide, plus économique, 100% propriétaire.
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
              <img src="/images/bannerSiteVitrine.png" alt="Site vitrine sur-mesure par Orion Studio" />
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

        {/* ─── VOTRE SITE, VOS RÈGLES ─── */}
        <section className="sv-why">
          <div className="container">
            <div className="sv-why__grid">

              <div className="sv-why__left">
                <span className="section-tag">VOTRE SITE, VOS RÈGLES</span>
                <h2>Fini la dépendance aux plateformes.</h2>
                <p>
                  Webflow, Squarespace, Wix — ces outils imposent leurs règles, leurs abonnements et leurs limites. Quand leur tarif augmente, vous payez. Quand ils changent une fonctionnalité, vous subissez.
                </p>
                <p>
                  Nous développons votre site sur une base technique que vous possédez entièrement. Hébergement au choix, code exportable, aucune dépendance critique. Si demain vous voulez changer d&apos;agence ou internaliser, tout vous appartient.
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
                <span className="section-tag">ORION ADMIN</span>
                <h2>Modifiez votre contenu sans toucher une ligne de code.</h2>
                <p>
                  Orion Admin est notre back-office sur-mesure, inclus avec chaque site. Ajoutez un article, changez une image, mettez à jour vos tarifs — tout se fait depuis une interface simple et intuitive.
                </p>
                <p>
                  Conçu spécifiquement pour votre site. Pas de fonctionnalités inutiles, pas d&apos;abonnement supplémentaire, pas d&apos;apprentissage complexe.
                </p>
                <div className="svt-admin__features">
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Gestion du blog</strong>
                      <p>Créez et publiez vos articles depuis une interface épurée</p>
                    </div>
                  </div>
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Édition de contenu</strong>
                      <p>Textes, images, sections — modifiez ce que vous voulez</p>
                    </div>
                  </div>
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Gestion des membres</strong>
                      <p>Accès, rôles, abonnements — tout depuis votre dashboard</p>
                    </div>
                  </div>
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
              <h2>Tout ce qu&apos;il faut pour un site qui performe</h2>
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
        <FAQ defaultTab={1} />

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

import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import SiteVitrineAnimations from '@/components/SiteVitrineAnimations'
import HomepageAnimations from '@/components/HomepageAnimations'
import SpotlightCards from '@/components/SpotlightCards'
import Link from 'next/link'

export const metadata = {
  title: 'Automatisation Make & n8n — Orion Studio',
  description: 'Nous construisons des workflows automatisés sur mesure avec Make et n8n pour connecter vos outils, éliminer les tâches répétitives et libérer vos équipes.',
}

const services = [
  {
    num: '01',
    title: 'Audit & cartographie de vos workflows',
    desc: "Avant d'automatiser, nous analysons vos processus existants : quelles tâches sont répétitives, quels outils ne communiquent pas entre eux, où se trouvent les goulots d'étranglement. Un audit clair pour des automatisations utiles et ciblées.",
  },
  {
    num: '02',
    title: 'Automatisations Make',
    desc: "Make est la plateforme no-code la plus puissante du marché pour créer des automatisations visuelles et complexes. Nous concevons et déployons vos scénarios : synchronisation de données, déclencheurs conditionnels, boucles et gestion d'erreurs.",
  },
  {
    num: '03',
    title: 'Automatisations n8n (open source)',
    desc: "n8n est la solution idéale pour les entreprises qui souhaitent garder le contrôle total sur leurs données. Auto-hébergé sur vos serveurs, il offre une flexibilité maximale, des coûts maîtrisés et une personnalisation illimitée via du code.",
  },
  {
    num: '04',
    title: 'Intégrations CRM & marketing automation',
    desc: "Synchronisez vos leads, automatisez vos séquences d'emails, mettez à jour votre CRM en temps réel. Nous connectons HubSpot, Salesforce, Klaviyo, Mailchimp et bien d'autres à votre écosystème existant.",
  },
  {
    num: '05',
    title: 'Automatisations e-commerce & opérations',
    desc: "De la commande à la livraison, automatisez votre chaîne opérationnelle : gestion des stocks, notifications clients, synchronisation ERP, rapports de vente, gestion des retours et des remboursements.",
  },
  {
    num: '06',
    title: 'Maintenance & évolution des scénarios',
    desc: "Les workflows évoluent avec votre business. Nous assurons la maintenance de vos scénarios Make et n8n, la gestion des erreurs, les mises à jour lors de changements d'API et l'ajout de nouvelles automatisations.",
  },
]

const avantages = [
  { label: 'Workflows 100% sur-mesure, zéro générique' },
  { label: 'Compatible avec +1 000 outils & APIs' },
  { label: 'Réduction des erreurs humaines' },
  { label: 'Économies de temps mesurables dès J+30' },
  { label: 'Données hébergées sur vos serveurs (n8n)' },
  { label: 'Scalable et évolutif avec votre croissance' },
]

const chiffres = [
  { value: 'J+30', unit: '', label: 'Premiers gains de temps mesurables' },
  { value: '+1000', unit: 'outils', label: 'Connectables nativement' },
  { value: '0', unit: 'tâche', label: 'Répétitive non automatisable' },
]

const outils = [
  { icon: '✦', title: 'Make — la puissance visuelle', desc: "Interface drag & drop, scénarios complexes, gestion d'erreurs avancée. Idéal pour les workflows métier sans code." },
  { icon: '✦', title: 'n8n — la liberté open source', desc: "Auto-hébergé, vos données ne quittent jamais vos serveurs. Personnalisable à l'infini via du code JavaScript." },
  { icon: '✦', title: 'Sur mesure via API', desc: "Quand Make et n8n ne suffisent pas, on code directement les intégrations via les APIs de vos outils." },
]

export default function Automatisation() {
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
                Automatisez.{' '}
                <span className="gradient-text">Connectez.</span>{' '}
                Gagnez du{' '}
                <span className="gradient-text">temps.</span>
              </h1>

              <div className="sv-hero__side">
                <p className="sv-hero__desc">
                  Les tâches répétitives coûtent du temps, de l&apos;argent et de l&apos;énergie. Avec Make et n8n, nous construisons des workflows automatisés sur mesure qui connectent vos outils, éliminent les frictions opérationnelles et libèrent vos équipes pour ce qui compte vraiment.
                </p>
                <p className="sv-hero__desc sv-hero__desc--bold">
                  Une infrastructure automatisée, au service de votre croissance.
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
              <img src="/images/bannerAutomation.png" alt="Automatisation Make et n8n par Orion Studio" />
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

        {/* ─── POURQUOI AUTOMATISER ─── */}
        <section className="sv-why">
          <div className="container">
            <div className="sv-why__grid">

              <div className="sv-why__left">
                <span className="section-tag">POURQUOI AUTOMATISER ?</span>
                <h2>Libérez vos équipes des tâches répétitives.</h2>
                <p>
                  Chaque heure passée à copier-coller des données, envoyer des emails manuellement ou mettre à jour des tableaux est une heure de moins sur votre cœur de métier. L&apos;automatisation n&apos;est plus un luxe, c&apos;est un avantage concurrentiel.
                </p>
                <p>
                  Nous cartographions vos processus, identifions ce qui peut être automatisé, et déployons des workflows fiables qui tournent 24h/24 sans intervention humaine.
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

        {/* ─── NOS OUTILS ─── */}
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
                    <div className="svt-admin__row" style={{ width: '80%' }} />
                    <div className="svt-admin__row svt-admin__row--short" />
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                      <div className="svt-admin__row" style={{ flex: 1, height: '60px', borderRadius: '8px' }} />
                      <div className="svt-admin__row" style={{ flex: 1, height: '60px', borderRadius: '8px', background: 'rgba(175,56,255,0.15)' }} />
                      <div className="svt-admin__row" style={{ flex: 1, height: '60px', borderRadius: '8px' }} />
                    </div>
                    <div className="svt-admin__row svt-admin__row--short" style={{ marginTop: '0.75rem' }} />
                    <div className="svt-admin__row svt-admin__row--btn" />
                  </div>
                </div>
              </div>

              <div className="svt-admin__content">
                <span className="section-tag">NOS OUTILS</span>
                <h2>Make, n8n ou sur-mesure — on choisit le bon outil pour votre cas.</h2>
                <p>
                  Pas une seule solution pour tout le monde. Selon votre volume de données, votre infrastructure et vos exigences de confidentialité, on vous recommande l&apos;outil le plus adapté — et on le déploie.
                </p>
                <div className="svt-admin__features">
                  {outils.map((o, i) => (
                    <div key={i} className="svt-admin__feature">
                      <span className="svt-admin__feature-icon">{o.icon}</span>
                      <div>
                        <strong>{o.title}</strong>
                        <p>{o.desc}</p>
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
              <h2>Des automatisations taillées pour votre métier</h2>
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
        <FAQ defaultTab={3} />

        {/* ─── CONTACT ─── */}
        <Contact />

      </main>
      <Footer />
      <ScrollObserver />
      <SiteVitrineAnimations />
      <HomepageAnimations />
      <SpotlightCards />
    </>
  )
}

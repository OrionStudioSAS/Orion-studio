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
  title: 'Automatisation n8n — Orion Studio',
  description: "On identifie les tâches répétitives qui freinent votre équipe et on les automatise. Moins de saisie manuelle, moins d'erreurs, plus de temps pour ce qui compte.",
  robots: 'noindex',
}

const exemplesSite = [
  { label: "Formulaire rempli → lead créé dans votre CRM automatiquement" },
  { label: "Article publié depuis Orion Admin → partagé sur LinkedIn" },
  { label: "Nouvelle commande → client ajouté à votre newsletter" },
  { label: "Devis accepté → dossier créé + email de bienvenue envoyé" },
]

const exemplesProcess = [
  { label: "Données saisies dans Monday → client créé + email envoyé automatiquement" },
  { label: "Nouveau contrat signé → onboarding déclenché sans intervention" },
  { label: "Stock bas détecté → alerte équipe + bon de commande généré" },
  { label: "Lead qualifié → assigné au bon commercial selon des règles définies" },
]

const chiffres = [
  { value: '1h', unit: '', label: 'Pour cartographier vos process' },
  { value: 'J+30', unit: '', label: 'Premiers gains de temps mesurables' },
  { value: '0', unit: '', label: 'Ligne de code à écrire pour vous' },
]

const services = [
  {
    num: '01',
    title: 'Audit & cartographie',
    desc: "On commence par 1h avec vous. On passe en revue vos outils, vos tâches quotidiennes, vos process. On identifie ce qui est répétitif, manuel, source d'erreurs. À la fin, vous avez une liste concrète de ce qu'on peut automatiser et ce que ça vous fait gagner.",
  },
  {
    num: '02',
    title: 'Automatisations liées à votre site',
    desc: "Votre site devient le déclencheur d'actions automatiques : formulaire soumis, commande passée, article publié — chaque événement peut enchaîner une série d'actions dans vos outils sans que vous ayez à intervenir.",
  },
  {
    num: '03',
    title: 'Optimisation de vos process internes',
    desc: "Les tâches répétitives de vos équipes — saisie de données, mises à jour manuelles, envois d'emails de routine — on les automatise. Votre équipe se concentre sur ce qui crée vraiment de la valeur.",
  },
  {
    num: '04',
    title: 'Connexions entre vos outils',
    desc: "CRM, Monday, Notion, Google Sheets, Slack, emails, ERP — vos outils ne se parlent pas toujours. On crée les ponts qui manquent pour que l'information circule automatiquement là où elle doit aller.",
  },
  {
    num: '05',
    title: 'Flows intégrés à Orion Admin',
    desc: "Directement depuis votre back-office, déclenchez des automatisations en un clic. Générez un article complet en saisissant juste un titre, envoyez une campagne, mettez à jour plusieurs outils en même temps — sans quitter votre interface.",
  },
  {
    num: '06',
    title: 'Maintenance & évolution',
    desc: "Vos outils évoluent, vos process aussi. On assure la maintenance de vos workflows n8n, on gère les erreurs et on ajoute de nouvelles automatisations au fil de votre croissance.",
  },
]

export default function AutomatisationTest() {
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
                Vos tâches{' '}
                <span className="gradient-text">répétitives</span>{' '}
                ont une solution.
              </h1>
              <div className="sv-hero__side">
                <p className="sv-hero__desc">
                  Votre comptable passe des heures à copier des données d&apos;un outil à l&apos;autre. Votre commercial oublie de relancer parce que son CRM n&apos;est pas à jour. Votre équipe fait manuellement ce qu&apos;un workflow pourrait faire en deux secondes.
                </p>
                <p className="sv-hero__desc sv-hero__desc--bold">
                  On identifie ce qui freine vos équipes. On l&apos;automatise.
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
              <img src="/images/bannerAutomation.webp" alt="Automatisation n8n par Orion Studio" />
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

        {/* ─── DEUX AXES ─── */}
        <section className="svt-axes">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">CE QU&apos;ON AUTOMATISE</span>
              <h2>Votre site. Vos process. Les deux.</h2>
            </div>
            <div className="svt-axes__grid">

              {/* Axe 1 — Site */}
              <div className="svt-axe">
                <div className="svt-axe__header">
                  <span className="svt-axe__num">01</span>
                  <div>
                    <h3>Les automatisations liées à votre site</h3>
                    <p>Chaque action sur votre site déclenche ce qui doit se passer dans vos outils — sans que vous ayez à intervenir.</p>
                  </div>
                </div>
                <ul className="svt-axe__list">
                  {exemplesSite.map((e, i) => (
                    <li key={i}>
                      <span className="svt-axe__arrow">→</span>
                      {e.label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Axe 2 — Process */}
              <div className="svt-axe">
                <div className="svt-axe__header">
                  <span className="svt-axe__num">02</span>
                  <div>
                    <h3>L&apos;optimisation de vos process internes</h3>
                    <p>Les tâches manuelles et répétitives de vos équipes, on les automatise pour libérer du temps sur ce qui compte vraiment.</p>
                  </div>
                </div>
                <ul className="svt-axe__list">
                  {exemplesProcess.map((e, i) => (
                    <li key={i}>
                      <span className="svt-axe__arrow">→</span>
                      {e.label}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ─── ORION ADMIN + FLOWS ─── */}
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
                    <div className="svt-admin__row" style={{ width: '70%' }} />
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                      <div className="svt-admin__row" style={{ flex: 1, height: '52px', borderRadius: '8px' }} />
                      <div className="svt-admin__row" style={{ flex: 1, height: '52px', borderRadius: '8px', background: 'rgba(175,56,255,0.2)' }} />
                    </div>
                    <div className="svt-admin__row svt-admin__row--short" style={{ marginTop: '1rem' }} />
                    <div className="svt-admin__row svt-admin__row--btn" />
                  </div>
                </div>
              </div>

              <div className="svt-admin__content">
                <span className="section-tag">ORION ADMIN + FLOWS</span>
                <h2>Des automatisations accessibles directement depuis votre back-office.</h2>
                <p>
                  Pas besoin de passer par un outil externe. Certaines automatisations sont directement intégrées dans Orion Admin, votre interface de gestion.
                </p>
                <p>
                  Vous saisissez un titre d&apos;article, le flow n8n se charge du reste : génération du contenu, mise en forme, publication sur votre site. D&apos;autres flows peuvent être ajoutés selon vos besoins.
                </p>
                <div className="svt-admin__features">
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Génération d&apos;articles en un clic</strong>
                      <p>Saisissez un titre, le flow crée et publie l&apos;article sur votre site</p>
                    </div>
                  </div>
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Flows sur mesure selon vos besoins</strong>
                      <p>On intègre les automatisations les plus utiles à votre activité</p>
                    </div>
                  </div>
                  <div className="svt-admin__feature">
                    <span className="svt-admin__feature-icon">✦</span>
                    <div>
                      <strong>Tout depuis une seule interface</strong>
                      <p>Site, contenu, automatisations — géré depuis Orion Admin</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── LE DIAGNOSTIC ─── */}
        <section className="svt-diagnostic">
          <div className="container">
            <div className="svt-diagnostic__inner">
              <div className="svt-diagnostic__text">
                <span className="section-tag">NOTRE APPROCHE</span>
                <h2>On commence toujours par comprendre votre quotidien.</h2>
                <p>
                  Vous n&apos;avez pas à savoir ce qui peut être automatisé chez vous — c&apos;est notre boulot. On passe une heure avec vous à passer en revue vos outils et vos tâches du quotidien. À la fin, vous avez une liste claire de ce qu&apos;on peut automatiser, et ce que ça vous fait gagner concrètement chaque semaine.
                </p>
                <p>
                  Ensuite seulement on construit. Rien de générique, tout est taillé pour votre façon de travailler.
                </p>
              </div>
              <div className="svt-diagnostic__steps">
                {[
                  { n: '01', t: 'Audit de vos process', d: "1h avec vous pour cartographier vos outils et identifier les tâches automatisables" },
                  { n: '02', t: 'On vous dit ce que ça vaut', d: "Gain de temps estimé par semaine, retour sur investissement, priorités" },
                  { n: '03', t: 'On construit & on déploie', d: "Workflows n8n sur mesure, testés, documentés et livrés opérationnels" },
                ].map((s) => (
                  <div key={s.n} className="svt-diagnostic__step">
                    <span className="svt-diagnostic__step-num">{s.n}</span>
                    <div>
                      <strong>{s.t}</strong>
                      <p>{s.d}</p>
                    </div>
                  </div>
                ))}
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
    </>
  )
}

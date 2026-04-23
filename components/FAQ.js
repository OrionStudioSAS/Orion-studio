'use client'
import { useState } from 'react'

const categories = [
  {
    title: 'Général',
    items: [
      {
        q: 'Quelles sont vos modalités de paiement ?',
        a: 'À la signature : 30 %, à la validation de la maquette : 30 %, à la livraison finale : 30 %, 2 semaines après la mise en ligne : 10 %. Nous pouvons adapter ces échéances selon vos besoins.',
      },
      {
        q: 'Combien de temps dure une prestation ?',
        a: 'En moyenne, entre 4 et 8 semaines, selon la complexité du site et la réactivité des échanges.',
      },
      {
        q: "Qui compose l'équipe Orion Studio ?",
        a: "Orion Studio, c'est Julien et Théo, cofondateurs passionnés, experts en développement web sur-mesure et automatisations. Notre structure à taille humaine nous permet de travailler main dans la main avec nos clients.",
      },
      {
        q: 'Proposez-vous un accompagnement après la mise en ligne ?',
        a: "Oui ! Nous assurons deux semaines de suivi post-lancement pour garantir la stabilité du site. Nous proposons aussi des formules de maintenance ou d'évolution continue.",
      },
      {
        q: "Qu'est-ce qui différencie Orion Studio d'une autre agence ?",
        a: "Notre approche repose sur trois piliers : Clarté (vous savez toujours où en est votre projet), Autonomie (vous gérez votre contenu via Orion Admin sans dépendance externe), Expertise (développement sur-mesure, Shopify et automatisations).",
      },
    ],
  },
  {
    title: 'Site internet',
    items: [
      {
        q: "Pourquoi un site sur-mesure plutôt que Wix, WordPress ou Webflow ?",
        a: "Avec un site sur-mesure, vous êtes propriétaire à 100% : pas d'abonnement chaque mois, pas de plateforme qui change ses tarifs, pas de plugin qui casse votre site. Vous payez une fois, et votre site est à vous pour de bon.",
      },
      {
        q: "Quels types de sites faites-vous ?",
        a: "Sites de présentation pour entreprises, landing pages, blogs, sites avec espace client, portfolios. Si vous voulez un site, on peut le faire.",
      },
      {
        q: "Est-ce que je peux modifier mon site moi-même ?",
        a: "Oui, complètement. Chaque site est livré avec Orion Admin : vous changez vos textes, vos photos, ajoutez des articles de blog comme dans un Word. Pas besoin d'être à l'aise avec l'informatique.",
      },
      {
        q: "Mon site sera-t-il bien référencé sur Google ?",
        a: "Oui. On optimise votre site pour Google dès le départ : code propre, vitesse de chargement, descriptions, balises. Pas en option, pas en supplément.",
      },
      {
        q: "Combien coûte un site internet ?",
        a: "Nos sites commencent généralement à 2 500 €. Le prix exact dépend du nombre de pages et des fonctionnalités. On vous fait un devis clair en moins de 48h après notre premier appel.",
      },
    ],
  },
  {
    title: 'E-commerce',
    items: [
      {
        q: 'Pourquoi choisir Shopify pour votre boutique ?',
        a: "Shopify est une plateforme clé en main dédiée à la vente en ligne. Elle offre une gestion simplifiée des produits, commandes, paiements et livraisons.",
      },
      {
        q: 'Quels types de boutiques réalisez-vous ?',
        a: 'Boutiques classiques, box mensuelles / abonnements, marketplaces spécialisées, boutiques locales avec Click & Collect, sites B2B.',
      },
      {
        q: "Puis-je connecter Shopify à d'autres outils ?",
        a: "Oui, Shopify s'intègre à de nombreuses solutions : ERP, CRM, outils marketing, ou encore marketplaces comme Amazon.",
      },
      {
        q: "Quelle est la durée moyenne d'un projet Shopify ?",
        a: "En moyenne 6 à 10 semaines, selon le nombre de produits, les intégrations logistiques, et la complexité du design.",
      },
      {
        q: 'Proposez-vous des formations sur Shopify ?',
        a: "Oui, chaque livraison inclut une session de formation personnalisée pour vous apprendre à gérer votre boutique au quotidien.",
      },
    ],
  },
  {
    title: 'Automatisation',
    items: [
      {
        q: 'Quelle est la différence entre Make et n8n ?',
        a: "Make est une plateforme cloud no-code, idéale pour des automatisations visuelles et rapides à déployer. n8n est open source et auto-hébergeable, parfait pour les entreprises qui souhaitent garder le contrôle total de leurs données et bénéficier d'une flexibilité maximale. Nous vous conseillons la solution la plus adaptée à votre contexte.",
      },
      {
        q: 'Faut-il avoir des compétences techniques pour utiliser vos automatisations ?',
        a: "Non. Nos workflows sont conçus pour être supervisés simplement, via des dashboards clairs. Nous formons vos équipes à la prise en main et documentons chaque scénario. Vous restez autonomes au quotidien sans avoir besoin de coder.",
      },
      {
        q: 'Quels outils pouvez-vous connecter ?',
        a: "Nous connectons plus de 1 000 applications : CRM (HubSpot, Salesforce, Pipedrive), emailing (Klaviyo, Mailchimp, Brevo), e-commerce (Shopify, WooCommerce), facturation (Pennylane, Stripe), productivité (Notion, Airtable, Slack, Google Workspace) et bien d'autres via API.",
      },
      {
        q: "Combien de temps faut-il pour mettre en place une automatisation ?",
        a: "Un workflow simple (ex : notification Slack à chaque nouveau lead) peut être opérationnel en quelques jours. Un projet complet incluant audit, conception et déploiement de plusieurs scénarios prend entre 3 et 6 semaines selon la complexité.",
      },
      {
        q: 'Que se passe-t-il si un workflow tombe en panne ?',
        a: "Nos scénarios intègrent une gestion native des erreurs : alertes automatiques, tentatives de relance et logs détaillés. Nous proposons également des contrats de maintenance pour surveiller, corriger et faire évoluer vos automatisations dans la durée.",
      },
      {
        q: 'Peut-on automatiser des processus métiers complexes avec des conditions ?',
        a: "Absolument. Make et n8n permettent de gérer des logiques conditionnelles avancées, des boucles, des branchements multiples et des transformations de données. Nous avons déployé des workflows à 20+ étapes intégrant des règles métier spécifiques à chaque client.",
      },
    ],
  },
]

const hours = [
  { day: 'Lundi – Vendredi', time: '9h00 – 18h00' },
  { day: 'Samedi',           time: '10h00 – 13h00' },
  { day: 'Dimanche',         time: 'Fermé' },
]

export default function FAQ({ defaultTab = 0 }) {
  const [activeTab, setActiveTab]   = useState(defaultTab)
  const [openItem, setOpenItem]     = useState(null)

  const handleTab = (index) => {
    setActiveTab(index)
    setOpenItem(null)
  }

  const toggle = (i) => {
    setOpenItem(prev => prev === i ? null : i)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">

        {/* ── Colonne gauche ── */}
        <div className="faq__left">
          <h2 className="faq__title">FAQ</h2>

          <div className="faq__hours">
            <p className="faq__hours-label">Nos horaires</p>
            <ul className="faq__hours-list">
              {hours.map(({ day, time }) => (
                <li key={day}>
                  <span className="faq__hours-day">{day}</span>
                  <span className="faq__hours-time">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Colonne droite ── */}
        <div className="faq__right">

          {/* Onglets de catégorie */}
          <div className="faq__tabs">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                className={`faq__tab${activeTab === i ? ' active' : ''}`}
                onClick={() => handleTab(i)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Accordion de la catégorie active */}
          <div className="faq__list">
            {categories[activeTab].items.map((item, i) => (
              <div key={i} className={`faq-item${openItem === i ? ' open' : ''}`}>
                <button className="faq-item__question" onClick={() => toggle(i)}>
                  {item.q}
                  <span className="faq-item__icon">+</span>
                </button>
                <div className="faq-item__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

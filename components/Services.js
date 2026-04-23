import Link from 'next/link'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">NOS SERVICES</span>
          <h2>Ce que nous créons pour vous</h2>
        </div>
        <div className="services__grid">

          <div className="service-card">
            <div className="service-card__icon">🌐</div>
            <h3>Site Vitrine</h3>
            <p>Attirez, rassurez et convertissez avec un site web conçu pour valoriser votre marque et soutenir votre croissance.</p>
            <ul className="service-card__list">
              <li>Développement sur-mesure</li>
              <li>Stratégie digitale</li>
              <li>UX/UI design</li>
              <li>Animations &amp; interactions</li>
              <li>Autonomie de gestion des contenus</li>
              <li>Optimisation SEO / CRO</li>
            </ul>
            <Link href="#contact" className="btn btn--ghost">En savoir plus →</Link>
          </div>

          <div className="service-card service-card--featured">
            <div className="service-card__icon">🛒</div>
            <h3>Site E-commerce</h3>
            <p>Transformez votre trafic en chiffre d&apos;affaires grâce à une boutique en ligne performante, fluide et pensée pour vendre.</p>
            <ul className="service-card__list">
              <li>Développement Shopify</li>
              <li>Stratégie e-commerce</li>
              <li>UX orientée conversion</li>
              <li>Configuration paiements &amp; logistique</li>
              <li>Optimisation tunnel d&apos;achat</li>
              <li>Tracking &amp; analytics</li>
              <li>Automatisations marketing</li>
            </ul>
            <Link href="#contact" className="btn btn--ghost">En savoir plus →</Link>
          </div>

          <div className="service-card">
            <div className="service-card__icon">⚡</div>
            <h3>Automatisation</h3>
            <p>Automatisez les tâches répétitives et structurez votre croissance avec des systèmes connectés et intelligents.</p>
            <ul className="service-card__list">
              <li>Connexion e-commerce → comptabilité</li>
              <li>Génération automatique d&apos;articles de blog</li>
              <li>Génération et envoi de devis automatisés</li>
              <li>Relance de panier abandonné intelligent</li>
              <li>Génération facture automatique</li>
            </ul>
            <Link href="#contact" className="btn btn--ghost">En savoir plus →</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

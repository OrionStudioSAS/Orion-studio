'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Site vitrine',
    desc: 'Attirez, rassurez et convertissez avec un site web conçu pour valoriser votre marque et soutenir votre croissance.',
    href: '/site-vitrine',
    items: [
      'Développement sur-mesure',
      'Stratégie digitale',
      'UX/UI design',
      'Animations & interactions',
      'Autonomie de gestion des contenus',
      'Optimisation SEO / CRO',
    ],
  },
  {
    title: 'Site E-commerce',
    desc: "Transformez votre trafic en chiffre d'affaires grâce à une boutique en ligne performante, fluide et pensée pour vendre.",
    href: '#contact',
    items: [
      'Développement Shopify',
      'Stratégie e-commerce',
      'UX orientée conversion',
      'Configuration paiements & logistique',
      "Optimisation tunnel d'achat",
      'Tracking & analytics',
      'Automatisations marketing',
    ],
  },
  {
    title: 'Automatisation',
    desc: 'Automatisez les tâches répétitives et structurez votre croissance avec des systèmes connectés et intelligents.',
    href: '#contact',
    items: [
      'Connexion e-commerce → comptabilité',
      "Génération automatique d'articles de blog",
      'Génération et envoi de devis automatisés',
      'Relance de panier abandonné intelligent',
      'Génération facture automatique',
    ],
  },
]

export default function Expertises() {
  const linesRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6, rootMargin: '-8% 0px 0px 0px' }
    )

    linesRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="expertises" id="services">
      <div className="container">

        <div className="expertises__heading">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/starwhite.png" alt="" className="star" />
          <span>NOS EXPERTISES</span>
        </div>

        {services.map((service, i) => (
          <div key={i} className="expertise-item">

            <div
              className="expertise-line"
              ref={el => { linesRef.current[i] = el }}
            />

            <div className="expertise-content">
              <div className="expertise-left">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <ul className="expertise-list">
                {service.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>

            <Link href={service.href} className="cta" style={{ alignSelf: 'flex-start' }}>
              <span className="text-cta">Découvrir</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/starblack.png" alt="" className="star" />
            </Link>

          </div>
        ))}

      </div>
    </section>
  )
}

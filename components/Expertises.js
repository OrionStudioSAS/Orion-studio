'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Site internet',
    desc: "Un site simple, beau et à vous. Livré en 1 à 2 semaines, sans abonnement à payer chaque mois.",
    href: '/site-internet',
    items: [
      'Sur-mesure, pas de template',
      'Livré en 1 à 2 semaines',
      'Vous êtes propriétaire à 100%',
      '0€ de maintenance',
      'Vous gérez tout via Orion Admin',
      'Optimisé pour Google',
    ],
  },
  {
    title: 'E-commerce',
    desc: "Une boutique en ligne sur Shopify, pensée pour vendre. Simple à gérer au quotidien, prête à grandir avec vous.",
    href: '/site-e-commerce',
    items: [
      'Boutique Shopify sur-mesure',
      'Tunnel d\'achat fait pour convertir',
      'Paiements et livraison configurés',
      'Suivi de commandes simple',
      'Connexion à vos outils',
      'Formation à la gestion incluse',
    ],
  },
  {
    title: 'Automatisation',
    desc: "On automatise vos tâches répétitives. Vos outils communiquent entre eux, vous gagnez des heures chaque semaine.",
    href: '/automatisation',
    items: [
      'Audit de vos vraies journées',
      'Connexion entre vos outils',
      'Envoi de devis et factures automatique',
      'Relances clients automatisées',
      'Reportings sans effort',
      'Suivi clair depuis Orion Admin',
    ],
  },
  {
    title: 'SaaS',
    desc: "Vous avez une idée d'application ? On la transforme en produit fini, simple à utiliser, prêt à se faire utiliser.",
    href: '/saas',
    items: [
      'Application sur-mesure',
      'Vous êtes propriétaire à 100%',
      'Comptes utilisateurs inclus',
      'Paiements et abonnements',
      'Pensée pour grandir',
      'Suivi du dev en direct',
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
          <img src="/images/starwhite.png" alt="" className="star" width="14" height="14" />
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
              <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
            </Link>

          </div>
        ))}

      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Site internet',
    desc: "Un site simple, beau et à vous. Livré en 1 à 2 semaines, sans abonnement à payer chaque mois.",
    href: '/site-internet',
    visual: 'browser',
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
    desc: "Une boutique en ligne sur Shopify 100% à votre image, pensée pour vendre. Simple à gérer au quotidien, prête à grandir avec vous.",
    href: '/site-e-commerce',
    visual: 'cart',
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
    title: 'SaaS',
    desc: "Vous avez une idée d'application ? On la transforme en produit fini, simple à utiliser, prêt à se faire utiliser.",
    href: '/saas',
    visual: 'dashboard',
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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    linesRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="expertises" id="services">
      <div className="container">

        <div className="expertises__header">
          <h2 className="expertises__heading">NOS SERVICES</h2>
        </div>

        <ol className="exp-rows">
          {services.map((service, i) => (
            <li key={i} className="exp-row" ref={el => { linesRef.current[i] = el }}>
              <div className="exp-row__body">
                <h3 className="exp-row__title">{service.title}</h3>
                <p className="exp-row__desc">{service.desc}</p>
                <ul className="exp-row__items">
                  {service.items.map((item, j) => (
                    <li key={j} style={{ '--exp-i': j }}>{item}</li>
                  ))}
                </ul>
                <Link href={service.href} className="cta exp-row__cta">
                  <span className="text-cta">Découvrir</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
                </Link>
              </div>

              <ServiceVisual type={service.visual} />
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

function ServiceVisual({ type }) {
  if (type === 'browser') {
    return (
      <div className="vis vis--browser" aria-hidden="true">
        <div className="vis-browser">
          <div className="vis-browser__bar">
            <span></span><span></span><span></span>
          </div>
          <div className="vis-browser__body">
            <div className="vis-browser__hero" />
            <div className="vis-browser__line vis-browser__line--1" />
            <div className="vis-browser__line vis-browser__line--2" />
            <div className="vis-browser__cta" />
          </div>
        </div>
      </div>
    )
  }
  if (type === 'cart') {
    return (
      <div className="vis vis--cart" aria-hidden="true">
        <div className="vis-cart__tile">
          <div className="vis-cart__img" />
          <div className="vis-cart__name" />
          <div className="vis-cart__price">29 €</div>
        </div>
        <div className="vis-cart__bubble">+1</div>
      </div>
    )
  }
  if (type === 'flow') {
    return (
      <div className="vis vis--flow" aria-hidden="true">
        <div className="vis-flow__node vis-flow__node--1">⚡</div>
        <div className="vis-flow__line vis-flow__line--1" />
        <div className="vis-flow__node vis-flow__node--2">⚙</div>
        <div className="vis-flow__line vis-flow__line--2" />
        <div className="vis-flow__node vis-flow__node--3">✓</div>
        <div className="vis-flow__pulse" />
      </div>
    )
  }
  if (type === 'dashboard') {
    return (
      <div className="vis vis--dashboard" aria-hidden="true">
        <div className="vis-dash__metric">
          <span className="vis-dash__metric-num">+24%</span>
          <span className="vis-dash__metric-label">utilisateurs actifs</span>
        </div>
        <div className="vis-dash__bars">
          <span style={{ '--h': '38%' }} /><span style={{ '--h': '62%' }} />
          <span style={{ '--h': '46%' }} /><span style={{ '--h': '78%' }} />
          <span style={{ '--h': '55%' }} /><span style={{ '--h': '92%' }} />
        </div>
      </div>
    )
  }
  return null
}

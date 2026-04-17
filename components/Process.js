'use client'
import { useRef, useEffect } from 'react'

const steps = [
  {
    label: 'Étape 1',
    title: 'Diagnostic & cadrage stratégique',
    desc: "On analyse votre modèle, vos objectifs, vos outils existants et vos blocages actuels. L'idée n'est pas juste de créer, mais de construire quelque chose d'utile et durable.",
    items: [
      "Questionnaire de pré-cadrage",
      "Audit rapide de l'existant",
      "Définition des objectifs prioritaires",
      "Roadmap initiale",
    ],
  },
  {
    label: 'Étape 2',
    title: 'Architecture & conception',
    desc: "On définit les parcours utilisateurs, l'architecture des pages ou des flux, les points de conversion et les connexions entre vos outils.",
    items: [
      "Arborescence ou schéma de flux",
      "Wireframes ou blueprint d'automatisation",
      "Définition des indicateurs clés",
      "Planning de production",
    ],
  },
  {
    label: 'Étape 3',
    title: 'Design & développement',
    desc: "Interface, e-commerce, automatisation ou intégrations : tout est développé sur mesure, avec une attention particulière à la rapidité et à la stabilité.",
    items: [
      "Maquettes ou prototypes",
      "Développement sur-mesure",
      "Mise en place des automatisations",
      "Connexions aux outils tiers",
    ],
  },
  {
    label: 'Étape 4',
    title: 'Tests & optimisation',
    desc: "Avant mise en ligne, on teste les parcours, les paiements, les flux et les performances afin d'éviter les frictions.",
    items: [
      "Phase de test complet",
      "Corrections & ajustements",
      "Vérification des performances",
      "Validation finale",
    ],
  },
  {
    label: 'Étape 5',
    title: 'Déploiement & évolution',
    desc: "Une fois lancé, on vous accompagne dans l'analyse des données, les améliorations continues et les évolutions futures.",
    items: [
      "Mise en ligne & transfert",
      "Formation à l'outil",
      "Suivi post-lancement (2 semaines)",
      "Support & évolutions continues",
    ],
  },
]

export default function Process() {
  const wrapperRef = useRef(null)
  const trackRef = useRef(null)
  const stickyRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return

    const setHeight = () => {
      const extra = Math.max(0, track.scrollWidth - window.innerWidth)
      wrapper.style.height = `calc(100vh + ${extra}px)`
    }

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect()
      const total = wrapper.offsetHeight - window.innerHeight
      if (total <= 0) return
      const progress = Math.max(0, Math.min(1, -rect.top / total))
      const maxTranslate = track.scrollWidth - window.innerWidth
      track.style.transform = `translateX(-${progress * maxTranslate}px)`
    }

    setHeight()
    handleScroll()
    window.addEventListener('resize', setHeight)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Illuminate borders when the sticky panel is well into the viewport
    const sticky = stickyRef.current
    const illuminateObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrapper.classList.add('in-view')
          illuminateObserver.unobserve(sticky)
        }
      },
      { threshold: 0.4, rootMargin: '-15% 0px 0px 0px' }
    )
    illuminateObserver.observe(sticky)

    return () => {
      window.removeEventListener('resize', setHeight)
      window.removeEventListener('scroll', handleScroll)
      illuminateObserver.disconnect()
    }
  }, [])

  return (
    <div ref={wrapperRef} className="process-wrapper">
      <div ref={stickyRef} className="process-sticky">
        <div ref={trackRef} className="process-track">

          {/* Panneau intro */}
          <div className="process-intro">
            <h2 className="process-intro__title">
              UNE AGENCE QUI VOUS ACCOMPAGNE{' '}
              <span className="gradient-text">AVANT, PENDANT</span>{' '}
              ET <span className="gradient-text">APRÈS</span>{' '}
              LA CRÉATION DE VOTRE SITE.
            </h2>
          </div>

          {/* Étapes */}
          {steps.map((step, i) => (
            <div key={i} className="process-card">
              <div className="process-card__inner">
                <div className="process-card__top">
                  <span className="process-card__label">{step.label}</span>
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__desc">{step.desc}</p>
                </div>
                <ul className="process-card__list">
                  {step.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

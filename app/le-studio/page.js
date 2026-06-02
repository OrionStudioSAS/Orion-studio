import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import LeStudioAnimations from '@/components/LeStudioAnimations'
import Link from 'next/link'

export const metadata = {
  title: 'Le Studio',
  description: "Julien et Théo, deux passionnés du web, racontent comment et pourquoi ils ont fondé Orion Studio après plusieurs années en agence.",
  alternates: { canonical: '/le-studio' },
  openGraph: {
    title: 'Le Studio — Orion Studio',
    description: "Notre histoire, nos profils, et la raison pour laquelle on a monté Orion Studio.",
    url: '/le-studio',
    type: 'website',
  },
}

const agences = [
  'Le Monde des 5 Fleurs',
  'Colorz',
  "Agen'cy Com",
  'Studio Zerance',
  'Axome',
]

const founders = [
  {
    initials: 'JP',
    name: 'Julien',
    role: 'Chef de projet & Web-designer',
    bio: "Sept ans à piloter des projets en agence, à dessiner des sites, à comprendre les vraies attentes des clients. Mon rôle chez Orion : faire en sorte que ce qui sort de notre studio ait du sens, soit beau, et respecte les délais.",
  },
  {
    initials: 'TM',
    name: 'Théo',
    role: 'Développeur',
    bio: "Cinq ans à coder pour des marques exigeantes en agence. Sur chaque projet : du code propre, performant, et maintenable. Mon rôle chez Orion : tout ce qui touche au technique, du développement à la mise en ligne.",
  },
]

const photos = [
  { src: '/images/banner.webp', alt: "Julien et Théo, cofondateurs d'Orion Studio", className: 'ls-photos__item--main' },
  { src: '/images/Lequipe.jpg', alt: "L'équipe Orion Studio" },
  { src: '/images/Cannes.png', alt: 'Cannes, bureau Sud' },
  { src: '/images/Paris.png', alt: 'Paris, bureau Nord' },
  { src: '/images/Mascotte.png', alt: 'La mascotte du studio' },
]

const offices = [
  {
    city: 'Paris',
    address: '60 Rue François Ier',
    zip: '75008',
    coords: '48.8698° N · 2.3078° E',
  },
  {
    city: 'Cannes',
    address: '6 Rue Merle',
    zip: '06400',
    coords: '43.5516° N · 7.0177° E',
  },
]

export default function LeStudio() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ─── HERO ─── */}
        <section className="ls-hero ls-hero--full">
          <div className="container">
            <div className="ls-hero__inner">
              <span className="section-tag ls-hero__tag">LE STUDIO</span>
              <h1 className="ls-hero__title">
                Deux passionnés du web,{' '}
                <span className="gradient-text">une agence à taille humaine</span>.
              </h1>
              <p className="ls-hero__desc">
                Orion Studio, c&apos;est Julien et Théo. Deux profils complémentaires qui ont passé plusieurs années en agence avant de se lancer ensemble. Cette page existe pour vous expliquer simplement qui nous sommes et pourquoi on a monté ce studio.
              </p>
              <Link href="#contact" className="cta" style={{ alignSelf: 'flex-start' }}>
                <span className="text-cta">Discutons de votre projet</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── NOTRE PARCOURS ─── */}
        <section className="ls-story">
          <div className="container">
            <div className="ls-story__grid">
              <div className="ls-story__left">
                <span className="section-tag">NOTRE PARCOURS</span>
                <h2>
                  Plusieurs années d&apos;agence,{' '}
                  <span className="gradient-text">avant de monter la nôtre.</span>
                </h2>
              </div>
              <div className="ls-story__right">
                <p>
                  Avant Orion Studio, on a chacun fait nos armes dans des agences web et e-commerce reconnues. Des structures différentes, des clients différents, des méthodes différentes. Mais à chaque fois, le même métier&nbsp;: créer des sites qui fonctionnent vraiment pour ceux qui les utilisent.
                </p>
                <p>
                  Nos parcours nous ont fait passer par&nbsp;:
                </p>
                <ul className="ls-story__agencies">
                  {agences.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <p>
                  C&apos;est chez <strong>Axome</strong> qu&apos;on s&apos;est rencontrés. On a vite réalisé qu&apos;on partageait la même vision du métier&nbsp;: faire les choses bien, avec une relation directe et franche avec le client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── POURQUOI ORION ─── */}
        <section className="ls-story">
          <div className="container">
            <div className="ls-story__grid">
              <div className="ls-story__left">
                <span className="section-tag">POURQUOI ORION STUDIO</span>
                <h2>
                  L&apos;envie de faire les choses{' '}
                  <span className="gradient-text">à notre manière.</span>
                </h2>
              </div>
              <div className="ls-story__right">
                <p>
                  À un moment, deux envies se sont rejointes. Celle de tenter l&apos;aventure entrepreneuriale, de construire quelque chose qui nous appartient et de choisir nous-mêmes nos clients et nos projets. Et celle de proposer le service qu&apos;on aurait aimé recevoir quand on était de l&apos;autre côté&nbsp;: des sites livrés rapidement, avec un interlocuteur direct et un vrai suivi.
                </p>
                <p>
                  En agence, on a vu beaucoup de clients payer cher pour des projets qui traînaient, des sites livrés et puis plus de nouvelles, ou des outils impossibles à modifier sans rappeler une équipe. On voulait faire l&apos;inverse. C&apos;est de cette envie qu&apos;est né <strong>Orion Studio</strong>, en 2025.
                </p>
                <p>
                  Nos profils sont complémentaires&nbsp;: Julien sur la partie design et gestion de projet, Théo sur la partie technique. Ensemble, on couvre tout le cycle d&apos;un projet, sans avoir besoin de sous-traiter quoi que ce soit. C&apos;est ce qui nous permet d&apos;aller vite, et de vous parler directement à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── LES PROFILS ─── */}
        <section className="ls-founders">
          <div className="container">
            <div className="ls-founders__header">
              <span className="section-tag">QUI SOMMES-NOUS</span>
              <h2>
                Deux profils,{' '}
                <span className="gradient-text">une équipe.</span>
              </h2>
            </div>
            <div className="ls-founders__grid">
              {founders.map((f) => (
                <div key={f.name} className="ls-founder">
                  <div className="ls-founder__avatar" aria-hidden="true">{f.initials}</div>
                  <div className="ls-founder__body">
                    <div className="ls-founder__head">
                      <h3 className="ls-founder__name">{f.name}</h3>
                      <span className="ls-founder__role">{f.role}</span>
                    </div>
                    <p className="ls-founder__bio">{f.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COLLAGE PHOTOS ─── */}
        <section className="ls-photos">
          <div className="container">
            <div className="ls-photos__header">
              <span className="section-tag">DANS LES COULISSES</span>
              <h2>
                Une équipe,{' '}
                <span className="gradient-text">deux villes, mille moments.</span>
              </h2>
            </div>
            <div className="ls-photos__grid">
              {photos.map((p, i) => (
                <div key={i} className={`ls-photos__item ${p.className || ''}`.trim()}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BUREAUX ─── */}
        <section className="ls-offices">
          <div className="container">
            <div className="ls-offices__grid">

              <div className="ls-offices__left">
                <span className="section-tag">OÙ NOUS TROUVER</span>
                <h2>
                  Une agence française,{' '}
                  <span className="gradient-text">présente sur deux fronts.</span>
                </h2>
                <p>
                  Paris pour la dynamique business, Cannes pour la créativité méditerranéenne. On intervient partout en France et à l&apos;international.
                </p>
              </div>

              <div className="ls-offices__right">
                {offices.map((o, i) => (
                  <div key={i} className="ls-location">
                    <div className="ls-location__head">
                      <span className="ls-location__index">0{i + 1}</span>
                      <span className="ls-location__coords">{o.coords}</span>
                    </div>
                    <h3 className="ls-location__city">{o.city}</h3>
                    <div className="ls-location__address">
                      <span>{o.address}</span>
                      <span>{o.zip} {o.city}, France</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <Contact />

      </main>
      <Footer />
      <ScrollObserver />
      <LeStudioAnimations />
    </>
  )
}

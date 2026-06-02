import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import HomepageAnimations from '@/components/HomepageAnimations'
import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = {
  title: 'Nos Réalisations',
  description: 'Découvrez nos réalisations sur-mesure et Shopify : sites internet, boutiques e-commerce et applications SaaS pour des marques ambitieuses.',
  alternates: { canonical: '/realisations' },
  openGraph: {
    title: 'Nos Réalisations — Orion Studio',
    description: 'Portfolio : sites sur-mesure, boutiques Shopify et applications SaaS.',
    url: '/realisations',
    type: 'website',
  },
}

export default function ProjetsPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <section className="pg-hero">
          <div className="container">
            <span className="section-tag">NOS RÉALISATIONS</span>
            <h1 className="pg-hero__title">
              Des réalisations qui <span className="gradient-text">parlent d&apos;elles-mêmes.</span>
            </h1>
            <p className="pg-hero__desc">
              Chaque projet est le fruit d&apos;une collaboration étroite avec nos clients. Voici une sélection de nos réalisations récentes : sites sur-mesure, boutiques Shopify et applications SaaS.
            </p>
          </div>
        </section>
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
      <HomepageAnimations />
    </>
  )
}

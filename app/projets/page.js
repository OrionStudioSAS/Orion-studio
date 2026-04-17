import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ScrollObserver from '@/components/ScrollObserver'
import HomepageAnimations from '@/components/HomepageAnimations'
import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = {
  title: 'Nos Projets — Orion Studio',
  description: 'Découvrez nos réalisations Webflow et Shopify : sites vitrines, boutiques e-commerce et automatisations pour des marques ambitieuses.',
}

export default function ProjetsPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <section className="pg-hero">
          <div className="container">
            <span className="section-tag">NOS PROJETS</span>
            <h1 className="pg-hero__title">
              Des réalisations qui <span className="gradient-text">parlent d&apos;elles-mêmes.</span>
            </h1>
            <p className="pg-hero__desc">
              Chaque projet est le fruit d&apos;une collaboration étroite avec nos clients. Voici une sélection de nos réalisations récentes sur Webflow, Shopify et Make.
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

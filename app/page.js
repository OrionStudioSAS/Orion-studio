import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Studio from '@/components/Studio'
import Expertises from '@/components/Expertises'
import Projects from '@/components/Projects'
import BlogPreview from '@/components/BlogPreview'
import OrionAdminSection from '@/components/OrionAdminSection'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'
import HomepageAnimations from '@/components/HomepageAnimations'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Studio />
        <Expertises />
        <Projects />
        <OrionAdminSection />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
      <HomepageAnimations />
    </>
  )
}

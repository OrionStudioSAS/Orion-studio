import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Studio from '@/components/Studio'
import Expertises from '@/components/Expertises'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Process from '@/components/Process'
import BlogPreview from '@/components/BlogPreview'
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
        <Stack />
        <Process />
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

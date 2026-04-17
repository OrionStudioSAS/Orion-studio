'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const [phase, setPhase] = useState('hidden') // hidden | covering | covered | revealing
  const isTransitioningRef = useRef(false)
  const lastPathnameRef = useRef(pathname)

  // 1. Intercepter les clics sur les liens internes
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      if (
        href.startsWith('#') ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) return

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (link.target === '_blank') return

      const url = new URL(href, window.location.origin)
      if (url.pathname === pathname) return

      // Capture phase + stop propagation pour empêcher Next.js Link de naviguer immédiatement
      e.preventDefault()
      e.stopPropagation()
      isTransitioningRef.current = true
      setPhase('covering')

      // Après l'anim "cover" (500ms), on navigue
      setTimeout(() => {
        router.push(href)
        setPhase('covered')
      }, 500)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname, router])

  // 2. Quand le pathname change ET qu'on est en transition → reveal
  //    On utilise une ref pour éviter toute race condition avec le state phase
  useEffect(() => {
    if (pathname === lastPathnameRef.current) return
    lastPathnameRef.current = pathname

    if (!isTransitioningRef.current) return
    isTransitioningRef.current = false

    // double rAF pour s'assurer que le nouveau DOM est peint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        setPhase('revealing')
        setTimeout(() => setPhase('hidden'), 650)
      })
    })
  }, [pathname])

  return (
    <>
      <div
        className={`page-overlay${phase !== 'hidden' ? ` page-overlay--${phase}` : ''}`}
        aria-hidden="true"
      />
      {children}
    </>
  )
}

'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const wrapperRef = useRef(null)
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const dot = dotRef.current
    const circle = circleRef.current
    if (!wrapper || !dot || !circle) return

    let mouseX = 0, mouseY = 0
    let circleX = 0, circleY = 0
    let rafId = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (wrapper.style.display !== 'block') {
        wrapper.style.display = 'block'
        circleX = mouseX
        circleY = mouseY
      }

      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    function animateCircle() {
      circleX += (mouseX - circleX) * 0.12
      circleY += (mouseY - circleY) * 0.12
      circle.style.left = circleX + 'px'
      circle.style.top = circleY + 'px'
      rafId = requestAnimationFrame(animateCircle)
    }
    animateCircle()

    const hoverSelector = 'a, button, .faq-item__question, .checkbox-label, .stack-item, .project-card, .service-card, .nav__link, .nav__dropdown-wrapper'

    const handleMouseOver = (e) => {
      if (e.target.closest(hoverSelector)) {
        document.body.classList.add('cursor--hover')
      }
    }
    const handleMouseOut = (e) => {
      if (e.target.closest(hoverSelector)) {
        document.body.classList.remove('cursor--hover')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="cursor-wrapper" ref={wrapperRef}>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-circle" ref={circleRef}>
        <div className="planet-turn-container _1"><div className="planet-dot_1"></div></div>
        <div className="planet-turn-container _2"><div className="planet-dot_2"></div></div>
        <div className="planet-turn-container _3"><div className="planet-dot_3"></div></div>
      </div>
    </div>
  )
}

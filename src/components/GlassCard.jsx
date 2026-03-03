import { useRef, useCallback } from 'react'

export default function GlassCard({
  children,
  className = '',
  tilt = false,
  glowColor = 'cyan',
  onClick,
}) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback(
    (e) => {
      if (!tilt) return
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    },
    [tilt]
  )

  const handleMouseLeave = useCallback(() => {
    if (!tilt) return
    const card = cardRef.current
    if (!card) return
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [tilt])

  const glowStyles = {
    cyan: 'hover:border-[rgba(0,242,255,0.35)] hover:shadow-[0_0_25px_rgba(0,242,255,0.15),0_0_50px_rgba(0,242,255,0.05)]',
    purple:
      'hover:border-[rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.15),0_0_50px_rgba(139,92,246,0.05)]',
  }

  return (
    <div
      ref={cardRef}
      className={`glass rounded-2xl transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
      style={{ willChange: tilt ? 'transform' : 'auto' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

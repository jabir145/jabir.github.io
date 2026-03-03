import { useEffect, useRef } from 'react'

const NODE_COUNT = 80
const CONNECTION_DIST = 150
const MOUSE_RADIUS = 200
const MOUSE_FORCE = 0.03

export default function NeuralCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.5 ? '0,242,255' : '139,92,246',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current

      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed

        // Mouse attraction
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
          node.vx += dx * force * 0.01
          node.vy += dy * force * 0.01
        }

        // Damping
        node.vx *= 0.995
        node.vy *= 0.995

        node.x += node.vx
        node.y += node.vy

        // Wrap around edges
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        // Draw node
        const alpha = 0.3 + Math.sin(node.pulse) * 0.2
        const r = node.radius + Math.sin(node.pulse) * 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${node.color},${alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.25
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            gradient.addColorStop(0, `rgba(${a.color},${alpha})`)
            gradient.addColorStop(1, `rgba(${b.color},${alpha})`)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
    />
  )
}

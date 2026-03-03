import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'

const ROLES = [
  'Sr. Backend Developer',
  'Laravel Ecosystem Expert',
  'AI Prompt Engineer',
  'Autonomous Workflow Architect',
  'API Systems Designer',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ zIndex: 1 }}
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,242,255,0.05) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-mono text-neon-cyan border border-[rgba(0,242,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Available for Opportunities · Dubai, UAE
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-4"
        >
          <span className="text-white">Muhammed </span>
          <span className="text-gradient-cyan">Jabir</span>
        </motion.h1>

        {/* Role typewriter */}
        <motion.div
          variants={itemVariants}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-xl sm:text-2xl text-neon-cyan">
            {role}
            <span className="inline-block w-0.5 h-6 bg-neon-cyan ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10"
        >
          Crafting high-performance backend systems in the{' '}
          <span className="text-neon-cyan font-medium">Laravel ecosystem</span>, designing{' '}
          <span className="text-neon-purple font-medium">AI-powered autonomous workflows</span>, and
          architecting scalable APIs for enterprise-grade products across the{' '}
          <span className="text-white font-medium">UAE & MENA region</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-space-bg overflow-hidden transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #00F2FF, #8B5CF6)' }}
          >
            <span className="relative z-10">View Work</span>
            <ArrowDown size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #00F2FF)' }} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-neon-cyan glass border border-[rgba(0,242,255,0.25)] hover:border-[rgba(0,242,255,0.5)] hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] transition-all duration-300"
          >
            <Mail size={16} />
            Direct Uplink
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-10 border-t border-[rgba(255,255,255,0.06)]"
        >
          {[
            { label: 'Years Experience', value: '6+' },
            { label: 'Projects Delivered', value: '20+' },
            { label: 'Enterprise Systems', value: '5' },
            { label: 'Location', value: 'Dubai 🇦🇪' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-gradient-cyan">{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} className="text-gray-600" />
      </motion.div>
    </section>
  )
}

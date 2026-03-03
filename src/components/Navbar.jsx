import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
          scrolled ? 'glass border-b border-[rgba(255,255,255,0.06)]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono font-bold text-lg tracking-tight"
          >
            <span className="text-neon-cyan">{'<'}</span>
            <span className="text-white">MJ</span>
            <span className="text-neon-cyan">{' />'}</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold text-space-bg transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #00F2FF, #8B5CF6)' }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg glass text-gray-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-4 right-4 z-40 glass rounded-2xl p-4 border border-[rgba(255,255,255,0.08)] sm:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-space-bg text-center"
                style={{ background: 'linear-gradient(135deg, #00F2FF, #8B5CF6)' }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

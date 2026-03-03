import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, Car, CheckCircle, Phone } from 'lucide-react'
import GlassCard from './GlassCard'
import { contactInfo } from '../data/content'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">
            // Direct Uplink
          </span>
          {/* Glitch heading */}
          <h2 className="text-4xl sm:text-5xl font-black mt-3 relative inline-block">
            <span className="glitch-wrapper text-white" data-text="Let's Connect">
              Let&apos;s Connect
            </span>
            <span className="text-gradient-cyan ml-3">.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Got a project, an opportunity, or just want to talk tech? Transmit a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info panel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <motion.div variants={itemVariants}>
              <GlassCard glowColor="purple" className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <div className="font-bold text-white">{contactInfo.name}</div>
                    <div className="font-mono text-xs text-neon-purple">{contactInfo.role}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,242,255,0.15)] transition-colors">
                      <Mail size={14} className="text-neon-cyan" />
                    </div>
                    {contactInfo.email}
                  </a>

                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,242,255,0.15)] transition-colors">
                      <Phone size={14} className="text-neon-cyan" />
                    </div>
                    {contactInfo.mobile}
                  </a>

                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,242,255,0.15)] transition-colors">
                      <Linkedin size={14} className="text-neon-cyan" />
                    </div>
                    LinkedIn Profile
                  </a>

                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.08)] flex items-center justify-center group-hover:bg-[rgba(0,242,255,0.15)] transition-colors">
                      <Github size={14} className="text-neon-cyan" />
                    </div>
                    GitHub Profile
                  </a>

                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.08)] flex items-center justify-center">
                      <MapPin size={14} className="text-neon-cyan" />
                    </div>
                    {contactInfo.location}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <GlassCard className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,242,255,0.1)] flex items-center justify-center text-sm">
                  🟢
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{contactInfo.availability}</div>
                  <div className="text-gray-500 text-xs font-mono">Status · Dubai, UAE</div>
                </div>
              </GlassCard>

              <GlassCard className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(139,92,246,0.1)] flex items-center justify-center">
                  <Car size={14} className="text-neon-purple" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{contactInfo.license}</div>
                  <div className="text-gray-500 text-xs font-mono">Credential · Valid</div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <GlassCard glowColor="cyan" className="p-6 sm:p-8 h-full">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,242,255,0.1)] flex items-center justify-center">
                    <CheckCircle className="text-neon-cyan" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Your email client should have opened. I&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[rgba(0,242,255,0.4)] focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300 border border-[rgba(255,255,255,0.06)]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[rgba(0,242,255,0.4)] focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300 border border-[rgba(255,255,255,0.06)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[rgba(0,242,255,0.4)] focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all duration-300 resize-none border border-[rgba(255,255,255,0.06)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-space-bg transition-all duration-300 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #00F2FF, #8B5CF6)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-space-bg/40 border-t-space-bg rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Transmit Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

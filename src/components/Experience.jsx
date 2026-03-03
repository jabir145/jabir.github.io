import { motion } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import GlassCard from './GlassCard'
import { experiences } from '../data/content'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">
            // Mission Log
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Six years of building enterprise systems, APIs, and intelligent workflows across Dubai and India.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-[2px] timeline-line rounded-full hidden sm:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {experiences.map((exp, idx) => (
              <motion.div key={exp.company} variants={cardVariants} className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-2 border-2"
                    style={{
                      background:
                        exp.color === 'cyan'
                          ? 'rgba(0,242,255,0.1)'
                          : 'rgba(139,92,246,0.1)',
                      borderColor:
                        exp.color === 'cyan'
                          ? 'rgba(0,242,255,0.4)'
                          : 'rgba(139,92,246,0.4)',
                    }}
                  >
                    <span className="font-mono font-bold text-sm"
                      style={{ color: exp.color === 'cyan' ? '#00F2FF' : '#8B5CF6' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <GlassCard glowColor={exp.color} className="flex-1 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase mb-1 block"
                        style={{ color: exp.color === 'cyan' ? '#00F2FF' : '#8B5CF6' }}
                      >
                        {exp.role}
                      </span>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col gap-1 sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm sm:justify-end">
                        <Calendar size={13} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:justify-end">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <motion.ul
                    variants={{ show: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
                    className="space-y-2.5 mb-5"
                  >
                    {exp.highlights.map((hl, i) => (
                      <motion.li
                        key={i}
                        variants={bulletVariants}
                        transition={{ duration: 0.4 }}
                        className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: exp.color === 'cyan' ? '#00F2FF' : '#8B5CF6' }}
                        />
                        {hl}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`tag-pill ${exp.color === 'purple' ? 'tag-pill-purple' : ''}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

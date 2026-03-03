import { motion } from 'framer-motion'
import { ExternalLink, Zap } from 'lucide-react'
import GlassCard from './GlassCard'
import { projects } from '../data/content'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }) {
  const isHighlight = project.highlight
  const colorCyan = project.color === 'cyan'

  return (
    <GlassCard
      tilt={isHighlight}
      glowColor={project.color}
      className={`p-6 h-full flex flex-col group cursor-default ${
        isHighlight
          ? colorCyan
            ? 'border border-[rgba(0,242,255,0.2)]'
            : 'border border-[rgba(139,92,246,0.2)]'
          : ''
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: colorCyan
                ? 'rgba(0,242,255,0.1)'
                : 'rgba(139,92,246,0.1)',
            }}
          >
            {project.icon}
          </div>
          <div>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: colorCyan ? '#00F2FF' : '#8B5CF6' }}
            >
              {project.category}
            </span>
            <h3 className="font-bold text-white text-lg leading-tight">{project.title}</h3>
          </div>
        </div>

        {isHighlight && (
          <span
            className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full flex-shrink-0"
            style={{
              background: colorCyan ? 'rgba(0,242,255,0.1)' : 'rgba(139,92,246,0.1)',
              color: colorCyan ? '#00F2FF' : '#8B5CF6',
              border: `1px solid ${colorCyan ? 'rgba(0,242,255,0.3)' : 'rgba(139,92,246,0.3)'}`,
            }}
          >
            <Zap size={10} />
            Featured
          </span>
        )}
      </div>

      {/* Tagline */}
      <p
        className="text-sm font-medium mb-2"
        style={{ color: colorCyan ? '#00F2FF' : '#8B5CF6' }}
      >
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`tag-pill ${project.color === 'purple' ? 'tag-pill-purple' : ''}`}
          >
            {t}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.highlight)
  const rest = projects.filter((p) => !p.highlight)

  return (
    <section id="projects" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">
            // Project Archive
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Selected <span className="text-gradient-cyan">Work</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Enterprise platforms, AI-powered tools, and scalable systems built for real-world impact.
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"
        >
          {featured.map((project) => (
            <motion.div key={project.title} variants={cardVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {rest.map((project) => (
            <motion.div key={project.title} variants={cardVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

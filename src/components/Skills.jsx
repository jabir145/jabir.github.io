import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { skills } from '../data/content'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const SkillIcon = ({ icon, color }) => {
  const colorClass = color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'

  const icons = {
    laravel: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${colorClass}`}>
        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027.29.29 0 01-.068.009.316.316 0 01-.069-.009.255.255 0 01-.066-.027L.534 18.755a.378.378 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05a.378.378 0 01.378 0L9.91 2.881h.002c.015.01.027.022.041.033l.038.027c.013.014.02.03.033.045.01.013.02.022.027.034a.487.487 0 01.022.058c.004.012.012.02.015.033.01.032.014.065.014.098v9.652l3.76-2.164V5.527c0-.033.005-.066.014-.098l.015-.033a.386.386 0 01.021-.058c.008-.012.018-.021.028-.034.012-.015.02-.031.033-.045l.038-.027c.014-.011.026-.023.041-.032h.001l4.489-2.833a.378.378 0 01.378 0l4.489 2.833c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.01.012.02.021.028.033a.317.317 0 01.021.058c.003.013.012.021.016.033zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164zm-4.512 7.75v-4.286l-2.145 1.225-6.126 3.498v4.325l8.271-4.762zM.755 3.262v15.194l8.271 4.762v-4.325l-4.32-2.445-.002-.003-.003-.002c-.014-.009-.025-.021-.04-.031l-.037-.028c-.013-.013-.02-.029-.033-.044-.009-.012-.019-.021-.026-.033a.511.511 0 01-.022-.057c-.004-.013-.012-.021-.014-.033a.381.381 0 01-.014-.098V5.426L2.335 4.17.755 3.262zm4.489-2.206L1.5 3.448l3.744 2.157 3.745-2.157L5.244 1.056zm1.378 15.808l2.182-1.256V6.179l-1.578.908L4.867 8.343v9.652l1.755-1.131zM9.533 3.448L5.789 5.605l3.744 2.157 3.745-2.157L9.533 3.448zm-.189 10.962l-3.76-2.164V8.343l1.578.908 2.182 1.256v3.903zm14.272-9.67l-3.744 2.157 3.744 2.164 3.745-2.164-3.745-2.157zm-4.512 6.873l2.182-1.256 1.578-.908v4.283l-2.182 1.256-1.578.908V11.613zm-9.33 7.937l5.566-3.178 2.779-1.588 3.744 2.157-8.271 4.775-3.818-2.166z" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-8 h-8 ${colorClass}`}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9" />
        <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
      </svg>
    ),
    js: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${colorClass}`}>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${colorClass}`}>
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.634-2.sought l-2.48-2.48v6.522a1.837 1.837 0 11-1.51-.019V9.156a1.837 1.837 0 01-.994-2.406L8.038 4.105 .45 11.69a1.55 1.55 0 000 2.187l10.484 10.482a1.55 1.55 0 002.187 0l10.428-10.428a1.55 1.55 0 000-2.001z" />
      </svg>
    ),
    agile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-8 h-8 ${colorClass}`}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-8 h-8 ${colorClass}`}>
        <path d="M12 2a2 2 0 012 2M12 2a2 2 0 00-2 2M12 2v2m0 16v2m0-2a2 2 0 002 2m-2-2a2 2 0 01-2 2M2 12a2 2 0 012-2M2 12a2 2 0 002 2M2 12H4m16 0h-2m0 0a2 2 0 002-2m-2 2a2 2 0 01-2 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-8 h-8 ${colorClass}`}>
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${colorClass}`}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.084-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
      </svg>
    ),
  }

  return icons[icon] || (
    <div className={`w-8 h-8 rounded-lg ${color === 'cyan' ? 'bg-neon-cyan/20' : 'bg-neon-purple/20'} flex items-center justify-center`}>
      <span className={`font-mono font-bold text-sm ${colorClass}`}>{icon.slice(0, 2).toUpperCase()}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">
            // Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3">
            Arsenal &amp;{' '}
            <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies I leverage daily to build robust, scalable systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <GlassCard
                glowColor={skill.color}
                className="p-5 h-full cursor-default group"
              >
                <div className="flex flex-col gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background:
                        skill.color === 'cyan'
                          ? 'rgba(0,242,255,0.08)'
                          : 'rgba(139,92,246,0.08)',
                    }}
                  >
                    <SkillIcon icon={skill.icon} color={skill.color} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white text-sm leading-tight">
                      {skill.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency bar */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-gray-600">Proficiency</span>
                      <span
                        className={`font-mono text-xs ${skill.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            skill.color === 'cyan'
                              ? 'linear-gradient(90deg, #00F2FF, #8B5CF6)'
                              : 'linear-gradient(90deg, #8B5CF6, #00F2FF)',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

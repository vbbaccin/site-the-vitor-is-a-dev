import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  technologies: string[]
  color: string
}

const timelineData: TimelineItem[] = [
  {
    year: '2018-2020',
    title: 'Fundação em Bancos de Dados',
    description:
      'Início da jornada com MySQL e SQL Server, construindo bases sólidas em design de databases e otimização de queries.',
    technologies: ['MySQL', 'SQL Server', 'LINQ'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2020-2023',
    title: 'Especialização em Back-end',
    description:
      'Domínio completo de C# e ASP.NET Core, desenvolvendo APIs robustas e arquitetura escalável para aplicações empresariais.',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'RESTful APIs'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2023-2024',
    title: 'Evolução para Full-Stack',
    description:
      'Expansão para frontend moderno com React e TypeScript, criando interfaces responsivas que complementam backends robustos.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2024-2025',
    title: 'IA & Automação Inteligente',
    description:
      'Integração de modelos de IA (Gemini, Claude) e automação com n8n, criando soluções inovadoras que impactam negócios.',
    technologies: ['Gemini Pro', 'Claude API', 'n8n', 'Automação'],
    color: 'from-yellow-500 to-orange-500',
  },
]

export function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Jornada de Evolução Técnica</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma trajetória de crescimento constante, desde bancos de dados até IA e automação
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Linha central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-green via-neon-emerald to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Left/Right Content */}
                <div className="flex-1 md:w-1/2 md:text-right">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-6 hover:border-neon-green/30 transition-colors"
                  >
                    {/* Ano */}
                    <div className="text-sm font-mono text-neon-green mb-2">{item.year}</div>

                    {/* Título */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>

                    {/* Descrição */}
                    <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-clip-text text-transparent border border-current/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="flex-shrink-0 w-8 h-8 relative flex items-center justify-center hidden md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur opacity-60`}
                  />
                  <div className="relative w-6 h-6 rounded-full bg-dark-900 border-2 border-neon-green flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-neon-green" />
                  </div>
                </div>

                {/* Mobile Dot */}
                <div className="flex-shrink-0 w-8 h-8 relative flex items-center justify-center md:hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur opacity-60`} />
                  <div className="relative w-6 h-6 rounded-full bg-dark-900 border-2 border-neon-green flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-neon-green" />
                  </div>
                </div>

                {/* Right/Left Content (hidden on mobile, visible on desktop) */}
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-neon-green/10 to-neon-emerald/10 border border-neon-green/20 text-center"
        >
          <p className="text-gray-300 mb-4">
            Essa é a minha história de evolução. Estou sempre buscando aprender e explorar novas tecnologias.
          </p>
          <p className="text-neon-green font-semibold">
            Vamos criar algo extraordinário juntos? 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}

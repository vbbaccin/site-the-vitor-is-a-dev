import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedElement } from './AnimatedElement'

interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Módulo de Automação de Gatilhos',
    description:
      'Arquitetura Full-Stack completa desenvolvida em React/TypeScript com ASP.NET Core 8, criando um sistema robusto para rastrear alterações de usuários e disparar eventos sistêmicos em tempo real.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core 8', 'C#', 'SQL Server'],
    highlights: [
      'Sistema de eventos em tempo real',
      'Rastreamento de alterações de usuários',
      'API RESTful escalável',
      'Interface reativa e responsiva',
    ],
  },
  {
    title: 'Workflows Inteligentes com n8n',
    description:
      'Criação de pipelines automatizados altamente customizados integrando Telegram e modelos de IA para processamento avançado de texto e conversão automática para áudio.',
    technologies: ['n8n', 'Telegram API', 'Python', 'Claude API', 'Audio Processing'],
    highlights: [
      'Automação de fluxos complexos',
      'Integração com Telegram',
      'Processamento de IA',
      'Conversão de texto para áudio',
    ],
  },
  {
    title: 'Geração de Mídia Automatizada',
    description:
      'Desenvolvimento de fluxos inteligentes utilizando Gemini Pro API e Claude para geração e orquestração de vídeos complexos baseados em prompts, criando conteúdo de alta qualidade automaticamente.',
    technologies: ['Gemini Pro', 'Claude API', 'Video Generation', 'Node.js', 'n8n'],
    highlights: [
      'Geração automática de vídeos',
      'Processamento de prompts complexos',
      'Orquestração de APIs',
      'Pipeline de mídia escalável',
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Projetos Significativos
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Soluções reais que demonstram expertise em arquitetura, automação e inovação tecnológica
          </p>
        </AnimatedElement>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group relative h-full bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur border border-dark-700 rounded-2xl p-8 overflow-hidden cursor-pointer"
            >
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-emerald/5 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-white"
                  whileHover={{ color: '#10b981' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-neon-green mb-3 uppercase tracking-wider">
                    Destaques
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2 mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-dark-700/50 border border-dark-600 text-gray-300"
                        whileHover={{
                          borderColor: '#10b981',
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-dark-700/50">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-neon-green transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Código
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-neon-green transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Visualizar
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


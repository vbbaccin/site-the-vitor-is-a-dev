import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { Code2 } from 'lucide-react'

const jsonContent = `{
  "nome": "Vitor Baccin",
  "role": "Full-Stack Developer & Arquiteto de Sistemas",
  "expertise": {
    "backend": ["C#", "ASP.NET Core 8", "Entity Framework"],
    "frontend": ["React", "TypeScript", "Tailwind CSS"],
    "databases": ["MySQL", "SQL Server"],
    "ai_automation": ["Gemini Pro", "Claude API", "n8n"]
  },
  "paixao": "Transformar ideias complexas em soluções escaláveis",
  "foco": "Arquitetura robusta, performance e IA/Automação"
}`

export function TerminalAboutSection() {
  const { displayText, isComplete } = useTypewriter({
    text: jsonContent,
    speed: 15,
    delay: 300,
  })

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Sobre Mim</h2>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções que impactam negócios
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-800/80 border border-dark-700/50 rounded-xl overflow-hidden shadow-2xl backdrop-blur"
        >
          {/* Terminal Header */}
          <div className="bg-dark-900 border-b border-dark-700/50 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon-green/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-gray-400 font-mono">about-me.json</span>
            </div>
            <Code2 size={18} className="text-neon-green/60" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            <div className="space-y-1 min-h-64">
              {displayText.split('\n').map((line, index) => (
                <div key={index} className="text-gray-300 whitespace-pre">
                  {/* Syntax highlighting simples */}
                  {line.split('').map((char, charIndex) => {
                    let color = 'text-gray-300'

                    // Chaves e colchetes
                    if (char === '{' || char === '}' || char === '[' || char === ']')
                      color = 'text-neon-green'
                    // Números
                    else if (/\d/.test(char)) color = 'text-orange-400'
                    // Strings
                    else if (char === '"') color = 'text-blue-400'
                    // Booleanos
                    else if (line.includes('true') || line.includes('false'))
                      color = 'text-purple-400'
                    // Valores
                    else if (
                      line.includes(':') &&
                      charIndex > line.indexOf(':') &&
                      char !== ':' &&
                      !char.match(/[\s,}]/)
                    )
                      color = 'text-blue-400'

                    return (
                      <span key={charIndex} className={color}>
                        {char}
                      </span>
                    )
                  })}
                </div>
              ))}

              {/* Cursor piscante */}
              {!isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-neon-green"
                >
                  █
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 space-y-4"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Sou um desenvolvedor Full-Stack apaixonado por arquitetura de sistemas robustos e escaláveis.
            Com mais de 5 anos de experiência, especializei-me em transformar ideias complexas em soluções
            elegantes e performáticas que geram impacto real nos negócios.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Trabalho com tecnologias modernas como React, TypeScript, C# e ASP.NET Core, sempre focando em
            qualidade, performance e boas práticas. Minha paixão atual é explorar as possibilidades ilimitadas
            da inteligência artificial e automação, integrando APIs de IA e ferramentas como n8n em aplicações
            empresariais.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '5+', label: 'Anos de Experiência' },
            { value: '20+', label: 'Projetos Completados' },
            { value: '100%', label: 'Satisfação de Clientes' },
            { value: '10+', label: 'Tecnologias Dominadas' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 rounded-lg bg-dark-800/50 border border-dark-700/50 text-center hover:border-neon-green/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-neon-green mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

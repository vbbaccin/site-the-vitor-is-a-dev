import { AnimatedElement } from './AnimatedElement'

interface Skill {
  category: string
  items: string[]
  color: string
}

const skills: Skill[] = [
  {
    category: 'Front-end',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Back-end',
    items: ['C#', 'ASP.NET Core 8', '.NET Framework', 'RESTful APIs'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: 'Banco de Dados',
    items: ['MySQL', 'SQL Server', 'Entity Framework', 'LINQ'],
    color: 'from-green-600 to-green-500',
  },
  {
    category: 'Arquitetura & IA',
    items: ['n8n Automations', 'Claude API', 'Telegram API', 'Gemini Pro'],
    color: 'from-lime-500 to-green-500',
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes cardHover {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        .skill-card {
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          animation: cardHover 0.3s ease forwards;
          border-color: rgb(16, 185, 129);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <AnimatedElement>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Stack Técnico & Especialidades
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Tecnologias e competências que utilizo para criar soluções de alta qualidade e impacto real
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <AnimatedElement
              key={skill.category}
              delay={index * 0.15}
              animation="scale-in"
            >
              <div
                className="skill-card group relative bg-dark-800/50 backdrop-blur border border-dark-700 rounded-xl p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-neon-green transition-colors">
                  {skill.category}
                </h3>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}


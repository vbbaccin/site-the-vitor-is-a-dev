import { Code2, Zap, Target } from 'lucide-react'
import { AnimatedElement } from './AnimatedElement'

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Especialista em desenvolvimento completo, criando soluções escaláveis do frontend ao backend',
    },
    {
      icon: Zap,
      title: 'Arquitetura & Performance',
      description: 'Foco em design de sistemas robustos e otimizados para máxima eficiência',
    },
    {
      icon: Target,
      title: 'Inovação com IA',
      description: 'Integrando modelos de IA e automação inteligente em aplicações modernas',
    },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Sobre Mim</h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções inovadoras que impactam negócios
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedElement animation="slide-in-left">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Sou um desenvolvedor Full-Stack com experiência em arquitetura de sistemas robustos e escaláveis. Especializado em transformar ideias complexas em soluções elegantes e performáticas.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Trabalho com tecnologias modernas como React, TypeScript, ASP.NET Core e integro soluções inteligentes com IA, sempre focando em qualidade, performance e boas práticas de desenvolvimento.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Minha paixão é criar interfaces responsivas e intuitivas combinadas com backends poderosos, além de explorar novas possibilidades com automação e inteligência artificial.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-right">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-neon-green/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="text-neon-green flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-white mb-2">{highlight.title}</h3>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedElement>
        </div>

        {/* Stats */}
        <AnimatedElement animation="fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '5+', label: 'Anos de Experiência' },
              { value: '20+', label: 'Projetos Completados' },
              { value: '100%', label: 'Satisfação de Clientes' },
              { value: '10+', label: 'Tecnologias Dominadas' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg bg-dark-800/50 border border-dark-700/50 text-center hover:border-neon-green/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-neon-green mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

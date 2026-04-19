import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { AnimatedElement } from './AnimatedElement'
import { Button } from './ui/button'

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  const email = 'vbbacin@gmail.com'

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-dark-700/50"
    >
      <style>{`
        @keyframes socialHover {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        .social-link {
          transition: all 0.3s ease;
        }

        .social-link:hover {
          animation: socialHover 0.3s ease forwards;
          border-color: rgb(16, 185, 129);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
        }

        .social-link:hover svg {
          color: rgb(16, 185, 129);
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateX(5px);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Contact CTA */}
        <AnimatedElement animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Vamos Colaborar?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Estou sempre aberto a novas oportunidades em desenvolvimento Full-Stack,
              arquitetura de sistemas e automação inteligente.
            </p>

            <div className="cta-button inline-block">
              <a href={`mailto:${email}`}>
                <Button
                  size="lg"
                  className="bg-neon-green hover:bg-neon-green/80 text-dark-950 font-semibold gap-2 glow-green"
                >
                  Iniciar Conversa
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </AnimatedElement>

        {/* Social Links */}
        <AnimatedElement delay={0.2} animation="fade-in-up">
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="https://github.com/vbbaccin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:bg-dark-700 transition-all"
            >
              <Github className="w-5 h-5 text-gray-400 transition-colors duration-300" />
              <span className="text-sm text-gray-400">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/vitorbidinotto"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:bg-dark-700 transition-all"
            >
              <Linkedin className="w-5 h-5 text-gray-400 transition-colors duration-300" />
              <span className="text-sm text-gray-400">LinkedIn</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="social-link flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:bg-dark-700 transition-all"
            >
              <Mail className="w-5 h-5 text-gray-400 transition-colors duration-300" />
              <span className="text-sm text-gray-400">Email</span>
            </a>
          </div>
        </AnimatedElement>

        {/* Footer */}
        <AnimatedElement delay={0.4} animation="fade-in-up">
          <div className="border-t border-dark-700/50 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {currentYear} Vitor Bidinotto Baccin. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-4 sm:mt-0">
                Desenvolvido com React, TypeScript e Tailwind CSS
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}


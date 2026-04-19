import { Download, ExternalLink } from 'lucide-react'
import { AnimatedElement } from './AnimatedElement'
import { Button } from './ui/button'

export function CVSection() {
  const handleDownloadCV = () => {
    // Cria um link de download do CV
    const link = document.createElement('a')
    link.href = '/cv-vitor-bidinotto.pdf' // Substitua pelo caminho real do CV
    link.download = 'CV - Vitor Bidinotto Baccin.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement animation="fade-in-up">
          <div className="bg-gradient-to-r from-neon-green/10 to-neon-emerald/10 border border-neon-green/20 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pronto Para Colaborar?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Tenho meu CV preparado e estou sempre buscando novas oportunidades desafiadoras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-neon-green hover:bg-neon-green/80 text-dark-950 font-semibold gap-2 glow-green"
              >
                <Download size={18} />
                Download CV
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                size="lg"
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green/10 gap-2"
              >
                <ExternalLink size={18} />
                Conecte-se Comigo
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

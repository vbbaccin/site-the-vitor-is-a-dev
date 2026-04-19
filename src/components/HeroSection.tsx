import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { GradientBG } from './GradientBG'
import { MagneticButton } from './ui/magnetic-button'
import { ContactFormDialog } from './ContactFormDialog'

export function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const scrollToProjects = () => {
    const element = document.getElementById('experience')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <GradientBG />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-green to-neon-emerald bg-clip-text text-transparent">
            Full-Stack Developer & Arquiteto de Sistemas
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformo ideias complexas em soluções escaláveis. Especializado em arquitetura robusta, integrações com IA e interfaces modernas que entregam resultado.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <MagneticButton
            onClick={scrollToProjects}
            size="lg"
            className="bg-neon-green hover:bg-neon-green/80 text-dark-950 font-semibold px-8 py-6 text-lg glow-green"
          >
            Explorar Meu Trabalho
          </MagneticButton>
          <MagneticButton
            onClick={() => setIsContactOpen(true)}
            size="lg"
            variant="outline"
            className="border-neon-green text-neon-green hover:bg-neon-green/10 px-8 py-6 text-lg"
          >
            Entrar em Contato
          </MagneticButton>
        </motion.div>

        {/* Contact Dialog */}
        <ContactFormDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

        {/* Scroll indicator com animação */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-20"
        >
          <ChevronDown className="mx-auto text-neon-green/60 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}


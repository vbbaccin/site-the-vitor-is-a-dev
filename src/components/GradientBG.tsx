import { motion } from 'framer-motion'

export function GradientBG() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradiente base verde com movimento */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(52, 211, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(52, 211, 153, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(52, 211, 153, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Orbs flutuantes com movimento aprimorado */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-green/10 to-neon-emerald/10 blur-3xl"
        style={{
          top: '-10%',
          left: '-5%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-emerald/10 to-neon-green/10 blur-3xl"
        style={{
          bottom: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Partículas flutuantes adicionais */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon-green/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}


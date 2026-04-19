import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in' | 'bounce-in'
  className?: string
  duration?: number
  stagger?: boolean
}

const animationVariants = {
  'fade-in-up': {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  'slide-in-left': {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  'slide-in-right': {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  'scale-in': {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  'bounce-in': {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: 'spring', damping: 10, stiffness: 100 },
  },
}

export function AnimatedElement({
  children,
  delay = 0,
  animation = 'fade-in-up',
  className = '',
  duration = 0.8,
  stagger = false,
}: AnimatedElementProps) {
  const variant = animationVariants[animation]
  const transitionConfig = animation === 'bounce-in' 
    ? { type: 'spring' as const, damping: 10, stiffness: 100 }
    : { duration, delay, ease: 'easeOut' as const }

  return (
    <motion.div
      className={className}
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={transitionConfig}
      style={stagger ? { display: 'flex', flexDirection: 'column' } : undefined}
    >
      {children}
    </motion.div>
  )
}



import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, ButtonProps } from './button'
import { useMousePosition } from '../../hooks/useMousePosition'

interface MagneticButtonProps extends ButtonProps {
  magneticRadius?: number
  magneticStrength?: number
}

export function MagneticButton({
  magneticRadius = 80,
  magneticStrength = 0.5,
  children,
  ...props
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)
  const mousePos = useMousePosition()

  useEffect(() => {
    if (!buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const buttonCenterX = buttonRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top + buttonRect.height / 2

    const distance = Math.sqrt(
      Math.pow(mousePos.x - buttonCenterX, 2) + Math.pow(mousePos.y - buttonCenterY, 2)
    )

    if (distance < magneticRadius) {
      const angle = Math.atan2(mousePos.y - buttonCenterY, mousePos.x - buttonCenterX)
      const strength = (1 - distance / magneticRadius) * magneticStrength

      setOffset({
        x: Math.cos(angle) * strength * 20,
        y: Math.sin(angle) * strength * 20,
      })
    } else {
      setOffset({ x: 0, y: 0 })
    }
  }, [mousePos.x, mousePos.y, magneticRadius, magneticStrength])

  return (
    <motion.div
      ref={buttonRef}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 1,
      }}
    >
      <Button {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

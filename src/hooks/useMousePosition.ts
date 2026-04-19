import { useState, useEffect, useCallback, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })
  const rafId = useRef<number>()

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      setPosition({ x: event.clientX, y: event.clientY })
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [handleMouseMove])

  return position
}

import { useState, useEffect } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detecta se é device com touch
    const hasTouchCapability = () => {
      return navigator.maxTouchPoints > 0 || window.ontouchstart !== undefined
    }

    setIsTouchDevice(hasTouchCapability())

    // Detecta hover em elementos clicáveis
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-75 ease-out"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full pointer-events-none transition-all duration-200 ${
            isHovering
              ? 'bg-neon-green shadow-lg shadow-neon-green/50'
              : 'bg-neon-green/70 shadow-md shadow-neon-green/30'
          }`}
        />
      </div>

      {/* Halo/Ring effect (apenas no hover) */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-200"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-6 h-6 border border-neon-green/40 rounded-full animate-pulse" />
        </div>
      )}

      {/* CSS para esconder cursor padrão */}
      <style>{`
        @media (hover: hover) {
          html {
            cursor: none;
          }
          a, button {
            cursor: none;
          }
        }
      `}</style>
    </>
  )
}

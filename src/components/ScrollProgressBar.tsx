import { useState, useEffect } from 'react'

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 z-40 bg-gradient-to-r from-neon-green via-neon-emerald to-neon-green transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
      }}
    />
  )
}

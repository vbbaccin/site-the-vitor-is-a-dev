import { useState, useEffect } from 'react'

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
  enabled?: boolean
}

export function useTypewriter({
  text,
  speed = 30,
  delay = 0,
  enabled = true,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setDisplayText(text)
      setIsComplete(true)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout>
    let charIndex = 0

    const startTyping = () => {
      const typeChar = () => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeChar, speed)
        } else {
          setIsComplete(true)
        }
      }

      timeoutId = setTimeout(typeChar, delay)
    }

    startTyping()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, speed, delay, enabled])

  const reset = () => {
    setDisplayText('')
    setIsComplete(false)
  }

  return { displayText, isComplete, reset }
}

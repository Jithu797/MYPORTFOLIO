import { useState, useEffect } from 'react'

export function useTyping(words, typingSpeed = 95, deletingSpeed = 55, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, charIdx + 1))
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause)
          return
        }
        setCharIdx(c => c + 1)
      } else {
        setText(word.substring(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          setCharIdx(0)
          return
        }
        setCharIdx(c => c - 1)
      }
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, deleting, charIdx, wordIdx, words, typingSpeed, deletingSpeed, pause])

  return text
}

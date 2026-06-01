import { useState, useEffect } from 'react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      className={`scrollup${visible ? ' show-scroll' : ''}`}
      aria-label="Back to top"
    >
      <i className="uil uil-angle-double-up" />
    </a>
  )
}

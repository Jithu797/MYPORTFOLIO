import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef      = useRef(null)
  const followerRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos   = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = pos.current.x + 'px'
        followerRef.current.style.top  = pos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const grow = () => {
      if (!followerRef.current) return
      followerRef.current.style.width  = '48px'
      followerRef.current.style.height = '48px'
    }
    const shrink = () => {
      if (!followerRef.current) return
      followerRef.current.style.width  = '28px'
      followerRef.current.style.height = '28px'
    }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor"          ref={dotRef}      />
      <div className="cursor-follower" ref={followerRef} />
    </>
  )
}

import { useState, useEffect } from 'react'

const links = [
  { href: '#home',         label: 'Home'         },
  { href: '#about',        label: 'About'        },
  { href: '#experience',   label: 'Experience'   },
  { href: '#skills',       label: 'Skills'       },
  { href: '#projects',     label: 'Projects'     },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact',      label: 'Contact'      },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      const y = window.scrollY + 120
      sections.forEach(s => {
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight)
          setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }
  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      {open && <div className="nav-overlay" onClick={close} />}

      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo" onClick={close}>
            <span className="bracket">&lt;</span>Jithendra<span className="bracket">/&gt;</span>
          </a>

          <div className={`nav__menu${open ? ' show-menu' : ''}`}>
            <button className="nav__close" onClick={close} aria-label="Close">
              <i className="uil uil-multiply" />
            </button>
            <ul className="nav__list">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`nav__link${active === l.href.slice(1) ? ' active-link' : ''}`}
                    onClick={close}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="nav__toggle" onClick={toggle} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>
      </header>
    </>
  )
}

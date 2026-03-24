import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#mindset',    label: 'Mindset' },
  { href: '#setup',      label: 'Setup CDN' },
  { href: '#magic4',     label: 'Magic 4' },
  { href: '#playground', label: 'Playground' },
  { href: '#quiz',       label: 'Quiz' },
  { href: '#checklist',  label: 'Checklist' },
]

const sectionIds = ['mindset', 'setup', 'magic4', 'playground', 'quiz', 'checklist']

export default function Navbar() {
  const [progress, setProgress]       = useState(0)
  const [activeSection, setActive]    = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const scrollTop  = window.scrollY
      const docHeight  = document.body.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0)

      // Active section
      let current = ''
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-border1">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="font-syne font-extrabold text-lg bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent no-underline"
        >
          ⚡ Tailwind Seri 1
        </a>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-outfit text-[12.5px] font-medium rounded-lg px-3 py-1.5 transition-all duration-200 no-underline
                  ${isActive
                    ? 'text-tcyan bg-tcyan/[0.08]'
                    : 'text-tmuted2 hover:text-tcyan hover:bg-tcyan/[0.08]'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-tcyan to-tpurple transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </header>
  )
}

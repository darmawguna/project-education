import { useState, useEffect } from 'react'

export default function Navbar({ links = [], title = '' }) {
    const [scrollPct, setScrollPct] = useState(0)
    const [activeHref, setActiveHref] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

            const sectionIds = links.map(l => l.href.replace('#', '')).filter(Boolean)
            let current = ''
            for (const id of sectionIds) {
                const el = document.getElementById(id)
                if (el && el.offsetTop - 140 <= scrollTop) current = `#${ id }`
            }
            setActiveHref(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [links])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-border1">
            <div className="container mx-auto px-6 h-14 flex items-center justify-between">
                {/* Brand */}
                <span className="font-syne font-extrabold text-lg bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent">
                    {title}
                </span>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-[13px] font-outfit px-3 py-1.5 rounded-lg transition-colors duration-150 ${ activeHref === link.href
                                    ? 'text-tcyan bg-tcyan/[0.08]'
                                    : 'text-tmuted2 hover:text-tcyan hover:bg-tcyan/[0.08]'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-tmuted2 hover:text-tcyan transition-colors"
                    onClick={() => setMenuOpen(p => !p)}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-border1 bg-bg/95 px-4 py-3 flex flex-col gap-1">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-[13px] font-outfit px-3 py-2 rounded-lg transition-colors duration-150 ${ activeHref === link.href
                                    ? 'text-tcyan bg-tcyan/[0.08]'
                                    : 'text-tmuted2 hover:text-tcyan hover:bg-tcyan/[0.08]'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            {/* Scroll progress bar */}
            <div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-tcyan to-tpurple transition-all duration-100"
                style={{ width: `${ scrollPct }%` }}
            />
        </nav>
    )
}
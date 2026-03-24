'use client'

// import { useScrollReveal } from './useScrollReveal'
import { useScrollReveal } from '../../utils/useScrollReveal'

import Navbar from '../../components/cheatsheets/Navbar'
import Hero from '../../components/cheatsheets/Hero'
import SectionMindset from '../../components/cheatsheets/sections/SectionMindset'
import SectionSetup from '../../components/cheatsheets/sections/SectionSetup'
import SectionMagic4 from '../../components/cheatsheets/sections/SectionMagic4'
import Playground from '../../components/cheatsheets/Playground'
import Quiz from '../../components/cheatsheets/Quiz'    
import Checklist from '../../components/cheatsheets/Checklist'
import PillBadge from '../../components/cheatsheets/PillBadge'

const footerTags = [
  { v: 'c', label: 'Tailwind CSS' },
  { v: 'p', label: 'Utility-First' },
  { v: 'y', label: 'Magic 4' },
  { v: 'g', label: 'Play CDN' },
  { v: 'o', label: 'Seri 1' },
  { v: 'r', label: 'The 20% Theory' },
]

export default function CheatsheetPage() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen bg-bg text-ttext font-outfit overflow-x-hidden">
      {/* ── Background layers ── */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg" />
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-tcyan/10 blur-[100px] pointer-events-none z-0" />
      <div className="fixed -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-tpurple/10 blur-[100px] pointer-events-none z-0" />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Content ── */}
      <main className="relative z-10 max-w-[1100px] mx-auto px-6 pt-24 pb-20">
        <Hero />

        <SectionMindset />
        <SectionSetup />
        <SectionMagic4 />
        <Playground />
        <Quiz />
        <Checklist />

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-border1 text-center scroll-reveal">
          <div className="flex justify-center flex-wrap gap-2 mb-5">
            {footerTags.map((t) => (
              <PillBadge key={t.label} variant={t.v}>{t.label}</PillBadge>
            ))}
          </div>
          <p className="text-[13px] text-tmuted">
            Cheatsheet Interaktif — Tailwind CSS Seri 1 ·{' '}
            Dibuat dengan ❤️ untuk pelajar SMA &amp; pemula web dev
          </p>
        </footer>
      </main>
    </div>
  )
}

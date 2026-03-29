// import { useScrollReveal } from '@/components/cheatsheet/foundation/useScrollReveal'
import { useScrollReveal } from '../foundations/useScrollReveal'
import Navbar from '../foundations/Navbar'
import PillBadge from '../foundations/PillBadge'
import Hero from './Hero'
import ContentSection from './ContentSection'
import Playground from './Playground'
import Quiz from './Quiz'
import Checklist from './Checklist'

const BADGE_VARIANTS = ['c', 'y', 'p', 'g', 'o', 'r']

export default function CheatsheetPage({ data }) {
    useScrollReveal()

    return (
        <div className="min-h-screen bg-bg text-ttext font-outfit relative overflow-x-hidden">

            {/* Background layers */}
            <div className="fixed inset-0 grid-bg pointer-events-none" />
            <div
                className="fixed rounded-full blur-3xl pointer-events-none"
                style={{
                    top: '-200px', left: '-200px',
                    width: '600px', height: '600px',
                    background: 'rgba(56,245,212,0.04)',
                }}
            />
            <div
                className="fixed rounded-full blur-3xl pointer-events-none"
                style={{
                    bottom: '-200px', right: '-200px',
                    width: '600px', height: '600px',
                    background: 'rgba(167,139,250,0.04)',
                }}
            />

            {/* Navbar */}
            <Navbar title={data.meta.navTitle} links={data.navLinks} />

            {/* Main content */}
            <main>
                <Hero data={data.meta} />

                {data.sections.map((section) => (
                    <ContentSection key={section.id} section={section} />
                ))}

                <Playground data={data.playground} />
                <Quiz data={data.quiz} />
                <Checklist data={data.checklist} />

                {/* Footer */}
                <footer className="px-6 py-12 border-t border-border1">
                    <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <span className="font-syne font-extrabold text-lg bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent">
                            {data.meta.navTitle}
                        </span>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {data.meta.tags.map((tag, i) => (
                                <PillBadge key={i} variant={BADGE_VARIANTS[i % BADGE_VARIANTS.length]}>
                                    {tag}
                                </PillBadge>
                            ))}
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
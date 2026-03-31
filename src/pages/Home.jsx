// src/pages/cheatsheet/Home.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import registry from '@/data/cheatsheet/registry'

// ─── NOISE TEXTURE SVG (inline) ───────────────────────────────────────────────
const NoiseBg = () => (
    <svg className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.035] z-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
)

// ─── GRID LINES BACKGROUND ────────────────────────────────────────────────────
const GridBg = () => (
    <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
            backgroundImage: `
        linear-gradient(to right, #22d3ee 1px, transparent 1px),
        linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
      `,
            backgroundSize: '48px 48px',
        }}
    />
)

// ─── GLOW ORBS ────────────────────────────────────────────────────────────────
const GlowOrbs = () => (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
            className="absolute rounded-full opacity-20"
            style={{
                width: 600,
                height: 600,
                top: '-15%',
                left: '-10%',
                background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
                filter: 'blur(60px)',
            }}
        />
        <div
            className="absolute rounded-full opacity-15"
            style={{
                width: 500,
                height: 500,
                bottom: '-10%',
                right: '-8%',
                background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
                filter: 'blur(60px)',
            }}
        />
        <div
            className="absolute rounded-full opacity-10"
            style={{
                width: 300,
                height: 300,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
                filter: 'blur(80px)',
            }}
        />
    </div>
)

// ─── CHEATSHEET CARD ──────────────────────────────────────────────────────────
function CheatsheetCard({ item, index }) {
    const [hovered, setHovered] = useState(false)
    const isCyan = item.glow === 'cyan'
    const glowColor = isCyan ? '#06b6d4' : '#a855f7'
    const glowColorDim = isCyan ? 'rgba(6,182,212,0.12)' : 'rgba(168,85,247,0.12)'
    const borderColor = isCyan ? 'rgba(6,182,212,0.35)' : 'rgba(168,85,247,0.35)'
    const borderHover = isCyan ? 'rgba(6,182,212,0.7)' : 'rgba(168,85,247,0.7)'
    const badgeColor = isCyan ? '#06b6d4' : '#a855f7'
    const tagBg = isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(168,85,247,0.1)'
    const tagText = isCyan ? '#67e8f9' : '#d8b4fe'

    const isAvailable = item.status === 'available'

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group"
            style={{
                animationDelay: `${ index * 80 }ms`,
                animation: 'fadeSlideUp 0.5s ease both',
            }}
        >
            {/* Glow effect behind card */}
            <div
                className="absolute inset-0 rounded-2xl transition-all duration-500"
                style={{
                    background: hovered
                        ? `radial-gradient(ellipse at 50% 0%, ${ glowColor }22 0%, transparent 70%)`
                        : 'transparent',
                    filter: 'blur(20px)',
                    transform: 'translateY(4px) scaleX(0.95)',
                }}
            />

            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                    background: hovered
                        ? `linear-gradient(135deg, #0f172a 0%, #0a0f1e 100%)`
                        : 'linear-gradient(135deg, #0d1117 0%, #090e18 100%)',
                    border: `1px solid ${ hovered ? borderHover : borderColor }`,
                    boxShadow: hovered
                        ? `0 0 30px ${ glowColor }25, 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 ${ glowColor }20`
                        : `0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)`,
                    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                    opacity: isAvailable ? 1 : 0.5,
                }}
            >
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
                    style={{
                        background: hovered
                            ? `linear-gradient(90deg, transparent, ${ glowColor }, transparent)`
                            : `linear-gradient(90deg, transparent, ${ glowColor }50, transparent)`,
                    }}
                />

                {/* Corner decoration */}
                <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-30"
                    style={{
                        background: `radial-gradient(circle at top right, ${ glowColor }40, transparent 70%)`,
                    }}
                />

                <div className="p-6">
                    {/* Series badge + icon row */}
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className="text-xs font-mono tracking-widest"
                            style={{ color: badgeColor }}
                        >
                            {item.seriesBadge}
                        </span>
                        <span className="text-2xl">{item.icon}</span>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-xl font-bold mb-1 leading-tight transition-colors duration-300"
                        style={{
                            fontFamily: '"Syne", sans-serif',
                            color: hovered ? '#f8fafc' : '#e2e8f0',
                        }}
                    >
                        {item.title}
                    </h2>
                    <p
                        className="text-sm mb-3"
                        style={{ color: badgeColor, fontFamily: 'monospace' }}
                    >
                        {item.subtitle}
                    </p>

                    {/* Description */}
                    <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: '#64748b' }}
                    >
                        {item.description}
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-2 mb-5">
                        {item.stats.map((s) => (
                            <div
                                key={s.label}
                                className="text-center rounded-lg py-2 px-1"
                                style={{ background: glowColorDim }}
                            >
                                <div
                                    className="text-lg font-bold font-mono"
                                    style={{ color: badgeColor }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-xs" style={{ color: '#475569' }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {item.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md font-mono"
                                style={{ background: tagBg, color: tagText, border: `1px solid ${ glowColor }20` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button */}
                    {isAvailable ? (
                        <Link
                            to={item.path}
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-mono text-sm font-semibold transition-all duration-300"
                            style={{
                                background: hovered
                                    ? `linear-gradient(135deg, ${ glowColor }25, ${ glowColor }15)`
                                    : 'rgba(255,255,255,0.03)',
                                border: `1px solid ${ hovered ? glowColor : glowColor + '30' }`,
                                color: hovered ? glowColor : '#64748b',
                            }}
                        >
                            <span>Buka Cheatsheet</span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="transition-transform duration-300"
                                style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
                            >
                                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    ) : (
                        <div
                            className="flex items-center justify-center w-full py-3 rounded-xl font-mono text-sm"
                            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#374151' }}
                        >
                            Coming Soon
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

// ─── STATS COUNTER BAR ────────────────────────────────────────────────────────
function StatsBar() {
    const totalTopics = registry.reduce((acc, r) => acc + parseInt(r.stats[0]?.value || 0), 0)
    const totalConcepts = registry.reduce((acc, r) => acc + parseInt(r.stats[1]?.value || 0), 0)
    const totalQuizzes = registry.filter(r => r.status === 'available').length * 10
    const totalSheets = registry.filter(r => r.status === 'available').length

    const items = [
        { label: 'Cheatsheet Tersedia', value: totalSheets, suffix: '' },
        { label: 'Total Topik', value: totalTopics, suffix: '' },
        { label: 'Total Konsep', value: totalConcepts, suffix: '+' },
        { label: 'Soal Quiz', value: totalQuizzes, suffix: '' },
    ]

    return (
        <div
            className="grid grid-cols-2 gap-3 mb-16 sm:grid-cols-4"
        >
            {items.map((item, i) => (
                <div
                    key={item.label}
                    className="text-center py-4 px-3 rounded-xl"
                    style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        animationDelay: `${ i * 60 + 300 }ms`,
                        animation: 'fadeSlideUp 0.5s ease both',
                    }}
                >
                    <div
                        className="text-3xl font-bold font-mono mb-1"
                        style={{ color: i % 2 === 0 ? '#06b6d4' : '#a855f7' }}
                    >
                        {item.value}{item.suffix}
                    </div>
                    <div className="text-xs" style={{ color: '#475569' }}>{item.label}</div>
                </div>
            ))}
        </div>
    )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
    useEffect(() => {
        document.title = 'Cheatsheet Hub — Belajar Web Development'
    }, [])

    return (
        <>
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scanline {
          from { transform: translateY(-100%); }
          to   { transform: translateY(100vh); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .cursor-blink {
          animation: blink 1.1s step-end infinite;
        }

        * { box-sizing: border-box; }

        body {
          background: #060a14;
          color: #e2e8f0;
          margin: 0;
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>

            <div className="relative min-h-screen" style={{ background: '#060a14' }}>
                <NoiseBg />
                <GridBg />
                <GlowOrbs />

                {/* Scanline effect */}
                <div
                    className="pointer-events-none fixed top-0 left-0 right-0 h-px z-10 opacity-20"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)',
                        animation: 'scanline 8s linear infinite',
                    }}
                />

                {/* ── NAVBAR ── */}
                <nav
                    className="sticky top-0 z-50 px-6 py-4"
                    style={{
                        background: 'rgba(6,10,20,0.85)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid rgba(34,211,238,0.08)',
                    }}
                >
                    <div className="max-w-5xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
                                style={{
                                    background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                                    color: '#fff',
                                }}
                            >
                                {'</>'}
                            </div>
                            <span
                                className="text-sm font-mono font-semibold"
                                style={{ color: '#94a3b8' }}
                            >
                                cheatsheet<span style={{ color: '#06b6d4' }}>.hub</span>
                            </span>
                        </div>

                        <div
                            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono"
                            style={{
                                background: 'rgba(6,182,212,0.08)',
                                border: '1px solid rgba(6,182,212,0.2)',
                                color: '#06b6d4',
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: '#06b6d4', boxShadow: '0 0 6px #06b6d4' }}
                            />
                            {registry.filter(r => r.status === 'available').length} cheatsheet aktif
                        </div>
                    </div>
                </nav>

                {/* ── HERO ── */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12">

                    {/* Top label */}
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-8"
                        style={{
                            background: 'rgba(6,182,212,0.08)',
                            border: '1px solid rgba(6,182,212,0.2)',
                            color: '#67e8f9',
                            animation: 'fadeSlideUp 0.4s ease both',
                        }}
                    >
                        <span>// BELAJAR WEB DEVELOPMENT</span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-5xl sm:text-6xl font-extrabold leading-none mb-6"
                        style={{
                            fontFamily: '"Syne", sans-serif',
                            animation: 'fadeSlideUp 0.4s ease 0.1s both',
                        }}
                    >
                        <span style={{ color: '#f8fafc' }}>Cheatsheet</span>
                        <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Hub_
                        </span>
                        <span
                            className="cursor-blink"
                            style={{ color: '#06b6d4', WebkitTextFillColor: '#06b6d4' }}
                        >
                            |
                        </span>
                    </h1>

                    <p
                        className="text-base leading-relaxed mb-4 max-w-xl"
                        style={{
                            color: '#64748b',
                            animation: 'fadeSlideUp 0.4s ease 0.15s both',
                        }}
                    >
                        Semua materi web development dalam satu tempat. Pilih topik, pelajari konsepnya, dan uji pemahamanmu dengan quiz interaktif.
                    </p>

                    {/* Breadcrumb path */}
                    <p
                        className="text-xs font-mono mb-16"
                        style={{
                            color: '#334155',
                            animation: 'fadeSlideUp 0.4s ease 0.2s both',
                        }}
                    >
                        <span style={{ color: '#06b6d4' }}>~/</span>
                        cheatsheet
                        <span style={{ color: '#06b6d4' }}>/</span>
                        <span style={{ color: '#a855f7' }}>*</span>
                    </p>

                    {/* ── STATS BAR ── */}
                    <StatsBar />

                    {/* ── SECTION LABEL ── */}
                    <div
                        className="flex items-center gap-4 mb-8"
                        style={{ animation: 'fadeSlideUp 0.5s ease 0.35s both' }}
                    >
                        <div
                            className="text-xs font-mono tracking-widest"
                            style={{ color: '#334155' }}
                        >
                            MATERI TERSEDIA
                        </div>
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        <div
                            className="text-xs font-mono"
                            style={{ color: '#334155' }}
                        >
                            {registry.filter(r => r.status === 'available').length}/{registry.length}
                        </div>
                    </div>

                    {/* ── CARD GRID ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                        {registry.map((item, i) => (
                            <CheatsheetCard key={item.slug} item={item} index={i} />
                        ))}

                        {/* Placeholder "coming soon" card */}
                        <div
                            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-64"
                            style={{
                                background: 'rgba(255,255,255,0.01)',
                                border: '1px dashed rgba(255,255,255,0.06)',
                                animation: `fadeSlideUp 0.5s ease ${ registry.length * 80 }ms both`,
                            }}
                        >
                            <div className="text-3xl mb-3 opacity-30">+</div>
                            <p className="text-xs font-mono" style={{ color: '#1e293b' }}>
                                Materi baru
                                <br />
                                segera hadir
                            </p>
                        </div>
                    </div>

                    {/* ── FOOTER ── */}
                    <div
                        className="border-t pt-8 pb-12 text-center"
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                        <p className="text-xs font-mono" style={{ color: '#1e293b' }}>
                            Tambah cheatsheet baru di{' '}
                            <span style={{ color: '#334155' }}>src/data/cheatsheet/registry.js</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
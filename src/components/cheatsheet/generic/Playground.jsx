import { useState } from 'react'
import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'

// ─── Card preview ────────────────────────────────────────────────────────────
function CardPreview({ state }) {
    const classes = Object.values(state).join(' ')
    return (
        <div className="bg-surface border border-border1 rounded-xl p-6 flex items-center justify-center min-h-[140px]">
            <div className={`bg-white ${ classes } max-w-xs w-full`}>
                <div className="w-full h-3 bg-slate-200 rounded mb-3" />
                <div className="w-3/4 h-2 bg-slate-100 rounded mb-2" />
                <div className="w-1/2 h-2 bg-slate-100 rounded" />
            </div>
        </div>
    )
}

// ─── Flex preview ─────────────────────────────────────────────────────────────
function FlexPreview({ state }) {
    const classes = Object.values(state).join(' ')
    return (
        <div className="bg-surface border border-border1 rounded-xl p-6 min-h-[140px]">
            <div className={`flex w-full h-20 ${ classes }`}>
                {['A', 'B', 'C'].map((l, i) => (
                    <div
                        key={i}
                        className="w-10 h-10 rounded-lg bg-[rgba(56,245,212,0.2)] border border-[rgba(56,245,212,0.3)] flex items-center justify-center font-mono text-tcyan text-sm font-bold"
                    >
                        {l}
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Toggle group control ─────────────────────────────────────────────────────
function ToggleGroup({ label, options, value, onChange }) {
    return (
        <div>
            <p className="font-mono text-[11px] text-tmuted uppercase tracking-wider mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-colors duration-150 ${ value === opt
                                ? 'bg-[rgba(56,245,212,0.1)] text-tcyan border-[rgba(56,245,212,0.3)]'
                                : 'bg-surface text-tmuted2 border-border2 hover:text-tcyan hover:border-[rgba(56,245,212,0.2)]'
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}

// ─── Single demo ──────────────────────────────────────────────────────────────
function Demo({ config }) {
    const [state, setState] = useState(config.defaultState)

    const handleChange = (key, val) => setState(prev => ({ ...prev, [key]: val }))
    const classes = Object.values(state).join(' ')

    return (
        <CardWrapper glow="cyan">
            <h3 className="font-syne font-bold text-base text-ttext mb-1">{config.label}</h3>
            <p className="text-tmuted2 text-[12.5px] mb-5">{config.description}</p>

            {config.preview === 'card' && <CardPreview state={state} />}
            {config.preview === 'flex' && <FlexPreview state={state} />}

            {/* Generated classes output */}
            <div className="my-4 font-mono text-[11.5px] bg-[#060910] border border-border1 rounded-lg px-4 py-2 text-tgreen break-all">
                {classes}
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
                {config.controls.map(ctrl =>
                    ctrl.type === 'toggle-group' ? (
                        <ToggleGroup
                            key={ctrl.stateKey}
                            label={ctrl.label}
                            options={ctrl.options}
                            value={state[ctrl.stateKey]}
                            onChange={val => handleChange(ctrl.stateKey, val)}
                        />
                    ) : null
                )}
            </div>
        </CardWrapper>
    )
}

// ─── Main Playground ──────────────────────────────────────────────────────────
export default function Playground({ data }) {
    const [activeDemo, setActiveDemo] = useState(data.demos[0].id)
    const currentDemo = data.demos.find(d => d.id === activeDemo)

    return (
        <section id={data.id} className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={data.id} badge={data.badge} title={data.title} />

                    {/* Demo tabs */}
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {data.demos.map(demo => (
                            <button
                                key={demo.id}
                                onClick={() => setActiveDemo(demo.id)}
                                className={`font-outfit text-sm px-4 py-2 rounded-xl border transition-colors duration-150 ${ activeDemo === demo.id
                                        ? 'bg-[rgba(56,245,212,0.1)] text-tcyan border-[rgba(56,245,212,0.3)]'
                                        : 'bg-surface text-tmuted2 border-border2 hover:text-tcyan hover:border-[rgba(56,245,212,0.2)]'
                                    }`}
                            >
                                {demo.label}
                            </button>
                        ))}
                    </div>

                    {currentDemo && <Demo key={currentDemo.id} config={currentDemo} />}
                </div>
            </div>
        </section>
    )
}
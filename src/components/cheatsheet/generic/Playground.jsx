import { useState, useRef } from 'react'
import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'

// ─── REGISTRY COMPONENTS ──────────────────────────────────────────────────────

/**
 * Registry berisi daftar komponen preview yang tersedia.
 * Demo cukup memanggil key yang sesuai dari data JSON.
 */
const PREVIEW_REGISTRY = {
    'request-response-sim': RequestResponseSim,
    'url-dissector-sim': URLDissectorSim,
    'form-sim': FormSimPreview,
    'validator-sim': ValidatorSimPreview,
}

// ─── 1. REQUEST & RESPONSE SIMULATOR ──────────────────────────────────────────
const STEPS = [
    { id: 0, label: 'Idle', icon: '💤', desc: 'Menunggu request...', actor: null },
    { id: 1, label: 'DNS Lookup', icon: '🔍', desc: 'Browser mencari alamat IP dari domain...', actor: 'client' },
    { id: 2, label: 'Kirim Request', icon: '📤', desc: 'Browser mengirim HTTP Request ke Server...', actor: 'client' },
    { id: 3, label: 'Diproses', icon: '⚙️', desc: 'Server memproses — mencari file/data...', actor: 'server' },
    { id: 4, label: 'Kirim Response', icon: '📥', desc: 'Server mengirim HTTP Response balik...', actor: 'server' },
    { id: 5, label: 'Render', icon: '🖥️', desc: 'Browser merender HTML — muncul di layar!', actor: 'client' },
]

function RequestResponseSim({ state, onFieldChange }) {
    const [step, setStep] = useState(0)
    const [running, setRunning] = useState(false)
    const timerRef = useRef(null)
    const url = state.url || ''

    const runFlow = () => {
        if (running || !url.trim()) return
        setRunning(true); setStep(0)
        let current = 0
        const next = () => {
            current++
            setStep(current)
            if (current < STEPS.length - 1) timerRef.current = setTimeout(next, 1200)
            else setRunning(false)
        }
        timerRef.current = setTimeout(next, 400)
    }

    const reset = () => {
        clearTimeout(timerRef.current); setStep(0); setRunning(false)
    }

    const currentStep = STEPS[step]

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <input
                    type="text" placeholder="contoh: https://toko.com/produk" value={url}
                    onChange={e => { onFieldChange('url', e.target.value); reset() }}
                    className="flex-1 bg-[#060910] border border-border2 rounded-xl px-4 py-2.5 font-mono text-[12.5px] text-ttext focus:outline-none focus:border-tcyan/50"
                />
                <button onClick={runFlow} disabled={running || !url.trim()} className={`font-outfit text-sm px-5 py-2 rounded-xl border transition-all ${ running || !url.trim() ? 'border-border2 text-tmuted bg-surface cursor-not-allowed' : 'border-[rgba(56,245,212,0.3)] bg-[rgba(56,245,212,0.08)] text-tcyan hover:bg-[rgba(56,245,212,0.15)]' }`}>
                    {running ? '...' : 'Kirim →'}
                </button>
            </div>

            <div className="bg-surface border border-border1 rounded-xl p-5">
                <div className="flex items-center justify-between mb-6 px-2">
                    <ActorNode type="client" active={currentStep.actor === 'client'} />
                    <div className="flex-1 mx-4 flex flex-col items-center gap-2">
                        <div className="relative w-full h-6 flex items-center">
                            <div className="w-full h-px bg-border2" />
                            {running && step > 0 && step < 5 && (
                                <div className={`absolute w-3 h-3 rounded-full border-2 transition-all duration-700 ${ currentStep.actor === 'client' ? 'right-0 bg-tcyan border-tcyan/50 animate-pulse' : 'left-0 bg-tpurple border-tpurple/50 animate-pulse' }`} />
                            )}
                        </div>
                        <div className={`font-mono text-[10px] px-3 py-1 rounded-full border text-center ${ step === 0 ? 'border-border2 text-tmuted' : step === 5 ? 'border-tgreen/30 text-tgreen bg-tgreen/10' : currentStep.actor === 'client' ? 'border-tcyan/30 text-tcyan bg-tcyan/10' : 'border-tpurple/30 text-tpurple bg-tpurple/10' }`}>
                            {currentStep.icon} {currentStep.label}
                        </div>
                    </div>
                    <ActorNode type="server" active={currentStep.actor === 'server'} />
                </div>
                <div className={`text-center font-mono text-[12px] py-3 px-4 rounded-xl border transition-all duration-300 ${ step === 0 ? 'border-border1 text-tmuted bg-card' : step === 5 ? 'border-tgreen/20 text-tgreen bg-tgreen/5' : currentStep.actor === 'client' ? 'border-tcyan/20 text-tcyan bg-tcyan/5' : 'border-tpurple/20 text-tpurple bg-tpurple/5' }`}>
                    {step === 0 ? (url.trim() ? 'Siap — tekan "Kirim →"' : 'Masukkan URL...') : currentStep.desc}
                </div>
            </div>
        </div>
    )
}

function ActorNode({ type, active }) {
    const isClient = type === 'client'
    return (
        <div className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${ active ? 'scale-110' : 'opacity-60' }`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 transition-all duration-300 ${ active ? (isClient ? 'bg-tcyan/10 border-tcyan/50 shadow-glow-cyan' : 'bg-tpurple/10 border-tpurple/50 shadow-glow-purple') : 'bg-card border-border1' }`}>
                {isClient ? '🖥️' : '🗄️'}
            </div>
            <span className="font-mono text-[10px] text-tmuted2 uppercase tracking-wider">{type}</span>
        </div>
    )
}

// ─── 2. URL DISSECTOR ────────────────────────────────────────────────────────
function URLDissectorSim({ state, onFieldChange }) {
    const url = state.url || ''
    let parsed = { valid: false }
    try {
        const u = new URL(url.includes('://') ? url : 'https://' + url)
        parsed = { protocol: u.protocol.replace(':', ''), domain: u.hostname, path: u.pathname !== '/' ? u.pathname : '', query: u.search.replace('?', ''), valid: true }
    } catch { "" }

    const parts = [
        { key: 'protocol', label: 'Protocol', color: 'text-tblue bg-tblue/10 border-tblue/20', desc: 'Cara komunikasi (https/http)' },
        { key: 'domain', label: 'Domain', color: 'text-tcyan bg-tcyan/10 border-tcyan/20', desc: 'Alamat server tujuan' },
        { key: 'path', label: 'Path', color: 'text-tpurple bg-tpurple/10 border-tpurple/20', desc: 'Lokasi file di server' },
        { key: 'query', label: 'Query', color: 'text-torange bg-torange/10 border-torange/20', desc: 'Data ekstra (key=value)' },
    ]

    return (
        <div className="flex flex-col gap-4">
            <input type="text" value={url} onChange={e => onFieldChange('url', e.target.value)} placeholder="Ketik URL..." className="w-full bg-[#060910] border border-border2 rounded-xl px-4 py-2.5 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
            <div className="bg-[#060910] border border-border1 rounded-xl px-4 py-3 font-mono text-[13px] min-h-[48px] flex items-center break-all">
                {parsed.valid ? (
                    <>
                        <span className="text-tblue">{parsed.protocol}://</span><span className="text-tcyan">{parsed.domain}</span><span className="text-tpurple">{parsed.path}</span>{parsed.query && <span className="text-torange">?{parsed.query}</span>}
                    </>
                ) : <span className="text-tmuted">Ketik URL...</span>}
            </div>
            {parsed.valid && (
                <div className="grid gap-2">
                    {parts.map(p => parsed[p.key] && (
                        <div key={p.key} className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${ p.color }`}>
                            <div className="flex-1">
                                <span className="font-mono text-[10px] uppercase opacity-70 block">{p.label}</span>
                                <span className="font-mono text-[12.5px] font-semibold">{p.key === 'query' ? '?' : ''}{parsed[p.key]}</span>
                                <p className="text-[11px] opacity-70 mt-0.5">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── 3. FORM GET VS POST SIMULATOR ──────────────────────────────────────────
function FormSimPreview({ config, state, onFieldChange }) {
    const isGet = state.method === 'GET'
    const qs = config.fields.map(f => `${ f.name }=${ state[f.name] || '' }`).join('&')
    const url = `proses.php${ isGet ? `?${ qs }` : '' }`

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-3">
                {config.fields.map(f => (
                    <div key={f.name}>
                        <label className="block font-mono text-[10.5px] text-tmuted uppercase mb-1">{f.label}</label>
                        <input type={f.type} value={state[f.name] || ''} onChange={e => onFieldChange(f.name, e.target.value)} className="w-full bg-[#060910] border border-border2 rounded-lg px-3 py-2 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-3 font-mono">
                <div className={`p-4 rounded-xl border ${ isGet ? 'bg-tpink/5 border-tpink/20 text-tpink' : 'bg-tcyan/5 border-tcyan/20 text-tcyan' }`}>
                    <p className="text-[10px] uppercase mb-2">🌐 URL Browser</p>
                    <div className="text-[11.5px] break-all">{url}</div>
                </div>
                <div className="p-4 rounded-xl border bg-surface border-border1">
                    <p className="text-[10px] text-tmuted uppercase mb-2">🐘 PHP {isGet ? '$_GET' : '$_POST'}</p>
                    {config.fields.map(f => (
                        <div key={f.name} className="text-[11.5px]">
                            <span className="text-tpurple">{isGet ? '$_GET' : '$_POST'}</span>['<span className="text-tgreen">{f.name}</span>'] = '<span className="text-torange">{state[f.name] || ''}</span>'
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── 4. VALIDATOR (ISSET/EMPTY) SIMULATOR ────────────────────────────────────
function ValidatorSimPreview({ config, state, onFieldChange }) {
    const results = config.fields.map(f => ({ ...f, isEmpty: (state[f.name] || '').trim() === '' }))

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-3">
                {config.fields.map(f => (
                    <div key={f.name}>
                        <label className="block font-mono text-[10.5px] text-tmuted uppercase mb-1">{f.label}</label>
                        <input type={f.type} value={state[f.name] || ''} onChange={e => { onFieldChange(f.name, e.target.value); onFieldChange('submitted', false) }} className="w-full bg-[#060910] border border-border2 rounded-lg px-3 py-2 font-mono text-[12.5px] text-ttext focus:border-tcyan/50 focus:outline-none" />
                    </div>
                ))}
                <button onClick={() => onFieldChange('submitted', true)} className="mt-1 w-full font-outfit text-sm py-2 rounded-xl border border-tcyan/30 bg-tcyan/10 text-tcyan hover:bg-tcyan/20 transition-all">Submit →</button>
            </div>
            {state.submitted && (
                <div className="bg-[#060910] border border-border1 rounded-xl p-4 font-mono text-[12px]">
                    <p className="text-tmuted text-[10px] uppercase mb-3">🐘 PHP Logic</p>
                    <div className="mb-3"><span className="text-tpurple">isset</span>($_POST[<span className="text-tgreen">'submit'</span>]) → <span className="text-tgreen">true</span></div>
                    {results.map(r => (
                        <div key={r.name} className="mb-2 pl-3 border-l border-border2">
                            <span className="text-tpurple">empty</span>($_POST['<span className="text-tgreen">{r.name}</span>']) → <span className={r.isEmpty ? 'text-tred' : 'text-tgreen'}>{r.isEmpty ? 'true' : 'false'}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── MAIN COMPONENTS ──────────────────────────────────────────────────────────

function ToggleGroup({ label, options, value, onChange }) {
    return (
        <div>
            <p className="font-mono text-[11px] text-tmuted uppercase tracking-wider mb-2">{label}</p>
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button key={opt} onClick={() => onChange(opt)} className={`font-mono text-[11.5px] px-3 py-1.5 rounded-lg border transition-all ${ value === opt ? 'bg-tcyan/10 text-tcyan border-tcyan/30' : 'bg-surface text-tmuted2 border-border2 hover:border-tcyan/20' }`}>
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}

function Demo({ config }) {
    const [state, setState] = useState(config.defaultState)
    const handleChange = (key, val) => setState(prev => ({ ...prev, [key]: val }))

    // Konsep Registry: Mengambil komponen berdasarkan key "preview"
    const PreviewComponent = PREVIEW_REGISTRY[config.preview]

    return (
        <CardWrapper glow="cyan">
            <h3 className="font-syne font-bold text-base text-ttext mb-1">{config.label}</h3>
            <p className="text-tmuted2 text-[12.5px] mb-5">{config.description}</p>

            {PreviewComponent ? (
                <PreviewComponent config={config} state={state} onFieldChange={handleChange} />
            ) : (
                <div className="text-tred font-mono text-xs italic">Preview component "{config.preview}" not found.</div>
            )}

            {config.controls?.length > 0 && (
                <div className="flex flex-col gap-4 mt-5">
                    {config.controls.map(ctrl => (
                        ctrl.type === 'toggle-group' && (
                            <ToggleGroup key={ctrl.stateKey} label={ctrl.label} options={ctrl.options} value={state[ctrl.stateKey]} onChange={val => handleChange(ctrl.stateKey, val)} />
                        )
                    ))}
                </div>
            )}
        </CardWrapper>
    )
}

export default function Playground({ data }) {
    const [activeDemo, setActiveDemo] = useState(data.demos[0].id)
    const currentDemo = data.demos.find(d => d.id === activeDemo)

    return (
        <section id={data.id} className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={data.id} badge={data.badge} title={data.title} />
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {data.demos.map(demo => (
                            <button key={demo.id} onClick={() => setActiveDemo(demo.id)} className={`font-outfit text-sm px-4 py-2 rounded-xl border transition-all ${ activeDemo === demo.id ? 'bg-tcyan/10 text-tcyan border-tcyan/30' : 'bg-surface text-tmuted2 border-border2 hover:border-tcyan/20' }`}>
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
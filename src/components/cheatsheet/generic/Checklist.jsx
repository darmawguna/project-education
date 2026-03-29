import { useState } from 'react'
// import SectionHeader from '@/components/cheatsheet/foundation/SectionHeader'
// import CardWrapper from '@/components/cheatsheet/foundation/CardWrapper'
import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'

export default function Checklist({ data }) {
    const [checked, setChecked] = useState(new Set())

    const toggle = (id) =>
        setChecked(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })

    const total = data.items.length
    const done = checked.size
    const pct = total > 0 ? Math.round((done / total) * 100) : 0

    return (
        <section id={data.id} className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={data.id} badge={data.badge} title={data.title} />

                    <CardWrapper glow="cyan">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-tmuted2 text-[12.5px]">{data.subtitle}</p>
                            <span className="font-mono text-[12px] text-tcyan">{done}/{total}</span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-2 bg-border2 rounded-full mb-6 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${ pct }%`,
                                    background: 'linear-gradient(to right, #4ade80, #38f5d4)',
                                }}
                            />
                        </div>

                        {/* Items */}
                        <div className="flex flex-col gap-3">
                            {data.items.map(item => {
                                const isChecked = checked.has(item.id)
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => toggle(item.id)}
                                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-150 ${ isChecked
                                                ? 'bg-[rgba(74,222,128,0.05)] border-[rgba(74,222,128,0.2)]'
                                                : 'bg-surface border-border1 hover:border-border2'
                                            }`}
                                    >
                                        {/* Checkbox */}
                                        <div
                                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-150 ${ isChecked ? 'bg-tgreen border-tgreen' : 'border-border2'
                                                }`}
                                        >
                                            {isChecked && (
                                                <svg className="w-3 h-3 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>

                                        <span
                                            className={`text-[13px] leading-snug transition-colors duration-150 ${ isChecked ? 'text-tmuted2 line-through' : 'text-ttext'
                                                }`}
                                        >
                                            {item.text}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* All done message */}
                        {done === total && total > 0 && (
                            <div className="mt-6 bg-[rgba(74,222,128,0.05)] border border-[rgba(74,222,128,0.2)] rounded-xl p-4 text-center">
                                <p className="text-tgreen font-syne font-bold text-sm">
                                    🎉 Semua item selesai! Kamu siap ke seri berikutnya.
                                </p>
                            </div>
                        )}
                    </CardWrapper>
                </div>
            </div>
        </section>
    )
}
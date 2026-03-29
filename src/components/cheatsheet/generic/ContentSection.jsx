import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'
// import CodeBlock from '@/components/cheatsheet/foundation/CodeBlock'
import CodeBlock from '../foundations/CodeBlock'

export default function ContentSection({ section }) {
    const { id, badge, title, glow, description, analogy, cards } = section

    return (
        <section className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={id} badge={badge} title={title} />

                    <p className="text-tmuted2 text-sm leading-relaxed mb-8">{description}</p>

                    <div className="flex flex-col gap-6">
                        {cards.map((card, i) => (
                            <CardWrapper
                                key={i}
                                glow={i % 2 === 0 ? glow : (glow === 'cyan' ? 'purple' : 'cyan')}
                            >
                                <h3 className="font-syne font-bold text-base text-ttext mb-4">{card.subtitle}</h3>

                                {/* Class list */}
                                {card.items && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                                        {card.items.map((item, j) => (
                                            <div key={j} className="flex items-start gap-3 bg-surface border border-border1 rounded-xl p-3">
                                                <code className="font-mono text-[11.5px] text-tcyan border border-tcyan/20 rounded px-2 py-0.5 whitespace-nowrap mt-0.5 bg-[rgba(56,245,212,0.05)]">
                                                    {item.class}
                                                </code>
                                                <span className="text-tmuted2 text-[12.5px] leading-snug">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Analogy — only on first card of section */}
                                {i === 0 && analogy && (
                                    <div className="bg-[rgba(255,217,90,0.05)] border border-[rgba(255,217,90,0.15)] rounded-xl p-4 mb-5">
                                        <p className="text-[12.5px] text-tmuted2 leading-relaxed">{analogy}</p>
                                    </div>
                                )}

                                {/* Code block */}
                                {card.code && (
                                    <CodeBlock lang={card.code.lang} code={card.code.raw}>
                                        <span dangerouslySetInnerHTML={{ __html: card.code.highlighted }} />
                                    </CodeBlock>
                                )}
                            </CardWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
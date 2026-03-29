import { useState } from 'react'
import SectionHeader from '../foundations/SectionHeader'
import CardWrapper from '../foundations/CardWrapper'

export default function Quiz({ data }) {
    const { questions } = data
    const [qIdx, setQIdx] = useState(0)
    const [scores, setScores] = useState([])
    const [answered, setAnswered] = useState(false)
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)

    const current = questions[qIdx]
    const totalCorrect = scores.filter(Boolean).length

    const handleSelect = (i) => {
        if (answered) return
        setSelected(i)
        setAnswered(true)
        setScores(prev => [...prev, i === current.ans])
    }

    const handleNext = () => {
        if (qIdx < questions.length - 1) {
            setQIdx(p => p + 1)
            setAnswered(false)
            setSelected(null)
        } else {
            setShowResult(true)
        }
    }

    const handleRestart = () => {
        setQIdx(0)
        setScores([])
        setAnswered(false)
        setSelected(null)
        setShowResult(false)
    }

    const resultEmoji = totalCorrect >= 9 ? '🏆' : totalCorrect >= 7 ? '🎉' : totalCorrect >= 5 ? '💪' : '📚'
    const resultTitle = totalCorrect >= 9 ? 'Luar Biasa!' : totalCorrect >= 7 ? 'Bagus!' : totalCorrect >= 5 ? 'Lumayan!' : 'Perlu Belajar Lagi'

    return (
        <section id={data.id} className="px-6 py-12">
            <div className="container mx-auto max-w-4xl">
                <div className="scroll-reveal">
                    <SectionHeader id={data.id} badge={data.badge} title={data.title} />

                    <CardWrapper glow="purple">
                        {showResult ? (
                            /* ── Result screen ── */
                            <div className="text-center py-8">
                                <div className="text-5xl mb-4">{resultEmoji}</div>
                                <h3 className="font-syne font-extrabold text-2xl text-ttext mb-2">{resultTitle}</h3>
                                <p className="text-tmuted2 mb-6">Kamu menjawab benar:</p>
                                <span className="font-syne font-black text-5xl bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent">
                                    {totalCorrect}/{questions.length}
                                </span>

                                {/* Score dots */}
                                <div className="flex gap-2 justify-center mt-6 mb-8 flex-wrap">
                                    {scores.map((correct, i) => (
                                        <div
                                            key={i}
                                            title={`Soal ${ i + 1 }: ${ correct ? 'Benar' : 'Salah' }`}
                                            className={`w-4 h-4 rounded-full ${ correct ? 'bg-tgreen' : 'bg-tred' }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleRestart}
                                    className="bg-[rgba(56,245,212,0.1)] text-tcyan border border-[rgba(56,245,212,0.3)] font-outfit font-semibold px-6 py-3 rounded-xl hover:bg-[rgba(56,245,212,0.2)] transition-colors duration-150"
                                >
                                    Ulangi Quiz →
                                </button>
                            </div>
                        ) : (
                            /* ── Question screen ── */
                            <div>
                                {/* Progress */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-[11px] text-tmuted">
                                        Soal {qIdx + 1} / {questions.length}
                                    </span>
                                    <div className="flex gap-1.5">
                                        {questions.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${ i < scores.length
                                                        ? scores[i] ? 'bg-tgreen' : 'bg-tred'
                                                        : i === qIdx ? 'bg-tcyan' : 'bg-border2'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Question */}
                                <h3 className="font-outfit font-semibold text-base text-ttext leading-relaxed mb-5">
                                    {current.q}
                                </h3>

                                {/* Options */}
                                <div className="flex flex-col gap-3 mb-5">
                                    {current.opts.map((opt, i) => {
                                        let cls = 'bg-surface border-border2 text-tmuted2'
                                        if (answered) {
                                            if (i === current.ans) cls = 'bg-[rgba(74,222,128,0.1)] border-[rgba(74,222,128,0.3)] text-tgreen'
                                            else if (i === selected) cls = 'bg-[rgba(248,113,113,0.1)] border-[rgba(248,113,113,0.3)] text-tred'
                                        } else if (selected === i) {
                                            cls = 'bg-[rgba(56,245,212,0.1)] border-[rgba(56,245,212,0.3)] text-tcyan'
                                        }
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleSelect(i)}
                                                disabled={answered}
                                                className={`w-full text-left text-[13px] font-outfit px-4 py-3 rounded-xl border transition-all duration-150 ${ cls }`}
                                            >
                                                <span className="font-mono text-[11px] mr-2 opacity-60">
                                                    {String.fromCharCode(65 + i)}.
                                                </span>
                                                {opt}
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Explanation */}
                                {answered && (
                                    <div className="bg-[rgba(167,139,250,0.05)] border border-[rgba(167,139,250,0.15)] rounded-xl p-4 mb-5">
                                        <p className="text-[12.5px] text-tmuted2 leading-relaxed">
                                            <span className="text-tpurple font-semibold">Penjelasan: </span>
                                            {current.explain}
                                        </p>
                                    </div>
                                )}

                                {answered && (
                                    <button
                                        onClick={handleNext}
                                        className="bg-[rgba(56,245,212,0.1)] text-tcyan border border-[rgba(56,245,212,0.3)] font-outfit font-semibold px-5 py-2.5 rounded-xl hover:bg-[rgba(56,245,212,0.2)] transition-colors duration-150"
                                    >
                                        {qIdx < questions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil →'}
                                    </button>
                                )}
                            </div>
                        )}
                    </CardWrapper>
                </div>
            </div>
        </section>
    )
}
import { useState } from 'react'

export default function CodeBlock({ lang = 'css', code = '', children }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className="rounded-xl overflow-hidden border border-border1">
            {/* macOS header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-card2 border-b border-border1">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-tred/70" />
                        <span className="w-3 h-3 rounded-full bg-tyellow/70" />
                        <span className="w-3 h-3 rounded-full bg-tgreen/70" />
                    </div>
                    <span className="font-mono text-[11px] text-tmuted tracking-wider uppercase">{lang}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className={`font-mono text-[11px] border rounded px-2.5 py-0.5 transition-colors duration-200 ${ copied
                            ? 'text-tgreen border-tgreen/30 bg-tgreen/5'
                            : 'text-tmuted2 border-border2 hover:text-tcyan hover:border-tcyan/30'
                        }`}
                >
                    {copied ? '✓ Copied' : 'Copy'}
                </button>
            </div>

            {/* Code body */}
            <div className="bg-[#060910] px-5 py-[18px] font-mono text-[12.5px] leading-relaxed overflow-x-auto">
                <pre className="text-ttext">{children}</pre>
            </div>
        </div>
    )
}
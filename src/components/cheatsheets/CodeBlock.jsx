'use client'

import { useState } from 'react'

/**
 * CodeBlock
 * Props:
 *   lang:     string        — label bahasa, e.g. "HTML", "JSX"
 *   code:     string        — raw text yang di-copy ke clipboard
 *   children: React node    — konten dengan <span className="sh-*"> untuk highlight
 */
export default function CodeBlock({ lang = 'CODE', code = '', children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-border1 mt-4">
      {/* Header */}
      <div className="bg-surface px-4 py-2.5 flex items-center justify-between border-b border-border1">
        {/* macOS dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* Language label */}
        <span className="font-mono text-[11px] text-tmuted font-medium">{lang}</span>
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md border transition-all duration-200 cursor-pointer
            ${copied
              ? 'text-tgreen border-tgreen/30'
              : 'text-tmuted2 border-border2 hover:text-tcyan hover:border-tcyan/30'
            }`}
        >
          {copied ? '✓ copied' : 'copy'}
        </button>
      </div>

      {/* Code body */}
      <div className="bg-[#060910] px-5 py-[18px] overflow-x-auto">
        <pre className="font-mono text-[12.5px] leading-relaxed text-tmuted2 whitespace-pre">
          {children}
        </pre>
      </div>
    </div>
  )
}

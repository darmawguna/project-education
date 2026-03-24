'use client'

import { useState }   from 'react'
import CardWrapper    from './CardWrapper'
import SectionHeader  from './SectionHeader'

const items = [
  { text: 'Aku paham kenapa CSS tradisional membuang 80% waktu developer (problem pindah file + naming)', tag: 'Konsep #1 — Mindset' },
  { text: 'Aku bisa menjelaskan perbedaan utility-first vs CSS tradisional dengan analogi sendiri', tag: 'Konsep #1 — Mindset' },
  { text: 'Aku sudah mencoba menyisipkan satu baris CDN di file HTML dan berhasil pakai Tailwind', tag: 'Konsep #2 — Setup CDN' },
  { text: 'Aku tahu kapan pakai CDN (latihan) vs install CLI (produksi)', tag: 'Konsep #2 — Setup CDN' },
  { text: 'Aku hafal bahwa setiap angka Tailwind = kelipatan 4px (p-1=4px, p-4=16px, dst)', tag: 'Konsep #3 — Magic 4' },
  { text: 'Aku bisa menghitung angka Tailwind ke px tanpa kalkulator (contoh: p-12 = 48px)', tag: 'Konsep #3 — Magic 4' },
  { text: 'Aku sudah mencoba membuat komponen sederhana (button/card) menggunakan class Tailwind', tag: 'Praktik Langsung' },
  { text: 'Aku mendapat nilai quiz minimal 7/10 dan siap lanjut ke Seri 2', tag: 'Evaluasi Akhir' },
]

export default function Checklist() {
  const [checked, setChecked] = useState(new Set())

  const toggle = (i) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const pct = items.length > 0 ? (checked.size / items.length) * 100 : 0

  return (
    <section id="checklist">
      <SectionHeader badge="SECTION 06" title="Checklist Pemahaman" />
      <CardWrapper glow="cyan" className="scroll-reveal">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-tcyan/10 flex items-center justify-center text-lg">✅</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">Cek Sebelum Lanjut ke Seri 2</h3>
        </div>
        <p className="text-tmuted2 text-sm mb-5 leading-relaxed">
          Tandai setiap item yang sudah kamu kuasai. Lanjut ke Seri 2 hanya jika semua sudah hijau!
        </p>

        {/* Progress */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[12px] text-tmuted2">
            {checked.size} / {items.length} selesai
          </span>
          <span className="font-mono text-[11px] text-tmuted">klik untuk centang</span>
        </div>
        <div className="bg-border2 h-1.5 rounded-full overflow-hidden mb-6">
          <div
            className="bg-gradient-to-r from-tgreen to-tcyan h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Items */}
        <div className="flex flex-col gap-2.5">
          {items.map((item, i) => {
            const isChecked = checked.has(i)
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`flex items-start gap-3.5 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 border
                  ${isChecked
                    ? 'border-tgreen/25 bg-tgreen/5'
                    : 'bg-surface border-border1 hover:border-border2'
                  }`}
              >
                {/* Checkbox */}
                <div
                  className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center text-xs mt-0.5 transition-all duration-200
                    ${isChecked
                      ? 'border-tgreen bg-tgreen/15 text-tgreen'
                      : 'border-border2 bg-card'
                    }`}
                >
                  {isChecked ? '✓' : ''}
                </div>

                {/* Text */}
                <div>
                  <p className={`text-sm leading-relaxed transition-colors duration-200 ${isChecked ? 'text-ttext' : 'text-tmuted2'}`}>
                    {item.text}
                  </p>
                  <p className="text-[11px] text-tmuted mt-0.5 font-medium">{item.tag}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardWrapper>
    </section>
  )
}

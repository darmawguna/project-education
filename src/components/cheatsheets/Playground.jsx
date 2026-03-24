'use client'

import { useState } from 'react'
import CardWrapper   from './CardWrapper'
import SectionHeader from './SectionHeader'
import CodeBlock     from './CodeBlock'

// ── Spacing Builder ──────────────────────────────────────────────
const padOptions     = [0, 1, 2, 4, 6, 8, 12, 16]
const roundedOptions = ['none', 'sm', 'md', 'xl', 'full']
const bgOptions      = [
  { key: 'blue',   cls: 'bg-blue-500',   hex: '#60a5fa' },
  { key: 'cyan',   cls: 'bg-cyan-400',   hex: '#38f5d4' },
  { key: 'purple', cls: 'bg-purple-500', hex: '#a78bfa' },
  { key: 'green',  cls: 'bg-green-400',  hex: '#4ade80' },
  { key: 'orange', cls: 'bg-orange-400', hex: '#fb923c' },
  { key: 'pink',   cls: 'bg-pink-400',   hex: '#ff6b9d' },
]
const roundedPxMap = { none: '0px', sm: '4px', md: '6px', xl: '12px', full: '9999px' }

// ── Slider ───────────────────────────────────────────────────────
const sliderMax = 16

function toPx(n) { return n * 4 }

// ── Ctrl Button ──────────────────────────────────────────────────
function CtrlBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`font-mono text-[12px] font-semibold px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer
        ${active
          ? 'bg-tcyan/10 text-tcyan border-tcyan/30'
          : 'bg-surface text-tmuted2 border-border2 hover:text-ttext hover:border-border2'
        }`}
    >
      {children}
    </button>
  )
}

// ── Spacing Builder ──────────────────────────────────────────────
function SpacingBuilder() {
  const [pad,     setPad]     = useState(2)
  const [rounded, setRounded] = useState('md')
  const [bg,      setBg]      = useState('cyan')

  const selectedBg = bgOptions.find((b) => b.key === bg)
  const generatedClass = `p-${pad} rounded-${rounded} ${selectedBg.cls}`

  return (
    <CardWrapper glow="purple" className="scroll-reveal">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-tpurple/10 flex items-center justify-center text-lg">🎛️</div>
        <h3 className="font-syne font-bold text-[17px] text-ttext">Spacing Builder — Rasakan Perbedaannya</h3>
      </div>
      <p className="text-tmuted2 text-sm mb-5 leading-relaxed">
        Atur padding, rounded, dan warna dengan tombol di bawah. Lihat perubahan real-time dan class Tailwind yang ter-generate.
      </p>

      {/* Controls */}
      <div className="space-y-4">
        <div>
          <p className="font-mono text-[10px] text-tmuted uppercase tracking-widest mb-2">// atur padding</p>
          <div className="flex flex-wrap gap-2">
            {padOptions.map((p) => (
              <CtrlBtn key={p} active={pad === p} onClick={() => setPad(p)}>p-{p}</CtrlBtn>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] text-tmuted uppercase tracking-widest mb-2">// atur border-radius</p>
          <div className="flex flex-wrap gap-2">
            {roundedOptions.map((r) => (
              <CtrlBtn key={r} active={rounded === r} onClick={() => setRounded(r)}>rounded-{r}</CtrlBtn>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] text-tmuted uppercase tracking-widest mb-2">// atur background</p>
          <div className="flex flex-wrap gap-2">
            {bgOptions.map((b) => (
              <CtrlBtn key={b.key} active={bg === b.key} onClick={() => setBg(b.key)}>{b.cls}</CtrlBtn>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-5 bg-[#060910] border border-border1 rounded-xl min-h-[80px] flex items-center justify-center p-6">
        <div
          style={{
            padding:       `${toPx(pad)}px`,
            borderRadius:  roundedPxMap[rounded],
            background:    selectedBg.hex,
            color:         '#080b14',
            fontFamily:    'JetBrains Mono, monospace',
            fontSize:      '13px',
            fontWeight:    700,
            transition:    'all .3s',
          }}
        >
          Elemen Demo
        </div>
      </div>

      {/* Generated class */}
      <div className="mt-3">
        <p className="font-mono text-[10px] text-tmuted mb-1.5">// class yang ter-generate</p>
        <div className="bg-[#060910] border border-border1 rounded-lg px-4 py-3 font-mono text-[12px] text-tmuted2">
          class=&quot;<span className="text-tcyan">{generatedClass}</span>&quot;
        </div>
      </div>
    </CardWrapper>
  )
}

// ── Magic 4 Calculator ───────────────────────────────────────────
function Magic4Calculator() {
  const [val, setVal] = useState(4)
  const px = toPx(val)

  return (
    <CardWrapper glow="cyan" className="scroll-reveal mt-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-tcyan/10 flex items-center justify-center text-lg">🔢</div>
        <h3 className="font-syne font-bold text-[17px] text-ttext">Kalkulator Magic-4 Interaktif</h3>
      </div>
      <p className="text-tmuted2 text-sm mb-5 leading-relaxed">
        Geser slider untuk melihat konversi angka Tailwind → pixel secara real-time. Rasakan pola kelipatan 4 secara visual.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-tmuted2 text-sm">Nilai spacing:</span>
          <span className="font-mono text-[14px] font-semibold text-tcyan">p-{val}</span>
        </div>

        <input
          type="range"
          min={0}
          max={sliderMax}
          step={1}
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="w-full"
        />

        <div
          className="flex items-center justify-center bg-tcyan/[0.08] border border-dashed border-tcyan/25 rounded-xl font-mono text-[12px] text-tcyan font-semibold transition-all duration-300"
          style={{ height: `${Math.max(px, 28) + 16}px` }}
        >
          padding: {px}px
        </div>

        <div className="bg-[#060910] border border-border1 rounded-lg px-4 py-3 font-mono text-[12px] text-tmuted2">
          <span className="text-tyellow">p-{val}</span>
          {' '}→{' '}
          <span className="text-torange">padding: {px}px</span>
          {' '}
          <span className="text-[#3d5070] italic">({val} × 4px)</span>
        </div>
      </div>
    </CardWrapper>
  )
}

// ── Selectable Component Preview ─────────────────────────────────
const components = [
  {
    icon: '🔘', label: 'Button', sub: 'Tombol aksi',
    desc: 'Tombol dengan padding, warna, rounded, dan shadow. Semua dikontrol utility class tanpa CSS tambahan.',
    codeRaw: `<button class="bg-blue-600 hover:bg-blue-700
       text-white font-bold py-2 px-4
       rounded-lg shadow-md
       transition-all duration-200">
  Klik Aku
</button>`,
  },
  {
    icon: '🃏', label: 'Card', sub: 'Kartu konten',
    desc: 'Kartu konten dengan background, border, padding, dan rounded. Tidak butuh satu baris CSS custom.',
    codeRaw: `<div class="bg-white rounded-xl shadow-lg
     p-6 max-w-sm border border-gray-100">
  <h2 class="text-xl font-bold mb-2">Judul</h2>
  <p class="text-gray-500 text-sm">Deskripsi...</p>
</div>`,
  },
  {
    icon: '🏷️', label: 'Badge', sub: 'Label status',
    desc: 'Label status kecil. Cukup dengan text-xs, padding mini, rounded-full, dan warna background.',
    codeRaw: `<span class="bg-green-100 text-green-700
       text-xs font-semibold
       px-2.5 py-0.5 rounded-full">
  Aktif
</span>`,
  },
  {
    icon: '📢', label: 'Alert', sub: 'Notifikasi',
    desc: 'Kotak notifikasi informatif dengan icon dan pesan. Semua styling dilakukan via utility class.',
    codeRaw: `<div class="bg-yellow-50 border border-yellow-200
     text-yellow-800 px-4 py-3
     rounded-lg flex items-center gap-3">
  <span>⚠️</span>
  <p class="text-sm">Perhatian!</p>
</div>`,
  },
]

function ComponentPicker() {
  const [selected, setSelected] = useState(null)

  return (
    <CardWrapper glow="purple" className="scroll-reveal mt-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-tpurple/10 flex items-center justify-center text-lg">🎨</div>
        <h3 className="font-syne font-bold text-[17px] text-ttext">Pilih Komponen — Lihat Kode Tailwindnya</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {components.map((c, i) => (
          <div
            key={c.label}
            onClick={() => setSelected(i)}
            className={`bg-surface border rounded-xl px-3 py-4 cursor-pointer text-center transition-all duration-200
              ${selected === i
                ? 'border-tcyan bg-tcyan/[0.07]'
                : 'border-border1 hover:border-border2'
              }`}
          >
            <div className="text-xl mb-2">{c.icon}</div>
            <div className="font-mono text-[12px] font-semibold text-ttext">{c.label}</div>
            <div className="text-[11px] text-tmuted mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>

      {selected !== null ? (
        <div className="bg-surface border border-border1 rounded-xl p-5">
          <p className="font-syne font-bold text-[15px] text-tcyan mb-2">{components[selected].label}</p>
          <p className="text-tmuted2 text-[13.5px] leading-relaxed mb-4">{components[selected].desc}</p>
          <CodeBlock lang="HTML + Tailwind" code={components[selected].codeRaw}>
            <span className="text-ttext">{components[selected].codeRaw}</span>
          </CodeBlock>
        </div>
      ) : (
        <div className="bg-surface border border-border1 rounded-xl p-5">
          <p className="font-syne font-bold text-[15px] text-tcyan mb-1">👆 Pilih komponen di atas</p>
          <p className="text-tmuted2 text-[13.5px]">Klik salah satu untuk melihat kode Tailwind-nya beserta deskripsi.</p>
        </div>
      )}
    </CardWrapper>
  )
}

// ── Export ───────────────────────────────────────────────────────
export default function Playground() {
  return (
    <section id="playground">
      <SectionHeader badge="SECTION 04" title="Playground Interaktif" />
      <SpacingBuilder />
      <Magic4Calculator />
      <ComponentPicker />
    </section>
  )
}

import CardWrapper   from '../CardWrapper'
import SectionHeader from '../SectionHeader'
import CodeBlock     from '../CodeBlock'

const spacingData = [
  { cls: 'p-0',  px: 0  },
  { cls: 'p-1',  px: 4  },
  { cls: 'p-2',  px: 8  },
  { cls: 'p-3',  px: 12 },
  { cls: 'p-4',  px: 16 },
  { cls: 'p-6',  px: 24 },
  { cls: 'p-8',  px: 32 },
  { cls: 'p-12', px: 48 },
  { cls: 'p-16', px: 64 },
]

const MAX_PX = 64

const magicRaw = `/* Rumus: angka × 4 = px */

p-0  → padding: 0px    /* 0 × 4 */
p-1  → padding: 4px    /* 1 × 4 */
p-2  → padding: 8px    /* 2 × 4 */
p-3  → padding: 12px   /* 3 × 4 */
p-4  → padding: 16px   /* 4 × 4 */
p-6  → padding: 24px   /* 6 × 4 */
p-8  → padding: 32px   /* 8 × 4 */
p-12 → padding: 48px   /* 12 × 4 */
p-16 → padding: 64px   /* 16 × 4 */

/* Berlaku juga untuk: m- w- h- gap- rounded- dll */`

export default function SectionMagic4() {
  return (
    <section id="magic4">
      <SectionHeader badge="SECTION 03" title='The Magic 4 — Sistem Angka Tailwind' />

      <CardWrapper glow="cyan" className="scroll-reveal">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-tcyan/10 flex items-center justify-center text-lg">🔢</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">Semua Angka = Kelipatan 4px</h3>
        </div>

        <p className="text-tmuted2 text-sm leading-relaxed mb-6">
          Ini adalah "bahasa rahasia" Tailwind. Setiap angka spacing merepresentasikan kelipatan 4px.
          Hafal pola ini, kamu tidak perlu hitung manual lagi selamanya.
        </p>

        {/* Visual spacing bars */}
        <div className="space-y-2.5 mb-6">
          {spacingData.map((d) => {
            const barW = MAX_PX > 0 ? (d.px / MAX_PX) * 260 : 0
            const boxSize = Math.max(d.px, 18) + 8
            return (
              <div key={d.cls} className="flex items-center gap-3.5">
                {/* Class label */}
                <span className="font-mono text-[12px] text-tcyan font-semibold w-12 flex-shrink-0">
                  {d.cls}
                </span>

                {/* Bar */}
                <div className="flex items-center gap-2.5 flex-1">
                  {d.px > 0 && (
                    <div
                      className="h-[22px] rounded-md bg-gradient-to-r from-tcyan to-tpurple opacity-80"
                      style={{ width: `${barW}px`, minWidth: '4px' }}
                    />
                  )}
                  <span className="font-mono text-[11px] text-tmuted2 w-12">{d.px}px</span>
                </div>

                {/* Box demo */}
                <div
                  className="flex-shrink-0 bg-tcyan/[0.08] border border-dashed border-tcyan/25 rounded-md flex items-center justify-center font-mono text-[10px] text-tcyan"
                  style={{ width: `${boxSize}px`, height: `${Math.max(d.px, 18) + 4}px` }}
                >
                  {d.px}
                </div>
              </div>
            )
          })}
        </div>

        {/* Analogy */}
        <div className="bg-tyellow/5 border border-tyellow/15 rounded-xl px-5 py-4 mb-5">
          <p className="font-mono text-[10px] font-semibold text-tyellow tracking-widest mb-2">
            💡 ANALOGI PENGGARIS
          </p>
          <p className="text-tmuted2 text-sm leading-relaxed">
            Bayangkan penggaris dengan satuan 4mm.{' '}
            <span className="text-tyellow font-semibold">p-1 = 1 ruas (4px), p-4 = 4 ruas (16px)</span>.
            Karena semua pakai satuan yang sama, hasilnya otomatis konsisten — seperti LEGO yang
            selalu pas dipasang satu sama lain.
          </p>
        </div>

        {/* Code reference */}
        <CodeBlock lang="Cheat — Konversi Angka" code={magicRaw}>
          <span className="sh-cm">{'/* Rumus: angka × 4 = px */'}</span>{'\n\n'}
          {spacingData.map((d) => (
            <span key={d.cls}>
              <span className="sh-sel">{d.cls.padEnd(5)}</span>
              {'→ '}
              <span className="sh-val">{`padding: ${d.px}px`.padEnd(17)}</span>
              <span className="sh-cm">{`/* ${d.cls.replace('p-','') || '0'} × 4 */`}</span>
              {'\n'}
            </span>
          ))}
          {'\n'}
          <span className="sh-cm">{'/* Berlaku juga untuk: m- w- h- gap- rounded- dll */'}</span>
        </CodeBlock>
      </CardWrapper>
    </section>
  )
}

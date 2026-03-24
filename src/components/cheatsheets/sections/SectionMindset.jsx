import CardWrapper   from '../CardWrapper'
import SectionHeader from '../SectionHeader'
import CodeBlock     from '../CodeBlock'

// ── Comparison table ─────────────────────────────────────────────
const rows = [
  {
    old: 'Buka style.css → pikirkan nama class',
    new: 'Tulis class langsung di HTML — selesai',
  },
  {
    old: 'Nama class: .card-wrapper-inner-top',
    new: 'Tidak ada nama class buatan sendiri',
  },
  {
    old: 'Pindah file bolak-balik = waktu terbuang',
    new: 'Tidak pernah meninggalkan file HTML',
  },
  {
    old: 'CSS menumpuk, makin susah di-maintain',
    new: 'Setiap elemen self-contained & jelas',
  },
]

export default function SectionMindset() {
  return (
    <section id="mindset">
      <SectionHeader badge="SECTION 01" title="Mindset: Utility-First" />

      {/* Card 1 — The Problem */}
      <CardWrapper glow="cyan" className="scroll-reveal">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-tcyan/10 flex items-center justify-center text-lg">😵</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">Masalah: The File-Switching Tax</h3>
        </div>

        <p className="text-tmuted2 text-sm leading-relaxed mb-5">
          Bayangkan kamu sedang masak — tapi setiap kali mau tambah bumbu, kamu harus keluar dapur,
          naik motor, beli bumbu di pasar, baru balik lagi. Itulah cara kerja CSS tradisional.
          Tailwind menghapus perjalanan itu sepenuhnya.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-border1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border1">
                <th className="font-mono text-[11px] font-semibold text-tmuted text-left px-4 py-2.5 uppercase tracking-wider">
                  Cara Lama (CSS Tradisional)
                </th>
                <th className="font-mono text-[11px] font-semibold text-tmuted text-left px-4 py-2.5 uppercase tracking-wider">
                  Cara Tailwind
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border1/50 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 text-tred text-[13px]">{r.old}</td>
                  <td className="px-4 py-3 text-tgreen text-[13px]">{r.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analogy box */}
        <div className="mt-5 bg-tyellow/5 border border-tyellow/15 rounded-xl px-5 py-4">
          <p className="font-mono text-[10px] font-semibold text-tyellow tracking-widest mb-2">
            💡 PARETO FACT
          </p>
          <p className="text-tmuted2 text-sm leading-relaxed">
            <span className="text-tyellow font-semibold">80% waktu developer</span> terbuang hanya untuk
            pindah file dan memikirkan nama class. Tailwind menghapus kedua masalah itu sekaligus.
            Hasilnya? Website selesai jauh lebih cepat.
          </p>
        </div>
      </CardWrapper>

      {/* Card 2 — Utility First Explained */}
      <CardWrapper glow="purple" className="scroll-reveal mt-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-tpurple/10 flex items-center justify-center text-lg">🧠</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">Apa Itu Utility-First?</h3>
        </div>

        <p className="text-tmuted2 text-sm leading-relaxed mb-5">
          Setiap class punya{' '}
          <span className="text-tpurple font-semibold">satu tugas spesifik</span>.
          Kamu "menyusun" tampilan dengan menggabungkan banyak class kecil — bukan menulis
          CSS besar di file terpisah.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Old way */}
          <div>
            <p className="font-mono text-[11px] text-tred mb-2">❌ CSS TRADISIONAL</p>
            <CodeBlock
              lang="CSS"
              code={`.kartu {\n  background: #ffffff;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,.1);\n}\n\n/* index.html */\n<div class="kartu">...</div>`}
            >
              <span className="sh-cm">{'/* style.css */'}</span>{'\n'}
              <span className="sh-sel">.kartu</span>{' {\n'}
              {'  '}<span className="sh-prop">background</span>{': '}<span className="sh-val">#ffffff</span>{';\n'}
              {'  '}<span className="sh-prop">padding</span>{': '}<span className="sh-val">16px</span>{';\n'}
              {'  '}<span className="sh-prop">border-radius</span>{': '}<span className="sh-val">8px</span>{';\n'}
              {'  '}<span className="sh-prop">box-shadow</span>{': '}<span className="sh-val">0 2px 8px rgba(0,0,0,.1)</span>{';\n'}
              {'}\n\n'}
              <span className="sh-cm">{'/* index.html */'}</span>{'\n'}
              <span className="sh-tag">{'<div'}</span>{' '}<span className="sh-prop">class</span>{'='}<span className="sh-str">"kartu"</span><span className="sh-tag">{'>'}</span>{'...'}<span className="sh-tag">{'</div>'}</span>
            </CodeBlock>
          </div>

          {/* Tailwind way */}
          <div>
            <p className="font-mono text-[11px] text-tgreen mb-2">✅ TAILWIND</p>
            <CodeBlock
              lang="HTML"
              code={`/* Tidak perlu file CSS! */\n\n<div class="bg-white p-4\n       rounded-lg shadow-md">\n  ...\n</div>`}
            >
              <span className="sh-cm">{'/* Tidak perlu file CSS! */'}</span>{'\n'}
              <span className="sh-cm">{'/* Semua langsung di HTML: */'}</span>{'\n\n'}
              <span className="sh-tag">{'<div'}</span>{' '}<span className="sh-prop">class</span>{'='}<span className="sh-str">"bg-white p-4{'\n'}       rounded-lg shadow-md"</span><span className="sh-tag">{'>'}</span>{'\n'}
              {'  ...\n'}
              <span className="sh-tag">{'</div>'}</span>{'\n\n'}
              <span className="sh-cm">{'/* Selesai. Tidak perlu file CSS. */'}</span>
            </CodeBlock>
          </div>
        </div>
      </CardWrapper>
    </section>
  )
}

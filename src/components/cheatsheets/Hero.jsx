/**
 * Hero
 * Stats otomatis dihitung dari konten materi Seri 1:
 *   - 3 Konsep Inti, 1 Baris Setup, 10 Soal Quiz, 8 Item Checklist
 */

const stats = [
  { num: '3',  label: 'Konsep Inti' },
  { num: '1',  label: 'Baris Setup' },
  { num: '10', label: 'Soal Quiz' },
  { num: '8',  label: 'Item Checklist' },
]

export default function Hero() {
  return (
    <section className="text-center py-16 md:py-24">
      {/* Badge */}
      <div className="animate-fade-up inline-block font-mono text-xs text-tcyan border border-tcyan/30 bg-tcyan/[0.06] rounded-full px-4 py-1.5 mb-7 tracking-wider">
        // SERI 1 — THE CORE CONCEPT &amp; QUICK START
      </div>

      {/* H1 */}
      <h1 className="animate-fade-up-1 font-syne font-black text-5xl md:text-7xl leading-tight bg-gradient-to-br from-white via-tcyan to-tpurple bg-clip-text text-transparent mb-5">
        Tailwind CSS<br />The 20% Theory
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up-2 text-tmuted2 text-lg max-w-xl mx-auto mb-12">
        Kuasai mindset utility-first yang dipakai 80% developer industri.
        Stop menulis CSS manual — mulai menyusun class langsung di HTML.
      </p>

      {/* Stats */}
      <div className="animate-fade-up-3 flex justify-center gap-4 flex-wrap">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border1 rounded-2xl px-8 py-5 text-center hover:border-border2 transition-all duration-200"
          >
            <div className="font-syne font-extrabold text-4xl bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="text-[12px] text-tmuted mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

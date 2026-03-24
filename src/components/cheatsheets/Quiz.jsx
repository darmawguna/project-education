'use client'

import { useState } from 'react'
import CardWrapper   from './CardWrapper'
import SectionHeader from './SectionHeader'

// ── Quiz Data ────────────────────────────────────────────────────
const questions = [
  {
    q: 'Apa masalah utama yang dipecahkan oleh Tailwind CSS menurut Pareto Fact di Seri 1?',
    opts: [
      'Website menjadi terlalu lambat karena terlalu banyak CSS',
      '80% waktu developer terbuang untuk pindah file dan memikirkan nama class',
      'Browser tidak bisa membaca CSS modern',
      'File HTML menjadi terlalu besar ukurannya',
    ],
    ans: 1,
    explain:
      'Pareto Fact: 80% waktu developer terbuang hanya untuk pindah-pindah file HTML ↔ CSS dan memikirkan nama class seperti .card-wrapper-inner.',
  },
  {
    q: 'Apa itu pendekatan "utility-first" dalam Tailwind CSS?',
    opts: [
      'Menulis satu class besar yang mengatur semua style sekaligus',
      'Menggunakan framework JavaScript untuk styling',
      'Setiap class memiliki satu tugas spesifik, tampilan dibentuk dengan menggabungkan banyak class kecil',
      'Membuat file CSS terpisah untuk setiap komponen',
    ],
    ans: 2,
    explain:
      'Utility-first artinya setiap class punya satu tugas (contoh: p-4 hanya mengatur padding 16px). Tampilan dibentuk dengan menyusun banyak class kecil langsung di HTML.',
  },
  {
    q: 'Baris kode apakah yang dibutuhkan untuk mengaktifkan Tailwind CSS via Play CDN?',
    opts: [
      '<link rel="stylesheet" href="tailwind.css">',
      '<script src="https://cdn.tailwindcss.com"></script>',
      'npm install tailwindcss',
      '@import "tailwindcss/base"',
    ],
    ans: 1,
    explain:
      'Untuk latihan, cukup tambahkan <script src="https://cdn.tailwindcss.com"></script> di dalam tag <head>. Satu baris ini mengaktifkan semua fitur Tailwind.',
  },
  {
    q: 'Berapa nilai pixel dari class "p-4" dalam sistem Tailwind?',
    opts: ['4px', '8px', '12px', '16px'],
    ans: 3,
    explain:
      'Rumus Magic 4: angka × 4 = px. Jadi p-4 = 4 × 4 = 16px. Ini adalah padding 16px di semua sisi elemen.',
  },
  {
    q: 'Berapa nilai pixel dari class "p-12" dalam Tailwind?',
    opts: ['12px', '24px', '48px', '60px'],
    ans: 2,
    explain:
      'p-12 = 12 × 4 = 48px. Ingat selalu rumus: angka × 4 = px untuk semua utility spacing di Tailwind.',
  },
  {
    q: 'Apa keunggulan utama menulis style langsung di HTML dengan Tailwind?',
    opts: [
      'File HTML menjadi lebih kecil ukurannya',
      'Kita tidak perlu pindah file sehingga proses development lebih cepat',
      'Browser memproses HTML lebih cepat dari CSS',
      'Hanya HTML yang didukung semua browser modern',
    ],
    ans: 1,
    explain:
      'Keunggulan terbesar utility-first: kita tidak pernah meninggalkan file HTML. Tidak ada lagi proses bolak-balik membuka style.css dan memikirkan nama class.',
  },
  {
    q: 'Kapan sebaiknya kamu menggunakan Play CDN vs instalasi CLI (npm)?',
    opts: [
      'CDN untuk proyek besar, CLI untuk latihan',
      'Keduanya sama saja, tidak ada bedanya',
      'CDN untuk latihan/prototyping, CLI untuk proyek produksi',
      'CDN hanya untuk versi gratis Tailwind',
    ],
    ans: 2,
    explain:
      'Play CDN cocok untuk latihan dan belajar karena tidak perlu instalasi. Untuk proyek nyata/produksi, gunakan CLI agar dapat tree-shaking — CSS yang dihasilkan jauh lebih kecil.',
  },
  {
    q: 'Class "rounded-full" di Tailwind menghasilkan border-radius berapa?',
    opts: ['4px', '8px', '50%', '9999px — membuat bentuk pil atau lingkaran'],
    ans: 3,
    explain:
      'rounded-full menghasilkan border-radius: 9999px, yang praktis untuk membuat bentuk pil (pill shape) atau lingkaran pada elemen persegi.',
  },
  {
    q: 'Jika kamu ingin padding 32px di semua sisi, class Tailwind mana yang tepat?',
    opts: ['p-32', 'p-8', 'padding-32', 'p-6'],
    ans: 1,
    explain:
      'p-8 = 8 × 4 = 32px. Jangan bingung dengan p-32 yang berarti 32 × 4 = 128px — itu terlalu besar! Selalu ingat rumus angka × 4.',
  },
  {
    q: 'Manakah yang BUKAN keunggulan pendekatan utility-first Tailwind?',
    opts: [
      'Tidak perlu memikirkan nama class',
      'Style langsung terlihat di HTML tanpa buka file lain',
      'CSS yang dihasilkan selalu lebih kecil dari CSS biasa di semua kondisi',
      'Konsistensi spacing terjaga karena sistem angka yang terstandarisasi',
    ],
    ans: 2,
    explain:
      'Saat menggunakan CDN, semua class Tailwind dimuat sehingga file CSS bisa besar. Keunggulan "CSS lebih kecil" hanya berlaku saat menggunakan CLI dengan tree-shaking — bukan di semua kondisi.',
  },
]

const LABELS = ['A', 'B', 'C', 'D']

function resultMeta(score) {
  if (score >= 9) return { emoji: '🏆', title: 'Master Tailwind Seri 1!' }
  if (score >= 7) return { emoji: '🎉', title: 'Bagus Banget!' }
  if (score >= 5) return { emoji: '😊', title: 'Cukup Lumayan' }
  return { emoji: '💪', title: 'Perlu Belajar Lagi' }
}

export default function Quiz() {
  const [qIdx,       setQIdx]       = useState(0)
  const [scores,     setScores]     = useState([])   // true | false per soal
  const [answered,   setAnswered]   = useState(false)
  const [selected,   setSelected]   = useState(null)
  const [showResult, setShowResult] = useState(false)

  const q = questions[qIdx]

  const handleAnswer = (i) => {
    if (answered) return
    const correct = i === q.ans
    setSelected(i)
    setAnswered(true)
    setScores((prev) => [...prev, correct])
  }

  const handleNext = () => {
    if (qIdx + 1 >= questions.length) {
      setShowResult(true)
    } else {
      setQIdx((prev) => prev + 1)
      setAnswered(false)
      setSelected(null)
    }
  }

  const handleRestart = () => {
    setQIdx(0)
    setScores([])
    setAnswered(false)
    setSelected(null)
    setShowResult(false)
  }

  const totalCorrect = scores.filter(Boolean).length

  return (
    <section id="quiz">
      <SectionHeader badge="SECTION 05" title="Quiz — Uji Pemahamanmu" />
      <CardWrapper glow="purple" className="scroll-reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-tpurple/10 flex items-center justify-center text-lg">🧠</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">10 Soal — Tailwind Seri 1</h3>
        </div>

        {showResult ? (
          /* ── Result Screen ── */
          <div className="text-center py-8">
            <div className="text-5xl mb-4">{resultMeta(totalCorrect).emoji}</div>
            <div className="font-syne font-extrabold text-2xl text-ttext mb-2">
              {resultMeta(totalCorrect).title}
            </div>
            <div className="font-syne font-extrabold text-4xl bg-gradient-to-r from-tcyan to-tpurple bg-clip-text text-transparent mb-6">
              {totalCorrect} / 10
            </div>
            <p className="text-tmuted2 text-sm mb-8">
              {totalCorrect >= 7
                ? 'Kamu siap lanjut ke Seri 2! Jangan lupa centang checklist.'
                : 'Review materi lagi dan coba quiz sekali lagi untuk memastikan pemahamanmu kuat.'}
            </p>
            <button
              onClick={handleRestart}
              className="font-outfit font-semibold text-sm px-7 py-2.5 rounded-xl cursor-pointer bg-gradient-to-r from-tcyan to-tpurple text-bg border-none transition-opacity hover:opacity-85"
            >
              🔄 Ulangi Quiz
            </button>
          </div>
        ) : (
          <>
            {/* ── Score Dots ── */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {questions.map((_, i) => {
                const s = scores[i]
                return (
                  <div
                    key={i}
                    className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-300
                      ${s === true  ? 'bg-tgreen/20  border-tgreen  text-tgreen'
                      : s === false ? 'bg-tred/20    border-tred    text-tred'
                      : 'bg-border2 border-border1'}`}
                  >
                    {s === true ? '✓' : s === false ? '✗' : ''}
                  </div>
                )
              })}
            </div>

            {/* ── Counter ── */}
            <p className="font-mono text-[12px] text-tmuted mb-4">
              Soal {qIdx + 1} / {questions.length}
            </p>

            {/* ── Question ── */}
            <p className="font-syne font-bold text-[17px] text-ttext leading-snug mb-5">
              {q.q}
            </p>

            {/* ── Options ── */}
            <div className="flex flex-col gap-2.5">
              {q.opts.map((opt, i) => {
                let optClass = 'bg-surface border border-border1 hover:border-border2 hover:text-ttext'
                if (answered) {
                  if (i === q.ans)               optClass = 'border-tgreen bg-tgreen/[0.07] text-tgreen'
                  else if (i === selected)        optClass = 'border-tred   bg-tred/[0.07]   text-tred'
                  else                            optClass = 'bg-surface border border-border1 opacity-50'
                }
                return (
                  <div
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`rounded-xl px-4 py-3 cursor-pointer flex items-start gap-3 text-sm text-tmuted2 transition-all duration-200 ${optClass}`}
                  >
                    <span
                      className={`font-mono text-[11px] font-bold rounded-md px-1.5 py-0.5 flex-shrink-0 mt-0.5
                        ${answered && i === q.ans  ? 'bg-tgreen/15 text-tgreen'
                        : answered && i === selected && i !== q.ans ? 'bg-tred/15 text-tred'
                        : 'bg-tcyan/10 text-tcyan'}`}
                    >
                      {LABELS[i]}
                    </span>
                    <span>{opt}</span>
                  </div>
                )
              })}
            </div>

            {/* ── Feedback ── */}
            {answered && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-[13.5px] leading-relaxed
                  ${scores[scores.length - 1]
                    ? 'bg-tgreen/[0.08] border border-tgreen/20 text-tgreen'
                    : 'bg-tred/[0.08]   border border-tred/20   text-tred'
                  }`}
              >
                <span className="font-bold">{scores[scores.length - 1] ? '✅ Benar! ' : '❌ Salah. '}</span>
                {q.explain}
              </div>
            )}

            {/* ── Next Button ── */}
            {answered && (
              <button
                onClick={handleNext}
                className="mt-4 font-outfit font-semibold text-sm px-5 py-2.5 rounded-xl cursor-pointer bg-gradient-to-r from-tcyan/15 to-tpurple/15 border border-tcyan/25 text-tcyan hover:from-tcyan/25 hover:to-tpurple/25 transition-all duration-200"
              >
                {qIdx + 1 >= questions.length ? 'Lihat Hasil →' : 'Soal Berikutnya →'}
              </button>
            )}
          </>
        )}
      </CardWrapper>
    </section>
  )
}

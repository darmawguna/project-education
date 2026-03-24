import CardWrapper   from '../CardWrapper'
import SectionHeader from '../SectionHeader'
import CodeBlock     from '../CodeBlock'

export default function SectionSetup() {
  const cdnRaw = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 🎯 SATU BARIS INI = SEMUA TAILWIND -->
  <script src="https://cdn.tailwindcss.com"></script>

</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">
    Halo Tailwind! 👋
  </h1>
</body>
</html>`

  return (
    <section id="setup">
      <SectionHeader badge="SECTION 02" title="Setup: Play CDN (1 Baris)" />

      <CardWrapper glow="cyan" className="scroll-reveal">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-tcyan/10 flex items-center justify-center text-lg">⚡</div>
          <h3 className="font-syne font-bold text-[17px] text-ttext">Satu Baris = Semua Fitur Tailwind</h3>
        </div>

        <p className="text-tmuted2 text-sm leading-relaxed mb-5">
          Untuk latihan dan prototyping, kamu tidak perlu install apa-apa. Cukup satu baris
          ini di dalam{' '}
          <span className="font-mono text-[12px] text-tcyan bg-tcyan/10 rounded px-1.5 py-0.5">
            {'<head>'}
          </span>{' '}
          dan semua 10.000+ utility class Tailwind siap dipakai.
        </p>

        <CodeBlock lang="HTML — index.html" code={cdnRaw}>
          <span className="sh-tag">{'<!DOCTYPE html>'}</span>{'\n'}
          <span className="sh-tag">{'<html>'}</span>{'\n'}
          <span className="sh-tag">{'<head>'}</span>{'\n'}
          {'  '}<span className="sh-tag">{'<meta'}</span>{' '}<span className="sh-prop">charset</span>{'='}<span className="sh-str">"UTF-8"</span><span className="sh-tag">{'>'}</span>{'\n'}
          {'  '}<span className="sh-tag">{'<meta'}</span>{' '}<span className="sh-prop">name</span>{'='}<span className="sh-str">"viewport"</span>{' '}<span className="sh-prop">content</span>{'='}<span className="sh-str">"width=device-width, initial-scale=1.0"</span><span className="sh-tag">{'>'}</span>{'\n\n'}
          {'  '}<span className="sh-cm">{'<!-- 🎯 SATU BARIS INI = SEMUA TAILWIND -->'}</span>{'\n'}
          {'  '}<span className="sh-tag">{'<script'}</span>{' '}<span className="sh-prop">src</span>{'='}<span className="sh-str">"https://cdn.tailwindcss.com"</span><span className="sh-tag">{'></script>'}</span>{'\n\n'}
          <span className="sh-tag">{'</head>'}</span>{'\n'}
          <span className="sh-tag">{'<body>'}</span>{'\n'}
          {'  '}<span className="sh-tag">{'<h1'}</span>{' '}<span className="sh-prop">class</span>{'='}<span className="sh-str">"text-3xl font-bold text-blue-600"</span><span className="sh-tag">{'>'}</span>{'\n'}
          {'    Halo Tailwind! 👋\n'}
          {'  '}<span className="sh-tag">{'</h1>'}</span>{'\n'}
          <span className="sh-tag">{'</body>'}</span>{'\n'}
          <span className="sh-tag">{'</html>'}</span>
        </CodeBlock>

        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <div className="bg-tcyan/[0.06] border border-tcyan/18 rounded-xl px-4 py-4">
            <p className="font-mono text-[10px] font-semibold text-tcyan mb-2 tracking-widest">✅ COCOK UNTUK</p>
            <p className="text-tmuted2 text-[13.5px] leading-relaxed">
              Latihan harian, mengerjakan tugas, prototyping ide cepat, belajar mandiri.
            </p>
          </div>
          <div className="bg-tyellow/[0.06] border border-tyellow/18 rounded-xl px-4 py-4">
            <p className="font-mono text-[10px] font-semibold text-tyellow mb-2 tracking-widest">⚠️ UNTUK PRODUKSI</p>
            <p className="text-tmuted2 text-[13.5px] leading-relaxed">
              Gunakan instalasi via npm/CLI untuk performa optimal dan tree-shaking CSS.
            </p>
          </div>
        </div>

        {/* Analogy */}
        <div className="mt-5 bg-tyellow/5 border border-tyellow/15 rounded-xl px-5 py-4">
          <p className="font-mono text-[10px] font-semibold text-tyellow tracking-widest mb-2">💡 ANALOGI</p>
          <p className="text-tmuted2 text-sm leading-relaxed">
            CDN ibarat{' '}
            <span className="text-tyellow font-semibold">colokan universal</span> — kamu colok ke
            listrik, langsung bisa pakai semua peralatan. Tidak perlu pasang kabel sendiri dari nol.
          </p>
        </div>
      </CardWrapper>
    </section>
  )
}

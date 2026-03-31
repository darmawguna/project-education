// src/data/cheatsheet/seri-responsive-customization.js
// Seri 2 — Responsive Design & Customization

const cheatsheetData2 = {
  meta: {
    slug: "responsive-customization",
    seriesBadge: "// SERI 2 — RESPONSIVE & CUSTOMIZATION",
    title: "Responsive Design & Customization",
    subtitle: "80% keberhasilan website ditentukan oleh tampilannya di HP dan kekuatan brand identity-nya. Kuasai dua hal ini dengan Tailwind.",
    navTitle: "CSS Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "5" },
      { label: "Class Kunci", value: "20" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    tags: ["Responsive", "Mobile-First", "Breakpoints", "Tailwind Config", "Grid", "Pseudo-Classes"],
  },

  navLinks: [
    { href: "#mobile-first", label: "Mobile-First" },
    { href: "#breakpoints", label: "Breakpoints" },
    { href: "#custom-colors", label: "Custom Colors" },
    { href: "#pseudo-classes", label: "Pseudo-Classes" },
    { href: "#grid", label: "Grid" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  sections: [
    // ─── SECTION 01 ──────────────────────────────────────────────────────────
    {
      id: "mobile-first",
      badge: "SECTION 01",
      title: "Konsep Mobile-First",
      glow: "cyan",
      description:
        "Tailwind didesain dengan filosofi Mobile-First — class tanpa awalan selalu berlaku untuk HP, awalan breakpoint hanya aktif di layar yang lebih besar.",
      analogy:
        "📱 Bayangkan kamu desain kamar kos dulu (HP = ruang kecil), baru desain apartemen (Laptop = ruang besar). Lebih mudah menambah fitur ke ruang besar daripada menyingkat fitur dari ruang besar ke kamar kos.",
      cards: [
        {
          subtitle: "Cara Kerja Mobile-First",
          items: [
            { class: "text-sm", desc: "Teks kecil — berlaku di SEMUA ukuran layar (default mobile)" },
            { class: "md:text-lg", desc: "Teks besar — HANYA aktif di layar ≥768px (tablet ke atas)" },
            { class: "flex-col", desc: "Tumpuk vertikal — default untuk HP (layout sempit)" },
            { class: "md:flex-row", desc: "Berjejer horizontal — aktif mulai tablet ke atas" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Mobile-first: tulis untuk HP dulu, baru tambah md: untuk Laptop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="text-sm md:text-lg font-bold">
    Di HP: kolom + teks kecil
    Di Laptop: baris + teks besar
  </div>
</div>`,
            highlighted: `<span class="sh-cm">&lt;!-- Mobile-first: tulis untuk HP dulu, baru tambah md: untuk Laptop --&gt;</span>
<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"flex flex-col </span><span class="sh-at">md:flex-row</span><span class="sh-str"> gap-4"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-sm </span><span class="sh-at">md:text-lg</span><span class="sh-str"> font-bold"</span><span class="sh-tag">&gt;</span>
    Di HP: kolom + teks kecil
    Di Laptop: baris + teks besar
  <span class="sh-tag">&lt;/div&gt;</span>
<span class="sh-tag">&lt;/div&gt;</span>`,
          },
        },
      ],
    },

    // ─── SECTION 02 ──────────────────────────────────────────────────────────
    {
      id: "breakpoints",
      badge: "SECTION 02",
      title: "The Vital Breakpoints",
      glow: "purple",
      description: "Dari 5 breakpoint Tailwind, cukup kuasai 2 ini untuk menangani 80% kasus responsif di dunia nyata.",
      analogy:
        "🎯 Seperti kamu cukup punya dua ukuran baju: S (HP) dan L (Laptop). Ukuran M bisa dibeli kalau ada acara khusus — tapi dua itu sudah cover hampir semua situasi sehari-hari.",
      cards: [
        {
          subtitle: "Dua Breakpoint Pareto",
          items: [
            { class: "md:", desc: "Medium — aktif di ≥768px (tablet, iPad, laptop kecil)" },
            { class: "lg:", desc: "Large — aktif di ≥1024px (laptop dan desktop)" },
            { class: "sm:", desc: "Small (640px) — jarang dibutuhkan, HP modern sudah masuk md:" },
            { class: "xl:", desc: "Extra Large (1280px) — untuk monitor besar, pakai seperlunya" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Pola Pareto paling sering dipakai -->

<!-- 1. Layout kolom → baris -->
<div class="flex flex-col md:flex-row">...</div>

<!-- 2. Sembunyikan di HP, tampil di Laptop -->
<nav class="hidden md:flex">...</nav>

<!-- 3. Teks adaptif -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">Judul</h1>

<!-- 4. Grid responsif -->
<div class="grid grid-cols-1 md:grid-cols-3">...</div>`,
            highlighted: `<span class="sh-cm">&lt;!-- Pola Pareto paling sering dipakai --&gt;</span>

<span class="sh-cm">&lt;!-- 1. Layout kolom → baris --&gt;</span>
<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"flex flex-col </span><span class="sh-at">md:flex-row</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>...<span class="sh-tag">&lt;/div&gt;</span>

<span class="sh-cm">&lt;!-- 2. Sembunyikan di HP, tampil di Laptop --&gt;</span>
<span class="sh-tag">&lt;nav</span> <span class="sh-prop">class</span>=<span class="sh-str">"hidden </span><span class="sh-at">md:flex</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>...<span class="sh-tag">&lt;/nav&gt;</span>

<span class="sh-cm">&lt;!-- 3. Teks adaptif --&gt;</span>
<span class="sh-tag">&lt;h1</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-2xl </span><span class="sh-at">md:text-4xl</span><span class="sh-str"> </span><span class="sh-at">lg:text-6xl</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>Judul<span class="sh-tag">&lt;/h1&gt;</span>

<span class="sh-cm">&lt;!-- 4. Grid responsif --&gt;</span>
<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"grid grid-cols-1 </span><span class="sh-at">md:grid-cols-3</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>...<span class="sh-tag">&lt;/div&gt;</span>`,
          },
        },
        {
          subtitle: "Pola Visibility Responsif",
          items: [
            { class: "hidden md:block", desc: "Sembunyikan di HP, tampilkan di Tablet/Laptop" },
            { class: "block md:hidden", desc: "Tampilkan di HP saja, sembunyikan di Laptop" },
            { class: "hidden md:flex", desc: "Sembunyikan di HP, tampilkan sebagai flex di Laptop" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Hamburger menu: tampil di HP, sembunyi di Laptop -->
<button class="block md:hidden">☰ Menu</button>

<!-- Nav links: sembunyi di HP, tampil di Laptop -->
<nav class="hidden md:flex gap-6">
  <a href="#">Beranda</a>
  <a href="#">Tentang</a>
</nav>`,
            highlighted: `<span class="sh-cm">&lt;!-- Hamburger menu: tampil di HP, sembunyi di Laptop --&gt;</span>
<span class="sh-tag">&lt;button</span> <span class="sh-prop">class</span>=<span class="sh-str">"block </span><span class="sh-at">md:hidden</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>☰ Menu<span class="sh-tag">&lt;/button&gt;</span>

<span class="sh-cm">&lt;!-- Nav links: sembunyi di HP, tampil di Laptop --&gt;</span>
<span class="sh-tag">&lt;nav</span> <span class="sh-prop">class</span>=<span class="sh-str">"hidden </span><span class="sh-at">md:flex</span><span class="sh-str"> gap-6"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;a</span> <span class="sh-prop">href</span>=<span class="sh-str">"#"</span><span class="sh-tag">&gt;</span>Beranda<span class="sh-tag">&lt;/a&gt;</span>
  <span class="sh-tag">&lt;a</span> <span class="sh-prop">href</span>=<span class="sh-str">"#"</span><span class="sh-tag">&gt;</span>Tentang<span class="sh-tag">&lt;/a&gt;</span>
<span class="sh-tag">&lt;/nav&gt;</span>`,
          },
        },
      ],
    },

    // ─── SECTION 03 ──────────────────────────────────────────────────────────
    {
      id: "custom-colors",
      badge: "SECTION 03",
      title: "Custom Colors & Fonts",
      glow: "cyan",
      description:
        "Buat website terlihat unik dengan warna brand sendiri menggunakan tailwind.config — tidak perlu install Node.js, bisa langsung di script HTML.",
      analogy:
        "🎨 Ini seperti bikin seragam sekolah dengan warna almamater sendiri. Tailwind default itu kayak seragam putih-abu bawaan — fungsional tapi sama semua. Custom config adalah saat kamu jahit warna khas OSIS sendiri.",
      cards: [
        {
          subtitle: "Konfigurasi via Script (Tanpa Node.js)",
          items: [
            { class: "brand-utama", desc: "Nama warna custom yang kamu tentukan sendiri di config" },
            { class: "bg-brand-utama", desc: "Pakai warna custom sebagai background — sama persis dengan bg-blue-500" },
            { class: "text-brand-gelap", desc: "Pakai warna custom untuk teks" },
            { class: "extend: {}", desc: 'Key "extend" artinya: tambahkan ke palette existing, jangan ganti semuanya' },
          ],
          code: {
            lang: "html",
            raw: `<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'brand-utama': '#1da1f2',  // Biru Twitter
          'brand-gelap': '#0f172a',  // Navy gelap
          'brand-aksen': '#f59e0b',  // Kuning aksen
        }
      }
    }
  }
</script>

<!-- Langsung bisa dipakai seperti class Tailwind biasa -->
<button class="bg-brand-utama hover:bg-brand-gelap text-white px-6 py-3 rounded-xl transition">
  Tombol Brand
</button>`,
            highlighted: `<span class="sh-tag">&lt;script&gt;</span>
  <span class="sh-kw">tailwind.config</span> = {
    <span class="sh-prop">theme</span>: {
      <span class="sh-prop">extend</span>: {
        <span class="sh-prop">colors</span>: {
          <span class="sh-str">'brand-utama'</span>: <span class="sh-val">'#1da1f2'</span>,  <span class="sh-cm">// Biru Twitter</span>
          <span class="sh-str">'brand-gelap'</span>: <span class="sh-val">'#0f172a'</span>,  <span class="sh-cm">// Navy gelap</span>
          <span class="sh-str">'brand-aksen'</span>: <span class="sh-val">'#f59e0b'</span>,  <span class="sh-cm">// Kuning aksen</span>
        }
      }
    }
  }
<span class="sh-tag">&lt;/script&gt;</span>

<span class="sh-cm">&lt;!-- Langsung bisa dipakai seperti class Tailwind biasa --&gt;</span>
<span class="sh-tag">&lt;button</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-brand-utama </span><span class="sh-at">hover:bg-brand-gelap</span><span class="sh-str"> text-white px-6 py-3 rounded-xl transition"</span><span class="sh-tag">&gt;</span>
  Tombol Brand
<span class="sh-tag">&lt;/button&gt;</span>`,
          },
        },
      ],
    },

    // ─── SECTION 04 ──────────────────────────────────────────────────────────
    {
      id: "pseudo-classes",
      badge: "SECTION 04",
      title: "Pseudo-Classes Lanjutan",
      glow: "purple",
      description:
        "Selain hover:, ada dua pseudo-class tambahan yang paling sering dipakai di dunia nyata — focus: untuk form dan active: untuk tombol.",
      analogy:
        "🕹️ Hover itu seperti lampu ruangan yang nyala saat kamu masuk. Focus itu seperti spotlight yang menyorot satu pemain saat giliran mereka — penting banget di form agar user tahu sedang isi kolom mana. Active itu reaksi tombol saat dipencet, bukan hanya disentuh.",
      cards: [
        {
          subtitle: "focus: dan active: dalam Praktik",
          items: [
            { class: "focus:outline-none", desc: "Hapus outline default browser yang jelek di input" },
            { class: "focus:border-blue-500", desc: "Ganti border jadi biru saat input sedang aktif (diklik)" },
            { class: "focus:ring-2", desc: "Tambahkan ring (glow effect) saat elemen difokus" },
            { class: "active:scale-95", desc: 'Tombol mengecil 95% saat ditekan — efek "tertekan"' },
            { class: "active:bg-blue-700", desc: "Warna lebih gelap saat tombol ditekan" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Input form yang profesional -->
<input
  type="text"
  placeholder="Email kamu..."
  class="
    w-full px-4 py-2 rounded-xl border border-gray-300
    focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
    transition duration-200
  "
/>

<!-- Tombol dengan efek klik nyata -->
<button class="
  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
  active:scale-95 transition duration-150
  text-white font-semibold px-6 py-3 rounded-xl
">
  Kirim
</button>`,
            highlighted: `<span class="sh-cm">&lt;!-- Input form yang profesional --&gt;</span>
<span class="sh-tag">&lt;input</span>
  <span class="sh-prop">type</span>=<span class="sh-str">"text"</span>
  <span class="sh-prop">placeholder</span>=<span class="sh-str">"Email kamu..."</span>
  <span class="sh-prop">class</span>=<span class="sh-str">"
    w-full px-4 py-2 rounded-xl border border-gray-300
    </span><span class="sh-at">focus:outline-none</span><span class="sh-str"> </span><span class="sh-at">focus:border-blue-500</span><span class="sh-str"> </span><span class="sh-at">focus:ring-2</span><span class="sh-str"> focus:ring-blue-200
    transition duration-200
  "</span>
<span class="sh-tag">/&gt;</span>

<span class="sh-cm">&lt;!-- Tombol dengan efek klik nyata --&gt;</span>
<span class="sh-tag">&lt;button</span> <span class="sh-prop">class</span>=<span class="sh-str">"
  bg-blue-500 </span><span class="sh-at">hover:bg-blue-600</span><span class="sh-str"> </span><span class="sh-at">active:bg-blue-700</span><span class="sh-str">
  </span><span class="sh-at">active:scale-95</span><span class="sh-str"> transition duration-150
  text-white font-semibold px-6 py-3 rounded-xl
"</span><span class="sh-tag">&gt;</span>
  Kirim
<span class="sh-tag">&lt;/button&gt;</span>`,
          },
        },
      ],
    },

    // ─── SECTION 05 ──────────────────────────────────────────────────────────
    {
      id: "grid",
      badge: "SECTION 05",
      title: "Grid Basics",
      glow: "cyan",
      description:
        "Saat Flexbox terasa ribet untuk layout galeri atau portofolio, Grid adalah solusi tercepat — cukup satu baris class untuk layout majalah yang responsif.",
      analogy:
        "🗞️ Flexbox itu kayak antrian orang yang bisa berubah arah. Grid itu kayak tabel di Word — kamu tentukan ada berapa kolom, sisanya otomatis terisi rapi. Untuk bikin galeri foto atau card portofolio, Grid jauh lebih simpel.",
      cards: [
        {
          subtitle: "Grid One-Liner untuk Portfolio",
          items: [
            { class: "grid", desc: "Aktifkan mode grid pada container" },
            { class: "grid-cols-1", desc: "Satu kolom — default untuk HP" },
            { class: "md:grid-cols-2", desc: "Dua kolom — aktif mulai tablet" },
            { class: "md:grid-cols-3", desc: "Tiga kolom — paling umum untuk galeri/portfolio" },
            { class: "lg:grid-cols-4", desc: "Empat kolom — untuk layar desktop besar" },
            { class: "gap-4", desc: "Jarak antar sel grid (berlaku horizontal + vertikal)" },
            { class: "col-span-2", desc: "Satu item memakan 2 kolom (seperti featured post)" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Grid portfolio responsif — 1 baris class untuk semua ukuran layar -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-2xl shadow-lg p-4">Card 1</div>
  <div class="bg-white rounded-2xl shadow-lg p-4">Card 2</div>
  <div class="bg-white rounded-2xl shadow-lg p-4">Card 3</div>
  <div class="bg-white rounded-2xl shadow-lg p-4">Card 4</div>
  <!-- Item otomatis pindah baris sendiri! -->
</div>

<!-- Featured item: ambil 2 kolom -->
<div class="grid grid-cols-2 gap-4">
  <div class="col-span-2 bg-blue-100 rounded-xl p-6">Featured</div>
  <div class="bg-white rounded-xl p-4">Card A</div>
  <div class="bg-white rounded-xl p-4">Card B</div>
</div>`,
            highlighted: `<span class="sh-cm">&lt;!-- Grid portfolio responsif — 1 baris class untuk semua ukuran layar --&gt;</span>
<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"grid grid-cols-1 </span><span class="sh-at">md:grid-cols-2</span><span class="sh-str"> </span><span class="sh-at">lg:grid-cols-3</span><span class="sh-str"> gap-6"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-2xl shadow-lg p-4"</span><span class="sh-tag">&gt;</span>Card 1<span class="sh-tag">&lt;/div&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-2xl shadow-lg p-4"</span><span class="sh-tag">&gt;</span>Card 2<span class="sh-tag">&lt;/div&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-2xl shadow-lg p-4"</span><span class="sh-tag">&gt;</span>Card 3<span class="sh-tag">&lt;/div&gt;</span>
  <span class="sh-cm">&lt;!-- Item otomatis pindah baris sendiri! --&gt;</span>
<span class="sh-tag">&lt;/div&gt;</span>

<span class="sh-cm">&lt;!-- Featured item: ambil 2 kolom --&gt;</span>
<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"grid grid-cols-2 gap-4"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"col-span-2 bg-blue-100 rounded-xl p-6"</span><span class="sh-tag">&gt;</span>Featured<span class="sh-tag">&lt;/div&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-xl p-4"</span><span class="sh-tag">&gt;</span>Card A<span class="sh-tag">&lt;/div&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-xl p-4"</span><span class="sh-tag">&gt;</span>Card B<span class="sh-tag">&lt;/div&gt;</span>
<span class="sh-tag">&lt;/div&gt;</span>`,
          },
        },
      ],
    },
  ],

  // ─── PLAYGROUND ────────────────────────────────────────────────────────────
  playground: {
    id: "playground",
    title: "Playground",
    badge: "PLAYGROUND",
    demos: [
      {
        id: "responsive-layout",
        label: "📱 Responsive Layout",
        description: "Simulasi bagaimana layout berubah berdasarkan breakpoint. Pilih kombinasi class dan lihat hasilnya secara real-time.",
        preview: "flex",
        defaultState: {
          direction: "flex-col",
          justify: "justify-start",
          gap: "gap-4",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "direction",
            label: "Arah Layout (flex-direction)",
            options: ["flex-col", "flex-row", "flex-col-reverse", "flex-row-reverse"],
          },
          {
            type: "toggle-group",
            stateKey: "justify",
            label: "justify-content",
            options: ["justify-start", "justify-center", "justify-between", "justify-end"],
          },
          {
            type: "toggle-group",
            stateKey: "gap",
            label: "Gap",
            options: ["gap-1", "gap-4", "gap-8", "gap-12"],
          },
        ],
      },
      {
        id: "card-states",
        label: "🎛️ Card States",
        description: "Eksperimen efek hover, shadow, dan rounded pada card — fondasi tampilan modern.",
        preview: "card",
        defaultState: {
          rounded: "rounded-2xl",
          shadow: "shadow-lg",
          padding: "p-6",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "rounded",
            label: "Border Radius",
            options: ["rounded-none", "rounded-lg", "rounded-2xl", "rounded-full"],
          },
          {
            type: "toggle-group",
            stateKey: "shadow",
            label: "Shadow",
            options: ["shadow-none", "shadow-sm", "shadow-lg", "shadow-2xl"],
          },
          {
            type: "toggle-group",
            stateKey: "padding",
            label: "Padding",
            options: ["p-2", "p-4", "p-6", "p-10"],
          },
        ],
      },
    ],
  },

  // ─── QUIZ ──────────────────────────────────────────────────────────────────
  quiz: {
    id: "quiz",
    title: "Quiz",
    badge: "QUIZ",
    questions: [
      {
        q: 'Apa yang dimaksud dengan prinsip "Mobile-First" di Tailwind CSS?',
        opts: [
          "Semua class hanya bisa dipakai di HP, bukan di Laptop",
          "Class tanpa awalan berlaku untuk layar terkecil, awalan breakpoint aktif di layar lebih besar",
          "Kamu harus desain di HP fisik sebelum bisa ke Laptop",
          "Tailwind otomatis mendeteksi perangkat yang digunakan user",
        ],
        ans: 1,
        explain:
          'Mobile-First berarti class tanpa awalan (misal: "flex-col") berlaku untuk HP. Kamu menambahkan awalan seperti "md:" hanya jika ingin perilaku berbeda di layar yang lebih besar.',
      },
      {
        q: 'Berapa ukuran layar minimum yang diaktifkan oleh breakpoint "md:"?',
        opts: ["640px", "768px", "1024px", "1280px"],
        ans: 1,
        explain:
          '"md:" (medium) aktif mulai dari lebar layar 768px ke atas — cocok untuk tablet dan laptop kecil. Ini adalah breakpoint paling penting dalam Tailwind.',
      },
      {
        q: "Class mana yang membuat navbar TERSEMBUNYI di HP tapi TERLIHAT di Laptop?",
        opts: ["visible md:invisible", "block md:hidden", "hidden md:flex", "display-none md:display-block"],
        ans: 2,
        explain:
          '"hidden" menyembunyikan elemen di semua ukuran layar (default mobile), lalu "md:flex" mengaktifkannya kembali sebagai flex container mulai dari breakpoint md (768px).',
      },
      {
        q: 'Apa perbedaan antara "flex-col" dan "md:flex-col"?',
        opts: [
          "Keduanya sama saja",
          '"flex-col" berlaku di semua ukuran, "md:flex-col" hanya berlaku mulai 768px',
          '"flex-col" hanya untuk HP, "md:flex-col" hanya untuk Laptop',
          '"md:flex-col" lebih cepat dari "flex-col"',
        ],
        ans: 1,
        explain:
          '"flex-col" tanpa awalan berlaku di semua ukuran layar karena Mobile-First. "md:flex-col" hanya aktif di layar ≥768px. Pola umumnya adalah "flex-col md:flex-row" agar HP tumpuk ke bawah, Laptop berjejer.',
      },
      {
        q: 'Di dalam tailwind.config, apa fungsi key "extend" dalam theme?',
        opts: [
          "Mengganti seluruh palette warna default Tailwind dengan warna baru",
          "Menambahkan warna/nilai baru tanpa menghapus warna default Tailwind",
          "Memperpanjang durasi animasi semua elemen",
          "Mengaktifkan fitur-fitur eksperimental Tailwind",
        ],
        ans: 1,
        explain:
          '"extend" berarti "tambahkan ke yang sudah ada". Warna custom kamu bisa dipakai bersamaan dengan semua warna bawaan Tailwind (blue-500, red-400, dll) tanpa menghapusnya.',
      },
      {
        q: "Setelah mendefinisikan 'brand-utama': '#1da1f2' di tailwind.config, bagaimana cara menggunakannya sebagai background?",
        opts: ["background-color: brand-utama", 'style="background: #1da1f2"', "bg-brand-utama", "color-brand-utama"],
        ans: 2,
        explain:
          'Nama warna custom langsung bisa dipakai seperti warna Tailwind bawaan dengan prefix utility yang sesuai. "bg-" untuk background, "text-" untuk teks, "border-" untuk border.',
      },
      {
        q: 'Pseudo-class "focus:" paling sering digunakan pada elemen apa?',
        opts: ["Gambar dan video", "Heading (h1, h2, h3)", "Input form dan textarea", "Div dan section"],
        ans: 2,
        explain:
          '"focus:" aktif saat elemen sedang aktif/diklik oleh user. Pada input form, ini memberikan feedback visual yang jelas — user tahu sedang mengisi kolom mana. Contoh: focus:border-blue-500.',
      },
      {
        q: 'Apa perbedaan efek "hover:" vs "active:" pada tombol?',
        opts: [
          "Keduanya sama, hanya nama yang berbeda",
          '"hover:" aktif saat kursor di atas tombol, "active:" aktif saat tombol sedang ditekan/diklik',
          '"hover:" untuk desktop, "active:" untuk HP',
          '"active:" lebih kuat dari "hover:" dan menimpa semua style',
        ],
        ans: 1,
        explain:
          '"hover:" aktif saat kursor melayang di atas elemen (belum diklik). "active:" aktif saat elemen sedang ditekan. Kombinasi keduanya membuat tombol terasa natural: berubah warna saat disentuh, lalu "tertekan" saat diklik.',
      },
      {
        q: 'Apa keunggulan "grid grid-cols-1 md:grid-cols-3" dibanding mengatur layout manual?',
        opts: [
          "Lebih cepat loading karena sedikit CSS",
          "Satu baris class otomatis mengatur layout 1 kolom di HP dan 3 kolom di Laptop, item pindah baris sendiri",
          "Grid selalu lebih bagus dari Flexbox untuk semua kasus",
          "Tidak ada keunggulan, hasilnya sama saja dengan cara manual",
        ],
        ans: 1,
        explain:
          "Grid Tailwind mengotomatiskan distribusi item ke kolom-kolom. Kamu tidak perlu hitung manual berapa item per baris — item akan otomatis pindah ke baris baru saat kolom sudah penuh, responsif di semua layar hanya dengan satu baris class.",
      },
      {
        q: 'Class "col-span-2" dalam konteks Grid digunakan untuk apa?',
        opts: [
          "Membuat item bergerak 2 kolom ke kanan",
          "Membuat item memakan lebar 2 kolom sekaligus (seperti featured content)",
          "Membuat 2 kolom baru di dalam item",
          "Mengatur jarak antar 2 kolom",
        ],
        ans: 1,
        explain:
          '"col-span-2" membuat satu item "menelan" 2 kolom — berguna untuk featured post, banner, atau konten yang perlu lebih menonjol dari item lainnya di dalam grid.',
      },
    ],
  },

  // ─── CHECKLIST ─────────────────────────────────────────────────────────────
  checklist: {
    id: "checklist",
    title: "Checklist",
    badge: "CHECKLIST",
    subtitle: "Tandai setiap item yang sudah kamu kuasai. Target: 100%!",
    items: [
      { id: "c1", text: "Saya paham bahwa class tanpa awalan di Tailwind berlaku untuk HP (Mobile-First)" },
      { id: "c2", text: "Saya bisa membuat layout yang berubah dari flex-col (HP) ke flex-row (Laptop) menggunakan md:" },
      { id: "c3", text: "Saya bisa menyembunyikan elemen di HP dan menampilkannya di Laptop menggunakan hidden md:flex" },
      { id: "c4", text: "Saya sudah mencoba mendefinisikan custom color di tailwind.config dan menggunakannya dengan bg- dan text-" },
      { id: "c5", text: "Saya bisa membuat input form dengan efek focus:border dan focus:ring yang profesional" },
      { id: "c6", text: "Saya memahami perbedaan hover: (kursor melayang) vs active: (tombol ditekan)" },
      { id: "c7", text: "Saya bisa membuat grid portofolio responsif dengan grid grid-cols-1 md:grid-cols-3 gap-4" },
      { id: "c8", text: "Saya sudah membuat minimal satu halaman nyata menggunakan materi Seri 2 ini dan mendapat nilai Quiz ≥ 8/10" },
    ],
  },
};

export default cheatsheetData2;

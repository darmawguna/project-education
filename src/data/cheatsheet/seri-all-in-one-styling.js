// src/data/cheatsheet/seri-all-in-one-styling.js
// Semua konten materi ada di sini — komponen tidak perlu diubah untuk seri baru

export const cheatsheetData = {
  meta: {
    slug: "all-in-one-styling",
    seriesBadge: "// SERI 1 — ALL-IN-ONE STYLING",
    title: "Layout, Typography & Beauty",
    subtitle: "Kuasai 20% class Tailwind yang paling sering dipakai untuk membangun 80% tampilan web modern — dari skeleton hingga interaksi halus.",
    navTitle: "CSS Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "3" },
      { label: "Class Kunci", value: "18" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    tags: ["Tailwind CSS", "Layout", "Typography", "Flexbox", "Hover States"],
  },

  navLinks: [
    { href: "#skeleton", label: "Skeleton" },
    { href: "#typography", label: "Typography" },
    { href: "#interaction", label: "Interaction" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  sections: [
    {
      id: "skeleton",
      badge: "SECTION 01",
      title: "Building the Skeleton",
      glow: "cyan",
      description: "Gunakan kombinasi class ini untuk mengatur posisi dan jarak antar elemen apapun di halaman web kamu.",
      analogy:
        '🏗️ Bayangkan layout seperti menyusun furnitur di kamar kos. Flexbox adalah cara kamu menentukan "apakah lemari dan meja berjajar samping (row) atau tumpuk (col)?" — sedangkan padding adalah jarak antara dinding dan furnitur.',
      cards: [
        {
          subtitle: "Flexbox King",
          items: [
            { class: "flex", desc: "Aktifkan mode flexbox pada container" },
            { class: "flex-col", desc: "Tumpuk item ke bawah (vertikal)" },
            { class: "justify-between", desc: "Beri jarak rata antar item (space-between)" },
            { class: "items-center", desc: "Rata tengah secara vertikal" },
          ],
          code: {
            lang: "html",
            raw: `<div class="flex justify-between items-center">
  <span>Logo</span>
  <nav class="flex gap-4">...</nav>
  <button>CTA</button>
</div>`,
            highlighted: `<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"flex justify-between items-center"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;span&gt;</span>Logo<span class="sh-tag">&lt;/span&gt;</span>
  <span class="sh-tag">&lt;nav</span> <span class="sh-prop">class</span>=<span class="sh-str">"flex gap-4"</span><span class="sh-tag">&gt;</span>...<span class="sh-tag">&lt;/nav&gt;</span>
  <span class="sh-tag">&lt;button&gt;</span>CTA<span class="sh-tag">&lt;/button&gt;</span>
<span class="sh-tag">&lt;/div&gt;</span>`,
          },
        },
        {
          subtitle: "The Spacing Duo",
          items: [
            { class: "px-6", desc: "Padding kiri + kanan (horizontal)" },
            { class: "py-4", desc: "Padding atas + bawah (vertikal)" },
            { class: "gap-4", desc: "Jarak antar item di flex/grid — lebih bersih dari margin manual" },
            { class: "container mx-auto", desc: "Konten tetap di tengah layar, tidak melar di monitor besar" },
          ],
          code: {
            lang: "html",
            raw: `<section class="container mx-auto px-6 py-16">
  <div class="flex flex-col gap-4">
    <h1>Judul</h1>
    <p>Isi konten di sini</p>
  </div>
</section>`,
            highlighted: `<span class="sh-tag">&lt;section</span> <span class="sh-prop">class</span>=<span class="sh-str">"container mx-auto px-6 py-16"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"flex flex-col gap-4"</span><span class="sh-tag">&gt;</span>
    <span class="sh-tag">&lt;h1&gt;</span>Judul<span class="sh-tag">&lt;/h1&gt;</span>
    <span class="sh-tag">&lt;p&gt;</span>Isi konten di sini<span class="sh-tag">&lt;/p&gt;</span>
  <span class="sh-tag">&lt;/div&gt;</span>
<span class="sh-tag">&lt;/section&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "typography",
      badge: "SECTION 02",
      title: "Breathing Life",
      glow: "purple",
      description: 'Cara membuat konten terlihat "mahal" dengan usaha minimal — tipografi dan visual yang bikin desainmu naik kelas.',
      analogy:
        "💅 Ini seperti bedain kaos polos biasa vs kaos brand. Bahannya sama-sama kain, tapi detail kecil (jahitan, warna, font) yang bikin harganya beda jauh. text-slate-800 vs text-black itu bedanya cuma subtle, tapi mata langsung ngerasain bedanya.",
      cards: [
        {
          subtitle: "High-End Text",
          items: [
            { class: "text-slate-800", desc: "Warna teks utama — lebih nyaman di mata dibanding #000 pekat" },
            { class: "text-2xl", desc: "Ukuran judul section (1.5rem / 24px)" },
            { class: "font-bold", desc: "Ketebalan teks untuk heading" },
            { class: "leading-relaxed", desc: "Jarak baris yang nyaman untuk paragraf panjang" },
          ],
          code: {
            lang: "html",
            raw: `<h2 class="text-2xl font-bold text-slate-800">
  Judul yang Enak Dibaca
</h2>
<p class="text-slate-600 leading-relaxed">
  Paragraf dengan line-height yang nyaman untuk mata.
</p>`,
            highlighted: `<span class="sh-tag">&lt;h2</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-2xl font-bold text-slate-800"</span><span class="sh-tag">&gt;</span>
  Judul yang Enak Dibaca
<span class="sh-tag">&lt;/h2&gt;</span>
<span class="sh-tag">&lt;p</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-slate-600 leading-relaxed"</span><span class="sh-tag">&gt;</span>
  Paragraf dengan line-height nyaman untuk mata.
<span class="sh-tag">&lt;/p&gt;</span>`,
          },
        },
        {
          subtitle: 'The "Modern App" Look',
          items: [
            { class: "rounded-2xl", desc: "Sudut tumpul yang estetik — signature tampilan modern" },
            { class: "shadow-lg", desc: "Efek melayang (depth) — card terasa terangkat dari halaman" },
            { class: "bg-white", desc: "Background bersih — kontras dengan konten" },
          ],
          code: {
            lang: "html",
            raw: `<div class="bg-white rounded-2xl shadow-lg p-6">
  <h3 class="text-xl font-bold text-slate-800">Card Modern</h3>
  <p class="text-slate-500 leading-relaxed mt-2">
    Kombinasi rounded + shadow = tampilan app premium.
  </p>
</div>`,
            highlighted: `<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-white rounded-2xl shadow-lg p-6"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;h3</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-xl font-bold text-slate-800"</span><span class="sh-tag">&gt;</span>Card Modern<span class="sh-tag">&lt;/h3&gt;</span>
  <span class="sh-tag">&lt;p</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-slate-500 leading-relaxed mt-2"</span><span class="sh-tag">&gt;</span>
    Kombinasi rounded + shadow = tampilan app premium.
  <span class="sh-tag">&lt;/p&gt;</span>
<span class="sh-tag">&lt;/div&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "interaction",
      badge: "SECTION 03",
      title: "The Interaction",
      glow: "cyan",
      description: "20% effort untuk 100% feel — tambahkan hover state dan transisi agar UI terasa hidup dan responsif.",
      analogy:
        '🎮 Bayangkan tombol tanpa hover state itu seperti game tanpa sound effect — fungsional, tapi terasa hampa. hover: + transition adalah "nyawa" dari sebuah tombol. Ini yang bikin perbedaan antara website 2010 vs 2024.',
      cards: [
        {
          subtitle: "State Handler & Smoothing",
          items: [
            { class: "hover:bg-blue-600", desc: "Ubah warna background saat kursor masuk" },
            { class: "hover:scale-105", desc: 'Perbesar elemen sedikit saat hover (efek "lift")' },
            { class: "transition", desc: "Aktifkan animasi transisi (default: all 150ms ease)" },
            { class: "duration-300", desc: "Atur durasi transisi menjadi 300ms" },
          ],
          code: {
            lang: "html",
            raw: `<!-- Tombol dengan hover yang smooth -->
<button class="
  bg-blue-500 hover:bg-blue-600
  text-white font-semibold
  px-6 py-3 rounded-xl
  transition duration-300
  hover:scale-105
">
  Klik Saya
</button>`,
            highlighted: `<span class="sh-cm">&lt;!-- Tombol dengan hover yang smooth --&gt;</span>
<span class="sh-tag">&lt;button</span> <span class="sh-prop">class</span>=<span class="sh-str">"
  bg-blue-500 </span><span class="sh-at">hover:bg-blue-600</span><span class="sh-str">
  text-white font-semibold
  px-6 py-3 rounded-xl
  transition duration-300
  </span><span class="sh-at">hover:scale-105</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>
  Klik Saya
<span class="sh-tag">&lt;/button&gt;</span>`,
          },
        },
      ],
    },
  ],

  playground: {
    id: "playground",
    title: "Playground",
    badge: "PLAYGROUND",
    demos: [
      {
        id: "card-builder",
        label: "🃏 Card Builder",
        description: "Eksperimen kombinasi rounded, shadow, dan padding untuk bikin card modern.",
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
            options: ["shadow-none", "shadow-md", "shadow-lg", "shadow-2xl"],
          },
          {
            type: "toggle-group",
            stateKey: "padding",
            label: "Padding",
            options: ["p-2", "p-4", "p-6", "p-10"],
          },
        ],
      },
      {
        id: "flex-lab",
        label: "📐 Flexbox Lab",
        description: "Lihat langsung efek dari justify dan items pada container flex.",
        preview: "flex",
        defaultState: {
          justify: "justify-between",
          items: "items-center",
          gap: "gap-4",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "justify",
            label: "justify-content",
            options: ["justify-start", "justify-center", "justify-between", "justify-end"],
          },
          {
            type: "toggle-group",
            stateKey: "items",
            label: "align-items",
            options: ["items-start", "items-center", "items-end", "items-stretch"],
          },
          {
            type: "toggle-group",
            stateKey: "gap",
            label: "Gap",
            options: ["gap-1", "gap-4", "gap-8", "gap-16"],
          },
        ],
      },
    ],
  },

  quiz: {
    id: "quiz",
    title: "Quiz",
    badge: "QUIZ",
    questions: [
      {
        q: "Class mana yang PALING tepat untuk membuat navbar dengan logo di kiri dan menu di kanan?",
        opts: ["flex justify-between items-center", "flex justify-start items-center", "grid grid-cols-2", "block text-center"],
        ans: 0,
        explain:
          "`flex justify-between` membagi ruang antara dua elemen ke kiri-kanan, dan `items-center` membuatnya rata vertikal — kombinasi klasik untuk navbar.",
      },
      {
        q: "Apa perbedaan utama `px-6 py-4` vs `p-6`?",
        opts: [
          "px-6 py-4 adalah padding horizontal 6 dan vertikal 4, sedangkan p-6 adalah padding sama di 4 sisi",
          "Keduanya sama saja, hanya penulisan berbeda",
          "px-6 py-4 lebih modern dari p-6",
          "p-6 hanya untuk desktop, px/py untuk mobile",
        ],
        ans: 0,
        explain:
          "`px-` mengatur padding kiri+kanan, `py-` atas+bawah. Kebanyakan desain profesional butuh padding berbeda di sumbu horizontal dan vertikal.",
      },
      {
        q: "Kenapa `text-slate-800` lebih direkomendasikan untuk teks utama dibanding `text-black`?",
        opts: [
          "Karena text-black tidak ada di Tailwind",
          "Karena text-slate-800 memberikan kontras yang lebih nyaman di mata tanpa terlalu pekat",
          "Karena text-black terlalu terang",
          "Tidak ada perbedaan, keduanya sama",
        ],
        ans: 1,
        explain:
          "Hitam pekat (#000) di atas putih menciptakan kontras ekstrem yang melelahkan mata. `text-slate-800` (#1e293b) tetap gelap tapi lebih nyaman secara visual.",
      },
      {
        q: "Class mana yang membuat elemen-elemen dalam flex container tersusun dari atas ke bawah (vertikal)?",
        opts: ["flex-row", "flex-col", "flex-wrap", "flex-reverse"],
        ans: 1,
        explain: "`flex-col` mengubah flex-direction menjadi column, sehingga item-item tersusun dari atas ke bawah.",
      },
      {
        q: "Apa fungsi `container mx-auto` pada sebuah section?",
        opts: [
          "Membuat elemen penuh lebar layar",
          "Menyembunyikan overflow konten",
          "Membatasi lebar konten dan memposisikannya di tengah layar horizontal",
          "Menambahkan margin di atas dan bawah secara otomatis",
        ],
        ans: 2,
        explain:
          "`container` membatasi max-width sesuai breakpoint, dan `mx-auto` membuatnya selalu di tengah layar — standar untuk layout yang tidak melar di layar besar.",
      },
      {
        q: "Mana cara yang LEBIH BERSIH untuk memberi jarak antar item dalam flex container?",
        opts: [
          "Tambahkan margin-right ke setiap item secara manual",
          "Gunakan gap-4 pada flex container",
          "Tambahkan padding ke setiap item",
          "Gunakan spacer div kosong di antara item",
        ],
        ans: 1,
        explain:
          "`gap-4` pada flex container memberi jarak antar item secara otomatis tanpa menyentuh masing-masing elemen anak. Lebih bersih dan mudah diubah.",
      },
      {
        q: "Class `rounded-2xl` memberikan efek apa pada elemen?",
        opts: [
          "Membuat elemen berbentuk lingkaran sempurna",
          "Menambahkan border tebal",
          "Memberikan sudut tumpul yang estetik pada elemen",
          "Membuat elemen menjadi bulat oval",
        ],
        ans: 2,
        explain:
          "`rounded-2xl` menerapkan border-radius 1rem (16px) di semua sudut — cukup tumpul untuk kesan modern, tapi tidak seekstrem `rounded-full`.",
      },
      {
        q: "Apa yang terjadi jika kamu menambahkan `hover:bg-blue-600` TANPA class `transition`?",
        opts: [
          "Tombol tidak akan berubah warna sama sekali",
          "Perubahan warna terjadi secara tiba-tiba (patah-patah), tanpa animasi halus",
          "Tombol akan error dan crash",
          "Tidak ada bedanya, transition tidak mempengaruhi hover",
        ],
        ans: 1,
        explain:
          'Tanpa `transition`, perubahan state terjadi secara instan — langsung "pop" berubah. `transition` menambahkan animasi halus antar state.',
      },
      {
        q: 'Kombinasi class mana yang menghasilkan tampilan "card modern" yang paling lengkap?',
        opts: ["bg-white border p-4", "bg-white rounded-2xl shadow-lg p-6", "bg-gray-100 rounded p-2 border-2", "bg-white text-center p-8"],
        ans: 1,
        explain:
          "`bg-white` + `rounded-2xl` + `shadow-lg` + `p-6` = card premium dengan usaha minimal. Keempat class ini saling melengkapi untuk tampilan modern.",
      },
      {
        q: "Apa fungsi class `shadow-lg` pada sebuah elemen?",
        opts: [
          "Membuat teks menjadi tebal",
          "Menambahkan border di sekeliling elemen",
          'Memberikan efek bayangan yang membuat elemen terasa "melayang" atau memiliki depth',
          "Menggelapkan warna background elemen",
        ],
        ans: 2,
        explain: "`shadow-lg` menerapkan box-shadow yang cukup besar — menciptakan ilusi kedalaman (depth) seolah elemen terangkat dari halaman.",
      },
    ],
  },

  checklist: {
    id: "checklist",
    title: "Checklist",
    badge: "CHECKLIST",
    subtitle: "Tandai setiap item yang sudah kamu kuasai. Target: 100%!",
    items: [
      { id: "c1", text: "Saya bisa membuat navbar menggunakan flex + justify-between + items-center" },
      { id: "c2", text: "Saya paham kapan pakai px-/py- vs p- untuk padding" },
      { id: "c3", text: "Saya bisa membuat layout halaman dengan container mx-auto" },
      { id: "c4", text: "Saya menggunakan text-slate-800 (bukan text-black) untuk teks utama" },
      { id: "c5", text: "Saya bisa membuat card modern dengan rounded-2xl + shadow-lg + bg-white" },
      { id: "c6", text: "Saya menggunakan gap-4 di flex container (bukan margin manual)" },
      { id: "c7", text: "Saya selalu pakai transition saat menambahkan hover: state" },
      { id: "c8", text: "Saya sudah latihan langsung di Playground dan mendapat nilai Quiz minimal 8/10" },
    ],
  },
};

export default cheatsheetData;

// src/data/cheatsheet/seri-web-foundation.js

const cheatsheetData = {
  meta: {
    slug: "web-foundation",
    seriesBadge: "// SERI 0 — THE ARCHITECTURE",
    title: "Perjalanan Sebuah Data di Internet",
    subtitle: "Cerita di balik layar saat kamu mengetik sebuah alamat di browser hingga muncul tampilan di layar.",
    navTitle: "Web Guidebook",
    stats: [
      { label: "Bab Cerita", value: "3" },
      { label: "Istilah Kunci", value: "12" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "6" },
    ],
    tags: ["Internet 101", "Request", "Response", "Conceptual"],
  },

  navLinks: [
    { href: "#pemeran-utama", label: "1. Tokoh Utama" },
    { href: "#pesan-url", label: "2. Surat Cinta (URL)" },
    { href: "#metode-kirim", label: "3. Cara Kirim Paket" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  sections: [
    {
      id: "pemeran-utama",
      badge: "BAB 01",
      title: "Dua Tokoh Utama: Client & Server",
      glow: "cyan",
      description: "Dunia web adalah panggung sandiwara yang diperankan oleh dua aktor utama yang terus saling bicara.",
      analogy:
        '🎭 Bayangkan Client adalah "Anak Kecil yang cerewet" (banyak tanya/minta), dan Server adalah "Perpustakaan yang pintar" (menjawab dan memberi buku).',

      cards: [
        {
          subtitle: "Mengenal Sang Aktor",
          items: [
            {
              class: "The Client",
              desc: 'Browser kamu (Chrome/Firefox). Kerjanya cuma dua: Mengirim "Request" (minta data) dan Merender "Response" (menampilkan hasil).',
            },
            {
              class: "The Server",
              desc: "Komputer yang selalu nyala 24 jam. Kerjanya menunggu Request, mencari file di gudang (database), lalu mengirimnya balik.",
            },
          ],
          code: {
            lang: "js",
            raw: `// Dialog sederhana di balik layar:
Client: "Woi Server, saya mau liat profil @user123!"
Server: "Bentar saya cari... Oke ada, ini fotonya!"`,
            highlighted: `<span class="sh-cm">// Dialog sederhana di balik layar:</span>
<span class="sh-kw">Client:</span> <span class="sh-str">"Woi Server, saya mau liat profil @user123!"</span>
<span class="sh-kw">Server:</span> <span class="sh-str">"Bentar saya cari... Oke ada, ini fotonya!"</span>`,
          },
        },
      ],
    },

    {
      id: "pesan-url",
      badge: "BAB 02",
      title: "Anatomi URL: Alamat yang Punya Maksud",
      glow: "purple",
      description: "URL bukan cuma teks acak. Itu adalah instruksi navigasi agar paket data tidak salah alamat.",
      analogy:
        '📍 URL itu seperti alamat GoFood: Ada tokonya (Domain), ada pesanannya (Path), dan ada catatan tambahan seperti "pedes ya" (Query String).',

      cards: [
        {
          subtitle: "Membedah Pesananmu",
          items: [
            { class: "Domain", desc: "Nama tujuan utama. Tanpa ini, Browser tidak tahu harus lari ke gedung mana." },
            { class: "Path", desc: "Ibarat rak buku. Menunjukkan file spesifik mana yang mau kamu buka di server tersebut." },
            {
              class: "Query String",
              desc: "Data ekstra yang ditempel di belakang tanda tanya (?). Cara paling dasar mengirim data dari user ke server.",
            },
          ],
          code: {
            lang: "html",
            raw: `https://toko.com/produk?id=123&warna=merah
       ^         ^      ^        ^
     Rumah     Toko    Rak     Catatan Pesanan`,
            highlighted: `<span class="sh-tag">https://</span><span class="sh-prop">toko.com</span><span class="sh-val">/produk</span><span class="sh-at">?id=123&warna=merah</span>
<span class="sh-cm">       ^         ^      ^        ^</span>
<span class="sh-cm">     Rumah     Toko    Rak     Catatan Pesanan</span>`,
          },
        },
      ],
    },

    {
      id: "metode-kirim",
      badge: "BAB 03",
      title: "GET vs POST: Kartu Pos vs Brankas",
      glow: "cyan",
      description: "Bagaimana data dikirim? Lewat jendela yang terbuka atau pintu rahasia yang terkunci?",
      analogy: "📦 Gunakan GET jika datanya boleh dilihat orang lewat (URL). Gunakan POST jika datanya rahasia dan besar (seperti isi koper).",

      cards: [
        {
          subtitle: "Kapan Harus Memilih?",
          items: [
            { class: "Method GET", desc: 'Cocok untuk "melihat-lihat". Data ditempel di URL. Bisa di-bookmark, bisa di-copy linknya.' },
            { class: "Method POST", desc: 'Cocok untuk "mengirim/mengubah". Data disembunyikan di dalam paket. Tidak muncul di URL.' },
          ],
          code: {
            lang: "html",
            raw: `GET  => cari.php?keyword=buku (Terlihat!)
POST => login.php { user: "admin", pass: "123" } (Sembunyi!)`,
            highlighted: `<span class="sh-kw">GET</span>  <span class="sh-str">=> cari.php?keyword=buku</span> <span class="sh-cm">(Terlihat!)</span>
<span class="sh-kw">POST</span> <span class="sh-str">=> login.php { user: "admin", pass: "123" }</span> <span class="sh-cm">(Sembunyi!)</span>`,
          },
        },
      ],
    },
  ],

  playground: {
    id: "playground",
    title: "Simulasi Alur Data",
    badge: "LAB",
    demos: [
      // ── DEMO 1: Request-Response Flow Simulator ───────────────────────────────
      {
        id: "request-response",
        label: "🚀 Simulasi Request-Response",
        description:
          "Ketik sebuah URL lalu tekan 'Kirim Request'. Lihat bagaimana data berjalan dari Browser ke Server, lalu Response kembali ke layarmu.",
        preview: "request-response-sim",
        defaultState: {
          url: "",
          step: 0, // 0=idle, 1=sending, 2=processing, 3=responding, 4=done
        },
        controls: [],
      },

      // ── DEMO 2: URL Anatomy Dissector ─────────────────────────────────────────
      {
        id: "url-dissector",
        label: "🔬 Pembedah URL",
        description:
          "Ketik URL apa saja di bawah ini. Sistem akan otomatis memecah dan melabeli bagian-bagiannya: Protocol, Domain, Path, dan Query String.",
        preview: "url-dissector-sim",
        defaultState: {
          url: "https://toko.com/produk?id=123&warna=merah",
        },
        controls: [],
      },
    ],
  },

  quiz: {
    id: "quiz",
    title: "Review Perjalanan",
    badge: "QUIZ",
    questions: [
      {
        q: "Dalam web, siapa yang selalu memulai percakapan (mengirim request)?",
        opts: ["Server", "Database", "Client/Browser", "Router"],
        ans: 2,
        explain: "Web selalu dimulai dengan Request dari Client. Server tidak akan bicara kalau tidak ditanya.",
      },
      {
        q: "Jika kamu ingin data password tidak terlihat di address bar, method apa yang harus dipakai?",
        opts: ["GET", "POST", "SEND", "URL"],
        ans: 1,
        explain: "POST mengirim data lewat body request, bukan URL, sehingga lebih aman untuk data sensitif.",
      },
      {
        q: 'Bagian URL "?id=10" disebut sebagai...',
        opts: ["Protocol", "Domain", "Query String", "Path"],
        ans: 2,
        explain: "Query String adalah data parameter yang ditempel setelah tanda tanya.",
      },
      {
        q: "Apa tugas utama dari sebuah Web Server?",
        opts: ["Membeli domain", "Menampilkan grafik ke user", "Menyimpan dan memproses file web", "Membuat koneksi internet"],
        ans: 2,
        explain: "Server menyimpan file (HTML, PHP, Gambar) dan mengirimkannya ke client saat diminta.",
      },
      {
        q: 'Apa yang dimaksud dengan "Stateless" di protokol HTTP?',
        opts: [
          "Server tidak butuh negara",
          "Server tidak mengingat user secara otomatis setiap request baru",
          "Website tidak bisa dibuka di HP",
          "Data tidak bisa disimpan",
        ],
        ans: 1,
        explain: "Stateless artinya setiap request dianggap mandiri/baru oleh server.",
      },
      {
        q: 'Alamat "belajar.com" dalam URL disebut sebagai...',
        opts: ["Protocol", "Domain", "Query", "Script"],
        ans: 1,
        explain: "Domain adalah nama identitas server tujuan.",
      },
      {
        q: "Kapan penggunaan GET sangat disarankan?",
        opts: ["Saat login", "Saat upload file 1GB", "Saat fitur pencarian barang", "Saat ganti password"],
        ans: 2,
        explain: "GET bagus untuk pencarian karena URL-nya bisa dibagikan (shareable) ke orang lain.",
      },
      {
        q: "Apa singkatan dari URL?",
        opts: ["Uniform Resource Locator", "Universal Road Link", "User Request List", "Unit Resource Line"],
        ans: 0,
        explain: "URL adalah standar untuk menentukan lokasi sumber daya di internet.",
      },
      {
        q: "Jika server mengirim file HTML kembali ke browser, proses ini disebut...",
        opts: ["Request", "Response", "Input", "Loading"],
        ans: 1,
        explain: "Response adalah jawaban/balasan dari server.",
      },
      {
        q: "Kenapa kita butuh Seri 0 ini sebelum belajar PHP?",
        opts: ["Karena PHP itu sulit", "Agar tahu bagaimana data berpindah tempat", "Agar bisa buat desain bagus", "Cuma formalitas"],
        ans: 1,
        explain: "Memahami alur request-response adalah kunci utama belajar backend (PHP).",
      },
    ],
  },

  checklist: {
    id: "checklist",
    title: "Konsep yang Harus Dibawa",
    badge: "GO",
    subtitle: "Sudah siap melangkah ke coding PHP?",
    items: [
      { id: "c1", text: "Saya paham bahwa browser hanya meminta, server yang memberi" },
      { id: "c2", text: "Saya bisa membedah mana Domain, Path, dan Query String di URL" },
      { id: "c3", text: "Saya tahu alasan kenapa Login pakai POST, bukan GET" },
      { id: "c4", text: 'Saya paham bahwa "Response" adalah apa yang kita lihat di layar' },
      { id: "c5", text: "Saya mengerti istilah Stateless (server pelupa)" },
      { id: "c6", text: "Saya siap belajar bagaimana PHP menangkap Query String tersebut" },
    ],
  },
};

export default cheatsheetData;

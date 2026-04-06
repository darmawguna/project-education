// src/data/cheatsheet/seri-form-handling.js

const cheatsheetData = {
  // ─── META ──────────────────────────────────────────────────────────────────
  meta: {
    slug: "form-handling",
    seriesBadge: "// SERI 4 — FORM HANDLING & DATA PROCESSING",
    title: "Form Handling & Data Processing",
    subtitle: "Hidupkan websitemu! Belajar menerima, mengolah, dan merespons data dari user menggunakan PHP.",
    navTitle: "PHP Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "3" },
      { label: "Class Kunci", value: "18" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "7" },
    ],
    tags: ["PHP", "Form", "GET & POST", "Superglobals", "Include", "Functions"],
  },

  // ─── NAV LINKS ─────────────────────────────────────────────────────────────
  navLinks: [
    { href: "#get-vs-post", label: "GET vs POST" },
    { href: "#superglobals", label: "Superglobals" },
    { href: "#modular-code", label: "Modular Code" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  // ─── SECTIONS ──────────────────────────────────────────────────────────────
  sections: [
    {
      id: "get-vs-post",
      badge: "SECTION 01",
      title: "The Data Carrier — GET vs POST",
      glow: "cyan",
      description: "Dua cara mengirim data dari form HTML ke server PHP. Pilihan yang tepat menentukan keamanan dan fungsi aplikasimu.",
      analogy:
        "📮 GET itu seperti Kartu Pos — pesannya tertulis di luar, semua orang bisa baca. POST itu seperti Surat dalam Amplop — isinya tersembunyi, aman untuk data rahasia seperti password.",

      cards: [
        {
          subtitle: "Metode GET — Data di URL",
          items: [
            { class: 'method="GET"', desc: "Mengirim data lewat URL, terlihat di address bar browser." },
            { class: 'action="proses.php"', desc: "Atribut wajib form — menentukan file PHP tujuan yang akan memproses data." },
            { class: "?key=value", desc: "Format query string di URL hasil GET, contoh: search.php?keyword=sepatu." },
            { class: '$_GET["key"]', desc: "Cara PHP mengambil data yang dikirim via metode GET dari URL." },
          ],
          code: {
            lang: "html",
            raw: `<!-- Cocok untuk: Search, Filter, Navigasi -->
<form action="hasil.php" method="GET">
  <input type="text" name="keyword" placeholder="Cari produk...">
  <button type="submit">Cari</button>
</form>

<!-- URL yang dihasilkan: hasil.php?keyword=sepatu -->`,
            highlighted: `<span class="sh-cm">&lt;!-- Cocok untuk: Search, Filter, Navigasi --&gt;</span>
<span class="sh-tag">&lt;form</span> <span class="sh-prop">action</span>=<span class="sh-str">"hasil.php"</span> <span class="sh-prop">method</span>=<span class="sh-str">"GET"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;input</span> <span class="sh-prop">type</span>=<span class="sh-str">"text"</span> <span class="sh-prop">name</span>=<span class="sh-str">"keyword"</span> <span class="sh-prop">placeholder</span>=<span class="sh-str">"Cari produk..."</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;button</span> <span class="sh-prop">type</span>=<span class="sh-str">"submit"</span><span class="sh-tag">&gt;</span>Cari<span class="sh-tag">&lt;/button&gt;</span>
<span class="sh-tag">&lt;/form&gt;</span>

<span class="sh-cm">&lt;!-- URL yang dihasilkan: hasil.php?keyword=sepatu --&gt;</span>`,
          },
        },
        {
          subtitle: "Metode POST — Data Tersembunyi",
          items: [
            {
              class: 'method="POST"',
              desc: "Mengirim data tersembunyi di body request, tidak terlihat di URL — aman untuk password dan data sensitif.",
            },
            { class: 'name="username"', desc: "Atribut name adalah kunci/ID input — tanpa ini PHP tidak bisa mengenali data yang dikirim." },
            { class: '$_POST["key"]', desc: "Cara PHP mengambil data yang dikirim via metode POST." },
            { class: 'enctype="multipart/form-data"', desc: "Atribut tambahan wajib di form jika ingin mengirim file atau gambar via POST." },
          ],
          code: {
            lang: "html",
            raw: `<!-- Cocok untuk: Login, Register, Input transaksi -->
<form action="proses.php" method="POST">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit" name="submit">Masuk</button>
</form>`,
            highlighted: `<span class="sh-cm">&lt;!-- Cocok untuk: Login, Register, Input transaksi --&gt;</span>
<span class="sh-tag">&lt;form</span> <span class="sh-prop">action</span>=<span class="sh-str">"proses.php"</span> <span class="sh-prop">method</span>=<span class="sh-str">"POST"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;input</span> <span class="sh-prop">type</span>=<span class="sh-str">"text"</span> <span class="sh-prop">name</span>=<span class="sh-str">"username"</span> <span class="sh-prop">placeholder</span>=<span class="sh-str">"Username"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;input</span> <span class="sh-prop">type</span>=<span class="sh-str">"password"</span> <span class="sh-prop">name</span>=<span class="sh-str">"password"</span> <span class="sh-prop">placeholder</span>=<span class="sh-str">"Password"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;button</span> <span class="sh-prop">type</span>=<span class="sh-str">"submit"</span> <span class="sh-prop">name</span>=<span class="sh-str">"submit"</span><span class="sh-tag">&gt;</span>Masuk<span class="sh-tag">&lt;/button&gt;</span>
<span class="sh-tag">&lt;/form&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "superglobals",
      badge: "SECTION 02",
      title: "Capturing Data — Superglobals & Validasi",
      glow: "purple",
      description: 'Variabel "sakti" PHP yang tersedia di mana saja untuk menangkap data kiriman user, plus cara memvalidasinya agar aman.',
      analogy:
        '🧲 Bayangkan $_POST seperti keranjang belanja di kasir — semua barang yang user "kirim" lewat form sudah otomatis masuk ke sana. Tugasmu tinggal meraih isinya pakai kunci (name input).',

      cards: [
        {
          subtitle: "Menangkap & Menyimpan Data",
          items: [
            { class: '$_POST["nama_key"]', desc: "Mengambil satu data dari form POST — key harus sama persis dengan atribut name di input HTML." },
            { class: '$_GET["nama_key"]', desc: "Mengambil satu data dari query string URL — cocok untuk parameter pencarian atau filter." },
            { class: '$variabel = $_POST["key"]', desc: "Menyimpan data kiriman ke variabel PHP agar bisa diolah lebih lanjut." },
          ],
          code: {
            lang: "html",
            raw: `<?php
// Di file proses.php — ambil data dari form
$nama  = $_POST['nama_lengkap'];
$email = $_POST['email_user'];
$harga = $_POST['harga'];
$jumlah = $_POST['jumlah'];

// Hitung total
$total = $harga * $jumlah;
echo "Total belanja: Rp " . $total;
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-cm">// Di file proses.php — ambil data dari form</span>
<span class="sh-kw">$nama</span>  = <span class="sh-val">$_POST</span>[<span class="sh-str">'nama_lengkap'</span>];
<span class="sh-kw">$email</span> = <span class="sh-val">$_POST</span>[<span class="sh-str">'email_user'</span>];
<span class="sh-kw">$harga</span> = <span class="sh-val">$_POST</span>[<span class="sh-str">'harga'</span>];
<span class="sh-kw">$jumlah</span> = <span class="sh-val">$_POST</span>[<span class="sh-str">'jumlah'</span>];

<span class="sh-cm">// Hitung total</span>
<span class="sh-kw">$total</span> = <span class="sh-val">$harga</span> * <span class="sh-val">$jumlah</span>;
<span class="sh-kw">echo</span> <span class="sh-str">"Total belanja: Rp "</span> . <span class="sh-val">$total</span>;
<span class="sh-tag">?&gt;</span>`,
          },
        },
        {
          subtitle: "Validasi Dasar — Safety First",
          items: [
            {
              class: "isset($var)",
              desc: "Mengecek apakah variabel atau key ada dan bukan null — biasanya dipakai untuk cek apakah tombol submit sudah diklik.",
            },
            { class: "empty($var)", desc: "Mengecek apakah variabel kosong (string kosong, 0, null, false) — mencegah data kosong lolos diproses." },
            { class: 'isset($_POST["submit"])', desc: "Pola standar untuk memastikan proses PHP hanya jalan setelah user benar-benar submit form." },
            {
              class: 'header("Location: index.php")',
              desc: "Redirect user ke halaman lain setelah proses selesai — wajib ada exit() setelahnya agar eksekusi berhenti.",
            },
          ],
          code: {
            lang: "html",
            raw: `<?php
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];

    if (empty($nama)) {
        echo "Waduh, namanya lupa diisi!";
    } else {
        echo "Selamat datang, " . $nama;
        // Redirect setelah proses
        header("Location: index.php");
        exit();
    }
}
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-kw">if</span> (<span class="sh-val">isset</span>(<span class="sh-kw">$_POST</span>[<span class="sh-str">'submit'</span>])) {
    <span class="sh-kw">$nama</span> = <span class="sh-val">$_POST</span>[<span class="sh-str">'nama'</span>];

    <span class="sh-kw">if</span> (<span class="sh-val">empty</span>(<span class="sh-kw">$nama</span>)) {
        <span class="sh-kw">echo</span> <span class="sh-str">"Waduh, namanya lupa diisi!"</span>;
    } <span class="sh-kw">else</span> {
        <span class="sh-kw">echo</span> <span class="sh-str">"Selamat datang, "</span> . <span class="sh-kw">$nama</span>;
        <span class="sh-cm">// Redirect setelah proses</span>
        <span class="sh-kw">header</span>(<span class="sh-str">"Location: index.php"</span>);
        <span class="sh-kw">exit</span>();
    }
}
<span class="sh-tag">?&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "modular-code",
      badge: "SECTION 03",
      title: "Modular & Reusable Code — Include & Functions",
      glow: "cyan",
      description: "Teknik profesional agar kode rapi, tidak berulang, dan mudah dirawat. Prinsip DRY: Don't Repeat Yourself.",
      analogy:
        "🧩 Bayangkan website-mu seperti LEGO — fungsi include() itu seperti blok LEGO standar (navbar, footer) yang bisa dipasang di mana saja tanpa harus cetak ulang. Kalau mau ganti warna, cukup ganti satu blok — semua halaman otomatis ikut berubah.",

      cards: [
        {
          subtitle: "Include — Potong & Sambung File",
          items: [
            {
              class: "include 'file.php'",
              desc: "Menyisipkan konten file PHP lain ke posisi saat ini — jika file tidak ditemukan, hanya muncul warning tapi eksekusi tetap jalan.",
            },
            {
              class: "require 'file.php'",
              desc: "Sama seperti include tapi lebih ketat — jika file tidak ditemukan, eksekusi berhenti total (fatal error).",
            },
            {
              class: "include_once 'file.php'",
              desc: "Versi include yang memastikan file hanya disisipkan satu kali meski dipanggil berkali-kali — mencegah konflik duplikasi fungsi.",
            },
          ],
          code: {
            lang: "html",
            raw: `<!-- navbar.php — simpan di sini sekali saja -->
<nav class="bg-blue-600 text-white p-4">
  <a href="index.php">Home</a>
  <a href="produk.php">Produk</a>
</nav>

<!-- index.php — panggil di setiap halaman -->
<?php include 'navbar.php'; ?>
<h1>Selamat Datang!</h1>

<!-- produk.php — tidak perlu tulis ulang navbar -->
<?php include 'navbar.php'; ?>
<h1>Daftar Produk</h1>`,
            highlighted: `<span class="sh-cm">&lt;!-- navbar.php — simpan di sini sekali saja --&gt;</span>
<span class="sh-tag">&lt;nav</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-blue-600 text-white p-4"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;a</span> <span class="sh-prop">href</span>=<span class="sh-str">"index.php"</span><span class="sh-tag">&gt;</span>Home<span class="sh-tag">&lt;/a&gt;</span>
  <span class="sh-tag">&lt;a</span> <span class="sh-prop">href</span>=<span class="sh-str">"produk.php"</span><span class="sh-tag">&gt;</span>Produk<span class="sh-tag">&lt;/a&gt;</span>
<span class="sh-tag">&lt;/nav&gt;</span>

<span class="sh-cm">&lt;!-- index.php — panggil di setiap halaman --&gt;</span>
<span class="sh-tag">&lt;?php</span> <span class="sh-kw">include</span> <span class="sh-str">'navbar.php'</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;h1&gt;</span>Selamat Datang!<span class="sh-tag">&lt;/h1&gt;</span>

<span class="sh-cm">&lt;!-- produk.php — tidak perlu tulis ulang navbar --&gt;</span>
<span class="sh-tag">&lt;?php</span> <span class="sh-kw">include</span> <span class="sh-str">'navbar.php'</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;h1&gt;</span>Daftar Produk<span class="sh-tag">&lt;/h1&gt;</span>`,
          },
        },
        {
          subtitle: "Functions — Mesin Pengolah Data",
          items: [
            {
              class: "function nama($param)",
              desc: "Mendefinisikan fungsi dengan parameter — blok kode yang bisa dipanggil berulang kali dengan input berbeda.",
            },
            {
              class: "return $nilai",
              desc: "Mengembalikan hasil dari fungsi ke pemanggil — tanpa return, fungsi hanya menjalankan aksi tanpa memberikan hasil.",
            },
            {
              class: 'number_format($angka, 0, ",", ".")',
              desc: "Fungsi bawaan PHP untuk memformat angka dengan pemisah ribuan dan desimal — sangat berguna untuk tampilkan harga Rupiah.",
            },
            {
              class: "formatRupiah($angka)",
              desc: 'Contoh fungsi custom yang dibuat sendiri untuk mengubah angka biasa menjadi format "Rp 1.500.000" secara konsisten.',
            },
          ],
          code: {
            lang: "html",
            raw: `<?php
// Definisi fungsi sekali saja
function formatRupiah($angka) {
    return "Rp " . number_format($angka, 0, ',', '.');
}

function hitungDiskon($total) {
    if ($total > 100000) {
        return $total * 0.9; // Diskon 10%
    }
    return $total;
}

// Panggil berkali-kali dengan data berbeda
echo formatRupiah(75000);   // Rp 75.000
echo formatRupiah(150000);  // Rp 150.000

$totalAkhir = hitungDiskon(150000);
echo formatRupiah($totalAkhir); // Rp 135.000
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-cm">// Definisi fungsi sekali saja</span>
<span class="sh-kw">function</span> <span class="sh-val">formatRupiah</span>(<span class="sh-kw">$angka</span>) {
    <span class="sh-kw">return</span> <span class="sh-str">"Rp "</span> . <span class="sh-val">number_format</span>(<span class="sh-kw">$angka</span>, <span class="sh-val">0</span>, <span class="sh-str">','</span>, <span class="sh-str">'.'</span>);
}

<span class="sh-kw">function</span> <span class="sh-val">hitungDiskon</span>(<span class="sh-kw">$total</span>) {
    <span class="sh-kw">if</span> (<span class="sh-kw">$total</span> > <span class="sh-val">100000</span>) {
        <span class="sh-kw">return</span> <span class="sh-kw">$total</span> * <span class="sh-val">0.9</span>; <span class="sh-cm">// Diskon 10%</span>
    }
    <span class="sh-kw">return</span> <span class="sh-kw">$total</span>;
}

<span class="sh-cm">// Panggil berkali-kali dengan data berbeda</span>
<span class="sh-kw">echo</span> <span class="sh-val">formatRupiah</span>(<span class="sh-val">75000</span>);   <span class="sh-cm">// Rp 75.000</span>
<span class="sh-kw">echo</span> <span class="sh-val">formatRupiah</span>(<span class="sh-val">150000</span>);  <span class="sh-cm">// Rp 150.000</span>

<span class="sh-kw">$totalAkhir</span> = <span class="sh-val">hitungDiskon</span>(<span class="sh-val">150000</span>);
<span class="sh-kw">echo</span> <span class="sh-val">formatRupiah</span>(<span class="sh-kw">$totalAkhir</span>); <span class="sh-cm">// Rp 135.000</span>
<span class="sh-tag">?&gt;</span>`,
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
      // ── DEMO 1: GET vs POST Simulator ────────────────────────────────────────
      {
        id: "get-vs-post-sim",
        label: "📮 Simulasi GET vs POST",
        description:
          "Isi form di bawah lalu pilih metode pengiriman. Lihat perbedaan nyata: GET menampilkan data di URL, POST menyembunyikannya di body request.",
        preview: "form-sim", // tipe preview baru
        defaultState: {
          method: "GET",
          nama: "",
          password: "",
        },
        fields: [
          { name: "nama", label: "Nama Lengkap", type: "text", placeholder: "contoh: Budi Santoso" },
          { name: "password", label: "Password", type: "password", placeholder: "contoh: rahasia123" },
        ],
        controls: [
          {
            type: "toggle-group",
            stateKey: "method",
            label: "Metode Pengiriman",
            options: ["GET", "POST"],
          },
        ],
      },

      // ── DEMO 2: isset & empty Validator ──────────────────────────────────────
      {
        id: "validator-sim",
        label: "🧲 Simulasi Validasi isset & empty",
        description:
          "Coba kosongkan salah satu field, atau isi semua — lalu klik Submit. Lihat bagaimana isset() dan empty() bereaksi terhadap input kamu di sisi PHP.",
        preview: "validator-sim", // tipe preview baru
        defaultState: {
          nama: "",
          email: "",
          submitted: false,
        },
        fields: [
          { name: "nama", label: "Nama", type: "text", placeholder: "Isi atau biarkan kosong..." },
          { name: "email", label: "Email", type: "email", placeholder: "Isi atau biarkan kosong..." },
        ],
        // Tidak pakai controls toggle — interaksi via input + submit button langsung
        controls: [],
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
        q: "Apa perbedaan utama antara metode GET dan POST pada form HTML?",
        opts: [
          "GET lebih cepat, POST lebih lambat",
          "GET mengirim data lewat URL (terlihat), POST mengirim data tersembunyi di body request",
          "GET hanya untuk teks, POST hanya untuk angka",
          "GET dan POST tidak ada bedanya, hanya nama berbeda",
        ],
        ans: 1,
        explain:
          "GET menampilkan data di URL (seperti kartu pos terbuka), cocok untuk pencarian. POST menyembunyikan data di body request (seperti surat dalam amplop), cocok untuk login dan data sensitif.",
      },
      {
        q: "Atribut apa yang WAJIB ada di setiap elemen <input> agar PHP bisa mengambil datanya?",
        opts: ["id", "class", "name", "type"],
        ans: 2,
        explain:
          "Atribut name adalah kunci/ID yang digunakan PHP untuk mengidentifikasi data. Tanpa name, data dari input tersebut tidak akan dikirim ke server dan $_POST/$_GET tidak bisa mengambilnya.",
      },
      {
        q: "Cara yang benar untuk mengambil data dari form POST di file proses.php adalah...",
        opts: ['$data = GET["username"]', '$data = $_POST["username"]', '$data = post("username")', '$data = INPUT["username"]'],
        ans: 1,
        explain:
          "$_POST adalah superglobal PHP — variabel sakti yang otomatis tersedia di semua file. Key-nya harus sama persis dengan atribut name di input HTML.",
      },
      {
        q: "Fungsi isset() digunakan untuk apa dalam konteks form handling?",
        opts: [
          "Mengubah tipe data variabel",
          "Menghapus data dari form",
          "Mengecek apakah variabel ada dan bukan null — biasanya untuk memastikan tombol submit sudah diklik",
          "Memformat tampilan output",
        ],
        ans: 2,
        explain:
          'isset() mengecek keberadaan variabel. Pola isset($_POST["submit"]) memastikan kode PHP hanya dijalankan setelah user benar-benar submit form, bukan ketika halaman proses.php diakses langsung.',
      },
      {
        q: 'Apa yang terjadi jika kamu menggunakan empty() dan variabel berisi string kosong ""?',
        opts: [
          "empty() mengembalikan false karena variabel ada",
          'empty() mengembalikan true karena string kosong dianggap "kosong"',
          "empty() mengembalikan error",
          "empty() tidak bisa dipakai untuk string",
        ],
        ans: 1,
        explain:
          'empty() mengembalikan true untuk string kosong "", nilai 0, null, false, dan array kosong. Ini berguna untuk validasi agar data yang dikirim bukan sekadar spasi atau kolom kosong.',
      },
      {
        q: 'Apa keuntungan utama menggunakan include "navbar.php" di setiap halaman?',
        opts: [
          "Membuat website lebih lambat karena banyak file",
          "Jika ingin ganti navbar, cukup edit satu file navbar.php dan semua halaman otomatis terupdate",
          "Include hanya bisa dipakai untuk navbar saja",
          "Include membuat file PHP menjadi lebih besar",
        ],
        ans: 1,
        explain:
          "Prinsip DRY (Don't Repeat Yourself) — dengan include, perubahan di satu file navbar.php langsung berlaku di semua halaman yang memanggilnya. Ini menghemat waktu dan mengurangi risiko kesalahan.",
      },
      {
        q: "Apa perbedaan antara include dan require di PHP?",
        opts: [
          "include lebih cepat dari require",
          "require hanya untuk file CSS, include untuk file PHP",
          "Jika file tidak ditemukan: include hanya warning (eksekusi lanjut), require langsung fatal error (eksekusi berhenti)",
          "Tidak ada perbedaan, keduanya identik",
        ],
        ans: 2,
        explain:
          'include bersifat "toleran" — file hilang hanya memunculkan warning. require bersifat "ketat" — file hilang langsung menghentikan seluruh eksekusi. Gunakan require untuk file-file kritis seperti koneksi database.',
      },
      {
        q: 'Perhatikan kode ini: function formatRupiah($angka) { return "Rp " . number_format($angka, 0, ",", "."); }. Apa output dari formatRupiah(150000)?',
        opts: ["Rp 150000", "Rp 150,000", "Rp 150.000", "Rp1500.00"],
        ans: 2,
        explain:
          'number_format($angka, 0, ",", ".") memformat angka dengan 0 desimal, koma sebagai pemisah desimal, dan titik sebagai pemisah ribuan — standar format Rupiah Indonesia.',
      },
      {
        q: "Kapan sebaiknya menggunakan metode POST dibanding GET?",
        opts: [
          "Untuk fitur pencarian produk di toko online",
          "Untuk filter berdasarkan kategori di halaman blog",
          "Untuk form login yang berisi username dan password",
          "Untuk pagination halaman (halaman 1, 2, 3)",
        ],
        ans: 2,
        explain:
          "POST digunakan untuk data sensitif seperti password karena tidak terlihat di URL. GET cocok untuk pencarian, filter, dan pagination karena URL-nya bisa di-bookmark dan dibagikan.",
      },
      {
        q: 'Apa fungsi dari baris header("Location: index.php"); exit(); setelah proses form berhasil?',
        opts: [
          "Menampilkan halaman index.php di dalam proses.php",
          "Menghapus semua data dari $_POST",
          "Mengarahkan (redirect) browser user ke halaman index.php lalu menghentikan eksekusi PHP",
          "Menyimpan data ke file index.php",
        ],
        ans: 2,
        explain:
          'header("Location:") mengirim instruksi ke browser untuk pindah halaman (redirect). exit() wajib dipanggil setelahnya agar kode PHP di bawahnya tidak ikut dieksekusi — pola standar post-form-redirect.',
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
      { id: "c1", text: "Saya bisa menjelaskan perbedaan GET dan POST, dan tahu kapan menggunakan masing-masing" },
      { id: "c2", text: "Saya bisa membuat form HTML lengkap dengan atribut action, method, dan name yang benar" },
      { id: "c3", text: "Saya bisa mengambil data form di PHP menggunakan $_POST dan $_GET dengan benar" },
      { id: "c4", text: "Saya bisa memvalidasi input menggunakan isset() dan empty() untuk mencegah data kosong diproses" },
      { id: "c5", text: "Saya bisa menggunakan include untuk memisahkan navbar/footer ke file terpisah di project nyata" },
      { id: "c6", text: "Saya bisa membuat fungsi PHP sederhana dengan parameter dan return value, contoh formatRupiah()" },
      { id: "c7", text: "Saya sudah berhasil membuat Mini Checkout System dengan kalkulasi harga dan diskon otomatis" },
    ],
  },
};

export default cheatsheetData;

/* eslint-disable no-useless-escape */
// src/data/cheatsheet/seri-laragon-setup.js

const cheatsheetData = {
  // ─── META ──────────────────────────────────────────────────────────────────
  meta: {
    slug: "laragon-setup",
    seriesBadge: "// SERI 4 — SETUP & LIVE CODING",
    title: "Setup Laragon & Live Coding PHP",
    subtitle: "Dari instalasi sampai website PHP pertamamu berjalan di localhost — langkah demi langkah.",
    navTitle: "PHP Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "4" },
      { label: "Konsep", value: "24" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    tags: ["Laragon", "XAMPP", "Localhost", "Live Coding", "PHP Project"],
  },

  // ─── NAV LINKS ─────────────────────────────────────────────────────────────
  navLinks: [
    { href: "#install-laragon", label: "Install" },
    { href: "#struktur-folder", label: "Folder" },
    { href: "#live-coding-dasar", label: "Live Coding" },
    { href: "#project-mini", label: "Mini Project" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  // ─── SECTIONS ──────────────────────────────────────────────────────────────
  sections: [
    // ── SECTION 01 ────────────────────────────────────────────────────────────
    {
      id: "install-laragon",
      badge: "SECTION 01",
      title: "Install & Setup Laragon",
      glow: "cyan",
      description: "Laragon adalah cara tercepat untuk mendapatkan Apache + PHP + MySQL berjalan di Windows — lebih ringan dan modern dari XAMPP.",
      analogy:
        "🏎️ Kalau XAMPP itu seperti angkot (ada di mana-mana, bisa dipakai semua orang), Laragon itu seperti Grab — lebih cepat, lebih rapi, dan tidak perlu banyak konfigurasi manual.",

      cards: [
        {
          subtitle: "Step 1 — Download & Install",
          items: [
            { class: "laragon.org/download", desc: 'Download Laragon versi "Full" (bukan Lite) agar sudah include PHP, Apache, dan MySQL.' },
            { class: "Laragon Full (~170MB)", desc: "Pilih versi Full yang sudah bundle PHP + Apache + MySQL + phpMyAdmin sekaligus." },
            { class: "Install ke C:\\laragon", desc: "Biarkan path default — jangan ganti ke Program Files agar tidak ada masalah permission." },
            { class: "Run as Administrator", desc: 'Klik kanan installer → "Run as Administrator" agar Apache bisa bind ke port 80.' },
          ],
          code: {
            lang: "html",
            raw: `<!-- Checklist sebelum install -->
1. Download dari: https://laragon.org/download
2. Pilih: Laragon Full (bukan Lite)
3. Klik kanan file .exe → Run as Administrator
4. Klik Next terus → Finish
5. Laragon otomatis terbuka di system tray`,
            highlighted: `<span class="sh-cm">&lt;!-- Checklist sebelum install --&gt;</span>
<span class="sh-val">1.</span> Download dari: <span class="sh-str">https://laragon.org/download</span>
<span class="sh-val">2.</span> Pilih: <span class="sh-kw">Laragon Full</span> (bukan Lite)
<span class="sh-val">3.</span> Klik kanan file .exe → <span class="sh-kw">Run as Administrator</span>
<span class="sh-val">4.</span> Klik Next terus → Finish
<span class="sh-val">5.</span> Laragon otomatis terbuka di <span class="sh-str">system tray</span>`,
          },
        },

        {
          subtitle: "Step 2 — Jalankan Server",
          items: [
            { class: "Start All", desc: 'Klik tombol "Start All" di jendela Laragon untuk menjalankan Apache dan MySQL sekaligus.' },
            { class: "Lampu hijau", desc: "Indikator Apache dan MySQL harus berwarna hijau — artinya server sudah aktif." },
            { class: "localhost", desc: 'Buka browser dan ketik "localhost" — jika muncul halaman Laragon, setup berhasil.' },
            {
              class: "Port 80",
              desc: "Apache berjalan di port 80 secara default — pastikan tidak ada aplikasi lain yang pakai port ini (Skype sering jadi masalah).",
            },
          ],
          code: {
            lang: "html",
            raw: `<!-- Urutan menjalankan Laragon -->
1. Buka Laragon dari Start Menu
2. Klik "Start All" → tunggu semua lampu hijau
3. Buka browser → ketik: localhost
4. Harus muncul halaman welcome Laragon

<!-- Jika port 80 bentrok -->
Laragon → kanan klik Apache → Preferences
→ Ganti port ke 8080
→ Akses via: localhost:8080`,
            highlighted: `<span class="sh-cm">&lt;!-- Urutan menjalankan Laragon --&gt;</span>
<span class="sh-val">1.</span> Buka Laragon dari Start Menu
<span class="sh-val">2.</span> Klik <span class="sh-kw">"Start All"</span> → tunggu semua lampu hijau
<span class="sh-val">3.</span> Buka browser → ketik: <span class="sh-str">localhost</span>
<span class="sh-val">4.</span> Harus muncul halaman <span class="sh-kw">welcome Laragon</span>

<span class="sh-cm">&lt;!-- Jika port 80 bentrok --&gt;</span>
Laragon → kanan klik Apache → <span class="sh-kw">Preferences</span>
→ Ganti port ke <span class="sh-val">8080</span>
→ Akses via: <span class="sh-str">localhost:8080</span>`,
          },
        },

        {
          subtitle: "Step 3 — Buat Project Pertama",
          items: [
            { class: "C:\\laragon\\www", desc: 'Folder "www" adalah htdocs-nya Laragon — semua project PHP harus ada di sini.' },
            { class: "New folder di www", desc: 'Buat folder baru di dalam www, contoh: "belajar-php" — ini menjadi nama project.' },
            { class: "localhost/belajar-php", desc: "Akses project via URL ini di browser — bukan dengan double-click file." },
            {
              class: "Virtual Host otomatis",
              desc: "Laragon otomatis buat virtual host belajar-php.test — lebih profesional dari localhost/folder.",
            },
          ],
          code: {
            lang: "html",
            raw: `<!-- Struktur yang benar -->
C:\laragon\
  └── www\
      └── belajar-php\       ← Folder project kamu
          ├── index.php      ← File utama
          └── about.php

<!-- Cara akses di browser -->
✅ BENAR:  http://localhost/belajar-php
✅ BONUS:  http://belajar-php.test (virtual host Laragon)
❌ SALAH:  Buka file langsung via Windows Explorer`,
            highlighted: `<span class="sh-cm">&lt;!-- Struktur yang benar --&gt;</span>
<span class="sh-val">C:\laragon\</span>
  └── <span class="sh-kw">www\</span>
      └── <span class="sh-str">belajar-php\</span>       <span class="sh-cm">← Folder project kamu</span>
          ├── <span class="sh-kw">index.php</span>      <span class="sh-cm">← File utama</span>
          └── <span class="sh-kw">about.php</span>

<span class="sh-cm">&lt;!-- Cara akses di browser --&gt;</span>
<span class="sh-val">✅</span> BENAR:  <span class="sh-str">http://localhost/belajar-php</span>
<span class="sh-val">✅</span> BONUS:  <span class="sh-str">http://belajar-php.test</span> <span class="sh-cm">(virtual host Laragon)</span>
<span class="sh-val">❌</span> SALAH:  Buka file langsung via Windows Explorer`,
          },
        },
      ],
    },

    // ── SECTION 02 ────────────────────────────────────────────────────────────
    {
      id: "struktur-folder",
      badge: "SECTION 02",
      title: "Struktur Folder Project PHP",
      glow: "purple",
      description: "Organisasi file yang benar sejak awal akan menyelamatkanmu dari kebingungan saat project makin besar.",
      analogy:
        "🗂️ Bayangkan folder project seperti lemari sekolah. Kalau semua buku, alat tulis, dan bekal kamu taruh sembarangan dalam satu tumpukan, pasti susah carinya. Pisahkan: PHP di sini, CSS di sini, gambar di sini — dari hari pertama.",

      cards: [
        {
          subtitle: "Struktur Folder Standar",
          items: [
            { class: "index.php", desc: "File pintu masuk utama — halaman pertama yang terbuka saat user akses domain." },
            { class: "assets/", desc: "Folder untuk semua file statis: CSS, JavaScript, gambar, font." },
            { class: "assets/css/", desc: "Khusus file stylesheet (.css) — pisahkan dari PHP agar mudah dicari." },
            { class: "assets/img/", desc: "Semua gambar yang dipakai di website — jangan taruh di root folder." },
            { class: "includes/", desc: "Komponen PHP yang bisa di-reuse: header.php, footer.php, navbar.php." },
            { class: "pages/", desc: "Halaman-halaman lain selain index: about.php, contact.php, produk.php." },
          ],
          code: {
            lang: "html",
            raw: `belajar-php/
  ├── index.php          ← Halaman utama (wajib ada)
  ├── includes/
  │   ├── header.php     ← Kode <head> + navbar
  │   └── footer.php     ← Kode footer + script
  ├── pages/
  │   ├── about.php
  │   └── contact.php
  └── assets/
      ├── css/
      │   └── style.css
      └── img/
          └── logo.png`,
            highlighted: `<span class="sh-str">belajar-php/</span>
  ├── <span class="sh-kw">index.php</span>          <span class="sh-cm">← Halaman utama (wajib ada)</span>
  ├── <span class="sh-kw">includes/</span>
  │   ├── <span class="sh-prop">header.php</span>     <span class="sh-cm">← Kode &lt;head&gt; + navbar</span>
  │   └── <span class="sh-prop">footer.php</span>     <span class="sh-cm">← Kode footer + script</span>
  ├── <span class="sh-kw">pages/</span>
  │   ├── <span class="sh-prop">about.php</span>
  │   └── <span class="sh-prop">contact.php</span>
  └── <span class="sh-kw">assets/</span>
      ├── <span class="sh-prop">css/</span>
      │   └── style.css
      └── <span class="sh-prop">img/</span>
          └── logo.png`,
          },
        },

        {
          subtitle: "include & require — Reuse Kode PHP",
          items: [
            { class: "include", desc: "Menyisipkan isi file PHP lain ke posisi saat ini — jika file tidak ada, hanya warning." },
            { class: "require", desc: "Sama dengan include, tapi jika file tidak ada, script langsung berhenti (fatal error)." },
            { class: "include_once", desc: "Seperti include, tapi memastikan file hanya di-load satu kali meski dipanggil berkali-kali." },
            { class: "__DIR__", desc: "Magic constant yang berisi path absolut folder file PHP saat ini — mencegah error path." },
          ],
          code: {
            lang: "html",
            raw: `<?php
// index.php — merakit halaman dari komponen

require __DIR__ . '/includes/header.php';
?>

<main class="container mx-auto px-6 py-12">
  <h1>Selamat Datang!</h1>
  <p>Ini konten halaman utama.</p>
</main>

<?php
require __DIR__ . '/includes/footer.php';
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-cm">// index.php — merakit halaman dari komponen</span>

<span class="sh-kw">require</span> <span class="sh-val">__DIR__</span> . <span class="sh-str">'/includes/header.php'</span>;
<span class="sh-tag">?&gt;</span>

<span class="sh-tag">&lt;main</span> <span class="sh-prop">class</span>=<span class="sh-str">"container mx-auto px-6 py-12"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;h1&gt;</span>Selamat Datang!<span class="sh-tag">&lt;/h1&gt;</span>
  <span class="sh-tag">&lt;p&gt;</span>Ini konten halaman utama.<span class="sh-tag">&lt;/p&gt;</span>
<span class="sh-tag">&lt;/main&gt;</span>

<span class="sh-tag">&lt;?php</span>
<span class="sh-kw">require</span> <span class="sh-val">__DIR__</span> . <span class="sh-str">'/includes/footer.php'</span>;
<span class="sh-tag">?&gt;</span>`,
          },
        },
      ],
    },

    // ── SECTION 03 ────────────────────────────────────────────────────────────
    {
      id: "live-coding-dasar",
      badge: "SECTION 03",
      title: "Live Coding — PHP Dasar",
      glow: "cyan",
      description: "Tiga latihan live coding yang membangun dari konsep ke implementasi nyata — tulis, simpan, refresh browser.",
      analogy:
        '🏋️ Belajar PHP tanpa nulis kode itu seperti belajar renang tanpa masuk kolam. Tiga latihan ini dirancang bertahap: dari "Hello World" ke logika kondisi ke loop — masing-masing bisa selesai dalam 5 menit.',

      cards: [
        {
          subtitle: "Latihan 1 — Profil Dinamis (5 menit)",
          items: [
            { class: "Tujuan", desc: "Membuat halaman profil sederhana menggunakan variabel PHP yang disisipkan ke HTML." },
            { class: "Yang dipelajari", desc: "Deklarasi variabel, echo, interpolasi string, dan menyisipkan PHP ke dalam tag HTML." },
            { class: "File", desc: "Buat file baru: C:\\laragon\\www\\belajar-php\\latihan1.php" },
            { class: "Akses", desc: "Buka browser → localhost/belajar-php/latihan1.php" },
          ],
          code: {
            lang: "html",
            raw: `<?php
// Latihan 1: Halaman Profil Dinamis
$nama     = "Budi Santoso";
$kelas    = "XII RPL 2";
$hobi     = "Coding & Gaming";
$nilai    = 92;
?>
<!DOCTYPE html>
<html>
<head>
  <title>Profil <?php echo $nama; ?></title>
</head>
<body>
  <h1>👤 <?= $nama ?></h1>
  <p>Kelas: <strong><?= $kelas ?></strong></p>
  <p>Hobi: <?= $hobi ?></p>
  <p>Nilai PHP: <?= $nilai ?>/100</p>

  <?php if ($nilai >= 75): ?>
    <p style="color:green">✅ LULUS</p>
  <?php else: ?>
    <p style="color:red">❌ Remedial</p>
  <?php endif; ?>
</body>
</html>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-cm">// Latihan 1: Halaman Profil Dinamis</span>
<span class="sh-kw">$nama</span>     = <span class="sh-str">"Budi Santoso"</span>;
<span class="sh-kw">$kelas</span>    = <span class="sh-str">"XII RPL 2"</span>;
<span class="sh-kw">$hobi</span>     = <span class="sh-str">"Coding &amp; Gaming"</span>;
<span class="sh-kw">$nilai</span>    = <span class="sh-val">92</span>;
<span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;!DOCTYPE html&gt;</span>
<span class="sh-tag">&lt;html&gt;&lt;head&gt;</span>
  <span class="sh-tag">&lt;title&gt;</span>Profil <span class="sh-tag">&lt;?php</span> <span class="sh-kw">echo</span> <span class="sh-kw">$nama</span>; <span class="sh-tag">?&gt;&lt;/title&gt;</span>
<span class="sh-tag">&lt;/head&gt;&lt;body&gt;</span>
  <span class="sh-tag">&lt;h1&gt;</span>👤 <span class="sh-tag">&lt;?=</span> <span class="sh-kw">$nama</span> <span class="sh-tag">?&gt;&lt;/h1&gt;</span>
  <span class="sh-tag">&lt;p&gt;</span>Kelas: <span class="sh-tag">&lt;strong&gt;&lt;?=</span> <span class="sh-kw">$kelas</span> <span class="sh-tag">?&gt;&lt;/strong&gt;&lt;/p&gt;</span>
  <span class="sh-tag">&lt;p&gt;</span>Nilai: <span class="sh-tag">&lt;?=</span> <span class="sh-kw">$nilai</span> <span class="sh-tag">?&gt;</span>/100<span class="sh-tag">&lt;/p&gt;</span>

  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">if</span> (<span class="sh-kw">$nilai</span> &gt;= <span class="sh-val">75</span>): <span class="sh-tag">?&gt;</span>
    <span class="sh-tag">&lt;p</span> <span class="sh-prop">style</span>=<span class="sh-str">"color:green"</span><span class="sh-tag">&gt;</span>✅ LULUS<span class="sh-tag">&lt;/p&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">else</span>: <span class="sh-tag">?&gt;</span>
    <span class="sh-tag">&lt;p</span> <span class="sh-prop">style</span>=<span class="sh-str">"color:red"</span><span class="sh-tag">&gt;</span>❌ Remedial<span class="sh-tag">&lt;/p&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">endif</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;/body&gt;&lt;/html&gt;</span>`,
          },
        },

        {
          subtitle: "Latihan 2 — Daftar Produk dengan Loop (10 menit)",
          items: [
            { class: "Tujuan", desc: "Menampilkan daftar produk dari array menggunakan foreach — simulasi data dari database." },
            { class: "Yang dipelajari", desc: "Array asosiatif, foreach, akses key array, dan menampilkan data ke tabel HTML." },
            { class: "Array asosiatif", desc: 'Array dengan key bernama seperti $produk["nama"] — lebih jelas dari index angka.' },
            { class: "File", desc: "Buat file: C:\\laragon\\www\\belajar-php\\latihan2.php" },
          ],
          code: {
            lang: "html",
            raw: `<?php
// Latihan 2: Daftar Produk
$produk = [
  ["nama" => "Laptop Acer",  "harga" => 8500000, "stok" => 5],
  ["nama" => "Mouse Logitech","harga" => 350000,  "stok" => 0],
  ["nama" => "Keyboard Mechanical","harga" => 750000, "stok" => 3],
];
?>
<table border="1" cellpadding="8">
  <tr>
    <th>Nama Produk</th>
    <th>Harga</th>
    <th>Status</th>
  </tr>
  <?php foreach ($produk as $item): ?>
  <tr>
    <td><?= $item["nama"] ?></td>
    <td>Rp <?= number_format($item["harga"], 0, ',', '.') ?></td>
    <td>
      <?php if ($item["stok"] > 0): ?>
        <span style="color:green">Tersedia (<?= $item["stok"] ?>)</span>
      <?php else: ?>
        <span style="color:red">Habis</span>
      <?php endif; ?>
    </td>
  </tr>
  <?php endforeach; ?>
</table>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-cm">// Latihan 2: Daftar Produk</span>
<span class="sh-kw">$produk</span> = [
  [<span class="sh-str">"nama"</span> => <span class="sh-str">"Laptop Acer"</span>,  <span class="sh-str">"harga"</span> => <span class="sh-val">8500000</span>, <span class="sh-str">"stok"</span> => <span class="sh-val">5</span>],
  [<span class="sh-str">"nama"</span> => <span class="sh-str">"Mouse Logitech"</span>, <span class="sh-str">"harga"</span> => <span class="sh-val">350000</span>,  <span class="sh-str">"stok"</span> => <span class="sh-val">0</span>],
  [<span class="sh-str">"nama"</span> => <span class="sh-str">"Keyboard Mechanical"</span>, <span class="sh-str">"harga"</span> => <span class="sh-val">750000</span>, <span class="sh-str">"stok"</span> => <span class="sh-val">3</span>],
];
<span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;table</span> <span class="sh-prop">border</span>=<span class="sh-str">"1"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;tr&gt;&lt;th&gt;</span>Nama<span class="sh-tag">&lt;/th&gt;&lt;th&gt;</span>Harga<span class="sh-tag">&lt;/th&gt;&lt;th&gt;</span>Status<span class="sh-tag">&lt;/th&gt;&lt;/tr&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">foreach</span> (<span class="sh-kw">$produk</span> <span class="sh-kw">as</span> <span class="sh-kw">$item</span>): <span class="sh-tag">?&gt;</span>
  <span class="sh-tag">&lt;tr&gt;</span>
    <span class="sh-tag">&lt;td&gt;&lt;?=</span> <span class="sh-kw">$item</span>[<span class="sh-str">"nama"</span>] <span class="sh-tag">?&gt;&lt;/td&gt;</span>
    <span class="sh-tag">&lt;td&gt;</span>Rp <span class="sh-tag">&lt;?=</span> <span class="sh-kw">number_format</span>(<span class="sh-kw">$item</span>[<span class="sh-str">"harga"</span>], <span class="sh-val">0</span>, <span class="sh-str">','</span>, <span class="sh-str">'.'</span>) <span class="sh-tag">?&gt;&lt;/td&gt;</span>
    <span class="sh-tag">&lt;td&gt;</span>
      <span class="sh-tag">&lt;?php</span> <span class="sh-kw">if</span> (<span class="sh-kw">$item</span>[<span class="sh-str">"stok"</span>] &gt; <span class="sh-val">0</span>): <span class="sh-tag">?&gt;</span>
        <span class="sh-tag">&lt;span</span> <span class="sh-prop">style</span>=<span class="sh-str">"color:green"</span><span class="sh-tag">&gt;</span>Tersedia<span class="sh-tag">&lt;/span&gt;</span>
      <span class="sh-tag">&lt;?php</span> <span class="sh-kw">else</span>: <span class="sh-tag">?&gt;</span>
        <span class="sh-tag">&lt;span</span> <span class="sh-prop">style</span>=<span class="sh-str">"color:red"</span><span class="sh-tag">&gt;</span>Habis<span class="sh-tag">&lt;/span&gt;</span>
      <span class="sh-tag">&lt;?php</span> <span class="sh-kw">endif</span>; <span class="sh-tag">?&gt;</span>
    <span class="sh-tag">&lt;/td&gt;</span>
  <span class="sh-tag">&lt;/tr&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">endforeach</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;/table&gt;</span>`,
          },
        },
      ],
    },

    // ── SECTION 04 ────────────────────────────────────────────────────────────
    {
      id: "project-mini",
      badge: "SECTION 04",
      title: "Mini Project — Kartu Rapor Digital",
      glow: "purple",
      description: "Gabungkan semua yang sudah dipelajari: variabel, array, foreach, if-else, dan include — menjadi satu halaman rapor yang rapi.",
      analogy:
        '🏆 Ini adalah "ujian praktek" dari semua seri sebelumnya. Seperti bikin masakan pertama dari bahan-bahan yang sudah kamu pelajari satu per satu. Hasilnya adalah halaman web nyata yang bisa kamu tunjukkan ke orang lain.',

      cards: [
        {
          subtitle: "Target Output Project",
          items: [
            { class: "index.php", desc: "Halaman utama rapor dengan data siswa dan tabel nilai semua mata pelajaran." },
            { class: "includes/header.php", desc: "Template head HTML + Tailwind CDN yang di-reuse di semua halaman." },
            { class: "includes/footer.php", desc: "Penutup tag body dan html — dipanggil di akhir setiap halaman." },
            { class: "Fitur", desc: "Nama siswa dinamis, tabel nilai dari array, rata-rata otomatis, status lulus/tidak." },
          ],
          code: {
            lang: "html",
            raw: `<!-- includes/header.php -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rapor Digital</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen font-sans">`,
            highlighted: `<span class="sh-cm">&lt;!-- includes/header.php --&gt;</span>
<span class="sh-tag">&lt;!DOCTYPE html&gt;</span>
<span class="sh-tag">&lt;html</span> <span class="sh-prop">lang</span>=<span class="sh-str">"id"</span><span class="sh-tag">&gt;</span>
<span class="sh-tag">&lt;head&gt;</span>
  <span class="sh-tag">&lt;meta</span> <span class="sh-prop">charset</span>=<span class="sh-str">"UTF-8"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;meta</span> <span class="sh-prop">name</span>=<span class="sh-str">"viewport"</span> <span class="sh-prop">content</span>=<span class="sh-str">"width=device-width, initial-scale=1.0"</span><span class="sh-tag">&gt;</span>
  <span class="sh-tag">&lt;title&gt;</span>Rapor Digital<span class="sh-tag">&lt;/title&gt;</span>
  <span class="sh-tag">&lt;script</span> <span class="sh-prop">src</span>=<span class="sh-str">"https://cdn.tailwindcss.com"</span><span class="sh-tag">&gt;&lt;/script&gt;</span>
<span class="sh-tag">&lt;/head&gt;</span>
<span class="sh-tag">&lt;body</span> <span class="sh-prop">class</span>=<span class="sh-str">"bg-gray-100 min-h-screen font-sans"</span><span class="sh-tag">&gt;</span>`,
          },
        },

        {
          subtitle: "index.php — Halaman Rapor Lengkap",
          items: [
            { class: "array_sum()", desc: "Fungsi PHP bawaan untuk menjumlahkan semua nilai dalam array secara otomatis." },
            { class: "count()", desc: "Menghitung jumlah elemen dalam array — dipakai untuk menghitung rata-rata." },
            { class: "round()", desc: "Membulatkan angka desimal — untuk menampilkan rata-rata yang rapi." },
            { class: "number_format()", desc: "Memformat angka dengan pemisah ribuan dan desimal sesuai kebutuhan." },
          ],
          code: {
            lang: "html",
            raw: `<?php
require __DIR__ . '/includes/header.php';

$siswa = [
  "nama"  => "Budi Santoso",
  "kelas" => "XII RPL 2",
  "nis"   => "2024001",
];

$nilai = [
  "Matematika"     => 88,
  "Bahasa Indonesia" => 92,
  "Bahasa Inggris" => 85,
  "Pemrograman Web"=> 95,
  "Basis Data"     => 90,
];

$rata = round(array_sum($nilai) / count($nilai), 1);
$lulus = $rata >= 75;
?>

<div class="max-w-2xl mx-auto p-6 my-8">
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h1 class="text-2xl font-bold text-slate-800 mb-1">📋 Rapor Digital</h1>
    <p class="text-slate-500 mb-6">Semester Genap 2024/2025</p>

    <!-- Info Siswa -->
    <div class="bg-slate-50 rounded-xl p-4 mb-6">
      <p><strong>Nama:</strong> <?= $siswa["nama"] ?></p>
      <p><strong>Kelas:</strong> <?= $siswa["kelas"] ?></p>
      <p><strong>NIS:</strong> <?= $siswa["nis"] ?></p>
    </div>

    <!-- Tabel Nilai -->
    <table class="w-full text-left mb-6">
      <thead>
        <tr class="border-b-2 border-slate-200">
          <th class="py-2">Mata Pelajaran</th>
          <th class="py-2 text-right">Nilai</th>
          <th class="py-2 text-right">Grade</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($nilai as $mapel => $angka): ?>
        <tr class="border-b border-slate-100">
          <td class="py-3"><?= $mapel ?></td>
          <td class="py-3 text-right font-mono"><?= $angka ?></td>
          <td class="py-3 text-right">
            <?php if ($angka >= 90): ?>
              <span class="text-green-600 font-bold">A</span>
            <?php elseif ($angka >= 80): ?>
              <span class="text-blue-600 font-bold">B</span>
            <?php else: ?>
              <span class="text-yellow-600 font-bold">C</span>
            <?php endif; ?>
          </td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>

    <!-- Rata-rata & Status -->
    <div class="flex justify-between items-center p-4 rounded-xl
      <?= $lulus ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200' ?>">
      <div>
        <p class="text-sm text-slate-500">Nilai Rata-rata</p>
        <p class="text-3xl font-bold <?= $lulus ? 'text-green-600' : 'text-red-600' ?>">
          <?= $rata ?>
        </p>
      </div>
      <div class="text-right">
        <p class="text-2xl"><?= $lulus ? '✅' : '❌' ?></p>
        <p class="font-bold <?= $lulus ? 'text-green-600' : 'text-red-600' ?>">
          <?= $lulus ? 'LULUS' : 'REMEDIAL' ?>
        </p>
      </div>
    </div>
  </div>
</div>

<?php require __DIR__ . '/includes/footer.php'; ?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
<span class="sh-kw">require</span> <span class="sh-val">__DIR__</span> . <span class="sh-str">'/includes/header.php'</span>;

<span class="sh-kw">$siswa</span> = [
  <span class="sh-str">"nama"</span>  => <span class="sh-str">"Budi Santoso"</span>,
  <span class="sh-str">"kelas"</span> => <span class="sh-str">"XII RPL 2"</span>,
];

<span class="sh-kw">$nilai</span> = [
  <span class="sh-str">"Matematika"</span>      => <span class="sh-val">88</span>,
  <span class="sh-str">"Pemrograman Web"</span> => <span class="sh-val">95</span>,
  <span class="sh-str">"Basis Data"</span>      => <span class="sh-val">90</span>,
];

<span class="sh-kw">$rata</span>  = <span class="sh-kw">round</span>(<span class="sh-kw">array_sum</span>(<span class="sh-kw">$nilai</span>) / <span class="sh-kw">count</span>(<span class="sh-kw">$nilai</span>), <span class="sh-val">1</span>);
<span class="sh-kw">$lulus</span> = <span class="sh-kw">$rata</span> &gt;= <span class="sh-val">75</span>;
<span class="sh-tag">?&gt;</span>

<span class="sh-tag">&lt;div</span> <span class="sh-prop">class</span>=<span class="sh-str">"max-w-2xl mx-auto p-6 my-8"</span><span class="sh-tag">&gt;</span>
  <span class="sh-cm">&lt;!-- ... tabel nilai dengan foreach ... --&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">foreach</span> (<span class="sh-kw">$nilai</span> <span class="sh-kw">as</span> <span class="sh-kw">$mapel</span> => <span class="sh-kw">$angka</span>): <span class="sh-tag">?&gt;</span>
    <span class="sh-tag">&lt;tr&gt;</span>
      <span class="sh-tag">&lt;td&gt;&lt;?=</span> <span class="sh-kw">$mapel</span> <span class="sh-tag">?&gt;&lt;/td&gt;</span>
      <span class="sh-tag">&lt;td&gt;&lt;?=</span> <span class="sh-kw">$angka</span> <span class="sh-tag">?&gt;&lt;/td&gt;</span>
    <span class="sh-tag">&lt;/tr&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">endforeach</span>; <span class="sh-tag">?&gt;</span>
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
        id: "card-rapor",
        label: "📋 Style Kartu Rapor",
        description: "Eksperimen tampilan card yang akan dipakai di mini project rapor digital.",
        preview: "card",
        defaultState: {
          bgColor: "bg-white",
          rounded: "rounded-2xl",
          shadow: "shadow-lg",
          padding: "p-8",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "bgColor",
            label: "Background",
            options: ["bg-white", "bg-slate-50", "bg-blue-50", "bg-green-50"],
          },
          {
            type: "toggle-group",
            stateKey: "rounded",
            label: "Border Radius",
            options: ["rounded-none", "rounded-lg", "rounded-2xl", "rounded-3xl"],
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
            options: ["p-4", "p-6", "p-8", "p-10"],
          },
        ],
      },
      {
        id: "flex-profil",
        label: "👤 Layout Info Siswa",
        description: "Atur layout baris info nama/kelas/NIS seperti yang ada di kartu rapor.",
        preview: "flex",
        defaultState: {
          direction: "flex-col",
          gap: "gap-4",
          justify: "justify-start",
          items: "items-start",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "direction",
            label: "Arah",
            options: ["flex-col", "flex-row", "flex-col-reverse", "flex-row-reverse"],
          },
          {
            type: "toggle-group",
            stateKey: "gap",
            label: "Gap",
            options: ["gap-1", "gap-4", "gap-8", "gap-12"],
          },
          {
            type: "toggle-group",
            stateKey: "justify",
            label: "Justify",
            options: ["justify-start", "justify-center", "justify-between", "justify-end"],
          },
          {
            type: "toggle-group",
            stateKey: "items",
            label: "Align Items",
            options: ["items-start", "items-center", "items-end", "items-stretch"],
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
        q: "Apa perbedaan utama Laragon dibanding XAMPP?",
        opts: [
          "Laragon hanya bisa untuk PHP, XAMPP untuk semua bahasa",
          "Laragon lebih ringan, otomatis buat virtual host, dan interface lebih modern",
          "XAMPP gratis, Laragon berbayar",
          "Tidak ada perbedaan, keduanya identik",
        ],
        ans: 1,
        explain:
          "Laragon lebih ringan dari XAMPP karena tidak perlu banyak konfigurasi manual. Salah satu fitur unggulannya adalah pembuatan virtual host otomatis (nama-folder.test) yang membuat pengembangan lebih profesional.",
      },
      {
        q: "Di Laragon, di folder mana kamu harus menyimpan file PHP project kamu?",
        opts: ["C:\\laragon\\bin\\", "C:\\laragon\\etc\\", "C:\\laragon\\www\\", "C:\\laragon\\tmp\\"],
        ans: 2,
        explain:
          'Folder "www" di Laragon adalah setara dengan "htdocs" di XAMPP. Semua project PHP harus diletakkan di sini agar Apache bisa menemukannya.',
      },
      {
        q: 'Setelah membuat folder "toko-online" di dalam www Laragon, bagaimana cara mengaksesnya di browser?',
        opts: [
          "file:///C:/laragon/www/toko-online/index.php",
          "localhost/toko-online",
          "C:\\laragon\\www\\toko-online\\index.php",
          "www/toko-online",
        ],
        ans: 1,
        explain:
          'File PHP harus diakses melalui web server Apache via URL "localhost/nama-folder". Double-click file tidak akan menjalankan PHP — file harus diproses Apache terlebih dahulu.',
      },
      {
        q: 'Apa fungsi dari file "header.php" yang disimpan di folder "includes/"?',
        opts: [
          "Menyimpan konfigurasi database",
          "Menyimpan template bagian atas halaman (head, navbar) yang bisa di-reuse",
          "File wajib PHP yang harus ada di setiap project",
          "File yang berisi fungsi-fungsi PHP kustom",
        ],
        ans: 1,
        explain:
          "Pattern includes/header.php adalah cara reuse kode di PHP tanpa framework. Daripada nulis ulang tag head dan navbar di setiap halaman, cukup require header.php sekali.",
      },
      {
        q: 'Apa perbedaan antara "include" dan "require" di PHP?',
        opts: [
          "Include lebih cepat dari require",
          "Require hanya bisa dipakai sekali, include bisa berkali-kali",
          "Jika file tidak ditemukan: include hanya warning (lanjut), require fatal error (berhenti)",
          "Keduanya sama persis, tidak ada perbedaan",
        ],
        ans: 2,
        explain:
          'Gunakan "require" untuk file yang wajib ada (seperti header dan footer) — jika tidak ditemukan, lebih baik website berhenti total daripada tampil setengah-setengah. Gunakan "include" untuk file opsional.',
      },
      {
        q: "Dalam sintaks foreach PHP alternatif, manakah cara yang BENAR untuk menggunakan foreach di dalam HTML?",
        opts: [
          '<?php foreach($data as $item) { echo "<li>$item</li>"; } ?>',
          "<?php foreach($data as $item): ?><li><?= $item ?></li><?php endforeach; ?>",
          '<foreach data="$data"><li><?= $item ?></li></foreach>',
          "<?php for $item in $data: ?><li><?= $item ?></li><?php end; ?>",
        ],
        ans: 1,
        explain:
          'Sintaks alternatif dengan "foreach(...): ... endforeach;" lebih bersih saat dicampur HTML karena tidak ada kurung kurawal yang "terpisah" dari tag HTML-nya.',
      },
      {
        q: 'Apa yang dilakukan fungsi "array_sum($nilai)" dalam konteks rapor?',
        opts: [
          "Menghitung jumlah elemen di array $nilai",
          "Menjumlahkan semua nilai angka dalam array $nilai",
          "Mengurutkan nilai dari terkecil ke terbesar",
          "Menggabungkan semua string dalam array",
        ],
        ans: 1,
        explain:
          "array_sum() menjumlahkan semua value numerik dalam array. Dikombinasikan dengan count() (untuk jumlah mapel), kita bisa hitung rata-rata: array_sum($nilai) / count($nilai).",
      },
      {
        q: "Kenapa __DIR__ digunakan saat memanggil require, bukan path relatif biasa?",
        opts: [
          "__DIR__ lebih pendek dari menulis path lengkap",
          "__DIR__ memastikan path selalu benar dari lokasi file PHP itu sendiri, mencegah error di berbagai sistem",
          "__DIR__ adalah cara baru yang menggantikan include_once",
          "__DIR__ hanya berfungsi di Laragon, tidak di XAMPP",
        ],
        ans: 1,
        explain:
          '__DIR__ berisi path absolut folder file PHP saat ini. Ini mencegah error path yang sering terjadi saat menggunakan path relatif (seperti "../includes/header.php") yang bisa salah tergantung dari mana script dipanggil.',
      },
      {
        q: "Dalam mini project rapor, bagaimana cara menghitung nilai rata-rata dari array $nilai?",
        opts: ["$rata = average($nilai)", "$rata = $nilai / 5", "$rata = array_sum($nilai) / count($nilai)", "$rata = sum($nilai) / length($nilai)"],
        ans: 2,
        explain:
          "PHP tidak punya fungsi average() bawaan. Cara standar adalah array_sum() untuk total semua nilai, dibagi count() untuk jumlah mata pelajaran. Hasilnya bisa dibulatkan dengan round().",
      },
      {
        q: "Saat Laragon menampilkan indikator berwarna merah pada Apache, apa yang harus dilakukan pertama kali?",
        opts: [
          "Restart komputer",
          "Reinstall Laragon dari awal",
          "Cek apakah ada aplikasi lain (Skype, IIS, atau web server lain) yang memakai port 80",
          "Hapus semua file di folder www",
        ],
        ans: 2,
        explain:
          "Port 80 bentrok adalah penyebab paling umum Apache gagal start. Aplikasi seperti Skype, IIS Windows, atau web server lain sering memakai port 80. Solusinya: tutup aplikasi tersebut, atau ganti port Apache Laragon ke 8080.",
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
      { id: "c1", text: "Saya sudah berhasil menginstall Laragon dan mengakses localhost di browser dengan indikator Apache hijau." },
      { id: "c2", text: "Saya paham bahwa file PHP harus disimpan di C:\\laragon\\www\\ dan diakses via URL, bukan double-click." },
      { id: "c3", text: "Saya sudah membuat struktur folder project dengan folder includes/, pages/, dan assets/." },
      { id: "c4", text: "Saya bisa menggunakan require untuk memasukkan header.php dan footer.php ke setiap halaman." },
      { id: "c5", text: "Saya berhasil menyelesaikan Latihan 1 (halaman profil dinamis) dan bisa diakses di browser." },
      { id: "c6", text: "Saya berhasil menyelesaikan Latihan 2 (daftar produk dengan foreach dan kondisi stok)." },
      { id: "c7", text: "Saya sudah membuat Mini Project Rapor Digital yang menampilkan tabel nilai dan rata-rata otomatis." },
      { id: "c8", text: "Saya mendapat nilai quiz minimal 8/10 untuk seri ini." },
    ],
  },
};

export default cheatsheetData;

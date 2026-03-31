// src/data/cheatsheet/seri-php-dasar.js

const cheatsheetData = {
  // ─── META ──────────────────────────────────────────────────────────────────
  meta: {
    slug: "php-dasar",
    seriesBadge: "// SERI 1–3 — PHP DASAR",
    title: "PHP Dasar: Server-Side, Logika & Templating",
    subtitle: "Dari memahami cara kerja server hingga menulis logika PHP pertamamu di dalam HTML.",
    navTitle: "PHP Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "3" },
      { label: "Class Kunci", value: "22" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    tags: ["PHP", "Server-Side", "XAMPP", "Logika", "Templating"],
  },

  // ─── NAV LINKS ─────────────────────────────────────────────────────────────
  navLinks: [
    { href: "#server-side-engine", label: "Server-Side" },
    { href: "#vil-logic", label: "V-I-L Logic" },
    { href: "#php-html-integration", label: "PHP & HTML" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  // ─── SECTIONS ──────────────────────────────────────────────────────────────
  sections: [
    {
      id: "server-side-engine",
      badge: "SECTION 01",
      title: "The Server-Side Engine",
      glow: "cyan",
      description: "Memahami mengapa PHP berjalan di server, bukan di browser — dan cara menyiapkan lingkungan kerjamu.",
      analogy:
        "🏧 PHP seperti mesin ATM. Tampilannya selalu sama, tapi angka yang muncul berbeda tergantung kartu siapa yang dimasukkan. Browser cuma melihat hasil akhirnya (HTML), bukan mesinnya.",

      cards: [
        {
          subtitle: "HTML vs PHP: Statis vs Dinamis",
          items: [
            { class: "HTML", desc: "Statis seperti brosur kertas — apa yang ditulis, itu yang tampil, tidak bisa berubah." },
            { class: "PHP", desc: "Dinamis — kode diproses server dulu, lalu hasilnya dikirim sebagai HTML ke browser." },
            { class: "Apache/Nginx", desc: 'Web server yang bertugas "memasak" kode PHP menjadi HTML sebelum dikirim ke user.' },
            { class: "Alur request", desc: "Browser minta halaman → Server jalankan PHP → Server kirim HTML → Browser tampilkan." },
          ],
          code: {
            lang: "html",
            raw: `<!-- HTML biasa: statis -->
<p>Halo, nama saya Budi.</p>

<!-- PHP: dinamis, diproses server -->
<?php
  $nama = "Budi";
  echo "<p>Halo, nama saya $nama.</p>";
?>`,
            highlighted: `<span class="sh-cm">&lt;!-- HTML biasa: statis --&gt;</span>
<span class="sh-tag">&lt;p&gt;</span>Halo, nama saya Budi.<span class="sh-tag">&lt;/p&gt;</span>

<span class="sh-cm">&lt;!-- PHP: dinamis, diproses server --&gt;</span>
<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$nama</span> = <span class="sh-str">"Budi"</span>;
  <span class="sh-kw">echo</span> <span class="sh-str">"&lt;p&gt;Halo, nama saya $nama.&lt;/p&gt;"</span>;
<span class="sh-tag">?&gt;</span>`,
          },
        },
        {
          subtitle: "Setup XAMPP / Laragon",
          items: [
            { class: "XAMPP / Laragon", desc: "Aplikasi yang menyediakan Apache (web server) dan PHP di komputermu sekaligus." },
            { class: "htdocs", desc: "Folder tempat menyimpan file PHP di XAMPP — wajib diletakkan di sini." },
            { class: "www", desc: "Folder tempat menyimpan file PHP di Laragon — sama fungsinya dengan htdocs." },
            { class: "localhost/nama-folder", desc: "Cara mengakses file PHP via URL di browser, bukan dengan double-click file." },
          ],
          code: {
            lang: "html",
            raw: `<!-- Cara akses yang BENAR -->
URL: http://localhost/project-ku/index.php

<!-- Cara akses yang SALAH -->
File: C:/xampp/htdocs/project-ku/index.php
(double-click file tidak akan menjalankan PHP)`,
            highlighted: `<span class="sh-cm">&lt;!-- Cara akses yang BENAR --&gt;</span>
URL: <span class="sh-str">http://localhost/project-ku/index.php</span>

<span class="sh-cm">&lt;!-- Cara akses yang SALAH --&gt;</span>
File: <span class="sh-val">C:/xampp/htdocs/project-ku/index.php</span>
<span class="sh-cm">(double-click file tidak akan menjalankan PHP)</span>`,
          },
        },
        {
          subtitle: "Penulisan Dasar PHP",
          items: [
            { class: "<?php", desc: "Tag pembuka wajib untuk semua kode PHP — tanpa ini, teks dianggap HTML biasa." },
            { class: "?>", desc: "Tag penutup PHP (opsional) — boleh dihilangkan jika file hanya berisi PHP." },
            { class: ";", desc: "Titik koma wajib di akhir setiap baris perintah — lupa satu = White Screen of Death." },
            { class: "White Screen of Death", desc: "Error fatal yang membuat halaman menjadi putih kosong, biasanya karena lupa titik koma." },
          ],
          code: {
            lang: "html",
            raw: `<?php
  // Ini adalah komentar
  echo "Hello World";   // Jangan lupa titik koma!
  echo "Baris kedua";   // Setiap baris harus ada titik koma
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
  <span class="sh-cm">// Ini adalah komentar</span>
  <span class="sh-kw">echo</span> <span class="sh-str">"Hello World"</span>;   <span class="sh-cm">// Jangan lupa titik koma!</span>
  <span class="sh-kw">echo</span> <span class="sh-str">"Baris kedua"</span>;   <span class="sh-cm">// Setiap baris harus ada titik koma</span>
<span class="sh-tag">?&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "vil-logic",
      badge: "SECTION 02",
      title: "The V-I-L Logic",
      glow: "purple",
      description: "Tiga pilar logika PHP yang paling sering digunakan: Variables, If-Else, dan Loops.",
      analogy:
        "🧱 Bayangkan V-I-L seperti tiga alat tukang: Ember (Variable) untuk menyimpan sesuatu, Rambu (If-Else) untuk memilih jalan, dan Mesin fotokopi (Loop) untuk mengulang hal yang sama berkali-kali.",

      cards: [
        {
          subtitle: "Variables & Echo",
          items: [
            { class: "$nama_variabel", desc: "Variabel PHP selalu diawali tanda dollar ($) — tanpa ini PHP tidak mengenalinya." },
            { class: "String", desc: 'Tipe data teks yang ditulis dalam tanda kutip, contoh: "Laptop Gaming".' },
            { class: "Integer", desc: "Tipe data angka tanpa kutip, contoh: 15000000." },
            { class: "echo", desc: "Perintah untuk mencetak/menampilkan data ke halaman HTML." },
            { class: "Interpolasi string", desc: 'Menulis variabel langsung di dalam string dengan kutip ganda: "$nama".' },
          ],
          code: {
            lang: "html",
            raw: `<?php
  $nama_produk = "Laptop Gaming";
  $harga = 15000000;
  echo "Jual $nama_produk seharga Rp $harga";
  // Output: Jual Laptop Gaming seharga Rp 15000000
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$nama_produk</span> = <span class="sh-str">"Laptop Gaming"</span>;
  <span class="sh-kw">$harga</span> = <span class="sh-val">15000000</span>;
  <span class="sh-kw">echo</span> <span class="sh-str">"Jual $nama_produk seharga Rp $harga"</span>;
  <span class="sh-cm">// Output: Jual Laptop Gaming seharga Rp 15000000</span>
<span class="sh-tag">?&gt;</span>`,
          },
        },
        {
          subtitle: "If-Else: Pengambil Keputusan",
          items: [
            { class: "if ($kondisi)", desc: "Jalankan blok kode jika kondisi bernilai true (benar)." },
            { class: "else", desc: "Jalankan blok kode alternatif jika kondisi if bernilai false (salah)." },
            { class: "elseif", desc: "Tambahkan kondisi tambahan di antara if dan else untuk lebih dari dua kemungkinan." },
            { class: "Operator perbandingan", desc: "Simbol untuk membandingkan: > lebih dari, < kurang dari, == sama dengan, != tidak sama." },
          ],
          code: {
            lang: "html",
            raw: `<?php
  $stok = 0;
  if ($stok > 0) {
      echo "Silahkan Beli";
  } else {
      echo "Stok Habis!";
  }
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$stok</span> = <span class="sh-val">0</span>;
  <span class="sh-kw">if</span> (<span class="sh-kw">$stok</span> &gt; <span class="sh-val">0</span>) {
      <span class="sh-kw">echo</span> <span class="sh-str">"Silahkan Beli"</span>;
  } <span class="sh-kw">else</span> {
      <span class="sh-kw">echo</span> <span class="sh-str">"Stok Habis!"</span>;
  }
<span class="sh-tag">?&gt;</span>`,
          },
        },
        {
          subtitle: "Foreach: Loop Paling Penting",
          items: [
            { class: "foreach", desc: "Loop yang berjalan untuk setiap item dalam sebuah array — paling sering dipakai untuk data dari database." },
            { class: "$array as $item", desc: "Sintaks foreach: $array adalah daftar datanya, $item adalah satu data per giliran." },
            { class: "Array", desc: "Variabel yang menyimpan banyak nilai sekaligus, seperti daftar produk atau nama siswa." },
            { class: "for ($i=0; ...)", desc: "Loop dengan counter angka — dipakai jika tahu berapa kali harus berulang." },
          ],
          code: {
            lang: "html",
            raw: `<?php
  $produk = ["Laptop", "Mouse", "Keyboard"];
  foreach ($produk as $item) {
      echo "<li>$item</li>";
  }
  // Output: <li>Laptop</li><li>Mouse</li><li>Keyboard</li>
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$produk</span> = [<span class="sh-str">"Laptop"</span>, <span class="sh-str">"Mouse"</span>, <span class="sh-str">"Keyboard"</span>];
  <span class="sh-kw">foreach</span> (<span class="sh-kw">$produk</span> <span class="sh-kw">as</span> <span class="sh-kw">$item</span>) {
      <span class="sh-kw">echo</span> <span class="sh-str">"&lt;li&gt;$item&lt;/li&gt;"</span>;
  }
  <span class="sh-cm">// Output: &lt;li&gt;Laptop&lt;/li&gt;&lt;li&gt;Mouse&lt;/li&gt;&lt;li&gt;Keyboard&lt;/li&gt;</span>
<span class="sh-tag">?&gt;</span>`,
          },
        },
      ],
    },

    {
      id: "php-html-integration",
      badge: "SECTION 03",
      title: "PHP & HTML Integration",
      glow: "cyan",
      description: "Menggabungkan kekuatan PHP dengan desain HTML — menyisipkan logika server langsung di dalam markup.",
      analogy:
        "🍳 Seperti memasak nasi goreng: HTML adalah piringnya, PHP adalah bumbu dan isinya. Keduanya bisa dicampur kapan saja — PHP bisa masuk di mana pun dalam HTML selama dibungkus dengan <?php ?>.",

      cards: [
        {
          subtitle: "Templating: Sisipkan PHP ke HTML",
          items: [
            { class: "<?php echo $var; ?>", desc: "Cara standar menyisipkan nilai variabel PHP di dalam HTML." },
            { class: "<?= $var ?>", desc: "Shortcut untuk <?php echo $var; ?> — lebih ringkas, hasil sama." },
            { class: "Ternary operator", desc: 'Jalan pintas if-else satu baris: ($kondisi) ? "benar" : "salah".' },
            { class: "Dynamic class", desc: "Mengganti class Tailwind/CSS secara dinamis berdasarkan kondisi dari PHP." },
          ],
          code: {
            lang: "html",
            raw: `<h1 class="text-3xl font-bold <?php echo ($status == 'lulus') ? 'text-green-500' : 'text-red-500'; ?>">
    Status: <?php echo $status; ?>
</h1>`,
            highlighted: `<span class="sh-tag">&lt;h1</span> <span class="sh-prop">class</span>=<span class="sh-str">"text-3xl font-bold </span><span class="sh-tag">&lt;?php</span> <span class="sh-kw">echo</span> (<span class="sh-kw">$status</span> == <span class="sh-str">'lulus'</span>) ? <span class="sh-str">'text-green-500'</span> : <span class="sh-str">'text-red-500'</span>; <span class="sh-tag">?&gt;</span><span class="sh-str">"</span><span class="sh-tag">&gt;</span>
    Status: <span class="sh-tag">&lt;?php</span> <span class="sh-kw">echo</span> <span class="sh-kw">$status</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;/h1&gt;</span>`,
          },
        },
        {
          subtitle: "Concatenation: Menyambung Teks",
          items: [
            { class: ". (titik)", desc: "Operator concatenation untuk menyambung dua potong teks atau variabel menjadi satu." },
            { class: ".= (titik sama dengan)", desc: "Shortcut untuk menambahkan teks ke variabel yang sudah ada." },
            { class: "echo vs print", desc: "echo lebih cepat dan bisa menerima banyak argumen — gunakan echo sebagai default." },
            { class: "nl2br()", desc: "Fungsi PHP untuk mengubah newline (\\n) menjadi tag <br> agar tampil di HTML." },
          ],
          code: {
            lang: "html",
            raw: `<?php
  $nama = "Zaki";
  $kota = "Jakarta";
  
  // Menggunakan concatenation
  echo "Halo " . $nama . ", selamat datang dari " . $kota . "!";
  
  // Menggunakan interpolasi string (lebih mudah dibaca)
  echo "Halo $nama, selamat datang dari $kota!";
?>`,
            highlighted: `<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$nama</span> = <span class="sh-str">"Zaki"</span>;
  <span class="sh-kw">$kota</span> = <span class="sh-str">"Jakarta"</span>;
  
  <span class="sh-cm">// Menggunakan concatenation</span>
  <span class="sh-kw">echo</span> <span class="sh-str">"Halo "</span> . <span class="sh-kw">$nama</span> . <span class="sh-str">", selamat datang dari "</span> . <span class="sh-kw">$kota</span> . <span class="sh-str">"!"</span>;
  
  <span class="sh-cm">// Menggunakan interpolasi string (lebih mudah dibaca)</span>
  <span class="sh-kw">echo</span> <span class="sh-str">"Halo $nama, selamat datang dari $kota!"</span>;
<span class="sh-tag">?&gt;</span>`,
          },
        },
        {
          subtitle: "Tabel Referensi Cepat",
          items: [
            { class: "<?php ... ?>", desc: "Tag pembuka dan penutup yang menandai area kode server PHP." },
            { class: '$nama = "Zaki"', desc: "Menyimpan nilai teks ke dalam variabel bernama $nama." },
            { class: "echo $nama", desc: "Menampilkan isi variabel $nama ke halaman HTML." },
            { class: "if (...) { }", desc: "Menjalankan blok kode hanya jika kondisi di dalam tanda kurung bernilai benar." },
            { class: "foreach ($data as $item)", desc: "Menampilkan setiap item dalam array $data satu per satu secara otomatis." },
            { class: '"Halo " . $nama', desc: 'Menyambung teks "Halo " dengan isi variabel $nama menggunakan titik.' },
          ],
          code: {
            lang: "html",
            raw: `<!-- Template PHP+HTML lengkap -->
<?php
  $status = "lulus";
  $nilai = 85;
  $mapel = ["MTK", "B.Indo", "IPA"];
?>

<p>Status: <?= $status ?></p>
<p>Nilai: <?= $nilai ?></p>
<ul>
  <?php foreach ($mapel as $m): ?>
    <li><?= $m ?></li>
  <?php endforeach; ?>
</ul>`,
            highlighted: `<span class="sh-cm">&lt;!-- Template PHP+HTML lengkap --&gt;</span>
<span class="sh-tag">&lt;?php</span>
  <span class="sh-kw">$status</span> = <span class="sh-str">"lulus"</span>;
  <span class="sh-kw">$nilai</span> = <span class="sh-val">85</span>;
  <span class="sh-kw">$mapel</span> = [<span class="sh-str">"MTK"</span>, <span class="sh-str">"B.Indo"</span>, <span class="sh-str">"IPA"</span>];
<span class="sh-tag">?&gt;</span>

<span class="sh-tag">&lt;p&gt;</span>Status: <span class="sh-tag">&lt;?=</span> <span class="sh-kw">$status</span> <span class="sh-tag">?&gt;&lt;/p&gt;</span>
<span class="sh-tag">&lt;p&gt;</span>Nilai: <span class="sh-tag">&lt;?=</span> <span class="sh-kw">$nilai</span> <span class="sh-tag">?&gt;&lt;/p&gt;</span>
<span class="sh-tag">&lt;ul&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">foreach</span> (<span class="sh-kw">$mapel</span> <span class="sh-kw">as</span> <span class="sh-kw">$m</span>): <span class="sh-tag">?&gt;</span>
    <span class="sh-tag">&lt;li&gt;&lt;?=</span> <span class="sh-kw">$m</span> <span class="sh-tag">?&gt;&lt;/li&gt;</span>
  <span class="sh-tag">&lt;?php</span> <span class="sh-kw">endforeach</span>; <span class="sh-tag">?&gt;</span>
<span class="sh-tag">&lt;/ul&gt;</span>`,
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
        id: "kondisi-stok",
        label: "🏧 Kondisi Stok Produk",
        description: "Simulasikan logika if-else: ubah kondisi stok dan lihat bagaimana tampilan tombol berubah.",
        preview: "card",
        defaultState: {
          bgColor: "bg-gray-900",
          padding: "p-6",
          rounded: "rounded-xl",
          border: "border border-gray-700",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "bgColor",
            label: "Background Card",
            options: ["bg-gray-900", "bg-slate-800", "bg-zinc-900", "bg-neutral-900"],
          },
          {
            type: "toggle-group",
            stateKey: "padding",
            label: "Padding",
            options: ["p-4", "p-6", "p-8", "p-10"],
          },
          {
            type: "toggle-group",
            stateKey: "rounded",
            label: "Border Radius",
            options: ["rounded-none", "rounded-lg", "rounded-xl", "rounded-3xl"],
          },
          {
            type: "toggle-group",
            stateKey: "border",
            label: "Border Style",
            options: ["border border-gray-700", "border border-cyan-500", "border-2 border-purple-500", "border-0"],
          },
        ],
      },

      {
        id: "flex-layout",
        label: "📐 Flex Container Layout",
        description: "Atur layout item-item PHP output seperti daftar produk menggunakan Flexbox.",
        preview: "flex",
        defaultState: {
          justifyContent: "justify-start",
          alignItems: "items-center",
          gap: "gap-4",
          flexDir: "flex-row",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "justifyContent",
            label: "Justify Content",
            options: ["justify-start", "justify-center", "justify-between", "justify-end"],
          },
          {
            type: "toggle-group",
            stateKey: "alignItems",
            label: "Align Items",
            options: ["items-start", "items-center", "items-end", "items-stretch"],
          },
          {
            type: "toggle-group",
            stateKey: "gap",
            label: "Gap",
            options: ["gap-1", "gap-4", "gap-8", "gap-12"],
          },
          {
            type: "toggle-group",
            stateKey: "flexDir",
            label: "Flex Direction",
            options: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"],
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
        q: 'Apa yang dimaksud dengan "PHP berjalan di server"?',
        opts: [
          "PHP langsung dibaca dan dijalankan oleh browser pengguna",
          "PHP diproses di komputer server lalu hasilnya dikirim sebagai HTML ke browser",
          "PHP adalah bahasa khusus untuk mendesain tampilan web",
          "PHP memerlukan koneksi internet untuk berjalan",
        ],
        ans: 1,
        explain:
          "PHP dieksekusi di sisi server (komputer yang menyimpan website), lalu hasilnya berupa HTML dikirim ke browser. Browser tidak pernah melihat kode PHP mentah, hanya melihat output HTML-nya.",
      },
      {
        q: "Di mana kamu harus meletakkan file PHP agar bisa berjalan di XAMPP?",
        opts: ["Di folder Documents", "Di Desktop komputer", "Di folder htdocs di dalam direktori XAMPP", "Di mana saja, asalkan extensinya .php"],
        ans: 2,
        explain:
          "File PHP harus diletakkan di folder htdocs (XAMPP) agar Apache bisa menemukannya dan memprosesnya. Tanpa ini, Apache tidak tahu file mana yang harus dijalankan.",
      },
      {
        q: "Apa yang terjadi jika kamu lupa menambahkan titik koma (;) di akhir baris PHP?",
        opts: [
          "Baris tersebut dilewati, tidak ada efek",
          "PHP menampilkan pesan error kecil di konsol browser",
          "Seluruh halaman menjadi putih kosong (White Screen of Death)",
          "PHP secara otomatis menambahkan titik koma",
        ],
        ans: 2,
        explain:
          "Titik koma wajib ada di setiap akhir pernyataan PHP. Jika ada satu saja yang terlewat, PHP tidak bisa memproses file dan hasilnya adalah halaman putih kosong yang sering disebut White Screen of Death.",
      },
      {
        q: "Manakah cara penulisan variabel PHP yang benar?",
        opts: ['nama_produk = "Laptop";', '@nama_produk = "Laptop";', '$nama_produk = "Laptop";', '#nama_produk = "Laptop";'],
        ans: 2,
        explain:
          "Variabel PHP selalu dimulai dengan tanda dollar ($). Ini adalah aturan mutlak — tanpa $, PHP tidak mengenali kata tersebut sebagai variabel.",
      },
      {
        q: 'Apa output dari kode PHP berikut? $harga = 50000; echo "Harga: Rp $harga";',
        opts: ["Harga: Rp $harga", "Harga: Rp 50000", "Error karena variabel di dalam string", "$harga = 50000"],
        ans: 1,
        explain:
          'Ketika variabel PHP ditulis di dalam string dengan tanda kutip ganda (""), PHP akan otomatis menggantinya dengan nilainya. Ini disebut interpolasi string. Hasilnya adalah "Harga: Rp 50000".',
      },
      {
        q: 'Perhatikan kode berikut: $stok = 5; if ($stok > 0) { echo "Ada"; } else { echo "Habis"; } — apa yang tampil?',
        opts: ["Habis", "Ada", "Error karena kondisi salah", "Tidak menampilkan apa-apa"],
        ans: 1,
        explain:
          'Variabel $stok bernilai 5. Kondisi "$stok > 0" berarti "apakah 5 lebih besar dari 0?" — jawabannya true (benar), jadi blok if dijalankan dan menampilkan "Ada".',
      },
      {
        q: "Mengapa foreach lebih direkomendasikan daripada for loop untuk menampilkan data dari database?",
        opts: [
          "foreach lebih cepat secara performa",
          "foreach tidak memerlukan PHP versi terbaru",
          "foreach langsung bekerja dengan array tanpa perlu tahu jumlah elemennya",
          "foreach adalah satu-satunya loop yang ada di PHP",
        ],
        ans: 2,
        explain:
          'foreach dirancang khusus untuk iterasi array — kamu tidak perlu tahu berapa banyak datanya, cukup tulis "untuk setiap item, lakukan ini". Data dari database biasanya berbentuk array, sehingga foreach sangat cocok digunakan.',
      },
      {
        q: "Apa fungsi dari operator titik (.) dalam PHP?",
        opts: ["Mengakhiri pernyataan PHP", "Membuat komentar", "Menyambung dua string atau variabel menjadi satu", "Mengakses properti object"],
        ans: 2,
        explain:
          'Titik (.) adalah operator concatenation di PHP — digunakan untuk menyambung (menggabungkan) dua atau lebih string. Contoh: "Halo " . $nama akan menghasilkan "Halo Zaki" jika $nama = "Zaki".',
      },
      {
        q: "Apa perbedaan antara <?php echo $var; ?> dan <?= $var ?>?",
        opts: [
          "Keduanya berbeda hasil outputnya",
          "<?= adalah shortcut dari <?php echo, hasilnya identik",
          "<?= hanya bekerja di PHP versi lama",
          "<?= tidak bisa digunakan di dalam tag HTML",
        ],
        ans: 1,
        explain:
          "<?= adalah shorthand (singkatan) resmi dari <?php echo. Keduanya menghasilkan output yang persis sama. <?= lebih ringkas dan sering dipakai di dalam template HTML untuk menjaga kode tetap bersih.",
      },
      {
        q: "Cara yang benar untuk mengakses file PHP yang sudah dibuat di XAMPP adalah...",
        opts: [
          "Double-click file index.php di Windows Explorer",
          "Buka file langsung via File > Open di browser",
          "Ketik localhost/nama-folder di URL bar browser",
          "Kirim file ke server hosting dulu",
        ],
        ans: 2,
        explain:
          "PHP harus dijalankan melalui web server (Apache). Cara mengaksesnya adalah dengan mengetik localhost/nama-folder di URL bar browser — ini memberitahu Apache untuk mencari dan menjalankan file PHP di folder htdocs.",
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
      { id: "c1", text: "Saya bisa menjelaskan perbedaan antara HTML statis dan PHP dinamis dengan analogi yang mudah dipahami." },
      { id: "c2", text: "Saya sudah menginstal XAMPP atau Laragon dan berhasil mengakses file PHP via localhost di browser." },
      { id: "c3", text: "Saya paham mengapa setiap baris PHP harus diakhiri titik koma dan tahu apa itu White Screen of Death." },
      { id: "c4", text: "Saya bisa membuat variabel, mengisi datanya, dan menampilkannya ke halaman menggunakan echo." },
      { id: "c5", text: "Saya bisa menulis if-else untuk membuat logika kondisional seperti cek stok produk." },
      { id: "c6", text: "Saya bisa menggunakan foreach untuk menampilkan semua item dalam sebuah array secara otomatis." },
      { id: "c7", text: "Saya sudah membuat satu halaman PHP yang menyisipkan variabel dan kondisi langsung di dalam tag HTML." },
      { id: "c8", text: "Saya mendapat nilai quiz minimal 8/10 untuk seri ini." },
    ],
  },
};

export default cheatsheetData;

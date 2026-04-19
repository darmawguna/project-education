// src/data/cheatsheet/seri-mysql-overview.js

const cheatsheetData = {
  // ─── META ───────────────────────────────────────────────────────────────────
  meta: {
    slug: "mysql-overview",
    seriesBadge: "// SERI 3 — DATABASE & MYSQL",
    title: "Database 101: Mengenal MySQL",
    subtitle: "Pelajari cara menyimpan data secara permanen menggunakan MySQL — dari struktur tabel hingga perintah CRUD yang wajib dikuasai.",
    navTitle: "MySQL Cheatsheet",
    stats: [
      { label: "Topik Utama", value: "4" },
      { label: "Konsep Kunci", value: "19" },
      { label: "Soal Quiz", value: "10" },
      { label: "Checklist", value: "7" },
    ],
    tags: ["MySQL", "SQL", "Database", "CRUD", "phpMyAdmin"],
  },

  // ─── NAV LINKS ──────────────────────────────────────────────────────────────
  navLinks: [
    { href: "#apa-itu-mysql", label: "Apa itu MySQL?" },
    { href: "#struktur-data", label: "Struktur Data" },
    { href: "#perintah-crud", label: "Perintah CRUD" },
    { href: "#aturan-emas", label: "Aturan Emas" },
    { href: "#playground", label: "Playground" },
    { href: "#quiz", label: "Quiz" },
    { href: "#checklist", label: "Checklist" },
  ],

  // ─── SECTIONS ───────────────────────────────────────────────────────────────
  sections: [
    // ── SECTION 01: Apa itu MySQL ─────────────────────────────────────────────
    {
      id: "apa-itu-mysql",
      badge: "SECTION 01",
      title: "Apa itu MySQL?",
      glow: "cyan",
      description:
        'MySQL adalah sistem manajemen database yang menyimpan data secara permanen, sehingga website bisa "mengingat" informasi meski sudah ditutup dan dibuka lagi.',
      analogy:
        "🍳 Bayangkan kamu punya restoran: HTML adalah desain interiornya, PHP adalah kokinya, dan MySQL adalah kulkas/gudangnya. Tanpa MySQL, semua data akan hilang tiap malam seperti restoran tanpa lemari penyimpan bahan makanan.",

      cards: [
        {
          subtitle: "Peran MySQL dalam Website",
          items: [
            { class: "MySQL", desc: "Database Management System (DBMS) yang menyimpan data secara permanen di server." },
            { class: "HTML", desc: "Menampilkan tampilan website — desain dan struktur halaman." },
            { class: "PHP", desc: "Memproses logika website — seperti koki yang mengolah pesanan." },
            { class: "Database", desc: "Gudang/kulkas tempat semua data disimpan agar tidak hilang saat website ditutup." },
          ],
          code: {
            lang: "sql",
            raw: `-- MySQL menyimpan data user secara permanen
-- Contoh: data ini tetap ada meski server di-restart
SELECT * FROM tabel_user WHERE status = 'aktif';`,
            highlighted: `<span class="sh-cm">-- MySQL menyimpan data user secara permanen</span>
<span class="sh-cm">-- Contoh: data ini tetap ada meski server di-restart</span>
<span class="sh-kw">SELECT</span> * <span class="sh-kw">FROM</span> <span class="sh-sel">tabel_user</span> <span class="sh-kw">WHERE</span> <span class="sh-prop">status</span> = <span class="sh-str">'aktif'</span>;`,
          },
        },
        {
          subtitle: "Mengapa MySQL?",
          items: [
            { class: "Gratis", desc: "Open source — siapa saja bisa mengunduh dan menggunakannya tanpa biaya." },
            { class: "Cepat & Skalabel", desc: "Mampu menampung jutaan baris data tanpa performa yang menurun drastis." },
            {
              class: "Standar Industri",
              desc: "Digunakan oleh Facebook, YouTube, dan Twitter — kamu belajar teknologi yang benar-benar dipakai industri.",
            },
          ],
          code: {
            lang: "sql",
            raw: `-- MySQL digunakan oleh perusahaan raksasa dunia
-- Belajar MySQL = belajar skill yang dipakai di industri nyata
SHOW DATABASES; -- Melihat semua database yang ada`,
            highlighted: `<span class="sh-cm">-- MySQL digunakan oleh perusahaan raksasa dunia</span>
<span class="sh-cm">-- Belajar MySQL = belajar skill yang dipakai di industri nyata</span>
<span class="sh-kw">SHOW</span> <span class="sh-kw">DATABASES</span>; <span class="sh-cm">-- Melihat semua database yang ada</span>`,
          },
        },
      ],
    },

    // ── SECTION 02: Struktur Data ─────────────────────────────────────────────
    {
      id: "struktur-data",
      badge: "SECTION 02",
      title: "Struktur Data di MySQL",
      glow: "purple",
      description:
        "MySQL menyimpan data dalam hierarki yang terstruktur — dari database (lemari besar) hingga record (isi datanya). Pahami hierarki ini sebelum mulai coding.",
      analogy:
        "🗄️ Bayangkan MySQL seperti lemari arsip kantor: Lemari = Database, Map di dalamnya = Tabel, Judul kolom formulir = Field/Column, dan setiap baris isian = Record/Row. Sama persis seperti Microsoft Excel, tapi jauh lebih cerdas!",

      cards: [
        {
          subtitle: "Hierarki Struktur MySQL",
          items: [
            { class: "DATABASE", desc: "Lemari besar yang menampung semua tabel. Contoh: `db_toko_online`, `db_sekolah`." },
            { class: "TABLE", desc: "Map di dalam lemari — kumpulan data sejenis. Contoh: `tabel_siswa`, `tabel_produk`." },
            { class: "FIELD/COLUMN", desc: "Judul kolom tabel yang mendefinisikan kategori data. Contoh: `nama`, `harga`, `stok`." },
            { class: "RECORD/ROW", desc: "Satu baris data yang berisi nilai nyata. Contoh: `Budi`, `15000`, `10`." },
          ],
          code: {
            lang: "sql",
            raw: `-- Hierarki: DATABASE → TABLE → COLUMN → ROW
CREATE DATABASE db_toko_online;
USE db_toko_online;
CREATE TABLE tabel_produk (
  id      INT,
  nama    VARCHAR(100),
  harga   INT,
  stok    INT
);`,
            highlighted: `<span class="sh-cm">-- Hierarki: DATABASE → TABLE → COLUMN → ROW</span>
<span class="sh-kw">CREATE DATABASE</span> <span class="sh-sel">db_toko_online</span>;
<span class="sh-kw">USE</span> <span class="sh-sel">db_toko_online</span>;
<span class="sh-kw">CREATE TABLE</span> <span class="sh-sel">tabel_produk</span> (
  <span class="sh-prop">id</span>      <span class="sh-val">INT</span>,
  <span class="sh-prop">nama</span>    <span class="sh-val">VARCHAR</span>(<span class="sh-str">100</span>),
  <span class="sh-prop">harga</span>   <span class="sh-val">INT</span>,
  <span class="sh-prop">stok</span>    <span class="sh-val">INT</span>
);`,
          },
        },
        {
          subtitle: "Tipe Data Dasar yang Wajib Diketahui",
          items: [
            { class: "VARCHAR(n)", desc: "Menyimpan teks pendek hingga n karakter. Dipakai untuk nama, alamat, email." },
            { class: "INT", desc: "Menyimpan angka bulat (integer). Dipakai untuk umur, harga, stok, id." },
            { class: "DATE", desc: "Menyimpan tanggal dalam format YYYY-MM-DD. Dipakai untuk tanggal lahir atau daftar." },
          ],
          code: {
            lang: "sql",
            raw: `-- 3 Tipe Data wajib untuk pemula
CREATE TABLE tabel_siswa (
  id            INT,           -- angka bulat
  nama          VARCHAR(100),  -- teks maks 100 karakter
  tanggal_lahir DATE           -- format: 2005-08-17
);`,
            highlighted: `<span class="sh-cm">-- 3 Tipe Data wajib untuk pemula</span>
<span class="sh-kw">CREATE TABLE</span> <span class="sh-sel">tabel_siswa</span> (
  <span class="sh-prop">id</span>            <span class="sh-val">INT</span>,           <span class="sh-cm">-- angka bulat</span>
  <span class="sh-prop">nama</span>          <span class="sh-val">VARCHAR</span>(<span class="sh-str">100</span>),  <span class="sh-cm">-- teks maks 100 karakter</span>
  <span class="sh-prop">tanggal_lahir</span> <span class="sh-val">DATE</span>           <span class="sh-cm">-- format: 2005-08-17</span>
);`,
          },
        },
      ],
    },

    // ── SECTION 03: Perintah CRUD ─────────────────────────────────────────────
    {
      id: "perintah-crud",
      badge: "SECTION 03",
      title: "Perintah SQL: CRUD",
      glow: "cyan",
      description:
        "SQL (Structured Query Language) adalah bahasa perintah untuk berkomunikasi dengan MySQL. Kuasai 4 perintah CRUD ini dan kamu sudah bisa melakukan 80% pekerjaan database.",
      analogy:
        "📦 CRUD itu seperti mengelola gudang: CREATE = taruh barang baru, READ = cek isi gudang, UPDATE = ganti label/jumlah barang, DELETE = buang barang yang sudah tidak terpakai. Cuma 4 aksi, tapi sudah cukup untuk semua kebutuhan!",

      cards: [
        {
          subtitle: "CREATE — Menambah Data Baru",
          items: [
            { class: "INSERT INTO", desc: "Perintah untuk menambahkan satu baris data baru ke dalam tabel." },
            { class: "VALUES", desc: "Kata kunci yang mendaftar nilai-nilai yang akan dimasukkan, sesuai urutan kolom." },
          ],
          code: {
            lang: "sql",
            raw: `-- CREATE: Menambah data baru ke tabel
INSERT INTO tabel_siswa (nama, tanggal_lahir)
VALUES ('Budi Santoso', '2007-03-15');`,
            highlighted: `<span class="sh-cm">-- CREATE: Menambah data baru ke tabel</span>
<span class="sh-kw">INSERT INTO</span> <span class="sh-sel">tabel_siswa</span> (<span class="sh-prop">nama</span>, <span class="sh-prop">tanggal_lahir</span>)
<span class="sh-kw">VALUES</span> (<span class="sh-str">'Budi Santoso'</span>, <span class="sh-str">'2007-03-15'</span>);`,
          },
        },
        {
          subtitle: "READ — Mengambil/Melihat Data",
          items: [
            { class: "SELECT *", desc: 'Mengambil semua kolom dari tabel. Tanda * berarti "semua".' },
            { class: "SELECT col", desc: "Mengambil kolom tertentu saja agar lebih efisien." },
            { class: "WHERE", desc: "Filter kondisi — hanya ambil data yang memenuhi syarat tertentu." },
          ],
          code: {
            lang: "sql",
            raw: `-- READ: Mengambil data dari tabel
SELECT * FROM tabel_siswa;                     -- semua data
SELECT nama FROM tabel_siswa WHERE id = 1;     -- filter by id`,
            highlighted: `<span class="sh-cm">-- READ: Mengambil data dari tabel</span>
<span class="sh-kw">SELECT</span> * <span class="sh-kw">FROM</span> <span class="sh-sel">tabel_siswa</span>;                     <span class="sh-cm">-- semua data</span>
<span class="sh-kw">SELECT</span> <span class="sh-prop">nama</span> <span class="sh-kw">FROM</span> <span class="sh-sel">tabel_siswa</span> <span class="sh-kw">WHERE</span> <span class="sh-prop">id</span> = <span class="sh-val">1</span>;     <span class="sh-cm">-- filter by id</span>`,
          },
        },
        {
          subtitle: "UPDATE & DELETE — Ubah dan Hapus Data",
          items: [
            { class: "UPDATE", desc: "Mengubah nilai data yang sudah ada. Selalu gunakan WHERE agar tidak mengubah semua baris!" },
            { class: "SET", desc: "Menentukan kolom mana yang nilainya ingin diubah." },
            { class: "DELETE", desc: "Menghapus satu atau lebih baris data. Sangat berbahaya tanpa WHERE!" },
          ],
          code: {
            lang: "sql",
            raw: `-- UPDATE: Mengubah data yang sudah ada
UPDATE tabel_siswa SET nama = 'Budi S.' WHERE id = 1;

-- DELETE: Menghapus data (hati-hati!)
DELETE FROM tabel_siswa WHERE id = 1;`,
            highlighted: `<span class="sh-cm">-- UPDATE: Mengubah data yang sudah ada</span>
<span class="sh-kw">UPDATE</span> <span class="sh-sel">tabel_siswa</span> <span class="sh-kw">SET</span> <span class="sh-prop">nama</span> = <span class="sh-str">'Budi S.'</span> <span class="sh-kw">WHERE</span> <span class="sh-prop">id</span> = <span class="sh-val">1</span>;

<span class="sh-cm">-- DELETE: Menghapus data (hati-hati!)</span>
<span class="sh-kw">DELETE FROM</span> <span class="sh-sel">tabel_siswa</span> <span class="sh-kw">WHERE</span> <span class="sh-prop">id</span> = <span class="sh-val">1</span>;`,
          },
        },
      ],
    },

    // ── SECTION 04: Aturan Emas ───────────────────────────────────────────────
    {
      id: "aturan-emas",
      badge: "SECTION 04",
      title: "Aturan Emas Database",
      glow: "purple",
      description:
        "Ada dua aturan paling penting yang wajib kamu tahu sebelum membuat database pertamamu: Primary Key dan pemilihan Tipe Data yang tepat.",
      analogy:
        '🪪 Primary Key itu seperti NIK di KTP atau NIS di sekolah — nomor unik yang tidak boleh kembar meski ada dua orang bernama "Budi". Tanpa NIK, kamu tidak bisa membedakan "Budi" yang mana yang dimaksud saat ambil rapor!',

      cards: [
        {
          subtitle: "Primary Key — Identitas Unik Setiap Baris",
          items: [
            { class: "PRIMARY KEY", desc: "Kolom yang nilainya unik untuk setiap baris — tidak boleh ada yang sama atau kosong." },
            { class: "AUTO_INCREMENT", desc: "MySQL otomatis mengisi angka yang bertambah (1, 2, 3...) sehingga kita tidak perlu input manual." },
            { class: "NOT NULL", desc: "Aturan bahwa kolom ini wajib diisi — tidak boleh kosong/NULL." },
          ],
          code: {
            lang: "sql",
            raw: `-- Primary Key: kolom unik yang jadi identitas setiap baris
CREATE TABLE tabel_siswa (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  umur INT
);`,
            highlighted: `<span class="sh-cm">-- Primary Key: kolom unik yang jadi identitas setiap baris</span>
<span class="sh-kw">CREATE TABLE</span> <span class="sh-sel">tabel_siswa</span> (
  <span class="sh-prop">id</span>   <span class="sh-val">INT</span> <span class="sh-at">AUTO_INCREMENT</span> <span class="sh-at">PRIMARY KEY</span>,
  <span class="sh-prop">nama</span> <span class="sh-val">VARCHAR</span>(<span class="sh-str">100</span>) <span class="sh-at">NOT NULL</span>,
  <span class="sh-prop">umur</span> <span class="sh-val">INT</span>
);`,
          },
        },
        {
          subtitle: "phpMyAdmin — Remote Control MySQL",
          items: [
            { class: "phpMyAdmin", desc: "Antarmuka visual berbasis web untuk mengelola MySQL tanpa harus hafal semua perintah SQL." },
            { class: "Laragon", desc: "Aplikasi lokal yang menyediakan MySQL + phpMyAdmin siap pakai di Windows dengan instalasi mudah." },
            { class: "localhost", desc: "Alamat server lokal di komputermu sendiri — akses phpMyAdmin lewat browser di localhost/phpmyadmin." },
          ],
          code: {
            lang: "sql",
            raw: `-- Di phpMyAdmin, kamu bisa klik-klik untuk:
-- 1. Buat database baru → Create Database
-- 2. Buat tabel → Create Table
-- 3. Isi data → Insert
-- 4. Lihat data → Browse
-- Semua ini setara dengan perintah SQL di bawah ini:
SHOW TABLES;
DESCRIBE tabel_siswa;`,
            highlighted: `<span class="sh-cm">-- Di phpMyAdmin, kamu bisa klik-klik untuk:</span>
<span class="sh-cm">-- 1. Buat database baru → Create Database</span>
<span class="sh-cm">-- 2. Buat tabel → Create Table</span>
<span class="sh-cm">-- 3. Isi data → Insert</span>
<span class="sh-cm">-- 4. Lihat data → Browse</span>
<span class="sh-cm">-- Semua ini setara dengan perintah SQL di bawah ini:</span>
<span class="sh-kw">SHOW TABLES</span>;
<span class="sh-kw">DESCRIBE</span> <span class="sh-sel">tabel_siswa</span>;`,
          },
        },
      ],
    },
  ],

  // ─── PLAYGROUND ─────────────────────────────────────────────────────────────
  playground: {
    id: "playground",
    title: "Playground",
    badge: "PLAYGROUND",

    demos: [
      // ── Demo 1: SQL Table Builder ──────────────────────────────────────────
      // Preview 'sql-table-builder': user pilih kolom + tipe data,
      // lalu melihat CREATE TABLE yang di-generate otomatis secara live.
      {
        id: "table-builder",
        label: "🏗️ Table Builder",
        description: "Pilih kolom dan tipe datanya, lihat perintah CREATE TABLE yang dihasilkan secara langsung.",
        preview: "sql-table-builder",
        defaultState: {
          tableName: "tabel_siswa",
          columns: [
            { name: "id", type: "INT", constraint: "AUTO_INCREMENT PRIMARY KEY" },
            { name: "nama", type: "VARCHAR(100)", constraint: "NOT NULL" },
            { name: "tanggal_lahir", type: "DATE", constraint: "" },
          ],
        },
        controls: [],
      },

      // ── Demo 2: CRUD Simulator ─────────────────────────────────────────────
      // Preview 'crud-sim': user ketik data, pilih operasi CRUD,
      // lalu lihat SQL query yang dihasilkan + efek pada "tabel" preview.
      {
        id: "crud-simulator",
        label: "⚡ CRUD Simulator",
        description: "Coba 4 perintah CRUD secara interaktif dan lihat SQL query yang dihasilkan.",
        preview: "crud-sim",
        defaultState: {
          operation: "SELECT",
          filterValue: "",
          inputNama: "",
          inputUmur: "",
        },
        controls: [
          {
            type: "toggle-group",
            stateKey: "operation",
            label: "Operasi CRUD",
            options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
          },
        ],
      },
    ],
  },

  // ─── QUIZ ────────────────────────────────────────────────────────────────────
  quiz: {
    id: "quiz",
    title: "Quiz",
    badge: "QUIZ",

    questions: [
      {
        q: "Dalam analogi restoran, MySQL berperan sebagai apa?",
        opts: ["Desain interior restoran", "Koki yang memasak pesanan", "Kulkas/gudang penyimpan bahan", "Kasir yang mencatat pesanan"],
        ans: 2,
        explain:
          "MySQL adalah tempat penyimpanan data permanen, seperti kulkas/gudang. HTML adalah desain interior (tampilan), dan PHP adalah koki (pemroses logika). Tanpa kulkas, semua data akan hilang saat website ditutup.",
      },
      {
        q: "Apa nama bahasa perintah yang digunakan untuk berkomunikasi dengan MySQL?",
        opts: ["HTML", "PHP", "CSS", "SQL"],
        ans: 3,
        explain:
          "SQL (Structured Query Language) adalah bahasa khusus untuk mengelola database relasional seperti MySQL. HTML dipakai untuk tampilan, PHP untuk logika server, dan CSS untuk styling.",
      },
      {
        q: "Manakah urutan hierarki struktur data MySQL yang benar dari terbesar ke terkecil?",
        opts: [
          "Table → Database → Column → Row",
          "Database → Table → Column → Row",
          "Column → Row → Table → Database",
          "Row → Column → Database → Table",
        ],
        ans: 1,
        explain:
          "Hierarki MySQL dari besar ke kecil adalah Database (lemari) → Table (map) → Column/Field (judul kolom) → Row/Record (isi data). Ini persis seperti struktur lemari arsip kantor.",
      },
      {
        q: "Perintah SQL mana yang digunakan untuk MENAMBAH data baru ke dalam tabel?",
        opts: ["SELECT", "UPDATE", "INSERT INTO", "DELETE"],
        ans: 2,
        explain:
          "INSERT INTO adalah perintah CREATE dalam CRUD — digunakan untuk menambahkan baris data baru ke tabel. SELECT untuk membaca, UPDATE untuk mengubah, dan DELETE untuk menghapus.",
      },
      {
        q: 'Tipe data apa yang tepat untuk menyimpan data "nama lengkap" seseorang di MySQL?',
        opts: ["INT", "DATE", "VARCHAR", "PRIMARY KEY"],
        ans: 2,
        explain:
          "VARCHAR digunakan untuk menyimpan data teks dengan panjang variabel, sehingga cocok untuk nama lengkap. INT untuk angka bulat, DATE untuk tanggal, dan PRIMARY KEY bukan tipe data melainkan sebuah constraint.",
      },
      {
        q: "Apa fungsi kata kunci WHERE dalam perintah SQL?",
        opts: ["Menentukan tabel yang dituju", "Memfilter data berdasarkan kondisi tertentu", "Mengurutkan hasil pencarian", "Membuat database baru"],
        ans: 1,
        explain:
          "WHERE berfungsi sebagai filter — hanya data yang memenuhi kondisi yang ditentukan yang akan diproses. Tanpa WHERE pada perintah UPDATE atau DELETE, semua baris data akan terpengaruh!",
      },
      {
        q: "Apa yang dimaksud dengan PRIMARY KEY dalam sebuah tabel?",
        opts: [
          "Kolom pertama dalam tabel",
          "Kolom yang nilainya unik dan tidak boleh kembar untuk setiap baris",
          "Kata sandi untuk mengakses tabel",
          "Kolom yang berisi teks terpanjang",
        ],
        ans: 1,
        explain:
          "PRIMARY KEY adalah kolom pengidentifikasi unik — nilainya tidak boleh sama untuk dua baris berbeda dan tidak boleh kosong (NULL). Fungsinya seperti NIK di KTP untuk membedakan setiap orang meski namanya sama.",
      },
      {
        q: "Apa kegunaan AUTO_INCREMENT pada kolom id di MySQL?",
        opts: [
          "Mengosongkan kolom secara otomatis",
          "Mengisi angka yang otomatis bertambah tanpa input manual",
          "Membuat kolom bertipe teks",
          "Menghapus data lama secara otomatis",
        ],
        ans: 1,
        explain:
          "AUTO_INCREMENT membuat MySQL mengisi nilai kolom secara otomatis dengan angka yang selalu bertambah (1, 2, 3, ...). Ini memudahkan kita karena tidak perlu menentukan nilai id setiap kali INSERT data baru.",
      },
      {
        q: "phpMyAdmin adalah...",
        opts: [
          "Bahasa pemrograman untuk database",
          "Antarmuka visual berbasis web untuk mengelola MySQL",
          "Tipe database yang berbeda dari MySQL",
          "Aplikasi untuk membuat desain website",
        ],
        ans: 1,
        explain:
          'phpMyAdmin adalah alat bantu visual (GUI) berbasis web yang memungkinkan pengguna mengelola MySQL dengan klik-klik tanpa harus hafal semua perintah SQL. Ini ibarat "remote control" untuk mesin MySQL.',
      },
      {
        q: "Perintah SQL yang PALING BERBAHAYA jika digunakan tanpa klausa WHERE adalah...",
        opts: ["SELECT", "INSERT INTO", "SHOW DATABASES", "DELETE FROM"],
        ans: 3,
        explain:
          "DELETE FROM tanpa WHERE akan menghapus SEMUA baris data dalam tabel sekaligus — tidak ada undo! Selalu pastikan kamu menyertakan WHERE dengan kondisi yang tepat sebelum menjalankan perintah DELETE.",
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    id: "checklist",
    title: "Checklist",
    badge: "CHECKLIST",
    subtitle: "Tandai setiap item yang sudah kamu kuasai. Target: 100%!",

    items: [
      { id: "c1", text: "Saya bisa menjelaskan peran MySQL dalam sebuah website menggunakan analogi restoran." },
      { id: "c2", text: "Saya memahami hierarki Database → Table → Column → Row dan bisa memberi contoh masing-masing." },
      { id: "c3", text: "Saya mengetahui 4 perintah CRUD (INSERT, SELECT, UPDATE, DELETE) dan fungsi masing-masing." },
      { id: "c4", text: "Saya memahami kapan menggunakan tipe data VARCHAR, INT, dan DATE." },
      { id: "c5", text: "Saya mengerti mengapa PRIMARY KEY penting dan sudah membuat tabel dengan kolom id AUTO_INCREMENT." },
      { id: "c6", text: "Saya sudah membuka phpMyAdmin lewat Laragon dan berhasil membuat database pertama saya." },
      { id: "c7", text: "Saya mendapat nilai quiz minimal 8/10 pada materi MySQL Overview ini." },
    ],
  },
};

export default cheatsheetData;

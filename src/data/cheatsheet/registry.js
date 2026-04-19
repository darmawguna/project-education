// src/data/cheatsheet/registry.js
// Tambahkan entry baru di sini setiap kali ada cheatsheet baru

const registry = [
  {
    slug: "all-in-one-styling",
    path: "/cheatsheet/all-in-one-styling",
    seriesBadge: "// SERI 1",
    title: "Layout, Typography & Beauty",
    subtitle: "All-in-One Styling",
    description:
      "Kuasai 20% class Tailwind yang paling sering dipakai untuk membangun 80% tampilan web modern — dari skeleton hingga interaksi halus.",
    tags: ["Tailwind CSS", "Layout", "Typography", "Flexbox", "Hover States"],
    stats: [
      { label: "Topik", value: "3" },
      { label: "Konsep", value: "18" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    glow: "cyan",
    icon: "🎨",
    status: "available",
  },

  {
    slug: "responsive-customization",
    path: "/cheatsheet/responsive-customization",
    seriesBadge: "// SERI 2",
    title: "Responsive Design & Customization",
    subtitle: "Breakpoints, Grid & Custom Colors",
    description: "80% keberhasilan website ditentukan oleh tampilannya di HP dan kekuatan brand identity-nya. Kuasai dua hal ini dengan Tailwind.",
    tags: ["Responsive", "Mobile-First", "Breakpoints", "Grid", "Pseudo-Classes"],
    stats: [
      { label: "Topik", value: "5" },
      { label: "Konsep", value: "20" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    glow: "purple",
    icon: "📱",
    status: "available",
  },

  {
    slug: "php-dasar",
    path: "/cheatsheet/php-dasar",
    seriesBadge: "// SERI 1–3",
    title: "PHP Dasar",
    subtitle: "Server-Side, Logika & Templating",
    description: "Dari memahami cara kerja server hingga menulis logika PHP pertamamu di dalam HTML.",
    tags: ["PHP", "Server-Side", "XAMPP", "Logika", "Templating"],
    stats: [
      { label: "Topik", value: "3" },
      { label: "Konsep", value: "22" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    glow: "cyan",
    icon: "🐘",
    status: "available",
  },
  {
    slug: "laragon-setup",
    path: "/cheatsheet/laragon-setup",
    seriesBadge: "// SERI 4",
    title: "Setup Laragon & Live Coding",
    subtitle: "Install, Struktur Folder & Mini Project",
    description: "Dari instalasi sampai website PHP pertamamu berjalan di localhost — langkah demi langkah dengan 3 latihan langsung.",
    tags: ["Laragon", "Localhost", "Live Coding", "Mini Project", "include"],
    stats: [
      { label: "Topik", value: "4" },
      { label: "Konsep", value: "24" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "8" },
    ],
    glow: "purple",
    icon: "⚙️",
    status: "available",
  },

  {
    slug: "form-handling",
    path: "/cheatsheet/form-handling",
    seriesBadge: "// SERI 4",
    title: "Form Handling & Data Processing",
    subtitle: "PHP Forms, Superglobals & Clean Code",
    description: "Hidupkan websitemu dengan PHP — belajar menerima, memvalidasi, dan mengolah data kiriman user.",
    tags: ["PHP", "Form", "GET & POST", "Superglobals", "Include", "Functions"],
    stats: [
      { label: "Topik", value: "3" },
      { label: "Konsep", value: "18" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "7" },
    ],
    glow: "purple",
    icon: "📮",
    status: "available",
  },

  {
    slug: "web-foundation",
    path: "/cheatsheet/web-foundation",
    seriesBadge: "// SERI 0",
    title: "Web Foundation Guidebook",
    subtitle: "Pahami cara kerja Request & Response",
    description: "Panduan naratif memahami komunikasi antara Browser dan Server sebelum mulai ngoding backend.",
    tags: ["HTTP", "URL", "GET & POST", "Concept"],
    stats: [
      { label: "Topik", value: "3" },
      { label: "Konsep", value: "12" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "6" },
    ],
    glow: "cyan",
    icon: "🌐",
    status: "available",
  },

  {
    slug: "mysql-overview",
    path: "/cheatsheet/mysql-overview",
    seriesBadge: "// SERI 3",
    title: "Database 101: Mengenal MySQL",
    subtitle: "The Memory of Your Website",
    description:
      "Pelajari struktur database, perintah CRUD, Primary Key, dan cara pakai phpMyAdmin — semua yang kamu butuhkan untuk mulai menyimpan data secara permanen.",
    tags: ["MySQL", "SQL", "CRUD", "phpMyAdmin"],
    stats: [
      { label: "Topik", value: "4" },
      { label: "Konsep", value: "19" },
      { label: "Quiz", value: "10" },
      { label: "Checklist", value: "7" },
    ],
    glow: "cyan",
    icon: "🗄️",
    status: "available",
  },

  // ─── TEMPLATE UNTUK CHEATSHEET BARU ───────────────────────────────────────
  // Salin blok di bawah ini dan isi dengan data cheatsheet baru:
  //
  // {
  //   slug: 'nama-seri',
  //   path: '/cheatsheet/nama-seri',
  //   seriesBadge: '// SERI N',
  //   title: 'Judul Cheatsheet',
  //   subtitle: 'Sub judul singkat',
  //   description: 'Deskripsi 1–2 kalimat.',
  //   tags: ['Tag1', 'Tag2'],
  //   stats: [
  //     { label: 'Topik',     value: 'N' },
  //     { label: 'Konsep',    value: 'N' },
  //     { label: 'Quiz',      value: '10' },
  //     { label: 'Checklist', value: 'N' },
  //   ],
  //   glow: 'purple',   // alternasi 'cyan' | 'purple'
  //   icon: '🎯',
  //   status: 'available',
  // },
];

export default registry;

import type {
  NavItem,
  ServiceItem,
  ProjectItem,
  StepItem,
  AdvantageItem,
  FAQItem,
  CommitmentItem,
  TestimonialItem,
} from "../types/index.ts";

export const navigationItems: NavItem[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Sebelum & Sesudah", href: "#transformasi" },
  { label: "Proyek", href: "#proyek" },
  { label: "Cara kerja", href: "#cara-kerja" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "FAQ", href: "#faq" },
];

export const commitments: CommitmentItem[] = [
  {
    number: "01",
    title: "Rencana anggaran jelas",
    description: "Pahami rincian biaya sejak awal tanpa biaya siluman.",
  },
  {
    number: "02",
    title: "Pengerjaan terarah",
    description: "Tahapan dan timeline pengerjaan disepakati dalam kontrak legal.",
  },
  {
    number: "03",
    title: "Komunikasi terbuka",
    description: "Laporan progres berkala via grup pengawasan khusus proyek Anda.",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Bangun rumah",
    description:
      "Wujudkan hunian dari lahan kosong, dengan perencanaan matang yang sesuai kebutuhan ruang, estetika, dan anggaran Anda.",
    note: "Dari pondasi hingga finishing siap huni",
    features: [
      "Gratis desain konsep awal & layout 2D",
      "Perhitungan struktur SNI tahan gempa",
      "Laporan progres mingguan & dokumentasi foto/video",
      "Garansi pemeliharaan & struktur resmi",
    ],
  },
  {
    number: "02",
    title: "Renovasi bangunan",
    description:
      "Beri ruang lama cerita baru. Renovasi sebagian atau menyeluruh agar hunian lebih nyaman, fungsional, dan bernilai investasi tinggi.",
    note: "Perbaikan, penambahan lantai, penataan ulang",
    features: [
      "Survei kelayakan struktur lama",
      "Optimasi pencahayaan & ventilasi alami",
      "Minimalisir gangguan aktivitas sekitar",
      "Pilihan material tahan cuaca tropis",
    ],
  },
  {
    number: "03",
    title: "Jasa las & fabrikasi besi",
    description:
      "Pengerjaan bengkel las profesional: kanopi modern, pagar minimalis/laser cutting, railing tangga & balkon, teralis, hingga konstruksi baja WF.",
    note: "Kanopi, pagar, railing & rangka baja",
    features: [
      "Atap kanopi: Kaca tempered, solarflat, alderon, & spandek",
      "Material hollow galvanis tebal anti-karat & stainless steel",
      "Pagar motif laser cutting presisi atau kisi minimalis",
      "Hasil sambungan las rapi, kokoh, & bergaransi cat anti karat",
    ],
  },
  {
    number: "04",
    title: "Bangun ruang usaha",
    description:
      "Bangun toko, café, kantor, atau ruang komersial yang mendukung kenyamanan pengunjung dan perkembangan bisnis jangka panjang.",
    note: "Desain komersial yang menarik pelanggan",
    features: [
      "Analisis sirkulasi & flow pelanggan",
      "Integrasi identitas visual brand (branding interior)",
      "Pengerjaan tepat target pembukaan usaha",
      "Efisiensi instalasi MEP & tata cahaya",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    category: "BANGUN RUMAH",
    categoryKey: "bangun-baru",
    title: "Paviliun Tropis Serpong",
    description: "Hunian dua lantai dengan konsep open-plan, inner courtyard, dan pencahayaan alami maksimal.",
    specs: {
      area: "240 m²",
      duration: "6 Bulan",
      location: "BSD City, Tangerang Selatan",
      style: "Modern Tropical Minimalist",
    },
  },
  {
    id: "proj-2",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    category: "RENOVASI HUNIAN",
    categoryKey: "renovasi",
    title: "Rumah Lama Cerita Baru",
    description: "Transformasi rumah era 90-an menjadi hunian bernuansa Japandi yang lapang, sejuk, dan hangat.",
    specs: {
      area: "185 m²",
      duration: "3.5 Bulan",
      location: "Pondok Indah, Jakarta Selatan",
      style: "Warm Scandinavian & Japandi",
    },
  },
  {
    id: "proj-3",
    image:
      "https://images.unsplash.com/photo-1526634140919-468dc3ae3870?auto=format&fit=crop&w=1000&q=80",
    category: "JASA LAS & FABRIKASI",
    categoryKey: "las",
    title: "Fabrikasi Las Kanopi & Pagar Besi",
    description: "Pengerjaan bengkel las presisi: rangka hollow galvanis tebal atap kaca tempered & pagar motif modern.",
    specs: {
      area: "Carport & Fasad Depan",
      duration: "10 Hari Pengerjaan",
      location: "Gading Serpong, Tangerang",
      style: "Modern Steel & Tempered Glass",
    },
  },
  {
    id: "proj-4",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    category: "BANGUN RUMAH",
    categoryKey: "bangun-baru",
    title: "Villa Kontemporer Dago",
    description: "Pemanfaatan kontur lereng bukit dengan fasad kisi-kisi kayu ulin dan cross ventilation.",
    specs: {
      area: "320 m²",
      duration: "8 Bulan",
      location: "Dago Atas, Bandung",
      style: "Contemporary Villa",
    },
  },
  {
    id: "proj-5",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    category: "RENOVASI HUNIAN",
    categoryKey: "renovasi",
    title: "Ekspansi Rumah Tumbuh",
    description: "Penambahan lantai mezanin dan fasad modern monokrom untuk keluarga muda yang berkembang.",
    specs: {
      area: "140 m²",
      duration: "2.5 Bulan",
      location: "Sentul City, Bogor",
      style: "Modern Minimalist",
    },
  },
  {
    id: "proj-6",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    category: "DESAIN INTERIOR",
    categoryKey: "interior",
    title: "Harmoni Ruang Tamu & Dapur",
    description: "Desain interior terintegrasi dengan custom cabinetry, pencahayaan indirect LED, dan material kayu oak.",
    specs: {
      area: "90 m²",
      duration: "1.5 Bulan",
      location: "Kelapa Gading, Jakarta Utara",
      style: "Warm Earthy Interior",
    },
  },
  {
    id: "proj-7",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    category: "BANGUN KOMERSIAL",
    categoryKey: "komersial",
    title: "Ruang Usaha Coffee Studio",
    description: "Pembangunan coffee shop berkonsep industrial hangat dengan seating area outdoor dan bar ekspos.",
    specs: {
      area: "160 m²",
      duration: "3 Bulan",
      location: "Tebet, Jakarta Selatan",
      style: "Industrial Warmth",
    },
  },
  {
    id: "proj-8",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    category: "JASA LAS & FABRIKASI",
    categoryKey: "las",
    title: "Konstruksi Rangka Baja WF & Mezanin",
    description: "Pemasangan struktur baja WF kokoh untuk penambahan mezanin lantai dua serta railing balkon minimalis.",
    specs: {
      area: "Mezanin & Railing",
      duration: "14 Hari Pengerjaan",
      location: "Bintaro Jaya, Tangerang Selatan",
      style: "Heavy Steel & Railing Work",
    },
  },
];

export const steps: StepItem[] = [
  {
    number: "01",
    title: "Ceritakan rencana",
    description: "Diskusikan visi ruang, kebutuhan las/bangun, lokasi lahan, dan estimasi anggaran Anda secara santai.",
    duration: "1 - 2 Hari",
    deliverable: "Ringkasan Kebutuhan & Estimasi Awal",
  },
  {
    number: "02",
    title: "Survei & perencanaan",
    description: "Tinjau langsung pengukuran lokasi, analisis teknis struktur/material, serta pembuatan konsep desain 2D/3D.",
    duration: "1 - 2 Minggu",
    deliverable: "Hasil Survei Lapangan & Konsep Desain",
  },
  {
    number: "03",
    title: "Sepakati anggaran",
    description: "Penyusunan Rencana Anggaran Biaya (RAB) transparan per item pekerjaan, material, dan jadwal kontrak.",
    duration: "3 - 5 Hari",
    deliverable: "RAB Final, Spesifikasi Material & Kontrak",
  },
  {
    number: "04",
    title: "Mulai pengerjaan",
    description: "Pekerjaan konstruksi / fabrikasi berjalan sesuai jadwal dengan pengawasan ahli dan laporan progres berkala.",
    duration: "Sesuai Kontrak",
    deliverable: "Laporan Mingguan & Serah Terima Kunci / Hasil Las",
  },
];

export const advantages: AdvantageItem[] = [
  {
    number: "01",
    title: "Anggaran yang bisa dipahami",
    description: "Rincian volume, merk material, ketebalan besi, dan upah kerja dibahas terbuka sebelum pekerjaan dimulai.",
  },
  {
    number: "02",
    title: "Tidak perlu menebak progres",
    description: "Setiap tahap kami laporkan dengan foto, video, dan catatan teknis melalui grup WhatsApp pengawasan.",
  },
  {
    number: "03",
    title: "Detail kecil tetap diperhatikan",
    description: "Pengerjaan ditinjau dari kestabilan pondasi, kerapian sambungan las, hingga hasil akhir cat anti-karat.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Ardiansyah & Ratna",
    role: "Pemilik Rumah",
    location: "BSD, Tangerang",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    homeImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    projectType: "Bangun Rumah Baru & Kanopi Kaca",
    comment:
      "Yang paling kami suka dari Gemilang Construction adalah transparansi biayanya. Tidak ada biaya siluman di tengah jalan. Bangunan rumah plus pengerjaan kanopi kacanya sangat presisi dan kokoh!",
  },
  {
    id: "testi-2",
    name: "Ferry Hendrawan",
    role: "Pengusaha",
    location: "Pondok Indah, Jakarta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    homeImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    projectType: "Renovasi Rumah & Pagar Laser Cut",
    comment:
      "Rumah lama keluarga kami yang tadinya gelap disulap jadi terang dan adem. Pagar laser cutting buatan bengkel las Gemilang Construction juga rapi banget finishing catnya.",
  },
  {
    id: "testi-3",
    name: "Dian Paramita",
    role: "Creative Director",
    location: "Tebet, Jakarta Selatan",
    avatar: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80",
    homeImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    projectType: "Bangun Ruang Usaha & Rangka Baja",
    comment:
      "Eksekusi desainnya sangat presisi dengan 3D render yang dipresentasikan. Rangka baja dan mezzanine kafe dikerjakan cepat dan kuat sesuai perhitungan struktur.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Layanan apa saja yang disediakan oleh Gemilang Construction?",
    answer:
      "Kami melayani jasa bangun rumah baru, renovasi bangunan (parsial/total), desain interior komersial, serta jasa bengkel las & fabrikasi besi profesional (kanopi kaca/alderon, pagar minimalis/laser cut, railing tangga, teralis, dan konstruksi rangka baja WF).",
  },
  {
    question: "Apakah bisa memesan jasa las saja tanpa membangun rumah?",
    answer:
      "Tentu saja bisa! Kami menerima pesanan pembuatan kanopi carport, pagar rumah, pintu gerbang, railing tangga/balkon, hingga perbaikan rangka besi secara terpisah.",
  },
  {
    question: "Apakah bisa menyesuaikan dengan budget yang saya miliki?",
    answer:
      "Tentu saja! Kami mengadopsi prinsip Design-to-Budget. Kami akan membantu memprioritaskan ruang utama dan merekomendasikan alternatif material bangunan atau spesifikasi ketebalan besi yang berkualitas tanpa mengorbankan keamanan struktur.",
  },
  {
    question: "Berapa lama proses pengerjaan pembuatan kanopi atau renovasi?",
    answer:
      "Untuk jasa las (kanopi/pagar) biasanya memakan waktu 7 hingga 14 hari kerja tergantung luasan dan kerumitan desain. Untuk bangun rumah atau renovasi disesuaikan dengan timeline kontrak tertulis.",
  },
  {
    question: "Apakah ada garansi setelah pekerjaan selesai?",
    answer:
      "Ya. Kami memberikan Garansi Pemeliharaan untuk bangunan, serta Garansi Pengecatan Anti-Karat dan Kekuatan Sambungan Las untuk setiap produk fabrikasi besi.",
  },
];

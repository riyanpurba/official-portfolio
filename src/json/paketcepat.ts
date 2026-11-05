export interface QuickPack {
  name: string;
  forWho: string;
  from: string;
  items: string[];
  demo?: string; // isi dengan URL demo live jika sudah ada; tombol "Lihat demo" muncul otomatis
}

// Paket Cepat: website jadi dari desain dasar yang sudah siap, tinggal diisi konten Anda.
// Harga di bawah adalah usulan awal, silakan sesuaikan.
export const paketcepat: QuickPack[] = [
  {
    name: 'Undangan Digital',
    forWho: 'Pernikahan, ulang tahun, aqiqah, dan acara lainnya.',
    from: 'Rp150 ribu',
    items: ['Hitung mundur acara', 'Galeri foto dan peta lokasi', 'RSVP dan ucapan tamu', 'Nama tamu lewat link'],
    demo: '/demo/undangan/index.html?to=Nama%20Tamu',
  },
  {
    name: 'Landing Page Jasa Lokal',
    forWho: 'Bengkel, salon, laundry, klinik, dan jasa harian lainnya.',
    from: 'Rp500 ribu',
    items: ['Daftar layanan dan harga', 'Tombol telepon dan WhatsApp', 'Form booking sederhana', 'SEO lokal dasar'],
  },
  {
    name: 'Website Warung dan Kafe',
    forWho: 'Warung makan, kafe, dan katering.',
    from: 'Rp750 ribu',
    items: ['Menu lengkap dengan foto dan harga', 'Pesan lewat WhatsApp dengan pesan otomatis', 'Jam buka dan peta', 'Galeri'],
  },
  {
    name: 'Katalog dan Order WhatsApp',
    forWho: 'Toko kecil, fashion, dan kerajinan.',
    from: 'Rp1 juta',
    items: ['Katalog produk berkategori', 'Checkout ke WhatsApp', 'Panel admin untuk tambah produk', 'Responsif di HP'],
  },
];

export const QUICKPACK_NOTE = 'Pengerjaan lebih singkat karena memakai desain dasar yang sudah siap. Warna, logo, dan konten disesuaikan dengan usaha Anda. Belum termasuk domain dan hosting (opsional, bisa saya bantu).';

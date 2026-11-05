export interface RateTier {
  name: string;
  forWho: string;
  from: string;
  upTo?: string;
  unit?: string;
  items: string[];
}

// Harga awal sebagai acuan. Harga final mengikuti kebutuhan dan scope proyek.
export const ratecard: RateTier[] = [
  {
    name: 'Landing Page',
    forWho: 'Promosi satu produk atau layanan: campaign, iklan, dan promo.',
    from: 'Rp900 ribu',
    upTo: 'Rp1,5 juta',
    items: ['Desain responsif dan modern', 'SSL', 'Fokus promosi 1 produk atau layanan'],
  },
  {
    name: 'Company Profile',
    forWho: 'UMKM, sekolah, dan bisnis yang butuh website profesional.',
    from: 'Rp1,8 juta',
    upTo: 'Rp3 juta',
    items: ['Halaman Tentang, Layanan, Galeri, dan Kontak', 'Mobile-friendly', 'Custom sesuai bidang usaha', 'SSL'],
  },
  {
    name: 'Aplikasi Web',
    forWho: 'Sistem custom seperti PPDB, pemesanan, atau portal dengan panel admin.',
    from: 'Rp4 juta',
    upTo: 'Rp8 juta+',
    items: ['CMS dan admin panel custom (bukan WordPress)', 'Multi user dan role admin', 'Posting berita, tiket, atau produk'],
  },
  {
    name: 'Perawatan Bulanan',
    forWho: 'Situs yang sudah berjalan dan perlu dijaga tetap sehat.',
    from: 'Rp300 ribu',
    upTo: 'Rp500 ribu',
    unit: 'per bulan',
    items: ['Perbaikan bug terbatas', 'Update konten minor', 'Update dependency', 'Monitoring dasar'],
  },
];

export const RATE_NOTE = 'Harga awal sebagai acuan. Belum termasuk domain dan hosting, yang bisa saya bantu (opsional). Harga final mengikuti kebutuhan dan scope proyek.';

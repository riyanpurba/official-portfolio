export interface Service {
  title: string;
  text: string;
}

// Apa yang saya tawarkan. Harga ada di ratecard.ts.
export const services: Service[] = [
  {
    title: 'Website profesional',
    text: 'Landing page dan company profile untuk UMKM, sekolah, dan bisnis.',
  },
  {
    title: 'Aplikasi web',
    text: 'Sistem custom dengan React/Next.js dan Laravel, seperti PPDB, pemesanan, dan panel admin.',
  },
  {
    title: 'Integrasi API',
    text: 'Hubungkan situs dengan WhatsApp, pembayaran, dan layanan lain lewat REST API.',
  },
  {
    title: 'Perawatan bulanan',
    text: 'Bug fix, update konten, update dependency, dan monitoring untuk situs yang sudah berjalan.',
  },
];

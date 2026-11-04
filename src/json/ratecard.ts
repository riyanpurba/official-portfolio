import { waLink } from '@/utils/whatsapp';

interface RateCardProps {
  type: string;
  price: string;
  description: string[];
  whatsappLink: string;
}

export const ratecard: RateCardProps[] = [
  {
    type: 'Landing Page',
    price: 'Rp900 rb – 1,5 jt',
    description: ['✅ Satu halaman, responsive', '✅ Tombol CTA WhatsApp', '✅ SEO dasar', '✅ Deployment', '💡 Cocok untuk promo, campaign, dan satu produk/layanan'],
    whatsappLink: waLink('Halo Riyan, saya tertarik dengan paket Landing Page. Boleh saya tanya-tanya?'),
  },
  {
    type: 'Company Profile',
    price: 'Rp1,8 – 3 jt',
    description: ['✅ Home, About, Services, Contact', '✅ Responsive di semua perangkat', '✅ SEO dasar', '✅ Deployment', '💡 Cocok untuk sekolah, UMKM, dan perusahaan kecil'],
    whatsappLink: waLink('Halo Riyan, saya tertarik dengan paket Company Profile. Boleh saya konsultasi kebutuhan saya?'),
  },
  {
    type: 'Custom Web App',
    price: 'Rp4 – 8 jt+',
    description: ['✅ React/Next.js + Laravel API', '✅ Autentikasi & dashboard', '✅ Database', '✅ Harga mengikuti scope', '💡 Contoh: PPDB, sistem pemesanan, panel admin'],
    whatsappLink: waLink('Halo Riyan, saya ingin membuat aplikasi web custom. Boleh saya ceritakan kebutuhannya?'),
  },
  {
    type: 'Maintenance',
    price: 'Rp300 – 500 rb/bulan',
    description: ['✅ Perbaikan bug terbatas', '✅ Update konten minor', '✅ Update dependency', '✅ Monitoring dasar', '💡 Untuk website yang sudah berjalan'],
    whatsappLink: waLink('Halo Riyan, saya tertarik dengan layanan maintenance website. Boleh saya tanya detailnya?'),
  },
];

import { Reveal, Section } from '@/components/ui/Reveal';

const faqs = [
  ['Berapa biaya pembuatan website?', 'Landing page mulai Rp900 ribu, company profile Rp1,8–3 juta, dan aplikasi web custom mulai Rp4 juta. Harga final menyesuaikan kebutuhan dan scope proyek.'],
  ['Bagaimana sistem pembayarannya?', 'DP 50% sebelum pengerjaan, 30% setelah progres utama disetujui, dan 20% sebelum deployment atau serah terima.'],
  ['Berapa kali saya boleh revisi?', 'Maksimal dua kali revisi minor sesuai kesepakatan tertulis. Perubahan scope dihitung sebagai penawaran terpisah.'],
  ['Apakah sudah termasuk domain dan hosting?', 'Belum. Domain, hosting, dan layanan pihak ketiga dihitung terpisah, dan saya bisa membantu pengaturannya.'],
  ['Apakah ada layanan perawatan website?', 'Ada, Rp300–500 ribu per bulan: perbaikan bug terbatas, update konten minor, update dependency, dan monitoring dasar.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const Faq = () => (
  <Section id="faq" eyebrow="FAQ" title="Pertanyaan umum">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Reveal className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {faqs.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-lg [&::-webkit-details-marker]:hidden">
            {q}
            <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2 text-muted">{a}</p>
        </details>
      ))}
    </Reveal>
  </Section>
);

export { Faq };

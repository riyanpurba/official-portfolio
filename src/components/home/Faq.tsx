import { Reveal, Section } from '@/components/ui/Reveal';
import { ratecard } from '@/json/ratecard';

// Harga diturunkan dari ratecard.ts supaya hanya ada satu sumber.
const priceAnswer = `Harga awal: ${ratecard.map((t) => `${t.name} mulai ${t.from}${t.unit ? ` ${t.unit}` : ''}`).join(', ')}. Harga final mengikuti kebutuhan dan scope proyek, dan belum termasuk domain dan hosting.`;

const faqs = [
  ['Layanan apa saja yang tersedia?', 'Landing page, company profile, aplikasi web custom, integrasi API, dan perawatan website bulanan untuk UMKM, sekolah, dan bisnis.'],
  ['Bagaimana cara memesan website?', 'Hubungi saya lewat WhatsApp atau form kontak. Konsultasi awal gratis dan saya balas dalam satu hari kerja.'],
  ['Berapa biaya pembuatan website?', priceAnswer],
  ['Apakah ada layanan perawatan website?', 'Ada, lewat paket perawatan bulanan: perbaikan bug terbatas, update konten minor, update dependency, dan monitoring dasar.'],
  ['Teknologi apa yang Anda kuasai?', 'Saya terutama memakai React, TypeScript, Next.js, Laravel, Tailwind CSS, dan REST API, dengan deployment memakai Docker dan VPS.'],
  ['Apakah terbuka untuk kolaborasi atau peluang kerja?', 'Terbuka. Hubungi saya lewat form kontak atau WhatsApp di bawah.'],
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

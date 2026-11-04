import { Reveal, Section } from '@/components/ui/Reveal';

const faqs = [
  ['Apa hubungan Riyan Purba dan MIQVERO?', 'Situs ini adalah portfolio pribadi saya: pengalaman, kemampuan teknis, dan proyek. MIQVERO adalah studio web development yang saya pimpin, tempat calon klien melihat layanan, harga awal, dan mengirim brief proyek.'],
  ['Bagaimana cara memesan website?', 'Kirim brief lewat MIQVERO. Konsultasi awal gratis dan saya balas dalam satu hari kerja.'],
  ['Berapa biaya pembuatan website?', 'Daftar layanan, harga awal, dan sistem pembayaran lengkap ada di MIQVERO. Harga final mengikuti kebutuhan dan scope proyek.'],
  ['Apakah ada layanan perawatan website?', 'Ada, lewat paket perawatan bulanan di MIQVERO: perbaikan bug terbatas, update konten minor, update dependency, dan monitoring dasar.'],
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

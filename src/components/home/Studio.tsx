import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { AppConfig } from '@/utils/AppConfig';

const offers = [
  ['Website profesional', 'Landing page dan company profile untuk UMKM, sekolah, dan bisnis.'],
  ['Aplikasi web', 'Sistem custom dengan React/Next.js dan Laravel, seperti PPDB, pemesanan, dan panel admin.'],
  ['Integrasi API', 'Hubungkan situs dengan WhatsApp, pembayaran, dan layanan lain lewat REST API.'],
  ['Perawatan bulanan', 'Bug fix, update konten, update dependency, dan monitoring untuk situs yang sudah berjalan.'],
];

const Studio = () => (
  <Section id="layanan" eyebrow="Layanan" title="Butuh website untuk bisnis Anda?" sub={`Jasa saya ditawarkan lewat ${AppConfig.studio.name}, studio web development yang saya pimpin. Harga dan paket lengkap ada di sana.`}>
    <ul className="grid gap-5 md:grid-cols-2">
      {offers.map(([title, text], i) => (
        <motion.li key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }} className="rounded-3xl border border-line bg-surface p-7 md:p-9">
          <span className="font-display text-5xl text-accent/60">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-6 font-display text-3xl">{title}</h3>
          <p className="mt-3 text-muted">{text}</p>
        </motion.li>
      ))}
    </ul>
    <div className="mt-10 text-center">
      <a href={AppConfig.studio.url} target="_blank" rel="noopener noreferrer" data-cursor="Buka" className="btn btn-primary gap-2">
        Lihat layanan di {AppConfig.studio.name} <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  </Section>
);

export { Studio };

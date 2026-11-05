import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { services } from '@/json/services';

const Services = () => (
  <Section id="layanan" eyebrow="Layanan" title="Butuh website untuk bisnis Anda?" sub="Dari landing page sampai aplikasi web custom, lengkap dengan perawatan setelah situs berjalan. Konsultasi awal gratis.">
    <ul className="grid gap-5 md:grid-cols-2">
      {services.map((s, i) => (
        <motion.li key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }} className="rounded-3xl border border-line bg-surface p-7 md:p-9">
          <span className="font-display text-5xl text-accent/60">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
          <p className="mt-3 text-muted">{s.text}</p>
        </motion.li>
      ))}
    </ul>
    <div className="mt-10 text-center">
      <a href="#rate-card" data-cursor="Lihat" className="btn btn-primary gap-2">
        Lihat rate card <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  </Section>
);

export { Services };

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Section } from '@/components/ui/Reveal';
import { ratecard } from '@/json/ratecard';

const clean = (x: string) => x.replace(/^✅\s*/, '');
const included = (d: string[]) => d.filter((x) => x.startsWith('✅')).map(clean).slice(0, 4);
const tip = (d: string[]) => d.find((x) => x.startsWith('💡'))?.replace(/^💡\s*/, '');

const RateCard = () => (
  <Section id="layanan" eyebrow="Layanan" title="Layanan untuk mendukung bisnis Anda" sub="Harga awal untuk menyusun penawaran. Harga final mengikuti kebutuhan dan scope proyek.">
    <ul className="grid gap-5 md:grid-cols-2">
      {ratecard.map((item, i) => (
        <motion.li key={item.type} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}>
          <a href={item.whatsappLink} target="_blank" rel="noopener noreferrer" data-cursor="Tanya" className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-accent md:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-5xl text-accent/60 transition-colors group-hover:text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                <ArrowUpRightIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl md:text-4xl">{item.type}</h3>
            <p className="mt-1 font-display text-xl text-accent">{item.price}</p>
            {tip(item.description) && <p className="mt-4 text-sm text-muted">{tip(item.description)}</p>}
            <ul className="mt-6 grid gap-2 border-t border-line pt-6 text-sm">
              {included(item.description).map((f) => (
                <li key={f} className="flex gap-3"><span aria-hidden="true" className="text-accent">✦</span>{f}</li>
              ))}
            </ul>
          </a>
        </motion.li>
      ))}
    </ul>
    <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
      Domain, hosting, layanan pihak ketiga, fitur tambahan, dan perubahan scope dihitung terpisah. Pembayaran: DP 50% sebelum pengerjaan, 30% setelah progres utama disetujui, 20% sebelum serah terima. Revisi minor maksimal dua kali.
    </p>
  </Section>
);

export { RateCard };

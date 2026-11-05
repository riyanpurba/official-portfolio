import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { RATE_NOTE, ratecard } from '@/json/ratecard';
import { waLink } from '@/utils/whatsapp';

const RateCard = () => (
  <Section id="rate-card" eyebrow="Rate Card" title="Harga jelas sejak awal" sub={RATE_NOTE}>
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {ratecard.map((t, i) => (
        <motion.li key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="flex flex-col rounded-3xl border border-line bg-surface p-7">
          <h3 className="font-display text-3xl">{t.name}</h3>
          <p className="mt-2 text-sm text-muted">{t.forWho}</p>

          <div className="mt-6 border-y border-line py-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted">Mulai dari</p>
            <p className="mt-1 font-display text-4xl text-accent">{t.from}</p>
            <p className="mt-1 text-sm text-muted">
              {t.unit && <span>{t.unit}</span>}
              {t.unit && t.upTo && <span aria-hidden="true"> · </span>}
              {t.upTo && <span>hingga {t.upTo}</span>}
            </p>
          </div>

          <ul className="mt-5 grid gap-2.5 text-sm">
            {t.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <a href={waLink(`Halo Riyan, saya tertarik dengan ${t.name} (mulai ${t.from}${t.unit ? ` ${t.unit}` : ''}). Boleh saya tanya-tanya?`)} target="_blank" rel="noopener noreferrer" data-cursor="Chat" className="btn btn-ghost w-full gap-2">
              Tanya paket ini <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </motion.li>
      ))}
    </ul>

    <p className="mt-10 text-center text-muted">
      Butuh integrasi API atau fitur khusus? Harganya mengikuti scope.{' '}
      <a href={waLink('Halo Riyan, saya ingin diskusi kebutuhan integrasi API untuk proyek saya.')} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">Diskusikan kebutuhan Anda</a>.
    </p>
  </Section>
);

export { RateCard };

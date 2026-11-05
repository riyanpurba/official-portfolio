import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { QUICKPACK_NOTE, paketcepat } from '@/json/paketcepat';
import { waLink } from '@/utils/whatsapp';

const PaketCepat = () => (
  <Section id="paket-cepat" eyebrow="Paket Cepat" title="Website jadi, lebih cepat dan lebih hemat" sub={QUICKPACK_NOTE}>
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {paketcepat.map((t, i) => (
        <motion.li key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="flex flex-col rounded-3xl border border-line bg-surface p-7">
          <h3 className="font-display text-3xl">{t.name}</h3>
          <p className="mt-2 text-sm text-muted">{t.forWho}</p>

          <div className="mt-6 border-y border-line py-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted">Mulai dari</p>
            <p className="mt-1 font-display text-4xl text-accent">{t.from}</p>
          </div>

          <ul className="mt-5 grid gap-2.5 text-sm">
            {t.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid gap-3 pt-7">
            {t.demo && (
              <a href={t.demo} target="_blank" rel="noopener noreferrer" data-cursor="Lihat" className="btn btn-primary w-full gap-2">
                Lihat demo <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
              </a>
            )}
            <a href={waLink(`Halo Riyan, saya tertarik dengan Paket Cepat ${t.name} (mulai ${t.from}). Boleh saya tanya-tanya?`)} target="_blank" rel="noopener noreferrer" data-cursor="Chat" className="btn btn-ghost w-full gap-2">
              Pesan paket ini <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </motion.li>
      ))}
    </ul>
  </Section>
);

export { PaketCepat };

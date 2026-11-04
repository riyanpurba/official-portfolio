import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Section } from '@/components/ui/Reveal';
import { casestudies } from '@/json/casestudies';

const steps = [
  ['problem', 'Masalah'],
  ['solution', 'Solusi'],
  ['role', 'Peran saya'],
] as const;

const CaseStudies = () => {
  const [active, setActive] = useState(0);
  const c = casestudies[active];

  return (
    <Section id="studi-kasus" eyebrow="Studi kasus" title="Dari masalah sampai solusi" sub="Dari masalah klien sampai solusi yang berjalan di production.">
      <div role="tablist" aria-label="Pilih studi kasus" className="mx-auto mb-8 flex w-fit max-w-full overflow-x-auto rounded-full border border-line bg-surface p-1">
        {casestudies.map((s, i) => (
          <button
            key={s.short}
            type="button"
            role="tab"
            id={`cs-tab-${i}`}
            aria-selected={i === active}
            aria-controls="cs-panel"
            onClick={() => setActive(i)}
            className="relative min-h-[44px] rounded-full px-5 text-sm font-semibold"
          >
            {i === active && <motion.span layoutId="cs-pill" className="absolute inset-0 rounded-full bg-accent" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <span className={`relative transition-colors ${i === active ? 'text-bg' : 'text-muted'}`}>{s.short}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={c.short}
          id="cs-panel"
          role="tabpanel"
          aria-labelledby={`cs-tab-${active}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-line bg-surface p-6 md:p-10"
        >
          <header className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl leading-tight md:text-5xl">{c.title}</h3>
              <p className="mt-2 text-muted">{c.client}</p>
            </div>
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`Kunjungi website ${c.short}`} data-cursor="Buka" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent">
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            )}
          </header>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map(([key, label], i) => (
              <motion.div key={key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.1 }} className="relative border-t border-line pt-6">
                <span aria-hidden="true" className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-accent" />
                <h4 className="text-sm font-semibold text-accent">{label}</h4>
                <p className="mt-2 text-muted">{c[key]}</p>
              </motion.div>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Teknologi">
            {c.tech.map((t) => <li key={t} className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm">{t}</li>)}
          </ul>
        </motion.article>
      </AnimatePresence>
    </Section>
  );
};

export { CaseStudies };

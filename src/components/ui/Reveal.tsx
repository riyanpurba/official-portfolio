import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const Reveal = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

// Section label in the Artech style: ✦ LABEL ✦
export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
    <span aria-hidden="true">✦</span>
    {children}
    <span aria-hidden="true">✦</span>
  </p>
);

export const Section = ({ id, eyebrow, title, sub, children }: { id: string; eyebrow?: string; title: string; sub?: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line py-20 md:py-28">
    <div className="wrap">
      <Reveal className="mx-auto max-w-3xl text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id={`${id}-title`} className="mt-4 font-display text-4xl leading-tight md:text-6xl">{title}</h2>
        {sub && <p className="mx-auto mt-4 max-w-xl text-muted">{sub}</p>}
      </Reveal>
      <div className="mt-14">{children}</div>
    </div>
  </section>
);

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Eyebrow } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/Marquee';
import { waLink } from '@/utils/whatsapp';

const services = ['Landing Page', 'Company Profile', 'Aplikasi Web', 'CMS & Dashboard', 'Website Maintenance', 'React', 'Laravel'];

const ease = [0.2, 0.7, 0.2, 1] as const;

const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
    <motion.div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />

    <div className="wrap relative grid items-end gap-8 md:grid-cols-[1.25fr_1fr] md:gap-4">
      <div className="pb-6 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Eyebrow>Tersedia untuk proyek baru</Eyebrow>
        </motion.div>

        <h1 className="mt-6 font-display text-[clamp(2.6rem,8.2vw,6.6rem)] leading-[0.98]">
          {[
            <>Halo, saya</>,
            <span key="n" className="text-accent">Riyan Purba</span>,
            <span key="r" className="flex flex-wrap items-center gap-x-4">
              {/* <img src="/rynprb.png" alt="" width={96} height={96} className="inline-block h-[0.8em] w-[1.6em] rounded-full border border-line object-cover" /> */}
              <span>Fullstack</span>
            </span>,
            <>Web Developer</>,
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}>{line}</motion.span>
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-8 max-w-md text-lg text-muted">
          Membangun landing page, company profile, dan aplikasi web yang cepat dan rapi untuk UMKM, sekolah, dan bisnis lokal.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
          <a href="#proyek" data-cursor="Lihat" className="btn btn-primary">Lihat proyek</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Konsultasi gratis</a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }} className="relative mx-auto w-full max-w-md md:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-b-0 border-line bg-surface">
          <img src="/hero.png" alt="Riyan Purba, Fullstack Web Developer" width={1364} height={2052} className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>

        <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Konsultasi gratis lewat WhatsApp" data-cursor="Chat" className="group absolute -left-2 bottom-8 flex h-28 w-28 items-center justify-center rounded-full border border-line bg-bg md:-left-10 md:h-32 md:w-32">
          <motion.svg viewBox="0 0 120 120" aria-hidden="true" className="absolute inset-0 h-full w-full" animate={{ rotate: 360 }} transition={{ duration: 18, ease: 'linear', repeat: Infinity }}>
            <defs><path id="rt" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
            <text className="fill-fg text-[11px] font-semibold uppercase" letterSpacing="3.2"><textPath href="#rt">Konsultasi gratis ✦ Konsultasi gratis ✦</textPath></text>
          </motion.svg>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg transition-transform group-hover:rotate-45"><ArrowUpRightIcon className="h-5 w-5" /></span>
        </a>
      </motion.div>
    </div>

    <Marquee duration={35} className="border-y border-line bg-surface py-5">
      {services.map((s) => (
        <span key={s} className="flex items-center gap-8 pr-8 font-display text-2xl md:text-3xl">
          {s}<span className="text-accent">✦</span>
        </span>
      ))}
    </Marquee>
  </section>
);

export { Hero };

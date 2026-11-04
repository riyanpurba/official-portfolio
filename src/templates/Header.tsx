import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { AppConfig } from '@/utils/AppConfig';
import { waLink } from '@/utils/whatsapp';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SocialMedia } from '@/templates/SocialMedia';

const links = [
  ['Tentang', '#about'],
  ['Layanan', '#layanan'],
  ['Proyek', '#proyek'],
  ['Pengalaman', '#pengalaman'],
  ['Studi Kasus', '#studi-kasus'],
  // ['Testimoni', '#testimoni'],
  ['FAQ', '#faq'],
  ['Kontak', '#kontak'],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-bg/70 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Riyan Purba, kembali ke atas">
            <img src={AppConfig.image} alt="" width={36} height={36} className="rounded-full" />
            {/* <span className="font-display text-xl">Riyan Purba</span> */}
          </a>
          {/* <nav aria-label="Navigasi utama" className="hidden items-center gap-7 text-sm xl:flex">
            {links.filter(([, h]) => ['#about', '#layanan', '#proyek', '#pengalaman', '#kontak'].includes(h)).map(([label, href]) => (
              <a key={href} href={href} className="text-muted transition-colors hover:text-accent">{label}</a>
            ))}
          </nav> */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={AppConfig.studio.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden sm:inline-flex">Pesan via {AppConfig.studio.name}</a>
            <button type="button" data-cursor="Menu" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="menu" className="btn btn-ghost gap-2">
              Menu
              <span aria-hidden="true" className="flex flex-col gap-[3px]"><i className="block h-px w-4 bg-current" /><i className="block h-px w-3 bg-current" /></span>
            </button>
          </div>
        </div>
        <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            className="fixed inset-0 z-[60] overflow-y-auto bg-bg pt-[env(safe-area-inset-top)]"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          >
            <div className="wrap flex min-h-[100svh] flex-col pb-10">
              <div className="flex h-16 items-center justify-between">
                <span className="font-display text-xl">Riyan Purba</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Tutup menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-line"><XMarkIcon className="h-5 w-5" /></button>
              </div>
              <nav aria-label="Menu utama" className="my-auto py-8">
                <ul>
                  {links.map(([label, href], i) => (
                    <motion.li key={href} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}>
                      <a href={href} onClick={() => setOpen(false)} className="block py-1 font-display text-5xl transition-all hover:translate-x-3 hover:text-accent md:text-7xl">{label}</a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp: +62 813-8507-9843</a>
                <SocialMedia childClass="flex gap-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Header };

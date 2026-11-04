import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Section } from '@/components/ui/Reveal';
import { ModalProjects } from '@/templates/ModalProjects';
import { project, Project } from '@/json/project';

const FILTERS = ['NuxtJS', 'ReactJS', 'Laravel'];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('Semua');

  const tabs = useMemo(() => ['Semua', ...FILTERS.filter((f) => project.some((p) => p.tech.some((t) => t.name === f)))], []);
  const shown = filter === 'Semua' ? project : project.filter((p) => p.tech.some((t) => t.name === filter));

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <Section id="proyek" eyebrow="Portofolio" title="Proyek pilihan" sub="Ketuk proyek untuk melihat detail dan teknologinya.">
      <div role="group" aria-label="Filter proyek" className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button key={t} type="button" aria-pressed={filter === t} onClick={() => setFilter(t)} className={`btn border ${filter === t ? 'border-accent bg-accent text-bg' : 'border-line text-muted hover:border-accent hover:text-accent'}`}>{t}</button>
        ))}
      </div>

      <motion.ul layout className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li key={p.slug} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }}>
              <button type="button" data-cursor="Lihat" onClick={() => setSelected(p)} className="group block w-full text-left">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
                  <img src={p.image} alt={`Tampilan ${p.title}`} width={400} height={300} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span aria-hidden="true" className="absolute right-4 top-4 flex h-12 w-12 scale-50 items-center justify-center rounded-full bg-accent text-bg opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"><ArrowUpRightIcon className="h-5 w-5" /></span>
                </div>
                <h3 className="mt-4 font-display text-2xl transition-colors group-hover:text-accent">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.tech.slice(0, 3).map((t) => t.name).join(' · ')}</p>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>{selected && <ModalProjects detail={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  );
};

export { Projects };

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Project } from '@/json/project';

const ModalProjects = ({ detail, onClose }: { detail: Project; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-[70] flex items-end justify-center bg-bg/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={detail.title}
      className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-surface sm:rounded-3xl"
      initial={{ y: 60, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: 'spring', damping: 26, stiffness: 260 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button type="button" onClick={onClose} aria-label="Tutup" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-bg/70">
        <XMarkIcon className="h-5 w-5" />
      </button>
      <img src={detail.image} alt={`Tampilan ${detail.title}`} className="w-full" />
      <div className="p-6">
        <h3 className="font-display text-3xl">{detail.title}</h3>
        <p className="mt-3 text-muted">{detail.description}</p>
        <ul className="mt-5 flex gap-3" aria-label="Teknologi">
          {detail.tech.map((t) => (
            <li key={t.slug} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
              <img src={`/icon/${t.slug}.svg`} alt={t.name} title={t.name} width={24} height={24} />
            </li>
          ))}
        </ul>
        <a href={detail.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">Kunjungi website</a>
      </div>
    </motion.div>
  </motion.div>
);

export { ModalProjects };

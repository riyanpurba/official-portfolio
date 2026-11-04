import { motion } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { experience } from '@/json/experience';
import { tech } from '@/json/tech';

const groups = [
  ['Frontend', 'Antarmuka cepat, responsif, dan rapi di semua layar.', ['ReactJS', 'Typescript', 'Next.js', 'TailwindCSS', 'Javascript', 'NuxtJS', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Vite']],
  ['Backend & API', 'REST API dan logika bisnis.', ['Laravel', 'REST API', 'PHP', 'CodeIgniter']],
  ['Database', 'Penyimpanan data yang terstruktur.', ['MySQL', 'PostgreSQL']],
  ['Desain & DevOps', 'Dari desain Figma sampai deployment di VPS.', ['Figma', 'Docker']],
] as const;

const icon = (title: string) => tech.find((t) => t.title === title)?.image;

const list = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const chip = { hidden: { opacity: 0, scale: 0.85, y: 8 }, show: { opacity: 1, scale: 1, y: 0 } };

const Skills = () => (
  <Section id="pengalaman" eyebrow="Skills & pengalaman" title="Keahlian dan perjalanan kerja" sub="Teknologi yang saya pakai setiap hari dan tempat saya membangun produk digital.">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="grid gap-4">
        {groups.map(([name, note, items]) => (
          <article key={name} className="rounded-3xl border border-line bg-surface p-6">
            <h3 className="font-display text-2xl">{name}</h3>
            <p className="mt-1 text-sm text-muted">{note}</p>
            <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className="mt-5 flex flex-wrap gap-2">
              {items.map((n) => (
                <motion.li key={n} variants={chip} whileHover={{ y: -3 }} className="flex items-center gap-2 rounded-full border border-line bg-bg py-1.5 pl-1.5 pr-4 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white"><img src={icon(n)} alt="" width={18} height={18} loading="lazy" /></span>
                  {n}
                </motion.li>
              ))}
            </motion.ul>
          </article>
        ))}
      </div>

      <ol className="relative ml-2 h-fit border-l border-line">
        {experience.map((item) => (
          <motion.li key={item.company} className="relative mb-10 pl-8 last:mb-0" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            <time className="text-sm text-muted">{item.period}</time>
            <h3 className="mt-1 font-display text-2xl">{item.company}</h3>
            <p className="text-accent">{item.position}{item.status ? ` · ${item.status}` : ''}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {item.description.slice(0, 2).map((d) => <li key={d}>{d}</li>)}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  </Section>
);

export { Skills };

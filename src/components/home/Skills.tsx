import { motion, MotionConfig, type Variants } from 'framer-motion';

import { Section } from '@/components/ui/Reveal';
import { experience } from '@/json/experience';
import { tech } from '@/json/tech';

/* ---------- Data ---------- */

interface SkillGroup {
  name: string;
  note: string;
  items: readonly string[];
}

const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    name: 'Frontend',
    note: 'Antarmuka cepat, responsif, dan rapi di semua layar.',
    items: ['ReactJS', 'Typescript', 'Next.js', 'TailwindCSS', 'Javascript', 'NuxtJS', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Vite'],
  },
  {
    name: 'Backend & API',
    note: 'REST API dan logika bisnis.',
    items: ['Laravel', 'REST API', 'PHP', 'CodeIgniter'],
  },
  {
    name: 'Database',
    note: 'Penyimpanan data yang terstruktur.',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    name: 'Desain & DevOps',
    note: 'Dari desain Figma sampai deployment di VPS.',
    items: ['Figma', 'Docker'],
  },
];

/** Jumlah poin pengalaman yang ditampilkan per posisi. */
const EXPERIENCE_HIGHLIGHTS = 2;

/** Dibuat sekali, bukan dicari ulang (find) pada setiap render. */
const iconByTitle = new Map(tech.map(({ title, image }) => [title, image]));

type ExperienceItemData = (typeof experience)[number];

/* ---------- Animasi ---------- */

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const CHIP_VIEWPORT = { once: true, margin: '-40px' } as const;
const TIMELINE_VIEWPORT = { once: true, margin: '-60px' } as const;

/* ---------- Komponen ---------- */

const SkillChip = ({ name }: { name: string }) => {
  const icon = iconByTitle.get(name);

  return (
    <motion.li
      variants={chipVariants}
      whileHover={{ y: -3 }}
      className={`flex items-center gap-2 rounded-full border border-line bg-bg py-1.5 pr-4 text-sm ${
        icon ? 'pl-1.5' : 'pl-4'
      }`}
    >
      {icon && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <img src={icon} alt="" width={18} height={18} loading="lazy" />
        </span>
      )}
      {name}
    </motion.li>
  );
};

const SkillGroupCard = ({ name, note, items }: SkillGroup) => (
  <article className="rounded-3xl border border-line bg-surface p-6">
    <h3 className="font-display text-2xl">{name}</h3>
    <p className="mt-1 text-sm text-muted">{note}</p>
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={CHIP_VIEWPORT}
      className="mt-5 flex flex-wrap gap-2"
    >
      {items.map((item) => (
        <SkillChip key={item} name={item} />
      ))}
    </motion.ul>
  </article>
);

const ExperienceItem = ({ item }: { item: ExperienceItemData }) => (
  <motion.li
    className="relative mb-10 pl-8 last:mb-0"
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={TIMELINE_VIEWPORT}
    transition={{ duration: 0.5 }}
  >
    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
    <time className="text-sm text-muted" dateTime={item.startDate}>
      {item.period}
    </time>
    <h3 className="mt-1 font-display text-2xl">{item.company}</h3>
    <p className="text-accent">
      {item.position}
      {item.status && ` · ${item.status}`}
    </p>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
      {item.description.slice(0, EXPERIENCE_HIGHLIGHTS).map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  </motion.li>
);

const Skills = () => (
  <MotionConfig reducedMotion="user">
    <Section
      id="pengalaman"
      eyebrow="Skills & pengalaman"
      title="Keahlian dan perjalanan kerja"
      sub="Teknologi yang saya pakai setiap hari dan tempat saya membangun produk digital."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-4">
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard key={group.name} {...group} />
          ))}
        </div>

        <ol className="relative ml-2 h-fit border-l border-line">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </Section>
  </MotionConfig>
);

export { Skills };

import { Marquee } from '@/components/ui/Marquee';
import { Eyebrow, Reveal } from '@/components/ui/Reveal';
import { experience } from '@/json/experience';

const Clients = () => (
  <section id="perusahaan" aria-labelledby="perusahaan-title" className="scroll-mt-16 overflow-hidden border-t border-line py-16 md:py-20">
    <Reveal className="wrap text-center">
      <Eyebrow>Klien &amp; tim</Eyebrow>
      <h2 id="perusahaan-title" className="mt-4 font-display text-3xl md:text-4xl">Pernah bekerja bersama</h2>
      <ul className="sr-only">{experience.map((e) => <li key={e.company}>{e.company}</li>)}</ul>
    </Reveal>
    <Marquee duration={45} className="mt-10">
      {experience.map((e) => (
        <span key={e.company} className="flex items-center gap-12 pr-12 font-display text-5xl text-transparent transition-colors [-webkit-text-stroke:1px_rgb(var(--c-fg)/0.45)] hover:text-fg md:text-7xl">
          {e.company}<span className="text-3xl text-accent [-webkit-text-stroke:0]">✦</span>
        </span>
      ))}
    </Marquee>
  </section>
);

export { Clients };

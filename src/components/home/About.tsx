import { Eyebrow, Reveal } from '@/components/ui/Reveal';

const stats = [['5+', 'tahun pengalaman'], ['4', 'perusahaan'], ['7', 'proyek live']];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="scroll-mt-16 py-20 md:py-28">
    <div className="wrap grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
      <Reveal>
        <Eyebrow>Tentang saya</Eyebrow>
        <h2 id="about-title" className="mt-4 font-display text-4xl leading-tight md:text-6xl">Ide baru untuk bisnis yang ingin tumbuh online.</h2>
        <a href="/CV_Riyan_Purba.pdf" download className="btn btn-ghost mt-8">Unduh CV</a>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg leading-relaxed text-muted">
          Fullstack Web Developer dengan pengalaman lebih dari 5 tahun membangun aplikasi web yang scalable dengan ReactJS, TypeScript, Laravel, dan REST API. Terbiasa mengubah desain UI/UX menjadi kode yang bersih dan cepat, serta men-deploy ke production dengan Docker dan VPS.
        </p>
        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map(([n, l]) => (
            <div key={l}>
              <dd className="font-display text-5xl text-accent md:text-6xl">{n}</dd>
              <dt className="mt-1 text-sm text-muted">{l}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export { About };

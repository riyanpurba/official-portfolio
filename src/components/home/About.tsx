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
        Saya mengerjakan website dan aplikasi web sejak 2017, dari portal berita dan company profile sampai sistem reward dan platform verifikasi sertifikat.
        </p>
        <p className="text-lg leading-relaxed text-muted">
        Saya paling sering membantu UMKM, sekolah, dan bisnis yang butuh website profesional tanpa proses ribet: tampilan rapi di HP, loading cepat, dan konten yang bisa Anda kelola sendiri lewat admin panel.
        </p>
        <p className="text-lg leading-relaxed text-muted">
        Stack saya: React, Next.js, TypeScript, Laravel, dan Tailwind CSS, dengan integrasi REST API bila bisnis Anda membutuhkannya. Saya juga terbiasa men-deploy sampai live (Docker + VPS), jadi Anda tidak perlu mengurus sisi teknisnya.
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

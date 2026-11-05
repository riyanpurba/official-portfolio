import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Reveal } from '@/components/ui/Reveal';
import { waLink } from '@/utils/whatsapp';

const StartProject = () => (
  <section aria-labelledby="start-title" className="py-20 md:py-28">
    <div className="wrap">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-6 py-16 text-center md:px-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
        <h2 id="start-title" className="relative font-display text-[clamp(2.4rem,8vw,6rem)] leading-[1]">Ayo mulai proyek Anda</h2>
        <p className="relative mx-auto mt-5 max-w-md text-muted">Konsultasi awal gratis. Ceritakan kebutuhan Anda lewat WhatsApp dan saya balas dalam satu hari kerja.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" data-cursor="Chat" className="btn btn-primary gap-2">
            Chat WhatsApp <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="#layanan" className="btn btn-ghost">Lihat layanan</a>
        </div>
      </Reveal>
    </div>
  </section>
);

export { StartProject };

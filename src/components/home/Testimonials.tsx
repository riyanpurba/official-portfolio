import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { Section } from '@/components/ui/Reveal';
import { testimonials } from '@/json/testimoni';

const arrow = 'flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent';

const Testimonials = () => {
  const rail = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <Section id="testimoni" eyebrow="Kata klien" title="Testimoni dari klien yang sudah bekerja sama">
      <div className="mb-6 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Testimoni sebelumnya" className={arrow}><ArrowLeftIcon className="h-5 w-5" /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Testimoni berikutnya" className={arrow}><ArrowRightIcon className="h-5 w-5" /></button>
      </div>
      <ul ref={rail} className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <li key={t.name} className="w-[88%] shrink-0 snap-start sm:w-[46%] lg:w-[32%]">
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-10 w-10 fill-accent"><path d="M4 18c0-7 4-12 11-14l1 3c-4 1.5-6 4-6 7h5v10H4V18zm14 0c0-7 4-12 11-14l1 3c-4 1.5-6 4-6 7h5v10H18V18z" /></svg>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed">{t.message}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-display text-xl">{t.name}</p>
                <p className="text-sm text-accent">{t.role}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export { Testimonials };

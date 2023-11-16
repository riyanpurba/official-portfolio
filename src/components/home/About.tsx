import { SocialMedia } from '@/templates/SocialMedia';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="relative w-full h-full py-10 2xl:py-36 xl:py-36 lg:py-36 md:py-20 bg-black">
      <div className="container">
        <div className="flex items-center flex-col 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-3">
          <div className="w-full block md:flex md:items-center md:gap-10">
            <div className="w-full md:w-8/12 mx-auto flex flex-col items-center justify-center">
              <h2 className="p-1 nav-text text-base font-bold uppercase tracking-widest bg-yellow text-black/90 group-hover:text-black group-focus-visible:text-black">About Me</h2>
              <h3 className="pt-2 nav-text text-4xl font-bold uppercase tracking-widest text-yellow/90 group-hover:text-yellow group-focus-visible:text-yellow">Know Me More</h3>
              <p className="py-5 text-white text-center select-none">I am an active undergraduate student majoring in Computer Engineering at Budi Luhur University, with over 5 years of work experience in software development. I am enthusiastic about technology and ready for new challenges. With the combination of my education and experience, I am confident that I can make a significant contribution to the ever-evolving world of information technology.</p>
              <div className="flex items-center gap-4">
                <SocialMedia childClass="flex flex-row items-center justify-between gap-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-4 w-auto hidden 2xl:flex xl:flex lg:flex md:flex sm:hidden z-[2]">
        <Image src="/banner-three-repeat-grid.png" alt="dots" title="dots" loading="lazy" width={320} height={533} />
      </div>
    </section>
  );
}

export { About };
import { ArrowDownTrayIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import TextTypingAnimation from '../../templates/TextTypingAnimation';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-full">
      <div className="py-20 2xl:py-38 xl:py-38 lg:py-38 md:py-40 flex items-center">
        <div className="container">
          <div className="flex items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-3">
            <div className="relative flex flex-col items-start justify-start w-full 2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-6/12">
              <h1 className="relative text-4xl font-semibold text-left text-white select-none">Hello, I`m <strong className="text-white magic">Riyan Purba</strong></h1>
              <TextTypingAnimation key="line-0" className="text-2xl font-medium text-left leading-10 text-yellow" texts={["Front End Developer", "Freelancer"]} />
              <p className="py-5 text-lg font-light text-left text-white opacity-90 select-none">I am a senior frontend developer with 5+ years of experience in the industry. I am passionate about creating high-quality web applications that are user-friendly and efficient.</p>
              <a href="/Resume_Riyan_Purba.pdf" download className="p-3 bg-yellow hover:bg-yellow/80 text-black rounded-xl font-semibold flex items-center gap-3">Get Resume <ArrowDownTrayIcon className="w-5 h-5 animate-bounce" /></a>
            </div>
            <div className="relative flex flex-col items-start justify-start w-full 2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-6/12 mt-[80px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
              <div className="relative mx-auto z-[3]">
                <div className="relative z-[1] img-hero">
                  <div className="inline-block max-w-full w-[310px] h-[400px] bg-black bg-glitch rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-auto h-auto hidden 2xl:flex xl:flex lg:flex md:flex sm:hidden items-start justify-end z-[4] opacity-20">
          <Image src="/banner-three-dot-shapes.png" alt="dots" title="dots" loading="lazy" width={235} height={306} />
        </div>
        <div className="absolute bottom-0 left-0 w-auto hidden 2xl:flex xl:flex lg:flex md:flex sm:hidden z-[4]">
          <Image src="/banner-three-repeat-grid.png" alt="dots" title="dots" loading="lazy" width={320} height={533} />
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <a href="#about" className="flex flex-col items-center justify-center">
          <ChevronDoubleDownIcon className="w-5 h-5 text-yellow hover:text-white animate-bounce" />
          <span className="text-white glitch text-sm">Scroll Down</span>
        </a>
      </div>
    </section>
  )
};

export { Hero };
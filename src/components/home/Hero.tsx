import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import TextTypingAnimation from '../../templates/TextTypingAnimation';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[url('/hero_bg_dark.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="py-20 2xl:py-38 xl:py-38 lg:py-38 md:py-40 flex items-center">
        <div className="container">
            <div className="flex items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-3">
              <div className="relative mx-auto flex flex-col items-center justify-center w-full text-center">
                <h1 className="relative text-4xl font-semibold text-center text-white select-none font-oswald">Hello, I`m<br /><strong className="text-white magic font-inter">Riyan Purba</strong></h1>
                <TextTypingAnimation key="line-0" className="text-2xl font-medium text-left font-oswald leading-10 text-yellow" texts={["Front End Developer", "Freelancer"]} />
                <p className="py-5 text-lg font-light text-center text-white font-inter opacity-90 select-none">Saya Riyan, Frontend Developer. Spesialis bikin website landing page, company profile, dan portal berita mulai dari 500 ribu.</p>
                <a href="https://wa.me/6282137527284?text=Halo%20Riyan%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda." target='_blank' className='h-[50px] px-[30px] leading-[47px] font-semibold font-oswald text-base text-white border border-yellow rounded-[50px] hover:bg-yellow hover:text-black uppercase inline-block'>Contact Me</a>
              </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-24">
        <a href="#about" className="flex flex-col items-center justify-center">
          <ChevronDoubleDownIcon className="w-5 h-5 text-yellow animate-bounce" />
          <span className="text-white glitch text-sm font-oswald">Scroll Down</span>
        </a>
      </div>
    </section>
  )
};

export { Hero };
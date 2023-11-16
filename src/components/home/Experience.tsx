import { experience } from '@/json/experience';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experiences" className="relative w-full h-full py-10 2xl:py-20 xl:py-20 lg:py-20 md:py-20 bg-black flex items-center">
      <div className="container">
        <h2 className="text-center text-4xl font-bold uppercase tracking-widest text-yellow/90 group-hover:text-yellow group-focus-visible:text-yellow">Work Experience</h2>
        <p className="text-white text-base w-full md:w-6/12 text-center mx-auto py-4 select-none">
          With approximately five years of experience, I have successfully developed web applications that contribute to the growth and success of various companies.
        </p>
        <div className="pt-10 w-full mx-auto">
          <ol className="relative border-l border-yellow select-none">
            {
              experience.map((item, index) => (
                <li className="mb-10 ml-4" key={index}>
                  <div className="absolute w-3 h-3 bg-yellow rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-white">{item.period}</time>
                  <h3 className="text-base font-semibold text-white hover:text-yellow"><strong className='text-yellow'>{item.company}</strong></h3>
                  <h3 className="text-base font-semibold text-white hover:text-yellow flex items-center justify-start"><span className="text-sm font-medium text-white mr-1">{item.status}</span> - {item.position}</h3>
                  <div className="mb-4 text-base font-normal text-white/80 hidden md:block">
                    <ul className="list-disc list-inside">
                      {
                        item.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              ))
            } 
          </ol>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mt-4 w-auto hidden 2xl:flex xl:flex lg:flex md:flex sm:hidden z-[2]">
        <Image src="/banner-three-repeat-grid.png" alt="dots" title="dots" loading="lazy" width={320} height={533} />
      </div>
    </section>
  )
};

export { Experience }
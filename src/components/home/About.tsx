const About = () => {
  return (
    <section id="about" className="relative w-full h-auto md:h-screen flex items-center bg-black">
      <div className="container py-20 md:py-0">
        <div className="flex items-center flex-col 2xl:flex-col xl:flex-col lg:flex-col md:flex-col gap-3">
          <div className="w-full block md:flex md:items-center md:gap-10">
            <div className="relative flex flex-col items-start justify-start w-full 2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-6/12 mt-[80px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
              <div className="relative mx-auto z-[3]">
                <div className="relative z-[1] img-hero">
                  <div className="inline-block max-w-full w-[310px] h-[400px] bg-black bg-glitch rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="w-full text-center md:text-left md:w-8/12 mt-10 md:mt-0">
              <h3 className="text-sm font-inter font-normal text-black/70 dark:text-white/70">Get to know me</h3>
              <h2 className="text-2xl font-oswald font-semibold text-yellow">About Me</h2>
              <p className="py-5 text-black dark:text-white select-none">Experienced Frontend Developer with over 5 years in building scalable and user-centric web applications using ReactJS, NuxtJS, and Laravel. Adept at translating UI/UX designs into clean, high-performance code. Proven track record of deploying production-ready solutions using Docker and VPS environments. Currently pursuing a degree in Computer Engineering at Budi Luhur University and eager to contribute to innovative projects in fast-paced development teams.</p>
              <a href="/CV_Riyan_Purba.pdf" target="_blank" download className='h-[50px] px-[30px] leading-[47px] font-medium font-oswald text-base border border-black dark:border-yellow rounded-[50px] text-black dark:text-white hover:bg-yellow hover:text-black dark:hover:text-black uppercase inline-block hover:animate-bounce'>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
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
              <p className="py-5 text-black dark:text-white select-none">I am an active undergraduate student majoring in Computer Engineering at Budi Luhur University, with over 5 years of work experience in software development. I am enthusiastic about technology and ready for new challenges. With the combination of my education and experience, I am confident that I can make a significant contribution to the ever-evolving world of information technology.</p>
              <a href="/Resume_Riyan_Purba.pdf" download className='h-[50px] px-[30px] leading-[47px] font-medium font-oswald text-base border border-black dark:border-yellow rounded-[50px] text-black dark:text-white hover:bg-yellow hover:text-black dark:hover:text-black uppercase inline-block hover:animate-bounce'>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
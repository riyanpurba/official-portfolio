const Parallax = () => {
  return (
    <section className="relative w-full h-full bg-black flex items-center justify-center bg-[url('/intro-bg-2.jpg')] bg-fixed bg-center bg-cover">
      <div className="py-20 text-center bg-black/70 w-full h-full">
        <div className="container flex flex-col items-center justify-center gap-4">
          <blockquote className="font-semibold text-white text-2xl">
          Do you have a question, an idea, or a project you need help with?
          </blockquote>
          <a href="https://wa.me/6282137527284?text=Halo%20Riyan%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda." target="_blank" className="mt-4 py-3 px-4 rounded-md border border-yellow font-semibold text-base text-yellow transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow hover:border-white hover:text-black duration-300">Let`s talk.</a>
        </div>
      </div>
    </section>
  );
};

export { Parallax };
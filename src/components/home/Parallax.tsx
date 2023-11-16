const Parallax = () => {
  const directEmail = () => {
    window.location.href = "mailto:riyan.purba00@gmail.com";
  }
  return (
    <section className="relative w-full h-full bg-black flex items-center justify-center bg-[url('/intro-bg-2.jpg')] bg-fixed bg-center bg-cover">
      <div className="py-20 text-center bg-black/70 w-full h-full">
        <div className="container">
          <blockquote className="font-semibold text-white text-2xl">
          Do you have a question, an idea, or a project you need help with?
          </blockquote>
          <button onClick={directEmail} className="mt-4 py-3 px-4 rounded-md border border-yellow font-semibold text-base text-yellow transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow hover:border-white hover:text-black duration-300">Let`s talk.</button>
        </div>
      </div>
    </section>
  );
};

export { Parallax };
import { SocialMedia } from "@/templates/SocialMedia"

const Contact = () => {
  return (
    <section id="contact" className="relative w-full h-full py-10 2xl:py-20 xl:py-20 lg:py-20 md:py-20 bg-black text-white flex items-center">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-4xl font-bold uppercase tracking-widest text-yellow/90 group-hover:text-yellow group-focus-visible:text-yellow">Contact</h2>
          {/* <span>Want to hire me or chat with me?</span>
          <span>Then write me an email at <a href="mailto:riyan.purba00@gmail.com" className="font-bold text-yellow underline">riyan.purba00@gmail.com</a></span>
          <span className="font-bold">Otherwise</span> */}
          <span>Let`s be friend!</span>
          <div className="flex items-center gap-4">
            <SocialMedia childClass="flex flex-row items-center justify-between gap-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }
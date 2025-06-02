import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

// import { SocialMedia } from "@/templates/SocialMedia";

const Footer = () => {
  return (
    <footer className="relative bottom-0 right-0 left-0 w-full h-16 bg-black p-5 border-t">
      <div className="container">
        <div className="isolate h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg: md:flex-row items-center justify-center text-center">
              <p className="mb-7 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 text-sm text-white">© 2022 <Link href="/"><strong className="text-yellow font-semibold uppercase">{AppConfig.author}</strong></Link> | All Right Reserved </p>
              {/* <SocialMedia childClass="flex flex-row items-center justify-between gap-10" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export { Footer };
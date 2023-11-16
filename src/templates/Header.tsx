import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 w-full h-20 py-3 bg-black z-50">
      <div className="container">
        <nav className="relative w-full h-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={AppConfig.image} alt={AppConfig.author} title={AppConfig.author} width={60} height={60} />
          </Link>
          <div className="flex md:order-2">
            <Link href="mailto:riyan.purba00@gmail.com" className="text-black bg-yellow hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-yellow font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Hire Me!</Link>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className="mx-auto">
                <Link href="/" className="block py-2 pl-3 pr-4 text-white capitalize rounded md:p-0">Home</Link>
              </li>
              <li className="mx-auto">
                <Link href="/#about" className="block py-2 pl-3 pr-4 text-white capitalize rounded md:p-0">About</Link>
              </li>
              <li className="mx-auto">
                <Link href="/#experiences" className="block py-2 pl-3 pr-4 text-white capitalize rounded md:p-0">Experiences</Link>
              </li>
              <li className="mx-auto">
                <Link href="/#project" className="block py-2 pl-3 pr-4 text-white capitalize rounded md:p-0">Projects</Link>
              </li>
              <li className="mx-auto">
                <Link href="/#contact" className="block py-2 pl-3 pr-4 text-white capitalize rounded md:p-0">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
};

export { Header };
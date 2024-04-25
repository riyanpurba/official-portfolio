import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { tech } from '@/json/tech';

const Technology = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center text-black hover:text-yellow bg-white bg-fixed bg-center bg-cover">
      <div className="py-20 text-center bg-white w-full h-full">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-oswald font-semibold text-black">Tools & Technologies</h2>
          <span className="mb-5 relative block border-b-4 border-yellow w-1/4 h-auto mx-auto"></span>
          <Marquee>
            <ul className="p-5 flex gap-10">
              {
              tech.map((item, index) => (
                <li  key={index} className="flex items-center justify-center">
                  <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      loading="lazy"
                      title={item.title}
                  />
                </li>
              ))
            }
            </ul>
          </Marquee>
        </div>
      </div>
    </section>
  )
};

export { Technology }
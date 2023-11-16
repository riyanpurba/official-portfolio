import { tech } from '@/json/tech';
import Image from 'next/image';

const Technology = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center text-black hover:text-yellow bg-white bg-fixed bg-center bg-cover">
      <div className="py-20 text-center bg-white w-full h-full">
        <div className="container">
          <h2 className="text-center text-4xl font-bold uppercase tracking-widest">Tools & Technologies</h2>
          <span className="mb-5 relative block border-b-4 border-yellow w-1/4 h-auto mx-auto"></span>
          <ul className="p-5 grid grid-cols-4 md:grid-cols-8 gap-10">
            {
              tech.map((item, index) => (
                <li key={index} className="flex items-center justify-center">
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
        </div>
      </div>
    </section>
  )
};

export { Technology }
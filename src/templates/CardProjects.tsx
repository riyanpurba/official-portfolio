/* eslint-disable no-unused-vars */
import { FC } from "react";
import { DirectLink } from "@/templates/DirectLink";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

interface CardProjectsProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  onClick: (slug: string) => void;
}

const CardProjects: FC<CardProjectsProps> = ({ title, slug, description, image, url, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(slug);
    }
  };
  return (
    <>
      <div className="absolute text-white top-0 right-0 m-1 p-1 z-[2] flex items-center gap-2">
        <button onClick={handleClick} className='p-2 bg-black/80 rounded-full'><MagnifyingGlassIcon className='w-5 h-5 text-white' /></button>
        <a href={url} className='p-2 bg-black/80 rounded-full' target='_blank' rel="noreferrer"><DirectLink iconClass="w-6 h-6" /></a>
      </div>
      <div className="relative w-auto h-auto bg-gradient from-black to-black shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] rounded-lg">
        <Image src={image} alt={title} title={title} width={313} height={120} className="rounded-lg" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="absolute bottom-0 p-3 left-0 w-full h-[200px] flex flex-col items-start justify-end bg-gradient-to-t from-black via-black/50 to-white/0 z-[1]">
        <h3 className="flex items-center justify-start text-yellow text-lg font-bold uppercase tracking-widest text-center">{title}</h3>
        <p className="text-white/50 text-sm w-full text-left mx-auto pt-2 select-none line-clamp-2">{description}</p>
      </div>
    </>
  );
};

export { CardProjects }
/* eslint-disable no-unused-vars */
import { FC } from "react";
import { DirectLink } from "@/templates/DirectLink";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import Link from "next/link";

interface CardProjectsProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  tech: { name: string; slug: string }[];
  onClick: (slug: string) => void;
}

const CardProjects: FC<CardProjectsProps> = ({ title, slug, description, image, url, tech, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(slug);
    }
  };
  return (
    <>
      <div className="relative w-full h-auto p-3 bg-gradient from-black to-black shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] rounded-lg">
        <Image src={image} alt={title} title={title} width={300} height={300} className="rounded-lg" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="relative p-3 w-full h-auto flex flex-col items-start justify-between bg-gradient-to-t from-black via-black/50 to-white/0 z-[1]">
        <Link href={url} target="_blank">
          <h3 className="flex items-center justify-start text-yellow text-lg font-bold uppercase tracking-widest text-center">{title}</h3>
        </Link>
        <p className="text-white/90 text-sm w-full text-left mx-auto pt-2 select-none">{description}</p>
        <ul className="mt-5 flex items-center justify-start gap-5">
          {
            tech.map((item, index) => (
              <li key={index}>
                <Image src={"/icon/" + item.slug + ".svg"} width={30} height={30} alt="" />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export { CardProjects }
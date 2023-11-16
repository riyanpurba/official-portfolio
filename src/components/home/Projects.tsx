import { FC, useState } from 'react';
import { CardProjects } from '@/templates/CardProjects';
import { ModalProjects } from '@/templates/ModalProjects';
import { project, Project } from '@/json/project';
import Image from 'next/image';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleGetDetail = (projectSlug: string) => {
    const foundProject = project.find((item) => item.slug === projectSlug);
    if (foundProject) {
      setSelectedProject(foundProject);
      setIsModalOpen(true);
    }
  };

  return (
    <section id='project' className="relative w-full h-full py-10 2xl:py-20 xl:py-20 lg:py-20 md:py-20 bg-black flex items-center">
      <div className="container">
        <h2 className="text-center text-4xl font-bold uppercase tracking-widest text-yellow/90 group-hover:text-yellow group-focus-visible:text-yellow">Projects</h2>
        <p className="hidden text-white text-base w-full md:w-6/12 text-center mx-auto py-4 select-none">
          With approximately five years of experience, I have successfully developed web applications that contribute to the growth and success of various companies.
        </p>
        <div className='relative'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-10">
            {project.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center overflow-hidden">
                <CardProjects {...item} onClick={() => handleGetDetail(item.slug)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mt-4 w-auto hidden 2xl:flex xl:flex lg:flex md:flex sm:hidden z-[2]">
        <Image src="/banner-three-repeat-grid.png" alt="dots" title="dots" loading="lazy" width={320} height={533} />
      </div>
      <ModalProjects isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} detail={selectedProject} />
    </section>
  );
};

export { Projects };

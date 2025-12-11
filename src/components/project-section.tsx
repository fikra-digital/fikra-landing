import React from 'react'
import { useRef } from 'react';

import { MdArrowOutward } from "react-icons/md";
import { ProjectData } from '@/constant/projects';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-start uppercase">
          Travaux <br /> en vedette
        </h2>
        <div className="flex flex-col gap-8">
          {ProjectData.slice(0, 3).map((project) => 
            <ProjectCard key={project.id} {...project} />
          )}
        </div>
      </div>
        <div className="flex items-center justify-center gap-1 text-sm md:text-xl font-medium mt-12">
          Voir Tous les Projets
          <div className="p-2 bg-[#00AAE8] rounded-full">
            <MdArrowOutward />
          </div>   
        </div>
    </section>
  )
}

export default ProjectSection
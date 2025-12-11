import React from 'react'
import Image from "next/image";

import ServiceCard from './ServiceCard';
import { Parallax } from "react-scroll-parallax";
import { services } from '@/constant/services';

const ServicesSection = () => {
  return (
          <section id="services" className="bg-gray-100 py-24">
            <div className="container mx-auto px-4">
              <div className="mb-12">
                <h2 className="text-4xl md:text-7xl font-bold mb-4 text-start uppercase">
                  Nos <br /> Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((project, index) => (
                  <Parallax key={index}>
                    <ServiceCard
                      title={project.title}
                      description={project.description}
                      icon={project.image}
                    />
                    {/* <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    </div> */}
                  </Parallax>
                ))}
              </div>
            </div>
          </section>
  )
}

export default ServicesSection
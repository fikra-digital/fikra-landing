import React from 'react'
import Image from 'next/image';
import { useRef } from 'react';

import { teamMembers } from '@/constant/teamMembers';

const TeamSection = () => {
  const containerRef = useRef(null);

  return (
    <section id="team" ref={containerRef} className="bg-white py-24 px-4 md:px-12 lg:px-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-start uppercase">
          Rencontrez <br /> Notre Équipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={`team-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-48 h-48 mx-auto mt-8 rounded-full bg-[#00AAE8] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection
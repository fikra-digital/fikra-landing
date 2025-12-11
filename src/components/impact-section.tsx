'use client'

import React from 'react'
import CountUp from 'react-countup'
import Image from "next/image";
import { impactStats } from '@/constant/impactStats';

const ImpactSection: React.FC = () => {

  return (
    <div>
      <div className="max-w-7xl mx-auto text-neutral-900 my-12 px-2 sm:px-4">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl heading-1 my-4">Ensemble, nous faisons la différence</h1>
      </div>
      <div className="bg-neutral-900 py-24 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-8  px-4 sm:px-6">
          {impactStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 px-6 py-2 border border-neutral-500 hover:border-primary-500 rounded-full text-secondary-600 mb-4">
                <Image src={stat.icon} alt={stat.title} width={24} height={24} />
                <h2 className="text-lg md:text-xl font-semibold">{stat.title}</h2>
              </div>
              <div className="flex items-center gap-2 text-7xl lg:text-8xl font-bold text-neutral-50">
                <CountUp end={stat.value} duration={2} separator="," enableScrollSpy />
                <p className="">{stat.currencyValue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImpactSection
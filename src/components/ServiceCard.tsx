"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-sm md:max-w-md min-h-[500px] overflow-hidden">
      <div className="mb-4 flex items-center justify-center bg-blue-50 rounded-lg h-[300px] w-full">
        <Image src={icon} alt={title} className="h-full w-full" />
      </div>

      <div className="relative p-4 md:p-6">
        <div className="absolute right-0 bottom-0 h-full w-1/3 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            fill="#00AAE8"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M10 20 H80 M30 40 H150 M70 60 H190 M90 80 H120"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
            />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

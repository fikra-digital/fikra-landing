import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import africaImage from "../app/africa-map.jpg";

const HeroSection: React.FC<{
    topRef: React.RefObject<HTMLElement>;
    topImageScale: any;
    topImageOpacity: any;
    textOpacity: any;
    textScale: any;
}> = ({ topRef, topImageScale, topImageOpacity, textOpacity, textScale
}) => {
  return (
        <section ref={topRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                scale: topImageScale,
                opacity: topImageOpacity,
              }}
            >
              <Image
                src={africaImage}
                alt="Map of Africa"
                layout="fill"
                objectFit="contain"
                className="object-center"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-48 transform -translate-x-1/2 -translate-y-1/2 text-start z-10"
              style={{ opacity: textOpacity, scale: textScale }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-black drop-shadow-lg">
                FIKRA DIGITAL
              </h1>
              <div className="ml-8">
                <p className="text-xl md:text-2xl mt-4 text-black drop-shadow-md">
                  Bridging Africa&apos;s Heritage with Tomorrow&apos;s Technology <span className="text-[#00AAE8] animate-ping">|</span>
                </p>
                <button className="mt-6 px-6 py-3 bg-[#00AAE8] text-black font-bold rounded-lg hover:bg-[#0088CC] transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default HeroSection
import React from 'react'
import { motion, MotionValue  } from "framer-motion";
import Image from "next/image";
import africaImage from "../app/africa-map.jpg";

const HeroSection: React.FC<{
    topRef: React.RefObject<HTMLElement>;
    topImageScale: MotionValue<number> | number;
    topImageOpacity: MotionValue<number> | number;
    textOpacity: MotionValue<number> | number;
    textScale: MotionValue<number> | number;
}> = ({ topRef, topImageScale, topImageOpacity, textOpacity, textScale
}) => {
  return (
        <section id="top" ref={topRef} className="relative h-[400vh]">
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
              className="absolute top-1/2 left-8 md:left:-24 lg:left-48 transform -translate-x-1/2 -translate-y-1/2 text-start z-10"
              style={{ opacity: textOpacity, scale: textScale }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-black drop-shadow-lg">
                FIKRA DIGITAL
              </h1>
              <div className="ml-8">
                <p className="text-xl md:text-2xl mt-4 text-black drop-shadow-md">
                  Relier l&apos;héritage africain à la technologie de demain <span className="text-[#00AAE8] animate-ping">|</span>
                </p>
                <button className="mt-6 px-6 py-3 bg-[#00AAE8] text-black font-bold rounded-lg hover:bg-[#0088CC] transition-colors">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default HeroSection
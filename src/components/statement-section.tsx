import React from 'react'
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const StatementSection = () => {
  return (
          <section id="start" className="bg-white py-24">
            <div className="container mx-auto px-4">
              <Parallax speed={-5}>
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                  FIKRA EST UN STUDIO
                  <br />
                    TECHNOLOGIQUE AFRICAIN
                  <motion.span
                    className="inline-block w-12 h-12 rounded-full bg-[#00AAE8] ml-4"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <br />
                  QUI CONSTRUIT
                  <br />
                  LES EXPÉRIENCES DU FUTUR
                </h2>
              </Parallax>
              <Parallax speed={-10}>
                <p className="text-xl md:text-2xl mb-8">
                    Nous apportons une innovation inspirée de l’Afrique au monde digital,
                    en créant des expériences uniques qui relient tradition et technologie.
                </p>
              </Parallax>
            </div>
          </section>
  )
}

export default StatementSection
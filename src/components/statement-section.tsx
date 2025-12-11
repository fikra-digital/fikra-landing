import React from 'react'
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const StatementSection = () => {
  return (
          <section id="start" className="bg-white py-24">
            <div className="container mx-auto px-4">
              <Parallax speed={-5}>
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                  FIKRA IS A DESIGN-DRIVEN
                  <br />
                  TECH STUDIO
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
                  BUILDING
                  <br />
                  FUTURE EXPERIENCES
                </h2>
              </Parallax>
              <Parallax speed={-10}>
                <p className="text-xl md:text-2xl mb-8">
                  We bring African-inspired innovation to the digital world,
                  creating unique experiences that bridge tradition and
                  technology.
                </p>
              </Parallax>
            </div>
          </section>
  )
}

export default StatementSection
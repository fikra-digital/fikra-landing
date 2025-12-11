"use client";

import { motion } from "framer-motion";

export default function ImprovedAboutSection() {
  return (
    <section id="about" className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center px-4 md:px-6">
        <div className="max-w-4xl w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 flex items-center">
            FUTURE
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z"
                  fill="#00AAE8"
                />
              </svg>
            </motion.span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-12">POSITIVE</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            Nous sommes fermement convaincus que le design et la technologie, lorsqu’ils sont correctement appliqués,
            contribuent à la transition vers un avenir positif. C’est pourquoi nous façonnons ces transitions pour impulser
            le changement dès maintenant, sans perdre de vue notre objectif.
          </p>
        </div>
      </main>
    </section>
  );
}

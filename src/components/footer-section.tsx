import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FooterSection = () => {
  const words = ["FIKRA", "PENSE", "THINK"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 3000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, [isAnimating, words.length]);

  const currentWord = words[currentWordIndex];
  const nextWord = words[(currentWordIndex + 1) % words.length];

  return (
    <footer id="footer" className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-center leading-none flex flex-col items-center">
          <div className="flex justify-center">
            {currentWord.split("").map((letter, index) => (
              <motion.div
                key={`${letter}-${index}`}
                className="relative"
                style={{ width: "1em", height: "1.2em" }}
              >
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isAnimating ? -90 : 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateX: 90 }}
                  animate={{ rotateX: isAnimating ? 0 : 90 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onAnimationComplete={() => {
                    if (index === currentWord.length - 1) {
                      setIsAnimating(false);
                    }
                  }}
                >
                  {nextWord[index]}
                </motion.span>
              </motion.div>
            ))}
          </div>
          <div className="text-2xl mt-4">DIGITAL</div>
          <small className="text-center text-sm font-light w-fit mx-auto">
            {new Date().getFullYear()} All rights resevered
          </small>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection
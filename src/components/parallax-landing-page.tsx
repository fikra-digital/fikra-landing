"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ImprovedAboutSection from "./improved-about-section";
import teamImage from "../app/team.webp";

export function ParallaxLandingPageComponent() {
  const topRef = useRef(null);

  const { scrollYProgress: topScrollProgress } = useScroll({
    target: topRef,
    offset: ["start start", "end start"],
  });

  const topImageScale = useTransform(topScrollProgress, [0, 0.8], [1, 4]);
  const topImageOpacity = useTransform(topScrollProgress, [0, 0.8], [1, 0]);
  const contentOpacity = useTransform(topScrollProgress, [0.8, 1], [0, 1]);
  const textOpacity = useTransform(topScrollProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(topScrollProgress, [0, 0.3], [1, 1.2]);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white text-black">
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg"
                alt="Map of Africa"
                layout="fill"
                objectFit="contain"
                className="object-center"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
              style={{ opacity: textOpacity, scale: textScale }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                FIKRA DIGITAL
              </h1>
            </motion.div>
          </div>
        </section>

        <motion.div
          className="relative z-10"
          style={{ opacity: contentOpacity }}
        >
          <section id="start" className="bg-white py-24">
            <div className="container mx-auto px-4">
              <Parallax speed={-5}>
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                  FIKRA IS A DESIGN-DRIVEN
                  <br />
                  TECH STUDIO
                  <motion.span
                    className="inline-block w-12 h-12 rounded-full bg-green-400 ml-4"
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

          <section className="bg-gray-100 py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-7xl font-bold mb-12 text-start uppercase">
                Our <br /> Work
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "E-commerce Platform",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                  {
                    title: "Health Tech App",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                  {
                    title: "Educational Portal",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                  {
                    title: "Fintech Solution",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                  {
                    title: "Smart City Initiative",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                  {
                    title: "Sustainable Energy Dashboard",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/africa-program-Vxgcneg8AcF8OYcJB713GgVkkGo1TY.svg",
                  },
                ].map((project, index) => (
                  <Parallax key={index}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
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
                          Innovative solutions tailored to African needs,
                          leveraging cutting-edge technologies and inspired
                          design principles.
                        </p>
                      </div>
                    </div>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <ParallaxedTeamSection />

          <ImprovedAboutSection />

          <AnimatedFooter />
        </motion.div>
      </div>
      <AfricanAnimatedDrawings />
    </ParallaxProvider>
  );
}

function AnimatedFooter() {
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
    <footer className="py-8 bg-white overflow-hidden">
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

function ParallaxedTeamSection() {
  const containerRef = useRef(null);

  const teamMembers = [
    {
      name: "Amina Diop",
      role: "Managing Partner",
      image: teamImage,
    },
    {
      name: "Kwame Osei",
      role: "Lead Developer",
      image: teamImage,
    },
    {
      name: "Zara Mbeki",
      role: "UX/UI Designer",
      image: teamImage,
    },
    {
      name: "Jamal Ahmed",
      role: "Project Manager",
      image: teamImage,
    },
  ];

  return (
    <section ref={containerRef} className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-start uppercase">
          Meet <br /> Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={`team-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-48 h-48 mx-auto mt-8 rounded-full overflow-hidden">
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

function AfricanAnimatedDrawings() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="african-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M20 100 Q50 20 80 100 T140 100"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              fill="rgba(59, 130, 246, 0.05)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#african-pattern)"
        />

        <motion.path
          d="M50 50 C60 40, 80 40, 90 50 S120 60, 130 50 M90 50 L90 80 C80 90, 70 90, 60 80 L60 60"
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M200 20 L220 20 L220 40 L200 40 Z M240 40 L260 40 L260 60 L240 60 Z"
          fill="rgba(59, 130, 246, 0.1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M300 100 C320 80, 340 80, 360 100 C360 120, 340 140, 320 140 C300 140, 280 120, 300 100 Z"
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M400 200 L420 160 L440 200 M410 200 L430 170 L450 200 M420 200 V220"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          fill="none"
          initial={{ scaleY: 0.8 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AfricanAnimatedDrawings from "./africanDrawing-animation";
import NavigationSection from "./navigation-section";
import AboutSection from "./about-section";
import StatementSection from "./statement-section";
import HeroSection from "./hero-section";
import TeamSection from "./team-section";
import ImpactSection from "./impact-section";
import ServicesSection from "./services-section";
import FooterSection from "./footer-section";


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
        <NavigationSection />
        <HeroSection
          topRef={topRef}
          topImageScale={topImageScale}
          topImageOpacity={topImageOpacity}
          textOpacity={textOpacity}
          textScale={textScale}
        />
        <StatementSection />
        <motion.div
          className="relative z-10"
          style={{ opacity: contentOpacity }}
        >
          <ServicesSection />
          <TeamSection />
          <ImpactSection />
          <AboutSection />
          <FooterSection />
        </motion.div>
      </div>
      <AfricanAnimatedDrawings />
    </ParallaxProvider>
  );
}

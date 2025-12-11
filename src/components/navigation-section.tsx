"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../app/fikra-logo.png";

const NavigationSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { name: "Accueil", href: "#top" },
    { name: "Nos Services", href: "#services" },
    { name: "Projets", href: "#projects" },
    { name: "Équipe", href: "#team" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold p-2 bg-black rounded-full">
              <Image src={logo.src} alt="Fikra Digital Logo" width={50} height={50} />
            </div>
            <ul className="flex space-x-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-800 font-semibold hover:text-[#00AAE8] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
  )
}

export default NavigationSection
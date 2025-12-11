"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, X } from "lucide-react";

import menu from '@/assets/Icons/menu.svg';
import logo from "../app/fikra-logo.png";

const NavigationSection = () => {
  const [scrolled, setScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:px-32 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold p-2 bg-black rounded-full">
              <Image src={logo.src} alt="Fikra Digital Logo" width={50} height={50} />
            </div>
            <ul className="hidden lg:flex space-x-4">
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
            {!isMenuOpen &&
              <button
                className="lg:hidden ml-2 p-2 relative z-50 bg-secondary-100 rounded-full cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Image
                  src={menu.src}
                  alt="menu"
                  width={35}   // in pixels
                  height={30} 
                 />
              </button>
            }
          </div>
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-0 bg-white z-40 mobile-menu-enter">
            <div className="flex flex-col h-full max-h-full overflow-y-auto">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-200 mobile-menu-header">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xl font-bold p-2 bg-black rounded-full">
                    <Image src={logo.src} alt="Fikra Digital Logo" width={50} height={50} />
                  </div>
                  <h1 className="font-bold text-2xl text-black">
                    IKRA DIGITAL
                  </h1>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 cursor-pointer bg-secondary-100 rounded-full"
                >
                  <X className="w-8 h-8 text-black" />
                </button>
              </div>

              {/* Main Navigation */}
              <div className="flex-1 flex flex-col justify-center px-6 py-12 mobile-menu-nav">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-3xl font-bold text-gray-800 hover:text-[#00AAE8] transition-colors duration-300 mobile-menu-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="p-6 border-t border-secondary-200 space-y-6 mobile-menu-bottom">
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary-400" />
                    <a
                      href="tel:+243971774989"
                      className="text-lg text-primary-400 font-medium"
                    >
                      +243 971 774 989
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary-400" />
                    <a
                      href="mailto: contact@fikra.digital"
                      className="text-lg text-primary-400 font-medium"
                    >
                       contact@fikra.digital
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </nav>
  )
}

export default NavigationSection
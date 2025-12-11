import React from 'react'
import Image from "next/image";

import logo from "../app/fikra-logo.png";

const NavigationSection = () => {
    // Navigation items
  const navItems = [
    { name: "Home", href: "#top" },
    { name: "Work", href: "#work" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];
  
  return (
        <nav className="fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold p-2 bg-black rounded-full">
              <Image src={logo.src} alt="Fikra Digital Logo" width={50} height={50} />
            </div>
            <ul className="flex space-x-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-[#00AAE8] transition-colors"
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
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronLeft } from "lucide-react";

interface HeaderProps {
  variant?: "main" | "contact";
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function Header({ variant = "main" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="fixed w-full bg-[#003693]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl">
            <Link href="/" className="block text-white hover:text-[#7A9DC7] transition-all duration-300 transform hover:scale-105">
              Y3 LLC
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#7A9DC7] transition-colors p-2 hover:bg-[#7A9DC7]/20 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {variant === "main" ? (
              <>
                <a
                  onClick={() => scrollToSection("services")}
                  onMouseEnter={() => setHoveredItem("services")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`py-1 px-2 transition-all duration-300 cursor-pointer relative text-white ${
                    hoveredItem === "services" ? "text-[#7A9DC7] translate-y-[-2px]" : "hover:text-[#7A9DC7] hover:translate-y-[-2px]"
                  }`}
                >
                  Services
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#7A9DC7] transition-all duration-300 ${hoveredItem === "services" ? "w-full" : "w-0"}`}
                  ></span>
                </a>
                <a
                  onClick={() => scrollToSection("about")}
                  onMouseEnter={() => setHoveredItem("about")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`py-1 px-2 transition-all duration-300 cursor-pointer relative text-white ${
                    hoveredItem === "about" ? "text-[#7A9DC7] translate-y-[-2px]" : "hover:text-[#7A9DC7] hover:translate-y-[-2px]"
                  }`}
                >
                  About
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#7A9DC7] transition-all duration-300 ${hoveredItem === "about" ? "w-full" : "w-0"}`}
                  ></span>
                </a>
                <Link
                  href="/contact"
                  onMouseEnter={() => setHoveredItem("contact")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`py-1 px-2 transition-all duration-300 relative text-white ${
                    hoveredItem === "contact" ? "text-[#7A9DC7] translate-y-[-2px]" : "hover:text-[#7A9DC7] hover:translate-y-[-2px]"
                  }`}
                >
                  Contact
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#7A9DC7] transition-all duration-300 ${hoveredItem === "contact" ? "w-full" : "w-0"}`}
                  ></span>
                </Link>
              </>
            ) : (
              <Link
                href="/"
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
                className={`py-1 px-2 transition-all duration-300 flex items-center relative text-white ${
                  hoveredItem === "home" ? "text-[#7A9DC7] translate-y-[-2px]" : "hover:text-[#7A9DC7] hover:translate-y-[-2px]"
                }`}
              >
                <ChevronLeft size={20} className="mr-1" />
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#7A9DC7] transition-all duration-300 ${hoveredItem === "home" ? "w-full" : "w-0"}`}></span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#003693]/98">
          <div className="px-2 pt-2 pb-3 space-y-4">
            {variant === "main" ? (
              <>
                <a
                  onClick={() => {
                    scrollToSection("services");
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 text-base font-medium text-white hover:text-[#7A9DC7] hover:bg-[#7A9DC7]/10 transition-all duration-300 rounded-md cursor-pointer"
                >
                  Services
                </a>
                <a
                  onClick={() => {
                    scrollToSection("about");
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 text-base font-medium text-white hover:text-[#7A9DC7] hover:bg-[#7A9DC7]/10 transition-all duration-300 rounded-md cursor-pointer"
                >
                  About
                </a>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-[#7A9DC7] hover:bg-[#7A9DC7]/10 transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            ) : (
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-white hover:text-[#7A9DC7] hover:bg-[#7A9DC7]/10 transition-all duration-300 rounded-md flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ChevronLeft size={20} className="mr-1" />
                Home
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

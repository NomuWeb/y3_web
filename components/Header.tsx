"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronLeft } from "lucide-react";

interface HeaderProps {
  variant?: "main" | "contact";
}

export default function Header({ variant = "main" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl transform hover:scale-105 transition-transform">
            <Link href="/">Y3 LLC</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-400 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {variant === "main" ? (
              <>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                  Services
                </a>
                <a href="#about" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                  About
                </a>
                <Link href="/contact" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                  Contact
                </Link>
              </>
            ) : (
              <Link href="/#contact" className="hover:text-blue-400 transition-colors flex items-center hover:translate-y-[-2px] transform">
                <ChevronLeft size={20} className="mr-1" />
                Home
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {variant === "main" ? (
              <>
                <a href="#services" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                  Services
                </a>
                <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                  About
                </a>
                <Link href="/contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </>
            ) : (
              <Link href="/#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors flex items-center">
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

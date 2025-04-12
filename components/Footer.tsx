"use client";

import React from "react";
import { Facebook, Instagram, Mail, MapPinned, Phone, Twitter } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[rgb(24,25,26)] pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">Y3 LLC</h3>
            <p className="text-gray-400 mb-4">Shaping the future of digital marketing through innovative solutions and strategic partnerships.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white hover:text-blue-400 transition-colors">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPinned size={16} className="mr-2" />
                <span>東京都世田谷区</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@y3llc.jp" className="hover:text-blue-400 transition-colors">
                  nomuray3@outlook.jp
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+81-XX-XXXX-XXXX" className="hover:text-blue-400 transition-colors">
                  +81-XX-XXXX-XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 pb-2 text-center text-sm text-gray-400">© 2025 Y3 LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}

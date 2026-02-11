"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  variant?: "main" | "secondary";
}

const Header: React.FC<HeaderProps> = ({ variant = "main" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  const navLinks = [
    { name: "Purpose", nameJa: "目的", href: getHref("#purpose") },
    { name: "Services", nameJa: "サービス", href: getHref("#services") },
    { name: "Company", nameJa: "会社情報", href: getHref("#about") },
    { name: "News", nameJa: "ニュース", href: getHref("#news") },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return;

    e.preventDefault();

    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);

    if (element) {
      setIsMenuOpen(false);

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || variant === "secondary"
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div
                className={`transition-all duration-300 ${isScrolled || variant === "secondary" ? "brightness-0 saturate-100" : "brightness-0 invert"}`}
                style={{
                  filter:
                    isScrolled || variant === "secondary"
                      ? "brightness(0) saturate(100%) invert(11%) sepia(100%) saturate(4831%) hue-rotate(214deg) brightness(96%) contrast(127%)"
                      : undefined,
                }}
              >
                <Image src="/images/logo.svg" alt="Y3 合同会社ワイスリー" width={60} height={20} priority />
              </div>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex flex-col items-center tracking-wide ${
                  isScrolled || variant === "secondary"
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs">{link.name}</span>
                <span className="text-[10px] mt-0.5 opacity-60">{link.nameJa}</span>
              </a>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 text-sm font-medium transition-all duration-300 tracking-wide ${
                isScrolled || variant === "secondary"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-md hover:shadow-blue-200"
                  : "bg-white text-gray-900 hover:shadow-md"
              }`}
            >
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 ${isScrolled || variant === "secondary" ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルドロップダウンメニュー */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono">{link.name}</span>
                  <span className="text-xs text-gray-400">{link.nameJa}</span>
                </div>
              </a>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full py-3 px-4 text-center font-medium text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ヘッダー下のアクセントライン */}
      <div
        className={`h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left transition-transform duration-500 ${
          isScrolled || variant === "secondary" ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </header>
  );
};

export default Header;

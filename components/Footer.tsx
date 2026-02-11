"use client";

import React from "react";
import { Instagram, Facebook, X, Mail, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const companyInfo = {
    name: "合同会社Y3（ワイスリー）",
    address: "東京都世田谷区",
    email: "contact@yyy-3.com",
  };

  const getHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return;

    e.preventDefault();

    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: getHref("#about") },
        { label: "Services", href: getHref("#services") },
        { label: "News", href: getHref("#news") },
        { label: "Contact", href: getHref("#contact") },
      ],
    },
  ];

  const footerImages = [
    { src: "/images/footer/img_01.png", alt: "Image 1" },
    { src: "/images/footer/img_02.png", alt: "Image 2" },
    { src: "/images/footer/img_03.png", alt: "Image 3" },
  ];

  return (
    <footer className="bg-[#0a1628] relative overflow-hidden">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        {/* メインフッター内容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* 会社情報 */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">Y3</span>
              <div className="ml-1.5 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="ml-2 text-sm font-mono text-gray-400">ワイスリー</span>
            </Link>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3 flex-shrink-0" size={16} />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* フッター画像 */}
            <div className="flex space-x-3 mt-6">
              {footerImages.map((image, index) => (
                <div key={index} style={{ width: "40px", height: "40px" }} className="overflow-hidden border border-white/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={60}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* リンク */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-mono font-semibold text-white mb-4 tracking-wider uppercase">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-gray-400 hover:text-cyan-400 flex items-center group transition-colors text-sm"
                    >
                      <ChevronRight size={14} className="mr-1.5 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ソーシャルリンク */}
          <div>
            <h3 className="text-sm font-mono font-semibold text-white mb-4 tracking-wider uppercase">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-4">SNSで最新情報をチェック</p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <X size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs font-mono tracking-wide">
            &copy; {year} {companyInfo.name} All rights reserved.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

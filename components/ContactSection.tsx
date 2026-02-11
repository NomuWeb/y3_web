"use client";

import React from "react";
import { Mail, Instagram, Facebook, X } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface ContactSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const ContactSection: React.FC<ContactSectionProps> = ({ AnimatedSection }) => {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-28 bg-[#0a1628] relative overflow-hidden">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            お問い合わせ
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-base text-gray-400 mb-10 leading-relaxed">
              お問い合わせは下記のボタンから専用フォームへお進みください。
              <br />
              担当者が確認次第、ご連絡いたします。
            </p>

            {/* お問い合わせボタン */}
            <div className="flex justify-center mb-14">
              <a
                href="/contact"
                className="group relative inline-flex items-center px-10 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                <span className="relative flex items-center tracking-wide">
                  <Mail className="mr-3" size={18} />
                  お問い合わせフォームへ
                </span>
                <span className="absolute right-5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* SNSアイコン */}
          <div className="mb-8">
            <h4 className="text-center text-sm font-mono font-medium text-gray-500 mb-6 tracking-wide uppercase">フォローをお願いします</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 bg-white/[0.05] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="X (formerly X)"
              >
                <X size={18} />
              </a>
            </div>
            <p className="text-center text-gray-500 mt-5 text-xs tracking-wide">SNSでも最新情報を発信しています</p>
          </div>

          {/* デコレーション要素 */}
          <div className="flex justify-center mt-12">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;

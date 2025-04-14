"use client";

import React from "react";
import { Lightbulb, Sparkles, Stars } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface PurposeSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const PurposeSection: React.FC<PurposeSectionProps> = ({ AnimatedSection }) => {
  return (
    <AnimatedSection id="purpose" className="py-20 overflow-hidden relative bg-white">
      {/* 背景装飾 - 浮かぶ形 */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-50 opacity-50"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-50 opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-20 h-20 rounded-full bg-cyan-50 opacity-60 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 mb-3">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Purpose</span>
          </h2>
          <h3 className="text-xl text-gray-600">私たちの目的</h3>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* 装飾的な要素 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-blue-100 opacity-50 blur-xl"></div>

          <div className="mb-12 flex justify-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-indigo-100 animate-ping opacity-25"></div>
              <div className="relative rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white shadow-lg transform hover:scale-110 transition-all duration-300">
                <Sparkles size={32} />
              </div>
              <div className="absolute -right-3 -bottom-2">
                <Stars size={20} className="text-purple-500" />
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 mb-8">
            意思ある個人による 新しい経済をつくる
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
              たとえどれだけAIやロボティクスによって世の中の合理化が進んでも、鳥肌が立つような感動は人間ならではの価値として残り続けると信じています。
            </p>

            <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
              私たちは、感動を生み出すクリエイターやアーティスト、アスリートなどの熱狂的な個人を応援し、新しい経済のカタチを次々と作っていきます。
            </p>
          </div>

          {/* インタラクティブな要素 */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex space-x-3">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: "300ms" }}></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "600ms" }}></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PurposeSection;

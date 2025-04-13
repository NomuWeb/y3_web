"use client";

import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  japaneseTitle: string;
  description: string;
  className?: string;
}

export default function ServiceCard({ icon, title, japaneseTitle, description, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`relative p-6 bg-white border-0 shadow-lg hover:shadow-[#003693]/20 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0% 75%, 0 0)",
      }}
    >
      {/* 装飾的な斜め線 */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 bg-[#003693]/10 transition-all duration-500 group-hover:bg-[#003693]/20"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      ></div>

      {/* 左上の装飾 */}
      <div className="absolute top-0 left-0 w-2 h-12 bg-[#003693] transform -translate-x-1 group-hover:translate-x-0 transition-all duration-500"></div>

      {/* 右上の装飾 */}
      <div className="absolute top-0 right-0 w-12 h-2 bg-[#7A9DC7] transform translate-x-1 group-hover:translate-x-0 transition-all duration-500"></div>

      {/* アイコンと英語タイトルを横並びに */}
      <div className="flex items-center mb-2 relative">
        <div className="transition-transform duration-300 group-hover:scale-110 mr-4 flex-shrink-0 z-10">{icon}</div>

        <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors z-10">{title}</h3>
      </div>

      {/* 日本語タイトルは別の行に */}
      <h4 className="text-lg text-[#3E3A39] group-hover:text-[#7A9DC7] transition-colors mb-3 relative z-10">{japaneseTitle}</h4>

      <p className="text-[#3E3A39] group-hover:text-[#3E3A39] transition-colors relative z-10">{description}</p>

      <div className="mt-8 pt-3 border-t border-zinc-200 flex justify-end relative z-10">
        <div className="h-0.5 w-0 bg-gradient-to-r from-[#7A9DC7] to-[#003693] group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  );
}

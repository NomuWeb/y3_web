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
      className={`p-6 bg-white border border-zinc-800 hover:border-[#003693] rounded-lg shadow-sm hover:shadow-[#003693]/20 transition-all duration-300 transform hover:-translate-y-1 group ${className}`}
    >
      {/* アイコンと英語タイトルを横並びに */}
      <div className="flex items-center mb-2">
        <div className="transition-transform duration-300 group-hover:scale-110 mr-4 flex-shrink-0">{icon}</div>

        <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors">{title}</h3>
      </div>

      {/* 日本語タイトルは別の行に */}
      <h4 className="text-lg text-[#3E3A39] group-hover:text-[#7A9DC7] transition-colors mb-3">{japaneseTitle}</h4>

      <p className="text-[#3E3A39] group-hover:text-[#3E3A39] transition-colors">{description}</p>

      <div className="mt-4 pt-3 border-t border-zinc-200 flex justify-end">
        <div className="h-0.5 w-0 bg-gradient-to-r from-[#7A9DC7] to-[#003693] group-hover:w-full transition-all duration-700 rounded-full"></div>
      </div>
    </div>
  );
}

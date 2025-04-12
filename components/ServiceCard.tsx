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
      className={`p-6 bg-[#050A13] border border-zinc-800 hover:border-blue-600 rounded-lg shadow-sm hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 group ${className}`}
    >
      {/* アイコンと英語タイトルを横並びに */}
      <div className="flex items-center mb-2">
        <div className="transition-transform duration-300 group-hover:scale-110 mr-4 flex-shrink-0">{icon}</div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      </div>

      {/* 日本語タイトルは別の行に */}
      <h4 className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors mb-3">{japaneseTitle}</h4>

      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{description}</p>

      <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-end">
        <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
      </div>
    </div>
  );
}

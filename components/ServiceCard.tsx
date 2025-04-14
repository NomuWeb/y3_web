"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  japaneseTitle: string;
  description: string;
  className?: string;
  slug?: string; // 詳細ページへのスラッグ
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, japaneseTitle, description, className = "", slug }) => {
  return (
    <div className={`group relative p-6 rounded-xl shadow-md border transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${className}`}>
      {/* 背景グラデーションエフェクト - ホバー時のみ表示 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* コンテンツ */}
      <div className="relative z-10">
        {/* アイコン */}
        <div className="flex justify-center mb-6">{icon}</div>

        {/* タイトル */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{title}</h3>
        <p className="text-indigo-600 text-sm font-medium text-center mb-4">{japaneseTitle}</p>

        {/* 説明 */}
        <p className="text-gray-600 text-center mb-6">{description}</p>

        {/* View Detail リンク */}
        {slug && (
          <div className="text-center mt-4">
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm group transition-colors"
            >
              View Details
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

        {/* アニメーションライン */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* 角の飾り */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-8 border-l-8 border-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ServiceCard;

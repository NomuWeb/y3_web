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
  slug?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, japaneseTitle, description, className = "", slug }) => {
  return (
    <div className={`group relative p-7 border shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${className}`}>
      {/* 上部アクセントライン */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"></div>

      {/* コーナーアクセント */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-blue-400 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-cyan-400 transition-colors duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1.5 tracking-tight">{title}</h3>
            <p className="text-blue-600 text-sm font-medium mb-4 font-mono">{japaneseTitle}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
          <div className="flex-shrink-0 ml-4">{icon}</div>
        </div>

        {slug && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm tracking-wide transition-colors"
            >
              View Details
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

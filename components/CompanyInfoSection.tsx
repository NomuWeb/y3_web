"use client";

import React from "react";
import { Users2, MapPin, Globe2, Calendar } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface CompanyInfoSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const CompanyInfoSection: React.FC<CompanyInfoSectionProps> = ({ AnimatedSection }) => {
  const companyData = [
    {
      icon: <Globe2 size={22} />,
      titleEn: "Company Name",
      titleJa: "会社名",
      valueEn: "Y3 LLC",
      valueJa: "合同会社Y3（ワイスリー）",
      accent: "blue",
    },
    {
      icon: <Users2 size={22} />,
      titleEn: "Representatives",
      titleJa: "代表者",
      valueEn: "Managing Members:",
      valueJa: "野村優太 ・ 趙竜済",
      accent: "cyan",
    },
    {
      icon: <MapPin size={22} />,
      titleEn: "Location",
      titleJa: "所在地",
      valueEn: "Setagaya-ku, Tokyo",
      valueJa: "東京都世田谷区",
      accent: "blue",
    },
    {
      icon: <Calendar size={22} />,
      titleEn: "Established",
      titleJa: "設立",
      valueEn: "April 4, 2025",
      valueJa: "2025年4月4日",
      accent: "cyan",
    },
  ];

  return (
    <AnimatedSection id="about" className="py-20 md:py-28 bg-[#0a1628] relative overflow-hidden">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            企業情報
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {companyData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-7 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* 上部アクセントライン */}
              <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-500 ${
                item.accent === "blue"
                  ? "bg-gradient-to-r from-blue-500 to-blue-400"
                  : "bg-gradient-to-r from-cyan-500 to-cyan-400"
              }`}></div>

              <div className="flex items-center mb-5">
                <div className={`p-2.5 text-white ${
                  item.accent === "blue"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600"
                    : "bg-gradient-to-br from-cyan-500 to-cyan-600"
                } group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{item.titleEn}</h3>
                  <p className="text-xs text-gray-500 font-mono">{item.titleJa}</p>
                </div>
              </div>

              <div className="pl-1">
                <p className="text-gray-500 text-sm mb-1">{item.valueEn}</p>
                <p className="text-lg font-semibold text-white">{item.valueJa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CompanyInfoSection;

"use client";

import React from "react";
import { Instagram, Users, Monitor, BarChart3, ArrowRight, UserCheck } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";
import Link from "next/link";

interface ServicesSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ AnimatedSection }) => {
  const featuredServices = [
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20">
            <Instagram size={28} />
          </div>
        </div>
      ),
      title: "SNS Consulting",
      japaneseTitle: "SNSコンサルティング",
      description: "戦略的なソーシャルメディア運用と成長戦略のご提案。最適なプラットフォーム選定からコンテンツ作成、分析までサポートします。",
      slug: "sns-consulting",
      className: "bg-white border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50",
      featured: true,
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-4 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
            <UserCheck size={28} />
          </div>
        </div>
      ),
      title: "Our Creators",
      japaneseTitle: "所属クリエイター",
      description: "Y3に所属する才能豊かなクリエイターたち。多様なジャンルで活躍する個性豊かなクリエイターをご紹介します。",
      slug: "creators",
      className: "bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-100/50",
      featured: true,
    },
  ];

  const otherServices = [
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3.5 group-hover:scale-105 transition-transform duration-300">
            <Users size={24} />
          </div>
        </div>
      ),
      title: "Influencer Marketing",
      japaneseTitle: "インフルエンサーマーケティング",
      description: "業界の影響力のある人物とのコネクションを活用",
      slug: "influencer-marketing",
      className: "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50",
      featured: false,
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-3.5 group-hover:scale-105 transition-transform duration-300">
            <Monitor size={24} />
          </div>
        </div>
      ),
      title: "Website Development",
      japaneseTitle: "WEBサイト制作・運用",
      description: "魅力的なWebサイトの制作から継続的な運用",
      slug: "web-development",
      className: "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-50",
      featured: false,
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-3.5 group-hover:scale-105 transition-transform duration-300">
            <BarChart3 size={24} />
          </div>
        </div>
      ),
      title: "Web Advertising",
      japaneseTitle: "WEB広告",
      description: "ターゲットを絞った広告キャンペーンの展開",
      slug: "web-advertising",
      className: "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50",
      featured: false,
    },
  ];

  return (
    <AnimatedSection id="services" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-dot-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* アクセントライン */}
      <div className="absolute top-32 right-0 w-48 h-px bg-gradient-to-l from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-32 left-0 w-48 h-px bg-gradient-to-r from-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-blue-600 border border-blue-200 bg-blue-50 mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            サービス
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* 注目サービス */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredServices.map((service, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-3 -right-3 z-20">
                  <span className="inline-flex items-center px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                    FEATURED
                  </span>
                </div>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  japaneseTitle={service.japaneseTitle}
                  description={service.description}
                  className={service.className}
                  slug={service.slug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* その他のサービス */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              japaneseTitle={service.japaneseTitle}
              description={service.description}
              className={service.className}
              slug={service.slug}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm tracking-wide transition-colors">
            View more services
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;

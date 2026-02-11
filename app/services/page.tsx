"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Users, Monitor, BarChart3, UserCheck } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
  const services = [
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
      className: "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50",
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
      description:
        "Y3に所属する才能豊かなクリエイターたち。多様なジャンルで活躍する個性豊かなクリエイターをご紹介します。コラボレーションやキャスティングのご相談も承ります。",
      slug: "creators",
      className: "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-50",
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 group-hover:scale-105 transition-transform duration-300">
            <Users size={28} />
          </div>
        </div>
      ),
      title: "Influencer Marketing",
      japaneseTitle: "インフルエンサーマーケティング",
      description:
        "業界の影響力のある人物とのコネクションを活用したマーケティング。適切なインフルエンサーの選定からキャンペーン設計まで一貫してサポートします。",
      slug: "influencer-marketing",
      className: "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50",
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-4 group-hover:scale-105 transition-transform duration-300">
            <Monitor size={28} />
          </div>
        </div>
      ),
      title: "Website Development & Management",
      japaneseTitle: "WEBサイト制作・運用",
      description: "魅力的なWebサイトの制作から継続的な運用・保守まで。ユーザー体験を重視したデザインと、効果的なサイト運営をトータルサポートします。",
      slug: "web-development",
      className: "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-50",
    },
    {
      icon: (
        <div className="relative">
          <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-4 group-hover:scale-105 transition-transform duration-300">
            <BarChart3 size={28} />
          </div>
        </div>
      ),
      title: "Web Advertising",
      japaneseTitle: "WEB広告",
      description:
        "結果を出すターゲットを絞った広告キャンペーンの展開。Google広告、SNS広告、ディスプレイ広告など、目的に合わせた効果的な広告戦略を構築します。",
      slug: "web-advertising",
      className: "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="pt-20 relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-blue-500/40 to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-cyan-500/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="text-center">
            <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-3">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-white">
              サービス一覧
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-gray-400">クリエイターやアーティスト、アスリートなどの熱狂的な個人を応援するサービス</p>
          </div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      </div>

      {/* サービス一覧セクション */}
      <AnimatedSection className="py-16 relative bg-gray-50">
        <div className="absolute inset-0 bg-dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
        </div>
      </AnimatedSection>

      {/* お問い合わせセクション */}
      <AnimatedSection className="py-16 bg-[#0a1628] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                サービスについてのご相談
              </h2>
              <p className="text-gray-400 mb-8">
                各サービスの詳細や、あなたのプロジェクトに最適なプランについてご相談ください。
                専門のコンサルタントがお客様のニーズに合わせたご提案をいたします。
              </p>

              <a
                href="/contact"
                className="inline-flex items-center px-10 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 tracking-wide"
              >
                お問い合わせ
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}

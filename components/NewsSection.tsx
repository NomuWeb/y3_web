"use client";

import React from "react";
import { Newspaper, Clock, BellRing, ArrowRight } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface NewsSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const NewsSection: React.FC<NewsSectionProps> = ({ AnimatedSection }) => {
  return (
    <AnimatedSection id="news" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-dot-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-blue-600 border border-blue-200 bg-blue-50 mb-3">
            Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            ニュース
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-xl">
            {/* 上部アクセントライン */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-center mb-5">
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 shadow-lg shadow-blue-500/20">
                  <Newspaper size={28} />
                </div>
              </div>

              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">現在、ニュースはありません</h3>
                <div className="flex items-center justify-center text-gray-500 text-sm mb-4 font-mono">
                  <Clock size={14} className="mr-2" />
                  <span>Coming soon</span>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  最新のニュースやイベント情報はこちらに掲載いたします。 新しい情報が追加されるまでしばらくお待ちください。
                </p>
              </div>

              <div className="relative bg-white border border-gray-200 p-5">
                {/* コーナーアクセント */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/40"></div>

                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                  <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-4">
                    <div className="bg-blue-50 p-2 text-blue-500">
                      <BellRing size={18} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      <span className="hidden md:inline">ニュースの更新をお知りになりたい方は</span>
                      <span className="md:hidden">更新情報を受け取る</span>
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      <span className="hidden md:inline">お問い合わせフォームからメールアドレスをご登録いただけます。 更新情報を随時お届けします。</span>
                      <span className="md:hidden">フォームからご登録いただけます。</span>
                    </p>
                    <a href="/contact" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                      お問い合わせフォームへ
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 下部アクセントライン */}
            <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default NewsSection;

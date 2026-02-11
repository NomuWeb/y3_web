"use client";

import React from "react";
import { MessageCircle, Stars } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface PurposeSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const PurposeSection: React.FC<PurposeSectionProps> = ({ AnimatedSection }) => {
  return (
    <AnimatedSection id="purpose" className="py-12 md:py-16 overflow-hidden relative bg-white">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-dot-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* アクセントライン */}
      <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-blue-600 border border-blue-200 bg-blue-50 mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            私たちの目的
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5"></div>
        </div>

        <div className="relative bg-white border border-gray-200 shadow-lg p-6 md:p-10">
          {/* 上部アクセントライン */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

          {/* コーナーアクセント */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>

          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white shadow-lg shadow-blue-500/20">
                <MessageCircle size={28} className="md:w-8 md:h-8" />
              </div>
              <div className="absolute -right-2 -bottom-2">
                <Stars size={16} className="text-cyan-500 md:w-5 md:h-5" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
            想いを届けるための最強の武器
          </h3>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
            <p className="text-sm md:text-lg text-gray-700 text-center leading-relaxed tracking-wide">
              <span className="font-bold text-blue-600">SNSは、ただの情報発信ではない。</span>
              <br className="hidden md:block" />
              <span className="inline md:hidden"> </span>
              誰に、何を、どう伝えるか。そこにこだわることで、共感と反応を生む時代。
            </p>

            <p className="text-sm md:text-lg text-gray-600 text-center leading-relaxed">
              私たちは、発信者の中にある本質的なメッセージを引き出し、言葉とビジュアルに落とし込むことで、 エンドユーザーの心に届く発信を設計します。
            </p>

            <p className="text-sm md:text-lg text-gray-600 text-center leading-relaxed">
              SNSは、気持ちを伝え、世界とつながるためのツール。
              <br className="hidden md:block" />
              だからこそ、ただ投稿するのではなく、
              <span className="text-blue-600 font-bold">「伝えるべきこと」</span>
              を明確にし、可視化することが何より重要だと考えています。
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PurposeSection;

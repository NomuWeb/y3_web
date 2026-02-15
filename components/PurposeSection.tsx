"use client";

import React from "react";
import { MessageCircle, Stars, Target, Sparkles, Heart } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface PurposeSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const PurposeSection: React.FC<PurposeSectionProps> = ({ AnimatedSection }) => {
  return (
    <AnimatedSection id="purpose" className="py-12 md:py-20 overflow-hidden relative bg-white">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-dot-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* アクセントライン */}
      <div className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-blue-600 border border-blue-200 bg-blue-50 mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            私たちの目的
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5"></div>
        </div>

        {/* 2カラムレイアウト: 左=タイトル固定、右=3ステップ */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-start">
          {/* 左カラム: アイコン+メインメッセージ（デスクトップではsticky） */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center justify-center gap-4 lg:block lg:text-left">
              <div className="flex-shrink-0 lg:mb-6 flex justify-center lg:justify-start">
                <div className="relative inline-flex items-center justify-center">
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2.5 lg:p-5 text-white shadow-lg shadow-blue-500/20">
                    <MessageCircle size={20} className="lg:w-10 lg:h-10" />
                  </div>
                  <div className="absolute -right-1.5 -bottom-1.5 lg:-right-2 lg:-bottom-2">
                    <Stars size={12} className="text-cyan-500 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight whitespace-nowrap lg:mb-4">
                  想いを届けるための
                  <br className="hidden lg:block" />
                  最強の武器
                </h3>
                <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
            </div>
          </div>

          {/* 右カラム: 3段階ステップ */}
          <div className="space-y-6">
            {/* ステップ1 */}
            <div className="relative flex gap-4 md:gap-5">
              {/* 番号+縦線 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm font-bold shadow-md">
                  01
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-blue-400 to-cyan-300 mt-2"></div>
              </div>
              {/* コンテンツ */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-5 md:p-6 flex-1 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={18} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-blue-500 uppercase">Philosophy</span>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-600">
                    SNSは、ただの情報発信ではない。</span>
                  <br></br>
                    誰に、何を、どう伝えるか。そこにこだわることで、共感と反応を生む時代。
                </p>
              </div>
            </div>

            {/* ステップ2 */}
            <div className="relative flex gap-4 md:gap-5">
              {/* 番号+縦線 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white text-sm font-bold shadow-md">
                  02
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-cyan-300 to-cyan-400 mt-2"></div>
              </div>
              {/* コンテンツ */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-5 md:p-6 flex-1 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase">Approach</span>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  私たちは、発信者の中にある本質的なメッセージを引き出し、言葉とビジュアルに落とし込むことで、 エンドユーザーの心に届く発信を設計します。
                </p>
              </div>
            </div>

            {/* ステップ3 */}
            <div className="relative flex gap-4 md:gap-5">
              {/* 番号 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white text-sm font-bold shadow-md">
                  03
                </div>
              </div>
              {/* コンテンツ */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-5 md:p-6 flex-1 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={18} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-blue-500 uppercase">Belief</span>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  SNSは、気持ちを伝え、世界とつながるためのツール。
                  だからこそ、ただ投稿するのではなく、<br></br>
                  <span className="text-blue-600 font-bold">「伝えるべきこと」</span>
                  を明確にし、可視化することが何より重要だと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PurposeSection;

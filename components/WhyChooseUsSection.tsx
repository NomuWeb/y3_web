"use client";

import React from "react";
import { CheckCircle, Zap, Users, TrendingUp, BadgeCheck, MessageSquare } from "lucide-react";
import { AnimatedSectionComponent } from "@/components/AnimatedSection";

interface WhyChooseUsSectionProps {
  AnimatedSection: AnimatedSectionComponent;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ AnimatedSection }) => {
  const reasons = [
    {
      icon: <Zap size={22} />,
      title: "迅速なレスポンス",
      description: "お問い合わせから提案まで、スピーディーに対応。急なご依頼にも柔軟に対応します。",
      accent: "blue",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "実績に基づく提案",
      description: "数々の成功事例を基に、効果的なSNS戦略を提案。データ分析に基づくアプローチで成果を最大化します。",
      accent: "cyan",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "伝わるコンテンツ設計",
      description: "単なる投稿ではなく、ターゲットの心に響くメッセージと視覚的要素を組み合わせたコンテンツを制作します。",
      accent: "blue",
    },
    {
      icon: <Users size={22} />,
      title: "専門チームの連携",
      description: "SNSマーケティング、デザイン、コピーライティングの専門家が連携し、総合的な視点からサポートします。",
      accent: "cyan",
    },
    {
      icon: <BadgeCheck size={22} />,
      title: "透明性のある運用",
      description: "数値目標の設定から結果報告まで、すべてのプロセスを明確に共有。進捗状況を常に把握いただけます。",
      accent: "blue",
    },
    {
      icon: <CheckCircle size={22} />,
      title: "長期的な成長支援",
      description: "一時的な効果だけでなく、ブランド価値を高め、長期的に成長していくためのSNS運用をサポートします。",
      accent: "cyan",
    },
  ];

  return (
    <AnimatedSection id="why-choose-us" className="py-20 md:py-28 relative overflow-hidden bg-[#0a1628]">
      {/* ジオメトリック背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* アクセントライン */}
      <div className="absolute top-0 right-0 w-px h-40 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-px h-40 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">選ばれる理由</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-7 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* 上部アクセントライン */}
              <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-500 ${
                reason.accent === "blue"
                  ? "bg-gradient-to-r from-blue-500 to-blue-400"
                  : "bg-gradient-to-r from-cyan-500 to-cyan-400"
              }`}></div>

              {/* ナンバリング */}
              <div className="absolute top-4 right-5 text-5xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex items-center mb-5">
                <div className={`p-2.5 text-white ${
                  reason.accent === "blue"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600"
                    : "bg-gradient-to-br from-cyan-500 to-cyan-600"
                } group-hover:scale-105 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="ml-4 text-lg font-bold text-white">{reason.title}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUsSection;

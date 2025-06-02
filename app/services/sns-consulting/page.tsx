"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, CheckCircle, ArrowRight, FileCheck, Award, Users, Target, Zap, ChartBar } from "lucide-react";
import { Instagram, Globe2 } from "lucide-react";

export default function SNSConsultingPage() {
  const service = {
    title: "SNS Consulting",
    japaneseTitle: "SNSコンサルティング",
    description: "戦略的なソーシャルメディア運用と成長戦略のご提案",
    icon: <Instagram size={32} className="text-pink-500" />,
    iconBg: "bg-pink-100",
    color: "text-pink-600",
    colorLight: "text-pink-500",
    bgGradient: "from-pink-500 to-red-500",
    longDescription:
      "SNSの活用は現代のビジネスにおいて欠かせない要素となっています。当社のSNSコンサルティングでは、各プラットフォームの特性を活かした最適な戦略立案から実行、分析までを一貫してサポートします。フォロワー数の増加だけでなく、エンゲージメント率の向上やコンバージョン率の改善など、ビジネス目標に直結する成果を重視したアプローチを行います。",
    benefits: [
      "各SNSプラットフォームに最適化されたコンテンツ戦略",
      "データ分析に基づいた投稿最適化と改善提案",
      "エンゲージメント向上のためのコミュニティ構築",
      "競合分析とベンチマーキング",
      "広告運用のサポートと効果測定",
    ],
    cases: ["新規ブランド立ち上げ時のSNS戦略構築と実行", "既存アカウントの成長停滞からの脱却と活性化", "複数SNSプラットフォームの統合運用戦略"],
    process: [
      {
        icon: <FileCheck size={24} />,
        title: "ヒアリング・現状分析",
        description: "現在のSNS運用状況や課題、目標などを詳しくヒアリング。既存アカウントの詳細な分析とベンチマーク調査を行います。",
      },
      {
        icon: <Target size={24} />,
        title: "戦略策定",
        description: "ターゲットとKPIを明確にした上で、プラットフォーム選定からコンテンツ計画、運用体制まで含めた包括的な戦略を策定します。",
      },
      {
        icon: <Zap size={24} />,
        title: "実行支援",
        description: "計画に基づいたコンテンツ制作や投稿のサポート、コミュニティ管理、広告運用など、実行フェーズを強力にバックアップします。",
      },
      {
        icon: <ChartBar size={24} />,
        title: "効果測定・改善",
        description: "定期的なレポーティングと分析を通じて、施策の効果を可視化。データに基づく継続的な改善提案を行います。",
      },
    ],
    achievements: [
      {
        title: "フォロワー増加率",
        value: "250",
        unit: "%",
        description: "アパレルブランドのInstagramアカウント（6ヶ月間）",
        icon: <Users size={24} />,
      },
      {
        title: "エンゲージメント率",
        value: "5.8",
        unit: "%",
        description: "飲食チェーンのInstagramアカウント（業界平均の3倍）",
        icon: <Award size={24} />,
      },
      {
        title: "投稿リーチ",
        value: "12",
        unit: "倍",
        description: "美容クリニックのTikTokアカウント（3ヶ月間）",
        icon: <Globe2 size={24} />,
      },
      {
        title: "コンバージョン増加",
        value: "180",
        unit: "%",
        description: "ECサイトへの誘導からの購入率（12ヶ月間）",
        icon: <ChartBar size={24} />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <Header variant="secondary" />

      {/* ヒーローセクション - シンプルな背景画像 */}
      <div className="relative text-white">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/sns-consulting/sns_consulting_kv.jpg')`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 relative z-10">
          <div className="flex flex-col items-center">
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all services
            </Link>

            <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mb-6 shadow-lg`}>{service.icon}</div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-center text-white">{service.title}</h1>

            <h2 className="text-2xl text-white/90 mb-6 text-center">{service.japaneseTitle}</h2>

            <p className="max-w-2xl mx-auto text-lg text-white/90 text-center">{service.description}</p>
          </div>
        </div>
      </div>

      {/* サービス詳細セクション */}
      <AnimatedSection className="py-16 relative">
        {/* 背景装飾 - SNS専用デザイン */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-50 opacity-40"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-50 opacity-30"></div>
          <div className="absolute top-60 right-1/3 w-20 h-20 rounded-full bg-red-50 opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* サービス概要 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>サービス概要</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.longDescription}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
            </div>

            {/* 契約の流れ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>契約の流れ</span>
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-5 transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="relative p-2">
                          <div className="absolute inset-0 bg-pink-100 rounded-lg rotate-6"></div>
                          <div className="relative bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg">{step.icon}</div>
                        </div>
                      </div>
                      <div className="ml-5">
                        <div className="flex items-center">
                          <span className="bg-pink-100 text-pink-800 text-xs font-medium rounded-full w-6 h-6 flex items-center justify-center mr-2">
                            {index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* お問い合わせセクション */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className={`h-2 bg-gradient-to-r ${service.bgGradient}`}></div>
              <div className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>サービスについてのご相談</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    本サービスの詳細や、あなたのプロジェクトに最適なプランについてご相談ください。
                    専門のコンサルタントがお客様のニーズに合わせたご提案をいたします。
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${service.bgGradient} text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    >
                      お問い合わせ
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-all duration-300"
                    >
                      他のサービスを見る
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* フッター */}
      <Footer />
    </div>
  );
}

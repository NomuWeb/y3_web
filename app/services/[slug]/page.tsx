"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Instagram, Users, Globe2, BarChart3, Calendar, Megaphone } from "lucide-react";

// サービスデータの型定義
interface ServiceData {
  title: string;
  japaneseTitle: string;
  description: string;
  icon: React.JSX.Element;
  iconBg: string;
  color: string;
  colorLight: string;
  bgGradient: string;
  longDescription: string;
  benefits: string[];
  cases: string[];
}

// インデックスシグネチャを追加したサービスデータの型
interface ServicesDataType {
  [key: string]: ServiceData;
}

// サービスデータ
const servicesData: ServicesDataType = {
  "sns-consulting": {
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
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    japaneseTitle: "インフルエンサーマーケティング",
    description: "業界の影響力のある人物とのコネクションを活用したマーケティング",
    icon: <Users size={32} className="text-blue-500" />,
    iconBg: "bg-blue-100",
    color: "text-blue-600",
    colorLight: "text-blue-500",
    bgGradient: "from-blue-500 to-indigo-500",
    longDescription:
      "インフルエンサーマーケティングは、ブランドと消費者の間に信頼関係を構築する効果的な手法です。当社では、クライアントのブランドやプロダクトに最適なインフルエンサーの選定から、企画立案、実行、効果測定までをトータルでサポートします。単なる露出数やフォロワー数だけでなく、ターゲットオーディエンスとの親和性や、真のエンゲージメントを重視したインフルエンサー選定を行います。",
    benefits: [
      "ブランドに最適なインフルエンサーの発掘と選定",
      "効果的なキャンペーン企画と実施プラン策定",
      "インフルエンサーとの交渉と契約サポート",
      "キャンペーン実施中のモニタリングと最適化",
      "詳細な効果分析と次回施策への提案",
    ],
    cases: [
      "新製品発売時のバズ創出キャンペーン",
      "ブランド認知拡大のための長期的なアンバサダープログラム",
      "特定ターゲット層へのリーチを目的としたニッチインフルエンサー起用",
    ],
  },
  "web-marketing": {
    title: "Web Marketing",
    japaneseTitle: "WEBマーケティング",
    description: "包括的なデジタルマーケティングソリューションの提供",
    icon: <Globe2 size={32} className="text-green-500" />,
    iconBg: "bg-green-100",
    color: "text-green-600",
    colorLight: "text-green-500",
    bgGradient: "from-green-500 to-teal-500",
    longDescription:
      "ウェブマーケティングは、オンライン上でのビジネス成長に不可欠です。当社のウェブマーケティングサービスでは、SEO対策、コンテンツマーケティング、メールマーケティング、ウェブ解析など、デジタルマーケティングの全領域をカバーし、クライアントのビジネス目標達成をサポートします。データドリブンなアプローチで、効果的なマーケティング戦略を構築し、継続的な改善を行います。",
    benefits: [
      "包括的なウェブマーケティング戦略の策定",
      "SEOとSEM対策によるオーガニックトラフィックの増加",
      "コンテンツマーケティングによるブランド価値向上",
      "ユーザー行動分析に基づいたウェブサイト最適化",
      "コンバージョン率最適化（CRO）と顧客獲得コスト削減",
    ],
    cases: [
      "ECサイトの売上向上のための総合的なウェブマーケティング",
      "BtoB企業の見込み顧客獲得のためのコンテンツマーケティング",
      "サービス認知拡大とリード獲得のためのインバウンドマーケティング",
    ],
  },
  "web-advertising": {
    title: "Web Advertising",
    japaneseTitle: "WEB広告",
    description: "結果を出すターゲットを絞った広告キャンペーンの展開",
    icon: <BarChart3 size={32} className="text-purple-500" />,
    iconBg: "bg-purple-100",
    color: "text-purple-600",
    colorLight: "text-purple-500",
    bgGradient: "from-purple-500 to-violet-500",
    longDescription:
      "ウェブ広告は、適切な戦略と運用により、短期間で大きな成果を生み出すことができます。当社のウェブ広告サービスでは、Google広告、SNS広告、ディスプレイ広告など、多様な広告プラットフォームを活用し、ターゲットユーザーに効率的にリーチする広告キャンペーンを構築します。広告予算の最適化と効果最大化を追求し、ROIを重視した運用を行います。",
    benefits: [
      "広告目標に合わせた最適な広告プラットフォームの選定",
      "ターゲットオーディエンスの詳細分析と広告設定",
      "クリエイティブ制作と広告文作成のサポート",
      "広告パフォーマンスのリアルタイムモニタリングと最適化",
      "詳細なレポーティングと継続的な改善提案",
    ],
    cases: [
      "新規顧客獲得のためのリスティング広告とリターゲティング広告の組み合わせ",
      "認知拡大を目的としたSNS広告キャンペーン",
      "季節商品のタイムリーな販売促進のための期間限定広告",
    ],
  },
  "event-casting": {
    title: "Event Casting",
    japaneseTitle: "イベントキャスティング",
    description: "イベントのための専門的な人材確保とコーディネート",
    icon: <Calendar size={32} className="text-amber-500" />,
    iconBg: "bg-amber-100",
    color: "text-amber-600",
    colorLight: "text-amber-500",
    bgGradient: "from-amber-500 to-orange-500",
    longDescription:
      "イベントの成功には、適切な人材の配置が不可欠です。当社のイベントキャスティングサービスでは、企業イベント、プロモーション、セミナー、展示会など、様々なイベントに最適な人材を提供します。司会者、モデル、インフルエンサー、専門家など、イベントの目的や雰囲気に合った人材を厳選し、イベントの価値を最大化します。",
    benefits: [
      "イベントコンセプトに合わせた最適な人材の選定",
      "人材のブリーフィングとトレーニングのサポート",
      "イベント当日の人材管理とコーディネート",
      "複数人材の効果的なチームビルディング",
      "イベント後のフィードバックと改善提案",
    ],
    cases: [
      "大規模展示会での複数ブース対応スタッフの配置",
      "新製品発表会での専門知識を持つプレゼンターの起用",
      "ファンイベントでの人気インフルエンサーとの協業",
    ],
  },
  "digital-strategy": {
    title: "Digital Strategy",
    japaneseTitle: "デジタル戦略",
    description: "カスタマイズされたデジタルトランスフォーメーションの提案",
    icon: <Megaphone size={32} className="text-cyan-500" />,
    iconBg: "bg-cyan-100",
    color: "text-cyan-600",
    colorLight: "text-cyan-500",
    bgGradient: "from-cyan-500 to-blue-500",
    longDescription:
      "デジタル化が進む現代のビジネス環境において、適切なデジタル戦略の策定は企業の競争力維持に不可欠です。当社のデジタル戦略サービスでは、クライアントのビジネスの現状分析から始め、中長期的なデジタルトランスフォーメーションのロードマップを策定します。テクノロジーの導入だけでなく、組織文化や業務プロセスの変革まで含めた包括的なアプローチで、デジタル時代における持続的な成長をサポートします。",
    benefits: [
      "ビジネスモデルのデジタル化と新たな収益源の創出",
      "データドリブン経営のための基盤構築",
      "顧客体験の向上とカスタマージャーニーの最適化",
      "デジタルツールの選定と導入支援",
      "組織のデジタルケイパビリティ向上のための人材育成",
    ],
    cases: [
      "伝統的な業界企業のデジタルトランスフォーメーション",
      "スタートアップの急成長を支えるデジタル基盤の構築",
      "既存事業のデジタルシフトによる新たな顧客層の開拓",
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // サービスデータが存在しない場合は404
  if (!slug || !servicesData[slug]) {
    notFound();
  }

  const service = servicesData[slug];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="pt-20 relative overflow-hidden bg-gradient-to-b from-indigo-900 to-blue-900 text-white">
        {/* 背景装飾 - 丸い形 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-80 animate-pulse" style={{ animationDuration: "8s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500 opacity-70 animate-pulse" style={{ animationDuration: "12s" }}></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-500 opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="flex flex-col items-center">
            <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all services
            </Link>

            <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mb-6`}>{service.icon}</div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-indigo-200">{service.title}</span>
            </h1>

            <h2 className="text-2xl text-blue-100 mb-6 text-center">{service.japaneseTitle}</h2>

            <p className="max-w-2xl mx-auto text-lg text-blue-100 text-center">{service.description}</p>
          </div>
        </div>

        {/* 波形装飾（下部） */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* サービス詳細セクション */}
      <AnimatedSection className="py-16 relative">
        {/* 背景装飾 - 丸いパターン */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-50 opacity-40"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-50 opacity-30"></div>
          <div className="absolute top-60 right-1/3 w-20 h-20 rounded-full bg-cyan-50 opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>サービス概要</span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.longDescription}</p>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>サービスの特徴</span>
              </h2>

              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`mt-1 mr-3 flex-shrink-0 ${service.colorLight}`} size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.bgGradient}`}>活用事例</span>
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <ul className="space-y-4">
                  {service.cases.map((caseItem, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-6 h-6 ${service.iconBg} flex items-center justify-center rounded-full mr-3 mt-0.5`}>
                        <span className={`font-medium text-sm ${service.color}`}>{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{caseItem}</span>
                    </li>
                  ))}
                </ul>
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
                    <a
                      href="/contact"
                      className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${service.bgGradient} text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    >
                      お問い合わせ
                      <ArrowRight size={18} className="ml-2" />
                    </a>

                    <Link
                      href="/services"
                      className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-all duration-300"
                    >
                      <ArrowLeft size={18} className="mr-2" />
                      他のサービスを見る
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

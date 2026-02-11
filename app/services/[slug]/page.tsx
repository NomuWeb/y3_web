"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Users as UsersIcon, Monitor, BarChart3 } from "lucide-react";

interface ServiceData {
  title: string;
  japaneseTitle: string;
  description: string;
  icon: React.JSX.Element;
  longDescription: string;
  benefits: string[];
  cases: string[];
}

const servicesData: { [key: string]: ServiceData } = {
  "influencer-marketing": {
    title: "Influencer Marketing",
    japaneseTitle: "インフルエンサーマーケティング",
    description: "業界の影響力のある人物とのコネクションを活用したマーケティング",
    icon: <UsersIcon size={28} className="text-blue-400" />,
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
  "web-development": {
    title: "Website Development & Management",
    japaneseTitle: "WEBサイト制作・運用",
    description: "魅力的なWebサイトの制作から継続的な運用・保守まで",
    icon: <Monitor size={28} className="text-cyan-400" />,
    longDescription:
      "デジタル時代において、Webサイトはビジネスの顔となる重要な存在です。当社のWebサイト制作・運用サービスでは、ユーザー体験を重視したデザインと機能性を兼ね備えたサイトの制作から、継続的な運用・保守、コンテンツ更新まで包括的にサポートします。レスポンシブデザインによるマルチデバイス対応、SEO最適化、高速化、セキュリティ対策など、現代のWebサイトに求められる要素を満たしたサイトを提供します。",
    benefits: [
      "ユーザー体験を重視したレスポンシブWebサイトの制作",
      "SEO対策とパフォーマンス最適化による検索エンジン対応",
      "継続的なコンテンツ更新と機能改善のサポート",
      "セキュリティ対策と定期的なバックアップによる安全な運用",
      "アクセス解析とユーザー行動分析に基づいた改善提案",
    ],
    cases: [
      "個人ブランディングのためのポートフォリオサイト制作",
      "ECサイトの構築と継続的な運用・改善",
      "企業サイトのリニューアルとコンテンツマーケティング支援",
    ],
  },
  "web-advertising": {
    title: "Web Advertising",
    japaneseTitle: "WEB広告",
    description: "結果を出すターゲットを絞った広告キャンペーンの展開",
    icon: <BarChart3 size={28} className="text-blue-400" />,
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
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  if (slug === "sns-consulting") {
    notFound();
  }

  if (!slug || !servicesData[slug]) {
    notFound();
  }

  const service = servicesData[slug];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="pt-20 relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
          <div className="flex flex-col items-center">
            <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-cyan-400 mb-4 transition-colors text-sm font-mono">
              <ArrowLeft size={14} className="mr-2" />
              Back to all services
            </Link>

            <div className="w-12 h-12 bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4">
              {service.icon}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center tracking-tight text-white">
              {service.japaneseTitle}
            </h1>

            <p className="max-w-2xl mx-auto text-sm text-gray-400 text-center mt-2">{service.description}</p>
          </div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      </div>

      {/* サービス詳細セクション */}
      <AnimatedSection className="py-16 relative bg-gray-50">
        <div className="absolute inset-0 bg-dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* サービス概要 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">サービス概要</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.longDescription}</p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>

            {/* サービスの特徴 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">サービスの特徴</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mt-1 mr-3 flex-shrink-0 text-blue-500" size={18} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 活用事例 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">活用事例</h2>
              <div className="bg-white border border-gray-200 p-6">
                <ul className="space-y-4">
                  {service.cases.map((caseItem, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-50 flex items-center justify-center mr-3 mt-0.5">
                        <span className="font-mono text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{caseItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* お問い合わせセクション */}
            <div className="relative bg-white border border-gray-200 overflow-hidden">
              <div className="h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">サービスについてのご相談</h2>
                  <p className="text-gray-600 mb-8">
                    本サービスの詳細や、あなたのプロジェクトに最適なプランについてご相談ください。
                    専門のコンサルタントがお客様のニーズに合わせたご提案をいたします。
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 tracking-wide"
                    >
                      お問い合わせ
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:border-blue-300 font-medium transition-all duration-300 tracking-wide"
                    >
                      他のサービスを見る
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}

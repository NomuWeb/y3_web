"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";

// クリエイター情報の型定義
interface Creator {
  id: string;
  name: string;
  nameJa: string;
  category: string;
  image: string;
  slug: string;
  instagram?: string;
  description?: string;
  bio?: string;
  achievements?: string[];
  imagePosition?: string;
}

// クリエイター情報（実際のデータ）
const creatorsData: Creator[] = [
  {
    id: "1",
    name: "Lee Seung Gi",
    nameJa: "イ・スンギ",
    category: "韓国",
    image: "/images/creators/seunggi.jpg",
    slug: "seunggi",
    instagram: "seunggi.lee888",
    description: "多才なエンターテイナー",
    bio: "TikTok 【スンギの美味スンギ飯】を初め、幅広い分野で活躍しています。",
    achievements: [
      "調理師免許日本最年少取得",
      "ラブトランジット2出演",
    ],
    imagePosition: "object-[center_30%]",
  },
  {
    id: "2",
    name: "Momosan",
    nameJa: "双松桃子",
    category: "料理",
    image: "/images/creators/momosan.jpg",
    slug: "momosan",
    instagram: "momosan0627",
    description: "胃袋沼らせモテレシピを発信する料理クリエイター",
    bio: "料理を通じて人々の心と胃袋を掴むレシピを日々発信しています。簡単で美味しい、そして見た目も華やかな料理が得意です。",
    achievements: [
      "Instagram フォロワー数20万人以上",
      "料理研究家",
      "ラブトランジット出演",
    ],
    imagePosition: "object-[center_20%]",
  },
];

export default function CreatorDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // スラグに基づいてクリエイター情報を取得
  const creator = creatorsData.find((c) => c.slug === slug);

  // クリエイターが見つからない場合
  if (!creator) {
    return (
      <div className="min-h-screen bg-white text-gray-800">
        <Header variant="secondary" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">クリエイターが見つかりません</h1>
            <Link href="/services/creators" className="text-indigo-600 hover:text-indigo-800">
              クリエイター一覧に戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="pt-20 relative overflow-hidden bg-gradient-to-b from-indigo-900 to-blue-900 text-white">
        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-pulse" style={{ animationDuration: "8s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500 opacity-10 animate-pulse" style={{ animationDuration: "12s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Link
            href="/services/creators"
            className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            クリエイター一覧に戻る
          </Link>
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

      {/* クリエイター詳細セクション */}
      <AnimatedSection className="py-16 relative">
        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-50 opacity-80"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-80"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-50 opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 左側: 画像 */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* カテゴリーバッジ */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-indigo-800 text-sm font-semibold rounded-full shadow-lg">
                  {creator.category}
                </span>
              </div>
            </div>

            {/* 右側: 情報 */}
            <div className="lg:pt-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {creator.nameJa}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{creator.name}</p>

              <div className="mb-8">
                <p className="text-lg text-indigo-600 font-medium mb-4">{creator.description}</p>
                <p className="text-gray-700 leading-relaxed">{creator.bio}</p>
              </div>

              {/* 実績 */}
              {creator.achievements && creator.achievements.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">主な実績</h2>
                  <ul className="space-y-3">
                    {creator.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SNSリンク */}
              {creator.instagram && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SNS</h2>
                  <a
                    href={`https://www.instagram.com/${creator.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Instagram size={20} className="mr-2" />
                    @{creator.instagram}
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              )}

              {/* お問い合わせボタン */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  コラボレーションのお問い合わせ
                </h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  お問い合わせ
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 他のクリエイターセクション */}
      <AnimatedSection className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                他のクリエイター
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creatorsData
              .filter((c) => c.slug !== slug)
              .map((otherCreator) => (
                <Link
                  key={otherCreator.id}
                  href={`/services/creators/${otherCreator.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={otherCreator.image}
                      alt={otherCreator.name}
                      fill
                      className={`object-cover ${otherCreator.imagePosition || 'object-[center_20%]'} group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                        {otherCreator.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{otherCreator.nameJa}</h3>
                    <p className="text-sm text-gray-600">{otherCreator.name}</p>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/creators"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              すべてのクリエイターを見る
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* フッター */}
      <Footer />
    </div>
  );
}

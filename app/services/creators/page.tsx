"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Creator {
  id: string;
  name: string;
  nameJa: string;
  category: string | string[];
  image: string;
  slug: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  twitter?: string;
  description?: string;
  imagePosition?: string;
}

export default function CreatorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const creators: Creator[] = [
    {
      id: "1",
      name: "Lee Seung Gi",
      nameJa: "イ・スンギ",
      category: "韓国",
      image: "/images/creators/seunggi.jpg",
      slug: "seunggi",
      instagram: "seunggi.lee888",
      tiktok: "umasungi_cooking",
      description: "多才なエンターテイナー",
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
      tiktok: "momosan0627",
      description: "胃袋沼らせモテレシピを発信する料理クリエイター",
      imagePosition: "object-[center_20%]",
    },
    {
      id: "3",
      name: "Fukawa",
      nameJa: "ふかわ",
      category: ["エンタメ", "韓国", "美容"],
      image: "/images/creators/fukawa.jpg",
      slug: "fukawa",
      youtube: "https://www.youtube.com/@__fukawa",
      description: "エンタメ・韓国・美容の3ジャンルで活躍するYouTuber",
      imagePosition: "object-[center_55%]",
    },
    {
      id: "4",
      name: "Ryota",
      nameJa: "りょーた",
      category: "エンタメ",
      image: "/images/creators/ryota.jpg",
      slug: "ryota",
      instagram: "ryota_926",
      description: "Instagramを中心に活動するインフルエンサー",
      imagePosition: "object-[center_10%]",
    },
    {
      id: "5",
      name: "Unpai",
      nameJa: "うんぱい",
      category: "エンタメ",
      image: "/images/creators/unpai.jpeg",
      slug: "unpai",
      instagram: "unpai_3",
      tiktok: "unpai3",
      description: "TikTokフォロワー400万人超えの人気クリエイター",
      imagePosition: "object-[center_20%]",
    },
    {
      id: "6",
      name: "Sakito",
      nameJa: "咲人",
      category: "エンタメ",
      image: "/images/creators/sakito.jpg",
      slug: "sakito",
      instagram: "sakito1207x_x",
      tiktok: "sakito1207",
      twitter: "sakito_1207",
      description: "BreakingDown出場の元No.1ホスト × 格闘家 × 実業家",
      imagePosition: "object-[center_20%]",
    },
  ];

  const categories = ["ALL", "料理", "エンタメ", "アウトドア", "韓国", "美容", "ファッション"];

  const filteredCreators =
    selectedCategory === "ALL"
      ? creators
      : creators.filter((creator) => (Array.isArray(creator.category) ? creator.category.includes(selectedCategory) : creator.category === selectedCategory));

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="relative text-white mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/sns-consulting/sns_consulting_kv.jpg')`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
          <div className="flex flex-col items-center">
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors text-sm font-mono">
              <ArrowLeft size={14} className="mr-2" />
              Back to all services
            </Link>

            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
              <Users size={24} className="text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white tracking-tight">所属クリエイター</h1>

            <p className="max-w-2xl mx-auto text-sm text-white/80 text-center mt-1">Y3に所属する才能豊かなクリエイターたちをご紹介します</p>
          </div>
        </div>
      </div>

      {/* クリエイター一覧セクション */}
      <div className="py-8 sm:py-12 lg:py-16 relative bg-gray-50">
        <div className="absolute inset-0 bg-dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 sm:px-6 sm:py-2 font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* クリエイターグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreators.map((creator) => (
              <div
                key={creator.id}
                className="group bg-white overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* サムネイル画像 */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className={`object-cover ${creator.imagePosition || "object-[center_20%]"} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>

                {/* クリエイター情報 */}
                <div className="p-6 pt-4">
                  <div className="mb-3">
                    {Array.isArray(creator.category) ? (
                      <div className="flex flex-wrap gap-1">
                        {creator.category.map((cat, index) => (
                          <span key={index} className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-mono font-semibold">
                            {cat}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-mono font-semibold">{creator.category}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{creator.nameJa}</h3>
                  <p className="text-sm text-gray-500 mb-4 font-mono">{creator.name}</p>

                  <Link
                    href={`/services/creators/${creator.slug}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 tracking-wide text-sm"
                  >
                    VIEW MORE
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                {/* ホバー時のアクセントライン */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {filteredCreators.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">このカテゴリーにはまだクリエイターが登録されていません</p>
            </div>
          )}
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="py-16 bg-[#0a1628] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                クリエイターとのコラボレーション
              </h2>
              <p className="text-gray-400 mb-8">
                所属クリエイターとのコラボレーションやキャスティングに関するご相談を承っております。 お気軽にお問い合わせください。
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
      </div>

      <Footer />
    </div>
  );
}

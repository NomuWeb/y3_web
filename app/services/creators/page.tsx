"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// クリエイター情報の型定義
interface Creator {
  id: string;
  name: string;
  nameJa: string;
  category: string | string[];
  image: string;
  slug: string;
  instagram?: string;
  description?: string;
  imagePosition?: string;
}

export default function CreatorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // クリエイター情報
  const creators: Creator[] = [
    {
      id: "1",
      name: "Lee Seung Gi",
      nameJa: "イ・スンギ",
      category: "韓国",
      image: "/images/creators/seunggi.jpg",
      slug: "seunggi",
      instagram: "seunggi.lee888",
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
  ];

  // カテゴリー一覧
  const categories = ["ALL", "料理", "エンタメ", "アウトドア", "韓国", "美容", "ファッション"];

  // フィルタリングされたクリエイター
  const filteredCreators =
    selectedCategory === "ALL"
      ? creators
      : creators.filter((creator) => (Array.isArray(creator.category) ? creator.category.includes(selectedCategory) : creator.category === selectedCategory));

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <Header variant="secondary" />

      {/* ヒーローセクション - 背景画像 */}
      <div className="relative text-white mt-20">
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services/sns-consulting/sns_consulting_kv.jpg')`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 relative z-10">
          <div className="flex flex-col items-center">
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all services
            </Link>

            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Users size={32} className="text-indigo-600" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-center text-white">Our Creators</h1>

            <h2 className="text-2xl text-white/90 mb-6 text-center">所属クリエイター</h2>

            <p className="max-w-2xl mx-auto text-lg text-white/90 text-center">Y3に所属する才能豊かなクリエイターたちをご紹介します</p>
          </div>
        </div>
      </div>

      {/* クリエイター一覧セクション */}
      <div className="py-8 sm:py-12 lg:py-16 relative">
        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-50 opacity-80"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-80"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-50 opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* セクションヘッダー */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 mb-3">Creators</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">所属クリエイター</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">多様なジャンルで活躍する、個性豊かなクリエイターたちをご紹介します</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* クリエイターグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreators.map((creator) => (
              <div
                key={creator.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* サムネイル画像 */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className={`object-cover ${creator.imagePosition || "object-[center_20%]"} group-hover:scale-110 transition-transform duration-500`}
                  />
                </div>

                {/* クリエイター情報 */}
                <div className="p-6 pt-2">
                  <div className="mb-3">
                    {Array.isArray(creator.category) ? (
                      <div className="flex flex-wrap gap-1">
                        {creator.category.map((cat, index) => (
                          <span key={index} className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">{creator.category}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{creator.nameJa}</h3>
                  <p className="text-sm text-gray-600 mb-4">{creator.name}</p>

                  {/* VIEW MORE リンク */}
                  <Link
                    href={`/services/creators/${creator.slug}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-full font-medium transition-all duration-300 transform group-hover:shadow-lg"
                  >
                    VIEW MORE
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                {/* ホバー時のボーダーアニメーション */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* クリエイターが見つからない場合 */}
          {filteredCreators.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">このカテゴリーにはまだクリエイターが登録されていません</p>
            </div>
          )}
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  クリエイターとのコラボレーション
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                所属クリエイターとのコラボレーションやキャスティングに関するご相談を承っております。 お気軽にお問い合わせください。
              </p>

              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                お問い合わせ
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* フッター */}
      <Footer />
    </div>
  );
}

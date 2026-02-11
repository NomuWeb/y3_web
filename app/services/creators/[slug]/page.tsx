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
  category: string | string[];
  image: string;
  slug: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
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
    tiktok: "umasungi_cooking",
    description: "多才なエンターテイナー",
    bio: "TikTok 【スンギの美味スンギ飯】を初め、幅広い分野で活躍しています。",
    achievements: ["調理師免許日本最年少取得", "ラブトランジット2出演"],
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
    bio: "料理を通じて人々の心と胃袋を掴むレシピを日々発信しています。簡単で美味しい、そして見た目も華やかな料理が得意です。",
    achievements: ["Instagram フォロワー数20万人以上", "料理研究家", "ラブトランジット出演"],
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
    description: "YouTuber登録者数32万人を抱えるYouTuber",
    bio: "エンタメ、韓国、美容の3つのジャンルを中心に、累計再生回数8000万回以上を記録。幅広いコンテンツで多くのファンを魅了しています。",
    achievements: ["YouTube登録者数32万人", "累計再生回数8000万回以上", "エンタメ・韓国・美容の3ジャンルで活躍"],
    imagePosition: "object-[center_50%]",
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
    bio: "フォロワー数約15万を誇り、日常のライフスタイル・トレンドを切り取った投稿で幅広い共感を獲得。SNSではリアルな日常・イベント参加・ビジュアル表現を軸に、ブランドとのタイアップ投稿や体験発信など多様なコンテンツ制作を展開。",
    achievements: ["Instagram フォロワー数約15万人", "ライフスタイル・トレンド投稿で幅広い共感獲得", "ブランドタイアップ・体験発信コンテンツ制作"],
    imagePosition: "object-[center_10%]",
  },
  {
    id: "5",
    name: "Unpai",
    nameJa: "うんぱい",
    category: "エンタメ",
    image: "/images/creators/unpai_coming_soon.svg",
    slug: "unpai",
    instagram: "unpai_3",
    tiktok: "unpai3",
    description: "Coming Soon",
    bio: "プロフィール準備中です。",
    achievements: [],
    imagePosition: "object-center",
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
            <Link href="/services/creators" className="text-blue-600 hover:text-blue-800 font-mono">
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

      {/* ナビゲーション */}
      <div className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/services/creators" className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm font-mono">
            <ArrowLeft size={14} className="mr-2" />
            Back to creators
          </Link>
        </div>
      </div>

      {/* クリエイター詳細セクション */}
      <AnimatedSection className="py-8 sm:py-12 lg:py-16 relative bg-gray-50">
        <div className="absolute inset-0 bg-dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* 左側: 画像 */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border border-gray-200">
                <Image src={creator.image} alt={creator.name} fill className={`object-cover ${creator.imagePosition || "object-center"}`} priority />
              </div>
              {/* カテゴリーバッジ */}
              <div className="absolute top-4 left-4">
                {Array.isArray(creator.category) ? (
                  <div className="flex flex-wrap gap-2">
                    {creator.category.map((cat, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-mono font-semibold shadow-lg"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-mono font-semibold shadow-lg">
                    {creator.category}
                  </span>
                )}
              </div>
            </div>

            {/* 右側: 情報 */}
            <div className="lg:pt-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">{creator.nameJa}</h1>
              <p className="text-lg text-gray-500 mb-6 font-mono">{creator.name}</p>

              <div className="mb-8">
                <p className="text-lg text-blue-600 font-medium mb-4">{creator.description}</p>
                <p className="text-gray-700 leading-relaxed">{creator.bio}</p>
              </div>

              {/* 実績 */}
              {creator.achievements && creator.achievements.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">主な実績</h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
                  <ul className="space-y-3">
                    {creator.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SNSリンク */}
              {(creator.instagram || creator.youtube || creator.tiktok) && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">SNS</h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
                  <div className="flex flex-wrap gap-3">
                    {creator.instagram && (
                      <a
                        href={`https://www.instagram.com/${creator.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 bg-[#0a1628] text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                      >
                        <Instagram size={18} className="mr-2" />@{creator.instagram}
                        <ExternalLink size={14} className="ml-2 opacity-60" />
                      </a>
                    )}
                    {creator.youtube && (
                      <a
                        href={creator.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                      >
                        <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                        <ExternalLink size={14} className="ml-2 opacity-60" />
                      </a>
                    )}
                    {creator.tiktok && (
                      <a
                        href={`https://www.tiktok.com/@${creator.tiktok}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 bg-[#0a1628] text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                      >
                        <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                        @{creator.tiktok}
                        <ExternalLink size={14} className="ml-2 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* お問い合わせボタン */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">コラボレーションのお問い合わせ</h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 tracking-wide"
                >
                  お問い合わせ
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 他のクリエイターセクション */}
      <AnimatedSection className="py-16 bg-[#0a1628] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-4">
              Other Creators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">他のクリエイター</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorsData
              .filter((c) => c.slug !== slug)
              .map((otherCreator) => (
                <Link
                  key={otherCreator.id}
                  href={`/services/creators/${otherCreator.slug}`}
                  className="group bg-white/[0.03] backdrop-blur-sm overflow-hidden border border-white/10 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={otherCreator.image}
                      alt={otherCreator.name}
                      fill
                      className={`object-cover ${otherCreator.imagePosition || "object-[center_20%]"} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      {Array.isArray(otherCreator.category) ? (
                        <div className="flex flex-wrap gap-1">
                          {otherCreator.category.map((cat, index) => (
                            <span key={index} className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold">
                              {cat}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold">{otherCreator.category}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{otherCreator.nameJa}</h3>
                    <p className="text-sm text-gray-400 font-mono">{otherCreator.name}</p>
                  </div>

                  {/* ホバー時のアクセントライン */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"></div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/creators"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 font-medium transition-all duration-300 tracking-wide text-sm font-mono"
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

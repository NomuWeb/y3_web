"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Instagram, Facebook, Twitter, Globe2, BarChart3, Users, Megaphone, Calendar, MapPin, Users2, Mail, ChevronUp } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "./Footer";

// Intersection Observer Hook for Scroll Animations
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting] as const;
};

// Animated Section Component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", id, ...props }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ease-out ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-[#3E3A39]">
      {/* Navigation */}
      <Header variant="main" />

      {/* Hero Section with Taller Waves */}
      <div className="relative h-screen bg-[#003693] overflow-hidden flex items-center justify-center">
        {/* 波の装飾 - 背景 */}
        <div className="absolute inset-0 z-0">
          {/* 最下層の波 - ゆっくり */}
          <div className="absolute bottom-0 left-0 w-[200%] h-64 opacity-30" style={{ animation: "wave 25s linear infinite" }}>
            <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
              <path
                fill="#002470"
                d="M0,100 C320,160 480,60 720,80 C960,100 1200,180 1440,120 C1680,60 1920,100 2160,140 C2400,180 2560,120 2880,80 L2880,320 L0,320 Z"
              ></path>
            </svg>
          </div>

          {/* 中間層の波 - 中速 左から右へ */}
          <div className="absolute bottom-0 left-0 w-[200%] h-80 opacity-40" style={{ animation: "wave 20s linear infinite" }}>
            <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
              <path
                fill="#0A449E"
                d="M0,140 C240,180 480,120 720,90 C960,60 1200,110 1440,140 C1680,170 1920,120 2160,100 C2400,80 2640,150 2880,120 L2880,320 L0,320 Z"
              ></path>
            </svg>
          </div>

          {/* 上層の波 - 中速 右から左へ */}
          <div className="absolute bottom-0 left-[-100%] w-[200%] h-72 opacity-50" style={{ animation: "wave-reverse 18s linear infinite" }}>
            <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
              <path
                fill="#1C5EC7"
                d="M0,110 C240,130 480,170 720,140 C960,110 1200,130 1440,160 C1680,190 1920,150 2160,130 C2400,110 2640,150 2880,140 L2880,320 L0,320 Z"
              ></path>
            </svg>
          </div>

          {/* 一番上の細かい波 - 速い */}
          <div className="absolute bottom-0 left-0 w-[200%] h-40 opacity-30" style={{ animation: "wave 12s linear infinite" }}>
            <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
              <path
                fill="#7A9DC7"
                d="M0,180 C180,165 360,190 540,180 C720,170 900,150 1080,160 C1260,170 1440,190 1620,180 C1800,170 1980,160 2160,170 C2340,180 2520,160 2700,170 C2800,175 2880,170 2880,170 L2880,320 L0,320 Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* 静かな波の重なり効果 - 半透明のレイヤー */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#003693] to-transparent opacity-50"></div>

        {/* ロゴと情報 - 中央に表示 - SVGロゴを削除 */}
        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#7A9DC7]">Y3 LLC</h1>
          <p className="text-2xl md:text-3xl mb-8 text-[#7A9DC7]">合同会社ワイスリー</p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white px-4 relative">
            Shaping the Future of Digital Marketing
            <br />
            デジタルマーケティングの未来を創造する
          </p>
        </div>

        {/* CSS Animation for waves and floating elements */}
        <style jsx>{`
          @keyframes wave {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes wave-reverse {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(50%);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </div>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-20 bg-gradient-to-b from-[#003693] via-[#0A449E] to-[#1C5EC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* 背景装飾 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/30 rotate-45 hidden md:block"></div>
            <h2 className="text-4xl font-bold text-white mb-2 relative z-10">
              <span className="bg-clip-text bg-gradient-to-r from-white to-[#003693] hover:text-transparent transition-all duration-300 relative">
                Services
              </span>
            </h2>
            <h3 className="text-2xl font-medium text-white relative">
              サービス
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <Instagram size={28} />
                  </div>
                </div>
              }
              title="SNS Consulting"
              japaneseTitle="SNSコンサルティング"
              description="戦略的なソーシャルメディア運用と成長戦略のご提案"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <Users size={28} />
                  </div>
                </div>
              }
              title="Influencer Marketing"
              japaneseTitle="インフルエンサーマーケティング"
              description="業界の影響力のある人物とのコネクションを活用したマーケティング"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <Globe2 size={28} />
                  </div>
                </div>
              }
              title="Web Marketing"
              japaneseTitle="WEBマーケティング"
              description="包括的なデジタルマーケティングソリューションの提供"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <BarChart3 size={28} />
                  </div>
                </div>
              }
              title="Web Advertising"
              japaneseTitle="WEB広告"
              description="結果を出すターゲットを絞った広告キャンペーンの展開"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <Calendar size={28} />
                  </div>
                </div>
              }
              title="Event Casting"
              japaneseTitle="イベントキャスティング"
              description="イベントのための専門的な人材確保とコーディネート"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping-slow"></div>
                  <div className="relative bg-[#003693] text-white p-3 rounded-full transform transition-transform group-hover:rotate-6">
                    <Megaphone size={28} />
                  </div>
                </div>
              }
              title="Digital Strategy"
              japaneseTitle="デジタル戦略"
              description="カスタマイズされたデジタルトランスフォーメーションの提案"
              className="bg-white border-[#003693]/30 hover:border-[#003693] transition-all duration-500"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Company Information Section */}
      <AnimatedSection id="about" className="py-20 bg-gradient-to-b from-[#7A9DC7] via-[#a4cdff] to-[#b7d8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* 背景装飾 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/30 rotate-45 hidden md:block"></div>

            <h2 className="text-4xl font-bold text-white mb-2 relative z-10">
              <span className="bg-clip-text bg-gradient-to-r from-white to-[#003693] hover:text-transparent transition-all duration-300 relative">
                Company Information
              </span>
            </h2>
            <h3 className="text-2xl font-medium text-white relative z-10">
              企業情報
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative p-4 bg-white shadow-xl transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                {/* 背景装飾 - ジグザグパターン */}
                <div className="absolute top-0 left-0 w-full h-20 bg-[#003693]/5">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,20 Q75,10 50,20 Q25,30 0,20 Z" fill="#003693" fillOpacity="0.05" />
                  </svg>
                </div>

                {/* アイコンとヘッダー */}
                <div className="flex items-start mb-6 relative z-10">
                  <div className="relative">
                    <div className="bg-[#003693] p-4 transform rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Users2 className="text-white" size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#7A9DC7]"></div>
                  </div>

                  <div className="ml-6 pt-1">
                    <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors">Representatives / 代表者</h3>
                  </div>
                </div>

                {/* コンテンツ - 余白を増やしました */}
                <div className="ml-20 mt-8 mb-2 pt-4">
                  <p className="text-[#3E3A39]">Managing Members:</p>
                  <p className="text-[#003693] font-medium group-hover:text-[#7A9DC7] transition-colors mt-3 mb-1">野村優太 ・ 趙竜済</p>
                </div>

                {/* アニメーションバー */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#003693] to-[#7A9DC7] w-0 group-hover:w-full transition-all duration-700"></div>
              </div>

              <div className="relative p-4 bg-white shadow-xl transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                {/* 背景装飾 - ジグザグパターン */}
                <div className="absolute top-0 left-0 w-full h-20 bg-[#003693]/5">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,20 Q75,10 50,20 Q25,30 0,20 Z" fill="#003693" fillOpacity="0.05" />
                  </svg>
                </div>

                {/* アイコンとヘッダー */}
                <div className="flex items-start mb-6 relative z-10">
                  <div className="relative">
                    <div className="bg-[#003693] p-4 transform rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <MapPin className="text-white" size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#7A9DC7]"></div>
                  </div>

                  <div className="ml-6 pt-1">
                    <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors">Location / 所在地</h3>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="ml-20 mt-8 mb-2 pt-4">
                  <p className="text-[#3E3A39]">Setagaya-ku, Tokyo</p>
                  <p className="text-[#003693] mt-3 mb-1">東京都世田谷区</p>
                </div>

                {/* アニメーションバー */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#003693] to-[#7A9DC7] w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative p-4 bg-white shadow-xl transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                {/* 背景装飾 - ジグザグパターン */}
                <div className="absolute top-0 left-0 w-full h-20 bg-[#003693]/5">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,20 Q75,10 50,20 Q25,30 0,20 Z" fill="#003693" fillOpacity="0.05" />
                  </svg>
                </div>

                {/* アイコンとヘッダー */}
                <div className="flex items-start mb-6 relative z-10">
                  <div className="relative">
                    <div className="bg-[#003693] p-4 transform rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Globe2 className="text-white" size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#003693]"></div>
                  </div>

                  <div className="ml-6 pt-1">
                    <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors">Company Name / 会社名</h3>
                  </div>
                </div>

                {/* コンテンツ - 余白を増やしました */}
                <div className="ml-20 mt-8 mb-2 pt-4">
                  <p className="text-[#3E3A39]">Y3 LLC</p>
                  <p className="text-[#003693] font-medium group-hover:text-[#7A9DC7] transition-colors mt-3 mb-1">合同会社Y3（ワイスリー）</p>
                </div>

                {/* アニメーションバー */}
                <div className="absolute bottom-0 right-0 h-1 bg-gradient-to-r from-[#7A9DC7] to-[#003693] w-0 group-hover:w-full transition-all duration-700 transform rotate-180"></div>
              </div>

              <div className="relative p-4 bg-white shadow-xl transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                {/* 背景装飾 - ジグザグパターン */}
                <div className="absolute top-0 left-0 w-full h-20 bg-[#003693]/5">
                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,20 Q75,10 50,20 Q25,30 0,20 Z" fill="#003693" fillOpacity="0.05" />
                  </svg>
                </div>

                {/* アイコンとヘッダー */}
                <div className="flex items-start mb-6 relative z-10">
                  <div className="relative">
                    <div className="bg-[#003693] p-4 transform rotate-45 group-hover:rotate-0 transition-all duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Calendar className="text-white" size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#003693]"></div>
                  </div>

                  <div className="ml-6 pt-1">
                    <h3 className="text-xl font-bold text-[#3E3A39] group-hover:text-[#003693] transition-colors">Established / 設立</h3>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="ml-20 mt-8 mb-2 pt-4">
                  <p className="text-[#3E3A39]">April 4, 2025</p>
                  <p className="text-[#003693] mt-3 mb-1">2025年4月4日</p>
                </div>

                {/* アニメーションバー */}
                <div className="absolute bottom-0 right-0 h-1 bg-gradient-to-r from-[#7A9DC7] to-[#003693] w-0 group-hover:w-full transition-all duration-700 transform rotate-180"></div>
              </div>
            </div>
          </div>
          {/* 装飾要素 */}
          <div className="absolute left-0 bottom-0 w-24 h-24 bg-white/5 hidden md:block" style={{ clipPath: "polygon(0 50%, 100% 100%, 0 100%)" }}></div>
          <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 hidden md:block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}></div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2 relative z-10">
              <span className="bg-clip-text bg-gradient-to-r from-white to-[#003693] hover:text-transparent transition-all duration-300 relative">Contact</span>
            </h2>
            <h3 className="text-2xl font-medium text-white">お問い合わせ</h3>
          </div>
          <p className="text-center text-gray-300">お問い合わせは下記のボタンから専用フォームへお進みください。</p>
          <p className="text-center text-gray-300 mb-8">担当者が確認次第、ご連絡いたします。</p>

          {/* お問い合わせボタン */}
          <div className="flex justify-center mb-12">
            <a
              href="/contact"
              className="relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-[#7A9DC7] via-[#003693] to-[#003693] rounded-lg group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#003693]/50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-[#003693] via-[#003693] to-[#7A9DC7] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative flex items-center">
                <Mail className="mr-3" size={22} />
                お問い合わせフォームへ
              </span>
            </a>
          </div>

          {/* SNSアイコン */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-600/50 transform hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-zinc-600/50 transform hover:scale-110 transition-all duration-300"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">SNSでも最新情報を発信しています。フォローをお願いします。</p>
        </div>
      </AnimatedSection>
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#003693] bg-opacity-70 p-3 text-white rounded-full shadow-lg transition-all duration-300 transform hover:bg-opacity-100 hover:scale-110 hover:rotate-6 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

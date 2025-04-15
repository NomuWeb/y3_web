"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Particle {
  size: number;
  top: number;
  left: number;
  duration: number;
}


const HeroSection = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // スクロールに応じてスクロールアイコンの透明度を変更
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    // クライアントサイドでパーティクルを生成
    const generatedParticles: Particle[] = Array.from({ length: 20 }, () => ({
      size: Math.random() * 6 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(generatedParticles);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900"></div>

      {/* 背景装飾 - 丸い形 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-pulse" style={{ animationDuration: "8s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500 opacity-10 animate-pulse" style={{ animationDuration: "12s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-500 opacity-10 animate-pulse" style={{ animationDuration: "10s" }}></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-500 opacity-5"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-cyan-500 opacity-5"></div>
      </div>

      {/* パーティクル効果 */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">Y3</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">合同会社ワイスリー</span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">鳥肌が立つような感動は人間ならではの価値として残り続ける</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#services"
            className="px-8 py-4 bg-white text-indigo-800 rounded-full font-medium text-lg shadow-xl shadow-indigo-800/20 hover:shadow-indigo-800/30 transform hover:scale-105 transition-all duration-300"
          >
            サービスを見る
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-medium text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            お問い合わせ
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* スクロールダウンアイコン */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-10" style={{ opacity: scrollOpacity }}>
        <div className="flex flex-col items-center">
          <p className="text-white/80 text-sm mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* 波形装飾（下部） */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

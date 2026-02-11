"use client";

import React from "react";
import ContactFormWithServerAction from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 共通ヘッダー */}
      <Header variant="secondary" />

      {/* ヒーローセクション */}
      <div className="pt-20 relative overflow-hidden bg-[#0a1628] text-white">
        {/* ジオメトリック背景 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

        {/* アクセントライン */}
        <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-blue-500/40 to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-cyan-500/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="text-center">
            <span className="inline-block py-1.5 px-4 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 mb-3">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-white">
              お問い合わせ
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-gray-400">
              下記のフォームに必要事項をご記入の上、送信してください。担当者が確認次第、ご連絡いたします。
            </p>
          </div>
        </div>

        {/* 下部のアクセントライン */}
        <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      </div>

      {/* お問い合わせフォームセクション */}
      <main className="py-16 relative bg-gray-50">
        {/* ジオメトリック背景 */}
        <div className="absolute inset-0 bg-dot-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="w-full mx-auto">
              <ContactFormWithServerAction />
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-8 tracking-tight">
                その他のお問い合わせ方法
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="group relative bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 text-center">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"></div>
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
                    <Mail size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:nomuray3@outlook.jp" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                    contact@yyy-3.com
                  </a>
                </div>

                <div className="group relative bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100/50 hover:-translate-y-1 text-center">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-500"></div>
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white mb-4">
                    <MapPin size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">所在地</h4>
                  <p className="text-gray-600 text-sm">東京都世田谷区</p>
                </div>

                <div className="group relative bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 text-center">
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"></div>
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
                    <Phone size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">営業時間</h4>
                  <p className="text-gray-600 text-sm">平日 10:00〜18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}

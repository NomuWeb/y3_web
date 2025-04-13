"use client";

import React from "react";
import ContactFormWithServerAction from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#3E3A39]">
      {/* 共通ヘッダーコンポーネントを使用（contact変種） */}
      <Header variant="contact" />

      {/* お問い合わせフォームセクション */}
      <main className="pt-20 pb-12 sm:pt-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-medium text-[#3E3A39] relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#7A9DC7] to-[#003693] rounded-full"></span>
            </h3>

            <div className="mt-6">
              <p className="text-sm sm:text-base text-[#3E3A39] max-w-2xl mx-auto">下記のフォームに必要事項をご記入の上、送信してください。</p>
              <p className="text-sm sm:text-base text-[#3E3A39] max-w-2xl mx-auto">担当者が確認次第、ご連絡いたします。</p>
            </div>
          </div>

          <div className="w-full sm:max-w-xl mx-auto rounded-xl shadow-lg">
            <ContactFormWithServerAction />
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-[#003693]  mb-4">その他のお問い合わせ方法</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <div className="bg-[#003693] p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <a href="mailto:nomuray3@outlook.jp" className="text-[#3E3A39] hover:text-[#003693]">
                  nomuray3@outlook.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 共通フッターコンポーネントを使用 */}
      <footer className="bg-[rgb(24,25,26)] pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-zinc-800 pt-6 pb-2 text-center text-sm text-gray-400">© 2025 Y3 LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

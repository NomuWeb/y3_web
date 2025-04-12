"use client";

import React from "react";
import ContactFormWithServerAction from "@/components/ContactForm";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* 共通ヘッダーコンポーネントを使用（contact変種） */}
      <Header variant="contact" />

      {/* お問い合わせフォームセクション */}
      <main className="pt-20 pb-12 px-4 sm:pt-24">
        <div className=" mx-auto">
          <div className="text-center mb-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2 hover:text-blue-600 transition-colors">Contact</h2>
              <h3 className="text-xl sm:text-2xl font-medium text-white">お問い合わせ</h3>
            </div>
            <div>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">下記のフォームに必要事項をご記入の上、送信してください。</p>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">担当者が確認次第、ご連絡いたします。</p>
            </div>
          </div>

          <div className="w-full sm:max-w-xl mx-auto p-4 sm:p-8 rounded-xl shadow-lg">
            <ContactFormWithServerAction />
          </div>
        </div>
      </main>

      {/* 共通フッターコンポーネントを使用 */}
      <footer className=" pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-zinc-800 pt-6 pb-2 text-center text-sm text-gray-400">© 2025 Y3 LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React from "react";
import ContactFormWithServerAction from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* 共通ヘッダーコンポーネントを使用（contact変種） */}
      <Header variant="contact" />

      {/* お問い合わせフォームセクション */}
      <main className="py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ / Contact</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">下記のフォームに必要事項をご記入の上、送信してください。</p>
            <p className="text-gray-400 max-w-2xl mx-auto">担当者が確認次第、ご連絡いたします。</p>
          </div>

          <div className="max-w-xl mx-auto bg-black p-8 rounded-xl shadow-lg">
            <ContactFormWithServerAction />
          </div>
        </div>
      </main>

      {/* 共通フッターコンポーネントを使用 */}
      <Footer />
    </div>
  );
}

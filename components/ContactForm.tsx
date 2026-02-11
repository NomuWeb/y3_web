"use client";

import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, ArrowRight, CheckCircle, RefreshCw } from "lucide-react";
import { sendContactEmail } from "@/app/contact/actions";

export default function ContactFormWithServerAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await sendContactEmail(formData);

      setSubmitResult(result);

      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      setSubmitResult({
        success: false,
        message: "送信中にエラーが発生しました。後でもう一度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(false);
    setSubmitResult(null);
  };

  return (
    <div className="overflow-hidden">
      {/* 上部アクセントライン */}
      <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

      {/* フォーム本体 */}
      <div className="bg-white p-6 sm:p-8 border border-gray-200 border-t-0">
        {submitResult && (
          <div
            className={`p-4 mb-6 border text-base ${
              submitResult.success ? "bg-blue-50/50 border-blue-200" : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {submitResult.success ? (
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                ) : (
                  <div className="h-5 w-5 text-red-500 flex items-center justify-center">
                    <span className="text-lg">×</span>
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${submitResult.success ? "text-blue-800" : "text-red-800"}`}>{submitResult.message}</p>
                {submitResult.success && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
                  >
                    <RefreshCw className="mr-1.5 h-3 w-3" />
                    新しい問い合わせを作成
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium text-gray-700 flex items-center text-sm">
              <User size={14} className="mr-2 text-blue-500" />
              <span>お名前</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-300"}`}
              required
              maxLength={50}
              placeholder="例: 山田 太郎"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700 flex items-center text-sm">
              <Mail size={14} className="mr-2 text-blue-500" />
              <span>メールアドレス</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-300"}`}
              required
              placeholder="例: yamada@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700 flex items-center text-sm">
              <MessageSquare size={14} className="mr-2 text-blue-500" />
              <span>メッセージ</span>
            </label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-300"}`}
              required
              maxLength={3000}
              placeholder="お問い合わせ内容をご記入ください"
            ></textarea>
            <div className="flex justify-end mt-1.5">
              <span
                className={`text-xs font-mono ${formData.message.length > 2700 ? (formData.message.length > 2900 ? "text-red-500" : "text-amber-500") : "text-gray-400"}`}
              >
                {formData.message.length}/3000
              </span>
            </div>
          </div>

          {!isSubmitted ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 px-6 transition-all duration-300 flex items-center justify-center tracking-wide ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin mr-2">
                    <RefreshCw size={16} />
                  </div>
                  <span>送信中...</span>
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  <span>送信する</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3.5 px-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 flex items-center justify-center tracking-wide"
            >
              <RefreshCw size={16} className="mr-2" />
              <span>新しい問い合わせを作成</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

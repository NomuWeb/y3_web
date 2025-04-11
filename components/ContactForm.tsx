"use client";

import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
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
      // サーバーアクションを呼び出し
      const result = await sendContactEmail(formData);

      setSubmitResult(result);

      if (result.success) {
        // 送信成功時にフォームを無効化
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
    // 新しい問い合わせを可能にする
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(false);
    setSubmitResult(null);
  };

  return (
    <div className="rounded-xl overflow-hidden">
      {/* グラデーションの背景 */}
      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 p-8 rounded-xl shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {submitResult && (
            <div className={`p-4 mb-4 rounded-md ${submitResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              <p className="mb-2">{submitResult.message}</p>
              {submitResult.success && (
                <button type="button" onClick={handleReset} className="text-sm underline text-blue-600 hover:text-blue-800 mt-2">
                  新しい問い合わせを作成
                </button>
              )}
            </div>
          )}

          <div>
            <label className="block mb-2 flex items-center text-gray-700">
              <User size={18} className="mr-2 text-blue-500" />
              <span>Name / お名前</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-400"}`}
              required
            />
          </div>

          <div>
            <label className="block mb-2 flex items-center text-gray-700">
              <Mail size={18} className="mr-2 text-blue-500" />
              <span>Email / メールアドレス</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-400"}`}
              required
            />
          </div>

          <div>
            <label className="block mb-2 flex items-center text-gray-700">
              <MessageSquare size={18} className="mr-2 text-blue-500" />
              <span>Message / メッセージ</span>
            </label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-gray-800
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-blue-400"}`}
              required
            ></textarea>
          </div>

          {!isSubmitted ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors transform hover:translate-y-[-2px] ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "送信中... / Sending..." : "Send Message / 送信"}
            </button>
          ) : (
            <button type="button" onClick={handleReset} className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-md transition-colors">
              新しい問い合わせを作成
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

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
      {/* コーポレートカラーの背景 */}
      <div className="bg-white p-4 sm:p-8 rounded-xl border border-[#003693]/20 shadow-lg">
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {submitResult && (
            <div
              className={`p-3 sm:p-4 mb-3 sm:mb-4 rounded-md text-sm sm:text-base ${
                submitResult.success ? "bg-[#7A9DC7]/20 text-[#003693]" : "bg-red-100 text-red-800"
              }`}
            >
              <p className="mb-1 sm:mb-2">{submitResult.message}</p>
              {submitResult.success && (
                <button type="button" onClick={handleReset} className="text-xs sm:text-sm underline text-[#003693] hover:text-[#7A9DC7] mt-1 sm:mt-2">
                  新しい問い合わせを作成
                </button>
              )}
            </div>
          )}

          <div>
            <label className="block mb-1 sm:mb-2 flex items-center text-[#3E3A39] text-sm sm:text-base">
              <User size={16} className="mr-2 text-[#003693]" />
              <span>Name / お名前</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-2 sm:p-3 bg-white border border-gray-300 rounded-md focus:border-[#003693] focus:outline-none transition-colors text-[#3E3A39] text-sm sm:text-base
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-[#7A9DC7]"}`}
              required
              maxLength={50}
              placeholder="例: 山田 太郎"
            />
          </div>

          <div>
            <label className="block mb-1 sm:mb-2 flex items-center text-[#3E3A39] text-sm sm:text-base">
              <Mail size={16} className="mr-2 text-[#003693]" />
              <span>Email / メールアドレス</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-2 sm:p-3 bg-white border border-gray-300 rounded-md focus:border-[#003693] focus:outline-none transition-colors text-[#3E3A39] text-sm sm:text-base
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-[#7A9DC7]"}`}
              required
              placeholder="例: yamada@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 sm:mb-2 flex items-center text-[#3E3A39] text-sm sm:text-base">
              <MessageSquare size={16} className="mr-2 text-[#003693]" />
              <span>Message / メッセージ</span>
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitted}
              className={`w-full p-2 sm:p-3 bg-white border border-gray-300 rounded-md focus:border-[#003693] focus:outline-none transition-colors text-[#3E3A39] text-sm sm:text-base
                ${isSubmitted ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-[#7A9DC7]"}`}
              required
              maxLength={3000}
              placeholder="お問い合わせ内容をご記入ください"
            ></textarea>
            <div className="text-right text-xs text-gray-500 mt-1">{formData.message.length}/3000文字</div>
          </div>

          {!isSubmitted ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#003693] hover:bg-[#7A9DC7] text-white py-2 sm:py-3 px-4 rounded-md transition-colors transform hover:translate-y-[-2px] text-sm sm:text-base ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "送信中... / Sending..." : "Send Message / 送信"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-[#7A9DC7] hover:bg-[#003693] text-white py-2 sm:py-3 px-4 rounded-md transition-colors text-sm sm:text-base"
            >
              新しい問い合わせを作成
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

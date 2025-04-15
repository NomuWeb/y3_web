// app/contact/actions.ts
"use server";

import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// HTMLをエスケープする関数
function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "名前、メールアドレス、メッセージは必須です",
      };
    }

    // 文字数制限の確認
    if (formData.name.length > 50) {
      return {
        success: false,
        message: "名前は50文字以内で入力してください",
      };
    }

    if (formData.message.length > 3000) {
      return {
        success: false,
        message: "メッセージは3000文字以内で入力してください",
      };
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "有効なメールアドレスを入力してください",
      };
    }

    // 入力内容をエスケープ
    const escapedName = escapeHtml(formData.name);
    const escapedEmail = escapeHtml(formData.email);
    const escapedMessage = escapeHtml(formData.message);

    // 現在の日時を取得
    const now = new Date();
    const formattedDate = now.toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    // 環境変数から認証情報を取得
    const emailUser = process.env.EMAIL_USER; // 受信用Outlookアドレス
    const gmailUser = process.env.GMAIL_USER; // 送信用Gmailアドレス
    const gmailPassword = process.env.GMAIL_APP_PASSWORD; // Gmailアプリパスワード

    if (!emailUser || !gmailUser || !gmailPassword) {
      throw new Error("メール送信に必要な環境変数が設定されていません");
    }

    // Gmail SMTPを使用
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    // メールの本文を作成
    const textBody = `
【Y3 LLC お問い合わせ】

受信日時: ${formattedDate}

■ お問い合わせ内容 ■
名前: ${escapedName}
メールアドレス: ${escapedEmail}

メッセージ:
${escapedMessage}

--
Y3 LLC（ワイスリー合同会社）
Setagaya-ku, Tokyo
    `;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Y3 LLC お問い合わせ</title>
</head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafc;">
  <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); position: relative; background-color: white;">
    <!-- 背景装飾 (丸いパターン) - HTMLメールの制限内で実装 -->
    <div style="position: absolute; width: 150px; height: 150px; border-radius: 50%; background-color: rgba(224, 231, 255, 0.3); top: -50px; right: -50px; z-index: 0;"></div>
    <div style="position: absolute; width: 120px; height: 120px; border-radius: 50%; background-color: rgba(199, 210, 254, 0.3); bottom: -30px; left: -40px; z-index: 0;"></div>
    <div style="position: absolute; width: 80px; height: 80px; border-radius: 50%; background-color: rgba(221, 214, 254, 0.3); top: 40%; right: 20%; z-index: 0;"></div>
    
    <!-- グラデーショントップバー -->
    <div style="background: linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6); height: 6px;"></div>
    
    <!-- ヘッダー -->
    <div style="background-color: white; color: #1e293b; padding: 30px; text-align: center; position: relative; z-index: 1;">
      <h1 style="margin: 0; font-size: 28px; background: linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;">Y3 LLC お問い合わせ</h1>
      <p style="margin-top: 8px; font-size: 14px; color: #64748b;">受信日時: ${formattedDate}</p>
      <!-- 区切り線 -->
      <div style="width: 60px; height: 3px; background: linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6); margin: 20px auto 0;"></div>
    </div>
    
    <!-- メイン内容 -->
    <div style="background-color: white; padding: 30px; position: relative; z-index: 1;">
      <div style="margin-bottom: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <!-- アイコン風の装飾 -->
          <div style="position: relative; margin-right: 12px;">
            <div style="position: absolute; width: 30px; height: 30px; background-color: #dbeafe; border-radius: 8px; transform: rotate(6deg);"></div>
            <div style="position: relative; width: 30px; height: 30px; background: linear-gradient(to top right, #3b82f6, #6366f1); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="color: white; font-weight: bold; font-size: 14px;">👤</div>
            </div>
          </div>
          <h2 style="font-size: 18px; color: #1e293b; margin: 0;">お問い合わせ情報</h2>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.04); border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 120px; color: #4b5563;">名前:</td>
              <td style="padding: 10px 0; color: #1e40af; font-weight: 500;">${escapedName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">メールアドレス:</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${escapedEmail}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">
                  ${escapedEmail}
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      
      <div>
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <!-- アイコン風の装飾 -->
          <div style="position: relative; margin-right: 12px;">
            <div style="position: absolute; width: 30px; height: 30px; background-color: #e0e7ff; border-radius: 8px; transform: rotate(6deg);"></div>
            <div style="position: relative; width: 30px; height: 30px; background: linear-gradient(to top right, #6366f1, #8b5cf6); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="color: white; font-weight: bold; font-size: 14px;">💬</div>
            </div>
          </div>
          <h2 style="font-size: 18px; color: #1e293b; margin: 0;">メッセージ内容</h2>
        </div>
        
        <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; position: relative;">
          <!-- 左サイドグラデーション -->
          <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(to bottom, #4f46e5, #8b5cf6); border-top-left-radius: 12px; border-bottom-left-radius: 12px;"></div>
          
          <p style="white-space: pre-line; margin: 0; color: #374151;">${escapedMessage.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    </div>
    
    <!-- フッター -->
    <div style="background-color: #f8fafc; padding: 25px; text-align: center; font-size: 14px; color: #64748b; border-top: 1px solid #e2e8f0; position: relative; z-index: 1;">
      <p style="margin: 0; font-weight: 600; color: #4f46e5;">Y3 LLC（ワイスリー合同会社）</p>
      <p style="margin: 8px 0; color: #4b5563;">Setagaya-ku, Tokyo</p>
      <p style="margin: 12px 0 0; font-size: 12px; color: #94a3b8;">© 2025 Y3 LLC. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    // 会社へのメールと、BCCでgmailUserにも送信
    const mailOptions = {
      from: `"Y3 LLC Contact Form" <${gmailUser}>`,
      to: emailUser, // 受信はOutlookアドレスに
      bcc: gmailUser, // BCCでGmailアドレスにも送信
      subject: `【お問い合わせ】${escapedName}様からのお問い合わせ`,
      text: textBody,
      html: htmlBody,
    };

    // メールを送信
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "お問い合わせありがとうございます。担当者が確認次第、ご連絡いたします。",
    };
  } catch (error) {
    console.error("メール送信エラー:", error);
    return {
      success: false,
      message: "メール送信中にエラーが発生しました。後ほど再度お試しください。",
    };
  }
}

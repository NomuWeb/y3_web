// app/contact/actions.ts
"use server";

import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "名前、メールアドレス、メッセージは必須です",
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
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      throw new Error("メール送信に必要な環境変数が設定されていません");
    }

    // Outlook用のSMTP設定
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // 会社へのメールのみ送信
    const mailOptions = {
      from: `"Y3 LLC Contact Form" <${emailUser}>`,
      to: emailUser,
      subject: `【お問い合わせ】${formData.name}様からのお問い合わせ`,
      text: `
【Y3 LLC お問い合わせ】

受信日時: ${formattedDate}

■ お問い合わせ内容 ■
名前: ${formData.name}
メールアドレス: ${formData.email}

メッセージ:
${formData.message}

--
Y3 LLC（ワイスリー合同会社）
Setagaya-ku, Tokyo
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Y3 LLC お問い合わせ</title>
</head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="border-radius: 6px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    <!-- ヘッダー -->
    <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">Y3 LLC お問い合わせ</h1>
      <p style="margin-top: 6px; font-size: 14px;">受信日時: ${formattedDate}</p>
    </div>
    
    <!-- メイン内容 -->
    <div style="background-color: white; padding: 30px; border-bottom: 1px solid #eee;">
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 18px; color: #1e40af; margin-top: 0; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
          お問い合わせ情報
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">名前:</td>
            <td style="padding: 8px 0;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">メールアドレス:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">
                ${formData.email}
              </a>
            </td>
          </tr>
        </table>
      </div>
      
      <div>
        <h2 style="font-size: 18px; color: #1e40af; margin-top: 0; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
          メッセージ内容
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 4px; border-left: 4px solid #2563eb;">
          <p style="white-space: pre-line; margin: 0;">${formData.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    </div>
    
    <!-- フッター -->
    <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 14px; color: #666;">
      <p style="margin: 0;">Y3 LLC（ワイスリー合同会社）</p>
      <p style="margin: 5px 0;">Setagaya-ku, Tokyo</p>
      <p style="margin: 5px 0; font-size: 12px;">© 2024 Y3 LLC. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
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

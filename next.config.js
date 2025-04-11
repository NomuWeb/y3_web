/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 静的エクスポート設定を削除または無効化
  // output: 'export',

  // サーバーアクションを有効化
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

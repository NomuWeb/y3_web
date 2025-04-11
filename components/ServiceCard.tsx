'use client';

import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  japaneseTitle: string;
  description: string;
}

export default function ServiceCard({ icon, title, japaneseTitle, description }: ServiceCardProps) {
  return (
    <div className="p-6 bg-[#050A13] border border-zinc-800 hover:border-blue-600 transition-all transform hover:translate-y-[-4px]">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <h4 className="text-lg mb-3 text-gray-400">{japaneseTitle}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
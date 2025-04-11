"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Globe2,
  BarChart3,
  Users,
  Megaphone,
  Calendar,
  MapPin,
  Users2,
  ArrowUp,
  Mail,
  Phone,
  MapPinned,
  ChevronUp,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

// Intersection Observer Hook for Scroll Animations
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting] as const;
};

// Animated Section Component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", ...props }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl transform hover:scale-105 transition-transform">Y3 LLC</div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-400 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                Services
              </a>
              <a href="#about" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                About
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors hover:translate-y-[-2px] transform">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Y3 LLC</h1>
            <p className="text-xl md:text-2xl mb-8">ワイスリー合同会社</p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Shaping the Future of Digital Marketing
              <br />
              デジタルマーケティングの未来を創造する
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">Our Services</h2>
            <h3 className="text-2xl font-medium text-gray-700">サービス</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Instagram size={32} className="text-blue-500" />}
              title="SNS Consulting"
              japaneseTitle="SNSコンサルティング"
              description="Strategic social media management and growth strategies"
            />
            <ServiceCard
              icon={<Users size={32} className="text-blue-500" />}
              title="Influencer Marketing"
              japaneseTitle="インフルエンサーマーケティング"
              description="Connect with influential voices in your industry"
            />
            <ServiceCard
              icon={<Globe2 size={32} className="text-blue-500" />}
              title="Web Marketing"
              japaneseTitle="WEBマーケティング"
              description="Comprehensive digital marketing solutions"
            />
            <ServiceCard
              icon={<BarChart3 size={32} className="text-blue-500" />}
              title="Web Advertising"
              japaneseTitle="WEB広告"
              description="Targeted advertising campaigns that deliver results"
            />
            <ServiceCard
              icon={<Calendar size={32} className="text-blue-500" />}
              title="Event Casting"
              japaneseTitle="イベントキャスティング"
              description="Professional talent sourcing for your events"
            />
            <ServiceCard
              icon={<Megaphone size={32} className="text-blue-500" />}
              title="Digital Strategy"
              japaneseTitle="デジタル戦略"
              description="Customized digital transformation solutions"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Company Information Section */}
      <AnimatedSection id="about" className="py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">Company Information</h2>
            <h3 className="text-2xl font-medium text-gray-700">企業情報</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors bg-white rounded-lg shadow-sm h-48 flex flex-col">
                <div className="flex items-center mb-2">
                  <MapPin className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Location / 所在地</h3>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">Setagaya-ku, Tokyo</p>
                  <p className="text-gray-700">東京都世田谷区</p>
                </div>
              </div>

              <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors bg-white rounded-lg shadow-sm h-48 flex flex-col">
                <div className="flex items-center mb-2">
                  <Users2 className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Representatives / 代表者</h3>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">Managing Members:</p>
                  <p className="text-gray-700">Yuta Nomura & Yongje Cho</p>
                  <p className="text-gray-700 mt-2">代表社員:</p>
                  <p className="text-gray-700">野村優太 ・ 趙竜済</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors bg-white rounded-lg shadow-sm h-48 flex flex-col">
                <div className="flex items-center mb-2">
                  <Calendar className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Established / 設立</h3>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">April 4, 2025</p>
                  <p className="text-gray-700">2025年4月4日</p>
                </div>
              </div>

              <div className="border border-gray-200 p-6 hover:border-blue-600 transition-colors bg-white rounded-lg shadow-sm h-48 flex flex-col">
                <div className="flex items-center mb-2">
                  <Globe2 className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Company Name / 会社名</h3>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">Y3 LLC</p>
                  <p className="text-gray-700">合同会社Y3（ワイスリー）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center hover:text-blue-400 transition-colors">Contact Us / お問い合わせ</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Name / お名前</label>
                <input type="text" className="w-full p-2 bg-black border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block mb-2">Email / メールアドレス</label>
                <input type="email" className="w-full p-2 bg-black border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block mb-2">Message / メッセージ</label>
                <textarea rows={4} className="w-full p-2 bg-black border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 transition-colors transform hover:translate-y-[-2px]">
                Send Message / 送信
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors">Y3 LLC</h3>
              <p className="text-gray-400 mb-4">Shaping the future of digital marketing through innovative solutions and strategic partnerships.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MapPinned size={16} className="mr-2" />
                  <span>Setagaya-ku, Tokyo</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:contact@y3llc.jp" className="hover:text-blue-400 transition-colors">
                    contact@y3llc.jp
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+81-XX-XXXX-XXXX" className="hover:text-blue-400 transition-colors">
                    +81-XX-XXXX-XXXX
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-sm text-gray-400">© 2024 Y3 LLC. All rights reserved.</div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-500 bg-opacity-70 p-3 text-white rounded-full shadow-lg transition-all duration-300 transform hover:bg-opacity-100 hover:scale-110 hover:rotate-6 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

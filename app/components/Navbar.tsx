'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#gallery', label: '作品案例' },
  { href: '#services', label: '服务品类' },
  { href: '#about', label: '关于我们' },
  { href: '#process', label: '合作流程' },
  { href: '#faq', label: '常见问题' },
  { href: '#contact', label: '预约打样' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900 shadow-lg border-b border-gray-800'
          : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center h-14 md:h-16">
        {/* Links */}
        <div className="flex items-center gap-3 md:gap-6 overflow-x-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 text-xs md:text-sm font-medium transition whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:13168873754"
            className="hidden md:inline-block ml-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition"
          >
            📞 13168873754
          </a>
        </div>

        {/* Mobile menu button - removed, links shown directly */}
      </div>
    </nav>
  );
}

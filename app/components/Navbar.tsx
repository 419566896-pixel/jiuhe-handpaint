'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#gallery', label: '作品案例' },
  { href: '#services', label: '服务品类' },
  { href: '#why-us', label: '我们的优势' },
  { href: '#process', label: '合作流程' },
  { href: '#faq', label: '常见问题' },
  { href: '#contact', label: '预约打样' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a href="#" className="text-yellow-400 font-bold text-lg md:text-xl tracking-wide whitespace-nowrap">
          久合手绘
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:13168873754"
            className="ml-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition"
          >
            📞 13168873754
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white w-8 h-8 flex flex-col items-center justify-center gap-1"
          aria-label="菜单"
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 text-base font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <a
              href="tel:13168873754"
              className="block text-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-base font-semibold transition"
            >
              📞 13168873754
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

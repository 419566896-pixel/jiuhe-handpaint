'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 md:bottom-6 right-6 z-50 w-12 h-12 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 text-xl"
      aria-label="回到顶部"
    >
      ↑
    </button>
  );
}

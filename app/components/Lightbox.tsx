'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const prevOpenRef = useRef(isOpen);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Sync index when dialog opens (avoid sync setState in effect)
  useEffect(() => {
    if (isOpen && !prevOpenRef.current) {
      setCurrentIndex(initialIndex);
    }
    prevOpenRef.current = isOpen;
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="图片预览"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10000] text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center transition"
        aria-label="关闭"
      >
        ✕
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 z-[10000] text-white/80 hover:text-white text-5xl font-light w-14 h-14 flex items-center justify-center transition"
          aria-label="上一张"
        >
          ‹
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 z-[10000] text-white/80 hover:text-white text-5xl font-light w-14 h-14 flex items-center justify-center transition"
          aria-label="下一张"
        >
          ›
        </button>
      )}

      <div
        className="max-w-[90vw] max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          style={{ animation: 'fadeIn 0.2s ease' }}
        />
        <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

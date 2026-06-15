'use client';

import { useState, useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 自动播放（浏览器策略允许时生效）
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // 浏览器阻止自动播放，用户需手动点击按钮
    });
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/bgm.mp3" loop preload="auto" autoPlay />

      {/* 播放按钮 */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? '暂停音乐' : '播放音乐'}
        className="fixed bottom-20 md:bottom-6 right-4 z-50 w-10 h-10 rounded-full bg-gray-800/80 border border-gray-600 flex items-center justify-center text-yellow-400 hover:bg-gray-700 transition"
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="2" width="4" height="12" rx="1" />
            <rect x="9" y="2" width="4" height="12" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 2l10 6-10 6V2z" />
          </svg>
        )}
      </button>

      {/* 提示文字 */}
      {showTip && !playing && (
        <div className="fixed bottom-32 md:bottom-18 right-4 z-50 bg-gray-800/90 text-gray-300 text-xs px-3 py-1.5 rounded-lg border border-gray-600 animate-fade-in">
          🎵 点击播放背景音乐
        </div>
      )}
    </>
  );
}

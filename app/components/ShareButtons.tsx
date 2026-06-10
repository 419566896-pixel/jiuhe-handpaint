'use client';

import { useState } from 'react';

const SHARE_URL = 'https://jiuhehandpaint.com';
const SHARE_TITLE = '久合手绘喷绘厂 - 服装鞋包手绘定制工厂';
const SHARE_DESC = '20年手绘经验，T恤/帆布鞋/帆布包手绘定制，全国发货，电话13168873754';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement('input');
      input.value = SHARE_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToWeibo = () => {
    window.open(
      `https://service.weibo.com/share/share.php?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE + ' - ' + SHARE_DESC)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareToQQ = () => {
    window.open(
      `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE)}&desc=${encodeURIComponent(SHARE_DESC)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <div className="flex items-center gap-3 flex-wrap justify-center">
      <span className="text-gray-400 text-sm">分享到：</span>

      {/* 微信 - 复制链接 */}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-medium transition"
        title="复制链接后打开微信粘贴分享"
      >
        <span>📱</span>
        {copied ? '已复制 ✓' : '微信'}
      </button>

      {/* 微博 */}
      <button
        onClick={shareToWeibo}
        className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-full text-sm font-medium transition"
      >
        <span>🔴</span>
        微博
      </button>

      {/* QQ */}
      <button
        onClick={shareToQQ}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full text-sm font-medium transition"
      >
        <span>💬</span>
        QQ
      </button>

      {/* 抖音 - 提示文字 */}
      <a
        href="https://www.douyin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm font-medium transition"
      >
        <span>🎵</span>
        抖音
      </a>

      {/* 小红书 - 提示文字 */}
      <a
        href="https://www.xiaohongshu.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 bg-red-400 hover:bg-red-300 text-white rounded-full text-sm font-medium transition"
      >
        <span>📕</span>
        小红书
      </a>
    </div>
  );
}

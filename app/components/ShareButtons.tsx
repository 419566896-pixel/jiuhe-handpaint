'use client';

import { useState } from 'react';

const SHARE_URL = 'https://jiuheshouhui.cn';
const SHARE_TITLE = '久合手绘喷绘厂 - 服装鞋包手绘定制工厂';
const SHARE_DESC = '20年手绘经验，T恤/帆布鞋/帆布包手绘定制，全国发货，电话13168873754';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
    } catch {
      const input = document.createElement('input');
      input.value = SHARE_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 微信：复制链接 + 打开微信
  const shareToWechat = () => {
    copyLink();
    window.location.href = 'weixin://';
  };

  // 微博：尝试打开 App，失败跳转网页
  const shareToWeibo = () => {
    const text = `${SHARE_TITLE} ${SHARE_DESC}`;
    const webUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(text)}`;
    try {
      window.location.href = `sinaweibo://sendweb?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(text)}`;
      setTimeout(() => { window.open(webUrl, '_blank'); }, 1500);
    } catch {
      window.open(webUrl, '_blank');
    }
  };

  // QQ：尝试打开 App，失败跳转网页
  const shareToQQ = () => {
    const webUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE)}&desc=${encodeURIComponent(SHARE_DESC)}`;
    try {
      window.location.href = `mqqapi://share/to_fri?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE)}`;
      setTimeout(() => { window.open(webUrl, '_blank'); }, 1500);
    } catch {
      window.open(webUrl, '_blank');
    }
  };

  // 抖音：尝试打开 App，失败跳转网页
  const openDouyin = () => {
    try {
      window.location.href = 'snssdk143://';
      setTimeout(() => { window.open('https://www.douyin.com/user/jiuheshouhui', '_blank'); }, 1500);
    } catch {
      window.open('https://www.douyin.com/user/jiuheshouhui', '_blank');
    }
  };

  // 小红书：尝试打开 App，失败跳转网页
  const openXiaohongshu = () => {
    try {
      window.location.href = 'xhsdiscover://';
      setTimeout(() => { window.open('https://www.xiaohongshu.com/search_result?keyword=' + encodeURIComponent('久合手绘'), '_blank'); }, 1500);
    } catch {
      window.open('https://www.xiaohongshu.com/search_result?keyword=' + encodeURIComponent('久合手绘'), '_blank');
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap justify-center">
      <span className="text-gray-400 text-sm">分享到：</span>

      <button
        onClick={shareToWechat}
        className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-medium transition"
      >
        <span>📱</span>
        {copied ? '已复制 ✓' : '微信'}
      </button>

      <button
        onClick={shareToWeibo}
        className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-full text-sm font-medium transition"
      >
        <span>🔴</span>
        微博
      </button>

      <button
        type="button"
        onClick={shareToQQ}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full text-sm font-medium transition"
      >
        <span>💬</span>
        QQ
      </button>

      <button
        type="button"
        onClick={openDouyin}
        className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm font-medium transition"
      >
        <span>🎵</span>
        抖音
      </button>

      <button
        type="button"
        onClick={openXiaohongshu}
        className="flex items-center gap-1.5 px-4 py-2 bg-red-400 hover:bg-red-300 text-white rounded-full text-sm font-medium transition"
      >
        <span>📕</span>
        小红书
      </button>
    </div>
  );
}

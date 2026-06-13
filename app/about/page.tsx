'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ICPPage() {
  const [open, setOpen] = useState<string | null>(null);

  const faqs = [
    {
      q: '什么是 ICP 备案？',
      a: 'ICP 备案是中国工信部对网站主办者的备案管理制度，所有在中国大陆境内提供服务的网站都需要完成备案。',
    },
    {
      q: '手绘定制需要多久？',
      a: '小批量（10-50件）通常 5-7 天，大批量（200件以上）15-30天，具体根据图案复杂度和数量而定。急单可加急处理。',
    },
    {
      q: '手绘会掉色吗？',
      a: '久合手绘使用专业纺织颜料，水洗不褪色，正常穿着无忧。鞋履喷绘颜料附着牢固，防水不掉色。',
    },
    {
      q: '可以来样定制吗？',
      a: '完全可以！您可以提供参考图或实物，我们的画师团队会根据您的要求原创设计或复刻。',
    },
    {
      q: '价格怎么算？',
      a: '根据产品类型、图案复杂度、数量而定。我们支持小批量测款，大批量价格更优。加微信联系我们免费报价。',
    },
    {
      q: '支持全国发货吗？',
      a: '支持！我们覆盖全国 30+ 城市批发市场，支持自提和快递发货。',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-sm mb-4 inline-block transition">← 返回首页</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">关于久合手绘喷绘厂</h1>
          <p className="text-gray-400">了解更多关于我们和服务的信息</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Company info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">📍 公司信息</h2>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium">公司名称：</span>久合手绘喷绘工艺</p>
              <p><span className="text-white font-medium">地址：</span>广州市白云区石井大冈村大园街12号</p>
              <p><span className="text-white font-medium">电话：</span><a href="tel:13168873754" className="text-yellow-400 hover:text-yellow-300">13168873754</a></p>
              <p><span className="text-white font-medium">微信：</span>13168873754</p>
              <p><span className="text-white font-medium">成立时间：</span>2006年（20年手绘经验）</p>
              <p><span className="text-white font-medium">服务范围：</span>全国发货</p>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">🏭 核心优势</h2>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium">20+</span> 年手绘经验</p>
              <p><span className="text-white font-medium">5000+</span> 合作客户</p>
              <p><span className="text-white font-medium">100000+</span> 年产手绘作品</p>
              <p><span className="text-white font-medium">30+</span> 覆盖城市</p>
              <p><span className="text-white font-medium">48h</span> 内回复预约</p>
              <p><span className="text-white font-medium">7天</span> 问题返工</p>
            </div>
          </div>
        </div>

        {/* ICP License */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">📋 资质备案</h2>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>网站名称：久合手绘喷绘工艺</p>
            <p>网站备案/许可证号：<span className="text-yellow-400 font-mono">粤ICP备XXXXXXXX号-1</span>（备案中，请替换为实际备案号）</p>
            <p>主办单位：久合手绘喷绘工艺</p>
            <p>审核更新时间：2026年6月11日</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">❓ 常见问题</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === `${i}` ? null : `${i}`)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/30 transition"
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <span className={`text-yellow-400 text-xl transition-transform ${open === `${i}` ? 'rotate-45' : ''}`}>+</span>
                </button>
                {open === `${i}` && (
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">🔗 相关链接</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 transition">官网首页</Link>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" className="text-gray-300 hover:text-yellow-400 transition">工信部 ICP 备案管理系统</a>
            <a href="https://www.beian.gov.cn/" target="_blank" rel="noopener" className="text-gray-300 hover:text-yellow-400 transition">公安网安备案</a>
            <a href="tel:13168873754" className="text-gray-300 hover:text-yellow-400 transition">📞 联系我们</a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 久合手绘喷绘工艺 版权所有</p>
        </div>
      </div>
    </div>
  );
}

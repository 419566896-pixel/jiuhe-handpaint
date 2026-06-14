'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [open, setOpen] = useState<string | null>(null);

  const milestones = [
    { year: '2006', event: '在广州白云区创立，开始服装手绘加工' },
    { year: '2010', event: '画师团队扩展到20人，承接品牌批量订单' },
    { year: '2015', event: '拓展鞋履喷绘、箱包手绘品类，覆盖全国批发市场' },
    { year: '2020', event: '转型线上，服务电商/直播/跨境客户5000+' },
    { year: '2026', event: '20周年，年产手绘作品10万+件，覆盖30+城市' },
  ];

  const faqs = [
    { q: '手绘定制需要多久？', a: '小批量（10-50件）通常 5-7 天，大批量（200件以上）15-30天，具体根据图案复杂度和数量而定。急单可加急处理。' },
    { q: '手绘会掉色吗？', a: '久合手绘使用专业纺织颜料，水洗不褪色，正常穿着无忧。鞋履喷绘颜料附着牢固，防水不掉色。' },
    { q: '可以来样定制吗？', a: '完全可以！您可以提供参考图或实物，我们的画师团队会根据您的要求原创设计或复刻。' },
    { q: '价格怎么算？', a: '根据产品类型、图案复杂度、数量而定。我们支持小批量测款，大批量价格更优。加微信联系我们免费报价。' },
    { q: '支持全国发货吗？', a: '支持！我们覆盖全国 30+ 城市批发市场，支持自提和快递发货。' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-sm mb-4 inline-block transition">← 返回首页</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">关于久合手绘喷绘厂</h1>
          <p className="text-gray-400">20年专注，一笔一画，让每件单品都独一无二</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">我们的故事</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8 text-gray-300 leading-relaxed space-y-4">
            <p>
              2006年，久合手绘在广州白云区一间小工作室起步。最初只是几个画师，为附近的服装档口画T恤图案。
              凭借对手绘工艺的热爱和对品质的执着，口碑一点点传开。
            </p>
            <p>
              20年过去，久合已成长为拥有数十名专业画师的手绘定制工厂，服务覆盖服装、鞋履、箱包三大品类。
              从广州十三行到杭州四季青，从线下批发到电商直播，5000+客户选择久合，是因为我们始终坚持一个信念：
              <span className="text-yellow-400 font-semibold">手绘的温度，是机器永远无法替代的。</span>
            </p>
            <p>
              每一件作品，都带着画师的笔触和情感。每一笔色彩，都经过反复调配和测试。我们不只是加工厂，
              我们是你的创意合伙人。
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">📍 联系方式</h2>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium w-20 inline-block">工厂地址</span>广州市白云区石井大冈村大园街12号</p>
              <p><span className="text-white font-medium w-20 inline-block">电话/微信</span><a href="tel:13168873754" className="text-yellow-400 hover:text-yellow-300">13168873754</a></p>
              <p><span className="text-white font-medium w-20 inline-block">抖音号</span>@jiuheshouhui</p>
              <p><span className="text-white font-medium w-20 inline-block">营业时间</span>周一至周六 09:00-18:00</p>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">📊 核心数据</h2>
            <div className="space-y-3 text-gray-300">
              <p><span className="text-white font-medium w-20 inline-block">成立时间</span>2006年（20年手绘经验）</p>
              <p><span className="text-white font-medium w-20 inline-block">合作客户</span>5000+</p>
              <p><span className="text-white font-medium w-20 inline-block">年产作品</span>100,000+</p>
              <p><span className="text-white font-medium w-20 inline-block">覆盖城市</span>30+</p>
              <p><span className="text-white font-medium w-20 inline-block">回复时效</span>48小时内</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">发展历程</h2>
          <div className="relative pl-8 border-l-2 border-yellow-600/30 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <span className="text-yellow-400 font-bold text-lg">{m.year}</span>
                  <p className="text-gray-300 mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">常见问题</h2>
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
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-xl font-bold text-white mb-3">准备开始你的手绘定制？</h3>
          <p className="text-gray-400 mb-6">加微信发图片，48小时内回复报价</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:13168873754" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition">
              📞 13168873754
            </a>
            <Link href="/" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-full font-semibold transition">
              回到首页看作品
            </Link>
          </div>
        </div>

        {/* ICP & Footer */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-yellow-400 mb-3">资质备案</h2>
          <p className="text-gray-400 text-sm">网站名称：久合手绘喷绘工艺</p>
          <p className="text-gray-400 text-sm">网站备案/许可证号：待备案</p>
          <p className="text-gray-400 text-sm">主办单位：久合手绘喷绘工艺</p>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 久合手绘喷绘工艺 版权所有</p>
        </div>
      </div>
    </div>
  );
}

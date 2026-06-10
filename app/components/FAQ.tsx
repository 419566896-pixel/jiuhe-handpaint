'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '手绘定制起订量是多少？',
    a: '久合手绘支持小批量测款，灵活接单，大批量价格更优。具体起订量根据产品类型和图案复杂度而定，欢迎加微信 13168873754 咨询。',
  },
  {
    q: '手绘会掉色吗？耐洗吗？',
    a: '使用专业纺织颜料和喷绘工艺，水洗不褪色，日常穿着无忧。鞋履喷绘颜料附着牢固，防水不掉色。每批产品都经过严格水洗测试。',
  },
  {
    q: '可以来样定制吗？没有设计稿怎么办？',
    a: '支持来样定制，也可以按设计稿制作。没有设计稿也没关系，我们的画师团队可以根据你的需求原创设计，风格涵盖国风、潮流、卡通、油画等。',
  },
  {
    q: '发货到哪些城市？',
    a: '全国发货，覆盖广州十三行/白马/红棉、杭州四季青、武汉汉正街、成都荷花池、东莞虎门、深圳南油等30+城市批发市场。',
  },
  {
    q: '手绘和印花有什么区别？',
    a: '手绘是画师一笔一笔手工绘制，每件都有细微差异和独特笔触，质感更好、更显档次。印花是机器批量生产，千篇一律。手绘适合追求差异化和品质感的商家。',
  },
  {
    q: '交期多久？急单可以加急吗？',
    a: '急单可加急处理，配合你的上新节奏。具体交期根据数量和复杂度而定，20年老厂从不拖延，欢迎咨询了解。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-600/50 transition"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-white font-medium text-base md:text-lg pr-4">{faq.q}</span>
            <span className="text-yellow-500 text-xl flex-shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

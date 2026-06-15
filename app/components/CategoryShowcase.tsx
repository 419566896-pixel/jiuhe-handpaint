'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = [
  {
    id: 'clothing',
    title: '服装手绘喷绘',
    icon: '👗',
    images: [
      'IMG_1189.webp', 'IMG_2619.webp', 'IMG_2626.webp', 'IMG_4050.webp',
      'IMG_4108.webp', 'IMG_4132.webp', 'IMG_4222.webp', 'IMG_4316.webp',
      'IMG_4651.webp', 'IMG_4660.webp', 'IMG_4662.webp', 'IMG_4673.webp',
      'IMG_4740.webp', 'IMG_5257.webp', 'IMG_5865.webp', 'IMG_1967.webp',
      'IMG_1044.webp', 'IMG_2623.webp', 'IMG_2634.webp', 'clothes-extra.webp',
    ],
  },
  {
    id: 'shoes',
    title: '鞋履手绘',
    icon: '👟',
    images: [
      'IMG_3847.webp', 'IMG_3928.webp', 'IMG_3952.webp',
      'shoes-splatter.webp', 'shoes-unique.webp', 'shoes-green.webp',
      'shoes-graffiti.webp', 'shoes-promo.webp',
    ],
  },
  {
    id: 'bags',
    title: '箱包手绘',
    icon: '👜',
    images: [
      'IMG_4006.webp', 'IMG_4015.webp', 'IMG_2625.webp',
      'bag-1.webp', 'bag-2.webp', 'bag-3.webp', 'bag-4.webp',
      'luggage-graffiti.webp',
    ],
  },
];

export default function CategoryShowcase() {
  const [active, setActive] = useState<string | null>(null);
  const current = categories.find((c) => c.id === active);

  return (
    <section id="services" className="py-12 md:py-20 bg-black border-t border-gray-800">
      <div className="px-4 md:px-8">
        {/* 品类标签 */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`flex-1 px-1.5 py-2 md:px-4 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold tracking-wide transition text-center ${
                active === cat.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-yellow-500'
              }`}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* 图片网格 — 仅在选中品类后显示 */}
        {current && (
          <div key={active} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 animate-fade-in">
            {current.images.map((img) => (
              <div key={img} className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <Image
                  src={`/images/${img}`}
                  alt={`久合手绘 - ${current.title}作品`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 16vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import Lightbox from './Lightbox';

const images: { src: string; alt: string }[] = [
  { src: 'IMG_1189.webp', alt: '久合手绘 - 服装手绘作品' },
  { src: 'IMG_2619.webp', alt: '久合手绘 - 衣服手绘定制案例' },
  { src: 'IMG_2626.webp', alt: '久合手绘 - T恤手绘图案' },
  { src: 'IMG_3847.webp', alt: '久合手绘 - 鞋子喷绘定制' },
  { src: 'IMG_3928.webp', alt: '久合手绘 - 帆布鞋手绘作品' },
  { src: 'IMG_3952.webp', alt: '久合手绘 - 鞋履手绘案例' },
  { src: 'IMG_4006.webp', alt: '久合手绘 - 箱包手绘定制' },
  { src: 'IMG_4015.webp', alt: '久合手绘 - 手提包手绘图案' },
  { src: 'IMG_4050.webp', alt: '久合手绘 - 服装手绘加工' },
  { src: 'IMG_4108.webp', alt: '久合手绘 - 卫衣手绘定制' },
  { src: 'IMG_4132.webp', alt: '久合手绘 - 牛仔外套手绘' },
  { src: 'IMG_4222.webp', alt: '久合手绘 - 国潮风格手绘' },
  { src: 'IMG_4316.webp', alt: '久合手绘 - 卡通IP手绘' },
  { src: 'IMG_4651.webp', alt: '久合手绘 - 油画风格手绘' },
  { src: 'IMG_4660.webp', alt: '久合手绘 - 复古风格手绘' },
  { src: 'IMG_4662.webp', alt: '久合手绘 - 潮牌手绘定制' },
  { src: 'IMG_4673.webp', alt: '久合手绘 - 民族服饰手绘' },
  { src: 'IMG_4740.webp', alt: '久合手绘 - 连衣裙手绘' },
  { src: 'IMG_5257.webp', alt: '久合手绘 - 衬衫手绘定制' },
  { src: 'IMG_5865.webp', alt: '久合手绘 - 汉服手绘定制' },
  { src: 'IMG_1967.webp', alt: '久合手绘 - 童装手绘图案' },
  { src: 'IMG_1044.webp', alt: '久合手绘 - 女装手绘案例' },
  { src: 'IMG_2623.webp', alt: '久合手绘 - 裤子手绘定制' },
  { src: 'IMG_2625.webp', alt: '久合手绘 - 箱包喷绘作品' },
  { src: 'IMG_2634.webp', alt: '久合手绘 - 帆布包手绘' },
  { src: '0be0bef1cq9fda234fc86fd8cda5361b.webp', alt: '久合手绘 - 手绘工艺特写' },
  { src: '71dab954a4e9dda0c2207a6d3ec02b92.webp', alt: '久合手绘 - 手绘细节展示' },
  { src: '732758cc60f4781d90ae0d1bf014d639.webp', alt: '久合手绘 - 画师手绘过程' },
  { src: '828c3961ac5d42bddc020a9125ce7577.webp', alt: '久合手绘 - 手绘服装成品' },
  { src: '878efa812f2de18ffa84e42bb98914c2.webp', alt: '久合手绘 - 手绘鞋履成品' },
  { src: 'f79e446d80ead37f6978258eeb7f3da1.webp', alt: '久合手绘 - 手绘箱包成品' },
  { src: 'cb2e95bd02deb794e452831102591828.webp', alt: '久合手绘 - 批量手绘加工' },
  { src: 'c97a8bec5695420cc38195b06d3b415c.webp', alt: '久合手绘 - 手绘作品合集' },
  { src: '581b94321m63fcd60097f0760ea262ce.webp', alt: '久合手绘 - 定制手绘案例' },
  { src: 'shoes-splatter.webp', alt: '久合手绘 - 泼墨风格鞋履喷绘' },
  { src: 'shoes-unique.webp', alt: '久合手绘 - 独特设计鞋履手绘' },
  { src: 'shoes-green.webp', alt: '久合手绘 - 绿色主题鞋履手绘' },
  { src: 'shoes-graffiti.webp', alt: '久合手绘 - 涂鸦风格鞋履喷绘' },
  { src: 'shoes-promo.webp', alt: '久合手绘 - 鞋履手绘定制展示' },
  { src: 'luggage-graffiti.webp', alt: '久合手绘 - 行李箱涂鸦手绘' },
  { src: 'bag-1.webp', alt: '久合手绘 - 帆布包手绘定制' },
  { src: 'bag-2.webp', alt: '久合手绘 - 手提包手绘图案' },
  { src: 'bag-3.webp', alt: '久合手绘 - 双肩包手绘定制' },
  { src: 'bag-4.webp', alt: '久合手绘 - 箱包手绘加工' },
  { src: 'clothes-extra.webp', alt: '久合手绘 - 服装手绘批量加工' },
  { src: 'workshop-1.webp', alt: '久合手绘喷绘厂 - 画师工作室' },
  { src: 'workshop-2.webp', alt: '久合手绘喷绘厂 - 生产车间' },
  { src: 'workshop-3.webp', alt: '久合手绘喷绘厂 - 工厂环境' },
];

const COLS = 6;
const groupCount = Math.ceil(images.length / COLS);

function getGroup(idx: number) {
  return Array.from({ length: COLS }, (_, i) =>
    images[(idx * COLS + i) % images.length]
  );
}

// Flatten all image indices for lightbox
const allImages = images.map((img) => ({
  src: `/images/${img.src}`,
  alt: img.alt,
}));

export default function GalleryCarousel() {
  const [group, setGroup] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const nextGroup = useCallback(() => {
    setGroup((prev) => (prev + 1) % groupCount);
  }, []);

  const prevGroup = useCallback(() => {
    setGroup((prev) => (prev - 1 + groupCount) % groupCount);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextGroup, 4500);
    return () => clearInterval(timer);
  }, [nextGroup]);

  const current = getGroup(group);

  const handleClick = (i: number) => {
    const globalIdx = (group * COLS + i) % images.length;
    setLightboxIdx(globalIdx);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="w-full bg-black p-2 overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 cursor-pointer">
          {current.map((img, i) => (
            <div
              key={`${group}-${i}`}
              className="relative aspect-[3/4] overflow-hidden rounded-sm group"
              onClick={() => handleClick(i)}
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
                  🔍 点击查看
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          {Array.from({ length: groupCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`第 ${i + 1} 组图片`}
              onClick={() => setGroup(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === group ? 'bg-yellow-500 w-6' : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>

        {/* 上一组 / 下一组 */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            aria-label="上一组图片"
            onClick={prevGroup}
            className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition text-sm"
          >
            ↑ 上一组
          </button>
          <button
            type="button"
            aria-label="下一组图片"
            onClick={nextGroup}
            className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition text-sm"
          >
            下一组 ↓
          </button>
        </div>
      </div>

      <Lightbox
        images={allImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIdx}
      />
    </>
  );
}

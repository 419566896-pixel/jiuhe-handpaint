'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const images: { src: string; alt: string }[] = [
  { src: 'IMG_1189.JPG', alt: '久合手绘 - 服装手绘作品' },
  { src: 'IMG_2619.JPG', alt: '久合手绘 - 衣服手绘定制案例' },
  { src: 'IMG_2626.JPG', alt: '久合手绘 - T恤手绘图案' },
  { src: 'IMG_3847.JPG', alt: '久合手绘 - 鞋子喷绘定制' },
  { src: 'IMG_3928.JPG', alt: '久合手绘 - 帆布鞋手绘作品' },
  { src: 'IMG_3952.JPG', alt: '久合手绘 - 鞋履手绘案例' },
  { src: 'IMG_4006.JPG', alt: '久合手绘 - 箱包手绘定制' },
  { src: 'IMG_4015.JPG', alt: '久合手绘 - 手提包手绘图案' },
  { src: 'IMG_4050.JPG', alt: '久合手绘 - 服装手绘加工' },
  { src: 'IMG_4108.JPG', alt: '久合手绘 - 卫衣手绘定制' },
  { src: 'IMG_4132.JPG', alt: '久合手绘 - 牛仔外套手绘' },
  { src: 'IMG_4222.JPG', alt: '久合手绘 - 国潮风格手绘' },
  { src: 'IMG_4316.JPG', alt: '久合手绘 - 卡通IP手绘' },
  { src: 'IMG_4651.JPG', alt: '久合手绘 - 油画风格手绘' },
  { src: 'IMG_4660.JPG', alt: '久合手绘 - 复古风格手绘' },
  { src: 'IMG_4662.JPG', alt: '久合手绘 - 潮牌手绘定制' },
  { src: 'IMG_4673.JPG', alt: '久合手绘 - 民族服饰手绘' },
  { src: 'IMG_4740.JPG', alt: '久合手绘 - 连衣裙手绘' },
  { src: 'IMG_5257.JPG', alt: '久合手绘 - 衬衫手绘定制' },
  { src: 'IMG_5865.JPG', alt: '久合手绘 - 汉服手绘定制' },
  { src: 'IMG_1967.JPG', alt: '久合手绘 - 童装手绘图案' },
  { src: 'IMG_1044.JPG', alt: '久合手绘 - 女装手绘案例' },
  { src: 'IMG_2623.JPG', alt: '久合手绘 - 裤子手绘定制' },
  { src: 'IMG_2625.JPG', alt: '久合手绘 - 箱包喷绘作品' },
  { src: 'IMG_2634.JPG', alt: '久合手绘 - 帆布包手绘' },
  { src: '0be0bef1cq9fda234fc86fd8cda5361b.JPG', alt: '久合手绘 - 手绘工艺特写' },
  { src: '71dab954a4e9dda0c2207a6d3ec02b92.JPG', alt: '久合手绘 - 手绘细节展示' },
  { src: '732758cc60f4781d90ae0d1bf014d639.JPG', alt: '久合手绘 - 画师手绘过程' },
  { src: '828c3961ac5d42bddc020a9125ce7577.JPG', alt: '久合手绘 - 手绘服装成品' },
  { src: '878efa812f2de18ffa84e42bb98914c2.JPG', alt: '久合手绘 - 手绘鞋履成品' },
  { src: 'f79e446d80ead37f6978258eeb7f3da1.JPG', alt: '久合手绘 - 手绘箱包成品' },
  { src: 'cb2e95bd02deb794e452831102591828.JPG', alt: '久合手绘 - 批量手绘加工' },
  { src: 'c97a8bec5695420cc38195b06d3b415c.PNG', alt: '久合手绘 - 手绘作品合集' },
  { src: '581b94321m63fcd60097f0760ea262ce.JPG', alt: '久合手绘 - 定制手绘案例' },
  { src: 'shoes-splatter.jpg', alt: '久合手绘 - 泼墨风格鞋履喷绘' },
  { src: 'shoes-unique.jpg', alt: '久合手绘 - 独特设计鞋履手绘' },
  { src: 'shoes-green.jpg', alt: '久合手绘 - 绿色主题鞋履手绘' },
  { src: 'shoes-graffiti.jpg', alt: '久合手绘 - 涂鸦风格鞋履喷绘' },
  { src: 'shoes-promo.jpg', alt: '久合手绘 - 鞋履手绘定制展示' },
  { src: 'luggage-graffiti.jpg', alt: '久合手绘 - 行李箱涂鸦手绘' },
  { src: 'bag-1.webp', alt: '久合手绘 - 帆布包手绘定制' },
  { src: 'bag-2.webp', alt: '久合手绘 - 手提包手绘图案' },
  { src: 'bag-3.webp', alt: '久合手绘 - 双肩包手绘定制' },
  { src: 'bag-4.webp', alt: '久合手绘 - 箱包手绘加工' },
  { src: 'clothes-extra.jpg', alt: '久合手绘 - 服装手绘批量加工' },
  { src: 'workshop-1.jpg', alt: '久合手绘喷绘厂 - 画师工作室' },
  { src: 'workshop-2.jpg', alt: '久合手绘喷绘厂 - 生产车间' },
  { src: 'workshop-3.jpg', alt: '久合手绘喷绘厂 - 工厂环境' },
];

const COLS = 6;
const groupCount = Math.ceil(images.length / COLS);

function getGroup(idx: number) {
  return Array.from({ length: COLS }, (_, i) =>
    images[(idx * COLS + i) % images.length]
  );
}

export default function GalleryCarousel() {
  const [group, setGroup] = useState(0);
  const [fading, setFading] = useState(false);

  const nextGroup = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setGroup((prev) => (prev + 1) % groupCount);
      setFading(false);
    }, 800);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextGroup, 4500);
    return () => clearInterval(timer);
  }, [nextGroup]);

  const current = getGroup(group);
  const next = getGroup((group + 1) % groupCount);

  return (
    <div className="w-full bg-black p-2 overflow-hidden">
      <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
        {/* Current group — fades out */}
        <div
          className="grid grid-cols-3 md:grid-cols-6 gap-2"
          style={{
            gridArea: 'stack',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.8s ease',
          }}
        >
          {current.map((img, i) => (
            <div key={`c-${group}-${i}`} className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 16vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Next group — fades in */}
        <div
          className="grid grid-cols-3 md:grid-cols-6 gap-2"
          style={{
            gridArea: 'stack',
            opacity: fading ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >
          {next.map((img, i) => (
            <div key={`n-${group}-${i}`} className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 16vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-4 flex-wrap">
        {Array.from({ length: groupCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setGroup(i);
              setFading(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === group ? 'bg-yellow-500 w-6' : 'bg-gray-600 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

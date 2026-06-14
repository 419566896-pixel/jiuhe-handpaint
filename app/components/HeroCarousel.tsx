'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  'IMG_1189.webp',
  'IMG_2619.webp',
  'IMG_2626.webp',
  'IMG_3847.webp',
  'IMG_3928.webp',
  'IMG_3952.webp',
  'IMG_4006.webp',
  'IMG_4015.webp',
  'IMG_4050.webp',
  'IMG_4108.webp',
  'IMG_4132.webp',
  'IMG_4222.webp',
  'IMG_4316.webp',
  'IMG_4651.webp',
  'IMG_4660.webp',
  'IMG_4662.webp',
  'IMG_4673.webp',
  'IMG_4740.webp',
  'IMG_5257.webp',
  'IMG_5865.webp',
  'IMG_1967.webp',
  'IMG_1044.webp',
  'IMG_2623.webp',
  'IMG_2625.webp',
  'IMG_2634.webp',
  '0be0bef1cq9fda234fc86fd8cda5361b.webp',
  '71dab954a4e9dda0c2207a6d3ec02b92.webp',
  '732758cc60f4781d90ae0d1bf014d639.webp',
  '828c3961ac5d42bddc020a9125ce7577.webp',
  '878efa812f2de18ffa84e42bb98914c2.webp',
  'f79e446d80ead37f6978258eeb7f3da1.webp',
  'cb2e95bd02deb794e452831102591828.webp',
  'c97a8bec5695420cc38195b06d3b415c.webp',
  '581b94321m63fcd60097f0760ea262ce.webp',
  'shoes-splatter.webp',
  'shoes-unique.webp',
  'shoes-green.webp',
  'shoes-graffiti.webp',
  'shoes-promo.webp',
  'luggage-graffiti.webp',
  'bag-1.webp',
  'bag-2.webp',
  'bag-3.webp',
  'bag-4.webp',
  'clothes-extra.webp',
  'workshop-1.webp',
  'workshop-2.webp',
  'workshop-3.webp',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Only render current + adjacent images for performance
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <>
      {visibleIndices.map((index) => (
        <div
          key={images[index]}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <Image
            src={`/images/${images[index]}`}
            alt="久合手绘喷绘厂 - 手绘服装鞋履箱包作品展示"
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : 'lazy'}
          />
        </div>
      ))}
    </>
  );
}

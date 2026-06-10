'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  'IMG_1189.JPG',
  'IMG_2619.JPG',
  'IMG_2626.JPG',
  'IMG_3847.JPG',
  'IMG_3928.JPG',
  'IMG_3952.JPG',
  'IMG_4006.JPG',
  'IMG_4015.JPG',
  'IMG_4050.JPG',
  'IMG_4108.JPG',
  'IMG_4132.JPG',
  'IMG_4222.JPG',
  'IMG_4316.JPG',
  'IMG_4651.JPG',
  'IMG_4660.JPG',
  'IMG_4662.JPG',
  'IMG_4673.JPG',
  'IMG_4740.JPG',
  'IMG_5257.JPG',
  'IMG_5865.JPG',
  'IMG_1967.JPG',
  'IMG_1044.JPG',
  'IMG_2623.JPG',
  'IMG_2625.JPG',
  'IMG_2634.JPG',
  '0be0bef1cq9fda234fc86fd8cda5361b.JPG',
  '71dab954a4e9dda0c2207a6d3ec02b92.JPG',
  '732758cc60f4781d90ae0d1bf014d639.JPG',
  '828c3961ac5d42bddc020a9125ce7577.JPG',
  '878efa812f2de18ffa84e42bb98914c2.JPG',
  'f79e446d80ead37f6978258eeb7f3da1.JPG',
  'cb2e95bd02deb794e452831102591828.JPG',
  'c97a8bec5695420cc38195b06d3b415c.PNG',
  '581b94321m63fcd60097f0760ea262ce.JPG',
  'shoes-splatter.png',
  'shoes-unique.png',
  'shoes-green.png',
  'shoes-graffiti.png',
  'shoes-promo.png',
  'luggage-graffiti.png',
  'bag-1.webp',
  'bag-2.webp',
  'bag-3.webp',
  'bag-4.webp',
  'clothes-extra.jpg',
  'workshop-1.jpg',
  'workshop-2.jpg',
  'workshop-3.jpg',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
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
            alt="手绘作品"
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

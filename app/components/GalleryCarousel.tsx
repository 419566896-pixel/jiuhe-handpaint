'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

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
  'shoes-splatter.jpg',
  'shoes-unique.jpg',
  'shoes-green.jpg',
  'shoes-graffiti.jpg',
  'shoes-promo.jpg',
  'luggage-graffiti.jpg',
  'bag-1.webp',
  'bag-2.webp',
  'bag-3.webp',
  'bag-4.webp',
  'clothes-extra.jpg',
  'workshop-1.jpg',
  'workshop-2.jpg',
  'workshop-3.jpg',
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
                src={`/images/${img}`}
                alt="手绘作品"
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
                src={`/images/${img}`}
                alt="手绘作品"
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

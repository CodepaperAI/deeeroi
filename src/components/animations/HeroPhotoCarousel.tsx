'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type HeroPhoto = {
  src: string;
  alt: string;
  label: string;
  eyebrow: string;
  objectPosition?: string;
};

type HeroPhotoCarouselProps = {
  photos: readonly HeroPhoto[];
  intervalMs?: number;
};

export default function HeroPhotoCarousel({
  photos,
  intervalMs = 4200,
}: HeroPhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (photos.length < 2) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (prefersReducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, photos.length]);

  return (
    <div className="absolute inset-0">
      {photos.map((photo, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            priority={index === 0}
            className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isActive ? 'scale-100 opacity-100' : 'scale-[1.035] opacity-0'
            }`}
            style={{ objectPosition: photo.objectPosition ?? 'center center' }}
            sizes="100vw"
          />
        );
      })}

      <div className="absolute bottom-6 left-6 z-10 hidden min-w-72 items-center justify-between gap-6 rounded-md border border-white/15 bg-black/30 px-4 py-3 text-white/70 backdrop-blur-md md:flex">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {activePhoto.eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{activePhoto.label}</p>
        </div>
        <span className="inline-flex gap-1.5" aria-hidden="true">
          {photos.map((photo, index) => (
            <span
              key={`${photo.src}-dot`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'w-5 bg-accent' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

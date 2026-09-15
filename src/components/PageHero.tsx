import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const DEFAULT_HERO_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  image,
  images,
  imageAlt = '',
  children
}) => {
  const heroList = images || (image ? [image] : [DEFAULT_HERO_IMAGES[0]]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (heroList.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroList.length]);

  return (
    <section className="relative overflow-hidden bg-[#042817] text-white">
      <div className="mesh-texture absolute inset-0 opacity-30"></div>
      
      {/* Full-width background image slideshow */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[56%] z-0 overflow-hidden">
        {heroList.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={imageAlt || `${title} background ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === heroIndex ? 'opacity-40 lg:opacity-70 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#042817] via-[#042817]/70 to-transparent lg:bg-gradient-to-r lg:from-[#042817] lg:via-[#042817]/80 lg:to-transparent"></div>
      </div>

      <div className="mx-auto max-w-container px-4 md:px-6 relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-2xl lg:max-w-3xl">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00d66c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d66c]"></span>
              {badge}
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.08]">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              {subtitle}
            </p>
            {children && <div className="mt-8">{children}</div>}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default PageHero;

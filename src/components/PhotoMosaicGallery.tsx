import React, { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

// Photography columns for the capsule photo mosaic
const GALLERY_COLUMNS = [
  // Column 1 (Moves upward slowly)
  {
    speedMultiplier: -120,
    images: [
      { src: '/images/pillar-training.jpg', alt: 'Field onboarding and training', height: 'h-[320px] sm:h-[380px]' },
      { src: '/images/hero-1.jpg', alt: 'Chaku Research team in plantain field', height: 'h-[360px] sm:h-[420px]' },
      { src: '/images/pillar-data.jpg', alt: 'Farmer data review session', height: 'h-[300px] sm:h-[360px]' },
      { src: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80', alt: 'Smallholder farm landscape', height: 'h-[340px] sm:h-[400px]' },
    ],
  },
  // Column 2 (Moves downward)
  {
    speedMultiplier: 140,
    images: [
      { src: '/images/pillar-market.jpg', alt: 'Market harvest plantain farmer', height: 'h-[360px] sm:h-[430px]' },
      { src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80', alt: 'Digital tablet field research', height: 'h-[300px] sm:h-[360px]' },
      { src: '/images/hero-2.jpg', alt: 'Farmers community gathering', height: 'h-[380px] sm:h-[450px]' },
      { src: '/images/pillar-weather.jpg', alt: 'Weather monitoring station', height: 'h-[310px] sm:h-[370px]' },
    ],
  },
  // Column 3 (Center prominent column - Moves upward faster)
  {
    speedMultiplier: -180,
    images: [
      { src: '/images/chaku-team-hero.jpg', alt: 'Chaku Research Institute team in field', height: 'h-[400px] sm:h-[490px]' },
      { src: '/images/pillar-training.jpg', alt: 'Farmer training workshop', height: 'h-[340px] sm:h-[410px]' },
      { src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80', alt: 'Field researchers on ground', height: 'h-[380px] sm:h-[460px]' },
      { src: '/images/pillar-data.jpg', alt: 'Record keeping under mango tree', height: 'h-[350px] sm:h-[420px]' },
    ],
  },
  // Column 4 (Moves downward)
  {
    speedMultiplier: 130,
    images: [
      { src: '/images/hero-3.jpg', alt: 'African smallholder farmer looking forward', height: 'h-[330px] sm:h-[390px]' },
      { src: '/images/pillar-weather.jpg', alt: 'Real-time weather station', height: 'h-[370px] sm:h-[440px]' },
      { src: '/images/pillar-market.jpg', alt: 'Harvest transport to market', height: 'h-[310px] sm:h-[370px]' },
      { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80', alt: 'Golden wheat and crop land', height: 'h-[350px] sm:h-[410px]' },
    ],
  },
  // Column 5 (Moves upward slowly)
  {
    speedMultiplier: -110,
    images: [
      { src: '/images/pillar-data.jpg', alt: 'Digital records collection', height: 'h-[310px] sm:h-[370px]' },
      { src: '/images/hero-1.jpg', alt: 'Farming family collaboration', height: 'h-[380px] sm:h-[440px]' },
      { src: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80', alt: 'Rural farmland landscape', height: 'h-[330px] sm:h-[390px]' },
      { src: '/images/pillar-training.jpg', alt: 'On-ground onboarding', height: 'h-[350px] sm:h-[420px]' },
    ],
  },
];

export const PhotoMosaicGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only update when section is near or in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress from 0 (section just entering from bottom) to 1 (section exiting top)
        const totalDistance = windowHeight + rect.height;
        const currentDistance = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        setScrollProgress(progress);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#031d11] py-24 sm:py-32 text-white border-y border-white/10"
    >
      {/* Background Glow & Subtle Texture */}
      <div className="mesh-texture absolute inset-0 opacity-20 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d66c]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="mx-auto max-w-container px-4 md:px-6 relative z-10">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#00a854] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              OUR IMPACT IN MOTION
            </span>
            <h2 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              On the ground with farming communities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              A visual glimpse into field research, digital data collection, and hands-on farmer onboarding across Sub-Saharan Africa.
            </p>
          </FadeIn>
        </div>

        {/* Multi-Column Animated Capsule Photo Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-start overflow-hidden py-4">
          {GALLERY_COLUMNS.map((column, colIdx) => {
            // Hide columns 4 & 5 on mobile/tablet to ensure crisp responsive layout
            const isDesktopOnly = colIdx >= 3;
            const isTabletOnly = colIdx === 2;

            const translateY = (scrollProgress - 0.5) * column.speedMultiplier;

            return (
              <div
                key={colIdx}
                className={`flex flex-col gap-5 sm:gap-6 transition-transform duration-200 ease-out ${
                  isDesktopOnly ? 'hidden lg:flex' : isTabletOnly ? 'hidden md:flex' : 'flex'
                }`}
                style={{
                  transform: `translate3d(0, ${translateY}px, 0)`,
                  willChange: 'transform',
                }}
              >
                {column.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className={`relative w-full ${img.height} rounded-full overflow-hidden border-2 border-white/10 shadow-2xl group cursor-pointer bg-[#063b22]`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042817]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-xs font-bold text-white tracking-wide uppercase">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoMosaicGallery;

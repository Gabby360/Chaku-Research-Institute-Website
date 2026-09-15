import React from 'react';
import { AFFILIATIONS } from '../data/content';

interface PartnersMarqueeProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({
  title = "Part of a global ecosystem of high-impact organizations",
  subtitle = "Committed to poverty alleviation at scale, alongside world-class academic institutions, research foundations, and innovation labs.",
  badge = "PARTNERS",
  className = "bg-[#fafaf7] py-16 md:py-24"
}) => {
  // Duplicate array for seamless infinite loop scroll
  const marqueeItems = [...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <section className={className}>
      <div className="mx-auto max-w-container px-4 md:px-6 mb-10 md:mb-14">
        {badge && (
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
            <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
            {badge}
          </div>
        )}
        {title && (
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Modern Continuous Infinite Scroll Track Container */}
      <div className="relative w-full overflow-hidden py-4 select-none group">
        {/* Soft Left & Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#fafaf7] via-[#fafaf7]/80 to-transparent z-20"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#fafaf7] via-[#fafaf7]/80 to-transparent z-20"></div>

        {/* Scrolling Inner Container */}
        <div className="flex w-max animate-marquee space-x-6 sm:space-x-8 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[240px] sm:w-[300px] rounded-[24px] bg-white border border-gray-200/80 px-7 py-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-[130px] sm:h-[150px] cursor-pointer"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 sm:max-h-20 max-w-[200px] sm:max-w-[250px] object-contain object-center transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="flex items-center gap-3 text-[#00a854]">
                  <i className="ri-award-line text-3xl"></i>
                  <span className="font-heading font-extrabold text-lg text-[#0d1712]">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Styles for Continuous Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersMarquee;

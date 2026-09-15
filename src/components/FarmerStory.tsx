import React from 'react';
import { FARMER_STORY_DOKU } from '../data/content';
import FadeIn from './FadeIn';

export const FarmerStory: React.FC = () => {
  return (
    <section className="bg-[#fafaf7] py-16 md:py-24 border-t border-gray-200/40 relative overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#00d66c]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#00a854]/10 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-container px-4 md:px-6 relative z-10">
        <FadeIn>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854] animate-pulse"></span>
              {FARMER_STORY_DOKU.eyebrow}
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0d1712]">
              {FARMER_STORY_DOKU.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              {FARMER_STORY_DOKU.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 md:mt-16 flex flex-col gap-16 lg:gap-24">
          {/* Story 1: Mr Stephen Doku (Image Left, Quote Right) */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Farmer Image */}
            <div className="lg:col-span-5">
              <FadeIn delay={100}>
                <div className="group relative overflow-hidden rounded-[32px] bg-gray-100 shadow-md h-[440px] sm:h-[500px] w-full border border-gray-200/60">
                  <img
                    src="/images/farmer-mango-tree.jpg"
                    alt={FARMER_STORY_DOKU.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042817]/30 via-transparent to-transparent"></div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Farmer Quote */}
            <div className="lg:col-span-7">
              <FadeIn delay={200}>
                <div className="rounded-[32px] bg-white p-8 sm:p-11 shadow-sm border-l-4 border-[#00d66c] border-y border-r border-gray-100/90 relative">
                  <i className="ri-double-quotes-l text-5xl text-[#00d66c] block mb-4 leading-none"></i>
                  <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                    "{FARMER_STORY_DOKU.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-gray-100">
                    <div className="text-[#00a854] font-bold font-heading text-base">
                      SD
                    </div>
                    <div>
                      <div className="font-heading text-[#00a854] font-extrabold text-base sm:text-lg">
                        {FARMER_STORY_DOKU.name}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Chaku Partner Farmer
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Story 2: Meet Mr. Amadou (Quote Left, Image Right) */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Farmer Quote (lg:order-1) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <FadeIn delay={200}>
                {/* Heading outside on top of the quote card */}
                <div className="mb-6">
                  <h3 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0d1712]">
                    Meet Mr. Amadou
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
                    One of thousands of farming families building a new economic future with the Chaku Foundation.
                  </p>
                </div>

                <div className="rounded-[32px] bg-white p-8 sm:p-11 shadow-sm border-l-4 border-[#00d66c] border-y border-r border-gray-100/90 relative">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-double-quotes-l text-5xl text-[#00d66c] leading-none"></i>
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#00a854] tracking-wider uppercase">
                      <i className="ri-arrow-up-line font-bold"></i> +40% YIELD INCREASE
                    </span>
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                    "Since using ChakuTech's mapping, my harvest yield has increased by 40%."
                  </p>
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-gray-100">
                    <div className="text-[#00a854] font-bold font-heading text-base">
                      MA
                    </div>
                    <div>
                      <div className="font-heading text-[#00a854] font-extrabold text-base sm:text-lg">
                        Mr. Amadou
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        Smallholder Farmer · Ghana
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Farmer Image (lg:order-2) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeIn delay={150}>
                <div className="group relative overflow-hidden rounded-[32px] bg-gray-100 shadow-md h-[440px] sm:h-[500px] w-full border border-gray-200/60">
                  <img
                    src="/images/farmer-mango-tree.jpg"
                    alt="Mr. Amadou, Ghana"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042817]/30 via-transparent to-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FarmerStory;

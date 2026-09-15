import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#fafaf7] py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[#032e19] p-8 sm:p-12 lg:p-16 text-white shadow-xl border border-white/10">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
              alt="Farmers in field landscape at dusk"
              className="h-full w-full object-cover object-right opacity-35 mix-blend-luminosity"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#032e19] via-[#032e19]/90 to-[#032e19]/40"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00d66c] block">
                  JOIN THE MISSION
                </span>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Help us bring AI-powered market access to the next 10,000 smallholder farmers across Africa.
                </h2>
                <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/75 max-w-xl">
                  The technology exists. The farmers are ready. We need partners who share our urgency.
                </p>
              </FadeIn>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-center items-stretch lg:items-end w-full">
              <FadeIn delay={150} className="w-full max-w-md">
                <Link
                  to="/get-involved"
                  className="w-full text-center rounded-2xl bg-[#00d66c] px-8 py-4 text-sm sm:text-base font-bold text-[#042817] transition-all hover:bg-[#00c261] shadow-md block"
                >
                  Partner with us
                </Link>
              </FadeIn>
              <FadeIn delay={250} className="w-full max-w-md">
                <Link
                  to="/donate"
                  className="w-full text-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/10 block"
                >
                  Donate to the Institute
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CHALLENGES,
  SOLUTIONS,
  AFFILIATIONS,
  IMPACT_COUNTER_GRID
} from '../data/content';
import FadeIn from '../components/FadeIn';
import CountUpNumber from '../components/CountUpNumber';

const HERO_IMAGES = [
  '/images/home-hero-new-1.jpg',
  '/images/home-hero-new-2.jpg',
  '/images/home-hero-new-3.jpg',
];

export const Home: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section (ACEYE-Inspired Centered Layout with Smooth Background Image Slider) */}
      <section className="relative overflow-hidden bg-[#042817] min-h-[580px] md:min-h-[660px] lg:h-[85vh] max-h-[800px] flex items-center justify-center text-white">
        {/* Background Image Slideshow Container */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((imgUrl, idx) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Chaku Research Hero Background Slide ${idx + 1}`}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[2500ms] ease-in-out ${
                idx === heroIndex
                  ? 'opacity-100 ken-burns-active z-0'
                  : 'opacity-0 pointer-events-none z-0'
              }`}
            />
          ))}
          {/* Dark Overlay with Directional Left Gradient for High Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#042817]/95 via-[#042817]/80 to-[#042817]/40 z-10"></div>
        </div>

        {/* Left-Aligned Hero Content Container (Matching reference site layout) */}
        <div className="mx-auto max-w-container w-full px-4 md:px-6 text-left relative z-20 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 flex flex-col items-start justify-center mt-4 md:mt-8">
          <FadeIn>
            {/* Giant Left-Aligned Heading */}
            <h1 className="font-manrope text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium tracking-tight text-white leading-[1.04] max-w-4xl drop-shadow-md">
              The future of<br />
              farming is <span className="font-newsreader italic font-normal text-[#00d66c]">data</span><br />
              <span className="font-newsreader italic font-normal text-[#00d66c]">driven.</span>
            </h1>

            {/* Left-Aligned Subtitle Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              Empowering smallholder farmers with the data, technology, and market access to maximize harvest yields and achieve long term prosperity.
            </p>

            {/* Left-Aligned Hero CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-4">
              {/* Primary Green Sharp Rectangular Button */}
              <Link
                to="/media"
                className="rounded-none bg-[#00d66c] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#042817] shadow-md transition-all duration-200 flex items-center gap-2.5 hover:bg-white hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE OUR RESEARCH</span>
                <i className="ri-arrow-right-up-line text-base font-bold"></i>
              </Link>

              {/* Secondary Outlined Sharp Rectangular Button with White Border */}
              <Link
                to="/impact"
                className="rounded-none bg-transparent border border-white px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-200 flex items-center gap-2.5 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VIEW OUR IMPACT REPORT</span>
                <i className="ri-arrow-right-up-line text-base font-bold text-white"></i>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Challenge (Screenshot 2) */}
      <section id="challenge" className="bg-[#fafcfb] py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a854]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a854]"></span>
                  THE CHALLENGE
                </span>
                <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[#042817] md:text-5xl leading-tight">
                  Wealth above the land is going to waste
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-700">
                  In Ghana, agriculture drives <strong className="text-[#042817] font-bold">~20% of GDP</strong> — yet the farmers who grow that food rarely share in its wealth.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-heading text-3xl font-extrabold text-[#00a854]">~20%</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-600">OF GHANA'S GDP</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-extrabold text-[#00a854]">~40%</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-600">OF CROPS LOST</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
              <FadeIn delay={150}>
                <div className="rounded-2xl border border-gray-200 bg-[#fbf9f6] p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <i className="ri-alert-line text-2xl text-[#855e32]"></i>
                    <h3 className="font-heading text-xl font-bold text-[#042817]">What farmers face</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    Smallholder farmers often lack access to accurate data, market connections, and coordinated selling systems. Without the ability to time their harvests or reach better markets, they are forced to sell when prices are low. As a result, up to <strong className="font-bold text-[#042817]">40% of crops</strong> are lost before reaching buyers, limiting income and long-term prosperity.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="rounded-2xl border-2 border-[#00d66c] bg-[#e8f8ee]/60 p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <i className="ri-plant-line text-2xl text-[#00a854]"></i>
                    <h3 className="font-heading text-xl font-bold text-[#042817]">What we do</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    Chaku Research Institute addresses these challenges by combining on-the-ground training, data collection, and digital tools to support smallholder farmers. Through farmer education, digital records, farm mapping, real-time weather insights, and certification support, we help farmers make better decisions, reduce losses, and access higher-value markets.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Scaling Farmer Economic Opportunity */}
      <section id="opportunity" className="relative overflow-hidden bg-[#042817] py-20 text-white md:py-28">
        {/* Background Image Layer with Dark Overlay */}
        <img
          src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80"
          alt="Scaling Farmer Economic Opportunity Background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-10 z-0"
        />
        <div className="mesh-texture absolute inset-0 opacity-30 z-0"></div>
        <div className="mx-auto max-w-container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d66c]">
              THE SCALING FARMER ECONOMIC OPPORTUNITY
            </span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-tight">
              Billions in potential farmer income — <span className="font-serif italic text-[#00d66c] font-normal">going to waste.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Higher farmer income improves children's education, cushions emergency shocks, and sustains generational farming.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {/* Card 01 - Level 1 Baseline */}
            <FadeIn delay={0} className="h-full lg:h-auto">
              <div className="rounded-3xl border border-white/10 bg-[#063b22] p-8 shadow-sm flex flex-col justify-between min-h-[240px] lg:h-[280px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-white/20 group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white/40">01</span>
                    <i className="ri-coins-line text-2xl text-[#00d66c] group-hover:scale-110 transition-transform"></i>
                  </div>
                  <div className="mt-6 font-heading text-5xl font-black tracking-tight text-white">
                    <CountUpNumber value={40} suffix="%" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold leading-relaxed text-white/70">
                  Current daily farmer income
                </p>
              </div>
            </FadeIn>

            {/* Card 02 - Level 2 */}
            <FadeIn delay={100} className="h-full lg:h-auto">
              <div className="rounded-3xl border border-white/15 bg-[#084c2d] p-8 shadow-md flex flex-col justify-between min-h-[280px] lg:h-[340px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-white/25 group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white/50">02</span>
                    <i className="ri-arrow-up-double-line text-2xl text-[#00d66c] group-hover:scale-110 transition-transform"></i>
                  </div>
                  <div className="mt-8 font-heading text-5xl font-black tracking-tight text-white">
                    <CountUpNumber displayText="$XX" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold leading-relaxed text-white/80">
                  Farmer income growth increase through Chaku Research interventions
                </p>
              </div>
            </FadeIn>

            {/* Card 03 - Level 3 */}
            <FadeIn delay={200} className="h-full lg:h-auto">
              <div className="rounded-3xl border border-[#00a854] bg-[#00a854] p-8 shadow-lg flex flex-col justify-between min-h-[320px] lg:h-[400px] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white/70">03</span>
                    <i className="ri-percent-line text-2xl text-white group-hover:scale-110 transition-transform"></i>
                  </div>
                  <div className="mt-10 font-heading text-5xl lg:text-6xl font-black tracking-tight text-white">
                    <CountUpNumber value={20} suffix="%" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-bold leading-relaxed text-white/90">
                  Percentage increase
                </p>
              </div>
            </FadeIn>

            {/* Card 04 - Level 4 (Highest Growth Peak) */}
            <FadeIn delay={300} className="h-full lg:h-auto">
              <div className="rounded-3xl bg-[#00d66c] p-8 shadow-2xl flex flex-col justify-between min-h-[360px] lg:h-[460px] text-[#042817] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00d66c]/30 group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-extrabold text-[#042817]/60">04</span>
                    <i className="ri-global-line text-2xl text-[#042817] group-hover:scale-110 transition-transform"></i>
                  </div>
                  <div className="mt-12 font-heading text-5xl lg:text-6xl font-black tracking-tight text-[#042817]">
                    <CountUpNumber value={50} suffix="M+" />
                  </div>
                </div>
                <p className="mt-4 text-xs font-extrabold leading-relaxed text-[#042817]">
                  Smallholder farms across sub-Saharan Africa
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: Our Core Pillars */}
      <section id="pillars" className="bg-[#fafcfb] py-20 md:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a854]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a854]"></span>
              OUR CORE PILLARS
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[#042817] md:text-5xl leading-tight">
              Training and agritech tools that turn information into income
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
              Chaku Research Institute equips smallholder farmers with training and agritech tools to improve productivity and decision-making. Through data, weather insights, and certification support, farmers can reduce risk and access better markets.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1: Digital Records & Data */}
            <FadeIn delay={0}>
              <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00d66c] hover:shadow-xl group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src="/images/pillar-data.jpg"
                      alt="Digital Records & Data"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <i className="ri-database-2-line text-2xl text-[#00a854]"></i>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#042817]">Digital Records & Data</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Digitalized farmer records that streamline communication and create accurate, reliable identification.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 2: Training & Onboarding */}
            <FadeIn delay={100}>
              <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00d66c] hover:shadow-xl group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src="/images/pillar-training.jpg"
                      alt="Training & Onboarding"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <i className="ri-graduation-cap-line text-2xl text-[#00a854]"></i>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#042817]">Training & Onboarding</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      In-person onboarding and continuous skill-building so farmers get the most from every tool.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 3: Weather & Climate Insights */}
            <FadeIn delay={200}>
              <div className="h-full overflow-hidden rounded-2xl border-2 border-[#00d66c] bg-white shadow-lg relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src="/images/pillar-weather.jpg"
                      alt="Weather & Climate Insights"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <i className="ri-sun-cloudy-line text-2xl text-[#00a854]"></i>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#042817]">Weather & Climate Insights</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Real-time weather alerts via calls or SMS help farmers act before conditions turn.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 4: Certification & Market Access */}
            <FadeIn delay={300}>
              <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00d66c] hover:shadow-xl group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src="/images/pillar-market.jpg"
                      alt="Certification & Market Access"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <i className="ri-award-line text-2xl text-[#00a854]"></i>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#042817]">Certification & Market Access</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Support to meet USDA and GlobalG.A.P. standards, opening the door to export markets.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section Divider between Core Pillars and ChakuTech */}
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="border-t border-gray-200/80 w-full"></div>
      </div>

      {/* Section 7: ChakuTech Engine */}
      <section id="chakutech" className="relative overflow-hidden bg-[#fafcfb] pt-0 pb-16 md:pb-24">
        {/* Left Content Column inside Standard Container */}
        <div className="mx-auto max-w-container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 pt-12 md:pt-16 pb-6 lg:pb-12">
              <FadeIn>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a854]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a854]"></span>
                  CHAKUTECH
                </span>
                <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[#042817] md:text-5xl leading-tight">
                  The technology engine behind the field
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-700">
                  ChakuTech is the agricultural technology platform at the heart of both Chaku Foods and Chaku Research Institute, built to drive on-ground data collection. It maps farms and analyzes land and crop data to give precise information on yields, traceability, and timing, so farmers and buyers can plan ahead, reduce loss, and connect more easily with markets.
                </p>

                <div className="mt-8">
                  <a
                    href="https://www.chakufoods.com/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#00a854] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#00a854]/20 transition-all duration-300 hover:bg-[#042817] hover:shadow-lg group"
                  >
                    <span>Visit ChakuTech</span>
                    <i className="ri-arrow-right-up-line text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"></i>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Right Image breaking out flush to the viewport's rightmost edge and touching top divider */}
        <div className="relative mt-4 lg:mt-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-1/2 flex items-start justify-center lg:justify-end z-0 pointer-events-none">
          <FadeIn delay={200} className="w-full flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[560px] lg:max-w-none lg:w-full lg:h-full flex items-start justify-center lg:justify-end">
              <img
                src="/images/chakutech-app-phone.png"
                alt="ChakuTech Mobile App"
                className="w-full h-auto lg:max-h-full lg:w-auto object-contain object-right-top pointer-events-auto [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,rgba(0,0,0,0.85)_75%,rgba(0,0,0,0.4)_88%,rgba(0,0,0,0.1)_96%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,rgba(0,0,0,0.85)_75%,rgba(0,0,0,0.4)_88%,rgba(0,0,0,0.1)_96%,rgba(0,0,0,0)_100%)]"
              />
              {/* Ultra-soft feathered bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 md:h-36 bg-gradient-to-t from-[#fafcfb] via-[#fafcfb]/60 via-[#fafcfb]/20 to-transparent pointer-events-none z-10"></div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
export default Home;

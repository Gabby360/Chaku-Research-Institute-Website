import React from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import FarmerStory from '../components/FarmerStory';
import CountUpNumber from '../components/CountUpNumber';
import AnimatedProgressBar from '../components/AnimatedProgressBar';

export const Impact: React.FC = () => {
  const globalImpactScaleCards = [
    {
      numericValue: 2000,
      suffix: '+',
      title: 'Farmers Onboarded',
      description: 'Digitalized records and in-person onboarding across partner communities.',
      image: '/images/pillar-data.jpg',
    },
    {
      numericValue: 10000,
      suffix: '+',
      title: 'Acres of Farms Mapped',
      description: 'Geo-pin mapping of farm boundaries for fertilizer and resource planning.',
      image: '/images/hero-our-work.jpg',
    },
    {
      numericValue: 500,
      suffix: '+',
      title: 'Farmers Certified',
      description: 'Supported to meet USDA and GlobalG.A.P. standards for export access.',
      image: '/images/pillar-market.jpg',
    },
    {
      numericValue: 300,
      suffix: '+',
      title: 'Farmers Trained',
      description: 'Hands-on capacity building, including women farmers.',
      image: '/images/pillar-training.jpg',
    },
  ];

  const progressMetrics = [
    { label: 'Active Farmers', value: 2000, suffix: '+', progressPercent: 38 },
    { label: 'Acres of Farms Mapped', value: 10000, suffix: '+', progressPercent: 95 },
    { label: 'Farmers Certified', value: 500, suffix: '+', progressPercent: 48 },
    { label: 'Stations Online', value: 3, suffix: '', progressPercent: 65 },
  ];

  return (
    <>
      {/* 1. Dark Hero Section */}
      <PageHero
        badge="IMPACT"
        title="Impact you can measure, family by family"
        subtitle="From farmers onboarded to acres mapped and communities certified, our work shows up in numbers that translate directly into stronger livelihoods."
        image="/images/hero-impact.jpg"
        imageAlt="Impact you can measure, family by family"
      />

      {/* 2. Global Impact Scale (4 Creative Animated Card Grid) */}
      <section className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
              IMPACT
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-[#0d1712] tracking-tight">
              Global impact scale
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Every number is a farming family with better information in hand — measured on the ground, acre by acre.
            </p>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalImpactScaleCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="group relative min-h-[380px] sm:min-h-[420px] rounded-[28px] overflow-hidden border border-gray-200/60 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col justify-end p-6 sm:p-7">
                  {/* Clear Full Background Image with dynamic hover zoom */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  />
                  {/* Soft subtle bottom gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#042817]/95 via-[#042817]/60 to-transparent z-10"></div>

                  {/* Content Layer with Animated CountUp Number */}
                  <div className="relative z-20">
                    <div className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                      <CountUpNumber value={card.numericValue} suffix={card.suffix} formatWithComma={true} />
                    </div>
                    <h3 className="mt-2.5 font-heading text-xl font-extrabold text-white tracking-snug drop-shadow-sm">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/90 leading-relaxed font-normal drop-shadow-xs">
                      {card.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Reach Behind the Record Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  SCALE
                </div>
                <h2 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1712] tracking-tight leading-[1.1]">
                  The reach behind the record
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Onboarding, mapping, certification and training move together. As records grow, so does the value each farmer can unlock from their land.
                </p>

              </FadeIn>
            </div>

            {/* Right Column: Creative Animated Metrics Card */}
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="rounded-[28px] bg-white p-7 sm:p-9 shadow-md border border-gray-200/60 flex flex-col gap-6 sm:gap-7">
                  {progressMetrics.map((metric, idx) => (
                    <AnimatedProgressBar
                      key={idx}
                      label={metric.label}
                      value={metric.value}
                      suffix={metric.suffix}
                      progressPercent={metric.progressPercent}
                      delay={idx * 150}
                    />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Farmer Story Section */}
      <FarmerStory />

      {/* 5. Where We Work / Map Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24 border-t border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  WHERE WE WORK
                </div>
                <h2 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight leading-[1.15]">
                  Rooted in Accra, reaching across Ghana
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our field teams work directly with smallholder farming communities, mapping farms, collecting data, and delivering training where it matters most.
                </p>

                {/* Headquarters Info */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="text-[#00a854] flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-2-fill text-2xl"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 block">
                      HEADQUARTERS
                    </span>
                    <span className="font-heading text-base sm:text-lg font-bold text-[#0d1712] block mt-0.5">
                      Accra, Ghana
                    </span>
                  </div>
                </div>

                {/* Email Info */}
                <div className="mt-5 flex items-center gap-4">
                  <div className="text-[#00a854] flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-2xl"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 block">
                      EMAIL
                    </span>
                    <a
                      href="mailto:contact@chakufoundation.org"
                      className="font-heading text-base sm:text-lg font-bold text-[#0d1712] hover:text-[#00a854] transition-colors block mt-0.5"
                    >
                      contact@chakufoundation.org
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Google Map Embed */}
            <div className="lg:col-span-7">
              <FadeIn delay={150}>
                <div className="rounded-[28px] overflow-hidden shadow-sm border border-gray-200/80 h-[440px] lg:h-[480px] relative w-full bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254167.34685376517!2d-0.2747306!3d5.591322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Accra, Ghana"
                  ></iframe>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Impact;

import React from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import DonateForm from '../components/DonateForm';

export const Donate: React.FC = () => {
  return (
    <>
      <PageHero
        badge="Donate"
        title="Donate to the Institute"
        subtitle="Help us bring AI-powered market access to the next 10,000 smallholder farmers across Africa. The technology exists. The farmers are ready."
      />

      {/* Feature Highlights Section: Spreads full-width across site + Text-Free Transparent Leaf Watermark Patterns */}
      <section className="relative overflow-hidden bg-background-50 py-16 md:py-24 border-b border-background-200">
        {/* Creative Leaf Pattern Watermark Accents (Pure logo mark, NO text) */}
        <div className="pointer-events-none absolute -right-16 top-10 z-0 h-[400px] w-[400px] opacity-[0.12] select-none transform rotate-12">
          <img src="/images/chaku-leaf-mark.png" alt="" className="h-full w-full object-contain" />
        </div>
        <div className="pointer-events-none absolute -left-20 bottom-8 z-0 h-[450px] w-[450px] opacity-[0.09] select-none transform -rotate-12">
          <img src="/images/chaku-leaf-mark.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div className="mx-auto max-w-container px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="space-y-12 md:space-y-14">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <i className="ri-line-chart-line text-4xl text-[#00a854]"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950">
                    Direct Farmer Empowerment
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground-600">
                    100% of your contributions go directly into field deployment, empowering smallholder farming communities across Ghana and West Africa. Every dollar received funds hands-on agronomic training, digital record onboarding, soil chemistry analysis, and microclimate forecasting. By providing smallholders with real-time agricultural intelligence and GPS boundary mapping, we help farming families transition from subsistence operations to high-yield, commercially viable enterprises with direct access to regional and international markets.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <i className="ri-shield-keyhole-line text-4xl text-[#00a854]"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950">
                    100% Transparency & Data Security
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground-600">
                    We uphold rigorous non-profit data stewardship and transparent financial auditing across all our regional research hubs. Every donated dollar is tracked to ensure maximum impact on ground operations, equipment deployment, and extension officer training. Furthermore, all smallholder farm records, land boundary data, and yield diagnostics collected in the field are encrypted and protected under strict ethical data governance, ensuring farmers retain ownership of their agricultural assets.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <i className="ri-global-line text-4xl text-[#00a854]"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-950">
                    Scalable Agricultural Innovation
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground-600">
                    By bridging the technological divide between rural smallholders and premium international buyers, your support unlocks self-sustaining agricultural ecosystems. We deploy open-source agritech sensors, satellite imagery analytics, and export compliance verification models that scale seamlessly across farming clusters. This modern data architecture reduces post-harvest losses, improves crop traceability, and guarantees fair trade pricing for thousands of farming families.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="relative overflow-hidden bg-background-50 py-16 md:py-24">
        {/* Creative Leaf Pattern Background (Pure logo mark, NO text) */}
        <div className="pointer-events-none absolute right-[-60px] top-1/2 -translate-y-1/2 z-0 h-[500px] w-[500px] opacity-[0.08] select-none">
          <img src="/images/chaku-leaf-mark.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div className="mx-auto max-w-3xl px-4 md:px-6 relative z-10">
          <FadeIn delay={150}>
            <DonateForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Donate;

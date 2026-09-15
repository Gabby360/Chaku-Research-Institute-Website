import React from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';

export const OurWork: React.FC = () => {
  return (
    <>
      {/* Dark Hero Section */}
      <PageHero
        badge="OUR WORK"
        title="Global impact, built program by program"
        subtitle="Digital records, farm mapping, certification support, weather insight and community training — combined to help farmers make better decisions and reach higher-value markets."
        image="/images/hero-our-work.jpg"
        imageAlt="Global impact program"
      />

      {/* Main Content Header */}
      <section className="bg-[#fafcfb] pt-16 pb-10 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a854]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a854]"></span>
                OUR WORK
              </span>
              <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[#042817] md:text-5xl leading-[1.1]">
                Global impact, farmer onboarding and training
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
                Five connected programs carry ChakuTech from the research lab to the field — digitalizing records, mapping land, testing weather technology, and training the next generation of farmers.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Alternating Feature Blocks (All 5 Programs) */}
      <section className="bg-[#fafcfb] pb-20 md:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6 flex flex-col gap-20 md:gap-28">
          
          {/* Block 1: Farmer Onboarding & Training */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=Group%20of%20African%20male%20and%20female%20smallholder%20farmers%20standing%20together%20in%20a%20green%20farm%20field%20looking%20attentive%20during%20a%20training%20session%20cinematic%20quality&width=1000&height=750&seq=0&orientation=landscape"
                    alt="Farmer Onboarding & Training"
                    className="h-[360px] w-full object-cover md:h-[440px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-user-add-line text-2xl text-[#00a854]"></i>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    GLOBAL IMPACT
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#042817] md:text-4xl leading-tight">
                  Farmer Onboarding & Training
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  Chaku Research Institute digitalizes farmer records to facilitate streamlined communication, accurate and reliable identification mechanisms through in-person onboarding.
                </p>
                <div className="mt-6 inline-flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-extrabold text-[#00a854]">2,000+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">ACTIVE FARMERS</span>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Block 2: Compliance with Certifications */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeIn delay={150}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-shield-check-line text-2xl text-[#00a854]"></i>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    COMPLIANCE
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#042817] md:text-4xl leading-tight">
                  Compliance with Certifications
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  We train and support farmers to meet USDA and GlobalG.A.P. standards, simplifying certification and improving access to export markets.
                </p>
                <div className="mt-6 inline-flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-extrabold text-[#00a854]">500+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">FARMERS CERTIFIED</span>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=Two%20African%20male%20agricultural%20extension%20officers%20wearing%20caps%20in%20a%20lush%20green%20banana%20plantain%20farm%20inspecting%20crops%20with%20a%20clipboard%20cinematic%20quality&width=1000&height=750&seq=0&orientation=landscape"
                    alt="Compliance with Certifications"
                    className="h-[360px] w-full object-cover md:h-[440px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Block 3: Farm Traceability & Location Mapping */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=Stunning%20aerial%20drone%20view%20of%20contour%20mapped%20green%20farm%20fields%20with%20red%20dirt%20paths%20in%20Ghana%20morning%20mist%20cinematic%20quality&width=1000&height=750&seq=0&orientation=landscape"
                    alt="Farm Traceability & Location Mapping"
                    className="h-[360px] w-full object-cover md:h-[440px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-map-pin-2-line text-2xl text-[#00a854]"></i>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    MAPPING
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#042817] md:text-4xl leading-tight">
                  Farm Traceability & Location Mapping
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  Our field agents precisely map each farmer's land boundaries using geo-pin mapping tools to equip them with necessary data to optimize application of fertilizer and resources.
                </p>
                <div className="mt-6 inline-flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-extrabold text-[#00a854]">10,000+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">ACRES MAPPED</span>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Block 4: Real-Time Weather Monitoring */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeIn delay={150}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-temp-cold-line text-2xl text-[#00a854]"></i>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    CLIMATE DATA
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#042817] md:text-4xl leading-tight">
                  Real-Time Weather Monitoring
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  We are testing weather meter technology that sends real-time alerts via calls or SMS, helping farmers make better decisions and reduce crop loss.
                </p>
                <div className="mt-6 inline-flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-extrabold text-[#00a854]">3</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">STATIONS ONLINE</span>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=African%20male%20farmer%20standing%20in%20a%20green%20field%20using%20a%20mobile%20smartphone%20next%20to%20a%20solar%20powered%20agritech%20weather%20station%20cinematic%20quality&width=1000&height=750&seq=0&orientation=landscape"
                    alt="Real-Time Weather Monitoring"
                    className="h-[360px] w-full object-cover md:h-[440px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Block 5: Community Training & Supporting Women Farmers */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=Group%20of%20empowered%20African%20women%20farmers%20learning%20sustainable%20agriculture%20techniques%20in%20a%20vibrant%20green%20farm%20field%20in%20Ghana%20smiling%20cinematic%20quality&width=1000&height=750&seq=0&orientation=landscape"
                    alt="Community Training & Supporting Women Farmers"
                    className="h-[360px] w-full object-cover md:h-[440px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-graduation-cap-line text-2xl text-[#00a854]"></i>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    TRAINING
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#042817] md:text-4xl leading-tight">
                  Community Training & Supporting Women Farmers
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  We provide revolutionary training, supplying capacity and skill-building support, while teaching farmers how to maximize ChakuTech’s use on their farms.
                </p>
                <div className="mt-6 inline-flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-extrabold text-[#00a854]">300+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">FARMERS TRAINED</span>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
export default OurWork;

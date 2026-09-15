import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import PartnersMarquee from '../components/PartnersMarquee';
import { AFFILIATIONS } from '../data/content';

export const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const teamMembers = [
    {
      name: 'Nikki Okrah',
      role: 'Founder & CEO',
      image: '/images/team-nikki.jpg',
      imageClass: 'h-full w-full object-cover object-[center_12%]',
    },
    {
      name: 'Randy Mensah',
      role: 'Operations',
      image: '/images/team-randy.jpg',
      imageClass: 'h-full w-full object-cover object-center',
    },
    {
      name: 'Israel Tetteh',
      role: 'Technology & Field Lead',
      image: '/images/home-hero-new-3.jpg',
      imageClass: 'h-full w-full object-cover object-center',
    },
  ];

  const governanceMembers = [
    {
      name: 'Dr. Kwaku Mensah',
      role: 'Board Chair & Policy Advisor',
      image: '/images/hero-about.jpg',
    },
    {
      name: 'Abena Osei-Poku',
      role: 'Financial Stewardship Advisor',
      image: '/images/pillar-data.jpg',
    },
    {
      name: 'Prof. David K. Asante',
      role: 'Agritech & Research Advisor',
      image: '/images/pillar-market.jpg',
    },
  ];

  return (
    <>
      {/* 1. Dark Hero Section */}
      <PageHero
        badge="ABOUT US"
        title="Data, training and technology for farming families"
        subtitle="Our story, our mission, and the people working alongside rural smallholder farmers to turn better information into lasting prosperity."
        image="/images/hero-about.jpg"
        imageAlt="Data, training and technology for farming families"
      />

      {/* 2. Our Story Section */}
      <section id="story" className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  OUR STORY
                </div>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight leading-[1.12]">
                  From better information to lasting economic prosperity
                </h2>
                <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Chaku Foods was founded to address a key challenge in agriculture — farmers often lack the data and market access needed to maximize their yields and income. By using technology, Chaku Tech, to map farms and generate crop insights, it began helping farmers make more informed decisions and reduce losses.
                </p>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  As the work grew, it became clear that farmers also needed on-the-ground support to fully benefit from these tools. Chaku Research Institute was established to provide training, collect field data, and support certification and market access. This ensures farmers can turn better information into lasting economic prosperity.
                </p>
              </FadeIn>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="rounded-[32px] overflow-hidden border border-gray-200/60 shadow-xs h-[380px] md:h-[460px] w-full">
                  <img
                    src="/images/our-story-about.jpg"
                    alt="Chaku Research Institute team members in discussion on the ground"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section id="mission" className="bg-[#fafaf7] py-12 md:py-16 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Our Mission */}
            <FadeIn delay={100}>
              <div className="rounded-[28px] bg-[#eaf8f0] border-2 border-[#00d66c]/30 p-8 sm:p-9 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#00a854] flex items-center shrink-0 mb-3">
                    <i className="ri-focus-3-line text-3xl"></i>
                  </div>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                    Our Mission
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To use digital records and data-driven insights to deliver targeted training and support that enables rural smallholder farmers to maximize yields and improve their incomes.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Our Vision */}
            <FadeIn delay={200}>
              <div className="rounded-[28px] bg-[#eaf8f0] border-2 border-[#00d66c]/30 p-8 sm:p-9 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#00a854] flex items-center shrink-0 mb-3">
                    <i className="ri-eye-line text-3xl"></i>
                  </div>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                    Our Vision
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    A future where every smallholder farmer leverages data and technology to achieve sustainable harvests and long-term economic prosperity.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Who We Are Section */}
      <section id="who-we-are" className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column Image */}
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="rounded-[32px] overflow-hidden border border-gray-200/60 shadow-xs h-[380px] md:h-[460px] w-full">
                  <img
                    src="/images/who-we-are-about.jpg"
                    alt="Agricultural experts and field researchers on the ground"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6">
              <FadeIn delay={150}>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  WHO WE ARE
                </div>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight leading-[1.12]">
                  Agricultural experts and field researchers, on the ground
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  Chaku Research Institute is a nonprofit organization working directly with rural smallholder farmers to provide practical tools, training, and support. Our team brings together agricultural experts and field researchers to gather insights on the ground and help farmers increase yields, improve incomes, and build stronger, more resilient communities.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Coliba-Style Sticky Video Parallax & A Family of Organizations Section */}
      <section className="relative bg-[#fafaf7] border-b border-gray-200/40">
        {/* Sticky Background Video Canvas Layer */}
        <div className="sticky top-0 h-[65vh] sm:h-[72vh] min-h-[500px] max-h-[720px] w-full bg-[#042817] flex items-center justify-center overflow-hidden z-0">
          {isVideoPlaying ? (
            <div className="absolute inset-0 w-full h-full bg-black z-20">
              <iframe
                src="https://www.youtube-nocookie.com/embed/DML_RpgUqoI?autoplay=1&rel=0"
                title="Chaku Foods Official Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-6 right-6 z-30 rounded-full bg-black/80 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 hover:bg-black transition-all flex items-center gap-1.5 shadow-xl"
              >
                <i className="ri-close-line text-lg"></i> Close Video
              </button>
            </div>
          ) : (
            <>
              {/* Background Video Thumbnail Image with Dark Gradient Overlay */}
              <img
                src="https://img.youtube.com/vi/DML_RpgUqoI/maxresdefault.jpg"
                alt="Chaku Foods Video"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-80 scale-105 transition-transform duration-1000 hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>

              {/* Centered Title & Iconic Coliba Centered Red Play Button */}
              <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
                  A family of organizations, one shared mission
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-medium">
                  Chaku Foods builds the technology. Chaku Research Institute brings it to the field.
                </p>

                {/* Coliba Centered Red Play Button */}
                <div
                  onClick={() => setIsVideoPlaying(true)}
                  className="group mt-8 cursor-pointer relative flex items-center justify-center"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Outer Pulsing Ring */}
                    <div className="absolute h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-red-600/30 animate-ping pointer-events-none"></div>
                    {/* Translucent Ring */}
                    <div className="absolute h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white/25 border border-white/40 backdrop-blur-xs transition-transform duration-500 group-hover:scale-110"></div>
                    {/* Solid Red Play Icon */}
                    <div className="relative h-18 w-18 sm:h-24 sm:w-24 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-4xl sm:text-5xl shadow-2xl shadow-red-600/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e60000]">
                      <i className="ri-play-fill ml-1.5"></i>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Solid White Cards Section (Relative z-10 bg-[#fafaf7]) - Slides UP & Passes OVER Top of the Fixed Video Background */}
        <div className="relative z-10 bg-[#fafaf7] py-16 md:py-24 rounded-t-[36px] shadow-2xl border-t border-gray-200/70">
          <div className="mx-auto max-w-container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {/* Card 1: Chaku Foods */}
              <FadeIn delay={100}>
                <div className="rounded-[28px] bg-white p-7 sm:p-9 border border-gray-200/80 shadow-lg flex flex-col justify-between h-full transition-transform hover:-translate-y-1">
                  <div>
                    <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-3">
                      <i className="ri-building-2-line text-3xl"></i>
                    </div>
                    <h4 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                      Chaku Foods
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Chaku Foods is a for-profit company that has developed an AI/ML crop yield prediction platform to make crop quality and quantity data easily accessible, serving farmers, cooperatives, governments, and food companies.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: ChakuTech */}
              <FadeIn delay={200}>
                <div className="rounded-[28px] bg-white p-7 sm:p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between h-full transition-transform hover:-translate-y-1">
                  <div>
                    <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-3">
                      <i className="ri-cpu-line text-3xl"></i>
                    </div>
                    <h4 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                      ChakuTech
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      ChakuTech is the technology platform developed by Chaku Foods to map farms, collect field data, and generate actionable insights that help farmers improve yields and reduce losses.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Chaku Research Institute */}
              <FadeIn delay={300}>
                <div className="rounded-[28px] bg-white p-7 sm:p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between h-full transition-transform hover:-translate-y-1">
                  <div>
                    <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-3">
                      <i className="ri-seedling-line text-3xl"></i>
                    </div>
                    <h4 className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                      Chaku Research Institute
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Chaku Research Institute is a 501c3 nonprofit organization working directly with smallholder farmers to provide practical tools, field training, certification support, and market access.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Team Section */}
      <section id="team" className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  THE TEAM
                </div>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight">
                  The people behind the field work
                </h2>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="overflow-hidden rounded-[28px] bg-white border border-gray-200/60 shadow-xs flex flex-col justify-between h-full">
                  <div className="h-[340px] w-full bg-[#042817] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={member.imageClass || "h-full w-full object-cover object-center"}
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-xl font-extrabold text-[#0d1712]">
                      {member.name}
                    </h3>
                    <span className="mt-1 text-sm text-gray-500 block font-medium">
                      {member.role}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. Governance Section */}
      <section id="governance" className="bg-white py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  GOVERNANCE
                </div>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight">
                  Board & Governance
                </h2>
                <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
                  Distinguished leaders and advisors providing strategic oversight, financial stewardship, and ethical data governance for Chaku Research Institute.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {governanceMembers.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="overflow-hidden rounded-[28px] bg-[#fafaf7] border border-gray-200/60 shadow-xs flex flex-col justify-between h-full">
                  <div className="h-[300px] w-full bg-[#042817] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top filter brightness-95"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-xl font-extrabold text-[#0d1712]">
                      {member.name}
                    </h3>
                    <span className="mt-1 text-sm text-gray-500 block font-medium">
                      {member.role}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partners Marquee Section */}
      <PartnersMarquee />
    </>
  );
};
export default About;

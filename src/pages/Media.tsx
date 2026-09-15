import React from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import NewsletterSection from '../components/NewsletterSection';

export const Media: React.FC = () => {
  const awardsAndUpdates = [
    {
      category: 'RESEARCH',
      date: 'April 9, 2026',
      title: 'AI-Driven Yield Prediction for Smallholder Farming Systems',
      image:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
      summary:
        'Evaluating the field performance of ChakuTech machine learning framework in mapping farm boundaries and predicting crop yields.',
    },
    {
      category: 'FIELD REPORT',
      date: 'April 9, 2026',
      title: 'Intercropping Systems (Cocoa–Plantain) and Income Diversification',
      image:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      summary:
        'Field evidence on how secondary crops can double farmer income when linked to optimized supply routes and buyers.',
    },
    {
      category: 'INSIGHT',
      date: 'April 9, 2026',
      title: 'How Traceability Helps Farmers Earn More, Not Just Export More',
      image:
        'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
      summary:
        'Why transparent value distribution across the supply chain matters as much as meeting international export standards.',
    },
  ];

  const quarterlyReports = [
    {
      quarter: '2026 Q1',
      title: '2026 Q1 Agritech Data Report',
      abstract:
        'Abstract: Chaku Research Institute expanded field data and training through ChakuTech, improving farmer productivity, reducing losses, and increasing market access.',
    },
    {
      quarter: '2026 Q2',
      title: '2026 Q2 Agritech Data Report',
      abstract:
        'Abstract: Chaku Research Institute expanded field data and training through ChakuTech, improving farmer productivity, reducing losses, and increasing market access.',
    },
    {
      quarter: '2026 Q3',
      title: '2026 Q3 Agritech Data Report',
      abstract:
        'Abstract: Chaku Research Institute expanded field data and training through ChakuTech, improving farmer productivity, reducing losses, and increasing market access.',
    },
    {
      quarter: '2026 Q4',
      title: '2026 Q4 Agritech Data Report',
      abstract:
        'Abstract: Chaku Research Institute expanded field data and training through ChakuTech, improving farmer productivity, reducing losses, and increasing market access.',
    },
  ];

  const blogIdeas = [
    {
      title: 'Advancing Agroforestry Systems in West Africa',
      description: 'The importance of intercropping to improve soil health, yields, and farmer income.',
    },
    {
      title: 'The Importance of Farm Traceability in Agricultural Value Chains',
      description: 'How traceability improves food safety, export access, transparency, and consumer trust.',
    },
    {
      title: 'How Traceability Helps Farmers Earn More, Not Just Export More',
      description: 'Why fair value distribution matters as much as meeting export requirements.',
    },
    {
      title: 'Building Transparent Supply Chains',
      description: 'Connecting smallholder produce directly to regional processing centers with real-time tracking.',
    },
  ];

  const publicationIdeas = [
    {
      title: 'Reducing Post-Harvest Losses Through Predictive Supply Chains',
      description: 'Data-driven approaches to tackling the ~40% crop loss problem in Africa.',
    },
    {
      title: 'AI-Driven Yield Prediction for Smallholder Farming Systems',
      description: 'How machine learning and geospatial data improve harvest forecasting and reduce losses.',
    },
    {
      title: 'Intercropping Systems (Cocoa–Plantain) and Income Diversification',
      description: 'Evidence on how secondary crops can double farmer income when linked to markets.',
    },
  ];

  const researchQuestions = [
    'What factors influence adoption of digital farming tools among smallholder farmers?',
    'To what extent does farmer training improve decision-making and on-farm practices?',
    'What is the difference in yield outcomes between farmers using data-driven practices and those who do not?',
  ];

  return (
    <>
      {/* 1. Dark Hero Section */}
      <PageHero
        badge="MEDIA & PUBLICATIONS"
        title="Research, reporting and ideas from the field"
        subtitle="Field reports, quarterly Agritech Data Reports, and the research agenda guiding how data-driven agriculture reaches smallholder farmers."
        image="/images/hero-media.jpg"
        imageAlt="Research, reporting and ideas from the field"
      />

      {/* 2. Awards & Grants / Field Updates Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
              AWARDS & GRANTS
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-[#0d1712] tracking-tight">
              Latest updates & awards
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Research notes, field reports and insights on data-driven agriculture for smallholder farming systems.
            </p>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardsAndUpdates.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="group overflow-hidden rounded-[28px] bg-white border border-gray-200/60 shadow-xs transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="h-56 w-full overflow-hidden bg-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-[11px] font-bold text-[#00a854] tracking-wider uppercase">
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-extrabold text-[#0d1712] leading-snug group-hover:text-[#00a854] transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-7 pb-7">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a854] group-hover:translate-x-1 transition-transform cursor-pointer">
                      Read report <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Research & Impact Reports Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
              PUBLICATIONS
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-[#0d1712] tracking-tight">
              Research & impact reports
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Our quarterly Agritech Data Reports track how field data and training translate into productivity, lower losses, and greater market access.
            </p>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {quarterlyReports.map((report, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="rounded-[28px] bg-white p-7 sm:p-9 shadow-xs border border-gray-100/90 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <i className="ri-bar-chart-2-line text-2xl text-[#00a854]"></i>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {report.quarter}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-xl sm:text-2xl font-extrabold text-[#0d1712]">
                      {report.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {report.abstract}
                    </p>
                  </div>
                  <div className="mt-6 pt-2">
                    <a
                      href={`mailto:contact@chakufoundation.org?subject=Request%20${encodeURIComponent(
                        report.title
                      )}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#00a854] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#042817] cursor-pointer"
                    >
                      <i className="ri-download-2-line text-sm"></i> Download PDF
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We're Writing and Researching Next Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
              IDEAS & RESEARCH AGENDA
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-[#0d1712] tracking-tight">
              What we're writing and researching next
            </h2>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Blog Ideas */}
            <FadeIn delay={100}>
              <div className="h-full rounded-[28px] bg-[#f4f5f0] p-7 md:p-8 border border-gray-200/60 shadow-xs flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <i className="ri-article-line text-2xl text-[#00a854]"></i>
                  <h3 className="font-heading font-bold text-lg text-[#0d1712]">
                    Blog Ideas
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {blogIdeas.map((idea, i) => (
                    <div key={i} className="border-l-2 border-[#00d66c] pl-4 py-0.5">
                      <h4 className="font-heading font-bold text-sm text-[#0d1712]">
                        {idea.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                        {idea.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Column 2: Publication Ideas */}
            <FadeIn delay={200}>
              <div className="h-full rounded-[28px] bg-[#f4f5f0] p-7 md:p-8 border border-gray-200/60 shadow-xs flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <i className="ri-folder-open-line text-2xl text-[#00a854]"></i>
                  <h3 className="font-heading font-bold text-lg text-[#0d1712]">
                    Publication Ideas
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {publicationIdeas.map((idea, i) => (
                    <div key={i} className="border-l-2 border-[#00d66c] pl-4 py-0.5">
                      <h4 className="font-heading font-bold text-sm text-[#0d1712]">
                        {idea.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                        {idea.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Column 3: Research Questions */}
            <FadeIn delay={300}>
              <div className="h-full rounded-[28px] bg-[#f4f5f0] p-7 md:p-8 border border-gray-200/60 shadow-xs flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <i className="ri-question-line text-2xl text-[#00a854]"></i>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0d1712]">
                      Research Questions
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block -mt-2">
                  FOR REPORT / PUBLICATION
                </span>

                <div className="flex flex-col gap-5 mt-1">
                  {researchQuestions.map((question, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-bold text-[#00a854] text-sm shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 leading-snug mt-1">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Section */}
      <NewsletterSection />
    </>
  );
};
export default Media;

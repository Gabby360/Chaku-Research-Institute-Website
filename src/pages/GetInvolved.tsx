import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import CtaBanner from '../components/CtaBanner';
import { GET_INVOLVED_WAYS } from '../data/content';

export const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    type: 'Select a partnership type',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Dark Hero Section */}
      <PageHero
        badge="GET INVOLVED"
        title="Support our mission"
        subtitle="The technology exists. The farmers are ready. Join us in bringing AI-powered market access to the next 10,000 smallholder farmers across Africa."
        image="/images/hero-get-involved.jpg"
        imageAlt="Support our mission"
      />

      {/* 2. Action Cards Grid Section */}
      <section className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
              GET INVOLVED
            </div>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-[#0d1712] tracking-tight">
              Support our mission
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              The technology exists. The farmers are ready. We need partners who share our urgency.
            </p>
          </FadeIn>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Partner with us */}
            <FadeIn delay={100}>
              <div className="rounded-[28px] bg-[#f4f5f0] p-7 sm:p-8 border border-gray-200/60 flex flex-col justify-between h-full shadow-xs transition-transform hover:-translate-y-1">
                <div>
                  <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-4">
                    <i className="ri-team-line text-3xl"></i>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-[#0d1712]">
                    Partner with us
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Bring AI-powered market access to the next 10,000 smallholder farmers across Africa through a corporate, foundation, government or research partnership.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <a
                    href="#partnership-form"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#042817] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#00381f] shadow-xs"
                  >
                    Start a conversation <i className="ri-arrow-down-line text-sm"></i>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Donate to the Institute */}
            <FadeIn delay={200}>
              <div className="rounded-[28px] bg-[#eaf8f0] p-7 sm:p-8 border-2 border-[#00d66c]/40 flex flex-col justify-between h-full shadow-xs transition-transform hover:-translate-y-1">
                <div>
                  <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-4">
                    <i className="ri-heart-3-fill text-3xl"></i>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-[#0d1712]">
                    Donate to the Institute
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Fund the training, farm mapping, certification support and weather technology that help farmers turn better information into lasting prosperity.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00d66c] px-5 py-3 text-xs sm:text-sm font-bold text-[#042817] transition-all hover:bg-[#00c261] shadow-xs"
                  >
                    Donate now <i className="ri-arrow-right-line text-sm"></i>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Talk to our team */}
            <FadeIn delay={300}>
              <div className="rounded-[28px] bg-[#f4f5f0] p-7 sm:p-8 border border-gray-200/60 flex flex-col justify-between h-full shadow-xs transition-transform hover:-translate-y-1">
                <div>
                  <div className="text-[#00a854] flex items-center justify-center shrink-0 mb-4">
                    <i className="ri-chat-3-line text-3xl"></i>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-[#0d1712]">
                    Talk to our team
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Questions about our research, our programs, or how your organization can collaborate? Reach us in Accra.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <a
                    href="mailto:contact@chakufoundation.org"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-300 px-5 py-3 text-xs sm:text-sm font-bold text-gray-800 transition-all hover:bg-gray-50 shadow-xs"
                  >
                    <i className="ri-mail-line text-sm"></i> Email us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Partnerships Form Section */}
      <section id="partnership-form" className="bg-[#fafaf7] py-16 md:py-24 border-b border-gray-200/40">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a854] tracking-wider uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a854]"></span>
                  PARTNERSHIPS
                </div>
                <h2 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1712] tracking-tight leading-[1.15]">
                  Let's build the next 10,000 farmer partnerships
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Tell us about your organization and what you would like to achieve. Our team reviews every inquiry and follows up with next steps.
                </p>
              </FadeIn>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={150}>
                <div className="rounded-[32px] bg-white p-7 sm:p-9 border border-gray-200/60 shadow-xs">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="text-[#00a854] flex items-center justify-center mx-auto text-4xl font-bold mb-2">
                        <i className="ri-check-line"></i>
                      </div>
                      <h3 className="mt-4 font-heading text-2xl font-bold text-[#0d1712]">
                        Inquiry Sent
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                        Thank you for reaching out. A member of our team will review your inquiry and follow up within 3 business days.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 rounded-xl bg-[#00d66c] px-6 py-2.5 text-xs font-bold text-[#042817]"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 block mb-1.5">
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full rounded-xl bg-[#f8f9f5] border border-gray-200 p-3.5 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 block mb-1.5">
                            EMAIL *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@organization.org"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full rounded-xl bg-[#f8f9f5] border border-gray-200 p-3.5 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 block mb-1.5">
                            ORGANIZATION
                          </label>
                          <input
                            type="text"
                            placeholder="Company, foundation or institution"
                            value={formData.org}
                            onChange={(e) =>
                              setFormData({ ...formData, org: e.target.value })
                            }
                            className="w-full rounded-xl bg-[#f8f9f5] border border-gray-200 p-3.5 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 block mb-1.5">
                            PARTNERSHIP TYPE *
                          </label>
                          <select
                            value={formData.type}
                            onChange={(e) =>
                              setFormData({ ...formData, type: e.target.value })
                            }
                            className="w-full rounded-xl bg-[#f8f9f5] border border-gray-200 p-3.5 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="Select a partnership type">
                              Select a partnership type
                            </option>
                            <option value="Corporate / Foundation">
                              Corporate / Foundation
                            </option>
                            <option value="Government / Institutional">
                              Government / Institutional
                            </option>
                            <option value="Research / Academic">
                              Research / Academic
                            </option>
                            <option value="General Partnership">
                              General Partnership
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 block mb-1.5">
                          HOW WOULD YOU LIKE TO PARTNER? *
                        </label>
                        <textarea
                          rows={4}
                          required
                          maxLength={500}
                          placeholder="Tell us a little about your goals and how you would like to work together (500 characters max)."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#f8f9f5] border border-gray-200 p-3.5 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                        <button
                          type="submit"
                          className="rounded-xl bg-[#042817] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#00381f] inline-flex items-center justify-center gap-2 shadow-xs shrink-0"
                        >
                          Send inquiry <i className="ri-send-plane-fill text-sm"></i>
                        </button>
                        <span className="text-xs text-gray-400 font-medium">
                          We'll only use your details to respond to this inquiry.
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN THE MISSION CTA Banner */}
      <CtaBanner />
    </>
  );
};
export default GetInvolved;


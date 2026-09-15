import React, { useState } from 'react';
import FadeIn from './FadeIn';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-[#fafaf7] py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] bg-[#042817] p-8 sm:p-12 md:p-14 text-white shadow-xl">
            <div className="mesh-texture absolute inset-0 opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Info */}
              <div className="lg:col-span-7">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00d66c] block mb-3">
                  STAY INFORMED
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                  Follow our research and field reports
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                  Get new Agritech Data Reports, farmer stories and program updates delivered as they publish.
                </p>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-5">
                {subscribed ? (
                  <div className="rounded-2xl bg-[#063b22] border border-[#00d66c]/30 p-6 text-center">
                    <div className="text-[#00d66c] flex items-center justify-center mx-auto text-3xl font-bold mb-2">
                      <i className="ri-check-line"></i>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white">
                      You're subscribed!
                    </h4>
                    <p className="mt-1 text-xs text-white/70">
                      Thank you for joining our research community.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#00d66c] block mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-[#06331e] border border-white/20 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:border-[#00d66c] focus:outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-[#00d66c] px-6 py-3.5 text-sm font-bold text-[#042817] transition-all hover:bg-[#00c261] inline-flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                      >
                        Subscribe <i className="ri-arrow-right-up-line text-sm"></i>
                      </button>
                    </div>
                    <span className="mt-2.5 text-xs text-white/50 font-medium">
                      No spam — unsubscribe anytime.
                    </span>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default NewsletterSection;


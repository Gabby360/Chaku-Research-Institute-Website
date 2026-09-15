import React from 'react';
import { ORGANIZATIONS } from '../data/content';
import Badge from './Badge';
import FadeIn from './FadeIn';

export const OrgFamily: React.FC = () => {
  return (
    <section className="bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="max-w-3xl">
          <Badge label="Organization Structure" />
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground-950 md:text-4xl">
            A family of organizations, one shared mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-600 md:text-lg">
            Chaku Foods builds the technology. Chaku Research Institute brings it to the field.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {ORGANIZATIONS.map((org, index) => (
            <FadeIn key={org.name} delay={index * 150}>
              <div className="h-full rounded-2xl border border-background-200 bg-background-50 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center text-[#00a854]">
                    <i className={`${org.icon} text-3xl`}></i>
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground-950">{org.name}</h3>
                    <span className="mt-0.5 inline-block text-xs font-semibold uppercase tracking-wider text-accent-700">
                      {org.tag}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-foreground-600 md:text-base">
                  {org.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OrgFamily;

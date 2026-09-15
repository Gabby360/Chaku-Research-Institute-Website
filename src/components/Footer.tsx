import React from 'react';
import { Link } from 'react-router-dom';
import { QUICK_LINKS, ACTION_LINKS, ORG_NAME } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#042817] text-white">
      <div className="mx-auto max-w-container px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src="/images/chaku-logo-dark.png"
                alt="Chaku Research Institute"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Creates digital records using data to optimize education & training, supporting rural smallholder farmers to maximize their harvest yields and achieve long-term economic prosperity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              EXPLORE
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-[#00d66c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              GET INVOLVED
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {ACTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-[#00d66c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              CONTACT
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <i className="ri-mail-line text-[#00d66c] text-base"></i>
                <a href="mailto:contact@chakufoundation.org" className="hover:text-[#00d66c] transition-colors">
                  contact@chakufoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="ri-global-line text-[#00d66c] text-base"></i>
                <a href="https://chakufoods.com" target="_blank" rel="noreferrer" className="hover:text-[#00d66c] transition-colors">
                  chakufoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {ORG_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

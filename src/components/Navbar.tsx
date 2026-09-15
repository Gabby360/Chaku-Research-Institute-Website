import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DARK_HERO_ROUTES } from '../data/content';

interface SubSection {
  title: string;
  href: string;
}

interface NavMenuItem {
  label: string;
  href: string;
  subsections?: SubSection[];
}

const NAV_STRUCTURE: NavMenuItem[] = [
  {
    label: 'Home',
    href: '/',
    subsections: [
      { title: 'The Challenge', href: '/#challenge' },
      { title: 'Scaling Farmer Economic Opportunity', href: '/#opportunity' },
      { title: 'Our Core Pillars', href: '/#pillars' },
      { title: 'ChakuTech', href: '/#chakutech' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    subsections: [
      { title: 'Our Story', href: '/about#story' },
      { title: 'Mission & Vision', href: '/about#mission' },
      { title: 'Who We Are', href: '/about#who-we-are' },
      { title: 'The Team', href: '/about#team' },
      { title: 'Board & Governance', href: '/about#governance' }
    ]
  },
  {
    label: 'Our Work',
    href: '/our-work',
    subsections: [
      { title: 'Our Work', href: '/our-work#our-work' },
      { title: 'Farmer Onboarding & Training', href: '/our-work#training' },
      { title: 'Where We Work', href: '/our-work#where-we-work' },
      { title: 'ChakuTech Platform', href: '/our-work#chakutech' }
    ]
  },
  {
    label: 'Impact',
    href: '/impact',
    subsections: [
      { title: 'Impact Metrics', href: '/impact#metrics' },
      { title: 'Scale & Reach', href: '/impact#scale' },
      { title: 'Farmer Story', href: '/impact#farmer-story' },
      { title: 'Awards & Grants', href: '/impact#awards' }
    ]
  },
  {
    label: 'Media & Publications',
    href: '/media',
    subsections: [
      { title: 'Publications', href: '/media#publications' },
      { title: 'Ideas & Research Agenda', href: '/media#research-agenda' },
      { title: 'Press Coverage', href: '/media#press' }
    ]
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    subsections: [
      { title: 'Partnerships', href: '/get-involved#partnerships' },
      { title: 'Support Our Mission', href: '/get-involved#support' },
      { title: 'Donate', href: '/donate' }
    ]
  }
];

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileAccordion, setExpandedMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleSubLinkNav = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (href.includes('#')) {
      const [targetPath, hash] = href.split('#');
      const normalizedCurrent = pathname;
      const normalizedTarget = targetPath === '' ? '/' : targetPath;

      if (normalizedCurrent === normalizedTarget) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        e.preventDefault();
        navigate(targetPath);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  const isTransparent = DARK_HERO_ROUTES.includes(pathname) && !isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-[#042817]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-container items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center py-1 z-10">
          <img
            src={isTransparent ? "/images/chaku-logo-dark.png" : "/images/chaku-logo-light.png"}
            alt="Chaku Research Institute"
            className="h-11 md:h-13 w-auto object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation Links with Clean Dark Dropdown */}
        <div className="hidden items-center gap-1 lg:flex relative">
          {NAV_STRUCTURE.map((item) => {
            const isActive = pathname === item.href;
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors inline-flex items-center gap-1 rounded-lg ${
                    isTransparent
                      ? isActive || isOpen
                        ? 'text-[#00d66c] font-extrabold'
                        : 'text-white/90 hover:text-[#00d66c]'
                      : isActive || isOpen
                      ? 'text-[#00a854] font-extrabold'
                      : 'text-gray-700 hover:text-[#00a854]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.subsections && item.subsections.length > 0 && (
                    <i className={`ri-chevron-down-line text-xs transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#00d66c]' : 'opacity-70'}`}></i>
                  )}
                </Link>

                {/* Minimalist Dark Dropdown Card matching reference screenshot */}
                {item.subsections && item.subsections.length > 0 && isOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[250px] z-50 animate-fadeIn">
                    <div className="rounded-2xl bg-[#16271e] border border-white/10 p-2 shadow-2xl backdrop-blur-xl">
                      <div className="flex flex-col gap-1">
                        {item.subsections.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            onClick={(e) => handleSubLinkNav(sub.href, e)}
                            className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white/90 hover:bg-[#00d66c] hover:text-[#042817] hover:font-bold transition-all duration-150"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Donate Button */}
        <div className="hidden items-center gap-3 lg:flex z-10">
          <Link
            to="/donate"
            className="rounded-none bg-[#00d66c] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#042817] transition-all flex items-center gap-2 shadow-md hover:bg-white hover:text-[#042817]"
          >
            <span>DONATE</span>
            <i className="ri-arrow-right-up-line text-sm font-bold"></i>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden z-10 ${
            isTransparent
              ? 'border-white/20 text-white'
              : 'border-gray-300 text-gray-900'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </nav>

      {/* Mobile Accordion Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-4 py-6 shadow-xl backdrop-blur-lg lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {NAV_STRUCTURE.map((item) => {
              const isExpanded = expandedMobileAccordion === item.label;
              return (
                <div key={item.href} className="border-b border-gray-100 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-base font-bold transition-colors ${
                        pathname === item.href
                          ? 'text-[#00a854]'
                          : 'text-gray-900 hover:text-[#00a854]'
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.subsections && item.subsections.length > 0 && (
                      <button
                        onClick={() => setExpandedMobileAccordion(isExpanded ? null : item.label)}
                        className="p-2 text-gray-500 hover:text-[#00a854]"
                      >
                        <i className={`ri-chevron-down-line text-lg transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#00a854]' : ''}`}></i>
                      </button>
                    )}
                  </div>

                  {/* Mobile Accordion Subsections */}
                  {item.subsections && item.subsections.length > 0 && isExpanded && (
                    <div className="mt-2 ml-3 flex flex-col gap-1 border-l-2 border-[#00d66c]/40 pl-3">
                      {item.subsections.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.href}
                          onClick={(e) => handleSubLinkNav(sub.href, e)}
                          className="block py-2 text-xs font-semibold text-gray-600 hover:text-[#00a854]"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 pt-2">
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-md bg-[#00d66c] px-4 py-3 text-center text-xs font-extrabold text-[#042817] uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>DONATE</span>
                <i className="ri-arrow-up-right-line text-sm font-bold"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

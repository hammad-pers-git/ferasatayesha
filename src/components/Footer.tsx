import React from 'react';
import { Mail } from 'lucide-react';
import { LotusLogo } from './BotanicalDecorations';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-white border-t border-[#f1edf7]/80 py-8 sm:py-10 lg:py-11 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left: Lotus Badge + Name & Title */}
        <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform hover:scale-105 duration-200 cursor-pointer focus:outline-hidden"
            aria-label="Go to homepage"
          >
            <LotusLogo className="w-full h-full" />
          </button>
          <div>
            <span
              id="footer-brand-name"
              className="block font-serif text-[22px] sm:text-[24px] lg:text-[25px] font-medium text-[#16385e] leading-tight tracking-tight"
            >
              Ferasat Ayesha
            </span>
            <span
              id="footer-brand-subtitle"
              className="block text-[12.5px] sm:text-[13px] text-[#2a648d] font-sans font-normal mt-0.5 tracking-normal"
            >
              Clinical Psychologist &amp; Psychology Lecturer
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav
          id="footer-nav"
          className="flex flex-wrap items-center justify-center gap-7 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-14"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`footer-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className="text-[14.5px] sm:text-[15px] text-[#2a648d] hover:text-[#16385e] font-sans font-medium transition-colors duration-200 cursor-pointer focus:outline-hidden"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Circular Social Media Badges & Copyright */}
        <div className="flex flex-col items-center md:items-end shrink-0">
          {/* Circular Social Buttons matching reference image */}
          <div id="footer-socials" className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full bg-[#eee7f7] hover:bg-[#e4dbf5] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span className="font-sans font-bold text-[13px] text-[#254b73] leading-none select-none">
                in
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram profile"
              className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full bg-[#eee7f7] hover:bg-[#e4dbf5] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg
                className="w-[17px] h-[17px] text-[#254b73]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@ferasatayesha.com"
              aria-label="Email Ferasat Ayesha"
              className="w-9 h-9 sm:w-[38px] sm:h-[38px] rounded-full bg-[#eee7f7] hover:bg-[#e4dbf5] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Mail className="w-[17px] h-[17px] stroke-[1.8] text-[#254b73]" />
            </a>
          </div>

          {/* Copyright notice right below social icons */}
          <p
            id="footer-copyright"
            className="text-[11.5px] sm:text-[12px] text-[#2a648d] font-sans font-normal mt-2 sm:mt-2.5 text-center md:text-right"
          >
            &copy; 2025 Ferasat Ayesha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


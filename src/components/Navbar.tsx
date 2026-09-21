import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Menu,
  X,
  Home,
  User,
  Shield,
  HelpCircle,
  Heart,
  ArrowRight,
  Instagram,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LotusLogo } from './BotanicalDecorations';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key press to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Services', id: 'services', icon: Shield },
    { label: 'FAQ', id: 'faq', icon: HelpCircle },
    { label: 'Contact', id: 'contact', icon: Heart },
  ];

  const handleNavClick = (id: string) => {
    // Unlock body scroll immediately so scrolling works without delay
    document.body.style.overflow = '';
    setMobileMenuOpen(false);
    onSelectTab(id);

    // Smooth scroll to top of destination page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 15);
  };

  const handleMobileBookClick = () => {
    document.body.style.overflow = '';
    setMobileMenuOpen(false);
    onOpenBooking();
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 transition-all duration-300 ${
        mobileMenuOpen ? 'z-50' : 'z-40'
      } ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <button
          id="logo-brand-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-hidden"
        >
          <div className="transition-transform group-hover:scale-105 duration-200 shrink-0">
            <LotusLogo className="w-10 h-10 sm:w-11 sm:h-11" />
          </div>
          <div>
            <span className="block font-serif-title text-xl sm:text-[22px] font-semibold tracking-tight text-[#1a2b49] leading-tight">
              Ferasat Ayesha
            </span>
            <span className="block text-[11px] text-slate-500 font-sans tracking-wide">
              Clinical Psychologist & Psychology Lecturer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-hidden ${
                  isActive ? 'text-[#1a2b49] font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    id={`nav-indicator-${item.id}`}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#6c628e] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Book Appointment Button */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-book-appointment-btn"
            onClick={onOpenBooking}
            className="bg-[#6c628e] hover:bg-[#595078] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-quick-book-btn"
            onClick={handleMobileBookClick}
            className="bg-[#705b8e] hover:bg-[#5f4c7c] text-white p-2 rounded-full text-xs active:scale-95 transition-all shadow-xs cursor-pointer"
            aria-label="Book appointment"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-hidden active:scale-95 transition-transform cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer matching reference image exact same */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 h-[100dvh] z-50 md:hidden flex flex-col bg-[#f8f6fc] overscroll-contain select-none"
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <button
                id="mobile-drawer-brand-btn"
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2.5 text-left active:scale-98 transition-transform cursor-pointer"
              >
                <LotusLogo className="w-8 h-8" />
                <span className="font-serif-title text-lg font-semibold text-[#1a2b49]">
                  Ferasat Ayesha
                </span>
              </button>
              <button
                id="mobile-menu-close-btn"
                onClick={() => {
                  document.body.style.overflow = '';
                  setMobileMenuOpen(false);
                }}
                className="w-9 h-9 rounded-full bg-[#ede7f6] text-[#6c5d88] flex items-center justify-center hover:bg-[#e4dcfa] transition-colors active:scale-95 cursor-pointer focus:outline-hidden"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 stroke-[2]" />
              </button>
            </div>

            {/* Scrollable Body to fit all screen heights comfortably */}
            <div className="flex-1 overflow-y-auto px-6 pt-6 pb-6 flex flex-col justify-between relative">
              {/* Navigation Items List */}
              <nav className="flex flex-col space-y-4 sm:space-y-5 pl-2 sm:pl-4 z-10">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-4 text-left py-1.5 transition-all group active:scale-98 cursor-pointer ${
                        isActive ? 'text-[#6c5d88] font-semibold' : 'text-[#3b3552] hover:text-[#6c5d88]'
                      }`}
                    >
                      {/* Icon inside soft lavender circular container */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          isActive
                            ? 'bg-[#e2d6f5] text-[#5e4f7a]'
                            : 'bg-[#eee8f7] text-[#6e5d89] group-hover:bg-[#e6dcf8]'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[1.85]" />
                      </div>

                      {/* Item label */}
                      <span className="text-[17px] font-medium tracking-tight">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Section: Book Appointment Button + Socials + Copyright */}
              <div className="pt-8 pb-3 flex flex-col items-center z-10 w-full">
                {/* Book Appointment Pill Button */}
                <button
                  id="mobile-nav-book-appointment-btn"
                  onClick={handleMobileBookClick}
                  className="w-[88%] max-w-[320px] bg-[#705b8e] hover:bg-[#604c7d] text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 text-[14px] font-medium shadow-md shadow-[#705b8e]/25 transition-all active:scale-98 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 stroke-[2]" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>

                {/* 3 Social/Contact Circular Action Icons */}
                <div className="flex items-center justify-center gap-3.5 mt-7">
                  {/* LinkedIn */}
                  <a
                    id="mobile-nav-linkedin"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#eee8f7] hover:bg-[#e4dcfa] text-[#6c5d88] flex items-center justify-center transition-all active:scale-95"
                    aria-label="LinkedIn"
                  >
                    <span className="text-[13px] font-bold font-sans tracking-tight leading-none">
                      in
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    id="mobile-nav-instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#eee8f7] hover:bg-[#e4dcfa] text-[#6c5d88] flex items-center justify-center transition-all active:scale-95"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 stroke-[2]" />
                  </a>

                  {/* Heart / Contact */}
                  <button
                    id="mobile-nav-heart"
                    onClick={() => handleNavClick('contact')}
                    className="w-10 h-10 rounded-full bg-[#eee8f7] hover:bg-[#e4dcfa] text-[#6c5d88] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    aria-label="Heart / Contact"
                  >
                    <Heart className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>

                {/* Copyright Text */}
                <p
                  id="mobile-nav-copyright"
                  className="text-[11px] text-[#7a819b] font-normal text-center mt-5"
                >
                  &copy; 2025 Ferasat Ayesha. All rights reserved.
                </p>
              </div>

              {/* Botanical Leaf Branch in bottom-right corner matching reference image */}
              <div className="absolute bottom-0 right-0 w-44 sm:w-52 pointer-events-none select-none opacity-85 z-0">
                <svg
                  viewBox="0 0 210 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  {/* Stem */}
                  <path
                    d="M 120 290 C 130 250, 145 205, 150 160 C 155 120, 165 75, 180 25"
                    stroke="#988bb3"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* Leaf 1 (Bottom Left) */}
                  <path
                    d="M 135 240 C 95 230, 60 205, 68 150 C 90 185, 120 215, 135 240 Z"
                    stroke="#9587af"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                    fill="#dfd6ee"
                    fillOpacity="0.32"
                  />
                  <path
                    d="M 135 240 C 105 205, 85 170, 68 150"
                    stroke="#9587af"
                    strokeWidth="0.85"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                  {/* Leaf 2 (Bottom Right) */}
                  <path
                    d="M 148 215 C 175 200, 205 190, 230 190 C 210 220, 180 232, 148 215 Z"
                    stroke="#9587af"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                    fill="#dfd6ee"
                    fillOpacity="0.32"
                  />
                  {/* Leaf 3 (Mid Left) */}
                  <path
                    d="M 152 165 C 130 135, 110 105, 120 75 C 138 96, 152 130, 152 165 Z"
                    stroke="#9587af"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                    fill="#dfd6ee"
                    fillOpacity="0.32"
                  />
                  <path
                    d="M 152 165 C 140 130, 128 100, 120 75"
                    stroke="#9587af"
                    strokeWidth="0.85"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                  {/* Leaf 4 (Mid Right) */}
                  <path
                    d="M 160 148 C 185 120, 220 105, 245 110 C 225 140, 190 152, 160 148 Z"
                    stroke="#9587af"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                    fill="#dfd6ee"
                    fillOpacity="0.32"
                  />
                  {/* Leaf 5 (Apex Top) */}
                  <path
                    d="M 178 95 C 170 65, 190 38, 215 25 C 220 50, 205 78, 178 95 Z"
                    stroke="#9587af"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                    fill="#dfd6ee"
                    fillOpacity="0.32"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


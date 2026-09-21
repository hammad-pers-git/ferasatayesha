import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BotanicalLeafBranch } from './BotanicalDecorations';

interface CtaBannerProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking, onOpenContact }) => {
  return (
    <section id="cta-banner" className="max-w-6xl mx-auto px-4 sm:px-6 my-10 md:my-16">
      <div
        id="cta-banner-card"
        className="bg-[#ede8f8] border border-[#e2dcf2] rounded-3xl px-6 sm:px-10 py-8 sm:py-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs"
      >
        {/* Left Decorative Botanical Leaf Branch Accent */}
        <div className="absolute left-0 bottom-0 pointer-events-none select-none z-0">
          <BotanicalLeafBranch className="w-28 sm:w-36 h-auto" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 pl-2 sm:pl-6 max-w-xl">
          <h2
            id="cta-heading"
            className="font-serif-title text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#1a2b49] leading-tight mb-2"
          >
            Ready for Better Mental Health?
          </h2>
          <p id="cta-subheading" className="text-slate-600 text-xs sm:text-sm font-sans">
            Schedule a consultation with Ferasat Ayesha today.
          </p>
        </div>

        {/* Actions Button Group */}
        <div
          id="cta-actions-group"
          className="relative z-10 flex flex-wrap items-center gap-4 sm:gap-6 pl-2 sm:pl-0"
        >
          {/* Contact Us Pill Button */}
          <button
            id="cta-contact-us-btn"
            onClick={onOpenContact}
            className="bg-[#6c628e] hover:bg-[#595078] text-white text-xs sm:text-sm font-medium px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Subtle Vertical Divider */}
          <div className="hidden sm:block w-[1.5px] h-7 bg-[#cfc7e1]" />

          {/* Book Appointment Icon Button */}
          <button
            id="cta-book-appointment-btn"
            onClick={onOpenBooking}
            className="text-slate-700 hover:text-[#6c628e] text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors py-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-slate-700" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};

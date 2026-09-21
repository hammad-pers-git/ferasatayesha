import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../assets/images/home_hero_exact_banner_1789828167317.jpg';
import { BotanicalForegroundLeaves } from './BotanicalDecorations';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenLearnMore }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-[#faf8f6] border-b border-slate-200/60 overflow-hidden w-full"
    >
      {/* =========================================================
          HERO BANNER - EXACT REPLICA OF REFERENCE DESIGN
          - Full-width panoramic room photo:
            - Left: Warm, airy off-white wall with soft lighting and natural negative space
            - Center-Right: Plush beige armchair with lilac cushion and knit blanket
            - Right: Wooden side table with plant, books, and framed botanical leaf print
            - Far-Left: Softly blurred, out-of-focus green eucalyptus branches (bokeh foreground)
            - Far-Right: Floating handwritten cursive quote "It's okay to seek support."
          - Content on the left:
            - Eyebrow: "YOUR MENTAL WELL-BEING MATTERS"
            - Title: "Support for a Healthier and Brighter You"
            - Subtitle: "Professional psychological support for individuals, couples, and families..."
            - Buttons: "[Calendar] Book Your Consultation →" and "Learn More →"
      ========================================================= */}

      <div className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] flex items-center">
        
        {/* Single Continuous Panoramic Hero Image across the right side with seamless blend/fade into the left content area */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            id="hero-bg-img"
            src={heroBgImage}
            alt="Cozy, calming therapy room with armchair, lilac cushion, and gentle sunlight"
            className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.4) 44%, rgba(0,0,0,0.8) 58%, black 72%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.4) 44%, rgba(0,0,0,0.8) 58%, black 72%)',
            }}
            referrerPolicy="no-referrer"
          />

          {/* Seamless full-width atmospheric blend ensuring zero visible split or seam across any viewport width */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #faf8f6 0%, #faf8f6 20%, rgba(250,248,246,0.92) 32%, rgba(250,248,246,0.45) 48%, rgba(250,248,246,0) 65%)',
            }}
          />
        </div>

        {/* Soft out-of-focus foliage on the extreme left edge as in reference */}
        <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-36 lg:w-44 xl:w-48 pointer-events-none z-20 select-none overflow-hidden flex items-center">
          <BotanicalForegroundLeaves className="w-full h-full opacity-90" />
        </div>

        {/* Floating Handwritten Script Quote on the right side */}
        <div
          id="hero-floating-quote"
          className="absolute right-6 sm:right-10 md:right-14 lg:right-10 xl:right-16 top-6 sm:top-10 lg:top-20 xl:top-24 z-20 pointer-events-none select-none -rotate-3"
        >
          <p className="font-script text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#556688] lg:text-[#4d5c7b] leading-tight drop-shadow-2xs">
            It&apos;s okay to
            <br />
            seek support.
          </p>
        </div>

        {/* Main Content Container (Placed over the light wall on the left) */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 sm:py-18 lg:py-20 relative z-10">
          <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
            {/* Eyebrow */}
            <p
              id="hero-eyebrow"
              className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#645388] mb-3.5 sm:mb-4"
            >
              YOUR MENTAL WELL-BEING MATTERS
            </p>

            {/* Main Title */}
            <h1
              id="hero-title"
              className="font-serif-title text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal text-[#152744] leading-[1.14] tracking-tight mb-4 sm:mb-5"
            >
              Support for a Healthier
              <br />
              and Brighter You
            </h1>

            {/* Paragraph */}
            <p
              id="hero-desc"
              className="text-[#3b4c66] text-xs sm:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mb-7 sm:mb-8 font-sans font-normal"
            >
              Professional psychological support for individuals, couples, and families.
              Helping you build emotional resilience, better relationships, and a more balanced life.
            </p>

            {/* Action Buttons */}
            <div id="hero-actions" className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenBooking}
                className="bg-[#705b8e] hover:bg-[#5e4b7b] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 shadow-md shadow-[#705b8e]/25 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 stroke-[2]" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                id="hero-learn-more-btn"
                onClick={onOpenLearnMore}
                className="text-[#3b4b66] hover:text-[#705b8e] text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors py-2 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

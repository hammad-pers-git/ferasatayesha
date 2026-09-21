import React from 'react';
import { ArrowRight } from 'lucide-react';
import psychologistPortrait from '../assets/images/psychologist_portrait_1789818472197.jpg';
import { BotanicalLeafBranch } from './BotanicalDecorations';

interface AboutSectionProps {
  onOpenLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLearnMore }) => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
        {/* Left: Professional Photo & Quote Card */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-xs border border-slate-100/80 bg-[#f9f7fc]">
              <img
                id="about-therapist-img"
                src={psychologistPortrait}
                alt="Ferasat Ayesha - Clinical Psychologist & Psychology Lecturer"
                className="w-full h-auto aspect-4/3 sm:aspect-5/4 object-cover object-center transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Quote Card with Botanical Decoration */}
          <div
            id="about-quote-card"
            className="w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto bg-[#f9f7fc] border border-[#ece6f7] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xs flex flex-col justify-between"
          >
            <blockquote className="relative z-10">
              <p className="font-serif-title text-base sm:text-[17px] text-[#42506c] italic leading-relaxed">
                “You don't have to go through this alone.
              </p>
              <p className="font-serif-title text-base sm:text-[17px] text-[#42506c] italic leading-relaxed mt-1.5">
                Support is a step towards a healthier, brighter you.”
              </p>
            </blockquote>

            {/* Subtle double horizontal accent lines */}
            <div className="relative z-10 mt-4 sm:mt-5">
              <div className="w-14 h-[1.5px] bg-[#d2c9e7] mb-1.5" />
              <div className="w-9 h-[1.5px] bg-[#e1daf0]" />
            </div>

            {/* Delicate Botanical Leaf Illustration in bottom-right corner */}
            <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
              <BotanicalLeafBranch className="w-20 sm:w-24 h-auto" />
            </div>
          </div>
        </div>

        {/* Right: Comprehensive Bio and Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p
            id="about-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6c628e] mb-2"
          >
            ABOUT ME
          </p>

          <h2
            id="about-name"
            className="font-serif-title text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1a2b49] leading-tight mb-1"
          >
            Ferasat Ayesha
          </h2>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
            <p id="about-role" className="text-xs sm:text-sm text-slate-500 font-medium">
              Clinical Psychologist &amp; Psychology Lecturer
            </p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center text-[11px] font-medium text-[#6c628e] bg-[#f4effa] px-2.5 py-0.5 rounded-full">
              MS Clinical Psychology
            </span>
            <span className="inline-flex items-center text-[11px] font-medium text-[#6c628e] bg-[#f4effa] px-2.5 py-0.5 rounded-full">
              PMDCP
            </span>
          </div>

          <div
            id="about-bio"
            className="space-y-3.5 sm:space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed mb-7 font-sans"
          >
            <p>
              Ferasat Ayesha is a Clinical Psychologist and Psychology Lecturer with 5+ years of
              experience in clinical psychology, psychological assessment, counselling, mental health
              support, teaching, and research. She supports individuals experiencing common mental
              health concerns such as anxiety, depression, stress, sleep difficulties, and other
              emotional and psychological challenges.
            </p>

            <p>
              She holds an MS in Clinical Psychology and a Post-Magistral Diploma in Clinical
              Psychology (PMDCP). Her professional experience includes clinical practice, psychological
              assessment, counselling, child development, academic teaching, and psychological
              research.
            </p>

            <p>
              Ferasat provides a professional, compassionate, respectful, and confidential environment
              where individuals can feel heard and understood. She takes an individual-focused
              approach to understanding each person&apos;s concerns and providing appropriate
              psychological support to help them work toward improved mental well-being.
            </p>
          </div>

          {/* Action Button & Handwritten Signature */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
            <button
              id="about-learn-more-btn"
              onClick={onOpenLearnMore}
              className="rounded-full border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 px-5 py-2.5 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer hover:bg-slate-50 shadow-2xs"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Handwritten Signature */}
            <div
              id="about-signature"
              className="font-script text-2xl sm:text-3xl text-[#5b7a99] select-none tracking-wide -rotate-2"
            >
              Ferasat Ayesha
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

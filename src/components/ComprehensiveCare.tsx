import React from 'react';
import holisticArt from '../assets/images/holistic_therapy_art_1789818489201.jpg';

interface ComprehensiveCareProps {
  onOpenBooking: () => void;
}

export const ComprehensiveCare: React.FC<ComprehensiveCareProps> = ({ onOpenBooking }) => {
  return (
    <section id="comprehensive-care" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-18">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p
            id="care-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6c628e] mb-2"
          >
            COMPREHENSIVE CARE
          </p>

          <h2
            id="care-title"
            className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#1a2b49] leading-[1.2] mb-5 tracking-tight"
          >
            Transform Your Life With Comprehensive
            <br />
            Psychological Support
          </h2>

          <p
            id="care-description"
            className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans"
          >
            Ferasat Ayesha’s individualized approach to psychological care considers each person’s
            unique experiences, emotions, relationships, and challenges. She provides support for
            concerns such as anxiety, depression, stress, sleep difficulties, emotional well-being,
            and relationship or marital challenges. Whether you are facing personal difficulties,
            seeking support for your child, or experiencing challenges in your relationship or
            marriage, Ferasat offers a compassionate and confidential space for understanding,
            growth, and positive change.
          </p>

          <div>
            <button
              id="care-book-btn"
              onClick={onOpenBooking}
              className="text-[#6c628e] hover:text-[#524970] text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>Schedule a therapy session</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Art Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="relative overflow-hidden rounded-3xl p-4 flex items-center justify-center">
              <img
                id="care-holistic-art"
                src={holisticArt}
                alt="Holistic psychotherapy line art depicting mental harmony, family lineage, and botanical balance"
                className="w-full h-auto max-h-[380px] object-contain drop-shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

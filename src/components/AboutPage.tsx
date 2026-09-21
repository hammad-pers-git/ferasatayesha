import React from 'react';
import {
  User,
  Heart,
  HandHeart,
  Quote,
  Briefcase,
  Award,
  BookOpen,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import aboutHeroExactMatch from '../assets/images/about_hero_exact_match_1789820712896.jpg';
import { BotanicalLeafBranch, BotanicalLavenderBokeh } from './BotanicalDecorations';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div id="about-page-container" className="pt-0 pb-0 animate-in fade-in duration-300">
      {/* 1. Hero Section - Full-Width Panoramic Banner Matching Shared Reference Image */}
      <section
        id="about-hero"
        className="relative bg-white border-b border-slate-100/80 overflow-hidden w-full"
      >
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[570px] flex items-center">
          {/* Single Continuous Hero Image across the right side with seamless blend/fade into the white left area */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img
              id="about-hero-portrait-img"
              src={aboutHeroExactMatch}
              alt="Ferasat Ayesha - Clinical Psychologist & Psychology Lecturer"
              className="w-full h-full object-cover object-[82%_center] sm:object-[78%_center] md:object-[74%_center] lg:object-center"
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
                  'linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.92) 32%, rgba(255,255,255,0.45) 48%, rgba(255,255,255,0) 65%)',
              }}
            />
          </div>

          {/* Minimal Leaf Illustration on the Left Edge as per reference design */}
          <div className="absolute left-0 bottom-0 pointer-events-none z-20 select-none">
            <BotanicalLeafBranch className="w-28 sm:w-36 lg:w-40 xl:w-48 h-auto" />
          </div>

          {/* Main Content Container (Placed over the white negative space on the left) */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
              <p
                id="about-hero-eyebrow"
                className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#645388] mb-3 sm:mb-4"
              >
                ABOUT ME
              </p>

              <h1
                id="about-hero-title"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-normal text-[#152e4d] leading-[1.14] tracking-tight mb-4 sm:mb-5"
              >
                A Journey of
                <br />
                Understanding, Support
                <br />
                and Growth
              </h1>

              <p
                id="about-hero-bio"
                className="text-[#384860] text-xs sm:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mb-6 sm:mb-7 font-sans font-normal"
              >
                I am Ferasat Ayesha, a Clinical Psychologist and Psychology Lecturer with a passion
                for supporting individuals, couples, and families in their mental health journey. I
                believe in the power of understanding, compassion, and evidence-informed care.
              </p>

              {/* Handwritten Signature and Role Tagline */}
              <div id="about-hero-signature-block" className="space-y-1">
                <div
                  id="about-hero-signature"
                  className="font-script text-3xl sm:text-4xl text-[#39668d] select-none tracking-wide -rotate-1 leading-none mb-1"
                >
                  Ferasat Ayesha
                </div>
                <p
                  id="about-hero-signature-tagline"
                  className="text-xs sm:text-[13px] text-slate-500 font-sans tracking-normal"
                >
                  Clinical Psychologist &amp; Psychology Lecturer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Three Column Approach, Background & Quote Row - Exact Match to Reference Image */}
      <section id="about-cards-row" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: My Approach */}
          <div
            id="about-card-approach"
            className="bg-[#faf8fd] border border-[#ede7f6] rounded-2xl sm:rounded-[22px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(112,91,142,0.025)] transition-all hover:shadow-[0_8px_30px_rgba(112,91,142,0.05)]"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eee7f6] flex items-center justify-center mb-5 sm:mb-6 text-[#6c5d88] shrink-0">
                <User className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-[22px] sm:text-[23px] font-normal text-[#173860] mb-3 tracking-tight">
                My Approach
              </h3>
              <p className="text-[#506580] text-[13px] sm:text-[13.5px] leading-[1.68] font-normal font-sans">
                I provide a safe, confidential, and non-judgmental space where you can explore your thoughts and feelings. My approach is empathetic, collaborative, and tailored to your unique needs and goals.
              </p>
            </div>
          </div>

          {/* Card 2: My Background */}
          <div
            id="about-card-background"
            className="bg-[#faf8fd] border border-[#ede7f6] rounded-2xl sm:rounded-[22px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(112,91,142,0.025)] transition-all hover:shadow-[0_8px_30px_rgba(112,91,142,0.05)]"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#eee7f6] flex items-center justify-center mb-5 sm:mb-6 text-[#6c5d88] shrink-0">
                <HandHeart className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-[22px] sm:text-[23px] font-normal text-[#173860] mb-3 tracking-tight">
                My Background
              </h3>
              <p className="text-[#506580] text-[13px] sm:text-[13.5px] leading-[1.68] font-normal font-sans">
                I hold an MS in Clinical Psychology, along with a Post Magistral Diploma (PMDCP). I have a strong foundation in both academic learning and practical experience, which helps me provide effective and well-rounded support.
              </p>
            </div>
          </div>

          {/* Card 3: Quote Card with Botanical Flourish */}
          <div
            id="about-card-quote"
            className="bg-[#faf8fd] border border-[#ede7f6] rounded-2xl sm:rounded-[22px] p-3 sm:p-3.5 shadow-[0_4px_24px_rgba(112,91,142,0.025)] flex flex-col transition-all hover:shadow-[0_8px_30px_rgba(112,91,142,0.05)]"
          >
            <div className="bg-[#f4effa] border border-[#ede6f7]/60 rounded-xl sm:rounded-[18px] p-5 sm:p-6 relative overflow-hidden h-full flex flex-col justify-between min-h-[220px]">
              {/* Circular Quote Icon Badge at Top-Left */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ede7f6] flex items-center justify-center text-[#6c5d88] shrink-0 shadow-2xs z-10">
                <Quote className="w-5 h-5 fill-[#6c5d88] stroke-none rotate-180" />
              </div>

              {/* Centered Quote & Author */}
              <div className="relative z-10 my-auto py-2 text-center">
                <blockquote className="font-serif italic text-[20px] sm:text-[21px] md:text-[22px] text-[#2c3758] leading-snug font-normal">
                  “A healthier mind<br />
                  leads to a brighter future.”
                </blockquote>
                <p className="font-sans text-[13px] sm:text-[13.5px] text-[#556987] font-normal mt-3 sm:mt-3.5">
                  Ferasat Ayesha
                </p>
              </div>

              {/* Botanical Leaf Illustration in Bottom-Right Corner */}
              <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
                <BotanicalLeafBranch className="w-24 sm:w-28 md:w-30 h-auto opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Middle Section: Professional Experience (Left) & Certifications/Research (Right) */}
      <section id="about-experience-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Professional Experience Card */}
          <div
            id="experience-card"
            className="lg:col-span-7 bg-white border border-[#f0ebf7] rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgb(0,0,0,0.02)]"
          >
            {/* Header with rounded briefcase icon */}
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-xl bg-[#f3effa] flex items-center justify-center text-[#6c628e] shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="font-serif-title text-2xl sm:text-[27px] font-medium text-[#1a2b49]">
                Professional Experience
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-sans">
              Ferasat Ayesha brings together professional experience in clinical psychology,
              psychological assessment, counseling, research, education, and child development,
              gained across clinical, academic, research, and developmental settings.
            </p>

            {/* Experience List Items */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    International Islamic University Islamabad{' '}
                    <span className="font-normal text-slate-600">— Visiting Faculty / Psychology Lecturer</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Teaches BS Psychology courses, including Introduction to Psychology, Applied Areas of
                    Psychology, and Schools and Perspectives of Psychology, while contributing to the
                    academic development of psychology students.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Ibadat International Hospital{' '}
                    <span className="font-normal text-slate-600">— Clinical Psychologist</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Provides psychological support in a psychiatric setting, including clinical interviews,
                    case history taking, behavioral observation, psychological assessment, counseling,
                    and psychological interventions.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Human Development Research Foundation (HDRF){' '}
                    <span className="font-normal text-slate-600">— Research Assistant</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Contributed to psychological research activities, supporting research processes
                    and gaining practical experience in psychological and behavioral research.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Global Special School for Child Development{' '}
                    <span className="font-normal text-slate-600">— Child Development Therapist</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Supported children with developmental and behavioral needs, contributing to their
                    emotional, behavioral, and overall developmental support.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Armed Forces Institute of Mental Health{' '}
                    <span className="font-normal text-slate-600">— Clinical Experience</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Participated in clinical psychological care, with involvement in psychological assessment,
                    clinical observation, and understanding patients' mental health needs.
                  </p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Benazir Bhutto Hospital{' '}
                    <span className="font-normal text-slate-600">— Clinical Experience</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Provided psychological support within a hospital environment, with experience in clinical
                    assessment, patient interaction, and psychological care.
                  </p>
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Speech Facilitation and Rehabilitation Centre (SFRC){' '}
                    <span className="font-normal text-slate-600">— Clinical Experience</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Supported individuals with developmental and communication-related needs through
                    psychological and rehabilitation-focused activities.
                  </p>
                </div>
              </div>

              {/* Item 8 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6c628e] mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                    Safe Care Trust International{' '}
                    <span className="font-normal text-slate-600">— Clinical Experience</span>
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-[12px] leading-relaxed mt-0.5">
                    Contributed to psychological support and care services, working with individuals
                    experiencing emotional, behavioral, and mental health-related concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Certifications & Research Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top Card: Professional Certifications */}
            <div
              id="certifications-card"
              className="bg-white border border-[#f0ebf7] rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgb(0,0,0,0.02)] relative overflow-hidden"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#f3effa] flex items-center justify-center text-[#6c628e] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-2xl sm:text-[25px] font-medium text-[#1a2b49]">
                  Professional Certifications
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed mb-5">
                Ferasat Ayesha has completed additional professional courses and certifications
                that complement her clinical, academic, research, and psychological practice.
              </p>

              <div className="space-y-3.5 relative z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6c628e] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                      E-Professional Educator Training Certificate
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-xs pl-3.5 mt-0.5">
                    Iqra University, Islamabad
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6c628e] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                      Psychotherapies Course
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-xs pl-3.5 mt-0.5">
                    Pak Young Psychologists Academy
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6c628e] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                      Good Clinical Practice
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-xs pl-3.5 mt-0.5">
                    London School of Hygiene and Tropical Medicine
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6c628e] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                      Psychological Testing Course
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-xs pl-3.5 mt-0.5">
                    Pak Young Psychologists Academy
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6c628e] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-semibold text-[#1a2b49]">
                      Good Research Practice
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-xs pl-3.5 mt-0.5">
                    Medical Research Council
                  </p>
                </div>
              </div>

              {/* Decorative Corner Leaf Branch */}
              <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
                <BotanicalLeafBranch className="w-20 sm:w-24 h-auto" />
              </div>
            </div>

            {/* Bottom Card: Research */}
            <div
              id="research-card"
              className="bg-white border border-[#f0ebf7] rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgb(0,0,0,0.02)] relative overflow-hidden"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#f3effa] flex items-center justify-center text-[#6c628e] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-2xl sm:text-[25px] font-medium text-[#1a2b49]">
                  Research
                </h3>
              </div>

              <div className="relative z-10 pl-1">
                <h4 className="text-xs sm:text-[13.5px] font-semibold text-[#1a2b49] mb-1">
                  MS Clinical Psychology Thesis
                </h4>
                <p className="text-slate-500 text-xs sm:text-[12.5px] italic leading-relaxed max-w-sm">
                  Impact of Social Media Use on Body Dysmorphic Symptoms: The Role of Negative Self-Concept.
                </p>
              </div>

              {/* Decorative Corner Leaf Branch */}
              <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
                <BotanicalLeafBranch className="w-18 sm:w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Consultation CTA Banner - Exact match to reference image */}
      <section
        id="about-cta-banner"
        className="relative w-full bg-gradient-to-r from-[#ece6f7] via-[#f5f0fa] to-[#ece5f7] border-t border-[#e5dcf1] overflow-hidden"
      >
        {/* Soft out-of-focus lavender floral sprigs on the left */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex items-center">
          <BotanicalLavenderBokeh className="w-48 sm:w-64 md:w-80 h-full opacity-85" />
        </div>

        {/* Botanical leaf branch rising on the far right edge */}
        <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
          <BotanicalLeafBranch className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-10 md:py-11 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          {/* Poetic quote text */}
          <div className="text-center md:text-left">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] text-[#3e3557] font-normal leading-snug tracking-tight">
              Together, we can work towards
              <br />
              <span className="inline-block sm:pl-8 md:pl-12 lg:pl-16">
                a healthier and more balanced you.
              </span>
            </p>
          </div>

          {/* Book Consultation Pill Button */}
          <div className="shrink-0">
            <button
              id="about-bottom-book-btn"
              onClick={onOpenBooking}
              className="bg-[#705b8e] hover:bg-[#5f4b7b] text-white text-[13.5px] sm:text-[14.5px] font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 shadow-md shadow-[#705b8e]/20 transition-all duration-200 active:scale-98 cursor-pointer group"
            >
              {/* Calendar Icon matching reference */}
              <svg
                className="w-4.5 h-4.5 stroke-[1.8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="3" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="8" cy="14" r="0.8" fill="currentColor" />
                <circle cx="12" cy="14" r="0.8" fill="currentColor" />
                <circle cx="16" cy="14" r="0.8" fill="currentColor" />
                <circle cx="8" cy="18" r="0.8" fill="currentColor" />
                <circle cx="12" cy="18" r="0.8" fill="currentColor" />
                <circle cx="16" cy="18" r="0.8" fill="currentColor" />
              </svg>
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 stroke-[2]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { BotanicalLeafBranch } from './BotanicalDecorations';
import contactHeroDeskImg from '../assets/images/contact_hero_desk_1789974506841.jpg';
import leafShadowImg from '../assets/images/leaf_shadow_branch_1789823110490.jpg';

/**
 * Delicate botanical branch line art tailored for the Contact Hero section,
 * matching the reference image anchored at the bottom-left edge.
 */
const ContactHeroBotanicalBranch: React.FC<{ className?: string }> = ({ className = 'w-44 h-auto' }) => (
  <svg
    viewBox="15 25 185 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Main slender curving stem */}
    <path
      d="M 68 280 C 76 245, 92 212, 98 174 C 104 138, 114 96, 130 46"
      stroke="#9280a9"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.85"
    />

    {/* 1. Leaf 1 (Bottom Left - pointing towards the corner) */}
    <path
      d="M 86 220 C 58 210, 24 186, 32 134 C 48 166, 76 194, 86 220 Z"
      stroke="#9280a9"
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 86 220 C 66 186, 46 156, 32 134"
      stroke="#9280a9"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 2. Leaf 2 (Bottom Right - undulating horizontal leaf) */}
    <path
      d="M 97 206 C 120 190, 146 178, 172 178 C 154 206, 126 220, 97 206 Z"
      stroke="#9280a9"
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 97 206 C 124 196, 148 186, 172 178"
      stroke="#9280a9"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 3. Leaf 3 (Small Sprout directly above bottom-right leaf) */}
    <path
      d="M 102 174 C 110 162, 125 156, 136 161 C 128 172, 114 178, 102 174 Z"
      stroke="#9280a9"
      strokeWidth="1.0"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 102 174 C 114 167, 124 162, 136 161"
      stroke="#9280a9"
      strokeWidth="0.75"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 4. Leaf 4 (Middle Left) */}
    <path
      d="M 105 152 C 90 128, 76 102, 82 76 C 97 94, 106 125, 105 152 Z"
      stroke="#9280a9"
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 105 152 C 96 124, 88 100, 82 76"
      stroke="#9280a9"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 5. Leaf 5 (Middle Right) */}
    <path
      d="M 112 142 C 132 118, 164 104, 192 108 C 172 136, 140 146, 112 142 Z"
      stroke="#9280a9"
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 112 142 C 136 128, 162 118, 192 108"
      stroke="#9280a9"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 6. Leaf 6 (Terminal Top Apex Leaf) */}
    <path
      d="M 128 98 C 123 70, 142 46, 164 34 C 170 58, 154 82, 128 98 Z"
      stroke="#9280a9"
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill="#ece5f8"
      fillOpacity="0.28"
    />
    <path
      d="M 128 98 C 138 78, 150 56, 164 34"
      stroke="#9280a9"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

interface ContactPageProps {
  onOpenBooking: () => void;
  onSelectTab: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onSelectTab }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 600);
  };

  return (
    <div id="contact-page-container" className="pt-0 pb-0 animate-in fade-in duration-300">
      {/* =========================================================
          1. HERO SECTION - LET'S CONNECT
          Exact match to reference image:
          - Pale airy background (#faf8fc)
          - Left:
            Botanical branch line art anchored on bottom-left edge
            Eyebrow: CONTACT US
            Title: Let's Connect
            Description: Have a question or would like to schedule a consultation?
                         Get in touch with Ferasat Ayesha.
          - Right:
            Peaceful therapy office desk with white ceramic vase,
            fresh leafy branches on books, tea mug, and warm window light
      ========================================================= */}
      <section
        id="contact-hero"
        className="relative bg-[#faf8fc] border-b border-[#ece5f4] overflow-hidden w-full"
      >
        <div className="relative w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] xl:min-h-[440px] flex items-center">
          {/* Panoramic Hero Image of Therapy Consultation Desk with books, white vase with leafy branches, coffee mug, and armchair in natural window light */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[58%] xl:w-[56%] h-full z-0 overflow-hidden pointer-events-none select-none">
            <img
              id="contact-hero-bg-img"
              src={contactHeroDeskImg}
              alt="Peaceful therapy office desk with white ceramic vase with leafy branches on books and coffee cup"
              className="w-full h-full object-cover object-[center_center]"
              referrerPolicy="no-referrer"
            />

            {/* Seamless gradient fade blending the left edge of the photograph into the #faf8fc background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, #faf8fc 0%, rgba(250,248,252,0.92) 8%, rgba(250,248,252,0.3) 22%, transparent 36%)',
              }}
            />
          </div>

          {/* Mobile ambient wash ensuring text remains crystal clear on smaller screens */}
          <div
            className="md:hidden absolute inset-0 z-[1] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(250,248,252,0.97) 0%, rgba(250,248,252,0.88) 65%, rgba(250,248,252,0.45) 100%)',
            }}
          />

          {/* Delicate botanical branch line art anchored at bottom-left corner */}
          <div className="absolute left-0 bottom-0 pointer-events-none z-10 select-none">
            <ContactHeroBotanicalBranch className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto" />
          </div>

          {/* Main Content Container (Placed over the serene pale negative space on the left) */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-14 lg:py-16 relative z-10">
            <div className="max-w-lg lg:max-w-[530px] xl:max-w-[560px]">
              <p
                id="contact-hero-eyebrow"
                className="text-xs sm:text-[12.5px] font-semibold tracking-[0.2em] uppercase text-[#685785] mb-3 sm:mb-3.5"
              >
                CONTACT US
              </p>

              <h1
                id="contact-hero-heading"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal text-[#163259] leading-[1.16] tracking-tight mb-3.5 sm:mb-4"
              >
                Let’s Connect
              </h1>

              <div
                id="contact-hero-description"
                className="text-[#4a5e78] text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-[1.68] max-w-[480px] font-sans font-normal"
              >
                <p>Have a question or would like to schedule a consultation?</p>
                <p className="mt-0.5 sm:mt-1">Get in touch with Ferasat Ayesha.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN CONTENT SECTION - 2 COLUMNS
          Exact match to reference image:
          - Left Column ("GET IN TOUCH"):
            - Eyebrow: GET IN TOUCH
            - Title: Ferasat Ayesha
            - Subtitle: Clinical Psychologist & Psychology Lecturer
            - Bio / intro paragraph
            - Email circular badge & text
            - Phone circular badge & text
            - Handwritten script: "Your well-being matters." with vertical line
            - BotanicalLeafBranch illustration next to handwritten script
          - Right Column ("SEND A MESSAGE"):
            - Soft lilac container card
            - Eyebrow: SEND A MESSAGE
            - Heading: We'd Love to Hear From You
            - Subtitle: Fill out the form below...
            - Inputs with icons: Full Name, Contact Number, Email Address, Your Message
            - "Send Message" purple pill button
      ========================================================= */}
      <section
        id="contact-main-section"
        className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
            
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-5 flex flex-col pt-2">
              <span
                id="contact-get-in-touch-eyebrow"
                className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#2563eb] uppercase mb-2.5 block"
              >
                GET IN TOUCH
              </span>

              <h2
                id="contact-name-heading"
                className="font-serif-title text-3xl sm:text-4xl text-[#172948] font-normal tracking-tight leading-tight mb-1"
              >
                Ferasat Ayesha
              </h2>

              <p
                id="contact-role-subtitle"
                className="text-xs sm:text-[13.5px] font-medium text-[#4a5f80] mb-5 tracking-wide"
              >
                Clinical Psychologist &amp; Psychology Lecturer
              </p>

              <p
                id="contact-intro-text"
                className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-md font-normal"
              >
                I am here to support you on your journey towards better mental well-being.
                Feel free to reach out with any questions or to book a consultation.
              </p>

              {/* Contact Information Badges */}
              <div className="space-y-5 mb-10">
                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#f3edf9] text-[#705c8d] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#ebe2f5] transition-colors">
                    <Mail className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">Email</span>
                    <a
                      href="mailto:consult@ferasatayesha.com"
                      className="text-sm sm:text-[15px] font-medium text-[#172948] hover:text-[#705c8d] transition-colors"
                    >
                      consult@ferasatayesha.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#f3edf9] text-[#705c8d] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#ebe2f5] transition-colors">
                    <Phone className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">Phone</span>
                    <a
                      href="tel:+923005519820"
                      className="text-sm sm:text-[15px] font-medium text-[#172948] hover:text-[#705c8d] transition-colors"
                    >
                      +92 300 5519820
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Botanical & Handwritten Calligraphy Element */}
              <div className="relative pt-4 flex items-end justify-between max-w-sm">
                {/* Handwritten script with subtle left accent line */}
                <div className="flex items-center gap-3.5 select-none -rotate-2">
                  <div className="w-[1.5px] h-12 bg-[#c6bedb]" />
                  <div>
                    <p className="font-script text-2xl sm:text-[27px] text-[#6d5f8c] leading-[1.15]">
                      Your well-being
                      <br />
                      <span className="relative inline-block">
                        matters.
                        <svg
                          viewBox="0 0 80 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-2 text-[#8b7ca6] -mt-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 5 C24 8, 56 2, 78 5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            opacity="0.75"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Botanical leaf branch next to the calligraphy */}
                <div className="pointer-events-none select-none -mb-4">
                  <BotanicalLeafBranch className="w-24 sm:w-28 h-auto opacity-90" />
                </div>
              </div>
            </div>

            {/* Right Column: Send A Message Card */}
            <div className="lg:col-span-7">
              <div
                id="contact-form-card"
                className="bg-[#f5f3f9] border border-[#e7e1f1] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative"
              >
                <span
                  id="contact-form-eyebrow"
                  className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#705c8d] uppercase mb-1.5 block"
                >
                  SEND A MESSAGE
                </span>

                <h3
                  id="contact-form-title"
                  className="font-serif-title text-2xl sm:text-3xl lg:text-[32px] text-[#172948] font-normal tracking-tight mb-2"
                >
                  We’d Love to Hear From You
                </h3>

                <p
                  id="contact-form-subtitle"
                  className="text-xs sm:text-sm text-slate-600 mb-6 font-normal"
                >
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                {/* Success Feedback Alert */}
                {isSuccess && (
                  <div
                    id="contact-form-success-banner"
                    className="mb-6 bg-[#efe9f8] border border-[#d8cde9] text-[#4d3d69] px-4 py-3.5 rounded-xl flex items-center gap-3 text-xs sm:text-sm animate-in fade-in slide-in-from-top-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#6c5b8e] shrink-0" />
                    <span>
                      Thank you! Your message has been sent successfully. Ferasat Ayesha will get back to you soon.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Full Name */}
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-[#705c8d]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="contact-full-name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#ded7ea] rounded-xl text-xs sm:text-sm text-[#172948] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#705c8d]/30 focus:border-[#705c8d] transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Field 2: Contact Number */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5"
                    >
                      Contact Number <span className="text-[#705c8d]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#ded7ea] rounded-xl text-xs sm:text-sm text-[#172948] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#705c8d]/30 focus:border-[#705c8d] transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Field 3: Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-[#705c8d]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#ded7ea] rounded-xl text-xs sm:text-sm text-[#172948] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#705c8d]/30 focus:border-[#705c8d] transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Field 4: Your Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5"
                    >
                      Your Message <span className="text-[#705c8d]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#ded7ea] rounded-xl text-xs sm:text-sm text-[#172948] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#705c8d]/30 focus:border-[#705c8d] transition-colors shadow-2xs resize-y min-h-[110px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-form-submit-btn"
                      className="bg-[#705b8e] hover:bg-[#5e4b7b] disabled:bg-[#705b8e]/70 text-white text-xs sm:text-sm font-medium px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4 stroke-[2]" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. BOTTOM CTA SECTION - READY TO TAKE THE NEXT STEP?
          Exact match to reference image:
          - Background: Soft airy off-white canvas with blurred delicate floral branch on the left
          - Left: Blurred botanical shadow/leaves
          - Eyebrow: READY TO TAKE THE NEXT STEP?
          - Heading: Take the first step toward better psychological well-being.
          - Subtitle: Book your consultation today and begin your journey towards a healthier and more balanced you.
          - Button: [Calendar] Book Your Consultation →
          - Right: Delicate BotanicalLeafBranch line art rising on the far right edge
      ========================================================= */}
      <section
        id="contact-bottom-cta-section"
        className="relative bg-[#f8f6fc] border-t border-purple-100/70 overflow-hidden py-16 sm:py-20 lg:py-22"
      >
        {/* Left: Softly blurred, subtle botanical leaf branch shadow from bottom-left */}
        <div className="absolute left-0 bottom-0 top-0 w-60 sm:w-72 md:w-84 lg:w-[420px] pointer-events-none z-10 select-none overflow-hidden flex items-end">
          <img
            src={leafShadowImg}
            alt=""
            className="w-full h-full object-cover object-left-bottom mix-blend-multiply filter blur-[2.5px] sm:blur-[3px] opacity-45 sm:opacity-55 [mask-image:linear-gradient(to_right,black_20%,transparent_85%)] [webkit-mask-image:linear-gradient(to_right,black_20%,transparent_85%)]"
            aria-hidden="true"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Far Right: Botanical leaf branch rising on right edge */}
        <div className="absolute right-0 bottom-0 pointer-events-none select-none z-10">
          <BotanicalLeafBranch className="w-36 sm:w-48 lg:w-56 xl:w-64 h-auto" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <span
                id="contact-bottom-cta-eyebrow"
                className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#716591] uppercase block mb-3"
              >
                READY TO TAKE THE NEXT STEP?
              </span>

              <h2
                id="contact-bottom-cta-heading"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[40px] text-[#172948] font-normal leading-[1.18] mb-4 tracking-tight"
              >
                Take the first step toward
                <br />
                better psychological well-being.
              </h2>

              <p
                id="contact-bottom-cta-description"
                className="text-xs sm:text-sm lg:text-[14.5px] text-[#4a5c77] font-sans leading-relaxed max-w-xl font-normal"
              >
                Book your consultation today and begin your journey towards a healthier and more balanced you.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <button
                id="contact-bottom-cta-book-btn"
                onClick={() => {
                  const formElement = document.getElementById('contact-form-card');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    onOpenBooking();
                  }
                }}
                className="bg-[#705b8e] hover:bg-[#5e4b7b] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-md shadow-[#705b8e]/25 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 stroke-[2]" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

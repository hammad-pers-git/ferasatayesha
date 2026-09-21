import React from 'react';
import {
  Calendar,
  ArrowRight,
  Brain,
  Users,
  HeartHandshake,
  ClipboardList,
  Smile,
  Compass,
  Sparkles,
  Leaf,
  ShieldPlus,
  Target,
  Heart,
} from 'lucide-react';
import heroBgImage from '../assets/images/services_hero_banner_1789893109758.jpg';
import approachBannerImg from '../assets/images/my_approach_banner_1789822213589.jpg';
import leafShadowImg from '../assets/images/leaf_branch_bottom_left_1789823218498.jpg';
import {
  BotanicalHeroCorner,
  BotanicalFlourish,
  BotanicalBranch,
  BotanicalSunlightShadow,
  BotanicalSunlightShadowBottom,
  BotanicalFineLineBranch,
  BotanicalLeafBranch,
} from './BotanicalDecorations';

interface ServicesPageProps {
  onOpenBooking: (serviceTitle?: string) => void;
  onOpenLearnMore?: () => void;
  onSelectTab?: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
  onOpenLearnMore,
  onSelectTab,
}) => {
  const serviceCards = [
    {
      id: 'individual-counseling',
      title: 'Individual Counseling',
      description: 'Support for emotional challenges, stress, anxiety, depression and more.',
      icon: Brain,
    },
    {
      id: 'couples-marriage',
      title: 'Couples & Marriage Counseling',
      description: 'Build healthier communication and stronger relationships.',
      icon: HeartHandshake,
    },
    {
      id: 'family-counseling',
      title: 'Family Counseling',
      description: 'Improve family dynamics, resolve conflicts and strengthen bonds.',
      icon: Users,
    },
    {
      id: 'psychological-assessment',
      title: 'Psychological Assessment',
      description: 'In-depth assessment for better understanding and effective intervention.',
      icon: ClipboardList,
    },
    {
      id: 'child-adolescent',
      title: 'Child & Adolescent Support',
      description: 'Support for behavioral, emotional and developmental concerns.',
      icon: Smile,
    },
    {
      id: 'life-transitions',
      title: 'Life Transitions',
      description: 'Guidance during major life changes such as career, relationship, or personal transitions.',
      icon: Compass,
    },
    {
      id: 'mental-health-support',
      title: 'Mental Health Support',
      description: 'Compassionate care for conditions such as anxiety, depression, stress and burnout.',
      icon: Sparkles,
    },
  ];

  const approachFeatures = [
    {
      title: 'Empathetic & Non-Judgmental',
      subtitle: 'A safe space to be yourself.',
      icon: Leaf,
    },
    {
      title: 'Confidential & Professional',
      subtitle: 'Your privacy is always respected.',
      icon: ShieldPlus,
    },
    {
      title: 'Goal-Oriented',
      subtitle: 'Focused on your personal growth.',
      icon: Target,
    },
    {
      title: 'Holistic Well-being',
      subtitle: 'Mind, Emotions, Behavior, Life.',
      icon: Heart,
    },
  ];

  const stagesOfLife = [
    'Adults',
    'Couples',
    'Families',
    'Children & Adolescents',
    'Students & Young Adults',
  ];

  return (
    <div id="services-page-container" className="pt-0 pb-0 animate-in fade-in duration-300">
      {/* =========================================================
          1. HERO SECTION - OUR SERVICES
          Exact match to reference image:
          - Left (Desktop) / Top (Mobile & Tablet):
            OUR SERVICES eyebrow, "Personalized Support for a Healthier Mind"
            title, exact paragraph copy, "Book Your Consultation →" pill button
          - Right (Desktop) / Down (Mobile & Tablet):
            Cozy therapy room with armchair, lilac cushion, potted plant, books,
            and floating script quote "Better Support. Brighter Tomorrow" with hand-drawn underline
          ========================================================= */}
      <section
        id="services-hero"
        className="relative bg-[#faf8f6] border-b border-slate-100/80 overflow-hidden w-full"
      >
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[570px] flex items-center">
          {/* Single Continuous Hero Image across the right side with seamless blend/fade into the left content area */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img
              id="services-hero-bg-img"
              src={heroBgImage}
              alt="Cozy and peaceful therapy room with comfortable armchair, lilac pillow, side table with plant and books, and warm light"
              className="w-full h-full object-cover object-[78%_center] sm:object-[74%_center] md:object-[70%_center] lg:object-center"
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

          {/* Floating Handwritten Script Quote on the right:
              "Better
               Support
               Brighter
               Tomorrow"
              with handwritten underline stroke matching the reference
          */}
          <div
            id="services-hero-script-quote"
            className="absolute right-6 sm:right-10 md:right-14 lg:right-10 xl:right-14 top-8 sm:top-12 lg:top-20 xl:top-24 z-20 pointer-events-none select-none text-right -rotate-2"
          >
            <div className="inline-block text-right">
              <p className="font-script text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#5e527d] leading-[1.16] drop-shadow-xs">
                Better
                <br />
                Support
                <br />
                Brighter
                <br />
                Tomorrow
              </p>
              {/* Hand-drawn decorative underline stroke */}
              <svg
                className="w-24 sm:w-28 lg:w-32 h-3.5 text-[#705b8e]/75 mt-1 ml-auto"
                viewBox="0 0 120 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 5 8 C 32 5, 75 4, 115 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Main Content Container (Placed over the light negative space on the left) */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
              <p
                id="services-hero-eyebrow"
                className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#645388] mb-3.5 sm:mb-4"
              >
                OUR SERVICES
              </p>

              <h1
                id="services-hero-title"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal text-[#152744] leading-[1.14] tracking-tight mb-4 sm:mb-5"
              >
                Personalized Support
                <br />
                for a Healthier Mind
              </h1>

              <p
                id="services-hero-desc"
                className="text-[#3b4c66] text-xs sm:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mb-7 sm:mb-8 font-sans font-normal"
              >
                I offer compassionate, evidence-informed psychological services to help you navigate
                life&apos;s challenges, build resilience, and create a meaningful change.
              </p>

              <div>
                <button
                  id="services-book-consultation-btn"
                  onClick={() => onOpenBooking('Individual Counseling')}
                  className="bg-[#705b8e] hover:bg-[#5e4b7b] text-white text-xs sm:text-sm font-medium px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-md shadow-[#705b8e]/25 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. AREAS OF SUPPORT - HOW I CAN HELP
          Grid matching the reference image layout:
          Row 1: Intro block + Individual, Couples, Family
          Row 2: Assessment, Child & Adolescent, Transitions, Mental Health
          ========================================================= */}
      <section
        id="areas-of-support"
        className="py-16 sm:py-20 lg:py-24 bg-[#faf9fc] border-b border-slate-100/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Slot 1: Section Header Block */}
            <div className="flex flex-col justify-center p-6 sm:p-7">
              <p
                id="areas-eyebrow"
                className="text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase text-[#645388] mb-3"
              >
                AREAS OF SUPPORT
              </p>
              <h2
                id="areas-title"
                className="font-serif-title text-3xl sm:text-[36px] font-normal text-[#152e4d] leading-[1.18] mb-4"
              >
                How I Can Help
              </h2>
              <p
                id="areas-desc"
                className="text-[#4a586d] text-xs sm:text-[13.5px] leading-relaxed font-sans"
              >
                Each person&apos;s journey is unique. I provide tailored support using a range of
                therapeutic approaches to meet your individual needs and goals.
              </p>
            </div>

            {/* Card 1: Individual Counseling */}
            <div
              id="service-card-individual-counseling"
              onClick={() => onOpenBooking(serviceCards[0].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <Brain className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[0].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[0].description}
              </p>
            </div>

            {/* Card 2: Couples & Marriage Counseling */}
            <div
              id="service-card-couples-marriage"
              onClick={() => onOpenBooking(serviceCards[1].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <HeartHandshake className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[1].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[1].description}
              </p>
            </div>

            {/* Card 3: Family Counseling */}
            <div
              id="service-card-family-counseling"
              onClick={() => onOpenBooking(serviceCards[2].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <Users className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[2].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[2].description}
              </p>
            </div>

            {/* Card 4: Psychological Assessment */}
            <div
              id="service-card-psychological-assessment"
              onClick={() => onOpenBooking(serviceCards[3].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <ClipboardList className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[3].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[3].description}
              </p>
            </div>

            {/* Card 5: Child & Adolescent Support */}
            <div
              id="service-card-child-adolescent"
              onClick={() => onOpenBooking(serviceCards[4].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <Smile className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[4].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[4].description}
              </p>
            </div>

            {/* Card 6: Life Transitions */}
            <div
              id="service-card-life-transitions"
              onClick={() => onOpenBooking(serviceCards[5].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <Compass className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[5].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[5].description}
              </p>
            </div>

            {/* Card 7: Mental Health Support */}
            <div
              id="service-card-mental-health-support"
              onClick={() => onOpenBooking(serviceCards[6].title)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-xs hover:shadow-md hover:border-[#6c628e]/30 transition-all duration-200 cursor-pointer flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f0fa] text-[#6c628e] group-hover:bg-[#6c628e] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-sans text-base sm:text-[17px] font-medium text-slate-800 mb-2">
                {serviceCards[6].title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                {serviceCards[6].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MY APPROACH - EVIDENCE-BASED & CLIENT-CENTERED
          Exact match to user reference image:
          - Top: MY APPROACH eyebrow & Evidence-Based & Client-Centered heading
          - Middle left: Description paragraph & Learn More pill button
          - Vertical divider line
          - Middle right: 4 vertical feature rows with soft circular purple icon badges
          - Far right: Panoramic therapy office desk with notebook, pen, vase with plant,
                       fading smoothly into white canvas
          - Fully responsive: Stacks top-down on mobile, panoramic on desktop
          ========================================================= */}
      <section
        id="my-approach"
        className="relative bg-white border-b border-slate-100/80 overflow-hidden w-full"
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[460px] lg:min-h-[500px] xl:min-h-[540px]">
          {/* Left / Top: Content Area */}
          <div className="relative w-full lg:w-[62%] xl:w-[60%] flex flex-col justify-center py-10 sm:py-14 lg:py-16 px-6 sm:px-10 md:px-14 lg:pl-16 xl:pl-24 lg:pr-8 z-20 bg-white">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p
                id="approach-eyebrow"
                className="text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase text-[#645388] mb-3 sm:mb-4"
              >
                MY APPROACH
              </p>

              {/* Main Heading */}
              <h2
                id="approach-title"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] xl:text-[44px] font-normal text-[#172948] leading-[1.15] tracking-tight mb-7 sm:mb-9"
              >
                Evidence-Based &amp; Client-Centered
              </h2>

              {/* Two Column Layout with Vertical Divider Line */}
              <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 lg:gap-10">
                {/* Column 1: Paragraph & Learn More Button */}
                <div className="w-full sm:w-[50%] flex flex-col justify-between">
                  <p
                    id="approach-desc"
                    className="text-[#435368] text-xs sm:text-[13.5px] leading-relaxed font-sans mb-7 font-normal"
                  >
                    I use a blend of evidence-based therapeutic approaches, including CBT, mindfulness,
                    and supportive therapy, tailored to your unique needs. My approach is collaborative,
                    compassionate, and focused on your growth.
                  </p>

                  <div>
                    <button
                      id="approach-learn-more-btn"
                      onClick={() => {
                        if (onOpenLearnMore) {
                          onOpenLearnMore();
                        } else if (onSelectTab) {
                          onSelectTab('about');
                        }
                      }}
                      className="inline-flex items-center gap-2 border border-[#9b8cbd] hover:border-[#6c628e] text-[#6c628e] hover:text-[#584e75] bg-white hover:bg-[#faf8fd] px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-2xs active:scale-98"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Vertical Divider Line (matching the reference image) */}
                <div className="hidden sm:block w-px bg-slate-200/90 self-stretch shrink-0 my-1" />

                {/* Column 2: 4 Feature Items Stacked Vertically */}
                <div className="w-full sm:w-[48%] flex flex-col justify-center space-y-4 sm:space-y-4.5">
                  {approachFeatures.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#f4f0fa] text-[#6c628e] flex items-center justify-center shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13.5px] font-medium text-slate-800 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-[11.5px] sm:text-xs leading-normal mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right / Down: Panoramic Therapy Office Desk Photo */}
          <div className="relative w-full lg:w-[38%] xl:w-[40%] h-[300px] sm:h-[380px] md:h-[440px] lg:h-auto min-h-[280px] lg:min-h-full overflow-hidden bg-[#faf8fc] flex items-center justify-center">
            <img
              id="approach-img"
              src={approachBannerImg}
              alt="Light oak therapy desk with closed notebook and pen, green plant in vase, and soft Scandinavian therapy clinic background"
              className="w-full h-full object-cover object-[70%_center] sm:object-[75%_center] lg:object-[80%_center] select-none"
              referrerPolicy="no-referrer"
            />

            {/* Desktop Left-to-Right Soft Blend into White Canvas */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-28 xl:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

            {/* Mobile & Tablet Top Soft Fade */}
            <div className="lg:hidden absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Subtle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHO CAN BENEFIT - SUPPORT FOR ALL STAGES OF LIFE
          Left: Botanical leaf decoration + Title & Description
          Right: Pill tags for categories
          ========================================================= */}
      <section
        id="who-can-benefit"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#faf9fc] border-b border-slate-100/80 overflow-hidden"
      >
        {/* Botanical leaf branch rising on the far left edge */}
        <div className="absolute left-0 bottom-0 pointer-events-none z-10 select-none">
          <BotanicalLeafBranch className="w-24 sm:w-32 lg:w-36 xl:w-40 h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pl-6 sm:pl-10 lg:pl-14">
            {/* Left Block: Heading & Description */}
            <div className="lg:col-span-6">
              <p
                id="benefit-eyebrow"
                className="text-xs sm:text-[13px] font-medium tracking-[0.22em] uppercase text-[#645388] mb-3"
              >
                WHO CAN BENEFIT?
              </p>
              <h2
                id="benefit-title"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#152e4d] leading-[1.18] mb-4"
              >
                Support for All Stages of Life
              </h2>
              <p
                id="benefit-desc"
                className="text-[#384860] text-xs sm:text-[13.5px] leading-relaxed font-sans max-w-lg"
              >
                My services are designed for individuals, couples, families and children who are
                ready to take the next step toward better mental health.
              </p>
            </div>

            {/* Right Block: Pill Tags */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {stagesOfLife.slice(0, 3).map((stage, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f3edf9] text-[#524472] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#ede5f6] select-none hover:bg-[#ebe2f5] transition-colors"
                  >
                    {stage}
                  </span>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {stagesOfLife.slice(3).map((stage, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f3edf9] text-[#524472] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#ede5f6] select-none hover:bg-[#ebe2f5] transition-colors"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. TAKE THE FIRST STEP - CALL TO ACTION
          Exact match to user reference image:
          - Background: Warm cream/off-white canvas (#fbf9f6)
          - Left: Dappled sunlight leaf shadow falling from top-left
          - Center:
            - Eyebrow: TAKE THE FIRST STEP (tracked slate-blue)
            - Title: Your Mental Well-being Matters (navy serif)
            - Description: Reach out today to schedule a consultation...
            - Pill Button: [Calendar icon] Book Appointment →
          - Right:
            - Handwritten script:
              "Healing
               is not a destination,
               it's a journey" with hand-drawn underline curve
            - Delicate fine-line botanical branch rising on far-right edge
          ========================================================= */}
      <section
        id="services-cta"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#fbf9f6] border-t border-slate-100/90 overflow-hidden"
      >
        {/* Left: Softly blurred, subtle botanical leaf branch shadow growing from bottom-left */}
        <div className="absolute left-0 bottom-0 top-0 w-60 sm:w-72 md:w-84 lg:w-[420px] pointer-events-none z-10 select-none overflow-hidden flex items-end">
          <img
            src={leafShadowImg}
            alt=""
            className="w-full h-full object-cover object-left-bottom mix-blend-multiply filter blur-[2.5px] sm:blur-[3px] opacity-45 sm:opacity-55 [mask-image:linear-gradient(to_right,black_20%,transparent_85%)] [webkit-mask-image:linear-gradient(to_right,black_20%,transparent_85%)]"
            aria-hidden="true"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right: Botanical leaf branch rising on far-right edge */}
        <div className="absolute right-0 bottom-0 pointer-events-none z-10 select-none">
          <BotanicalLeafBranch className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          {/* Eyebrow */}
          <p
            id="cta-eyebrow"
            className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#607494] mb-3"
          >
            TAKE THE FIRST STEP
          </p>

          {/* Heading */}
          <h2
            id="cta-title"
            className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#172948] leading-[1.18] mb-3.5 sm:mb-4 tracking-tight"
          >
            Your Mental Well-being Matters
          </h2>

          {/* Subtitle / Description */}
          <p
            id="cta-desc"
            className="text-[#4c5f79] text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed max-w-xl mx-auto mb-7 sm:mb-8 font-sans font-normal"
          >
            Reach out today to schedule a consultation and begin your journey
            <br className="hidden sm:inline" />
            {' '}towards a healthier, more balanced life.
          </p>

          {/* Action Button with Calendar icon and Arrow */}
          <div className="flex justify-center">
            <button
              id="cta-book-appointment-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#6c628e] hover:bg-[#584e75] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-md shadow-[#6c628e]/25 transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Right floating handwritten script quote matching reference */}
        <div
          id="cta-script-quote"
          className="hidden lg:block absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none text-right -rotate-2 z-20"
        >
          <div className="inline-block text-right">
            <p className="font-script text-2xl sm:text-[28px] xl:text-[32px] text-[#5e527d] leading-[1.22] drop-shadow-2xs">
              Healing
              <br />
              is not a destination,
              <br />
              it&apos;s a journey
            </p>
            {/* Hand-drawn curved underline stroke */}
            <svg
              className="w-24 sm:w-28 xl:w-32 h-3.5 text-[#6c628e]/70 mt-1 ml-auto"
              viewBox="0 0 120 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 8C35 12 80 12 116 5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

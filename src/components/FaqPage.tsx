import React, { useState } from 'react';
import {
  MessageSquare,
  User,
  Users,
  Shield,
  CreditCard,
  Laptop,
  Calendar,
  Heart,
  Plus,
  Minus,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Info,
} from 'lucide-react';
import heroBannerImg from '../assets/images/faq_hero_books_1790047947513.jpg';
import { BotanicalHeroCorner } from './BotanicalDecorations';

export interface FaqPageProps {
  onOpenBooking: () => void;
  onSelectTab: (tab: string) => void;
}

/**
 * Delicate botanical leaf branch line art
 * Exact match to user's reference image:
 * - Slender central stem curving upwards
 * - Bottom-left pointed leaf with central vein
 * - Bottom-right horizontal pointed leaf with undulating contour
 * - Small young sprout leaf nestled right above bottom-right leaf
 * - Mid-left pointed leaf pointing up-left
 * - Mid-right pointed leaf pointing up-right
 * - Terminal top leaf pointing towards upper-right
 * Used in both the Hero Section (bottom-left) and the Let's Talk CTA (bottom-right)
 */
export const BotanicalLeafBranch: React.FC<{ className?: string; stroke?: string; fill?: string }> = ({
  className = 'w-44 h-auto',
  stroke = '#9887af',
  fill = 'none',
}) => (
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
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.85"
    />

    {/* 1. Leaf 1 (Bottom Left - pointing towards the corner) */}
    <path
      d="M 86 220 C 58 210, 24 186, 32 134 C 48 166, 76 194, 86 220 Z"
      stroke={stroke}
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 86 220 C 66 186, 46 156, 32 134"
      stroke={stroke}
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 2. Leaf 2 (Bottom Right - undulating horizontal leaf) */}
    <path
      d="M 97 206 C 120 190, 146 178, 172 178 C 154 206, 126 220, 97 206 Z"
      stroke={stroke}
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 97 206 C 124 196, 148 186, 172 178"
      stroke={stroke}
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 3. Leaf 3 (Small Sprout directly above bottom-right leaf) */}
    <path
      d="M 102 174 C 110 162, 125 156, 136 161 C 128 172, 114 178, 102 174 Z"
      stroke={stroke}
      strokeWidth="1.0"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 102 174 C 114 167, 126 163, 136 161"
      stroke={stroke}
      strokeWidth="0.75"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 4. Leaf 4 (Middle Left) */}
    <path
      d="M 105 152 C 90 128, 76 102, 82 76 C 97 94, 106 125, 105 152 Z"
      stroke={stroke}
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 105 152 C 96 122, 88 96, 82 76"
      stroke={stroke}
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 5. Leaf 5 (Middle Right) */}
    <path
      d="M 112 142 C 132 118, 164 104, 192 108 C 172 136, 140 146, 112 142 Z"
      stroke={stroke}
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 112 142 C 140 127, 168 116, 192 108"
      stroke={stroke}
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 6. Leaf 6 (Terminal Top Apex Leaf) */}
    <path
      d="M 128 98 C 123 70, 142 46, 164 34 C 170 58, 154 82, 128 98 Z"
      stroke={stroke}
      strokeWidth="1.15"
      strokeLinejoin="round"
      fill={fill}
      fillOpacity={fill === 'none' ? '0' : '0.28'}
    />
    <path
      d="M 128 98 C 140 74, 152 50, 164 34"
      stroke={stroke}
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

const FaqHeroBotanicalBranch = BotanicalLeafBranch;
const FaqLetsTalkBotanicalBranch = BotanicalLeafBranch;

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  icon: React.ElementType;
  questions: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general-info',
    title: 'General Information',
    eyebrow: 'GENERAL INFORMATION',
    heading: 'General Information',
    description:
      'Learn more about Ferasat Ayesha’s psychological support services, approach, and who can benefit.',
    icon: MessageSquare,
    questions: [
      {
        question: 'What type of psychological support do you provide?',
        answer:
          'Ferasat Ayesha provides psychological assessment, individual counseling, couples and marriage counseling, and mental health support for a range of emotional, personal, and relationship concerns.',
      },
      {
        question: 'What concerns can I seek psychological support for?',
        answer:
          'Support may be helpful for concerns such as anxiety, stress, depression and low mood, sleep-related concerns, emotional difficulties, relationship concerns, family concerns, and other psychological challenges.',
      },
      {
        question: 'Who can seek a consultation?',
        answer:
          'Individuals and couples can seek professional psychological support based on their concerns and needs.',
      },
      {
        question: 'Do I need to have a diagnosed mental health condition to seek support?',
        answer:
          'No. People may seek psychological support for a wide range of emotional, personal, relationship, or life concerns, even when they do not have a formal diagnosis.',
      },
      {
        question: 'How do I know if psychological support may be right for me?',
        answer:
          'If you are experiencing emotional difficulties, relationship challenges, persistent stress, or concerns affecting your well-being, speaking with a qualified psychologist may help you better understand your situation and identify appropriate support.',
      },
    ],
  },
  {
    id: 'consultation-process',
    title: 'Consultation Process',
    eyebrow: 'CONSULTATION PROCESS',
    heading: 'Consultation Process',
    description:
      'Everything you need to know about booking, preparing, and attending your consultation.',
    icon: User,
    questions: [
      {
        question: 'How do I book a consultation?',
        answer:
          'You can request a consultation through the website’s booking option or contact Ferasat Ayesha directly by phone or email.',
      },
      {
        question: 'What happens after I book an appointment?',
        answer:
          'You will receive the relevant appointment details and information needed to attend your scheduled consultation.',
      },
      {
        question: 'What can I expect during my first consultation?',
        answer:
          'The first consultation provides an opportunity to discuss your concerns, experiences, and reasons for seeking support. The psychologist may ask relevant questions to better understand your situation and determine appropriate support.',
      },
      {
        question: 'Do I need to prepare anything before my first consultation?',
        answer:
          'You do not need to prepare anything specific. It may be helpful to think about the concerns you would like to discuss and what you hope to gain from psychological support.',
      },
      {
        question: 'How long is a consultation?',
        answer: 'Each consultation is scheduled for 60 minutes.',
      },
    ],
  },
  {
    id: 'types-of-sessions',
    title: 'Types of Sessions',
    eyebrow: 'TYPES OF SESSIONS',
    heading: 'Types of Sessions',
    description:
      'Explore individual consultations, couples and marriage counseling, and psychological assessments.',
    icon: Users,
    questions: [
      {
        question: 'What types of consultations are available?',
        answer:
          'Individual consultations, couples and marriage counseling, and psychological assessment are available according to the individual’s or couple’s needs.',
      },
      {
        question: 'Do you provide couples and marriage counseling?',
        answer:
          'Yes. Couples and marriage counseling is available for relationship difficulties, communication concerns, emotional challenges, and other relationship-related concerns.',
      },
      {
        question: 'Can couples attend a consultation together?',
        answer:
          'Yes. Couples can participate together when seeking support for relationship or marriage concerns.',
      },
      {
        question: 'Do you provide psychological assessment?',
        answer:
          'Yes. Psychological assessment is available when appropriate to better understand psychological, emotional, behavioral, or personality-related concerns.',
      },
      {
        question: 'Can I seek individual counseling for personal concerns?',
        answer:
          'Yes. Individual counseling can provide professional support for personal, emotional, and psychological concerns.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    eyebrow: 'CONFIDENTIALITY',
    heading: 'Confidentiality',
    description: 'Your privacy, confidentiality, and comfort are foundational to professional care.',
    icon: Shield,
    questions: [
      {
        question: 'Are consultations confidential?',
        answer:
          'Yes. Privacy and confidentiality are important parts of professional psychological support.',
      },
      {
        question: 'Will my information be kept private?',
        answer:
          'Personal information and information shared during consultations are handled with respect for privacy and professional confidentiality.',
      },
      {
        question: 'Who will have access to the information I share?',
        answer:
          'Information shared during consultation is treated as private and confidential within the applicable professional and legal requirements.',
      },
      {
        question: 'Can I feel comfortable discussing personal or sensitive concerns?',
        answer:
          'Yes. The consultation provides a respectful and supportive environment where you can discuss your concerns openly.',
      },
    ],
  },
  {
    id: 'fees-payment',
    title: 'Fees & Payment',
    eyebrow: 'FEES & PAYMENT',
    heading: 'Fees & Payment',
    description: 'Clear details on consultation fees, payment methods, and payment timing.',
    icon: CreditCard,
    questions: [
      {
        question: 'What are the consultation fees?',
        answer:
          'Individual Consultation: PKR 3,000\nCouples Consultation: PKR 4,000\nFamily Consultation: PKR 4,000',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'Payment can be made through bank transfer or Easypaisa.',
      },
      {
        question: 'When do I need to make the payment?',
        answer: 'Payment details and instructions will be provided during the booking process.',
      },
    ],
  },
  {
    id: 'online-sessions',
    title: 'Online Sessions',
    eyebrow: 'ONLINE SESSIONS',
    heading: 'Online Sessions',
    description:
      'Information on how online psychological consultations are conducted and how to prepare.',
    icon: Laptop,
    questions: [
      {
        question: 'Are consultations provided online?',
        answer: 'Yes. All psychological consultations are provided online.',
      },
      {
        question: 'Which platform is used for online consultations?',
        answer:
          'There is no specific platform required. The consultation arrangements and relevant access details will be provided during the booking process.',
      },
      {
        question: 'Do I need special equipment for an online consultation?',
        answer:
          'You need a smartphone, tablet, or computer with a reliable internet connection and audio/video capability.',
      },
      {
        question: 'How should I prepare for an online consultation?',
        answer:
          'Choose a quiet and private space where you can speak comfortably without unnecessary interruptions. A stable internet connection is also recommended.',
      },
    ],
  },
  {
    id: 'cancellation-rescheduling',
    title: 'Cancellation & Rescheduling',
    eyebrow: 'CANCELLATION & RESCHEDULING',
    heading: 'Cancellation & Rescheduling',
    description: 'Guidelines and simple steps for cancelling or rescheduling your consultation.',
    icon: Calendar,
    questions: [
      {
        question: 'Can I cancel my appointment?',
        answer:
          'Yes. If you need to cancel your appointment, please provide at least 24 hours’ notice.',
      },
      {
        question: 'Is there a cancellation fee?',
        answer: 'No. There is no cancellation fee.',
      },
      {
        question: 'Can I reschedule my appointment?',
        answer:
          'Yes. You can request to reschedule your appointment by contacting Ferasat Ayesha.',
      },
      {
        question: 'Is there a rescheduling fee?',
        answer: 'No. There is no rescheduling fee.',
      },
      {
        question: 'How do I reschedule my consultation?',
        answer:
          'Contact Ferasat Ayesha using the available contact details and provide your appointment information.',
      },
    ],
  },
  {
    id: 'specific-concerns',
    title: 'Support for Specific Concerns',
    eyebrow: 'SUPPORT FOR SPECIFIC CONCERNS',
    heading: 'Support for Specific Concerns',
    description:
      'Professional support for anxiety, depression, sleep, relationships, child development, and more.',
    icon: Heart,
    questions: [
      {
        question: 'Do you provide support for anxiety and stress?',
        answer:
          'Yes. Psychological support is available for individuals experiencing anxiety, stress, excessive worry, and related emotional difficulties.',
      },
      {
        question: 'Do you provide support for depression and low mood?',
        answer:
          'Yes. Individuals experiencing depression, persistent low mood, or related emotional concerns can seek psychological support.',
      },
      {
        question: 'Can I seek support for sleep-related concerns?',
        answer:
          'Yes. Psychological support is available for individuals experiencing sleep-related concerns that may affect their emotional well-being or daily life.',
      },
      {
        question: 'Do you provide couples and marriage counseling?',
        answer:
          'Yes. Couples and marriage counseling can address relationship difficulties, communication concerns, emotional challenges, and other relationship-related concerns.',
      },
      {
        question: 'Do you provide support for family concerns?',
        answer:
          'Yes. Psychological support may be helpful when individuals or families are experiencing relationship, communication, or emotional difficulties.',
      },
      {
        question: 'Do you work with children and developmental concerns?',
        answer:
          'Ferasat Ayesha has professional experience in child development and behavioral support, including experience as a Child Development ABA Therapist.',
      },
      {
        question: 'Can I seek psychological assessment?',
        answer:
          'Yes. Psychological assessment can be considered when assessment may help provide a better understanding of an individual’s psychological or emotional concerns.',
      },
    ],
  },
];

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking, onSelectTab }) => {
  // Mode: 'topic-view' (Page 1) or 'all-categories' (Page 2)
  const [viewMode, setViewMode] = useState<'topic-view' | 'all-categories'>('topic-view');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('general-info');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeCategory =
    FAQ_CATEGORIES.find((cat) => cat.id === selectedCategoryId) || FAQ_CATEGORIES[0];

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setViewMode('topic-view');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div id="faq-page-container" className="pt-0 pb-0 animate-in fade-in duration-300">
      {/* =========================================================
          1. HERO SECTION - COMMON QUESTIONS, THOUGHTFUL ANSWERS
          Exact match to user's reference image:
          - Panoramic banner with #faf8fc background
          - Left:
            Botanical branch line art on bottom-left edge (pure outline)
            Eyebrow: FREQUENTLY ASKED QUESTIONS
            Title: Common Questions, \n Thoughtful Answers
            Subtitle: Find answers to some of the most common questions...
          - Right:
            Seamless photo with round table, white ceramic vase,
            fresh green branches, stack of 3 books:
            "Mental Health", "Self Growth", "Better Tomorrow",
            armchair with lavender cushion in soft natural daylight.
      ========================================================= */}
      <section
        id="faq-hero"
        className="relative bg-[#faf8fc] border-b border-[#eee8f4] overflow-hidden w-full select-none"
      >
        <div className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] xl:min-h-[550px] flex items-center">
          {/* Panoramic Hero Image of Therapy space with round coffee table, vase with branches, 3 books ("Mental Health", "Self Growth", "Better Tomorrow") and armchair */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img
              id="faq-hero-bg-img"
              src={heroBannerImg}
              alt="Therapy space with round coffee table, white ceramic vase, green eucalyptus branches, books on Mental Health, Self Growth, and Better Tomorrow, and armchair with lavender cushion"
              className="w-full h-full object-cover object-[80%_center] sm:object-[76%_center] md:object-[72%_center] lg:object-center"
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
                  'linear-gradient(to right, #faf8fc 0%, #faf8fc 20%, rgba(250,248,252,0.92) 32%, rgba(250,248,252,0.45) 48%, rgba(250,248,252,0) 65%)',
              }}
            />
          </div>

          {/* Minimal Leaf Illustration on the Left Edge as per reference design */}
          <div className="absolute left-0 bottom-0 pointer-events-none z-20 select-none">
            <BotanicalHeroCorner className="w-24 sm:w-28 md:w-32 h-64 sm:h-80 text-[#9b8cbd]" />
          </div>

          {/* Left Content Container */}
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-xl lg:max-w-[520px]">
              <p
                id="faq-hero-eyebrow"
                className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#645388] mb-3.5 sm:mb-4"
              >
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h1
                id="faq-hero-heading"
                className="font-serif-title text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal text-[#152744] leading-[1.14] tracking-tight mb-4 sm:mb-5"
              >
                Common Questions,
                <br />
                Thoughtful Answers
              </h1>

              <p
                id="faq-hero-description"
                className="text-[#3b4c66] text-xs sm:text-[14px] lg:text-[15px] leading-relaxed max-w-lg font-sans font-normal"
              >
                Find answers to some of the most common questions about
                <br className="hidden sm:inline" /> my services, approach, and what to expect from your
                <br className="hidden sm:inline" /> therapy journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN CONTENT BODY
          Switchable between:
          - PAGE 1: 2-Column layout with FAQ Topics sidebar & active topic accordions
          - PAGE 2: Categorized full overview of all 8 sections (opens when clicking FAQ Topics)
      ========================================================= */}
      {viewMode === 'topic-view' ? (
        /* -------------------------------------------------------
           PAGE 1: TOPIC EXPLORER (Sidebar + Selected Category Accordions)
        ------------------------------------------------------- */
        <section id="faq-page-1-layout" className="bg-[#faf9fc] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: FAQ Topics Sidebar */}
              <div className="lg:col-span-4 xl:col-span-4 space-y-5">
                <div
                  id="faq-topics-card"
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs"
                >
                  {/* Clicking on "FAQ Topics" opens the second page simply */}
                  <button
                    id="faq-topics-title-btn"
                    onClick={() => {
                      setViewMode('all-categories');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-between mb-4 px-2 text-left group cursor-pointer transition-colors"
                    title="Click to view all FAQ topics and categories"
                  >
                    <h3
                      id="faq-topics-title"
                      className="font-serif-title text-xl sm:text-2xl font-semibold text-[#172948] group-hover:text-[#5e2374] transition-colors"
                    >
                      FAQ Topics
                    </h3>
                    <span className="text-xs font-medium text-[#716591] group-hover:text-[#5e2374] flex items-center gap-1 transition-colors">
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </button>

                  <div className="space-y-1.5">
                    {FAQ_CATEGORIES.map((category) => {
                      const IconComponent = category.icon;
                      const isSelected = category.id === activeCategory.id;

                      return (
                        <button
                          key={category.id}
                          id={`faq-topic-btn-${category.id}`}
                          onClick={() => setSelectedCategoryId(category.id)}
                          className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-left text-sm transition-all duration-200 group ${
                            isSelected
                              ? 'bg-[#eeeaf5] text-[#5e2374] font-medium shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-white text-[#5e2374] shadow-2xs'
                                  : 'text-slate-500 group-hover:text-slate-800'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="truncate text-[13.5px] sm:text-sm">
                              {category.title}
                            </span>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                              isSelected
                                ? 'text-[#5e2374] translate-x-0.5'
                                : 'text-slate-400 group-hover:text-slate-600'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sidebar Bottom Quote Card matching Page 1 */}
                <div
                  id="faq-sidebar-quote"
                  className="bg-[#f2eef8] rounded-3xl p-6 sm:p-7 border border-purple-100 relative overflow-hidden shadow-2xs"
                >
                  {/* Delicate botanical leaf branch rising from bottom-right corner */}
                  <div className="absolute -right-2 -bottom-2 pointer-events-none select-none z-0">
                    <BotanicalLeafBranch className="w-24 sm:w-28 h-auto" />
                  </div>

                  <p className="font-serif-title italic text-base sm:text-lg lg:text-[19px] text-[#243552] leading-relaxed relative z-10 max-w-[82%] sm:max-w-[80%]">
                    &ldquo;You are not alone. Support is always within reach.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Active Category Heading + Accordion List */}
              <div className="lg:col-span-8 xl:col-span-8">
                <div
                  id="faq-answers-container"
                  className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs"
                >
                  {/* Category Eyebrow & Title */}
                  <div className="border-b border-slate-100 pb-6 mb-6">
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-[#716591] uppercase block mb-1.5">
                      {activeCategory.eyebrow}
                    </span>
                    <h2 className="font-serif-title text-2xl sm:text-3xl text-[#172948] font-normal tracking-tight mb-2">
                      {activeCategory.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>

                  {/* Accordions List */}
                  <div className="divide-y divide-slate-100">
                    {activeCategory.questions.map((faq, index) => {
                      const itemKey = `${activeCategory.id}-${index}`;
                      const isOpen = !!openItems[itemKey];

                      return (
                        <div
                          key={itemKey}
                          id={`faq-item-${itemKey}`}
                          className="py-4.5 sm:py-5 transition-colors"
                        >
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`text-[15px] sm:text-[16.5px] font-medium leading-snug transition-colors ${
                                isOpen
                                  ? 'text-[#5e2374]'
                                  : 'text-[#172948] group-hover:text-[#5e2374]'
                              }`}
                            >
                              {faq.question}
                            </span>
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                                isOpen
                                  ? 'bg-[#eeeaf5] border-[#5e2374] text-[#5e2374]'
                                  : 'border-slate-300 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'
                              }`}
                            >
                              {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="mt-3.5 pr-6 sm:pr-8 text-sm sm:text-[15px] text-slate-600 font-sans leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                              <p className="whitespace-pre-line">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* -------------------------------------------------------
           PAGE 2: ALL CATEGORIES OVERVIEW
           Complete categorized overview matching FAQs Page2.jpeg
        ------------------------------------------------------- */
        <section id="faq-page-2-layout" className="bg-[#faf9fc] py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
            {/* Top Navigation Bar on Page 2 to return to Topics View */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-2">
              <button
                id="faq-back-to-topics-btn"
                onClick={() => {
                  setViewMode('topic-view');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 text-sm font-medium text-[#5e2374] hover:bg-[#eeeaf5] transition-all shadow-2xs group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to FAQ Topics</span>
              </button>
              <span className="text-xs text-slate-500 font-medium">
                Showing all 8 categories
              </span>
            </div>

            {FAQ_CATEGORIES.map((category) => {
              const IconComponent = category.icon;

              return (
                <div
                  key={category.id}
                  id={`all-cat-${category.id}`}
                  className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
                >
                  {/* Left Column: Icon Badge, Title, Description & Action Link */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#eeeaf5] flex items-center justify-center text-[#5e2374] shadow-2xs shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-title text-xl sm:text-2xl text-[#172948] font-semibold">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <button
                      onClick={() => handleSelectCategory(category.id)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#5e2374] hover:text-[#421653] transition-colors group"
                    >
                      <span>View Questions</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Right Column: Accordion of Questions in this category */}
                  <div className="lg:col-span-8 divide-y divide-slate-100">
                    {category.questions.map((faq, index) => {
                      const itemKey = `cat2-${category.id}-${index}`;
                      const isOpen = !!openItems[itemKey];

                      return (
                        <div key={itemKey} className="py-3.5 sm:py-4 transition-colors">
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`text-[14.5px] sm:text-[15.5px] font-medium leading-snug transition-colors ${
                                isOpen
                                  ? 'text-[#5e2374]'
                                  : 'text-[#172948] group-hover:text-[#5e2374]'
                              }`}
                            >
                              {faq.question}
                            </span>
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                                isOpen
                                  ? 'bg-[#eeeaf5] border-[#5e2374] text-[#5e2374]'
                                  : 'border-slate-300 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'
                              }`}
                            >
                              {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="mt-3 pr-6 text-sm text-slate-600 font-sans leading-relaxed animate-in fade-in duration-200">
                              <p className="whitespace-pre-line">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          3. BOTTOM CTA SECTION - "LET'S TALK"
          Exact match to user's reference image:
          - Background: Soft, airy pale lavender canvas (#f6f3f9)
          - Left:
            Eyebrow: STILL HAVE QUESTIONS?
            Heading: Let's Talk
            Description: If you didn't find what you were looking for...
            Button: [Calendar] Book Appointment → (rounded-full, #685d85)
          - Right:
            Handwritten script quote (-rotate-[5deg]):
              Taking the first step
                can be the start of
                  something better.
            With hand-drawn underline curve beneath "something better."
          - Far Right:
            Botanical leaf branch illustration rising along the right edge
      ========================================================= */}
      <section
        id="faq-lets-talk-section"
        className="relative bg-[#f6f3f9] border-t border-purple-100/70 overflow-hidden py-14 sm:py-18 lg:py-22"
      >
        {/* Subtle ambient light gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Botanical leaf branch illustration on the far right edge */}
        <div className="absolute right-2 sm:right-4 lg:right-6 bottom-0 pointer-events-none select-none z-10">
          <FaqLetsTalkBotanicalBranch className="w-36 sm:w-48 lg:w-56 xl:w-64 h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Description & Pill Button */}
            <div className="lg:col-span-7 xl:col-span-7">
              <span
                id="faq-lets-talk-eyebrow"
                className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#716591] uppercase block mb-3"
              >
                STILL HAVE QUESTIONS?
              </span>

              <h2
                id="faq-lets-talk-heading"
                className="font-serif-title text-4xl sm:text-5xl lg:text-[50px] text-[#172948] font-normal leading-[1.12] mb-4"
              >
                Let&apos;s Talk
              </h2>

              <p
                id="faq-lets-talk-description"
                className="text-sm sm:text-[15px] lg:text-base text-[#4a5c77] font-sans leading-relaxed max-w-lg mb-7 font-normal"
              >
                If you didn&apos;t find what you were looking for, feel free to reach out.
                I&apos;m here to answer your questions and support you on your journey
                towards better mental well-being.
              </p>

              <button
                id="faq-lets-talk-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#685d85] hover:bg-[#564c73] text-white text-sm sm:text-[14.5px] font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Handwritten Script Quote with Natural Stagger & Underline Swoosh */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-start lg:justify-center pr-4 lg:pr-12">
              <div className="relative flex flex-col items-start sm:items-center -rotate-[5deg] select-none">
                <div className="font-script text-[30px] sm:text-[36px] lg:text-[40px] text-[#695c83] leading-[1.25] text-left sm:text-center">
                  <span className="block">Taking the first step</span>
                  <span className="block pl-3 sm:pl-5">can be the start of</span>
                  <span className="block pl-7 sm:pl-10">something better.</span>
                </div>

                {/* Hand-drawn delicate underline swoop curve under "something better." */}
                <div className="w-full flex justify-end pr-2 sm:pr-4 -mt-1">
                  <svg
                    viewBox="0 0 160 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-36 sm:w-44 h-auto stroke-[#695c83] opacity-75"
                    aria-hidden="true"
                  >
                    <path
                      d="M 4 7 C 45 4, 110 5, 156 11"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

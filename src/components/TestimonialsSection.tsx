import React, { useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TestimonialItem } from '../types';
import { GoogleIcon, BotanicalFlourish } from './BotanicalDecorations';

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    date: '12 March 2025',
    avatarLetter: 'A',
    rating: 5,
    review:
      '“The sessions have truly helped me understand myself better. I feel more calm, confident and in control of my emotions. Highly recommend!”',
    source: 'google',
  },
  {
    id: '2',
    name: 'Rizwan Ali',
    date: '8 February 2025',
    avatarLetter: 'R',
    rating: 5,
    review:
      '“A very supportive and professional experience. The guidance I received has made a big difference in my mental well-being.”',
    source: 'google',
  },
  {
    id: '3',
    name: 'Sidra Fatima',
    date: '28 January 2025',
    avatarLetter: 'S',
    rating: 5,
    review:
      '“I was struggling with anxiety and now I feel more balanced and positive. Truly grateful for the support and empathy.”',
    source: 'google',
  },
  {
    id: '4',
    name: 'Muhammad Usman',
    date: '10 January 2025',
    avatarLetter: 'M',
    rating: 5,
    review:
      '“The sessions are insightful, thoughtful and practical. I\'ve learned so much about myself and my relationships.”',
    source: 'google',
  },
  {
    id: '5',
    name: 'Zainab Tariq',
    date: '18 December 2024',
    avatarLetter: 'Z',
    rating: 5,
    review:
      '“The marriage counselling sessions brought compassionate communication back into our relationship. We are profoundly thankful.”',
    source: 'google',
  },
  {
    id: '6',
    name: 'Hamza Bilal',
    date: '30 November 2024',
    avatarLetter: 'H',
    rating: 5,
    review:
      '“Exceptional clinical acumen. Ferasat Ayesha provides a remarkably safe, non-judgmental space that encouraged real personal growth.”',
    source: 'google',
  },
];

interface TestimonialCardViewProps {
  item: TestimonialItem;
  showFlourish?: boolean;
  className?: string;
  idPrefix?: string;
}

const SingleTestimonialCard: React.FC<TestimonialCardViewProps> = ({
  item,
  showFlourish = false,
  className = '',
  idPrefix = 'testimonial',
}) => {
  return (
    <div
      id={`${idPrefix}-card-${item.id}`}
      className={`bg-[#f9f8fc] border border-[#eee9f5] rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-sm ${className}`}
    >
      <div>
        {/* Card Top: Avatar, Name, Date & Google Badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-3">
            <div
              id={`${idPrefix}-avatar-${item.id}`}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#656a82] text-white flex items-center justify-center font-medium text-xs sm:text-sm shadow-xs select-none"
            >
              {item.avatarLetter}
            </div>
            <div>
              <h4
                id={`${idPrefix}-name-${item.id}`}
                className="text-xs sm:text-[13px] md:text-sm font-semibold text-[#1a2b49] leading-tight"
              >
                {item.name}
              </h4>
              <p
                id={`${idPrefix}-date-${item.id}`}
                className="text-[11px] text-slate-400 mt-0.5"
              >
                {item.date}
              </p>
            </div>
          </div>

          {/* Google Verified Review Icon */}
          <div
            id={`${idPrefix}-source-${item.id}`}
            className="shrink-0 p-1"
            title="Verified Google Review"
            aria-label="Verified Google Review"
          >
            <GoogleIcon className="w-4 h-4" />
          </div>
        </div>

        {/* 5 Golden Stars */}
        <div className="flex items-center gap-1 mb-3.5" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]"
              strokeWidth={0}
            />
          ))}
        </div>

        {/* Review Quote */}
        <p
          id={`${idPrefix}-text-${item.id}`}
          className="text-slate-600 text-xs sm:text-[13px] md:text-sm leading-relaxed relative z-10"
        >
          {item.review}
        </p>
      </div>

      {/* Decorative flourish */}
      {showFlourish && (
        <div className="absolute -right-2 -bottom-2 pointer-events-none z-0">
          <BotanicalFlourish className="w-16 h-16 text-[#8b7ca6]" />
        </div>
      )}
    </div>
  );
};

// Quadruple items so scrolling wraps seamlessly in both directions indefinitely
const repeatedTestimonials = [
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
];

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pause gentle drift temporarily after user interacts
  const pauseTemporarily = useCallback((duration = 4000) => {
    isPaused.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isPaused.current = false;
    }, duration);
  }, []);

  // Continuous gentle slow drift (ahista ahista)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initial position in the middle set so user can scroll left or right immediately
    const singleSetWidth = container.scrollWidth / 4;
    if (singleSetWidth > 0 && container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    let animationId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isPaused.current && !isDragging.current && container) {
        // Slow, soothing continuous drift: ~26px per second
        const driftSpeed = 26;
        container.scrollLeft += driftSpeed * delta;

        // Infinite loop wrap check
        const setWidth = container.scrollWidth / 4;
        if (setWidth > 0) {
          if (container.scrollLeft >= setWidth * 3) {
            container.scrollLeft -= setWidth;
          } else if (container.scrollLeft <= 20) {
            container.scrollLeft += setWidth;
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Manual Previous Button Click
  const handlePrev = () => {
    if (!scrollRef.current) return;
    pauseTemporarily(4000);
    const scrollAmount = window.innerWidth < 640 ? 300 : 360;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  // Manual Next Button Click
  const handleNext = () => {
    if (!scrollRef.current) return;
    pauseTemporarily(4000);
    const scrollAmount = window.innerWidth < 640 ? 300 : 360;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mouse drag handlers for desktop manual sliding
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    isPaused.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.25;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      pauseTemporarily(3500);
    }
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 overflow-hidden">
      {/* Section Header with Manual Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10 max-w-6xl mx-auto">
        <div>
          <p
            id="testimonials-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6c628e] mb-2"
          >
            WHAT CLIENTS SAY
          </p>

          <h2
            id="testimonials-title"
            className="font-serif-title text-3xl sm:text-4xl font-medium text-[#1a2b49] leading-tight mb-2"
          >
            Kind Words from Our Clients
          </h2>

          <p id="testimonials-subtitle" className="text-slate-500 text-xs sm:text-sm font-normal">
            Real stories. Positive changes. Here's what some of our clients have shared about their journey.
          </p>
        </div>

        {/* Manual Navigation Controls (Prev & Next buttons for instant manual sliding) */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto select-none">
          <button
            id="testimonials-prev-btn"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-[#39668d] focus:outline-hidden"
            aria-label="Previous testimonial"
            title="Slide previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="testimonials-next-btn"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-[#39668d] focus:outline-hidden"
            aria-label="Next testimonial"
            title="Slide next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Continuous Carousel Track */}
      <div className="relative group">
        {/* Subtle Edge Gradients for soft entry and exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block" />

        {/* Scrollable Container supporting Drag, Touch swipe & Gentle auto-drift */}
        <div
          ref={scrollRef}
          id="testimonials-scroll-track"
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            handleMouseUp();
            isPaused.current = false;
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={() => {
            isPaused.current = true;
          }}
          onTouchEnd={() => {
            pauseTemporarily(3500);
          }}
          className="flex gap-5 overflow-x-auto py-3 select-none cursor-grab active:cursor-grabbing px-2 sm:px-4 focus:outline-hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          role="region"
          aria-label="Client Testimonials Carousel"
        >
          {repeatedTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[340px] md:w-[360px] shrink-0"
            >
              <SingleTestimonialCard
                item={item}
                showFlourish={idx % 3 === 2}
                idPrefix={`testimonial-item-${idx}`}
                className="h-full min-h-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


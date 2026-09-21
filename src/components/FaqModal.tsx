import React, { useState } from 'react';
import { X, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What type of psychological support do you provide?',
    answer:
      'Ferasat Ayesha provides psychological assessment, individual counseling, couples and marriage counseling, and mental health support for a range of emotional, personal, and relationship concerns.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can request a consultation through the website’s booking option or contact Ferasat Ayesha directly by phone or email.',
  },
  {
    question: 'Are consultations provided online?',
    answer:
      'Yes. All psychological consultations are provided online. You need a smartphone, tablet, or computer with a reliable internet connection and audio/video capability.',
  },
  {
    question: 'What can I expect during my first consultation?',
    answer:
      'The first consultation provides an opportunity to discuss your concerns, experiences, and reasons for seeking support. The psychologist may ask relevant questions to better understand your situation and determine appropriate support.',
  },
  {
    question: 'Are consultations confidential?',
    answer:
      'Yes. Privacy and confidentiality are important parts of professional psychological support. Personal information and information shared during consultations are handled with respect for privacy and professional confidentiality.',
  },
  {
    question: 'What are the consultation fees?',
    answer:
      'Individual Consultation: PKR 3,000 | Couples Consultation: PKR 4,000 | Family Consultation: PKR 4,000. Payment can be made through bank transfer or Easypaisa.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer:
      'Yes. If you need to cancel your appointment, please provide at least 24 hours’ notice. There is no cancellation or rescheduling fee.',
  },
];

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div
      id="faq-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="faq-modal-content"
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#6c628e] block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#1a2b49] font-medium leading-tight">
            Client Inquiries &amp; Guidance
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Clear answers to help you begin your psychological wellness journey.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isExpanded = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-200 ${
                  isExpanded ? 'border-[#6c628e]/30 bg-[#faf8fd]' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isExpanded ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#1a2b49] leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6c628e] shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400">Have more questions?</p>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="bg-[#6c628e] hover:bg-[#595078] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

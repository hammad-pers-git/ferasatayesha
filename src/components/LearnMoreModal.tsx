import React from 'react';
import { X, Award, BookOpen, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import psychologistPortrait from '../assets/images/psychologist_portrait_1789818472197.jpg';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LearnMoreModal: React.FC<LearnMoreModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="learn-more-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="learn-more-modal-content"
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-slate-100">
          <img
            src={psychologistPortrait}
            alt="Ferasat Ayesha"
            className="w-24 h-24 rounded-2xl object-cover shadow-xs border border-slate-100"
          />
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#6c628e] block mb-1">
              PROFESSIONAL PROFILE
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#1a2b49] font-medium leading-tight">
              Ferasat Ayesha
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Clinical Psychologist &amp; Psychology Lecturer
            </p>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <span className="text-[11px] bg-[#f2effb] text-[#6c628e] font-medium px-2.5 py-0.5 rounded-full">
                M.Phil Clinical Psychology
              </span>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-medium px-2.5 py-0.5 rounded-full">
                Licensed Practitioner
              </span>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-medium px-2.5 py-0.5 rounded-full">
                University Lecturer
              </span>
            </div>
          </div>
        </div>

        {/* Details and Credentials */}
        <div className="space-y-5 text-slate-600 text-xs sm:text-sm leading-relaxed">
          <div>
            <h4 className="font-semibold text-slate-900 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <HeartHandshake className="w-4 h-4 text-[#6c628e]" />
              Therapeutic Philosophy
            </h4>
            <p>
              "I believe that therapy is an empowering collaborative space where compassion meets
              rigorous scientific psychology. Every individual brings a unique personal narrative shaped
              by family lineage, societal context, and neural resilience. My mission is to guide you toward
              clarity, emotional balance, and authentic self-acceptance."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#f9f8fc] border border-[#ece7f6] p-4 rounded-2xl">
              <h5 className="font-semibold text-[#1a2b49] flex items-center gap-2 mb-1.5 text-xs sm:text-sm">
                <Award className="w-4 h-4 text-[#6c628e]" />
                Clinical Specializations
              </h5>
              <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                <li>Anxiety, Panic Disorders &amp; OCD</li>
                <li>Depressive Disorders &amp; Mood Regulation</li>
                <li>Couples, Marital &amp; Interpersonal Dynamics</li>
                <li>Transgenerational &amp; Family Heritage Systems</li>
                <li>Adolescent Mental Health &amp; Emotional Wellness</li>
              </ul>
            </div>

            <div className="bg-[#f9f8fc] border border-[#ece7f6] p-4 rounded-2xl">
              <h5 className="font-semibold text-[#1a2b49] flex items-center gap-2 mb-1.5 text-xs sm:text-sm">
                <BookOpen className="w-4 h-4 text-[#6c628e]" />
                Academic &amp; Lecturer Role
              </h5>
              <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                <li>Lecturer in Abnormal &amp; Clinical Psychology</li>
                <li>Supervisor for Post-Graduate Clinical Interns</li>
                <li>Workshop Facilitator on Emotional Intelligence</li>
                <li>Published Researcher in Psychopathology</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-[11px] sm:text-xs text-slate-500">
              Practicing in accordance with international psychological ethics codes, ensuring 100% strict patient confidentiality and privacy.
            </p>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs sm:text-sm text-slate-500 hover:text-slate-800 font-medium"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="bg-[#6c628e] hover:bg-[#595078] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs"
          >
            <span>Book a Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, Video, MapPin } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Individual Counselling',
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: defaultService,
    mode: 'in-person',
    date: '2025-04-15',
    timeSlot: '11:00 AM',
    notes: '',
  });

  if (!isOpen) return null;

  const servicesList = [
    'Individual Counselling',
    'Psychological Assessment',
    'Couples & Marriage Counselling',
    'Mental Health Support',
  ];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="booking-close-btn"
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#6c628e] block mb-1">
                CONFIDENTIAL CONSULTATION
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl text-[#1a2b49] font-medium">
                Book Your Appointment
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                With Ferasat Ayesha, Clinical Psychologist
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Session Mode Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  CONSULTATION FORMAT
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'in-person' })}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.mode === 'in-person'
                        ? 'border-[#6c628e] bg-[#f5f2fb] text-[#1a2b49]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#6c628e]" />
                    <span>In-Person Clinic</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'online' })}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.mode === 'online'
                        ? 'border-[#6c628e] bg-[#f5f2fb] text-[#1a2b49]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#6c628e]" />
                    <span>Online Video</span>
                  </button>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="booking-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  SERVICE
                </label>
                <select
                  id="booking-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                  required
                >
                  {servicesList.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    PREFERRED DATE
                  </label>
                  <div className="relative">
                    <input
                      id="booking-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    PREFERRED TIME SLOT
                  </label>
                  <select
                    id="booking-time"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                    required
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    YOUR FULL NAME
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="e.g. Ayesha Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    CONTACT PHONE
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  BRIEF REASON / CONCERNS (OPTIONAL)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="Briefly mention what you would like support with..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="booking-submit-btn"
                  type="submit"
                  className="w-full bg-[#6c628e] hover:bg-[#595078] text-white py-3 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Strictly confidential &amp; encrypted patient intake.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-2xl text-[#1a2b49] font-medium">
              Consultation Request Received
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.fullName || 'Client'}</strong>.
              Your request for <strong className="text-slate-900">{formData.service}</strong> has been
              received for <strong className="text-slate-900">{formData.date} at {formData.timeSlot}</strong>.
            </p>
            <div className="bg-[#f8f6fc] border border-[#eee8f7] rounded-xl p-4 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1">
              <p>• <strong>Format:</strong> {formData.mode === 'in-person' ? 'In-Person Practice Clinic' : 'Secure Online Video Session'}</p>
              <p>• <strong>Confirmation:</strong> Our clinical coordinator will reach out via WhatsApp / phone to confirm your intake details.</p>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#6c628e] hover:bg-[#595078] text-white px-8 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

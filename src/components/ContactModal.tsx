import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        id="contact-modal-content"
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="contact-modal-close"
          onClick={handleClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#6c628e] block mb-1">
            GET IN TOUCH
          </span>
          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#1a2b49] font-medium">
            Contact Ferasat Ayesha
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Clinical Psychology Practice &amp; Academic Lectureship Inquiries
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-[#f9f8fc] border border-[#ece7f6] p-3.5 rounded-xl flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#6c628e] shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-[#1a2b49]">Practice Clinic</p>
              <p className="text-slate-500 mt-0.5">Executive Psychological Suites, Sector F-7, Islamabad &amp; Online</p>
            </div>
          </div>

          <div className="bg-[#f9f8fc] border border-[#ece7f6] p-3.5 rounded-xl flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#6c628e] shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-[#1a2b49]">Consultation Hours</p>
              <p className="text-slate-500 mt-0.5">Mon – Sat: 09:30 AM – 07:00 PM (By prior appointment)</p>
            </div>
          </div>

          <div className="bg-[#f9f8fc] border border-[#ece7f6] p-3.5 rounded-xl flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#6c628e] shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-[#1a2b49]">Direct Helpline / WhatsApp</p>
              <p className="text-slate-500 mt-0.5">+92 (051) 844-3291 / +92 300 5519820</p>
            </div>
          </div>

          <div className="bg-[#f9f8fc] border border-[#ece7f6] p-3.5 rounded-xl flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#6c628e] shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-[#1a2b49]">Confidential Email</p>
              <p className="text-slate-500 mt-0.5">consult@ferasatayesha.com</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Type</label>
              <input
                type="text"
                placeholder="e.g. Therapy consultation, Lecture invitation, General inquiry"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
              <textarea
                rows={3}
                required
                placeholder="Write your message here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-[#6c628e] focus:bg-white resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bg-[#6c628e] hover:bg-[#595078] text-white px-6 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  handleClose();
                  onOpenBooking();
                }}
                className="text-xs text-[#6c628e] hover:underline font-medium"
              >
                Or directly book an appointment →
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3 bg-emerald-50/50 rounded-2xl border border-emerald-100 p-6">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-serif-title text-xl text-slate-900 font-medium">Message Dispatched</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you for reaching out. Ferasat Ayesha's administrative assistant will respond to your inquiry within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#6c628e] text-white text-xs px-6 py-2 rounded-full font-medium mt-2"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

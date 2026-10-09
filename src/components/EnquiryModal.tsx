'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { X, MessageCircle, Phone, ArrowRight, Check } from './Icons';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialPlan }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: initialPlan || 'Annual Pass (₹12,500 – Limited Offer)',
    goal: 'Strength & Conditioning',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, plan: initialPlan }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = formData.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
    if (digits.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    const customMessage = `Hi Strength Lab, my name is ${formData.name.trim() || 'Athlete'} (Phone: ${digits}). I am interested in joining: ${formData.plan}. Focus area: ${formData.goal}. Please get in touch with me and schedule my visit.`;
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onClose();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Membership enquiry">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-t-3xl sm:rounded-3xl p-6 sm:p-9 shadow-2xl z-10 animate-scaleIn text-white max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/12 bg-white/[0.04] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
          aria-label="Close dialog"
        >
          <X size={17} />
        </button>

        {submitted ? (
          <div className="py-12 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#FFE600]/15 border border-[#FFE600]/50 text-[#FFE600] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(255,230,0,0.3)]">
              <Check size={30} />
            </div>
            <h3 className="font-display text-[1.9rem] text-white leading-none mb-2">
              CONNECTING TO TEAM…
            </h3>
            <p className="text-sm text-zinc-400">
              Opening WhatsApp with your membership details.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 mb-3">
                <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full" />
                Tumakuru’s 1st Luxury Fitness Centre
              </div>
              <h3 className="font-display text-[2.1rem] sm:text-4xl text-white leading-none">
                JOIN THE LAB.
              </h3>
              <p className="text-zinc-400 text-[13px] mt-2 leading-relaxed">
                Please share your contact number, and our team will get in touch with you shortly.
              </p>
            </div>

            <div className="mb-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.14em] mb-2.5">
                Immediate Assistance // Direct WhatsApp
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Strength Lab, I'm interested in joining the gym. Please share membership details with me."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-[12px] uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp: 7996855559</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center my-5">
              <div className="border-t border-white/10 w-full" />
              <span className="bg-[#141414] px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.14em] whitespace-nowrap">
                Or submit callback request
              </span>
              <div className="border-t border-white/10 w-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="enq-name" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Your name
                </label>
                <input
                  id="enq-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/30 transition"
                />
              </div>

              <div>
                <label htmlFor="enq-phone" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Phone number (Required)
                </label>
                <input
                  id="enq-phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/30 transition"
                />
              </div>

              <div>
                <label htmlFor="enq-plan" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Interested Membership Plan
                </label>
                <select
                  id="enq-plan"
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/30 transition"
                >
                  <option value="Annual Pass (₹12,500 – Limited Offer)">Annual Pass (₹12,500 – Limited-Time Offer)</option>
                  <option value="6 Months Plan (₹9,200)">6 Months Plan (₹9,200)</option>
                  <option value="100 Days Challenge (₹6,200)">100 Days Challenge (₹6,200)</option>
                  <option value="Monthly Plan (₹2,600)">Monthly Plan (₹2,600)</option>
                  <option value="Facility Tour / Discovery Visit">Facility Tour / Discovery Visit</option>
                </select>
              </div>

              <div>
                <label htmlFor="enq-goal" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Primary training discipline
                </label>
                <select
                  id="enq-goal"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/30 transition"
                >
                  <option value="Strength & Conditioning">Strength & Conditioning</option>
                  <option value="CrossFit & Functional Training">CrossFit & Functional Training</option>
                  <option value="HIIT & Cardio Fat Loss">HIIT & Cardio Fat Loss</option>
                  <option value="Mobility & Recovery">Mobility & Recovery</option>
                  <option value="Steam Bath & Add-on Contrast Recovery">Steam Bath & Add-on Contrast Recovery</option>
                  <option value="Pickleball & Turf Ground">Pickleball & Turf Ground</option>
                </select>
              </div>

              {error && (
                <p className="text-[13px] text-red-400 bg-red-950/40 border border-red-500/30 rounded-xl px-4 py-3">{error}</p>
              )}

              <button
                type="submit"
                className="btn-primary rounded-full w-full py-4 px-6 text-black font-extrabold text-[12px] uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,230,0,0.35)]"
              >
                <span>Submit & Connect on WhatsApp</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 text-[12px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <Phone size={13} className="text-[#FFE600]" />
                <span>Call Desk: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

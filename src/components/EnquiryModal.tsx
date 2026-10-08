'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { X, MessageCircle, Phone, ArrowRight, Check } from './Icons';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Strength & Muscle Building',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
    const customMessage = `Hi Strength Lab, my name is ${formData.name.trim() || 'Athlete'} (Phone: ${digits}). My primary fitness goal is: ${formData.goal}. I'd like to book a visit and check membership options.`;
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
            <div className="w-16 h-16 rounded-full bg-[#E10600]/15 border border-[#E10600]/50 text-[#ff5a52] flex items-center justify-center mx-auto mb-6">
              <Check size={30} />
            </div>
            <h3 className="font-display text-[1.9rem] text-white leading-none mb-2">
              OPENING WHATSAPP…
            </h3>
            <p className="text-sm text-zinc-400">
              Connecting you with the coaching team now.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-7 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 mb-4">
                <span className="w-1.5 h-1.5 bg-[#E10600] rounded-full" />
                Membership & visit inquiry
              </div>
              <h3 className="font-display text-[2.1rem] sm:text-4xl text-white leading-none">
                JOIN THE LAB.
              </h3>
              <p className="text-zinc-400 text-[13px] mt-2 leading-relaxed">
                KNS Mansion, 2nd Floor, B.H. Road, Tumakuru. We reply fast on WhatsApp.
              </p>
            </div>

            <div className="mb-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.14em] mb-2.5">
                Fastest response // Direct on WhatsApp
              </div>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-[12px] uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Open instant WhatsApp chat</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center my-5">
              <div className="border-t border-white/10 w-full" />
              <span className="bg-[#141414] px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.14em] whitespace-nowrap">
                Or fill details below
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
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E10600] focus:ring-2 focus:ring-[#E10600]/30 transition"
                />
              </div>

              <div>
                <label htmlFor="enq-phone" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Phone number
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
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E10600] focus:ring-2 focus:ring-[#E10600]/30 transition"
                />
              </div>

              <div>
                <label htmlFor="enq-goal" className="block text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5">
                  Primary focus / goal
                </label>
                <select
                  id="enq-goal"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#E10600] focus:ring-2 focus:ring-[#E10600]/30 transition"
                >
                  <option value="Strength & Muscle Building">Strength & Muscle Building</option>
                  <option value="CrossFit & Functional Fitness">CrossFit & Functional Fitness</option>
                  <option value="HIIT & Fat Loss">HIIT & Fat Loss</option>
                  <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                  <option value="Rooftop Turf & Recovery Access">Rooftop Turf & Recovery Access</option>
                </select>
              </div>

              {error && (
                <p className="text-[13px] text-[#ff7a73] bg-[#E10600]/10 border border-[#E10600]/30 rounded-xl px-4 py-3">{error}</p>
              )}

              <button
                type="submit"
                className="btn-primary rounded-full w-full py-4 px-6 text-white font-bold text-[12px] uppercase tracking-[0.18em] flex items-center justify-center gap-2"
              >
                <span>Send inquiry via WhatsApp</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 text-[12px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <Phone size={13} />
                <span>Prefer a call? {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

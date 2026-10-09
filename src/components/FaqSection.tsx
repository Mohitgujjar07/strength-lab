'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { ChevronDown, MessageCircle } from './Icons';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="relative bg-[#090909] py-14 sm:py-18 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFE600] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
            KNOWLEDGE BASE // KNS MANSION
          </div>
          <h2 className="section-title text-white font-display text-3xl sm:text-4xl mb-2">
            CLEAR ANSWERS.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Everything you need to know before stepping into Tumakuru’s 1st Luxury Fitness Centre.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-start mb-6">
          {siteConfig.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121212] border-[#FFE600]/40 shadow-lg'
                    : 'bg-[#0e0e0e] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between text-left gap-3.5 p-4 sm:p-5 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-base sm:text-lg tracking-tight leading-snug transition-colors ${
                      isOpen ? 'text-[#FFE600]' : 'text-zinc-200 group-hover:text-white'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 mt-0.5 ${
                      isOpen
                        ? 'bg-[#FFE600] border-[#FFE600] text-black rotate-180 shadow-[0_0_12px_rgba(255,230,0,0.4)]'
                        : 'border-white/15 text-zinc-400 group-hover:border-white/30 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 animate-fadeIn">
                    <div className="pl-3.5 border-l-2 border-[#FFE600] text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compact Footer Assistance Line */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400">
            <span>Still have questions?</span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hi Strength Lab, I have a quick question about the gym."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFE600] hover:underline font-semibold font-mono"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

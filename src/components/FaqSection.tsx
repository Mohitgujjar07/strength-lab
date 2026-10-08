'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { ChevronDown } from './Icons';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-[#0b0b0b] py-20 sm:py-28 border-y border-white/10">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="eyebrow-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
            <span className="label-caps text-[11px] text-zinc-300">Frequently asked questions</span>
          </div>
          <h2 className="section-title text-white font-display mb-4">
            CLEAR ANSWERS.
          </h2>
          <p className="text-zinc-400 text-[15px]">
            Everything you need to know before stepping into KNS Mansion.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden divide-y divide-white/10">
          {siteConfig.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={isOpen ? 'bg-white/[0.03]' : ''}>
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 px-6 sm:px-8 py-6 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-[1.15rem] sm:text-[1.4rem] leading-tight transition-colors ${isOpen ? 'text-[#FFE600]' : 'text-zinc-200 group-hover:text-white'}`}>
                    {item.question}
                  </span>
                  <span className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#FFE600] border-[#FFE600] text-black rotate-180 shadow-[0_0_15px_rgba(255,230,0,0.4)]' : 'border-white/15 text-zinc-400 group-hover:border-white/30 group-hover:text-white'}`}>
                    <ChevronDown size={17} />
                  </span>
                </button>
                <div className="faq-answer px-6 sm:px-8" data-open={isOpen}>
                  <div>
                    <p className="text-zinc-300 text-[14px] sm:text-[15px] leading-relaxed pb-6 ml-1 pl-4 border-l-2 border-[#FFE600]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

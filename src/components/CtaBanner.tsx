'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { ArrowRight, MessageCircle } from './Icons';

interface CtaBannerProps {
  onOpenEnquiry?: () => void;
}

export default function CtaBanner({ onOpenEnquiry }: CtaBannerProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Athlete training at Strength Lab"
          fill
          sizes="100vw"
          className="img-treatment object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[#FFE600]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="eyebrow-pill mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
          <span className="label-caps text-[11px] text-zinc-200">
            Strength Lab // Tumakuru · Karnataka
          </span>
        </div>

        <h2 className="font-display text-[2.8rem] sm:text-7xl lg:text-[5.2rem] text-white leading-[0.92] uppercase">
          YOUR STRONGEST<br />
          <span className="text-[#FFE600]">VERSION</span><br />
          STARTS HERE.
        </h2>

        <p className="text-[15px] sm:text-lg text-zinc-300 max-w-xl mx-auto mt-6 mb-9 leading-relaxed">
          Stop postponing the work. Step inside Tumakuru&apos;s premier athletic training facility.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xl mx-auto">
          <button
            onClick={onOpenEnquiry}
            className="btn-primary rounded-full flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-black text-[13px] font-extrabold uppercase tracking-[0.18em]"
          >
            <span>Start your journey</span>
            <ArrowRight size={16} />
          </button>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost rounded-full flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-[13px] font-bold uppercase tracking-[0.16em] backdrop-blur-sm"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>WhatsApp us</span>
          </a>
        </div>

        <div className="mt-9 text-[11px] text-zinc-500 uppercase tracking-[0.14em] leading-relaxed max-w-2xl mx-auto">
          {siteConfig.location.fullAddress}
        </div>
      </div>
    </section>
  );
}

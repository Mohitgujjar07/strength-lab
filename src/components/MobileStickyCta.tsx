'use client';

import React from 'react';
import { siteConfig } from '@/data/site';
import { MessageCircle, MapPin, ArrowUpRight } from './Icons';

interface MobileStickyCtaProps {
  onOpenEnquiry?: () => void;
}

export default function MobileStickyCta({ onOpenEnquiry }: MobileStickyCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/92 backdrop-blur-xl border-t border-white/10 px-3 pt-2.5 md:hidden" style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}>
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-1 rounded-xl bg-white/[0.05] border border-white/10 text-white active:scale-[0.97] transition-transform"
        >
          <MessageCircle size={15} className="text-[#25D366]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]">
            WhatsApp
          </span>
        </a>

        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-1 rounded-xl bg-white/[0.05] border border-white/10 text-white active:scale-[0.97] transition-transform"
        >
          <MapPin size={15} className="text-[#FFE600]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]">
            Directions
          </span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="btn-primary rounded-xl flex items-center justify-center gap-1.5 py-3 px-1 text-black font-extrabold active:scale-[0.97] transition-transform shadow-[0_0_15px_rgba(255,230,0,0.35)]"
        >
          <ArrowUpRight size={15} />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.1em]">
            Join lab
          </span>
        </button>
      </div>
    </div>
  );
}

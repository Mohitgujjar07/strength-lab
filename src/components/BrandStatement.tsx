import React from 'react';
import { siteConfig } from '@/data/site';

export default function BrandStatement() {
  return (
    <section className="relative bg-[#080808] py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-[#E10600]/60 to-transparent" />
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-[#E10600]/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 pb-7 border-b border-white/10 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E10600]" />
            <span className="label-caps text-[11px] text-zinc-400">
              {siteConfig.brandStatement.label}
            </span>
          </div>
          <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.18em] hidden md:inline-block">
            Philosophy // Discipline over motivation
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="section-title text-white font-display">
              <span className="block">{siteConfig.brandStatement.headline[0]}</span>
              <span className="block text-[#E10600]">
                {siteConfig.brandStatement.headline[1]}
              </span>
            </h2>
            <div className="mt-7 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-zinc-400 uppercase">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">Est. Tumakuru</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">Karnataka, India</span>
              <span className="px-3 py-1.5 rounded-full border border-[#E10600]/40 bg-[#E10600]/10 text-[#ff8a84]">13,000 sq. ft.</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-2">
            {siteConfig.brandStatement.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-[17px] sm:text-xl text-zinc-200 font-light leading-relaxed rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 hover:border-[#E10600]/50 hover:bg-[#E10600]/[0.04] transition-colors"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-1 p-5 rounded-2xl bg-gradient-to-r from-[#E10600] to-[#a30400] flex items-center justify-between gap-4 shadow-[0_20px_50px_-20px_rgba(225,6,0,0.7)]">
              <div>
                <div className="text-[13px] uppercase font-bold text-white tracking-[0.18em]">
                  No compromises.
                </div>
                <div className="text-[13px] text-white/80 mt-0.5">
                  Real weights. Real coaching. Real recovery.
                </div>
              </div>
              <span className="font-display text-2xl text-white/90 border border-white/30 rounded-full w-12 h-12 flex items-center justify-center shrink-0">SL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

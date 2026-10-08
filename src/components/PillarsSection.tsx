import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function PillarsSection() {
  return (
    <section id="the-lab" className="relative bg-[#0b0b0b] py-20 sm:py-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="label-caps text-[11px] text-zinc-300">The Lab // Core pillars</span>
            </div>
            <h2 className="section-title text-white font-display">
              YOUR TRAINING<br />ENVIRONMENT.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-[15px] leading-relaxed">
            Engineered from the ground up for serious intent. 13,000 sq. ft. of uncompromised strength equipment, functional rooftop turf, and professional athlete contrast recovery.
          </p>
        </div>

        <div className="card card-hover relative w-full h-[340px] sm:h-[460px] lg:h-[520px] group">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop"
            alt="Strength Lab Training Floor"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="img-treatment object-cover object-center group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/30" />

          <div className="absolute top-5 left-5 rounded-full bg-black/65 backdrop-blur-md px-4 py-2 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
            KNS Mansion 2nd Fl · B.H. Road · Tumakuru
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff5a52] mb-2">
                Architectural capacity
              </div>
              <h3 className="font-display text-[1.7rem] sm:text-4xl text-white leading-none">
                13,000 SQ. FT. OF FOCUSED PURPOSE.
              </h3>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold text-zinc-200 uppercase tracking-[0.16em] bg-white/[0.06] backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 w-fit">
              <span>Zero fluff</span>
              <span className="w-1 h-1 rounded-full bg-[#E10600]" />
              <span>Max performance</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-5">
          {siteConfig.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="card card-hover group relative p-7 sm:p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div className="absolute top-0 left-7 right-7 h-[3px] rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-0 bg-[#E10600] transition-all duration-500 group-hover:w-full" />
              </div>
              <div>
                <div className="flex items-start justify-between mb-7 mt-1">
                  <span className="font-display text-5xl text-white/12 group-hover:text-[#E10600]/90 transition-colors duration-300 leading-none" style={{ color: 'rgba(255,255,255,0.14)' }}>
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                    {pillar.tagline}
                  </span>
                </div>
                <h3 className="font-display text-[1.65rem] text-white tracking-wide mb-3">
                  {pillar.title}
                </h3>
              </div>
              <div className="space-y-1.5 pt-4 border-t border-white/10">
                {pillar.lines.map((line, idx) => (
                  <p key={idx} className="text-zinc-400 text-[14px] leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

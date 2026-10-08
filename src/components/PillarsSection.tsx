import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function PillarsSection() {
  return (
    <section id="the-lab" className="relative bg-[#070707] py-24 sm:py-32 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#FFE600]" />
              <span className="label-caps text-xs text-[#FFE600]">
                THE LAB // CORE PILLARS
              </span>
            </div>
            <h2 className="section-title text-white font-display">
              YOUR TRAINING<br />ENVIRONMENT.
            </h2>
          </div>
          <p className="max-w-md text-zinc-300 text-sm sm:text-base leading-relaxed">
            Engineered from the ground up for serious intent. 13,000 sq. ft. of uncompromised strength equipment, functional rooftop turf, and professional athlete contrast recovery.
          </p>
        </div>

        {/* Feature Hero Image with Spec Overlay */}
        <div className="relative mt-12 w-full h-[360px] sm:h-[480px] lg:h-[540px] overflow-hidden border border-white/[0.1] group">
          <Image
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop"
            alt="Strength Lab Training Floor"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/40" />
          
          {/* Top Left Badge */}
          <div className="absolute top-6 left-6 bg-[#070707]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#FFE600]/30 text-xs font-mono uppercase tracking-widest text-[#FFE600]">
            KNS MANSION 2ND FL · B.H. ROAD · TUMAKURU
          </div>

          {/* Bottom Overlay Specs */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFE600] font-semibold">
                ARCHITECTURAL CAPACITY
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white tracking-tight">
                13,000 SQ. FT. OF FOCUSED PURPOSE.
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-300 uppercase tracking-widest bg-black/70 backdrop-blur-sm px-4 py-2 border border-white/10">
              <span className="text-[#FFE600]">ZERO FLUFF</span>
              <span>·</span>
              <span>MAX PERFORMANCE</span>
            </div>
          </div>
        </div>

        {/* Three Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/[0.08]">
          {siteConfig.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative p-8 bg-[#0e0e0e] hover:bg-[#141414] border border-white/[0.08] hover:border-[#FFE600]/35 transition-all duration-300 flex flex-col justify-between min-h-[280px]"
            >
              {/* Corner accent marker */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-2 bg-transparent group-hover:bg-[#FFE600] transition-colors" />
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-5xl sm:text-6xl text-zinc-700 group-hover:text-[#FFE600] transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600] font-semibold">
                    {pillar.tagline}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-4">
                  {pillar.title}
                </h3>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                {pillar.lines.map((line, idx) => (
                  <p key={idx} className="text-zinc-400 text-sm leading-relaxed font-light">
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

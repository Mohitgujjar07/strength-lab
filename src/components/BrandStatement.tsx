import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function BrandStatement() {
  return (
    <section className="relative bg-[#070707] py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#FFE600]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-between pb-8 border-b border-white/[0.08] mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#FFE600]" />
            <span className="label-caps text-xs text-[#FFE600]">
              {siteConfig.brandStatement.label}
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline-block">
            PHILOSOPHY // DISCIPLINE OVER MOTIVATION
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Giant Display Typography */}
          <div className="lg:col-span-7">
            <h2 className="section-title text-white tracking-tight flex flex-col font-display">
              <span>{siteConfig.brandStatement.headline[0]}</span>
              <span className="text-[#FFE600]">
                {siteConfig.brandStatement.headline[1]}
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <span className="text-[#FFE600] font-semibold">EST. TUMAKURU</span>
              <span>·</span>
              <span>KARNATAKA, INDIA</span>
              <span>·</span>
              <span>13,000 SQ. FT.</span>
            </div>
          </div>

          {/* Right: Confident Manifesto Paragraphs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pt-4">
            {siteConfig.brandStatement.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg sm:text-2xl text-zinc-200 font-light leading-relaxed border-l-2 border-white/10 pl-6 hover:border-[#FFE600] transition-colors"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <div className="p-4 bg-[#121212] border border-[#FFE600]/20 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden drop-shadow-[0_0_18px_rgba(255,230,0,0.45)] shrink-0 bg-black">
                    <Image
                      src="/logo.png"
                      alt="Strength Lab Emblem"
                      fill
                      unoptimized
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-white tracking-widest">
                      NO COMPROMISES.
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Heavy iron. Rooftop turf. Contrast recovery.
                    </div>
                  </div>
                </div>
                <span className="text-lg font-display text-[#FFE600]">SL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

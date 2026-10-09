'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { ArrowRight } from './Icons';

export default function FacilityGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const areas = siteConfig.facilityAreas;
  const current = areas[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % areas.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + areas.length) % areas.length);
  };

  return (
    <section id="facility" className="relative bg-[#090909] py-24 sm:py-32 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#FFE600]" />
              <span className="label-caps text-xs text-[#FFE600]">
                THE FACILITY // DUAL-LEVEL ATHLETIC CLUB
              </span>
            </div>
            <h2 className="section-title text-white font-display">
              BUILT FOR<br />THE WORK.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-md text-zinc-300 text-sm sm:text-base leading-relaxed">
              Designed with zero compromises. From the competition barbell floor to the open-sky rooftop turf and contrast therapy cold plunge.
            </p>
            {/* Gallery Navigator */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-white/15 hover:border-[#FFE600] flex items-center justify-center text-zinc-300 hover:text-[#FFE600] transition-colors"
                aria-label="Previous facility area"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-white/15 hover:border-[#FFE600] flex items-center justify-center text-zinc-300 hover:text-[#FFE600] transition-colors"
                aria-label="Next facility area"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2.5 text-xs font-mono uppercase whitespace-nowrap transition-all border ${
                activeIndex === idx
                  ? 'bg-[#FFE600] text-black border-[#FFE600] font-extrabold shadow-md'
                  : 'bg-white/[0.02] text-zinc-400 border-white/[0.08] hover:text-white hover:border-[#FFE600]/40'
              }`}
            >
              <span>{area.number} — {area.title}</span>
            </button>
          ))}
        </div>

        {/* Active Showcase Card */}
        <div className="relative border border-white/[0.1] bg-[#0e0e0e] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[560px]">
            {/* Image Box */}
            <div className="lg:col-span-8 relative h-[320px] sm:h-[420px] lg:h-full w-full overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center grayscale contrast-125 brightness-95 transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e0e0e]" />

              {/* Status Badge */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#FFE600]/30 text-xs font-mono text-[#FFE600] uppercase tracking-widest font-semibold">
                VERIFIED FACILITY ZONE // {current.number}
              </div>
            </div>

            {/* Info Box */}
            <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFE600] font-bold mb-2">
                  {current.category}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-4">
                  {current.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {current.description}
                </p>

                {/* Technical specs pill */}
                <div className="p-4 bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-[10px] font-mono uppercase text-[#FFE600] mb-1 font-semibold">
                    FACILITY SPECIFICATIONS
                  </div>
                  <div className="text-xs font-mono text-zinc-300">
                    {current.specs}
                  </div>
                </div>
              </div>

              {/* Bottom Pagination */}
              <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between">
                <div className="font-mono text-sm text-zinc-400">
                  <span className="text-[#FFE600] font-bold">{current.number}</span>
                  <span className="text-zinc-600"> / </span>
                  <span>0{areas.length}</span>
                </div>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE600] hover:text-[#FFF033] font-bold"
                >
                  <span>NEXT ZONE</span>
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small thumbnail preview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-20 overflow-hidden border transition-all text-left group ${
                activeIndex === idx
                  ? 'border-[#FFE600] opacity-100 ring-2 ring-[#FFE600]'
                  : 'border-white/10 opacity-50 hover:opacity-85'
              }`}
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                sizes="20vw"
                className="object-cover object-center grayscale"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white font-semibold uppercase">
                <span className="text-[#FFE600]">{area.number}</span> {area.title.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

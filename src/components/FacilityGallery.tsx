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
    <section id="facility" className="relative bg-[#0b0b0b] py-20 sm:py-28 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="label-caps text-[11px] text-zinc-300">The facility // 13,000 sq. ft.</span>
            </div>
            <h2 className="section-title text-white font-display">
              BUILT FOR<br />THE WORK.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="max-w-md text-zinc-400 text-[15px] leading-relaxed">
              Designed with zero compromises. From the competition barbell floor to the open-sky rooftop turf and contrast therapy cold plunge.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 flex items-center justify-center text-zinc-200 transition-all active:scale-95"
                aria-label="Previous facility area"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#E10600] hover:bg-[#ff2419] flex items-center justify-center text-white transition-all active:scale-95 shadow-lg shadow-red-950/50"
                aria-label="Next facility area"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all rounded-full border ${
                activeIndex === idx
                  ? 'bg-white text-black border-white shadow-lg'
                  : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {area.number} — {area.title}
            </button>
          ))}
        </div>

        <div key={current.id} className="card overflow-hidden animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
            <div className="lg:col-span-8 relative h-[300px] sm:h-[420px] lg:h-auto w-full overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="img-treatment object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#121212]" />
              <div className="absolute top-5 left-5 rounded-full bg-black/65 backdrop-blur-md px-4 py-2 border border-white/15 text-[11px] font-semibold text-zinc-200 uppercase tracking-[0.14em]">
                Verified zone // {current.number}
              </div>
            </div>

            <div className="lg:col-span-4 p-7 sm:p-10 flex flex-col justify-between gap-8 bg-[#121212]">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff5a52] mb-2">
                  {current.category}
                </div>
                <h3 className="font-display text-[1.9rem] sm:text-4xl text-white leading-[0.95] mb-4">
                  {current.title}
                </h3>
                <p className="text-zinc-400 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  {current.description}
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 mb-1.5">
                    Facility specifications
                  </div>
                  <div className="text-[13px] text-zinc-200 leading-relaxed">
                    {current.specs}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="font-mono text-sm text-zinc-500">
                  <span className="text-white font-bold text-lg">{current.number}</span>
                  <span> / 0{areas.length}</span>
                </div>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#ff5a52] hover:text-white transition-colors"
                >
                  <span>Next zone</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-3">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-20 sm:h-24 overflow-hidden rounded-xl border transition-all text-left group ${
                activeIndex === idx
                  ? 'border-[#E10600] ring-2 ring-[#E10600]/40 opacity-100'
                  : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/25'
              }`}
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                sizes="20vw"
                className="img-treatment object-cover object-center"
              />
              <div className={`absolute inset-0 transition-colors ${activeIndex === idx ? 'bg-black/30' : 'bg-black/60 group-hover:bg-black/35'}`} />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white uppercase tracking-wide leading-tight line-clamp-2">
                {area.number} · {area.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

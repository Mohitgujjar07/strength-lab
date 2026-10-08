'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const item = siteConfig.transformations[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section id="transformations" className="relative bg-[#080808] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              <span className="label-caps text-[11px] text-zinc-300">Real people. Real work.</span>
            </div>
            <h2 className="section-title text-white font-display">
              THE WORK<br />SPEAKS.
            </h2>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-[11px] font-semibold uppercase tracking-[0.12em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              Demo record // Member archive coming soon
            </div>
            <p className="text-zinc-400 text-[15px] leading-relaxed">
              Real body recomposition requires structured training and disciplined habit. Drag the handle to compare the standard of progress.
            </p>
          </div>
        </div>

        <div className="card p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              role="slider"
              aria-label="Before and after comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(4, p - 4));
                if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(96, p + 4));
              }}
              className="relative w-full h-[360px] sm:h-[480px] overflow-hidden select-none cursor-ew-resize rounded-2xl border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600] touch-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER — full frame */}
              <div className="absolute inset-0">
                <Image
                  src={item.afterImage}
                  alt="After training at Strength Lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="img-treatment object-cover object-center pointer-events-none"
                  priority
                  draggable={false}
                />
                <div className="absolute top-4 right-4 rounded-full bg-black/85 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#FFE600] border border-[#FFE600]/30">
                  After // Post-cycle
                </div>
              </div>

              {/* BEFORE — clipped, always full-container sized */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={item.beforeImage}
                  alt="Before training at Strength Lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="img-treatment object-cover object-center pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-200 border border-white/15">
                  Before // Day 01
                </div>
              </div>

              {/* Divider + handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#FFE600] z-20 pointer-events-none shadow-[0_0_20px_rgba(255,230,0,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0a0a0a] border-2 border-[#FFE600] flex items-center justify-center text-[#FFE600] shadow-[0_0_20px_rgba(255,230,0,0.4)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></svg>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/85 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] font-bold uppercase text-zinc-300 tracking-[0.16em] z-10 pointer-events-none whitespace-nowrap">
                Drag to compare
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6 rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-7">
            <div>
              <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.16em] mb-1.5">
                Transformation archive // Demo
              </div>
              <h3 className="font-display text-[1.7rem] text-white leading-none">
                {item.name}
              </h3>
              <div className="text-[12px] font-bold text-[#FFE600] uppercase tracking-[0.12em] mt-2">
                Goal: {item.goal}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 py-5 border-y border-white/10">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-1">
                  Timeframe
                </div>
                <div className="font-display text-[1.45rem] text-white leading-none">
                  {item.duration}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/30">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFE600] mb-1">
                  Result stat
                </div>
                <div className="font-display text-[1.45rem] text-[#FFE600] leading-none">
                  {item.result}
                </div>
              </div>
            </div>

            <p className="text-zinc-300 text-[14px] leading-relaxed italic border-l-[3px] border-[#FFE600] pl-4">
              &quot;{item.quote}&quot;
            </p>

            <div className="text-[11px] leading-relaxed text-zinc-500 bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.07]">
              Verified member logs with measured biometrics will replace this demo module once the owner archive is approved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

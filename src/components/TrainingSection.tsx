'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { ArrowRight } from './Icons';

interface TrainingSectionProps {
  onOpenEnquiry?: () => void;
}

export default function TrainingSection({ onOpenEnquiry }: TrainingSectionProps) {
  return (
    <section id="training" className="relative bg-[#070707] py-24 sm:py-32 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#FFE600]" />
              <span className="label-caps text-xs text-[#FFE600]">
                PROGRAMS // TARGETED DISCIPLINE
              </span>
            </div>
            <h2 className="section-title text-white font-display">
              FIND YOUR<br />TRAINING.
            </h2>
          </div>
          <p className="max-w-md text-zinc-300 text-sm sm:text-base leading-relaxed">
            Every session has intent. Choose the discipline that matches your physical ambition, coached by certified trainers on competition-grade equipment.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.training.map((prog) => (
            <div
              key={prog.id}
              className="group relative flex flex-col justify-between overflow-hidden bg-[#0e0e0e] border border-white/[0.08] hover:border-[#FFE600]/40 transition-all duration-300 min-h-[460px] sm:min-h-[500px]"
            >
              {/* Image Container with Hover Shift */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center grayscale contrast-125 brightness-90 transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent" />

                {/* Top Number and Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-300 bg-black/75 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                    PROGRAM // {prog.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#FFE600] text-black px-2.5 py-1 font-extrabold shadow">
                    {prog.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 relative z-10 -mt-8">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#FFE600] transition-colors">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-mono text-[#FFE600] uppercase tracking-wider mt-1 mb-3 font-semibold">
                    {prog.tagline}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  {/* Focus points pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {prog.focus.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono uppercase text-zinc-300 bg-white/[0.03] border border-white/[0.08] hover:border-[#FFE600]/30 px-2.5 py-1 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-zinc-200 group-hover:text-[#FFE600] transition-colors"
                  >
                    <span>ENQUIRE FOR THIS PROGRAM</span>
                    <ArrowRight
                      size={15}
                      className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#FFE600] stroke-[2.5]"
                    />
                  </button>
                  <span className="text-xs font-mono text-zinc-600">SL // {prog.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

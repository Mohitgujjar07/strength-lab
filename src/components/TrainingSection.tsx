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
    <section id="training" className="relative bg-[#080808] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="label-caps text-[11px] text-zinc-300">Programs // Targeted discipline</span>
            </div>
            <h2 className="section-title text-white font-display">
              FIND YOUR<br />TRAINING.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-[15px] leading-relaxed">
            Every session has intent. Choose the discipline that matches your physical ambition, coached by certified trainers on competition-grade equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {siteConfig.training.map((prog) => (
            <article
              key={prog.id}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="img-treatment object-cover object-center group-hover:scale-[1.05] transition-transform duration-[1.1s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/35 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="rounded-full font-mono text-[11px] text-zinc-200 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/15">
                    PROGRAM // {prog.number}
                  </span>
                  <span className="rounded-full text-[10px] font-bold tracking-[0.14em] uppercase bg-[#E10600] text-white px-3 py-1.5 shadow-lg shadow-red-950/50">
                    {prog.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-display text-[1.6rem] sm:text-[1.9rem] text-white leading-none">
                  {prog.title}
                </h3>
                <div className="text-[11px] font-bold text-[#ff5a52] uppercase tracking-[0.16em] mt-2 mb-3">
                  {prog.tagline}
                </div>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  {prog.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {prog.focus.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-2 text-[12px] uppercase font-bold tracking-[0.16em] text-zinc-200 hover:text-white transition-colors group/btn"
                  >
                    <span className="border-b-2 border-[#E10600] pb-0.5">Enquire for this program</span>
                    <ArrowRight size={15} className="text-[#E10600] transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                  <span className="text-[11px] font-mono text-zinc-600">SL // {prog.number}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

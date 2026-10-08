'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { ArrowRight, MapPin, Star } from './Icons';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#the-lab');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col overflow-hidden bg-[#080808]">
      {/* Background */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={siteConfig.hero.bgImage}
          alt="Strength Lab Gym Tumakuru Interior"
          fill
          priority
          sizes="100vw"
          className="img-treatment object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/72 to-[#080808]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/30 to-[#080808]/60" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#E10600]/18 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="h-24 sm:h-28" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex items-center py-10">
        <div className="max-w-4xl w-full">
          <div className="eyebrow-pill mb-6 sm:mb-7 animate-fadeIn">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#E10600] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#E10600]" />
            </span>
            <span className="label-caps text-[10px] sm:text-[11px] text-zinc-200">
              {siteConfig.hero.eyebrow}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-amber-300">
              <Star size={12} />
              {siteConfig.googleRating.split('★')[0].trim()} ★ Top Rated
            </span>
          </div>

          <h1 className="hero-title text-white font-display animate-slideUp">
            <span className="block">{siteConfig.hero.headline[0]}</span>
            <span className="block text-outline sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-white sm:via-white sm:to-zinc-500 sm:[-webkit-text-stroke:0px]">
              {siteConfig.hero.headline[1]}
            </span>
            <span className="mt-3 block h-[6px] w-28 sm:w-40 rounded-full bg-[#E10600]" />
          </h1>

          <p className="mt-6 sm:mt-7 text-[15px] sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed font-light animate-slideUp" style={{ animationDelay: '80ms' }}>
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 animate-fadeIn" style={{ animationDelay: '140ms' }}>
            {['13,000+ SQ. FT.', 'ROOFTOP TURF', 'ICE BATH & SAUNA', 'PICKLEBALL'].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm text-[11px] font-semibold tracking-[0.14em] text-zinc-200">
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl animate-slideUp" style={{ animationDelay: '180ms' }}>
            <button
              onClick={onOpenEnquiry}
              className="btn-primary rounded-full group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-[13px] font-bold uppercase tracking-[0.18em]"
            >
              <span>{siteConfig.hero.ctaPrimary}</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#the-lab"
              onClick={scrollToExplore}
              className="btn-ghost rounded-full inline-flex items-center justify-center gap-2 px-8 py-4 text-zinc-100 text-[13px] font-bold uppercase tracking-[0.18em]"
            >
              <span>{siteConfig.hero.ctaSecondary}</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] font-mono uppercase tracking-wider text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-white">13k</span>
              <span className="leading-tight">sq. ft.<br />training floor</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-white">5.0★</span>
              <span className="leading-tight">google rated<br />in Tumakuru</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-white">5:30A</span>
              <span className="leading-tight">open daily<br />coach-led</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/55 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-3 text-[11px] tracking-[0.18em] text-zinc-400 uppercase font-medium">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin size={14} className="text-[#E10600] shrink-0" />
            <span className="truncate">{siteConfig.hero.locationLeft}</span>
          </div>
          <button
            onClick={scrollToExplore}
            className="hidden sm:flex items-center gap-2 hover:text-white transition-colors cursor-pointer group shrink-0"
          >
            <span>{siteConfig.hero.scrollIndicator}</span>
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E10600] group-hover:text-[#E10600] transition-colors">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}

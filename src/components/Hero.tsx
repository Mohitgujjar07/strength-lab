'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { ArrowRight, MapPin } from './Icons';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleAudio = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.55;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#the-lab');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#070707]">
      {/* Background Cinematic Visual Loop & Vignette */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          poster={siteConfig.hero.bgImage}
          className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.72] scale-105"
        >
          <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/75 to-[#070707]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070707_90%)]" />

        {/* Electric Yellow Atmospheric Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FFE600]/8 blur-[160px] rounded-full pointer-events-none" />
      </div>

      {/* Top Spacer to account for fixed navbar */}
      <div className="h-28 sm:h-32" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 my-auto">
        <div className="max-w-5xl">
          {/* Eyebrow & Brand Badge Row */}
          <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden drop-shadow-[0_0_25px_rgba(255,230,0,0.55)] shrink-0 bg-black">
              <Image
                src="/logo.png"
                alt="Strength Lab Official HD Emblem"
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-black/75 border border-[#FFE600]/40 backdrop-blur-md w-fit">
                <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
                <span className="label-caps text-[11px] sm:text-xs text-[#FFE600] tracking-[0.25em] font-bold">
                  {siteConfig.hero.eyebrow}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
                13,000 SQ. FT. HIGH-PERFORMANCE LAB · KNS MANSION, B.H. ROAD
              </div>
            </div>
          </div>

          {/* Monolithic Display Headline */}
          <h1 className="hero-title text-white tracking-tight flex flex-col font-display">
            <span className="inline-block transform motion-safe:hover:translate-x-1 transition-transform duration-300">
              {siteConfig.hero.headline[0]}
            </span>
            <span className="inline-block text-[#FFE600] drop-shadow-[0_0_40px_rgba(255,230,0,0.25)]">
              {siteConfig.hero.headline[1]}
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl text-zinc-300 font-normal max-w-2xl leading-relaxed tracking-wide">
            {siteConfig.hero.subheadline}
          </p>

          {/* Key Quick Badges with Yellow Highlights */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase">
            <span className="px-3 py-1 bg-[#121212] border border-[#FFE600]/30 text-white font-medium">13,000+ SQ. FT.</span>
            <span className="text-zinc-600">/</span>
            <span className="px-3 py-1 bg-[#121212] border border-white/10 text-zinc-300">ROOFTOP TURF</span>
            <span className="text-zinc-600">/</span>
            <span className="px-3 py-1 bg-[#121212] border border-white/10 text-zinc-300">ICE BATH & SAUNA</span>
            <span className="text-zinc-600">/</span>
            <span className="px-3 py-1 bg-[#121212] border border-white/10 text-zinc-300">PICKLEBALL</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFE600] hover:bg-[#FFF033] text-black text-sm font-extrabold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-yellow-950/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{siteConfig.hero.ctaPrimary}</span>
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform duration-300 stroke-[2.5]"
              />
            </button>

            <a
              href="#the-lab"
              onClick={scrollToExplore}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-[#FFE600] border border-white/15 hover:border-[#FFE600]/40 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-200"
            >
              <span>{siteConfig.hero.ctaSecondary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 w-full border-t border-white/[0.08] bg-[#070707]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-widest text-zinc-300 uppercase font-mono">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#FFE600]" />
            <span>{siteConfig.hero.locationLeft}</span>
          </div>

          {/* Luxury Ambient Audio Toggle */}
          <button
            onClick={toggleAudio}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/80 hover:bg-black border border-white/15 hover:border-[#FFE600]/60 transition-all text-[11px] font-mono tracking-widest uppercase text-zinc-300 hover:text-white cursor-pointer shadow-lg active:scale-95"
            aria-label="Toggle ambient gym audio"
          >
            <span className="flex items-end gap-[3px] h-3.5">
              <span className={`w-[2px] bg-[#FFE600] rounded-full transition-all duration-300 ${!isMuted ? 'h-3.5 animate-pulse' : 'h-1.5'}`} />
              <span className={`w-[2px] bg-[#FFE600] rounded-full transition-all duration-300 delay-75 ${!isMuted ? 'h-2 animate-pulse' : 'h-2.5'}`} />
              <span className={`w-[2px] bg-[#FFE600] rounded-full transition-all duration-300 delay-150 ${!isMuted ? 'h-3 animate-pulse' : 'h-1'}`} />
            </span>
            <span className="font-semibold">{!isMuted ? 'AMBIENT AUDIO: ON' : 'AMBIENT AUDIO: OFF'}</span>
          </button>

          <div className="flex items-center gap-6">
            <a
              href="#the-lab"
              onClick={scrollToExplore}
              className="flex items-center gap-2 hover:text-[#FFE600] transition-colors cursor-pointer group"
            >
              <span>{siteConfig.hero.scrollIndicator}</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform text-[#FFE600]">↓</span>
            </a>
            <span className="text-zinc-600">|</span>
            <span className="text-[#FFE600] font-semibold">01 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}

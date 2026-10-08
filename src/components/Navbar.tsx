'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { Menu, X, ArrowUpRight, MessageCircle } from './Icons';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070707]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official Badge */}
            <Link
              href="/"
              className="group flex items-center gap-3.5 focus:outline-none"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden drop-shadow-[0_0_18px_rgba(255,230,0,0.5)] shrink-0 bg-black">
                <Image
                  src="/logo.png"
                  alt="Strength Lab Official Logo"
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl sm:text-2xl tracking-tight text-white transition-colors group-hover:text-[#FFE600]">
                    STRENGTH LAB
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
                </div>
                <span className="label-caps text-[9px] text-[#FFE600] tracking-widest -mt-0.5 hidden sm:block font-bold">
                  TUMAKURU · 13,000 SQ. FT.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFE600] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white border border-white/10 hover:border-[#FFE600]/40 transition-all"
                title="Direct WhatsApp"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>CHAT</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FFE600] hover:bg-[#FFF033] text-black text-xs font-extrabold uppercase tracking-[0.18em] transition-all duration-200 shadow-lg shadow-yellow-950/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>JOIN THE LAB</span>
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenEnquiry}
                className="sm:hidden px-3 py-1.5 bg-[#FFE600] text-black text-[11px] font-extrabold uppercase tracking-wider shadow"
              >
                JOIN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070707]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
              <div className="relative w-14 h-14 rounded-full overflow-hidden drop-shadow-[0_0_20px_rgba(255,230,0,0.5)] shrink-0 bg-black">
                <Image
                  src="/logo.png"
                  alt="Strength Lab Logo"
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display text-2xl text-white">STRENGTH LAB</div>
                <div className="text-[10px] tracking-widest text-[#FFE600] font-mono font-bold">TUMAKURU, KARNATAKA</div>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {siteConfig.navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between text-2xl font-display uppercase tracking-wider text-zinc-200 hover:text-[#FFE600] transition-colors py-1.5 border-b border-white/[0.06]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#FFE600] font-mono">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full py-4 bg-[#FFE600] text-black text-sm font-extrabold uppercase tracking-widest text-center shadow-lg"
            >
              MEMBERSHIP ENQUIRY
            </button>
            <div className="grid grid-cols-2 gap-3 text-center">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border border-white/15 text-xs uppercase font-medium text-zinc-300 hover:border-[#FFE600] flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="py-3 border border-white/15 text-xs uppercase font-medium text-zinc-300 hover:border-[#FFE600] flex items-center justify-center gap-2"
              >
                Call Lab
              </a>
            </div>
            <div className="text-center text-[10px] text-zinc-400 uppercase tracking-widest mt-2">
              KNS MANSION · 2ND FL · B.H. ROAD · TUMAKURU
            </div>
          </div>
        </div>
      )}
    </>
  );
}

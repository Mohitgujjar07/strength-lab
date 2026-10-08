'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
            ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)]'
            : 'bg-gradient-to-b from-black/70 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-[1.35rem] sm:text-2xl tracking-tight text-white transition-colors group-hover:text-white leading-none">
                  STRENGTH<span className="text-[#E10600]">LAB</span>
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse mt-1" />
              </div>
              <span className="label-caps text-[9px] text-zinc-500 mt-1 hidden sm:block">
                TUMAKURU · 13,000 SQ. FT.
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 hover:text-white transition-colors relative py-1.5 group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full bg-[#E10600] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300 hover:text-white rounded-full border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] transition-all"
                title="Direct WhatsApp"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>CHAT</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="btn-primary rounded-full relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-white text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-px active:translate-y-0"
              >
                <span>JOIN THE LAB</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenEnquiry}
                className="sm:hidden px-4 py-2 rounded-full bg-[#E10600] text-white text-[11px] font-bold uppercase tracking-wider"
              >
                JOIN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-200 hover:text-white hover:border-white/25 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-24 px-6 animate-fadeIn">
          <div className="flex flex-col gap-5">
            <div className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-semibold">
              NAVIGATION // DIRECT ACCESS
            </div>
            <nav className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden divide-y divide-white/[0.06]">
              {siteConfig.navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between px-5 py-4 text-lg font-display uppercase tracking-wide text-zinc-100 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[11px] text-zinc-500 font-mono rounded-full border border-white/10 px-2 py-0.5">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="btn-primary rounded-xl w-full py-4 text-white text-sm font-bold uppercase tracking-widest text-center"
            >
              MEMBERSHIP ENQUIRY
            </button>
            <div className="grid grid-cols-2 gap-3 text-center">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 rounded-xl border border-white/12 bg-white/[0.03] text-xs uppercase font-semibold text-zinc-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="py-3.5 rounded-xl border border-white/12 bg-white/[0.03] text-xs uppercase font-semibold text-zinc-200 flex items-center justify-center gap-2"
              >
                Call Lab
              </a>
            </div>
            <div className="text-center text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              KNS MANSION · B.H. ROAD · TUMAKURU
            </div>
          </div>
        </div>
      )}
    </>
  );
}

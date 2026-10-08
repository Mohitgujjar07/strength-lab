import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { Instagram, Phone, MessageCircle, MapPin } from './Icons';

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] border-t border-white/10 text-white pt-16 sm:pt-20 pb-28 md:pb-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[#FFE600]/[0.05] blur-[110px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden drop-shadow-[0_0_20px_rgba(255,230,0,0.45)] shrink-0 bg-black">
                <Image
                  src="/logo.png"
                  alt="Strength Lab Logo"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[1.7rem] tracking-tight text-white leading-none">
                  STRENGTH<span className="text-[#FFE600]">LAB</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.22em] text-[#FFE600] uppercase font-bold mt-0.5">
                  Tumakuru · Karnataka
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-[14px] max-w-sm leading-relaxed mb-5">
              Tumakuru&apos;s premier 13,000 sq. ft. athletic training facility. Strength equipment, rooftop turf, and professional recovery.
            </p>
            <div className="font-display text-lg text-zinc-200 tracking-wide uppercase">
              Built for the work.
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                aria-label="Instagram profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#25D366]/50 flex items-center justify-center text-zinc-400 hover:text-[#25D366] transition-all"
                aria-label="WhatsApp enquiry"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-11 h-11 rounded-full border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                aria-label="Call gym"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFE600] mb-5">
              Explore the lab
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-500 hover:text-white transition-colors uppercase text-[11px] font-semibold tracking-[0.14em]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFE600] mb-4">
              Headquarters
            </div>
            <div className="space-y-3 text-[13px] text-zinc-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FFE600] shrink-0 mt-0.5" />
                <span>
                  KNS Mansion, 2nd Floor, B.H. Road, Shankarapuram, Tumakuru, Karnataka 572102
                </span>
              </div>
              <div className="pt-3 border-t border-white/10 text-[12px] text-zinc-500 leading-relaxed">
                <span>HOURS: {siteConfig.location.hours.weekdays}</span><br />
                <span>SUNDAYS: {siteConfig.location.hours.sunday}</span>
              </div>
              <a href={`tel:${siteConfig.contact.phone}`} className="block pt-1 text-[13px] font-semibold text-zinc-200 hover:text-white">
                DIRECT: {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600 font-medium tracking-[0.08em] uppercase">
          <div>
            © 2026 Strength Lab · Tumakuru, Karnataka
          </div>
          <div className="flex items-center gap-3">
            <span>Built different.</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>No compromises.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

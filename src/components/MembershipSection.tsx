'use client';

import React from 'react';
import { siteConfig } from '@/data/site';
import { ArrowRight, Check, MessageCircle } from './Icons';

interface MembershipSectionProps {
  onOpenEnquiry?: () => void;
}

export default function MembershipSection({ onOpenEnquiry }: MembershipSectionProps) {
  return (
    <section id="membership" className="relative bg-[#0b0b0b] py-20 sm:py-28 border-y border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FFE600]/[0.06] blur-[130px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow-pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
            <span className="label-caps text-[11px] text-zinc-300">Membership access // Tumakuru</span>
          </div>
          <h2 className="section-title text-white font-display mb-5">
            READY TO START?
          </h2>
          <p className="text-zinc-400 text-[15px] sm:text-base leading-relaxed">
            Transparent access built around training commitment. Tour the floor first — no blind locked contracts.
          </p>
          <div className="mt-4 inline-block px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold tracking-[0.08em] text-[#FFE600]">
            OFFICIAL PRICING SHARED DIRECTLY ON WHATSAPP
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {siteConfig.membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#17160c] to-[#121212] border-2 border-[#FFE600] shadow-[0_30px_80px_-30px_rgba(255,230,0,0.35)] lg:-translate-y-2'
                  : 'card card-hover'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.14em] shadow-lg ${
                  plan.isPopular ? 'bg-[#FFE600] text-black shadow-[0_0_20px_rgba(255,230,0,0.4)]' : 'bg-white text-black'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="flex-1">
                <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.16em] mb-2 mt-1">
                  Tier program
                </div>
                <h3 className="font-display text-[1.65rem] sm:text-[1.8rem] text-white leading-none mb-3">
                  {plan.name}
                </h3>
                <p className="text-[13px] text-zinc-400 leading-relaxed mb-6">
                  {plan.tagline}
                </p>

                <div className="py-4 px-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-1">
                    Access terms
                  </div>
                  <div className="text-[14px] font-semibold text-zinc-100">
                    Personalized rate on consultation
                  </div>
                </div>

                <div className="space-y-3 mb-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                    Included in this pass
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-zinc-300">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-[#FFE600] text-black font-extrabold' : 'bg-white/[0.06] text-[#FFE600] border border-white/10'}`}>
                        <Check size={12} />
                      </span>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10">
                <button
                  onClick={onOpenEnquiry}
                  className={`w-full py-4 px-4 rounded-full text-[12px] font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                    plan.isPopular
                      ? 'btn-primary text-black font-extrabold'
                      : 'btn-ghost text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-6 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-[1.35rem] text-white leading-none">
              PREFER TO WALK IN AND SEE THE LAB FIRST?
            </h4>
            <p className="text-[13px] text-zinc-400 mt-2 max-w-xl">
              Visit us at KNS Mansion, 2nd Floor, B.H. Road, Shankarapuram, Tumakuru. No strict appointment needed.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-[12px] uppercase tracking-[0.12em] transition-colors"
            >
              <MessageCircle size={15} />
              <span>WhatsApp us</span>
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-bold text-[12px] uppercase tracking-[0.12em]"
            >
              <span>Get directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

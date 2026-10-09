'use client';

import React from 'react';
import { siteConfig } from '@/data/site';
import { ArrowRight, Check, MessageCircle, Phone, MapPin, Sparkles } from './Icons';

interface MembershipSectionProps {
  onOpenEnquiry?: (plan?: string) => void;
}

export default function MembershipSection({ onOpenEnquiry }: MembershipSectionProps) {
  const handlePlanClick = (planName: string, planPrice: string) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(`${planName} (${planPrice})`);
    } else {
      const msg = `Hi Strength Lab, I'm interested in joining the ${planName} plan (${planPrice}). Please share more details and arrange my visit.`;
      window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="membership" className="relative bg-[#080808] py-20 sm:py-28 border-y border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FFE600]/[0.05] blur-[140px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FFE600] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
            TUMAKURU’S 1ST LUXURY FITNESS CENTRE // OFFICIAL PRICING
          </div>
          
          <h2 className="section-title text-white font-display mb-5">
            CHOOSE YOUR<br className="sm:hidden" /> MEMBERSHIP.
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Experience fitness like never before with competition equipment, certified coaches, and luxury amenities. Straightforward pricing with zero hidden charges.
          </p>
        </div>

        {/* 4 Membership Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 items-stretch mb-16 pt-5">
          {siteConfig.membershipPlans.map((plan) => {
            const isFeatured = plan.isLimitedOffer || plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 pt-7 sm:pt-8 transition-all duration-300 overflow-visible ${
                  plan.isLimitedOffer
                    ? 'bg-gradient-to-b from-[#181607] via-[#121212] to-[#0d0d0d] border-2 border-[#FFE600] shadow-[0_20px_50px_-15px_rgba(255,230,0,0.35)] lg:-translate-y-2'
                    : plan.isPopular
                    ? 'bg-gradient-to-b from-[#161616] to-[#0e0e0e] border border-[#FFE600]/40 shadow-xl'
                    : 'bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/[0.09] hover:border-white/20'
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.16em] shadow-xl flex items-center gap-1.5 ring-2 ring-[#080808] ${
                      plan.isLimitedOffer
                        ? 'bg-[#FFE600] text-black shadow-[0_0_20px_rgba(255,230,0,0.5)]'
                        : plan.isPopular
                        ? 'bg-[#FFE600] text-black shadow-[0_0_15px_rgba(255,230,0,0.3)]'
                        : 'bg-white text-black'
                    }`}
                  >
                    {plan.isLimitedOffer && <Sparkles size={11} className="fill-black" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Title & Rates */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-400 font-semibold">
                      {plan.duration}
                    </span>
                    {plan.savingsBadge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FFE600]/15 text-[#FFE600] text-[10px] font-mono font-bold tracking-wider">
                        {plan.savingsBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl text-white tracking-tight mb-4">
                    {plan.name}
                  </h3>

                  {/* Price Box */}
                  <div className="pb-5 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl sm:text-5xl text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-zinc-400 text-xs uppercase tracking-wider font-medium">
                        {plan.period}
                      </span>
                    </div>
                    {plan.equivalentMonthly && (
                      <div className="text-[11px] text-[#FFE600] font-mono mt-1.5 font-medium">
                        {plan.equivalentMonthly}
                      </div>
                    )}
                  </div>

                  <p className="text-[12px] text-zinc-400 leading-relaxed mb-6 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-7">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-2">
                      INCLUDED IN THIS PLAN
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[12.5px] text-zinc-300">
                        <span
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isFeatured
                              ? 'bg-[#FFE600] text-black font-extrabold'
                              : 'bg-white/[0.08] text-[#FFE600]'
                          }`}
                        >
                          <Check size={10} className="stroke-[3]" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => handlePlanClick(plan.name, plan.price)}
                    className={`w-full py-3.5 px-4 rounded-full text-[11px] font-extrabold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                      plan.isLimitedOffer
                        ? 'bg-[#FFE600] hover:bg-[#FFF033] text-black shadow-[0_0_20px_rgba(255,230,0,0.4)]'
                        : plan.isPopular
                        ? 'bg-white hover:bg-zinc-200 text-black'
                        : 'border border-white/20 hover:border-[#FFE600] text-white hover:text-[#FFE600]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Breakdown: Included Facilities vs Additional Charges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Included Core Facilities */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0e0e0e] border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400 font-bold">
                COMPLIMENTARY WITH EVERY MEMBERSHIP
              </span>
            </div>
            <h3 className="font-display text-2xl text-white mb-3">
              WORLD-CLASS CORE FACILITIES
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              Every Strength Lab membership grants full access to competition equipment, targeted fitness disciplines, and luxury recovery amenities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Certified Trainers',
                'CrossFit Training Zone',
                'HIIT Conditioning',
                'Strength & Conditioning',
                'Functional Training',
                'Mobility & Flexibility Training',
                'Steam Bath (Included)',
                'Shower & Locker Facilities',
                'Nutrition Guidance & Advice',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                  <Check size={13} className="text-[#FFE600] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Facilities at Additional Charges */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#12110c] to-[#0e0e0e] border border-[#FFE600]/30 relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFE600] shadow-[0_0_8px_#FFE600]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#FFE600] font-bold">
                PREMIUM ADD-ONS // ADDITIONAL CHARGES
              </span>
            </div>
            <h3 className="font-display text-2xl text-white mb-3">
              ADVANCED RECOVERY & ROOFTOP SPORTS
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              Take your performance to the highest tier with specialized recovery chambers and open-sky rooftop sports, bookable at nominal member rates:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Traditional & Infrared Sauna', desc: 'Deep heat tissue detoxification, joint relief & vascular circulation.' },
                { title: 'Cold Plunge Ice Bath', desc: 'Sub-zero contrast therapy protocol for accelerated muscular recovery.' },
                { title: 'Regulation Pickleball Court', desc: 'Rooftop match play court with equipment and court reservation.' },
                { title: 'Open-Sky Turf Ground', desc: 'Dedicated sled track, outdoor sprint lanes & functional drills.' },
              ].map((addon, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">{addon.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{addon.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Instant Callout Banner */}
        <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-r from-[#141414] via-[#101010] to-[#141414] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE600]/10 text-[#FFE600] text-[10px] font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              INTERESTED IN JOINING?
            </div>
            <h4 className="font-display text-2xl sm:text-3xl text-white leading-tight">
              BOOK YOUR MEMBERSHIP TODAY.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Share your contact number and our team will get in touch with you shortly. Or walk in to tour the facility at your convenience.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400 font-mono">
              <MapPin size={13} className="text-[#FFE600] shrink-0" />
              <span>KNS Mansion, 2nd Floor, B H Road, Shankarapuram, Tumkur – 572102</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hi Strength Lab, I'm interested in joining the gym. Please share more details and get in touch with me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-[12px] uppercase tracking-[0.14em] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={16} />
              <span>WhatsApp: 7996855559</span>
            </a>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="btn-ghost rounded-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-bold text-[12px] uppercase tracking-[0.14em]"
            >
              <Phone size={14} className="text-[#FFE600]" />
              <span>Request Callback</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

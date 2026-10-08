import React from 'react';
import { siteConfig } from '@/data/site';
import { Star } from './Icons';

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#080808] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              <span className="label-caps text-[11px] text-zinc-300">Athlete testimony // Tumakuru</span>
            </div>
            <h2 className="section-title text-white font-display">
              DON&apos;T TAKE<br />OUR WORD FOR IT.
            </h2>
          </div>
          <div className="max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-1.5 mb-2 text-[#FFE600]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} />
              ))}
              <span className="text-[12px] font-semibold text-zinc-200 ml-2">
                {siteConfig.googleRating}
              </span>
            </div>
            <p className="text-zinc-400 text-[13px] leading-relaxed">
              Representative feedback from serious lifters in Tumakuru. Live Google review sync coming soon.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.testimonials.map((item) => (
            <figure
              key={item.id}
              className="card card-hover p-7 sm:p-8 flex flex-col justify-between gap-8"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFE600]/12 border border-[#FFE600]/30 flex items-center justify-center text-[#FFE600] font-display text-xl leading-none mb-5">
                  &ldquo;
                </div>
                <div className="text-[11px] font-bold uppercase text-[#FFE600] tracking-[0.14em] mb-3">
                  {item.highlight}
                </div>
                <blockquote className="text-[15px] sm:text-[16px] text-zinc-200 font-light leading-relaxed">
                  &quot;{item.content}&quot;
                </blockquote>
              </div>

              <figcaption className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[13px] font-bold text-white uppercase tracking-wide">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    {item.role}
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

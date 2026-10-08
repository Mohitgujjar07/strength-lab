import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function CoachesSection() {
  return (
    <section id="coaches" className="relative bg-[#0b0b0b] py-20 sm:py-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="label-caps text-[11px] text-zinc-300">Coaching staff // Intent & mastery</span>
            </div>
            <h2 className="section-title text-white font-display">
              COACHED BY<br />DISCIPLINE.
            </h2>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-[11px] font-semibold uppercase tracking-[0.12em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              Coach roster // Full bios coming soon
            </div>
            <p className="text-zinc-400 text-[15px] leading-relaxed">
              Real coaches who respect biomechanics, progressive overload, and athlete safety. No cheerleading — just disciplined technical correction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.coaches.map((coach) => (
            <article
              key={coach.id}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative h-80 sm:h-[22rem] w-full overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.role}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="img-treatment object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1.1s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-black/65 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold text-zinc-300 uppercase tracking-[0.12em] border border-white/15">
                  Strength Lab Coach
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff5a52]">
                      {coach.role}
                    </div>
                    <h3 className="font-display text-[1.55rem] text-white leading-none mt-1">
                      {coach.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="text-[11px] font-mono text-zinc-500 uppercase leading-relaxed mb-3">
                  {coach.specialization}
                </div>
                <p className="text-zinc-400 text-[14px] leading-relaxed flex-1">
                  {coach.bio}
                </p>
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-[0.14em]">
                  <span>Discipline first</span>
                  <span className="text-zinc-400">Tumakuru</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

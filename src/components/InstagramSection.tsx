import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { Instagram, ArrowUpRight } from './Icons';

export default function InstagramSection() {
  return (
    <section className="relative bg-[#080808] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span className="label-caps text-[11px] text-zinc-300">Social archive // @strengthlabofficial</span>
            </div>
            <h2 className="section-title text-white font-display">
              INSIDE THE LAB.
            </h2>
          </div>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost rounded-full inline-flex items-center gap-2 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white group w-fit"
          >
            <Instagram size={16} className="text-[#ff5a52]" />
            <span>Follow the lab</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.instagramFeed.map((post) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group relative block aspect-[4/5] !rounded-2xl"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="img-treatment object-cover object-center group-hover:scale-[1.06] transition-transform duration-[1s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              <div className="absolute top-3.5 right-3.5 rounded-full bg-black/65 backdrop-blur-md p-2 border border-white/15 text-white">
                <Instagram size={14} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-[12px] sm:text-[13px] text-zinc-200 leading-snug line-clamp-2">
                  {post.caption}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-[0.12em]">
                  <span>{post.likes} likes</span>
                  <span className="text-[#ff5a52]">View →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

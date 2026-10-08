import React from 'react';
import { siteConfig } from '@/data/site';
import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight } from './Icons';

export default function LocationSection() {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent('KNS Mansion B.H. Road Shankarapuram Tumakuru Karnataka 572102')}&z=16&output=embed`;

  return (
    <section id="contact" className="relative bg-[#080808] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div>
            <div className="eyebrow-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              <span className="label-caps text-[11px] text-zinc-300">Headquarters // Visit & directions</span>
            </div>
            <h2 className="section-title text-white font-display">
              FIND<br />YOUR LAB.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-[15px] leading-relaxed">
            On B.H. Road with parking and lift access to the 2nd floor — two minutes from the city centre, right on the highway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-5 card p-7 sm:p-9 flex flex-col justify-between gap-8">
            <div>
              <div className="text-[11px] font-bold text-[#FFE600] uppercase tracking-[0.18em] mb-2">
                Physical presence
              </div>
              <h3 className="font-display text-[2rem] sm:text-4xl text-white leading-none mb-6">
                {siteConfig.name}
              </h3>

              <div className="space-y-5 text-[14px] text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#FFE600]/12 border border-[#FFE600]/30 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#FFE600]" />
                  </span>
                  <div className="leading-relaxed">
                    <strong className="text-white block font-semibold">KNS Mansion, 2nd Floor</strong>
                    <span className="text-zinc-400">B.H. Road, Shankarapuram<br />Tumakuru, Karnataka 572102</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-zinc-200" />
                  </span>
                  <div className="leading-relaxed">
                    <strong className="text-white block font-semibold">Training hours</strong>
                    <span className="text-zinc-400">{siteConfig.location.hours.weekdays}<br />{siteConfig.location.hours.sunday}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-zinc-200" />
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Direct line</strong>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-zinc-200 hover:text-white font-semibold">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-[12px] uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Get directions on Google Maps</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-full bg-[#25D366]/12 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white font-bold text-[11px] uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="btn-ghost rounded-full py-3.5 px-4 text-white font-bold text-[11px] uppercase tracking-[0.12em] flex items-center justify-center gap-2"
                >
                  <Phone size={15} />
                  <span>Call now</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 card overflow-hidden min-h-[420px] relative flex flex-col">
            <iframe
              title="Strength Lab location map — KNS Mansion, B.H. Road, Tumakuru"
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale invert-[0.92] contrast-[0.92] opacity-95"
              style={{ border: 0 }}
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#121212] to-transparent" />
            <div className="relative mt-auto m-4 sm:m-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                  Landmark identifier
                </div>
                <div className="text-[14px] font-semibold text-white mt-1">
                  KNS Mansion · 2nd Floor · Shankarapuram
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">
                  13.3379° N, 77.1173° E
                </div>
              </div>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full inline-flex items-center gap-2 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-black whitespace-nowrap"
              >
                <span>Open live navigation</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

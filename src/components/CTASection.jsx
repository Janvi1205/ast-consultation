import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/siteData';
import IslamicPattern from './IslamicPattern';

export default function CTASection({
  heading = "Sometimes, Clarity Is the First Step Forward.",
  subheading = "Speak privately about your situation and discover a personalized path forward.",
  whatsappMessage = BRAND.defaultWhatsAppMsg
}) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMsg}`;

  return (
    <section className="relative bg-gradient-to-br from-[#064E3B] via-[#022C22] to-[#064E3B] text-[#FAF9F5] py-20 px-4 sm:px-6 lg:px-8 rounded-3xl overflow-hidden border border-[#C9A227]/30 shadow-2xl my-16">
      <IslamicPattern opacity="opacity-[0.06]" variant="stars" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* SMALL DECORATIVE BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022C22]/80 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
          <span>Private & Confidential Guidance</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[#FAF9F5]">
          {heading}
        </h2>

        <p className="text-base sm:text-lg font-light text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Link
            to="/book-consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] hover:brightness-110 text-[#022C22] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:scale-[1.02]"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Consultation</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#087F5B] hover:bg-[#064E3B] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl border border-[#C9A227]/30 transform hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-emerald-200/60 font-light pt-2">
          Strictly Private • Personalized Guidance • Online Sessions Available
        </p>
      </div>
    </section>
  );
}

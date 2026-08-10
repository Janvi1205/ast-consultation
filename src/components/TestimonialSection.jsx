import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';
import IslamicPattern from './IslamicPattern';

export default function TestimonialSection({ className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className={`relative bg-[#022C22] text-[#FAF9F5] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      {/* Islamic Background Star Lattice */}
      <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

      {/* Atmospheric Soft Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#064E3B]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12 text-center">
        
        {/* TOP BADGE & HEADLINE (REFERENCE STYLE) */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B]/80 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.25em]">
            <span>• TESTIMONIALS •</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="block text-white">Voices of</span>
            <span className="block bg-gradient-gold-text">Transformation</span>
          </h2>
        </div>

        {/* FEATURED CAROUSEL CARD (EXACT REFERENCE LAYOUT) */}
        <div className="relative max-w-3xl mx-auto pt-6">
          
          {/* FLOATING OVERLAPPING GOLD QUOTE ICON AT TOP LEFT */}
          <div className="absolute -top-1 -left-2 sm:left-4 z-20 w-14 h-14 rounded-2xl bg-[#022C22] border border-[#C9A227]/50 flex items-center justify-center text-[#C9A227] shadow-2xl">
            <Quote className="w-7 h-7 fill-current" />
          </div>

          {/* MAIN CARD CONTAINER */}
          <div className="bg-[#064E3B]/30 backdrop-blur-xl rounded-3xl p-8 sm:p-14 border border-[#C9A227]/30 shadow-2xl space-y-8 transition-all duration-500 min-h-[320px] flex flex-col justify-between">
            
            <div className="space-y-6 pt-2">
              {/* ⭐⭐⭐⭐⭐ 5 GOLD STARS */}
              <div className="flex items-center justify-center gap-1.5 text-[#C9A227]">
                {[...Array(activeItem.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* QUOTE TEXT */}
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-emerald-100/90 font-light italic leading-relaxed max-w-2xl mx-auto">
                "{activeItem.quote}"
              </p>
            </div>

            {/* CLIENT NAME & SERVICE CATEGORY */}
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#C9A227] tracking-wide">
                {activeItem.name}
              </h4>
              <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-200/80 font-semibold">
                {activeItem.service} {activeItem.location && `• ${activeItem.location}`}
              </p>
            </div>

            {/* CAROUSEL NAVIGATION CONTROLS (REFERENCE STYLE) */}
            <div className="pt-6 border-t border-emerald-900/60 flex items-center justify-center gap-6">
              
              {/* PREV BUTTON */}
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-[#C9A227]/40 bg-[#022C22]/90 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#022C22] flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* SLIDER INDICATOR DOTS WITH ACTIVE BAR */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-8 bg-[#C9A227]'
                          : 'w-2 bg-emerald-900/80 hover:bg-[#C9A227]/60'
                      }`}
                    />
                  );
                })}
              </div>

              {/* NEXT BUTTON */}
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-[#C9A227]/40 bg-[#022C22]/90 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#022C22] flex items-center justify-center transition-all duration-300 shadow-lg focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

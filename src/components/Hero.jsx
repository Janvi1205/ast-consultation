import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { BRAND } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import OptimizedImage from './OptimizedImage';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.1 }
      )
        .fromTo(
          '.hero-title-1',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.7'
        )
        .fromTo(
          '.hero-title-2',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.7'
        )
        .fromTo(
          '.hero-divider',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1 },
          '-=0.6'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.6'
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.defaultWhatsAppMsg)}`;

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen bg-[#022C22] text-[#FAF9F5] pt-20 lg:pt-36 pb-16 lg:pb-24 overflow-hidden flex flex-col lg:flex-row lg:items-center z-10"
    >
      {/* MOBILE HERO IMAGE (ON TOP - MATCHING DESIRED MOBILE REFERENCE DESIGN) */}
      <div className="block lg:hidden w-full relative h-[380px] sm:h-[460px] z-10">
        <OptimizedImage
          src="/images/hero_portrait.webp"
          alt="Mohammed Gulab Hussain - Muslim Astrologer"
          className="w-full h-full object-cover object-top"
          width={600}
          height={460}
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft bottom vignette overlay to fade into dark text body */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#022C22] to-transparent pointer-events-none" />
      </div>

      {/* DESKTOP HERO BACKGROUND IMAGE (100% OPACITY ON THE RIGHT) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0 overflow-hidden">
        <picture>
          <source media="(max-width: 480px)" srcSet="/images/hero_chatgpt_bg-480.webp" />
          <source media="(max-width: 768px)" srcSet="/images/hero_chatgpt_bg-768.webp" />
          <source media="(max-width: 1280px)" srcSet="/images/hero_chatgpt_bg-1280.webp" />
          <img
            src={BRAND.heroPortrait}
            alt="Mohammed Gulab Hussain - Muslim Astrologer"
            className="w-full h-full object-cover object-[82%_20%] opacity-100"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
        </picture>
        {/* Soft Radial Vignette Masking for Text Contrast on Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22]/85 via-[#022C22]/50 to-transparent max-w-3xl pointer-events-none" />
      </div>

      {/* TEXT CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-lg xl:max-w-2xl space-y-6 text-center lg:text-left py-6 mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          
          {/* EYEBROW BADGE */}
          <div className="hero-eyebrow text-[#C9A227] font-semibold text-xs tracking-[0.25em] uppercase flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1">
            <span>ISLAMIC ASTROLOGY</span>
            <span>|</span>
            <span>DUA</span>
            <span>|</span>
            <span>WAZIFA</span>
            <span>|</span>
            <span>ISTIKHARA</span>
          </div>

          {/* TWO-LINE EDITORIAL HEADLINE */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="hero-title-1 block text-white drop-shadow-md">
              Find Clarity.
            </span>
            <span className="hero-title-2 block text-[#C9A227] drop-shadow-md">
              Discover Your Path.
            </span>
          </h1>

          {/* DECORATIVE STAR DIVIDER LINE */}
          <div className="hero-divider flex items-center justify-center lg:justify-start gap-3 text-[#C9A227]/70 py-1">
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
            <span className="text-xs">✦</span>
            <div className="w-12 h-[1px] bg-[#C9A227]/40" />
          </div>

          {/* SUPPORTING TEXT */}
          <p className="hero-desc text-base sm:text-lg font-light text-emerald-100/90 leading-relaxed max-w-lg drop-shadow">
            Personalized astrological and spiritual guidance for life's important questions, relationships, family concerns and personal challenges.
          </p>

          {/* CTA BUTTONS (RESPONSIVE STYLING) */}
          <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            
            {/* BOOK CONSULTATION GOLD PILL BUTTON */}
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B89435] hover:brightness-110 text-[#022C22] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl transform hover:scale-[1.03]"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>BOOK CONSULTATION</span>
            </Link>

            {/* CHAT ON WHATSAPP PILL BUTTON */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#022C22]/80 hover:bg-[#087F5B] border border-emerald-500/40 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-md shadow-xl transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>CHAT ON WHATSAPP</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

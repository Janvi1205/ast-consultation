import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Moon, Sparkles, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function LoveGuidance() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent("Hello Mohammed Gulab Hussain, I would like to enquire about Wazifa & Istikhara for Love consultation.")}`;

  return (
    <>
      <SEOHead
        title="Wazifa & Istikhara for Love | Mohammed Gulab Hussain"
        description="Spiritual guidance for matters of the heart. Personalized Wazifa and Istikhara guidance for relationship decisions and seeking clarity in love."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-20 overflow-hidden">
        <IslamicPattern opacity="opacity-[0.06]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Moon className="w-3.5 h-3.5 fill-current" />
            <span>Islamic Spiritual Guidance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Spiritual Guidance for Matters of the Heart
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Combining traditional Islamic practices of Wazifa and Istikhara with astrological perspectives to help you find peace and direction in love.
          </p>

          <div className="pt-4 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* TWO LARGE PREMIUM SECTIONS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* 1. WAZIFA FOR LOVE BACK */}
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-emerald-900/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 text-[#087F5B]">
              <Heart className="w-6 h-6 fill-current text-[#C9A227]" />
              <span className="text-xs uppercase tracking-widest font-bold">Spiritual Supplication</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#022C22]">
              Wazifa for Love Back
            </h2>

            <p className="text-emerald-950/80 font-light text-base sm:text-lg leading-relaxed max-w-3xl">
              Personalized spiritual guidance for individuals seeking support and clarity regarding love and relationships. When facing separation or emotional distance, Wazifa provides structured prayer routines to focus your heart on sincerity, forgiveness, and divine blessing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-2xl">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-emerald-900/10 text-xs text-[#022C22]">
                <strong>Structured Routines:</strong> Daily spiritual recommendations for mental peace.
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-emerald-900/10 text-xs text-[#022C22]">
                <strong>Purification of Intention:</strong> Cultivating genuine mutual affection.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/book-consultation?service=wazifa-love-back"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#064E3B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#022C22] shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#C9A227]" />
                <span>DISCUSS YOUR SITUATION</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#087F5B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#064E3B]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Instant Query</span>
              </a>
            </div>
          </div>

          {/* 2. ISTIKHARA FOR LOVE BACK */}
          <div className="bg-[#022C22] text-white rounded-3xl p-8 sm:p-14 border border-[#C9A227]/40 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 text-[#C9A227]">
              <Sparkles className="w-6 h-6" />
              <span className="text-xs uppercase tracking-widest font-bold">Divine Guidance</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Istikhara for Love Back & Marriage Decisions
            </h2>

            <p className="text-emerald-100/90 font-light text-base sm:text-lg leading-relaxed max-w-3xl">
              Guidance for individuals seeking clarity while making important decisions concerning love, relationships or marriage. Istikhara is the sacred Islamic prayer for seeking divine counsel when facing critical choices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-2xl text-xs text-emerald-100">
              <div className="p-4 rounded-xl bg-[#064E3B]/80 border border-[#C9A227]/20">
                <strong>Istikhara Method:</strong> Clear guidance on how to perform Istikhara prayer correctly.
              </div>
              <div className="p-4 rounded-xl bg-[#064E3B]/80 border border-[#C9A227]/20">
                <strong>Interpreting Signs:</strong> Guidance on understanding emotional inclination and signs.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/book-consultation?service=istikhara-love-back"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>REQUEST A CONSULTATION</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#087F5B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#064E3B]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <CTASection />

        </div>
      </section>
    </>
  );
}

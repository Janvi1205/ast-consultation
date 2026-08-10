import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function IntercasteMarriage() {
  const service = SERVICES_LIST.find(s => s.slug === "intercaste-marriage") || SERVICES_LIST[3];
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <>
      <SEOHead
        title="Intercaste Marriage Guidance | Mohammed Gulab Hussain"
        description="Private astrological and spiritual consultation for couples facing family hesitation or social concerns regarding intercaste marriage."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-20 overflow-hidden">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Users className="w-3.5 h-3.5" />
            <span>Marriage & Family Harmony</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            When Love Meets Family Expectations
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Relationships can become complicated when families have different expectations around marriage. This consultation provides a private space to discuss your situation and seek personalized astrological and spiritual guidance.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation?service=intercaste-marriage"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-bold text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Private Consultation</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#087F5B] hover:bg-[#064E3B] text-white font-semibold text-sm uppercase tracking-wider transition-all border border-[#C9A227]/30 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>

          <div className="pt-6 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeading
            eyebrow="Consultation Pillars"
            title="Navigating Marriage Decisions With Respect & Wisdom"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-emerald-900/10 shadow-lg space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#022C22]">Understanding the Situation</h3>
              <p className="text-emerald-950/80 font-light text-base leading-relaxed">
                Analyzing individual horoscopes for marital compatibility, planetary positions influencing family approval, and spiritual prayers for mutual understanding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-emerald-900/10 shadow-lg space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#022C22]">Family & Social Concerns</h3>
              <p className="text-emerald-950/80 font-light text-base leading-relaxed">
                Providing guidance on how to address family hesitancy with patience, emotional maturity, and respectful communication.
              </p>
            </div>
          </div>

          <FAQ limit={4} />

          <CTASection whatsappMessage={service.whatsappMsg} />
        </div>
      </section>
    </>
  );
}

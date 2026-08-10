import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MessageCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function FinancialProblem() {
  const service = SERVICES_LIST.find(s => s.slug === "financial-problem") || SERVICES_LIST[2];
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <>
      <SEOHead
        title="Financial Problem Guidance | Mohammed Gulab Hussain"
        description="Astrological and spiritual guidance for individuals facing financial uncertainty, business strain, or career timing decisions."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Financial & Business Perspective</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Guidance Through Financial Uncertainty
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Astrological and spiritual guidance for individuals facing financial uncertainty or seeking greater clarity around important financial situations.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <SectionHeading
            eyebrow="Financial & Career Insight"
            title="Understanding Planetary Cycles & Business Timing"
            subtitle="Astrology offers valuable perspective on 2nd and 11th House planetary positions, Saturn periods (Sade Sati), and optimal timing for major financial ventures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Financial Concerns</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Analyzing planetary obstacles causing persistent financial stress or unexpected expenditures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Career-Related Uncertainty</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Evaluating favorable planetary periods for job changes, promotions, or career transitions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Business Concerns</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Astrological evaluation of partnership compatibility and business venture timing.
              </p>
            </div>
          </div>

          {/* REQUIRED DISCLAIMER BOX */}
          <div className="p-6 rounded-2xl bg-[#E8F3EE] border border-[#087F5B]/30 flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-[#C9A227] shrink-0 mt-0.5" />
            <p className="text-sm text-[#022C22] font-light leading-relaxed">
              <strong className="font-semibold text-[#064E3B]">Financial Guidance Disclaimer:</strong> {service.disclaimer}
            </p>
          </div>

          <CTASection whatsappMessage={service.whatsappMsg} />
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, MessageCircle, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function FamilyChild() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent("Hello Mohammed Gulab Hussain, I would like to enquire about Family and Personal Consultation.")}`;

  return (
    <>
      <SEOHead
        title="Family Problem & Childless Solution Guidance | Mohammed Gulab Hussain"
        description="Compassionate astrological and spiritual guidance for family conflicts, domestic misunderstandings, and sensitive consultation for childless couples."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Users className="w-3.5 h-3.5" />
            <span>Family & Personal Guidance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Family Guidance & Child Concerns
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Sensitive, respectful, and personalized astrological and spiritual consultation for difficult family situations and progeny concerns.
          </p>
        </div>
      </section>

      {/* THREE REQUIRED SECTIONS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* SECTION 1: FAMILY PROBLEM SOLUTION */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-900/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#087F5B]">Section 1</span>
              <h2 className="font-serif text-3xl font-bold text-[#022C22]">
                Family Problem Solution
              </h2>
              <p className="text-emerald-950/80 font-light text-base leading-relaxed">
                Guidance for individuals facing family conflicts, misunderstandings and difficult personal situations. Domestic friction can impact mental peace; we provide astrological analysis of Fourth House placements along with structured steps for reconciliation.
              </p>
              <div className="pt-2">
                <Link
                  to="/book-consultation?service=family-problem-solution"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#064E3B] hover:text-[#C9A227]"
                >
                  <span>Request Family Consultation →</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#E8F3EE] p-6 rounded-2xl border border-emerald-900/10 text-center space-y-2">
              <Users className="w-10 h-10 text-[#064E3B] mx-auto" />
              <h4 className="font-serif font-bold text-lg text-[#022C22]">Domestic Peace</h4>
              <p className="text-xs text-emerald-950/70 font-light">Resolving inter-generational friction & restoring warmth in the household.</p>
            </div>
          </div>

          {/* SECTION 2: CHILDLESS SOLUTION */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-900/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#087F5B]">Section 2</span>
              <h2 className="font-serif text-3xl font-bold text-[#022C22]">
                Childless Solution
              </h2>
              <p className="text-emerald-950/80 font-light text-base leading-relaxed">
                Sensitive spiritual and astrological guidance for individuals and couples facing concerns related to having children. We analyze 5th House planetary aspects and offer spiritual support during this emotionally profound journey.
              </p>

              {/* MANDATORY MEDICAL DISCLAIMER */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-amber-200 flex items-start gap-3 mt-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-950/80 font-light leading-relaxed">
                  <strong className="font-semibold text-[#064E3B]">Health Disclaimer:</strong> Spiritual and astrological guidance does not replace medical diagnosis, treatment or professional healthcare advice.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-consultation?service=childless-solution"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#064E3B] hover:text-[#C9A227]"
                >
                  <span>Request Sensitive Consultation →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#E8F3EE] p-6 rounded-2xl border border-emerald-900/10 text-center space-y-2">
              <ShieldCheck className="w-10 h-10 text-[#064E3B] mx-auto" />
              <h4 className="font-serif font-bold text-lg text-[#022C22]">100% Private</h4>
              <p className="text-xs text-emerald-950/70 font-light">Discreet, empathetic support for individuals & couples.</p>
            </div>
          </div>

          <CTASection />

        </div>
      </section>
    </>
  );
}

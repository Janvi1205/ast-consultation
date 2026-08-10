import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function RelationshipProblem() {
  const service = SERVICES_LIST.find(s => s.slug === "relationship-problem") || SERVICES_LIST[1];
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <>
      <SEOHead
        title="Relationship Problem Guidance | Mohammed Gulab Hussain"
        description="Personalized astrological and spiritual guidance for couples and individuals experiencing misunderstandings, emotional distance, and relationship uncertainty."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Relationship Consultation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Find Clarity in Your Relationship
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Personalized guidance for people experiencing emotional distance, relationship difficulties, misunderstandings or other personal challenges.
          </p>
        </div>
      </section>

      {/* CONTENT AREAS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <SectionHeading
            eyebrow="Key Focus Areas"
            title="Resolving Friction & Restoring Harmony"
            subtitle="Explore how personalized astrology and spiritual remedies assist in navigating relationship friction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Relationship Misunderstandings</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Identifying root causes of persistent arguments, miscommunications, and unexpressed expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Emotional Distance</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Rebuilding emotional warmth, trust, and intimacy through patient consultation and spiritual remedies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Communication Difficulties</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Overcoming communication barriers and learning how to express needs without anger or resentment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Family Interference</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Handling external family pressure or outside involvement gracefully without damaging your relationship bond.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">Relationship Uncertainty</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Seeking astrological perspective on future compatibility, long-term commitment, and marriage timing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#022C22]">1-on-1 Personal Guidance</h3>
              <p className="text-sm text-emerald-950/80 font-light leading-relaxed">
                Direct audio/video consultation with Mohammed Gulab Hussain for individual attention and privacy.
              </p>
            </div>
          </div>

          <CTASection whatsappMessage={service.whatsappMsg} />
        </div>
      </section>
    </>
  );
}

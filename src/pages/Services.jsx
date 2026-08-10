import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sparkles, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import ServiceGrid from '../components/ServiceGrid';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import { SERVICES_LIST } from '../data/siteData';

export default function Services() {

  return (
    <>
      <SEOHead
        title="Astrology & Spiritual Guidance Services | Mohammed Gulab Hussain"
        description="Browse all 9 specialized guidance services provided by Mohammed Gulab Hussain, including Lost Love Back, Intercaste Marriage, Dua & Wazifa, Family Solution, and Financial Guidance."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Moon className="w-3.5 h-3.5 fill-current" />
            <span>Consultation Directory</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Personalized Guidance for Your Situation
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive areas of astrology and spiritual guidance. Select a service to read details or request a private 1-on-1 session.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER & SERVICES GRID */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* GRID OF SERVICES */}
          <ServiceGrid services={SERVICES_LIST} columns={3} />

          {/* CTA BANNER */}
          <CTASection />

        </div>
      </section>
    </>
  );
}

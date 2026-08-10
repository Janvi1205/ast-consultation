import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, HeartHandshake, Moon, Sparkles, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceGrid from '../components/ServiceGrid';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialSection from '../components/TestimonialSection';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import InsightsCard from '../components/InsightsCard';
import IslamicPattern from '../components/IslamicPattern';
import OptimizedImage from '../components/OptimizedImage';
import { BRAND, SERVICES_LIST, WHY_CHOOSE_US, HOW_IT_WORKS_STEPS, TESTIMONIALS, INSIGHTS_ARTICLES } from '../data/siteData';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Mohammed Gulab Hussain | Astrology & Spiritual Guidance"
        description="Personalized astrological and spiritual guidance, Dua, Wazifa, and Istikhara consultation for love, marriage, family, and financial problems by Muslim Astrologer Mohammed Gulab Hussain."
      />

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-[#FAF9F5] relative overflow-hidden">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#C9A227]/40 shadow-2xl bg-[#022C22]">
                <OptimizedImage
                  src={BRAND.aboutPortrait}
                  alt="Mohammed Gulab Hussain"
                  className="w-full h-[480px] object-cover object-top"
                  width={500}
                  height={480}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#064E3B]/90 backdrop-blur-md border border-[#C9A227]/30 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
                    Spiritual Guidance & Astrological Insight
                  </p>
                  <p className="font-serif text-lg font-bold">Mohammed Gulab Hussain</p>
                </div>
              </div>
            </div>

            {/* About Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EE] text-[#064E3B] text-xs font-semibold uppercase tracking-wider">
                <Moon className="w-3.5 h-3.5" />
                <span>Meet Mohammed Gulab Hussain</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#022C22] leading-tight">
                Combining Astrological Understanding With Spiritual Guidance
              </h2>

              <div className="space-y-4 text-emerald-950/80 font-light text-base leading-relaxed">
                <p>
                  Mohammed Gulab Hussain has had a deep interest in astrology from an early age. His work combines astrological understanding with spiritual guidance to help people navigate important questions around relationships, marriage, family, finances and personal life.
                </p>
                <p>
                  His approach is centered around understanding each individual's situation and offering personalized guidance, prayers, remedies and spiritual insight according to the nature of the concern.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-emerald-900/10 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0" />
                  <span className="text-xs font-semibold text-[#022C22]">Predicting Future Possibilities</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-emerald-900/10 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0" />
                  <span className="text-xs font-semibold text-[#022C22]">Quranic Cures & Remedies</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-emerald-900/10 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0" />
                  <span className="text-xs font-semibold text-[#022C22]">Dua & Wazifa Guidance</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-emerald-900/10 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0" />
                  <span className="text-xs font-semibold text-[#022C22]">1-on-1 Confidential Support</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#022C22] text-[#FAF9F5] font-semibold text-xs uppercase tracking-wider transition-all shadow-md border border-[#C9A227]/30"
                >
                  <span>MEET MOHAMMED GULAB HUSSAIN</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-[#E8F3EE]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Areas of Consultation"
            title="Guidance for Life's Most Important Questions"
            subtitle="Explore personalized astrology and spiritual guidance for the situations that matter most."
          />

          <ServiceGrid services={SERVICES_LIST} columns={3} />

          <div className="text-center pt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#064E3B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#022C22] transition-all shadow-lg border border-[#C9A227]/40"
            >
              <span>View All 9 Guidance Services</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE MOHAMMED */}
      <section className="py-24 bg-[#022C22] text-[#FAF9F5] relative overflow-hidden">
        <IslamicPattern opacity="opacity-[0.04]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <SectionHeading
            eyebrow="Trust & Confidentiality"
            title="Why People Seek Mohammed Gulab Hussain's Guidance"
            subtitle="Thoughtful, respectful, and individual attention for your most sensitive personal concerns."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#064E3B]/60 backdrop-blur-md rounded-2xl p-8 border border-[#C9A227]/20 hover:border-[#C9A227]/60 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#022C22] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shadow-inner group-hover:scale-110 transition-transform">
                  {idx === 0 && <UserCheck className="w-6 h-6" />}
                  {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 3 && <Moon className="w-6 h-6" />}
                  {idx === 4 && <Sparkles className="w-6 h-6" />}
                  {idx === 5 && <Video className="w-6 h-6" />}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C9A227] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-light text-emerald-100/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Consultation Process"
            title="How It Works"
            subtitle="Four simple steps to schedule your private consultation session."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-emerald-900/10 shadow-lg space-y-4 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  <span className="font-serif text-5xl font-bold text-[#C9A227]/40 group-hover:text-[#C9A227] transition-colors block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#022C22] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#C9A227] my-3 rounded-full" />
                  <p className="text-sm font-light text-emerald-950/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-bold text-xs uppercase tracking-wider shadow-xl hover:brightness-110 transition-all"
            >
              <span>Begin Step 1 — Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <TestimonialSection />



      {/* 8. FAQ PREVIEW */}
      <section className="py-24 bg-[#E8F3EE]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Consultations"
            subtitle="Find answers to common questions regarding booking, privacy, and online sessions."
          />

          <FAQ limit={6} />
        </div>
      </section>

      {/* 9. FINAL HOME CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </>
  );
}

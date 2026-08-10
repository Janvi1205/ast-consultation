import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sparkles, ShieldCheck, HeartHandshake, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import OptimizedImage from '../components/OptimizedImage';
import { BRAND } from '../data/siteData';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Mohammed Gulab Hussain"
        description="Learn about Mohammed Gulab Hussain's background in Islamic astrology, Quranic remedies, Dua and Wazifa guidance, and personal consultation philosophy."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Moon className="w-3.5 h-3.5 fill-current" />
            <span>Muslim Astrologer & Spiritual Consultant</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Meet Mohammed Gulab Hussain
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing clear astrological perspectives and spiritual guidance for people navigating life's important relationship, family, and financial questions.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 bg-[#FAF9F5] relative overflow-hidden">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* INTRODUCTION & JOURNEY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl bg-[#022C22]">
                <OptimizedImage
                  src={BRAND.aboutPortrait || BRAND.heroPortrait}
                  alt="Mohammed Gulab Hussain"
                  className="w-full h-[520px] object-cover object-top"
                  width={500}
                  height={520}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#064E3B]/90 backdrop-blur-md border border-[#C9A227]/30 text-white">
                  <h3 className="font-serif text-xl font-bold text-[#FAF9F5]">Mohammed Gulab Hussain</h3>
                  <p className="text-xs text-[#C9A227] uppercase tracking-wider font-semibold">
                    Spiritual Guidance & Astrological Remedies
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="His Background & Journey"
                title="A Lifelong Passion for Astrology & Spiritual Guidance"
                centered={false}
              />

              <div className="space-y-4 text-emerald-950/80 font-light text-base leading-relaxed">
                <p>
                  Many people are unfamiliar with Islamic astrology and its rich traditions of spiritual guidance. Mohammed Gulab Hussain developed a strong interest in astrology from an early age and has dedicated himself to helping people understand their personal situations through astrology and spiritual guidance.
                </p>
                <p>
                  He is also described as being knowledgeable in Quranic cures and spiritual remedies. His work focuses on helping people who are facing difficulties in different areas of life, providing a calm, structured environment to analyze challenges and seek spiritual clarity.
                </p>
                <p>
                  His work combines astrological understanding with spiritual guidance to help people navigate important questions around relationships, marriage, family, finances and personal life.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E8F3EE] border border-emerald-900/10 space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#064E3B] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#C9A227]" />
                  <span>Stated Key Strengths & Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#022C22] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Guidance about future possibilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Understanding daily-life problems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Prayers & spiritual remedies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Personalized spiritual guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Relationship & family difficulty support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#087F5B]" />
                    <span>Confidential online consultations</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* APPROACH & PHILOSOPHY */}
          <div className="bg-white rounded-3xl p-10 lg:p-14 border border-emerald-900/10 shadow-2xl relative overflow-hidden space-y-10">
            <IslamicPattern opacity="opacity-[0.03]" variant="stars" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#087F5B] font-semibold">
                Personal Consultation Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#022C22]">
                Centered on Understanding Each Individual
              </h2>
              <p className="text-emerald-950/80 font-light text-base leading-relaxed">
                "No two personal challenges are identical. True consultation requires careful listening, understanding the individual's history, and applying astrological insights and spiritual remedies that suit their unique circumstances."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-emerald-900/10 space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#087F5B]" />
                <h3 className="font-serif text-xl font-bold text-[#022C22]">Total Confidentiality</h3>
                <p className="text-xs text-emerald-950/80 font-light leading-relaxed">
                  Your personal history, birth details, and conversation topics remain completely private.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-emerald-900/10 space-y-3">
                <HeartHandshake className="w-8 h-8 text-[#087F5B]" />
                <h3 className="font-serif text-xl font-bold text-[#022C22]">Compassionate Approach</h3>
                <p className="text-xs text-emerald-950/80 font-light leading-relaxed">
                  Every issue is discussed with respect, patience, and absolute non-judgmental support.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-emerald-900/10 space-y-3">
                <BookOpen className="w-8 h-8 text-[#087F5B]" />
                <h3 className="font-serif text-xl font-bold text-[#022C22]">Spiritual Alignment</h3>
                <p className="text-xs text-emerald-950/80 font-light leading-relaxed">
                  Combining authentic Quranic prayers, Dua, and Wazifa guidance to help bring peace to your heart.
                </p>
              </div>
            </div>
          </div>

          <CTASection />

        </div>
      </section>
    </>
  );
}

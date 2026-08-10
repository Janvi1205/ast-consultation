import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sparkles, BookOpen, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';
import OptimizedImage from '../components/OptimizedImage';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function DuaWazifa() {
  const service = SERVICES_LIST.find(s => s.slug === "dua-wazifa") || SERVICES_LIST[4];
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <>
      <SEOHead
        title="Dua & Wazifa Guidance | Mohammed Gulab Hussain"
        description="Personalized spiritual guidance, Dua and Wazifa consultation for individuals seeking peace, clarity, and spiritual remedies during difficult phases of life."
      />

      {/* HERO BANNER WITH STRONGEST ISLAMIC AESTHETIC */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden border-b border-[#C9A227]/40">
        <IslamicPattern opacity="opacity-[0.08]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#064E3B] border border-[#C9A227]/60 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.25em] shadow-lg">
            <Moon className="w-4 h-4 fill-current text-[#C9A227]" />
            <span>Islamic Spiritual Guidance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Dua & Wazifa Guidance
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Personalized spiritual guidance for individuals seeking support, peace, and divine blessing during difficult or uncertain phases of life.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation?service=dua-wazifa"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-bold text-sm uppercase tracking-wider shadow-2xl hover:brightness-110 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Spiritual Consultation</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#087F5B] hover:bg-[#064E3B] text-white font-semibold text-sm uppercase tracking-wider transition-all border border-[#C9A227]/30 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Direct Advice</span>
            </a>
          </div>

          <div className="pt-6 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* ELEGANT ISLAMIC CONTENT */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.04]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl bg-[#022C22]">
                <OptimizedImage
                  src={service.image}
                  alt="Dua and Wazifa Guidance"
                  className="w-full h-[480px] object-cover"
                  width={400}
                  height={480}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#064E3B]/90 backdrop-blur-md border border-[#C9A227]/40 text-white text-center">
                  <p className="font-serif text-lg font-bold">Personalized Spiritual Remedies</p>
                  <p className="text-xs text-[#C9A227]">Mohammed Gulab Hussain</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Spiritual Understanding"
                title="What Is Dua & Wazifa Guidance?"
                centered={false}
              />

              <div className="space-y-4 text-emerald-950/80 font-light text-base leading-relaxed">
                <p>
                  In Islamic tradition, <strong>Dua</strong> represents direct personal prayer and supplication to Allah, while <strong>Wazifa</strong> involves specific structured spiritual recitations and remedies aimed at bringing peace, relief from burden, and protection.
                </p>
                <p>
                  Mohammed Gulab Hussain provides individualized spiritual guidance to help you understand which prayers and spiritual habits best align with your current trial or situation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-emerald-900/10 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#064E3B]">Dua Supplication</h4>
                  <p className="text-xs text-emerald-950/70 font-light">
                    Sincere personal prayers tailored to relationship peace, family unity, and mental tranquility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-900/10 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#064E3B]">Wazifa Recitations</h4>
                  <p className="text-xs text-emerald-950/70 font-light">
                    Structured daily spiritual routines and Quranic remedies for enduring difficult times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHEN PEOPLE SEEK GUIDANCE */}
          <div className="bg-[#022C22] text-white rounded-3xl p-10 lg:p-14 border border-[#C9A227]/30 shadow-2xl space-y-8">
            <h2 className="font-serif text-3xl font-bold text-[#C9A227]">
              When People Seek Dua & Wazifa Guidance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">During Separation & Heartbreak</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Seeking spiritual comfort, patience, and prayers to heal broken relationships.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">Family Conflicts & Friction</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Invoking divine blessings to bring harmony, mutual forgiveness, and peace into the home.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">Personal Stress & Trials</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Seeking inner strength, spiritual protection, and clarity during uncertain life choices.
                </p>
              </div>
            </div>
          </div>

          <FAQ limit={4} />

          <CTASection whatsappMessage={service.whatsappMsg} />
        </div>
      </section>
    </>
  );
}

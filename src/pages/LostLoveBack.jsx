import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Moon, ShieldCheck, CheckCircle2, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';
import OptimizedImage from '../components/OptimizedImage';
import { BRAND, SERVICES_LIST } from '../data/siteData';

export default function LostLoveBack() {
  const service = SERVICES_LIST.find(s => s.slug === "lost-love-back") || SERVICES_LIST[0];
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <>
      <SEOHead
        title="Lost Love Back Guidance | Mohammed Gulab Hussain"
        description="Personalized astrological and spiritual guidance for individuals experiencing separation, breakup, or uncertainty in love."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-20 overflow-hidden">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Love & Relationship Guidance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Guidance for a Lost Relationship
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            When a relationship changes or comes to an end, uncertainty can be difficult. Receive personalized astrological and spiritual guidance based on your individual situation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation?service=lost-love-back"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-bold text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#087F5B] hover:bg-[#064E3B] text-white font-semibold text-sm uppercase tracking-wider transition-all border border-[#C9A227]/30 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* UNDERSTANDING YOUR SITUATION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#C9A227]/40 shadow-2xl bg-[#022C22]">
                <OptimizedImage
                  src={service.image}
                  alt="Lost Love Back Guidance"
                  className="w-full h-[450px] object-cover"
                  width={400}
                  height={450}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Compassionate Guidance"
                title="Understanding Your Relationship Situation"
                centered={false}
              />

              <div className="space-y-4 text-emerald-950/80 font-light text-base leading-relaxed">
                <p>
                  Relationship breakdowns and emotional distance often stem from complex factors: planetary transit periods (Venus, Rahu/Ketu aspects), accumulated misunderstandings, third-party influences, or lack of emotional alignment.
                </p>
                <p>
                  Mohammed Gulab Hussain provides a calm, confidential space to examine both the astrological horoscope dynamics and the spiritual aspects surrounding your separation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-emerald-900/10 shadow-sm text-sm text-[#022C22] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* WHAT THE CONSULTATION COVERS & SPIRITUAL SUPPORT */}
          <div className="bg-[#022C22] text-white rounded-3xl p-10 lg:p-14 border border-[#C9A227]/30 shadow-2xl space-y-8">
            <h2 className="font-serif text-3xl font-bold text-[#C9A227]">
              What the Consultation Covers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">1. Horoscopic Analysis</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Evaluating 7th House, Venus placement, and current planetary Mahadasha cycles affecting emotional bonding.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">2. Spiritual Supplication</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Guidance on tailored Dua and Wazifa practices aimed at cultivating forgiveness, peace, and mutual love.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#064E3B]/80 border border-[#C9A227]/20 space-y-2">
                <h3 className="font-serif text-xl font-bold text-white">3. Personal Resolution</h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
                  Clear, pragmatic advice on communication steps and handling personal relationship hesitation.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Service FAQ"
              title="Frequently Asked Questions on Lost Love Guidance"
            />
            <FAQ limit={4} />
          </div>

          <CTASection whatsappMessage={service.whatsappMsg} />

        </div>
      </section>
    </>
  );
}

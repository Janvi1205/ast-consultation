import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Moon, ShieldCheck, Calendar, MessageCircle, Clock, Video } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';
import { BRAND } from '../data/siteData';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const selectedServiceSlug = searchParams.get('service') || '';

  return (
    <>
      <SEOHead
        title="Book Astrology Consultation | Mohammed Gulab Hussain"
        description="Book a private 1-on-1 online consultation with Muslim Astrologer Mohammed Gulab Hussain for relationship, marriage, family, financial, or spiritual guidance."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-24 overflow-hidden rounded-b-xl sm:rounded-b-2xl lg:rounded-b-[2rem] shadow-lg">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Private Session Booking</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            Book Your Private Consultation
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Share a few details about yourself and your concern. Mohammed Gulab Hussain's team will use this information to review your consultation request and schedule your session.
          </p>

          <div className="pt-4 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section className="py-24 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* TOP INFO BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-md flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#C9A227] shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-lg text-[#022C22]">100% Confidential</h4>
                <p className="text-xs text-emerald-950/70 font-light">Your personal identity & birth data remain strictly private.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-md flex items-start gap-4">
              <Video className="w-8 h-8 text-[#087F5B] shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-lg text-[#022C22]">Online Worldwide</h4>
                <p className="text-xs text-emerald-950/70 font-light">Consult via WhatsApp voice/video call or messaging.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-md flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#C9A227] shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-lg text-[#022C22]">Fast Scheduling</h4>
                <p className="text-xs text-emerald-950/70 font-light">Timely response to confirm your preferred session time.</p>
              </div>
            </div>
          </div>

          {/* FORM COMPONENT */}
          <BookingForm defaultServiceSlug={selectedServiceSlug} />

        </div>
      </section>
    </>
  );
}

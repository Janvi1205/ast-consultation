import React from 'react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import IslamicPattern from '../components/IslamicPattern';
import TrustRow from '../components/TrustRow';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Book Your Consultation | Mohammed Gulab Hussain"
        description="Book your private astrological and spiritual guidance consultation with Muslim Astrologer Mohammed Gulab Hussain via WhatsApp (+91 7357447686) or direct form."
      />

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#022C22] via-[#064E3B] to-[#022C22] text-[#FAF9F5] pt-36 pb-16 overflow-hidden">
        <IslamicPattern opacity="opacity-[0.05]" variant="stars" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Book Your <span className="bg-gradient-gold-text">Consultation</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-xl mx-auto leading-relaxed">
            Share your details and we'll reach out personally to schedule your private session.
          </p>

          <div className="pt-2 flex justify-center">
            <TrustRow />
          </div>
        </div>
      </section>

      {/* CENTERED DARK THEME FORM SECTION */}
      <section className="py-20 bg-[#FAF9F5] relative">
        <IslamicPattern opacity="opacity-[0.03]" variant="lattice" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BookingForm />
        </div>
      </section>
    </>
  );
}

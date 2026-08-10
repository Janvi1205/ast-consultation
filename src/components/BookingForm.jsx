import React, { useState } from 'react';
import { Shield, Moon } from 'lucide-react';
import { BRAND, SERVICES_LIST } from '../data/siteData';
import IslamicPattern from './IslamicPattern';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingForm({ defaultServiceSlug = "" }) {
  const defaultService = SERVICES_LIST.find(s => s.slug === defaultServiceSlug)?.title || SERVICES_LIST[0].title;

  const [fullName, setFullName] = useState('');
  const [service, setService] = useState(defaultService);
  const [concern, setConcern] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your name');
      return;
    }

    const msg = `Hello Mohammed Gulab Hussain, I would like to book a consultation.\n\n` +
      `*Name:* ${fullName}\n` +
      `*Service:* ${service}\n` +
      `*Concern:* ${concern || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative bg-[#022C22] rounded-3xl p-8 sm:p-12 border border-emerald-500/20 shadow-2xl overflow-hidden text-white">
      {/* Islamic Background Lattice */}
      <IslamicPattern opacity="opacity-[0.04]" variant="stars" />

      {/* Atmospheric Soft Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#087F5B]/15 rounded-full blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        
        {/* HEADER BADGE & TITLE INSIDE CARD */}
        <div className="text-center space-y-3 pb-3 border-b border-emerald-900/80">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064E3B] border border-emerald-400/30 text-emerald-200 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <Moon className="w-3.5 h-3.5 fill-current" />
            <span>PRIVATE & CONFIDENTIAL GUIDANCE</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
            Schedule Your Consultation
          </h3>

          <p className="text-xs sm:text-sm text-emerald-100/80 font-light max-w-lg mx-auto">
            Speak privately about your situation and discover a personalized path forward.
          </p>
        </div>

        {/* 2-COLUMN NAME & SERVICE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* YOUR NAME */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-100/90 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your name"
              className={`w-full px-4 py-3.5 rounded-xl border ${
                error ? 'border-red-500 bg-red-950/40' : 'border-emerald-700/40 focus:border-[#087F5B]'
              } bg-[#011F18] text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-[#087F5B]/30 transition-all`}
            />
            {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
          </div>

          {/* SELECT SERVICE */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-100/90 mb-2">
              Select Service *
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-emerald-700/40 bg-[#011F18] text-sm text-white focus:outline-none focus:border-[#087F5B] focus:ring-2 focus:ring-[#087F5B]/30 font-medium transition-all"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.title} className="bg-[#022C22] text-white py-2">
                  {srv.title}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* CONCERN DESCRIPTION */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-100/90 mb-2">
            Describe your concern or question...
          </label>
          <textarea
            rows={4}
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            placeholder="Briefly share what guidance you seek..."
            className="w-full p-4 rounded-xl border border-emerald-700/40 bg-[#011F18] text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-[#087F5B] focus:ring-2 focus:ring-[#087F5B]/30 transition-all"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON (VIBRANT EMERALD PILL BUTTON) */}
        <div className="space-y-4 pt-2 text-center">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl border border-emerald-400/30 transform hover:scale-[1.01]"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>Book A Consultation</span>
          </button>

          <p className="text-xs text-emerald-200/60 font-light flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#087F5B]" />
            <span>Strictly Private • Personalized Guidance • Online Sessions Available</span>
          </p>
        </div>

      </form>
    </div>
  );
}

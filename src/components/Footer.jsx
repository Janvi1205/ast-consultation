import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Shield } from 'lucide-react';
import { BRAND, SERVICES_LIST, GENERAL_DISCLAIMER } from '../data/siteData';
import IslamicPattern from './IslamicPattern';

export default function Footer() {
  return (
    <footer className="relative bg-[#022C22] text-[#FAF9F5] pt-16 pb-8 border-t border-[#C9A227]/30 overflow-hidden">
      <IslamicPattern opacity="opacity-[0.03]" variant="stars" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* MAIN 4-COLUMN GRID (EXACT REFERENCE LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* COLUMN 1: BRAND LOGO & TAGLINE */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A227] bg-[#064E3B] flex items-center justify-center text-[#C9A227] shadow-inner">
                <Moon className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-[#FAF9F5]">
                  MOHAMMED GULAB HUSSAIN
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
                  Muslim Astrologer & Spiritual Consultant
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 font-light leading-relaxed max-w-sm">
              Personalized astrological and spiritual guidance crafted with sincerity, tradition, and privacy.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#064E3B]/60 border border-[#C9A227]/30 text-[11px] text-[#DCEFE8]">
              <Shield className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>100% Confidential Consultations</span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#C9A227] tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-emerald-100/90">
              <li>
                <Link to="/" className="hover:text-[#C9A227] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C9A227] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C9A227] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="hover:text-[#C9A227] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A227] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#C9A227] tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-light text-emerald-100/90">
              {SERVICES_LIST.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link to={srv.href} className="hover:text-[#C9A227] transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#C9A227] tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-emerald-100/90 font-light">
              <p>
                <strong className="text-white font-medium">WhatsApp / Call:</strong>{' '}
                <a href={`tel:${BRAND.phone}`} className="hover:text-[#C9A227] transition-colors">
                  {BRAND.phone}
                </a>
              </p>

              <p>
                <strong className="text-white font-medium">Consultation:</strong> Online Consultations Worldwide
              </p>
            </div>
          </div>

        </div>

        {/* DISCLAIMER SUBTEXT */}
        <div className="text-center">
          <p className="text-[11px] text-emerald-100/60 font-light leading-relaxed">
            <strong className="text-[#C9A227] font-medium">Disclaimer:</strong> {GENERAL_DISCLAIMER}
          </p>
        </div>

        {/* BOTTOM COPYRIGHT ROW (EXACT REFERENCE LAYOUT) */}
        <div className="pt-4 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-emerald-100/60 font-light">
          <p>© 2026 Mohammed Gulab Hussain. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#C9A227]">
            <span>Crafted with sacred intentions ✦</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

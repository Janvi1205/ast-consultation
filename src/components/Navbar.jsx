import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles, Moon } from 'lucide-react';
import { BRAND, NAVIGATION_LINKS } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#022C22]/95 backdrop-blur-md border-b border-[#C9A227]/20 py-3 shadow-xl text-white'
          : 'bg-gradient-to-b from-[#022C22]/80 via-[#022C22]/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C9A227]/60 flex items-center justify-center bg-[#064E3B] text-[#C9A227] shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Moon className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wide text-[#FAF9F5] group-hover:text-[#C9A227] transition-colors">
                MOHAMMED GULAB HUSSAIN
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#C9A227] uppercase font-sans font-medium">
                Muslim Astrologer & Spiritual Consultant
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-xs uppercase tracking-widest font-sans font-semibold transition-colors duration-300 py-1 ${
                    isActive ? 'text-[#C9A227]' : 'text-emerald-50/90 hover:text-[#C9A227]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A227] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/book-consultation"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-semibold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-emerald-100 hover:text-[#C9A227] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#C9A227]" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#022C22]/98 backdrop-blur-xl border-b border-[#C9A227]/30 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="px-6 pt-6 pb-8 space-y-4 max-h-[80vh] overflow-y-auto">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-base font-serif tracking-wider text-emerald-100 hover:text-[#C9A227] py-2 border-b border-emerald-900/60"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 space-y-3">
              <Link
                to="/book-consultation"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C9A227] to-[#B89435] text-[#022C22] font-semibold text-sm uppercase tracking-wider shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.defaultWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#087F5B] text-[#DCEFE8] font-medium text-sm tracking-wider uppercase bg-[#087F5B]/30"
              >
                <span>WhatsApp Instant Consultation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

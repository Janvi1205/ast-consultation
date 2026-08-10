import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/siteData';

export default function FAQ({ limit, className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const displayFaqs = limit ? FAQS_LIST.slice(0, limit) : FAQS_LIST;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 max-w-4xl mx-auto ${className}`}>
      {displayFaqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#C9A227]/60 shadow-md'
                : 'bg-white/80 hover:bg-white border-emerald-900/10 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold transition-colors ${
                  isOpen ? 'bg-[#064E3B] text-[#C9A227]' : 'bg-[#E8F3EE] text-[#064E3B]'
                }`}>
                  Q{idx + 1}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#022C22]">
                  {faq.q}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#087F5B] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#C9A227]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-emerald-50 animate-in fade-in duration-300">
                <p className="text-emerald-950/80 font-light text-base leading-relaxed pl-11">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

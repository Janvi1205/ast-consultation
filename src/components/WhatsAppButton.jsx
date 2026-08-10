import React from 'react';
import { BRAND } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton({ 
  message = BRAND.defaultWhatsAppMsg, 
  variant = "floating", 
  label = "Chat on WhatsApp", 
  className = "" 
}) {
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMsg}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mohammed Gulab Hussain on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${className}`}
      >
        <WhatsAppIcon className="w-8 h-8 text-white shrink-0" />
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-[#087F5B] text-[#064E3B] font-semibold text-sm tracking-wider uppercase hover:bg-[#087F5B] hover:text-white transition-all duration-300 shadow-sm ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0" />
        <span>{label}</span>
      </a>
    );
  }

  // Primary inline button
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#087F5B] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#064E3B] transition-all duration-300 shadow-md hover:shadow-lg border border-[#C9A227]/30 ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
      <span>{label}</span>
    </a>
  );
}

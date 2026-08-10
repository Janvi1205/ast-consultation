import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../data/siteData';
import WhatsAppIcon from './WhatsAppIcon';
import OptimizedImage from './OptimizedImage';

export default function ServiceCard({ service }) {
  const { title, href, category, shortDesc, image, whatsappMsg } = service;
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(whatsappMsg || BRAND.defaultWhatsAppMsg)}`;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-900/10 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between">
      
      {/* CARD IMAGE CONTAINER */}
      <div className="relative h-56 w-full overflow-hidden bg-[#022C22]">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          width={400}
          height={224}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#022C22]/20 to-transparent opacity-80" />
        

      </div>

      {/* CARD BODY */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#022C22] group-hover:text-[#087F5B] transition-colors leading-snug">
            {title}
          </h3>

          {/* Animated Gold Divider Line */}
          <div className="w-10 h-0.5 bg-[#C9A227] my-3 group-hover:w-20 transition-all duration-300 rounded-full" />

          <p className="text-sm font-light text-emerald-950/80 leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* CARD FOOTER BUTTONS */}
        <div className="pt-4 border-t border-emerald-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#064E3B] hover:text-[#C9A227] transition-colors py-2"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#087F5B]/10 hover:bg-[#087F5B] text-[#087F5B] hover:text-white font-medium text-xs tracking-wider transition-all duration-300 border border-[#087F5B]/30"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

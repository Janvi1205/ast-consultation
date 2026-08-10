import React from 'react';
import { Star, Quote, Shield } from 'lucide-react';

export default function TestimonialCard({ item }) {
  const { name, service, location, rating = 5, quote } = item;

  return (
    <div className="relative bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C9A227]/20 pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-[#C9A227]">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote Content */}
        <p className="text-emerald-950/80 font-light text-base italic leading-relaxed pt-2">
          "{quote}"
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-emerald-100 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#022C22]">{name}</h4>
          <p className="text-xs text-[#087F5B] font-medium">{service}</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-emerald-900/60 font-light">
          <Shield className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

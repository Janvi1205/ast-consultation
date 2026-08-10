import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  theme = "dark" // dark or light
}) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${
          theme === "light" ? 'text-[#C9A227]' : 'text-[#C9A227]'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      )}

      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          theme === "light" ? 'text-[#FAF9F5]' : 'text-[#022C22]'
        }`}>
          {title}
        </h2>
      )}

      {/* Decorative Gold Accent Line */}
      <div className={`flex items-center gap-3 py-1 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A227]"></div>
        <div className="w-2 h-2 rotate-45 bg-[#C9A227]"></div>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A227]"></div>
      </div>

      {subtitle && (
        <p className={`text-base sm:text-lg font-light leading-relaxed ${
          theme === "light" ? 'text-emerald-100/90' : 'text-emerald-950/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

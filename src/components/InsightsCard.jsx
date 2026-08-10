import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function InsightsCard({ article }) {
  const { title, category, date, summary, readTime } = article;

  return (
    <div className="bg-white rounded-2xl p-6 border border-emerald-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-emerald-800/70">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E8F3EE] text-[#064E3B] font-semibold uppercase tracking-wider text-[10px]">
            {category}
          </span>
          <span className="flex items-center gap-1 font-light">
            <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
            {readTime}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-[#022C22] group-hover:text-[#087F5B] transition-colors leading-snug pt-2">
          {title}
        </h3>

        <p className="text-sm font-light text-emerald-950/80 leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-emerald-50 flex items-center justify-between text-xs font-semibold text-[#064E3B] group-hover:text-[#C9A227] transition-colors">
        <span>Read Insight Article</span>
        <Sparkles className="w-4 h-4" />
      </div>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, UserCheck, Video } from 'lucide-react';

export default function TrustRow({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-6 text-xs sm:text-sm text-emerald-100/90 font-medium tracking-wider uppercase ${className}`}>
      <div className="flex items-center gap-2.5 bg-[#064E3B]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C9A227]/30 shadow-sm">
        <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
        <span>Private & Confidential</span>
      </div>

      <div className="flex items-center gap-2.5 bg-[#064E3B]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C9A227]/30 shadow-sm">
        <UserCheck className="w-4 h-4 text-[#C9A227]" />
        <span>Personalized Guidance</span>
      </div>

      <div className="flex items-center gap-2.5 bg-[#064E3B]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C9A227]/30 shadow-sm">
        <Video className="w-4 h-4 text-[#C9A227]" />
        <span>Online Consultations</span>
      </div>
    </div>
  );
}

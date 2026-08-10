import React from 'react';

/**
 * Reusable Islamic Geometric Pattern overlay / SVG background
 */
export default function IslamicPattern({ opacity = "opacity-[0.04]", className = "", variant = "lattice" }) {
  if (variant === "stars") {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        <svg className={`w-full h-full ${opacity} text-[#C9A227]`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <pattern id="islamicStars" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L48 24 L72 16 L56 36 L80 40 L56 44 L72 64 L48 56 L40 80 L32 56 L8 64 L24 44 L0 40 L24 36 L8 16 L32 24 Z" fill="currentColor" opacity="0.4"/>
            <circle cx="40" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <circle cx="80" cy="0" r="4" fill="currentColor" />
            <circle cx="0" cy="80" r="4" fill="currentColor" />
            <circle cx="80" cy="80" r="4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamicStars)" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className={`w-full h-full ${opacity} text-[#C9A227]`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
        <pattern id="islamicLattice" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0 L60 30 L30 60 L0 30 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M30 15 L45 30 L30 45 L15 30 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <line x1="0" y1="0" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="60" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#islamicLattice)" />
      </svg>
    </div>
  );
}

import React from 'react';

/**
 * Celestial Astrolabe / Zodiac Wheel Background Overlay
 * Renders a fine-line celestial star map ring that sits behind the portrait
 */
export default function CelestialWheel({ className = "" }) {
  return (
    <svg
      className={`w-full h-full text-[#C9A227] opacity-25 pointer-events-none ${className}`}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Fine Circle */}
      <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="400" cy="400" r="360" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="400" cy="400" r="320" stroke="currentColor" strokeWidth="0.75" />

      {/* Inner Geometric Star Lattice */}
      <polygon points="400,80 476,324 720,400 476,476 400,720 324,476 80,400 324,324" stroke="currentColor" strokeWidth="1" />
      <polygon points="400,120 598,198 680,400 598,602 400,680 202,602 120,400 202,198" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Orbiting Celestial Spheres */}
      <circle cx="400" cy="400" r="240" stroke="currentColor" strokeWidth="1" />
      <circle cx="400" cy="400" r="160" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="400" cy="400" r="80" stroke="currentColor" strokeWidth="1" />

      {/* Radiating Ray Lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 400 + 80 * Math.cos(rad);
        const y1 = 400 + 80 * Math.sin(rad);
        const x2 = 400 + 360 * Math.cos(rad);
        const y2 = 400 + 360 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray={i % 2 === 0 ? "none" : "2 2"}
          />
        );
      })}

      {/* Star Nodes */}
      <circle cx="400" cy="40" r="4" fill="currentColor" />
      <circle cx="760" cy="400" r="4" fill="currentColor" />
      <circle cx="400" cy="760" r="4" fill="currentColor" />
      <circle cx="40" cy="400" r="4" fill="currentColor" />
      <circle cx="654" cy="146" r="3" fill="currentColor" />
      <circle cx="654" cy="654" r="3" fill="currentColor" />
      <circle cx="146" cy="654" r="3" fill="currentColor" />
      <circle cx="146" cy="146" r="3" fill="currentColor" />
    </svg>
  );
}

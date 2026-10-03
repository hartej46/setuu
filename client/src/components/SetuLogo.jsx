import React from 'react';

export default function SetuLogo({
  showText = true,
  className = 'h-10 w-auto',
  iconOnly = false,
}) {
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 520 280"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Teal Wing & Tower */}
        <path
          d="M 235 45 L 235 270 L 205 270 L 205 115 L 140 175 C 80 195 30 205 5 210 L 5 180 C 45 165 110 135 195 72 Z"
          fill="#20A2B1"
        />
        <path
          d="M 205 115 L 235 85 L 235 270 L 205 270 Z"
          fill="#178C9B"
        />

        {/* Right Navy Wing & Tower */}
        <path
          d="M 285 45 L 285 270 L 315 270 L 315 115 L 380 175 C 440 195 490 205 515 210 L 515 180 C 475 165 410 135 325 72 Z"
          fill="#173F5F"
        />
        <path
          d="M 315 115 L 285 85 L 285 270 L 315 270 Z"
          fill="#11324E"
        />

        {/* Bottom Arch - Golden/Amber Left Half */}
        <path
          d="M 30 270 C 65 195 145 160 260 160 L 260 185 C 165 185 95 215 70 270 Z"
          fill="#E6972B"
        />

        {/* Bottom Arch - Teal Right Half */}
        <path
          d="M 260 160 C 375 160 455 195 490 270 L 450 270 C 425 215 355 185 260 185 Z"
          fill="#188C9C"
        />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bridge Emblem */}
      <svg
        viewBox="0 0 520 280"
        className="h-10 w-auto shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 235 45 L 235 270 L 205 270 L 205 115 L 140 175 C 80 195 30 205 5 210 L 5 180 C 45 165 110 135 195 72 Z"
          fill="#20A2B1"
        />
        <path
          d="M 205 115 L 235 85 L 235 270 L 205 270 Z"
          fill="#178C9B"
        />

        <path
          d="M 285 45 L 285 270 L 315 270 L 315 115 L 380 175 C 440 195 490 205 515 210 L 515 180 C 475 165 410 135 325 72 Z"
          fill="#173F5F"
        />
        <path
          d="M 315 115 L 285 85 L 285 270 L 315 270 Z"
          fill="#11324E"
        />

        <path
          d="M 30 270 C 65 195 145 160 260 160 L 260 185 C 165 185 95 215 70 270 Z"
          fill="#E6972B"
        />

        <path
          d="M 260 160 C 375 160 455 195 490 270 L 450 270 C 425 215 355 185 260 185 Z"
          fill="#188C9C"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className="font-serif tracking-widest text-2xl font-bold leading-none text-[#173F5F]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            SETU
          </span>
          <span className="text-[10px] tracking-widest text-[#20A2B1] uppercase font-semibold mt-0.5">
            Together, Let's Build
          </span>
          <span className="text-[10px] tracking-widest text-[#20A2B1] uppercase font-semibold mt-0.5">
            Bridges That Last
          </span>
        </div>
      )}
    </div>
  );
}

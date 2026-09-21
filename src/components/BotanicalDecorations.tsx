import React from 'react';
import logoSvg from '../assets/ferasat-ayesha-logo.svg';

/**
 * Official Ferasat Ayesha Logo (exact ferasat-ayesha-logo.svg)
 * Used across the entire site (header, mobile drawer, footer).
 */
export const LotusLogo: React.FC<{
  className?: string;
  showCircle?: boolean;
}> = ({ className = 'w-10 h-10' }) => {
  return (
    <img
      src={logoSvg}
      alt="Ferasat Ayesha Logo"
      className={`inline-block object-contain select-none shrink-0 ${className}`}
      width={48}
      height={48}
      loading="eager"
    />
  );
};

/**
 * Authentic Google "G" icon for reviews
 */
export const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google review verified">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.15Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
      />
    </svg>
  );
};

/**
 * Elegant soft lavender botanical branch line art for card corners
 */
export const BotanicalFlourish: React.FC<{
  className?: string;
  variant?: 'subtle' | 'corner' | 'branch';
}> = ({ className = 'w-16 h-16', variant = 'corner' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M10 90C30 75 55 50 85 15"
        stroke="#9587b5"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Leaf 1 */}
      <path
        d="M35 70C35 70 20 60 22 48C28 48 35 58 35 70Z"
        fill="#b8abd4"
        fillOpacity="0.45"
        stroke="#8b7ca6"
        strokeWidth="0.8"
      />
      {/* Leaf 2 */}
      <path
        d="M50 55C50 55 65 52 68 40C62 38 52 46 50 55Z"
        fill="#c4b8dd"
        fillOpacity="0.5"
        stroke="#8b7ca6"
        strokeWidth="0.8"
      />
      {/* Leaf 3 */}
      <path
        d="M65 38C65 38 56 22 46 20C44 28 55 35 65 38Z"
        fill="#b4a6ce"
        fillOpacity="0.45"
        stroke="#8b7ca6"
        strokeWidth="0.8"
      />
      {/* Leaf 4 */}
      <path
        d="M75 25C75 25 88 18 86 8C78 10 74 18 75 25Z"
        fill="#a797c4"
        fillOpacity="0.5"
        stroke="#8b7ca6"
        strokeWidth="0.8"
      />
      {/* Small bud */}
      <circle cx="87" cy="13" r="2.5" fill="#9f90c0" fillOpacity="0.7" />
    </svg>
  );
};

/**
 * Botanical Branch for Banner & Footer
 */
export const BotanicalBranch: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = 'w-24 h-24',
  flipped = false,
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M15 110C45 90 75 60 105 10"
        stroke="#8c7ea9"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Leaf cluster 1 */}
      <path
        d="M38 90C28 80 25 68 35 65C42 70 42 82 38 90Z"
        fill="#cfc4e5"
        fillOpacity="0.4"
        stroke="#8c7ea9"
        strokeWidth="0.75"
      />
      {/* Leaf cluster 2 */}
      <path
        d="M58 72C68 62 78 65 80 75C70 80 62 76 58 72Z"
        fill="#c4b6dd"
        fillOpacity="0.45"
        stroke="#8c7ea9"
        strokeWidth="0.75"
      />
      {/* Leaf cluster 3 */}
      <path
        d="M78 50C70 38 65 28 75 24C83 30 82 42 78 50Z"
        fill="#baacd4"
        fillOpacity="0.45"
        stroke="#8c7ea9"
        strokeWidth="0.75"
      />
      {/* Leaf cluster 4 */}
      <path
        d="M92 34C102 24 110 28 110 38C100 42 94 38 92 34Z"
        fill="#a797c4"
        fillOpacity="0.5"
        stroke="#8c7ea9"
        strokeWidth="0.75"
      />
    </svg>
  );
};

/**
 * Botanical Leaf Branch for the Hero Section bottom-left corner
 * Faithfully matches the line-art botanical drawing in the reference image:
 * slender arching stem, lanceolate leaves, central veins, and fine diagonal pinnate side veins.
 */
export const BotanicalHeroCorner: React.FC<{ className?: string }> = ({
  className = 'w-24 sm:w-28 md:w-32 h-64 sm:h-80 text-[#9b8cbd]',
}) => {
  return (
    <svg
      viewBox="0 0 100 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main Arching Stem */}
      <path
        d="M-5 315 C 8 275, 14 220, 22 155 C 25 125, 24 95, 21 68"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* --- LEAF 1 (Bottom right, pointing outward-down) --- */}
      <path
        d="M6 295 C 22 285, 42 285, 54 298 C 42 308, 20 312, 4 305"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 1 Center Vein */}
      <path
        d="M5 299 C 24 294, 40 295, 53 298"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 1 Side Veins */}
      <path
        d="M20 295 L 26 289 M 32 295 L 39 290 M 24 297 L 29 303 M 36 296 L 43 301"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* --- LEAF 2 (Bottom left, pointing down-left towards edge) --- */}
      <path
        d="M4 278 C -4 286, -10 295, -6 308 C 2 302, 6 292, 5 282"
        stroke="currentColor"
        strokeWidth="1.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* --- LEAF 3 (Lower-mid right leaf, pointing up-right) --- */}
      <path
        d="M10 262 C 28 250, 48 248, 62 260 C 48 272, 26 274, 9 268"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 3 Center Vein */}
      <path
        d="M10 264 C 28 258, 46 257, 61 260"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 3 Side Veins */}
      <path
        d="M24 260 L 32 254 M 38 258 L 47 253 M 28 262 L 35 267 M 42 260 L 51 264"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* --- LEAF 4 (Mid-lower left leaf, pointing up-left) --- */}
      <path
        d="M13 228 C 4 218, -4 214, -8 226 C -4 234, 4 238, 12 236"
        stroke="currentColor"
        strokeWidth="1.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 232 C 4 226, -2 222, -7 225"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />

      {/* --- LEAF 5 (Prominent mid right leaf, pointing up-right) --- */}
      <path
        d="M16 215 C 36 195, 58 190, 72 205 C 56 220, 34 225, 14 220"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 5 Center Vein */}
      <path
        d="M15 217 C 35 206, 54 202, 71 205"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 5 Side Veins (pinnate pairs) */}
      <path
        d="M30 210 L 40 200 M 44 205 L 56 198 M 34 213 L 44 219 M 48 207 L 60 212"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* --- LEAF 6 (Upper-mid right leaf pointing diagonally up-right ~45 deg) --- */}
      <path
        d="M21 165 C 40 148, 60 144, 73 158 C 58 172, 38 176, 19 171"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 6 Center Vein */}
      <path
        d="M20 167 C 38 158, 56 154, 72 158"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 6 Side Veins (pinnate herringbone pattern as in user image) */}
      <path
        d="M32 163 L 42 153 M 46 157 L 57 150 M 36 166 L 45 171 M 50 160 L 61 164"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* --- LEAF 7 (Upper left leaf pointing up and slightly left) --- */}
      <path
        d="M22 145 C 12 120, 10 95, 20 72 C 26 95, 28 120, 23 140"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 7 Center Vein */}
      <path
        d="M22 142 C 18 120, 17 96, 20 73"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 7 Side Veins */}
      <path
        d="M20 125 L 14 115 M 19 108 L 14 98 M 20 120 L 25 110 M 19 102 L 23 93"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* --- LEAF 8 (Upper right lanceolate leaf below the top tip) --- */}
      <path
        d="M24 118 C 42 102, 60 98, 71 110 C 58 122, 40 126, 23 122"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 8 Center Vein */}
      <path
        d="M24 120 C 40 111, 57 107, 70 110"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 8 Side Veins */}
      <path
        d="M36 115 L 46 106 M 49 110 L 59 104 M 40 118 L 48 123 M 53 112 L 61 116"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* --- LEAF 9 (Top apical leaf pointing straight up with slight tilt) --- */}
      <path
        d="M21 70 C 16 48, 18 28, 26 12 C 30 30, 29 50, 22 66"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 9 Center Vein */}
      <path
        d="M21 68 C 21 50, 22 30, 26 13"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      {/* Leaf 9 Side Veins */}
      <path
        d="M22 52 L 18 44 M 23 38 L 20 30 M 23 48 L 27 40 M 24 34 L 27 26"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};

/**
 * Soft blurred foreground plant leaves for the Home page hero left edge
 * as seen in the reference image (bokeh depth-of-field effect)
 */
export const BotanicalForegroundLeaves: React.FC<{ className?: string }> = ({
  className = 'w-24 sm:w-32 lg:w-40 h-auto',
}) => {
  return (
    <svg
      viewBox="0 0 180 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter blur-[3px] sm:blur-[4px] select-none pointer-events-none`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="eucalyptusGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a634e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2e4231" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="eucalyptusGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#638067" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3d5440" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="eucalyptusGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#557359" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#283a2b" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* --- Middle Left Foliage Cluster (y: 200 - 360) --- */}
      {/* Branch stem */}
      <path
        d="M-30 290 C 10 280, 50 270, 95 285"
        stroke="#3c523f"
        strokeWidth="4"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />
      {/* Leaf 1 - mid left top */}
      <path
        d="M20 280 C 35 240, 75 235, 95 260 C 85 285, 45 295, 20 280 Z"
        fill="url(#eucalyptusGrad1)"
      />
      {/* Leaf 2 - mid left right tip */}
      <path
        d="M85 282 C 115 265, 145 275, 155 305 C 135 325, 95 315, 85 282 Z"
        fill="url(#eucalyptusGrad2)"
      />
      {/* Leaf 3 - mid left bottom droop */}
      <path
        d="M45 285 C 55 315, 85 335, 110 320 C 115 295, 80 280, 45 285 Z"
        fill="url(#eucalyptusGrad3)"
      />
      {/* Leaf 4 - inner small leaf */}
      <path
        d="M-5 288 C 5 265, 35 260, 45 280 C 35 298, 10 300, -5 288 Z"
        fill="url(#eucalyptusGrad1)"
        opacity="0.8"
      />

      {/* --- Lower Left Foliage Cluster (y: 420 - 580) --- */}
      {/* Branch stem rising from bottom edge */}
      <path
        d="M-20 600 C 15 540, 40 480, 70 440"
        stroke="#384d3b"
        strokeWidth="4"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      {/* Leaf 5 - bottom outer leaf */}
      <path
        d="M15 545 C 45 520, 85 530, 105 560 C 80 585, 40 575, 15 545 Z"
        fill="url(#eucalyptusGrad2)"
      />
      {/* Leaf 6 - bottom mid leaf */}
      <path
        d="M40 490 C 70 460, 110 475, 125 510 C 95 530, 55 515, 40 490 Z"
        fill="url(#eucalyptusGrad1)"
      />
      {/* Leaf 7 - top tip of bottom branch */}
      <path
        d="M65 445 C 90 415, 125 425, 135 455 C 110 475, 75 465, 65 445 Z"
        fill="url(#eucalyptusGrad3)"
      />
      {/* Leaf 8 - trailing low leaf */}
      <path
        d="M-10 575 C 10 550, 40 560, 50 585 C 30 605, 5 600, -10 575 Z"
        fill="url(#eucalyptusGrad2)"
        opacity="0.85"
      />
    </svg>
  );
};

/**
 * Dappled sunlight leaf shadow for "Take the first step" banner on the left
 */
export const BotanicalSunlightShadow: React.FC<{ className?: string }> = ({
  className = 'w-48 sm:w-64 md:w-80 h-auto',
}) => {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter blur-[3.5px] select-none pointer-events-none`}
      aria-hidden="true"
    >
      {/* Soft main curved branch */}
      <path
        d="M-20 -10 C 40 40, 120 110, 240 170"
        stroke="#5a6256"
        strokeWidth="3.5"
        strokeOpacity="0.25"
        strokeLinecap="round"
      />
      {/* Sub branch 1 */}
      <path
        d="M60 55 C 100 80, 140 85, 175 75"
        stroke="#5a6256"
        strokeWidth="2.5"
        strokeOpacity="0.22"
        strokeLinecap="round"
      />
      {/* Sub branch 2 */}
      <path
        d="M140 120 C 170 160, 200 195, 230 215"
        stroke="#5a6256"
        strokeWidth="2"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />
      {/* Shadow leaf clusters */}
      {/* Cluster 1 - Top Left */}
      <path
        d="M20 15 C 35 -5, 55 5, 70 25 C 55 35, 35 30, 20 15Z"
        fill="#5a6256"
        fillOpacity="0.28"
      />
      <path
        d="M45 40 C 65 25, 90 35, 105 60 C 85 70, 60 60, 45 40Z"
        fill="#50584c"
        fillOpacity="0.3"
      />
      {/* Cluster 2 - Branch 1 */}
      <path
        d="M100 65 C 120 50, 145 60, 160 85 C 140 95, 115 85, 100 65Z"
        fill="#5a6256"
        fillOpacity="0.26"
      />
      <path
        d="M135 68 C 155 55, 180 62, 195 82 C 175 92, 150 85, 135 68Z"
        fill="#525a4e"
        fillOpacity="0.25"
      />
      {/* Cluster 3 - Mid stem */}
      <path
        d="M95 100 C 115 85, 138 95, 150 120 C 130 130, 110 120, 95 100Z"
        fill="#50584c"
        fillOpacity="0.32"
      />
      <path
        d="M130 115 C 150 98, 175 108, 188 132 C 168 142, 145 132, 130 115Z"
        fill="#5a6256"
        fillOpacity="0.28"
      />
      {/* Cluster 4 - Branch 2 */}
      <path
        d="M165 145 C 185 130, 210 140, 222 165 C 202 175, 180 165, 165 145Z"
        fill="#525a4e"
        fillOpacity="0.26"
      />
      <path
        d="M185 180 C 205 165, 230 172, 242 195 C 222 205, 200 198, 185 180Z"
        fill="#5a6256"
        fillOpacity="0.24"
      />
      {/* Cluster 5 - Tip */}
      <path
        d="M200 150 C 225 135, 252 145, 268 170 C 245 182, 220 172, 200 150Z"
        fill="#50584c"
        fillOpacity="0.27"
      />
      <path
        d="M235 165 C 260 152, 285 162, 298 185 C 275 195, 252 185, 235 165Z"
        fill="#5a6256"
        fillOpacity="0.22"
      />
    </svg>
  );
};

/**
 * Dappled sunlight leaf shadow growing upwards from bottom-left corner
 */
export const BotanicalSunlightShadowBottom: React.FC<{ className?: string }> = ({
  className = 'w-48 sm:w-64 md:w-80 h-auto',
}) => {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter blur-[3px] select-none pointer-events-none`}
      aria-hidden="true"
    >
      {/* Main stem growing upward and inward from bottom-left */}
      <path
        d="M-15 270 C 40 220, 110 150, 240 80"
        stroke="#5a6256"
        strokeWidth="3.5"
        strokeOpacity="0.26"
        strokeLinecap="round"
      />
      {/* Sub branch 1 */}
      <path
        d="M55 200 C 95 170, 135 165, 170 175"
        stroke="#5a6256"
        strokeWidth="2.5"
        strokeOpacity="0.22"
        strokeLinecap="round"
      />
      {/* Sub branch 2 */}
      <path
        d="M135 135 C 165 95, 195 65, 225 45"
        stroke="#5a6256"
        strokeWidth="2"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />
      {/* Leaf pairs */}
      <path
        d="M20 240 C 35 255, 55 245, 70 225 C 55 215, 35 220, 20 240Z"
        fill="#5a6256"
        fillOpacity="0.28"
      />
      <path
        d="M45 215 C 65 230, 90 220, 105 195 C 85 185, 60 195, 45 215Z"
        fill="#50584c"
        fillOpacity="0.3"
      />
      <path
        d="M100 190 C 120 205, 145 195, 160 170 C 140 160, 115 170, 100 190Z"
        fill="#5a6256"
        fillOpacity="0.26"
      />
      <path
        d="M135 185 C 155 198, 180 190, 195 170 C 175 160, 150 168, 135 185Z"
        fill="#525a4e"
        fillOpacity="0.25"
      />
      <path
        d="M95 155 C 115 170, 138 160, 150 135 C 130 125, 110 135, 95 155Z"
        fill="#50584c"
        fillOpacity="0.32"
      />
      <path
        d="M130 140 C 150 155, 175 145, 188 122 C 168 112, 145 122, 130 140Z"
        fill="#5a6256"
        fillOpacity="0.28"
      />
      <path
        d="M165 110 C 185 125, 210 115, 222 90 C 202 80, 180 90, 165 110Z"
        fill="#525a4e"
        fillOpacity="0.26"
      />
      <path
        d="M185 75 C 205 90, 230 82, 242 60 C 222 50, 200 58, 185 75Z"
        fill="#5a6256"
        fillOpacity="0.24"
      />
      <path
        d="M200 105 C 225 120, 252 110, 268 85 C 245 72, 220 82, 200 105Z"
        fill="#50584c"
        fillOpacity="0.27"
      />
      <path
        d="M235 90 C 260 102, 285 92, 298 70 C 275 60, 252 70, 235 90Z"
        fill="#5a6256"
        fillOpacity="0.22"
      />
    </svg>
  );
};

/**
 * Clean fine-line botanical branch illustration rising from bottom-right
 * as seen in the reference CTA banner
 */
export const BotanicalFineLineBranch: React.FC<{ className?: string }> = ({
  className = 'w-32 sm:w-40 md:w-52 h-auto text-[#9b8cbd]/70',
}) => {
  return (
    <svg
      viewBox="0 0 180 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none pointer-events-none`}
      aria-hidden="true"
    >
      {/* Main graceful curved stem */}
      <path
        d="M140 340 C 130 260, 105 160, 50 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 (bottom left) */}
      <path
        d="M125 280 C 85 270, 70 240, 75 220 C 100 230, 115 255, 125 280Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M125 280 C 105 255, 88 238, 75 220"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 2 (bottom right) */}
      <path
        d="M122 250 C 145 230, 165 235, 172 260 C 150 262, 135 255, 122 250Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M122 250 C 142 248, 158 252, 172 260"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 3 (mid left) */}
      <path
        d="M105 195 C 65 180, 50 150, 58 130 C 82 142, 95 170, 105 195Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M105 195 C 85 170, 70 150, 58 130"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 4 (mid right) */}
      <path
        d="M98 165 C 122 145, 145 150, 155 175 C 132 178, 115 172, 98 165Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M98 165 C 120 162, 138 168, 155 175"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 5 (upper left) */}
      <path
        d="M80 115 C 45 100, 35 75, 42 55 C 65 65, 75 90, 80 115Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M80 115 C 62 92, 50 75, 42 55"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Leaf 6 (upper right) */}
      <path
        d="M72 85 C 95 68, 115 72, 125 95 C 105 98, 88 92, 72 85Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M72 85 C 92 82, 110 88, 125 95"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Terminal tip leaf */}
      <path
        d="M50 30 C 45 10, 58 2, 68 5 C 65 20, 58 25, 50 30Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
};

/**
 * Delicate botanical leaf branch line art
 * Exact match to user's reference image:
 * - Slender central stem curving upwards
 * - Bottom-left pointed leaf with central vein
 * - Bottom-right horizontal pointed leaf with undulating contour
 * - Small young sprout leaf nestled right above bottom-right leaf
 * - Mid-left pointed leaf pointing up-left
 * - Mid-right pointed leaf pointing up-right
 * - Terminal top leaf pointing towards upper-right
 */
export const BotanicalLeafBranch: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = 'w-44 h-auto',
  flipped = false,
}) => (
  <svg
    viewBox="0 0 210 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? '-scale-x-100' : ''}`}
    aria-hidden="true"
  >
    {/* Main slender curving stem */}
    <path
      d="M 68 280 C 76 245, 92 212, 98 174 C 104 138, 114 96, 130 46"
      stroke="#8877a3"
      strokeWidth="1.25"
      strokeLinecap="round"
      opacity="0.85"
    />

    {/* 1. Leaf 1 (Bottom Left) */}
    <path
      d="M 86 220 C 62 206, 32 184, 38 132 C 54 164, 78 192, 86 220 Z"
      stroke="#85749f"
      strokeWidth="1.1"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 86 220 C 66 186, 48 154, 38 132"
      stroke="#85749f"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 2. Leaf 2 (Bottom Right - undulating horizontal leaf) */}
    <path
      d="M 97 206 C 120 190, 146 178, 172 178 C 154 206, 126 220, 97 206 Z"
      stroke="#85749f"
      strokeWidth="1.1"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 97 206 C 124 196, 148 186, 172 178"
      stroke="#85749f"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 3. Leaf 3 (Small Baby Leaf/Sprout directly above bottom-right leaf) */}
    <path
      d="M 102 174 C 110 162, 125 156, 136 161 C 128 172, 114 178, 102 174 Z"
      stroke="#85749f"
      strokeWidth="1.0"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 102 174 C 114 167, 126 163, 136 161"
      stroke="#85749f"
      strokeWidth="0.75"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 4. Leaf 4 (Middle Left) */}
    <path
      d="M 105 152 C 90 128, 76 102, 82 76 C 97 94, 106 125, 105 152 Z"
      stroke="#85749f"
      strokeWidth="1.1"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 105 152 C 96 122, 88 96, 82 76"
      stroke="#85749f"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 5. Leaf 5 (Middle Right) */}
    <path
      d="M 112 142 C 132 118, 164 104, 192 108 C 172 136, 140 146, 112 142 Z"
      stroke="#85749f"
      strokeWidth="1.1"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 112 142 C 140 127, 168 116, 192 108"
      stroke="#85749f"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* 6. Leaf 6 (Terminal Top Apex Leaf) */}
    <path
      d="M 128 98 C 123 70, 142 46, 164 34 C 170 58, 154 82, 128 98 Z"
      stroke="#85749f"
      strokeWidth="1.1"
      strokeLinejoin="round"
      fill="#dcd2ed"
      fillOpacity="0.28"
    />
    <path
      d="M 128 98 C 140 74, 152 50, 164 34"
      stroke="#85749f"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);

/**
 * BotanicalLavenderBokeh:
 * Soft, dreamy out-of-focus lavender floral sprigs matching the left edge
 * of the CTA banner from the reference image.
 */
export const BotanicalLavenderBokeh: React.FC<{ className?: string }> = ({
  className = 'w-48 sm:w-64 md:w-80 h-full',
}) => (
  <svg
    viewBox="0 0 240 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} pointer-events-none select-none`}
    aria-hidden="true"
  >
    <defs>
      <filter id="bokehSoftBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.8" />
      </filter>
      <filter id="bokehDeepBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3.2" />
      </filter>
    </defs>

    {/* Background deeply blurred sprigs */}
    <g filter="url(#bokehDeepBlur)" opacity="0.5">
      <path d="M-20 220 C 10 170, 35 120, 60 70" stroke="#907fa8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-10 230 C 25 180, 70 140, 105 90" stroke="#907fa8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="55" cy="75" r="7" fill="#8f7fa9" />
      <circle cx="68" cy="65" r="8.5" fill="#a493be" />
      <circle cx="100" cy="95" r="7" fill="#9e8eb7" />
      <circle cx="112" cy="85" r="9" fill="#b3a3cc" />
      <circle cx="35" cy="130" r="8" fill="#8e7da6" />
    </g>

    {/* Midground gently blurred botanical sprigs & flowers */}
    <g filter="url(#bokehSoftBlur)" opacity="0.75">
      {/* Main arching stems */}
      <path d="M-30 220 C 5 160, 45 110, 85 50" stroke="#84719d" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M15 140 C 35 125, 60 115, 80 100" stroke="#84719d" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M40 95 C 60 80, 85 75, 110 65" stroke="#84719d" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M-15 210 C 25 165, 75 125, 125 80" stroke="#84719d" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M55 135 C 80 120, 110 115, 135 105" stroke="#84719d" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M-5 240 C 40 190, 95 155, 150 115" stroke="#84719d" strokeWidth="1.4" strokeLinecap="round" />

      {/* Blossom buds & small flower clusters */}
      <circle cx="80" cy="52" r="4.5" fill="#7a6794" />
      <circle cx="88" cy="46" r="5" fill="#9381ad" />
      <circle cx="92" cy="54" r="4" fill="#84719d" />
      <circle cx="82" cy="42" r="4.5" fill="#aa99c4" />
      <circle cx="75" cy="48" r="3.5" fill="#b8a9d1" />

      <circle cx="108" cy="66" r="4.5" fill="#84719d" />
      <circle cx="116" cy="62" r="5.2" fill="#9c8bbe" />
      <circle cx="122" cy="70" r="4" fill="#7a6794" />
      <circle cx="112" cy="56" r="3.8" fill="#b09fc7" />

      <circle cx="78" cy="102" r="4.2" fill="#8f7ea9" />
      <circle cx="86" cy="98" r="4.8" fill="#a493be" />
      <circle cx="72" cy="95" r="3.5" fill="#7a6794" />

      <circle cx="124" cy="82" r="4.5" fill="#84719d" />
      <circle cx="132" cy="78" r="5" fill="#9785b3" />
      <circle cx="138" cy="86" r="4.2" fill="#ab9bc4" />

      <circle cx="134" cy="106" r="4" fill="#8a77a4" />
      <circle cx="142" cy="102" r="4.6" fill="#9f8ec0" />
      <circle cx="148" cy="110" r="3.6" fill="#7e6b99" />

      <circle cx="148" cy="116" r="4.2" fill="#8c7aa7" />
      <circle cx="156" cy="112" r="4.8" fill="#a291c2" />
      <circle cx="162" cy="120" r="3.8" fill="#b5a5d0" />

      <circle cx="48" cy="155" r="4.5" fill="#9b8bbb" />
      <circle cx="38" cy="165" r="5" fill="#84729f" />
      <circle cx="28" cy="175" r="4" fill="#a898c6" />
      <circle cx="70" cy="170" r="4.2" fill="#917fae" />
      <circle cx="85" cy="155" r="4" fill="#816e9b" />
    </g>
  </svg>
);





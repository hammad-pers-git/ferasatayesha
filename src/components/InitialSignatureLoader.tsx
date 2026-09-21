import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InitialSignatureLoaderProps {
  onComplete?: () => void;
}

export const InitialSignatureLoader: React.FC<InitialSignatureLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPrefersReducedMotion, setIsPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPrefersReducedMotion(true);
      // Immediately complete for reduced-motion users
      const quickTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 300);
      return () => clearTimeout(quickTimer);
    }

    // Sequence runs:
    // 0.00s - 1.16s: Signature draws in continuous, fluid handwriting strokes without pen
    // 1.16s - 1.24s: Flourish & title complete
    // 1.25s: Fade out starts
    // 1.48s: Fade out completes, loader unmounts smoothly (< 1.5s total)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1240);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 1480);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="initial-signature-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#faf9fc] select-none"
          style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
          {/* Subtle warm ambient glow behind the signature */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center px-4 max-w-lg w-full">
            {/* SVG Signature Stage */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] h-[110px] sm:h-[125px] flex items-center justify-center">
              {isPrefersReducedMotion ? (
                // Reduced Motion Fallback: static signature display
                <div
                  id="static-signature-reduced"
                  className="font-script text-4xl sm:text-5xl text-[#39668d] tracking-wide -rotate-1 select-none"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Ferasat Ayesha
                </div>
              ) : (
                // Real-time Handwritten Stroke-by-Stroke Signature SVG (Smooth cursive flow, pen removed)
                <svg
                  viewBox="0 0 440 120"
                  className="w-full h-full overflow-visible"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Soft-edge feathering filter for organic, fluid ink reveal */}
                    <filter id="smooth-ink-feather" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.2" />
                    </filter>

                    {/* Smooth cursive handwriting reveal mask */}
                    <mask id="signature-stroke-reveal-mask" maskUnits="userSpaceOnUse">
                      <g filter="url(#smooth-ink-feather)">
                        {/* 1. Capital 'F': Top flourish, stem down, and loop */}
                        <motion.path
                          d="M 36 36 C 48 32, 64 34, 78 36 M 54 35 C 52 52, 48 72, 46 88 C 45 93, 41 93, 38 88 C 40 80, 48 62, 54 60 L 74 60"
                          fill="none"
                          stroke="white"
                          strokeWidth="36"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.20,
                            delay: 0.06,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />

                        {/* 2. Seamless continuous cursive body 'erasat' */}
                        <motion.path
                          d="M 74 64 
                             C 82 56, 92 56, 96 66 C 98 76, 88 82, 84 78 
                             C 90 80, 100 76, 106 68 C 110 62, 118 64, 122 70 C 124 76, 122 82, 126 82 
                             C 130 80, 136 72, 138 66 C 142 60, 150 62, 148 72 C 146 80, 136 82, 134 76 
                             C 138 82, 148 82, 156 76 C 160 70, 166 64, 172 68 C 176 72, 172 80, 168 82 
                             C 172 82, 180 80, 186 74 C 190 68, 196 64, 200 72 C 202 80, 194 82, 190 78 
                             C 194 82, 202 82, 208 76 C 212 70, 214 50, 214 44 C 214 54, 212 72, 214 80 C 216 84, 222 84, 226 80"
                          fill="none"
                          stroke="white"
                          strokeWidth="38"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.38,
                            delay: 0.18,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                        />

                        {/* 3. 't' crossbar */}
                        <motion.path
                          d="M 202 58 Q 215 57 228 58"
                          fill="none"
                          stroke="white"
                          strokeWidth="28"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.08,
                            delay: 0.52,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />

                        {/* 4. Capital 'A': Uppercase cursive loop and transition into 'y' */}
                        <motion.path
                          d="M 242 80 C 238 64, 244 46, 256 34 C 266 26, 276 34, 272 52 C 268 70, 252 84, 244 78 C 238 74, 240 62, 252 58 C 264 54, 272 70, 280 78"
                          fill="none"
                          stroke="white"
                          strokeWidth="38"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.18,
                            delay: 0.58,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />

                        {/* 5. Seamless continuous cursive body 'yesha' */}
                        <motion.path
                          d="M 280 68 
                             C 284 62, 292 64, 294 72 C 296 78, 302 80, 306 68 
                             C 308 62, 308 70, 306 82 C 302 98, 296 114, 290 112 C 284 110, 292 96, 302 82 
                             C 308 74, 316 64, 322 72 C 326 80, 320 84, 316 80 
                             C 320 82, 328 80, 334 72 C 338 66, 344 66, 346 72 C 348 80, 342 82, 338 80 
                             C 342 82, 348 82, 354 74 C 358 66, 362 46, 364 36 C 364 46, 362 68, 362 80 C 364 84, 370 72, 374 68 C 378 64, 384 70, 382 78 C 382 82, 386 82, 390 76 
                             C 394 68, 400 64, 404 72 C 406 80, 400 82, 396 78 C 400 82, 410 82, 422 76"
                          fill="none"
                          stroke="white"
                          strokeWidth="38"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.34,
                            delay: 0.72,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                        />
                      </g>
                    </mask>
                  </defs>

                  {/* Masked Caveat text element: The exact script font from the About page */}
                  <g mask="url(#signature-stroke-reveal-mask)">
                    <text
                      x="38"
                      y="82"
                      className="font-script select-none"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '62px',
                        fontWeight: 600,
                        fill: '#39668d',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Ferasat Ayesha
                    </text>
                  </g>

                  {/* Elegant underline flourish stroke beneath the signature */}
                  <motion.path
                    d="M 136 98 C 210 104, 310 104, 412 91 C 420 90, 426 88, 430 86"
                    fill="none"
                    stroke="#39668d"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{
                      duration: 0.18,
                      delay: 0.98,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </svg>
              )}
            </div>

            {/* Subtitle tag line underneath the signature, gently appearing as writing finishes */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 1.08, ease: 'easeOut' }}
              className="mt-1 text-center"
            >
              <p
                id="initial-loader-tagline"
                className="text-[11px] sm:text-xs font-sans tracking-[0.20em] uppercase text-slate-500 font-medium select-none"
              >
                Clinical Psychologist &amp; Psychology Lecturer
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

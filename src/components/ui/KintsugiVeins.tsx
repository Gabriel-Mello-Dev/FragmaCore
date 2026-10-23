"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Veios de kintsugi revelados pelo scroll. Ficam atrás do conteúdo, usam
 * apenas stroke-dashoffset e um único listener passivo com rAF.
 */
export function KintsugiVeins() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const paths = Array.from(
      root.querySelectorAll<SVGPathElement>("[data-vein]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let furthestProgress = reducedMotion.matches ? 1 : 0.04;
    let frame = 0;

    const paint = () => {
      frame = 0;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        reducedMotion.matches || maxScroll <= 0
          ? 1
          : Math.min(1, Math.max(0, window.scrollY / maxScroll));

      furthestProgress = Math.max(furthestProgress, scrollProgress);

      paths.forEach((path, index) => {
        const stagger = index * 0.055;
        const localProgress = Math.min(
          1,
          Math.max(0, (furthestProgress - stagger) / (1 - stagger)),
        );
        path.style.strokeDashoffset = String(1 - localProgress);
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const onMotionChange = () => {
      if (reducedMotion.matches) furthestProgress = 1;
      schedule();
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", onMotionChange);
    } else {
      reducedMotion.addListener(onMotionChange);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (typeof reducedMotion.removeEventListener === "function") {
        reducedMotion.removeEventListener("change", onMotionChange);
      } else {
        reducedMotion.removeListener(onMotionChange);
      }
    };
  }, [pathname]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70 print:hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        <g
          stroke="#C8A04C"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.5"
            d="M-2 14 L7 20 L4 30 L13 37"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.34"
            d="M7 20 L15 17 M4 30 L-1 33"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.46"
            d="M102 8 L93 15 L97 24 L88 29"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.32"
            d="M93 15 L86 12 M97 24 L103 27"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.42"
            d="M-2 74 L10 69 L14 78 L24 74"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.44"
            d="M102 86 L91 80 L95 91 L83 95"
          />
          <path
            data-vein
            pathLength={1}
            className="kintsugi-vein"
            strokeOpacity="0.3"
            d="M36 102 L40 94 L47 96 L51 89"
          />
        </g>
      </svg>
    </div>
  );
}

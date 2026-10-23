"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export function HeroVisual() {
  const isMobile = useIsMobile();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (isMobile || reduceMotion) {
    return (
      <div className="relative mx-auto mt-8 h-[220px] w-full max-w-[320px] sm:h-[260px] sm:max-w-[360px] md:mt-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        >
          <div className="relative h-[180px] w-[180px] sm:h-[210px] sm:w-[210px]">
            <div className="absolute inset-0 rounded-full border border-line/80" />
            <div className="absolute inset-[10%] rounded-full border border-kin/40" />
            <div className="absolute inset-[24%] rounded-full border border-line/60" />
            <div className="absolute left-1/2 top-[6%] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-kin/70" />
            <div className="absolute bottom-[10%] right-[18%] h-[4px] w-[4px] rounded-full bg-kin-soft/70" />
            <div className="absolute left-[16%] top-[46%] h-[4px] w-[4px] rounded-full bg-bone/40" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-0 w-full max-w-[520px]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <HeroScene active={true} />
      </div>
    </div>
  );
}

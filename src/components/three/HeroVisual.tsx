
"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});


export function HeroVisual() {
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

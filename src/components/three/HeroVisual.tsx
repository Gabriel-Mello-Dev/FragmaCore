"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
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

  // Mobile ou preferência por movimento reduzido:
  // não exibe a esfera nem inicializa a cena 3D.
  if (isMobile || reduceMotion) {
    return null;
  }

  return (
    <div className="relative mx-auto h-0 w-full max-w-[520px]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <HeroScene active={true} />
      </div>
    </div>
  );
}

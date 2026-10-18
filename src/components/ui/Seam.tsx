"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Linha de reparo decorativa: um fio dourado com nós, desenhado ao entrar na tela. */
export function Seam({ className, immediate = false }: { className?: string; immediate?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(immediate);

  useEffect(() => {
    if (immediate || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 40"
      className={cn("h-8 w-full", on && "seam-on", immediate && "hero-seam", className)}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
    >
      <path className="seam" pathLength={1} d="M0 20H260L300 8L360 32L420 20H700L740 30L790 12L840 20H1200" stroke="#C8A04C" strokeWidth="1.25" />
      {[300, 360, 790].map((x, i) => (
        <rect key={x} x={x - 3} y={[5, 29, 9][i]} width="6" height="6" transform={`rotate(45 ${x} ${[8, 32, 12][i]})`} fill="#0C0B0A" stroke="#C8A04C" strokeWidth="1.25" />
      ))}
    </svg>
  );
}

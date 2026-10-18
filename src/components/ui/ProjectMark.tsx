/** Marca geométrica gerada a partir do slug do projeto (rede de pontos ligados por fios). */
function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  h = h || 1;
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 1000) / 1000;
  };
}

export function ProjectMark({ seed }: { seed: string }) {
  const r = rng(seed);
  const pts = Array.from({ length: 8 }, () => [Math.round(20 + r() * 360), Math.round(16 + r() * 128)] as const).sort((a, b) => a[0] - b[0]);
  return (
    <svg viewBox="0 0 400 160" className="h-full w-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <polyline points={pts.map((p) => p.join(",")).join(" ")} stroke="#C8A04C" strokeWidth="1.25" />
      {pts.map(([x, y], i) => (i % 3 === 0 && i + 3 < pts.length ? <line key={`l${i}`} x1={x} y1={y} x2={pts[i + 3][0]} y2={pts[i + 3][1]} stroke="#3E8E84" strokeWidth="1" /> : null))}
      {pts.map(([x, y], i) => (
        <rect key={i} x={x - 3} y={y - 3} width="6" height="6" transform={`rotate(45 ${x} ${y})`} fill="#0C0B0A" stroke="#C8A04C" strokeWidth="1.25" />
      ))}
    </svg>
  );
}

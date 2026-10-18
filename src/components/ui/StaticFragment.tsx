/** Alternativa estática ao 3D (reduced-motion, sem WebGL ou dispositivos modestos). */
const pt = (cx: number, cy: number, r: number, deg: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [Math.round((cx + r * Math.cos(a)) * 10) / 10, Math.round((cy + r * Math.sin(a)) * 10) / 10];
};
const C: [number, number] = [200, 200];
const O = Array.from({ length: 6 }, (_, i) => pt(200, 200, 150, i * 60 - 90));
const I = Array.from({ length: 6 }, (_, i) => pt(200, 200, 72, i * 60 - 60));
const s = (p: [number, number][]) => p.map((q) => q.join(",")).join(" ");

export function StaticFragment({ className }: { className?: string }) {
  const faces: { pts: [number, number][]; fill: string }[] = [];
  for (let i = 0; i < 6; i++) {
    const n = (i + 1) % 6;
    faces.push({ pts: [O[i], O[n], I[i]], fill: i % 2 ? "#1B1916" : "#161513" });
    faces.push({ pts: [I[i], I[n], O[n]], fill: i % 2 ? "#161513" : "#201D19" });
    faces.push({ pts: [C, I[i], I[n]], fill: i % 3 === 0 ? "#201D19" : "#161513" });
  }
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" role="img" aria-label="Estrutura geométrica fragmentada, unida por linhas douradas">
      {faces.map((f, i) => (
        <polygon key={i} points={s(f.pts)} fill={f.fill} stroke="#C8A04C" strokeOpacity=".5" strokeWidth="1" strokeLinejoin="round" />
      ))}
      <path d={`M${O[0]} L${I[0]} L${C} L${I[3]} L${O[3]}`} stroke="#C8A04C" strokeWidth="2" />
      <path d={`M${I[2]} L${O[2]}`} stroke="#3E8E84" strokeWidth="1.5" />
    </svg>
  );
}

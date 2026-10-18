export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 25V8h11M10 16h8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M31 5 21 14l4 4-13 13" stroke="#C8A04C" strokeWidth="1.5" />
    </svg>
  );
}

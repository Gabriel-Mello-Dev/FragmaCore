"use client";
export function ServiceCTA({ id, label }: { id: string; label: string }) {
  return (
    <a
      href="#contato"
      onClick={() => window.dispatchEvent(new CustomEvent("fc:service", { detail: id }))}
      className="mt-6 inline-block text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 transition-colors hover:text-kin-soft hover:decoration-kin-soft"
    >
      {label}
    </a>
  );
}

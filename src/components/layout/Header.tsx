"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-obsidian">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Fragma Core, página inicial"
        >
          <img
            src="/images/fragma.png"
            alt="Fragma Core"
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Fragma Core
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative py-1 text-sm text-ash transition-colors hover:text-bone"
            >
              {n.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-kin transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link href="/#contato" className="btn btn-solid !py-2 text-sm">
            Pedir diagnóstico
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line text-bone md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (mobile)"
        hidden={!open}
        className="border-t border-line bg-obsidian md:hidden"
      >
        <ul className="wrap flex flex-col py-3">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-bone"
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/#contato"
              onClick={() => setOpen(false)}
              className="btn btn-solid w-full"
            >
              Pedir diagnóstico
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

export type ProfileNavItem = {
  id: string;
  label: string;
};

export function ProfileNav({ items }: { items: ProfileNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const ids = items.map((item) => item.id).join("|");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, items]);

  return (
    <nav
      aria-label="Neste perfil"
      className="sticky top-16 z-30 border-b border-line bg-obsidian/95 backdrop-blur"
    >
      <div className="wrap flex gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const current = active === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={current ? "location" : undefined}
              className={`inline-flex min-h-11 shrink-0 items-center border-b-2 px-3 text-sm transition-colors ${
                current
                  ? "border-kin text-bone"
                  : "border-transparent text-ash hover:text-bone"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

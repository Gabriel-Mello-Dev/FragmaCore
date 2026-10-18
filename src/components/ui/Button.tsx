import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  variant?: "solid" | "line";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ href, variant = "solid", children, className, type = "button", onClick, disabled }: Props) {
  const cls = cn("btn", variant === "solid" ? "btn-solid" : "btn-line", className);
  if (href) {
    const external = /^(https?:|mailto:)/.test(href);
    return external ? (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

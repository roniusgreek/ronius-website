"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type TrackedEvent } from "@/lib/gtag";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline";
  className?: string;
  trackAs?: TrackedEvent;
  trackParams?: Record<string, unknown>;
  external?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "gold",
  className = "",
  trackAs,
  trackParams,
  external = false,
}: Props) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-lg px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300";
  const variants = {
    gold: "bg-gold text-ink hover:bg-gold/90",
    outline:
      "border border-white/60 text-white hover:bg-white hover:text-navy",
  };

  const handleClick = () => {
    if (trackAs) trackEvent(trackAs, trackParams);
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

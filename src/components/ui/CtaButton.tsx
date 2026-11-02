"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type TrackedEvent } from "@/lib/gtag";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "whatsapp";
  icon?: ReactNode;
  className?: string;
  trackAs?: TrackedEvent;
  trackParams?: Record<string, unknown>;
  external?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "gold",
  icon,
  className = "",
  trackAs,
  trackParams,
  external = false,
}: Props) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300";
  const variants = {
    gold: "bg-gold text-ink hover:bg-gold/90",
    outline:
      "border border-white/60 text-white hover:bg-white hover:text-navy",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
  };

  const handleClick = () => {
    if (trackAs) trackEvent(trackAs, trackParams);
  };

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type TrackedEvent } from "@/lib/gtag";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "outline-navy" | "whatsapp";
  size?: "md" | "lg";
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
  size = "md",
  icon,
  className = "",
  trackAs,
  trackParams,
  external = false,
}: Props) {
  const sizes = {
    md: "min-h-[44px] px-7 py-3 text-sm",
    lg: "min-h-[44px] px-7 py-3 text-sm sm:min-h-[56px] sm:px-9 sm:py-4 sm:text-lg",
  };
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-300 ${sizes[size]}`;
  const variants = {
    gold: "bg-gold text-ink hover:bg-gold/90",
    outline:
      "border border-white/60 text-white hover:bg-white hover:text-navy",
    "outline-navy":
      "border border-navy/50 text-navy hover:bg-navy hover:text-white",
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

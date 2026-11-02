"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/site";
import { buildWaLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/gtag";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="רוניוס חג'ידאקיס - זמר יווני ונגן בוזוקי"
            width={160}
            height={64}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWaLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "header" })}
          className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#20bd5a] sm:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          דברו איתנו בוואטסאפ
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="פתיחת תפריט"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md sm:hidden"
        >
          <span className="sr-only">תפריט</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="block h-0.5 w-6 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-white px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", { location: "header-mobile" });
                  setOpen(false);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                דברו איתנו בוואטסאפ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

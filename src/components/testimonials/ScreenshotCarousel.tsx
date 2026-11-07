"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { screenshotTestimonials } from "@/data/testimonials";

export default function ScreenshotCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCards(direction: "prev" | "next") {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 300;
    // RTL: "הבא" (ימינה בתוכן) זז בכיוון שלילי בציר ה-scrollLeft.
    const delta = direction === "next" ? -cardWidth - 16 : cardWidth + 16;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1"
      >
        {screenshotTestimonials.map((item, i) => (
          <div
            key={item.id}
            className="relative h-[340px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-xl bg-white p-3 shadow-sm ring-1 ring-ink/5 sm:h-[400px] sm:w-[300px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="300px"
              className="object-contain p-2"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCards("prev")}
        aria-label="ההמלצה הקודמת"
        className="absolute right-[-12px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards("next")}
        aria-label="ההמלצה הבאה"
        className="absolute left-[-12px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
    </div>
  );
}

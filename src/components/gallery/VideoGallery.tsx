"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "@/components/gallery/VideoCard";
import type { PerformanceVideo } from "@/data/videos";

type Props = {
  videos: PerformanceVideo[];
  variant: "carousel" | "grid";
};

export default function VideoGallery({ videos, variant }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const showArrows = variant === "carousel" && videos.length > 1;

  function scrollByCards(direction: "prev" | "next") {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 280;
    // RTL: "הבא" (ימינה בתוכן) זז בכיוון שלילי בציר ה-scrollLeft.
    const delta = direction === "next" ? -cardWidth - 16 : cardWidth + 16;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }

  if (variant === "grid") {
    return (
      <div
        className={`grid gap-5 ${
          videos.length === 1
            ? "mx-auto max-w-xs grid-cols-1"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className={`scrollbar-none flex gap-4 overflow-x-auto scroll-smooth px-1 snap-x snap-mandatory ${
          videos.length === 1 ? "justify-center" : ""
        }`}
      >
        {videos.map((video) => (
          <div key={video.id} className="w-[220px] flex-shrink-0 snap-center sm:w-[260px]">
            <VideoCard video={video} />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            onClick={() => scrollByCards("prev")}
            aria-label="הסרטון הקודם"
            className="absolute right-[-12px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("next")}
            aria-label="הסרטון הבא"
            className="absolute left-[-12px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}

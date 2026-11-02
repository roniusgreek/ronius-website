"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { trackEvent } from "@/lib/gtag";
import type { PerformanceVideo } from "@/data/videos";

// רפרנס משותף למודול: עוצר סרטון קודם כשמתחיל סרטון חדש, בלי Context.
let activeVideo: HTMLVideoElement | null = null;

export default function VideoCard({ video }: { video: PerformanceVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const firedRef = useRef(false);

  function handlePlay() {
    const current = videoRef.current;
    if (!current) return;
    if (activeVideo && activeVideo !== current) {
      activeVideo.pause();
    }
    activeVideo = current;

    if (!firedRef.current) {
      firedRef.current = true;
      trackEvent("video_play", { video_id: video.id });
    }
  }

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-ink">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          onPlay={handlePlay}
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`נגן את הסרטון: ${video.title}`}
          className="group relative block h-full w-full"
        >
          <Image
            src={video.poster}
            alt={video.title}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 70vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform group-hover:scale-105">
              <Play className="h-7 w-7 translate-x-[-2px] fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

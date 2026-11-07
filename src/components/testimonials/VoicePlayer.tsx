"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { trackEvent } from "@/lib/gtag";
import type { VoiceTestimonial } from "@/data/testimonials";

// רפרנס משותף למודול: עוצר הודעה קולית קודמת כשמתחילה הודעה חדשה, בלי Context.
let activeAudio: HTMLAudioElement | null = null;

// גובהי עמודות קבועים ליצירת מראה גלי-קול דקורטיבי (לא מבוסס על נתוני האודיו בפועל).
const BAR_HEIGHTS = [
  6, 12, 18, 10, 20, 14, 24, 16, 8, 22, 12, 18, 26, 14, 10, 20, 16, 24, 8, 18,
  12, 22, 14, 10, 20, 16, 6, 24, 12, 18,
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VoicePlayer({ voice }: { voice: VoiceTestimonial }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const firedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setElapsed(audio.currentTime);
    const onEnd = () => {
      setIsPlaying(false);
      setElapsed(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (activeAudio && activeAudio !== audio) {
      activeAudio.pause();
    }
    activeAudio = audio;
    audio.play();
    setIsPlaying(true);

    if (!firedRef.current) {
      firedRef.current = true;
      trackEvent("audio_play", { testimonial_id: voice.id });
    }
  }

  const progressRatio =
    voice.durationSeconds > 0
      ? Math.min(elapsed / voice.durationSeconds, 1)
      : 0;
  const activeBars = Math.round(progressRatio * BAR_HEIGHTS.length);

  return (
    <div
      dir="ltr"
      className="flex items-center gap-3 rounded-2xl bg-[#dcf8c6] px-4 py-3 shadow-sm"
    >
      <audio ref={audioRef} src={voice.src} preload="none" />

      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "השהה את ההמלצה הקולית" : "נגן את ההמלצה הקולית"}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-transform hover:scale-105"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 fill-current" />
        ) : (
          <Play className="h-5 w-5 translate-x-[1px] fill-current" />
        )}
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-[3px]" aria-hidden>
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className={`w-[3px] shrink-0 rounded-full transition-colors ${
              i < activeBars ? "bg-navy" : "bg-navy/30"
            }`}
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <span className="shrink-0 text-xs text-ink/60">
        {isPlaying ? formatTime(elapsed) : voice.durationLabel}
      </span>
    </div>
  );
}

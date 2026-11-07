import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { screenshotTestimonials } from "@/data/testimonials";

export default function ScreenshotWall() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {screenshotTestimonials.map((item, i) => (
        <Reveal
          key={item.id}
          delay={(i % 3) * 0.08}
          className="mb-4 break-inside-avoid"
        >
          <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-ink/5">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
              className="h-auto w-full"
              priority={i === 0}
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import { performances, seo } from "@/content/copy";
import { videos } from "@/data/videos";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import VideoGallery from "@/components/gallery/VideoGallery";

export const metadata: Metadata = {
  title: seo.performances.title,
  description: seo.performances.description,
  alternates: { canonical: "/performances/" },
};

export default function PerformancesPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{performances.title}</h1>
          <p className="font-heading italic mt-3 text-gold text-lg">{performances.subtitle}</p>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            {performances.intro}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <VideoGallery videos={videos} variant="grid" />
        </Reveal>

        <Reveal delay={0.2} className="mt-16 text-center">
          <p className="text-lg font-medium text-ink">{performances.bottomNote}</p>
          <div className="mt-6">
            <CtaButton href="/contact/" variant="gold">
              {performances.cta}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

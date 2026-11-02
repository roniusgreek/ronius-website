import { home } from "@/content/copy";
import { videos } from "@/data/videos";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import VideoGallery from "@/components/gallery/VideoGallery";

export default function PerformanceReelsPreview() {
  const { reels } = home;

  return (
    <section className="bg-navy py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading heading={reels.heading} paragraph={reels.paragraph} light />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <VideoGallery videos={videos.slice(0, 4)} variant="carousel" />
        </Reveal>

        <div className="mt-10 text-center">
          <CtaButton href="/performances/" variant="outline">
            {reels.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

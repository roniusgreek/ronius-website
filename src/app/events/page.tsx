import type { Metadata } from "next";
import { events, seo } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import VideoCard from "@/components/gallery/VideoCard";

export const metadata: Metadata = {
  title: seo.events.title,
  description: seo.events.description,
  alternates: { canonical: "/events/" },
};

export default function EventsPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{events.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">{events.intro}</p>
        </Reveal>

        <div className="mt-16 divide-y divide-ink/10">
          {events.categories.map((category, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={category.title}
                className={`grid grid-cols-1 items-center gap-10 py-12 first:pt-0 last:pb-0 md:grid-cols-2 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal from="start" className="mx-auto w-full max-w-[280px]">
                  <VideoCard video={{ id: category.title, ...category.video, title: category.title }} />
                </Reveal>

                <Reveal delay={0.1} className="text-center md:text-right">
                  <h2 className="text-2xl font-bold text-ink sm:text-3xl">{category.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
                    {category.description}
                  </p>
                  <div className="mt-6">
                    <CtaButton href="/contact/" variant="gold">
                      {events.cta}
                    </CtaButton>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { about, seo } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{about.title}</h1>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Reveal from="start" className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/hero-ronius.jpg"
              alt="רוניוס חג'ידאקיס מנגן בוזוקי"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.15} className="order-2 text-center md:text-right">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{about.intro.heading}</h2>
            <div className="mt-4 space-y-4">
              {about.intro.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-[720px] space-y-10 text-center md:text-right">
          {about.sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.2)}>
              <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-ink/70">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{about.closing.heading}</h2>
          {about.closing.body.map((p) => (
            <p key={p} className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href="/performances/" variant="outline-navy">
              {about.ctaVideos}
            </CtaButton>
            <CtaButton href="/contact/" variant="gold">
              {about.ctaBooking}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

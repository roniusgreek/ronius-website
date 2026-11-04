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
          <p className="font-heading italic mt-3 text-gold text-lg">{about.subtitle}</p>
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

          <Reveal delay={0.15} className="order-2 space-y-5 text-center md:text-right">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{about.closingHeading}</h2>
          <div className="mt-6">
            <CtaButton href="/contact/" variant="gold">
              {about.cta}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

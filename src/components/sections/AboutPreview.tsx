import Image from "next/image";
import { home } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";

export default function AboutPreview() {
  const { aboutPreview } = home;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <Reveal from="start" className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/about-ronius.jpg"
            alt="רוניוס חג'ידאקיס מנגן בוזוקי"
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="order-2 text-center md:text-right">
          <p dir="ltr" className="font-heading italic text-gold mb-2 text-lg">{aboutPreview.eyebrow}</p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{aboutPreview.heading}</h2>
          <div className="mt-5 space-y-4">
            {aboutPreview.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/about/" variant="gold">
              {aboutPreview.cta}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

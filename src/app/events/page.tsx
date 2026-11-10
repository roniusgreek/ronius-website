import type { Metadata } from "next";
import Image from "next/image";
import { events, seo } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";

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

        <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label="ניווט בין סוגי אירועים">
          {events.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              {category.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 divide-y divide-ink/10">
          {events.categories.map((category, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={category.id} id={category.id} className="scroll-mt-24 py-14 first:pt-0 last:pb-0">
                <div
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal from="start" className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-xl">
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      sizes="(min-width: 768px) 320px, 80vw"
                      className="object-cover"
                    />
                  </Reveal>

                  <Reveal delay={0.1} className="text-right">
                    <h2 className="text-2xl font-bold text-ink sm:text-3xl">{category.heading}</h2>
                    {category.intro?.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </Reveal>
                </div>

                <Reveal delay={0.15} className="mx-auto mt-10 max-w-[720px] space-y-8 text-right">
                  {category.sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-lg font-bold text-ink sm:text-xl">{section.heading}</h3>
                      <div className="mt-3 space-y-3">
                        {section.blocks.map((block, bi) =>
                          block.type === "p" ? (
                            <p key={bi} className="text-base leading-relaxed text-ink/70">
                              {block.text}
                            </p>
                          ) : (
                            <ul key={bi} className="list-disc space-y-1 pr-5 text-base leading-relaxed text-ink/70">
                              {block.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ),
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="text-center">
                    <CtaButton href="/contact/" variant="gold">
                      {category.cta}
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

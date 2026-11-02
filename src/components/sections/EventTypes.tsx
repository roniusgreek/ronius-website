import Image from "next/image";
import { home } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

// תמונות אמיתיות מתוך הופעות של רוניוס (פריימים מהסרטונים), לפי האפיון המקורי שביקש תמונה ולא אייקון.
const images = [
  "/videos/performance-06-poster.jpg",
  "/videos/performance-01-poster.jpg",
  "/videos/performance-02-poster.jpg",
  "/videos/performance-04-poster.jpg",
];

export default function EventTypes() {
  const { eventTypes } = home;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading heading={eventTypes.heading} paragraph={eventTypes.paragraph} />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {eventTypes.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={images[i]}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 280px, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-semibold text-ink sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

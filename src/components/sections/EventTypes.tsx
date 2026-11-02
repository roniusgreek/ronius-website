import { Heart, Cake, Briefcase, PartyPopper } from "lucide-react";
import { home } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Heart, Cake, Briefcase, PartyPopper];

export default function EventTypes() {
  const { eventTypes } = home;

  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading heading={eventTypes.heading} paragraph={eventTypes.paragraph} />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {eventTypes.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </span>
                  <h3 className="text-base font-semibold text-ink sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

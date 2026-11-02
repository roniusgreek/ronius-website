import { Music, Guitar, Wine, PartyPopper } from "lucide-react";
import { home } from "@/content/copy";
import Reveal from "@/components/ui/Reveal";

const icons = [Music, Guitar, Wine, PartyPopper];

export default function Highlights() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-10 px-4 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-x-reverse sm:divide-ink/10 sm:px-6">
        {home.highlights.map((label, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={label} delay={i * 0.08} className="flex flex-col items-center gap-3 text-center sm:px-4">
              <Icon strokeWidth={1.5} className="h-9 w-9 text-navy" />
              <p className="text-sm font-medium text-ink sm:text-base">{label}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";

type Props = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  contactNote: string;
};

export default function LegalSections({ title, updated, intro, sections, contactNote }: Props) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6">
        <Reveal className="text-center">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-ink/50">{updated}</p>
          <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">{intro}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.3)} className="text-right">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-ink/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 rounded-xl bg-navy/5 px-6 py-5 text-center">
          <p className="text-base text-ink/80">{contactNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

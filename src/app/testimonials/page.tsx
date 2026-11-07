import type { Metadata } from "next";
import { testimonials, seo } from "@/content/copy";
import { voiceTestimonials } from "@/data/testimonials";
import { buildWaLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";
import ScreenshotWall from "@/components/testimonials/ScreenshotWall";
import VoicePlayer from "@/components/testimonials/VoicePlayer";

export const metadata: Metadata = {
  title: seo.testimonials.title,
  description: seo.testimonials.description,
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-ink sm:text-4xl">
              {testimonials.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              {testimonials.subtitle}
            </p>
          </Reveal>

          <div className="mt-14">
            <ScreenshotWall />
          </div>

          <Reveal className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-heading italic text-gold text-lg">
              {testimonials.audioLabel}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {voiceTestimonials.map((voice, i) => (
                <Reveal key={voice.id} delay={i * 0.08}>
                  <VoicePlayer voice={voice} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-14 text-center sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {testimonials.closingHeading}
            </h2>
            <div className="mt-6">
              <CtaButton
                href={buildWaLink()}
                external
                variant="whatsapp"
                icon={<WhatsAppIcon className="h-5 w-5" />}
                trackAs="whatsapp_click"
                trackParams={{ location: "testimonials" }}
              >
                {testimonials.cta}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

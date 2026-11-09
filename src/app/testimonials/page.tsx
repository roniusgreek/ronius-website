import type { Metadata } from "next";
import { testimonials, seo } from "@/content/copy";
import { buildWaLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";
import ScreenshotCarousel from "@/components/testimonials/ScreenshotCarousel";

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
            <h2 className="mt-4 text-lg font-bold text-ink sm:text-xl">
              {testimonials.intro.heading}
            </h2>
            <div className="mt-2 space-y-2">
              {testimonials.intro.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink/70 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <p className="text-center font-heading italic text-gold text-lg">
              {testimonials.carouselLabel}
            </p>
            <div className="mt-6">
              <ScreenshotCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-14 text-center sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {testimonials.closing.heading}
            </h2>
            {testimonials.closing.body.map((p) => (
              <p key={p} className="mt-3 text-base text-white/80 sm:text-lg">
                {p}
              </p>
            ))}
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

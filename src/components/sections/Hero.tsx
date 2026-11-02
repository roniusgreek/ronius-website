import Image from "next/image";
import { Mail } from "lucide-react";
import { home } from "@/content/copy";
import { buildWaLink } from "@/lib/whatsapp";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";

export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-[#0c3a6e]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24">
        <Reveal from="start" className="relative order-1 aspect-[3/4] w-full overflow-hidden rounded-xl md:order-1">
          <Image
            src="/images/hero-ronius.jpg"
            alt="רוניוס חג'ידאקיס מנגן בוזוקי על במה"
            fill
            priority
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="order-2 text-center md:order-2 md:text-right">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{hero.title}</h1>
          <p className="mt-3 text-lg text-white/85 sm:text-xl">{hero.subtitle}</p>
          <p dir="ltr" className="font-heading italic mt-2 text-gold text-lg">{hero.tagline}</p>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.paragraph}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <CtaButton
              href={buildWaLink()}
              external
              variant="whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
              trackAs="whatsapp_click"
              trackParams={{ location: "hero" }}
            >
              {hero.ctaWhatsapp}
            </CtaButton>
            <CtaButton href="/contact/" variant="gold" icon={<Mail className="h-4 w-4" />}>
              {hero.ctaForm}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
    <section className="relative aspect-[941/1672] overflow-hidden sm:aspect-[1672/941]">
      <Image
        src="/images/hero-bg-mobile.webp"
        alt="רוניוס חג'ידאקיס מנגן בוזוקי באירוע"
        fill
        priority
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <Image
        src="/images/hero-bg-desktop.webp"
        alt="רוניוס חג'ידאקיס מנגן בוזוקי באירוע"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover sm:block"
      />

      {/* גרדיאנט עדין בחלק העליון בנייד, כדי שהטקסט יהיה קריא בלי להסתיר את רוניוס */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black/45 to-transparent sm:hidden" />

      <div className="relative mx-auto h-full max-w-[1200px] px-4 sm:px-6">
        <div className="flex h-full flex-col items-center pt-4 text-center sm:ml-auto sm:max-w-[520px] sm:items-stretch sm:justify-center sm:pt-0 sm:text-right">
          <Reveal>
            <Image
              src="/images/logo.png"
              alt="רוניוס חג'ידאקיס"
              width={170}
              height={68}
              className="mx-auto h-9 w-auto brightness-0 invert sm:mx-0 sm:h-16"
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-2 sm:mt-6">
            <h1 className="text-2xl font-bold text-white sm:text-5xl">{hero.title}</h1>
            <p className="mt-1 text-sm text-white/90 sm:mt-3 sm:text-xl">{hero.subtitle}</p>
            <p dir="ltr" className="mt-1 font-heading italic text-gold text-sm sm:mt-2 sm:text-lg">
              {hero.tagline}
            </p>
            <p className="mt-4 hidden text-base leading-relaxed text-white/85 sm:block sm:text-lg">
              {hero.paragraph}
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-2 flex flex-col items-center gap-2 sm:mt-8 sm:flex-row sm:justify-start"
          >
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

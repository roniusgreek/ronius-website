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

      <div className="relative mx-auto h-full max-w-[1320px] px-4 sm:px-6">
        <div className="flex h-full flex-col justify-between py-6 text-center sm:ml-auto sm:max-w-[640px] sm:items-stretch sm:justify-center sm:py-0 sm:text-right">
          <div>
            <Reveal>
              <Image
                src="/images/logo.png"
                alt="רוניוס חג'ידאקיס"
                width={170}
                height={68}
                className="mx-auto h-20 w-auto brightness-0 invert sm:mx-0 sm:h-28"
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-3 sm:mt-5">
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">{hero.title}</h1>
              <p className="mt-2 text-xl text-white/90 sm:mt-3 sm:text-2xl">{hero.subtitle}</p>
              <div className="mt-2 sm:mt-4">
                <p dir="ltr" className="font-heading italic text-gold text-3xl sm:text-4xl">
                  {hero.tagline}
                </p>
                <svg viewBox="0 0 220 14" className="mx-auto mt-1 block h-3 w-28 text-gold sm:ml-auto sm:mr-0 sm:w-40" fill="none">
                  <path
                    d="M2 8C40 2 90 2 110 7C130 12 180 12 218 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-4 text-lg text-white/90 sm:hidden">{hero.paragraphShort}</p>
              <p className="mt-4 hidden text-base leading-relaxed text-white/85 sm:block sm:ml-auto sm:max-w-[440px] sm:text-lg">
                {hero.paragraph}
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-10 sm:flex-nowrap sm:justify-start sm:gap-4"
          >
            <CtaButton
              href={buildWaLink()}
              external
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
              trackAs="whatsapp_click"
              trackParams={{ location: "hero" }}
            >
              {hero.ctaWhatsapp}
            </CtaButton>
            <CtaButton
              href="/contact/"
              variant="gold"
              size="lg"
              icon={<Mail className="h-4 w-4 sm:h-5 sm:w-5" />}
            >
              {hero.ctaForm}
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

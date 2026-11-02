import Image from "next/image";
import { home } from "@/content/copy";
import { buildWaLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactCta() {
  const { contactCta } = home;

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-24">
      <Image
        src="/images/hero-ronius.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-20 blur-sm"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
        <Reveal>
          <p dir="ltr" className="font-heading italic text-gold mb-2 text-lg">{contactCta.tagline}</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{contactCta.heading}</h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">{contactCta.paragraph}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 text-right">
          <ContactForm variant="compact" theme="dark" />
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={buildWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-white/70 underline-offset-4 hover:text-gold hover:underline"
          >
            {contactCta.whatsappNote}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

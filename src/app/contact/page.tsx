import type { Metadata } from "next";
import { contact, seo } from "@/content/copy";
import { buildWaLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import CtaButton from "@/components/ui/CtaButton";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{contact.title}</h1>
          <h2 className="mt-3 text-xl font-bold text-ink">{contact.intro.heading}</h2>
          <div className="mt-2 space-y-2">
            {contact.intro.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink/70 sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <ContactForm variant="full" theme="light" />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="font-bold text-ink">{contact.whatsappHeading}</p>
          <p className="mt-1 text-sm text-ink/70">{contact.whatsappNote}</p>
          <div className="mt-4">
            <CtaButton
              href={buildWaLink()}
              external
              variant="whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
              trackAs="whatsapp_click"
              trackParams={{ location: "contact" }}
            >
              {contact.whatsappCta}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { contact, seo } from "@/content/copy";
import { buildWaLink } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";

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
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            {contact.intro}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <ContactForm variant="full" theme="light" />
        </Reveal>

        <Reveal delay={0.2} className="mt-8 text-center">
          <a
            href={buildWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/70 underline-offset-4 hover:text-navy hover:underline"
          >
            {contact.whatsappNote}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

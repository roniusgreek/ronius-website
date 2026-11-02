import type { Metadata } from "next";
import { seo } from "@/content/copy";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import PerformanceReelsPreview from "@/components/sections/PerformanceReelsPreview";
import EventTypes from "@/components/sections/EventTypes";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCta from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <PerformanceReelsPreview />
      <EventTypes />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
